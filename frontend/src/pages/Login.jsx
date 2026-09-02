import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, PawPrint, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import api from "../lib/api";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErro("");
    if (!usuario.trim() || !senha.trim()) {
      setErro("Preencha usuário e senha para continuar.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post("/login", { usuario, senha });
      onLogin(data);
    } catch (err) {
      setErro("Não foi possível entrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (nome) => {
    setUsuario(nome);
    setSenha("123456");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#FAF6EE]">
      {/* Painel ilustrado */}
      <div className="relative hidden lg:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609284568429-b73c7ea66d71?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80"
          alt="Gato se alimentando naturalmente"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E2A24]/55" />
        <div className="relative z-10 h-full flex flex-col justify-between p-12 text-[#FAF6EE]">
          <div className="flex items-center gap-2">
            <div className="h-11 w-11 rounded-2xl bg-[#FAF6EE]/15 backdrop-blur-md flex items-center justify-center">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="font-display text-xl font-semibold">Receitas Naturais</span>
          </div>
          <div className="max-w-md">
            <h1 className="font-display text-4xl xl:text-5xl font-bold leading-tight">
              Alimentação natural, feita com amor para o seu pet.
            </h1>
            <p className="mt-5 text-lg text-[#FAF6EE]/80 leading-relaxed">
              Receitas equilibradas, benefícios explicados e avisos de segurança — tudo para nutrir com carinho.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#FAF6EE]/70 text-sm">
            <PawPrint className="h-4 w-4" />
            Comece pelos gatos • em breve, cães
          </div>
        </div>
      </div>

      {/* Formulário */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="h-10 w-10 rounded-2xl bg-[#2D5A47] flex items-center justify-center">
              <Leaf className="h-5 w-5 text-[#FAF6EE]" />
            </div>
            <span className="font-display text-lg font-semibold text-[#1E2A24]">Receitas Naturais</span>
          </div>

          <h2 className="font-display text-3xl font-bold text-[#1E2A24]">Bem-vindo(a) de volta 🌿</h2>
          <p className="mt-2 text-[#5C6B62]">Entre para acessar o painel de receitas.</p>

          <form onSubmit={submit} className="mt-8 space-y-5" data-testid="login-form">
            <div className="space-y-2">
              <Label htmlFor="usuario" className="text-[#1E2A24] font-medium">Usuário ou e-mail</Label>
              <Input
                id="usuario"
                data-testid="login-username-input"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="ex: mariana@email.com"
                className="h-12 rounded-xl border-[#E2DDD5] bg-white focus-visible:ring-[#2D5A47]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-[#1E2A24] font-medium">Senha</Label>
              <div className="relative">
                <Input
                  id="senha"
                  data-testid="login-password-input"
                  type={showPass ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 rounded-xl border-[#E2DDD5] bg-white pr-11 focus-visible:ring-[#2D5A47]"
                />
                <button
                  type="button"
                  data-testid="toggle-password-btn"
                  onClick={() => setShowPass((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5C6B62] hover:text-[#2D5A47]"
                  aria-label="Mostrar senha"
                >
                  {showPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {erro && (
              <p data-testid="login-error" className="text-sm text-[#B91C1C] bg-[#FEF2F2] rounded-lg px-3 py-2">
                {erro}
              </p>
            )}

            <div className="flex items-center justify-between text-sm">
              <a href="#" data-testid="forgot-password-link" className="text-[#2D5A47] hover:underline font-medium">
                Esqueci minha senha
              </a>
              <a href="#" data-testid="create-account-link" className="text-[#2D5A47] hover:underline font-medium">
                Criar conta
              </a>
            </div>

            <Button
              type="submit"
              data-testid="login-submit-btn"
              disabled={loading}
              className="w-full h-12 rounded-full bg-[#2D5A47] hover:bg-[#244939] text-[#FAF6EE] text-base font-semibold transition-colors"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Entrar"}
            </Button>
          </form>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider text-[#5C6B62] mb-3">Acesso rápido (demonstração)</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                data-testid="quick-login-mia"
                onClick={() => quickLogin("Mariana")}
                className="px-4 py-2 rounded-full bg-white border border-[#E2DDD5] text-sm text-[#1E2A24] hover:border-[#2D5A47] hover:text-[#2D5A47] transition-colors"
              >
                🐾 Tutora da Mia
              </button>
              <button
                type="button"
                data-testid="quick-login-max"
                onClick={() => quickLogin("Rafael")}
                className="px-4 py-2 rounded-full bg-white border border-[#E2DDD5] text-sm text-[#1E2A24] hover:border-[#2D5A47] hover:text-[#2D5A47] transition-colors"
              >
                🐕 Tutor do Max
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
