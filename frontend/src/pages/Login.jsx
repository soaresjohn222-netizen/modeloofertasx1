import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import api from "../lib/api";

const CHEF_PHOTO = "https://customer-assets-7cd3h4nn.emergentagent.net/job_felino-receitas/artifacts/m4bublkf_WhatsApp%20Image%202026-07-03%20at%2019.40.08.jpeg";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErro("");
    if (!usuario.trim()) {
      setErro("Digite seu nome para continuar.");
      return;
    }
    setLoading(true);
    const nomeLocal = usuario.trim().split("@")[0].replace(/[._]/g, " ").trim();
    const nomeFmt = nomeLocal.charAt(0).toUpperCase() + nomeLocal.slice(1);
    try {
      const { data } = await api.post("/login", { usuario, senha: "acesso" });
      onLogin(data);
    } catch (err) {
      // Fallback: entra mesmo se a API não responder
      console.warn("Login API indisponível, usando sessão local:", err?.message);
      onLogin({ usuario: usuario.trim(), nome: nomeFmt || "Tutor" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF6EE] px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Marca com foto da chef */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4">
            <img
              src={CHEF_PHOTO}
              alt="Chef de receitas naturais para pets"
              className="h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-[0_8px_24px_-6px_rgba(45,90,71,0.35)]"
            />
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-[#2D5A47]">
                <Leaf className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Alimentação natural</span>
              </div>
              <h1 className="font-display text-2xl font-bold text-[#1E2A24] leading-tight">Receitas Naturais</h1>
            </div>
          </div>
          <p className="mt-5 text-[#5C6B62]">Entre para acessar o painel de receitas do seu pet.</p>
        </div>

        <form onSubmit={submit} className="space-y-5" data-testid="login-form">
          <div className="space-y-2">
            <Label htmlFor="usuario" className="text-[#1E2A24] font-medium">Seu nome</Label>
            <Input
              id="usuario"
              data-testid="login-username-input"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="ex: Mariana"
              className="h-12 rounded-xl border-[#E2DDD5] bg-white focus-visible:ring-[#2D5A47]"
            />
          </div>

          {erro && (
            <p data-testid="login-error" className="text-sm text-[#B91C1C] bg-[#FEF2F2] rounded-lg px-3 py-2">
              {erro}
            </p>
          )}

          <Button
            type="submit"
            data-testid="login-submit-btn"
            disabled={loading}
            className="w-full h-12 rounded-full bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] text-base font-semibold transition-colors"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Entrar"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
