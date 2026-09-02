import { useEffect, useState } from "react";
import "@/App.css";
import { Leaf } from "lucide-react";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import api from "@/lib/api";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    api.get("/me")
      .then(({ data }) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setChecking(false));
  }, []);

  const handleLogout = async () => {
    try { await api.post("/logout"); } catch { /* ignore */ }
    setUser(null);
  };

  if (checking) {
    return (
      <div className="App min-h-screen flex items-center justify-center bg-[#FAF6EE]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#2D5A47] flex items-center justify-center animate-pulse">
            <Leaf className="h-6 w-6 text-[#FAF6EE]" />
          </div>
          <p className="text-sm text-[#5C6B62]">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={setUser} />
      )}
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
