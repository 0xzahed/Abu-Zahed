import React from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2, RotateCcw, Home, LogOut } from "lucide-react";
import { usePortfolioData } from "../../context/PortfolioDataContext";

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400";

const PanelCard = ({ title, children }) => (
  <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl shadow-black/20 sm:p-6">
    <h2 className="mb-4 text-lg font-bold text-white">{title}</h2>
    {children}
  </section>
);

const AdminPanel = ({ onLogout }) => {
  const { data, setData, updateSection, resetData } = usePortfolioData();
  const navItems = [
    { id: "section-header-contact", label: "Header & Contact" },
    { id: "section-projects", label: "Projects" },
    { id: "section-experience-footer", label: "Experience & Footer" },
    { id: "section-education", label: "Education" },
  ];

  const updateHeaderField = (key, value) => {
    updateSection("header", { ...data.header, [key]: value });
  };

  const updateHeaderSocial = (key, value) => {
    updateSection("header", {
      ...data.header,
      socialLinks: { ...data.header.socialLinks, [key]: value },
    });
  };

  const updateContactField = (key, value) => {
    updateSection("contact", { ...data.contact, [key]: value });
  };

  const updateContactSocial = (key, value) => {
    updateSection("contact", {
      ...data.contact,
      socialLinks: { ...data.contact.socialLinks, [key]: value },
    });
  };

  const updateFooterField = (key, value) => {
    updateSection("footer", { ...data.footer, [key]: value });
  };

  const updateFooterSocial = (key, value) => {
    updateSection("footer", {
      ...data.footer,
      socialLinks: { ...data.footer.socialLinks, [key]: value },
    });
  };

  const updateProject = (id, key, value) => {
    updateSection(
      "projects",
      data.projects.map((project) =>
        project.id === id ? { ...project, [key]: value } : project
      )
    );
  };

  const addProject = () => {
    updateSection("projects", [
      ...data.projects,
      {
        id: `p-${Date.now()}`,
        title: "New Project",
        subtitle: "Project Subtitle",
        description: "Project description",
        tags: ["React"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&h=460&fit=crop",
        github: "https://github.com/",
        live: "https://",
      },
    ]);
  };

  const removeProject = (id) => {
    updateSection(
      "projects",
      data.projects.filter((project) => project.id !== id)
    );
  };

  const updateExperienceField = (key, value) => {
    updateSection("experience", { ...data.experience, [key]: value });
  };

  const updateResponsibility = (index, value) => {
    const next = [...data.experience.responsibilities];
    next[index] = value;
    updateSection("experience", { ...data.experience, responsibilities: next });
  };

  const addResponsibility = () => {
    updateSection("experience", {
      ...data.experience,
      responsibilities: [...data.experience.responsibilities, "New responsibility"],
    });
  };

  const removeResponsibility = (index) => {
    updateSection("experience", {
      ...data.experience,
      responsibilities: data.experience.responsibilities.filter((_, i) => i !== index),
    });
  };

  const updateEducation = (id, key, value) => {
    updateSection(
      "education",
      data.education.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  const addEducation = () => {
    updateSection("education", [
      ...data.education,
      {
        id: `e-${Date.now()}`,
        degree: "New Degree",
        institution: "Institution",
        location: "Location",
        period: "Year",
        status: "Completed",
        description: "Details",
        icon: "🎯",
      },
    ]);
  };

  const removeEducation = (id) => {
    updateSection(
      "education",
      data.education.filter((item) => item.id !== id)
    );
  };

  const handleImport = (event) => {
    const [file] = event.target.files || [];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setData(parsed);
      } catch {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-950/85 p-5 shadow-xl shadow-black/30 lg:sticky lg:top-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Portfolio Admin</p>
          <h1 className="mt-2 text-xl font-black text-white">Sidebar Control</h1>
          <p className="mt-1 text-xs text-slate-400">All edits save instantly.</p>

          <nav className="mt-5 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 space-y-2 border-t border-slate-800 pt-4">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold hover:border-cyan-400"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <button
              onClick={handleExport}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold hover:border-emerald-400"
            >
              Export JSON
            </button>
            <label className="block cursor-pointer rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-center text-sm font-semibold hover:border-amber-400">
              Import JSON
              <input type="file" accept="application/json" className="hidden" onChange={handleImport} />
            </label>
            <button
              onClick={resetData}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-red-900/30 px-4 py-2 text-sm font-semibold text-red-200 hover:border-red-400"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            {onLogout ? (
              <button
                onClick={onLogout}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-amber-900/20 px-4 py-2 text-sm font-semibold text-amber-200 hover:border-amber-300"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : null}
          </div>
        </aside>

        <main className="space-y-6">
          <div id="section-header-contact" className="grid gap-6 lg:grid-cols-2 scroll-mt-6">
          <PanelCard title="Header">
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Availability Text</label>
                <input className={inputClass} value={data.header.availabilityText} onChange={(e) => updateHeaderField("availabilityText", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Name</label>
                <input className={inputClass} value={data.header.name} onChange={(e) => updateHeaderField("name", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Role</label>
                <input className={inputClass} value={data.header.role} onChange={(e) => updateHeaderField("role", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Description</label>
                <textarea className={inputClass} rows={4} value={data.header.description} onChange={(e) => updateHeaderField("description", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>GitHub</label>
                <input className={inputClass} value={data.header.socialLinks.github} onChange={(e) => updateHeaderSocial("github", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>LinkedIn</label>
                <input className={inputClass} value={data.header.socialLinks.linkedin} onChange={(e) => updateHeaderSocial("linkedin", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Email Link (mailto:)</label>
                <input className={inputClass} value={data.header.socialLinks.email} onChange={(e) => updateHeaderSocial("email", e.target.value)} />
              </div>
            </div>
          </PanelCard>

          <PanelCard title="Contact">
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Email</label>
                <input className={inputClass} value={data.contact.email} onChange={(e) => updateContactField("email", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input className={inputClass} value={data.contact.phone} onChange={(e) => updateContactField("phone", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Location</label>
                <input className={inputClass} value={data.contact.location} onChange={(e) => updateContactField("location", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>GitHub</label>
                <input className={inputClass} value={data.contact.socialLinks.github} onChange={(e) => updateContactSocial("github", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>LinkedIn</label>
                <input className={inputClass} value={data.contact.socialLinks.linkedin} onChange={(e) => updateContactSocial("linkedin", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Facebook</label>
                <input className={inputClass} value={data.contact.socialLinks.facebook} onChange={(e) => updateContactSocial("facebook", e.target.value)} />
              </div>
            </div>
          </PanelCard>
          </div>

          <div id="section-projects" className="scroll-mt-6">
            <PanelCard title="Projects (Add / Update / Remove)">
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-cyan-300">{project.title}</h3>
                  <button
                    onClick={() => removeProject(project.id)}
                    className="inline-flex items-center gap-1 rounded-lg border border-red-500/30 bg-red-900/20 px-3 py-1.5 text-xs font-semibold text-red-200"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className={inputClass} value={project.title} onChange={(e) => updateProject(project.id, "title", e.target.value)} placeholder="Title" />
                  <input className={inputClass} value={project.subtitle} onChange={(e) => updateProject(project.id, "subtitle", e.target.value)} placeholder="Subtitle" />
                  <input className={inputClass} value={project.image} onChange={(e) => updateProject(project.id, "image", e.target.value)} placeholder="Image URL" />
                  <input className={inputClass} value={project.github} onChange={(e) => updateProject(project.id, "github", e.target.value)} placeholder="GitHub URL" />
                  <input className={inputClass} value={project.live} onChange={(e) => updateProject(project.id, "live", e.target.value)} placeholder="Live URL" />
                  <input
                    className={inputClass}
                    value={project.tags.join(", ")}
                    onChange={(e) =>
                      updateProject(
                        project.id,
                        "tags",
                        e.target.value
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter(Boolean)
                      )
                    }
                    placeholder="Tags (comma separated)"
                  />
                  <textarea
                    className="sm:col-span-2 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
                    rows={3}
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addProject}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-900/20 px-4 py-2 text-sm font-semibold text-cyan-200"
            >
              <Plus className="h-4 w-4" /> Add Project
            </button>
          </div>
            </PanelCard>
          </div>

          <div id="section-experience-footer" className="grid gap-6 lg:grid-cols-2 scroll-mt-6">
          <PanelCard title="Experience">
            <div className="grid gap-3">
              {[
                ["role", "Role"],
                ["company", "Company"],
                ["period", "Period"],
                ["status", "Status"],
                ["location", "Location"],
              ].map(([key, title]) => (
                <div key={key}>
                  <label className={labelClass}>{title}</label>
                  <input className={inputClass} value={data.experience[key]} onChange={(e) => updateExperienceField(key, e.target.value)} />
                </div>
              ))}
              <div>
                <label className={labelClass}>Description</label>
                <textarea className={inputClass} rows={4} value={data.experience.description} onChange={(e) => updateExperienceField("description", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Responsibilities</label>
                <div className="space-y-2">
                  {data.experience.responsibilities.map((item, index) => (
                    <div key={`${item}-${index}`} className="flex gap-2">
                      <input className={inputClass} value={item} onChange={(e) => updateResponsibility(index, e.target.value)} />
                      <button onClick={() => removeResponsibility(index)} className="rounded-xl border border-red-500/30 bg-red-900/20 px-3 text-red-200">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button onClick={addResponsibility} className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-900/20 px-4 py-2 text-sm font-semibold text-cyan-200">
                    <Plus className="h-4 w-4" /> Add Responsibility
                  </button>
                </div>
              </div>
            </div>
          </PanelCard>

          <PanelCard title="Footer">
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Name</label>
                <input className={inputClass} value={data.footer.name} onChange={(e) => updateFooterField("name", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>About Text</label>
                <textarea className={inputClass} rows={4} value={data.footer.about} onChange={(e) => updateFooterField("about", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>GitHub</label>
                <input className={inputClass} value={data.footer.socialLinks.github} onChange={(e) => updateFooterSocial("github", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>LinkedIn</label>
                <input className={inputClass} value={data.footer.socialLinks.linkedin} onChange={(e) => updateFooterSocial("linkedin", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Facebook</label>
                <input className={inputClass} value={data.footer.socialLinks.facebook} onChange={(e) => updateFooterSocial("facebook", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Email Link (mailto:)</label>
                <input className={inputClass} value={data.footer.socialLinks.email} onChange={(e) => updateFooterSocial("email", e.target.value)} />
              </div>
            </div>
          </PanelCard>
          </div>

          <div id="section-education" className="scroll-mt-6">
            <PanelCard title="Education (Add / Update / Remove)">
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-emerald-300">{edu.degree}</h3>
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="inline-flex items-center gap-1 rounded-lg border border-red-500/30 bg-red-900/20 px-3 py-1.5 text-xs font-semibold text-red-200"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className={inputClass} value={edu.degree} onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} placeholder="Degree" />
                  <input className={inputClass} value={edu.institution} onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} placeholder="Institution" />
                  <input className={inputClass} value={edu.location} onChange={(e) => updateEducation(edu.id, "location", e.target.value)} placeholder="Location" />
                  <input className={inputClass} value={edu.period} onChange={(e) => updateEducation(edu.id, "period", e.target.value)} placeholder="Period" />
                  <input className={inputClass} value={edu.status} onChange={(e) => updateEducation(edu.id, "status", e.target.value)} placeholder="Status" />
                  <input className={inputClass} value={edu.icon} onChange={(e) => updateEducation(edu.id, "icon", e.target.value)} placeholder="Icon" />
                  <textarea
                    className="sm:col-span-2 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
                    rows={3}
                    value={edu.description}
                    onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEducation}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-900/20 px-4 py-2 text-sm font-semibold text-emerald-200"
            >
              <Plus className="h-4 w-4" /> Add Education
            </button>
          </div>
            </PanelCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
