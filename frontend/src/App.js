import { useState } from "react";
import "@/App.css";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import { Toaster } from "@/components/ui/sonner";

const STORAGE_KEY = "pet_user";

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === "object" && typeof parsed.nome === "string") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function App() {
  const [user, setUser] = useState(loadUser);

  const handleLogin = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
