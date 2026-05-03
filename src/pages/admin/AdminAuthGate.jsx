import React, { useState } from "react";
import AdminPanel from "./AdminPanel";

const ADMIN_EMAIL = "zahed-personal@gmail.com";
const ADMIN_PASSWORD = "zahed24@";
const AUTH_KEY = "portfolio_admin_auth_v1";

const AdminAuthGate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(AUTH_KEY) === "true";
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      window.localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("Invalid email or password.");
  };

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  if (isAuthenticated) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Admin Access</p>
        <h1 className="mt-2 text-2xl font-black text-white">Login to Continue</h1>
        <p className="mt-2 text-sm text-slate-400">Enter your admin credentials to open the panel.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="Input email"
              required
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="Password"
              required
            />
          </div>

          {error ? <p className="text-sm text-red-300">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-xl border border-cyan-400/50 bg-cyan-700/30 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-700/40"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuthGate;
