# PRD — Receitas Naturais para Pets

## Problema Original
Aplicação web (pt-BR) para tutores acessarem receitas naturais para pets, começando por gatos e preparada para expandir para cães. Sem banco de dados: receitas em JSON estático servido pelo FastAPI; estado do usuário em cookies. Login simulado, painel de receitas com filtros/busca, cards, modal de detalhe com avisos (Regras de Ouro + Alimentos Proibidos), favoritos em cookie, seção Produtos Premium (display-only) e botão Sair.

## Decisões / Escolhas do Usuário
- Login simulado: aceita qualquer usuário/senha preenchidos.
- Detalhe da receita: em MODAL.
- Produtos Premium: botões apenas mostram aviso "em breve" (sem link real).
- Paleta: escolhida pelo designer — Organic & Earthy (verde sálvia #2D5A47, creme #FAF6EE, terracota #D96B43).
- Fontes: Fraunces (títulos) + Plus Jakarta Sans (corpo).

## Arquitetura
- Frontend: React (CRA/craco) + Tailwind + shadcn/ui + framer-motion + lucide-react.
- Backend: FastAPI, todas as rotas com prefixo /api. Sem DB.
- Persistência: JSON estático (recipes_data.py) + cookies (sessão httponly `pet_session`; favoritos `pet_favoritos` no frontend).

## Endpoints
- POST /api/login, GET /api/me, POST /api/logout
- GET /api/recipes (filtros: pet, dificuldade, refeicao, busca)
- GET /api/recipes/{id} (inclui avisos)
- GET /api/premium-products, GET /api/stats, GET /api/warnings

## Implementado (2026-06)
- Login simulado com cookie + tela ilustrada.
- Painel com saudação personalizada, stats, dica do dia.
- Filtros (pet/dificuldade/refeição) + busca + estado vazio.
- Grid de cards + modal de detalhe completo (benefícios, ingredientes, preparo, indicado, dicas, Regras de Ouro, Alimentos Proibidos).
- Favoritos em cookie (contador no header, visão "Favoritas" mostra todas independente dos filtros).
- Produtos Premium (3 cards) com modal de detalhe e aviso "em breve".
- Botão Sair. Responsivo (mobile/tablet/desktop).
- Testado: backend 30/30; frontend E2E aprovado (issues corrigidos: overlap do botão favorito no modal, coerência favoritos x filtros, DialogTitle a11y).

## CONTEÚDO — REAL (dos PDFs do tutor)
- 2026-06: Extraídos 4 PDFs e estruturadas 200 receitas reais em /app/backend/recipes_data.py:
  - Gatos: 50 receitas principais + 50 petiscos.
  - Cães: 50 receitas principais + 50 petiscos.
- Avisos (Regras de Ouro + Alimentos Proibidos) atualizados com o conteúdo oficial dos PDFs.

## Dados 100% no frontend (sem dependência de backend)
- 2026-09: Receitas/avisos/produtos migrados para JSON estático no frontend (src/data/recipes.js) via src/lib/recipesLocal.js. Corrige "receitas não aparecem" e remove qualquer dependência de rede para exibir conteúdo.
- Login por NOME apenas, sessão em localStorage (pet_user). Sem cookie/CORS.

## Quiz de Recomendação (área logada)
- 2026-09: Quiz abre após o login (src/components/Quiz.jsx). 4 perguntas (pet, objetivo, tempo, ingrediente) + intro + resultado. Acessível (1 pergunta/tela, botões grandes, progresso, Voltar/Continuar, foco visível, sem depender só de cor).
- Recomendação (recommendRecipes) respeita a espécie (nunca cruza), pontua objetivo/tempo/ingrediente; se não houver match perfeito mostra a opção mais próxima. Só usa receitas existentes.
- Persistência em localStorage (pet_quiz_prefs): "Usar minhas últimas respostas" e "Refazer quiz" (botão no dashboard). Pode pular/fechar a qualquer momento. Sem cobrança/cadastro/promessas médicas.

## Backlog / Próximos
- P0: Substituir receitas de exemplo pelo conteúdo real dos PDFs (50+50 gatos).
- P1: Auth real (backend + storage) para quando houver usuários pagantes/Hotmart.
- P1: Integração Hotmart nos Produtos Premium.
- P2: Expansão completa de receitas para cães.
- P2: Busca por ingrediente avançada + planejador de cardápio semanal.
