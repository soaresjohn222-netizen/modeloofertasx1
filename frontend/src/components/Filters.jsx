import { Search } from "lucide-react";
import { Input } from "./ui/input";

const PILL = "px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap";

function Group({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6B62]">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function Filters({ filters, setFilters, busca, setBusca }) {
  const set = (key, value) => setFilters((f) => ({ ...f, [key]: value }));

  const pillCls = (active) =>
    `${PILL} ${
      active
        ? "bg-[#2D5A47] text-[#FAF6EE] border-[#2D5A47]"
        : "bg-white text-[#1E2A24] border-[#E2DDD5] hover:border-[#2D5A47]"
    }`;

  return (
    <div className="bg-white/70 backdrop-blur-sm border border-[#E2DDD5] rounded-2xl p-5 sm:p-6 space-y-5 shadow-[0_4px_20px_-4px_rgba(45,90,71,0.08)]">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5C6B62]" />
        <Input
          data-testid="search-input"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar por nome, ingrediente ou benefício..."
          className="h-12 pl-12 rounded-xl border-[#E2DDD5] bg-white focus-visible:ring-[#2D5A47]"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Group label="Tipo de Pet">
          <button data-testid="filter-pet-gato" className={pillCls(filters.pet === "gato")} onClick={() => set("pet", "gato")}>🐱 Gatos</button>
          <button data-testid="filter-pet-cachorro" className={pillCls(filters.pet === "cachorro")} onClick={() => set("pet", "cachorro")}>🐶 Cachorros</button>
          <button data-testid="filter-pet-todos" className={pillCls(filters.pet === "todos")} onClick={() => set("pet", "todos")}>Todos</button>
        </Group>

        <Group label="Dificuldade">
          <button data-testid="filter-dif-todos" className={pillCls(filters.dificuldade === "todos")} onClick={() => set("dificuldade", "todos")}>Todos</button>
          <button data-testid="filter-dif-facil" className={pillCls(filters.dificuldade === "facil")} onClick={() => set("dificuldade", "facil")}>🟢 Fácil</button>
          <button data-testid="filter-dif-medio" className={pillCls(filters.dificuldade === "medio")} onClick={() => set("dificuldade", "medio")}>🟡 Médio</button>
          <button data-testid="filter-dif-avancado" className={pillCls(filters.dificuldade === "avancado")} onClick={() => set("dificuldade", "avancado")}>🔴 Avançado</button>
        </Group>

        <Group label="Tipo de Refeição">
          <button data-testid="filter-ref-todos" className={pillCls(filters.refeicao === "todos")} onClick={() => set("refeicao", "todos")}>Todas</button>
          <button data-testid="filter-ref-principal" className={pillCls(filters.refeicao === "principal")} onClick={() => set("refeicao", "principal")}>🍛 Principais</button>
          <button data-testid="filter-ref-petisco" className={pillCls(filters.refeicao === "petisco")} onClick={() => set("refeicao", "petisco")}>🦴 Petiscos</button>
        </Group>
      </div>
    </div>
  );
}
