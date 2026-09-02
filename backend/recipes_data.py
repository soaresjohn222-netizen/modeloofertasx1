"""
Dados estáticos de Receitas Naturais para Pets.

NOTA: Este conteúdo é um conjunto de EXEMPLO com estrutura completa em pt-BR,
pronto para ser substituído pelo conteúdo real extraído dos PDFs do tutor.
Basta manter os mesmos campos por receita.
"""

# ---------------------------------------------------------------------------
# Avisos reutilizáveis (aparecem no detalhe de cada receita)
# ---------------------------------------------------------------------------
REGRAS_DE_OURO = [
    "Introduza qualquer alimento novo de forma gradual, ao longo de 7 a 10 dias.",
    "Sirva as porções mornas ou em temperatura ambiente, nunca geladas.",
    "Ofereça sempre água fresca e limpa à vontade.",
    "Retire todos os ossos, espinhas e peles duras antes de servir.",
    "Comida natural não substitui acompanhamento veterinário: consulte um profissional.",
    "Respeite a proporção de proteína animal — gatos são carnívoros estritos.",
]

ALIMENTOS_PROIBIDOS = [
    {"nome": "Cebola e Alho", "motivo": "Causam anemia grave (destroem glóbulos vermelhos)."},
    {"nome": "Chocolate e Cafeína", "motivo": "Tóxicos ao coração e sistema nervoso."},
    {"nome": "Uvas e Uvas-passas", "motivo": "Podem causar insuficiência renal aguda."},
    {"nome": "Ossos cozidos", "motivo": "Lascam e podem perfurar o trato digestivo."},
    {"nome": "Leite e derivados", "motivo": "A maioria dos pets é intolerante à lactose."},
    {"nome": "Abacate", "motivo": "Contém persina, tóxica para muitos animais."},
    {"nome": "Sal, açúcar e temperos", "motivo": "Sobrecarregam rins e fígado."},
    {"nome": "Massa de pão crua / álcool", "motivo": "Fermenta no estômago e intoxica."},
]

# ---------------------------------------------------------------------------
# Produtos Premium (display-only por enquanto — integração Hotmart depois)
# ---------------------------------------------------------------------------
PREMIUM_PRODUCTS = [
    {
        "id": "prod-ebook-cru",
        "titulo": "E-book: Dieta Crua para Gatos (BARF Felino)",
        "descricao": "Guia completo passo a passo para montar uma dieta crua biologicamente adequada, com tabelas de porções, suplementação e cardápios de 30 dias.",
        "destaque": "Mais vendido",
        "preco": "R$ 47,00",
        "beneficios": [
            "Cardápios prontos para 30 dias",
            "Tabela de porções por peso do gato",
            "Lista de suplementos essenciais",
        ],
        "img": "ebook",
    },
    {
        "id": "prod-suplemento",
        "titulo": "Kit Suplementação Natural (Taurina + Ômega 3)",
        "descricao": "A dupla essencial para o coração, a visão e a pelagem do seu gato. Taurina de alta pureza e Ômega 3 de fonte marinha sustentável.",
        "destaque": "Saúde do coração",
        "preco": "R$ 89,00",
        "beneficios": [
            "Taurina para saúde cardíaca e visão",
            "Ômega 3 para pelo brilhante",
            "Dosagem simples com medidor incluso",
        ],
        "img": "suplemento",
    },
    {
        "id": "prod-kit-porcoes",
        "titulo": "Kit de Formas & Medidores de Porção",
        "descricao": "Congele porções individuais na medida certa. Inclui formas de silicone, balança de precisão e potes herméticos livres de BPA.",
        "destaque": "Praticidade",
        "preco": "R$ 69,00",
        "beneficios": [
            "Porções congeladas na medida exata",
            "Balança de precisão inclusa",
            "Potes herméticos sem BPA",
        ],
        "img": "kit",
    },
]


def _r(rid, nome, pet, dificuldade, refeicao, beneficio, beneficios, ingredientes,
       preparo, indicado, dicas, tempo, porcoes, img):
    return {
        "id": rid,
        "nome": nome,
        "pet": pet,
        "dificuldade": dificuldade,
        "refeicao": refeicao,
        "beneficio": beneficio,
        "beneficios": beneficios,
        "ingredientes": ingredientes,
        "preparo": preparo,
        "indicado": indicado,
        "dicas": dicas,
        "tempo": tempo,
        "porcoes": porcoes,
        "img": img,
    }


RECIPES = [
    # ===================== GATOS — REFEIÇÕES PRINCIPAIS =====================
    _r("gato-p-01", "Frango Desfiado com Abóbora", "gato", "facil", "principal",
       "Digestão leve e saúde intestinal",
       ["Rico em proteína magra de fácil digestão", "Abóbora regula o trânsito intestinal", "Boa hidratação natural"],
       ["150 g de peito de frango sem pele", "2 colheres de sopa de abóbora cozida", "1 fio de azeite de oliva", "Água filtrada para cozimento"],
       ["Cozinhe o peito de frango em água sem sal até ficar macio.", "Desfie completamente, removendo qualquer cartilagem.", "Amasse a abóbora cozida e misture ao frango.", "Adicione o fio de azeite e sirva morno."],
       "Gatos adultos saudáveis e em fase de introdução à comida natural.",
       ["Não use temperos.", "Sirva em até 2 dias se refrigerado."],
       "25 min", "1 porção", "cat_meal"),

    _r("gato-p-02", "Sardinha com Batata-doce", "gato", "facil", "principal",
       "Pelo brilhante e articulações",
       ["Ômega 3 para pele e pelo", "Batata-doce fornece energia de liberação lenta", "Cálcio natural das espinhas moídas"],
       ["1 sardinha fresca limpa", "1 colher de sopa de batata-doce cozida", "1 colher de chá de salsinha picada"],
       ["Cozinhe a sardinha no vapor até soltar da espinha.", "Retire cuidadosamente todas as espinhas grandes.", "Amasse com a batata-doce cozida.", "Finalize com a salsinha e sirva morno."],
       "Gatos com pelo opaco ou pele ressecada.",
       ["Prefira sardinha fresca a enlatada.", "Ofereça no máximo 2x por semana."],
       "30 min", "1 porção", "fish"),

    _r("gato-p-03", "Patê de Fígado de Frango", "gato", "medio", "principal",
       "Reforço de ferro e vitamina A",
       ["Fígado é fonte densa de ferro e vitamina A", "Textura cremosa muito palatável", "Estimula o apetite"],
       ["100 g de fígado de frango", "50 g de peito de frango", "1 colher de chá de azeite", "2 colheres de sopa de caldo do cozimento"],
       ["Cozinhe o fígado e o peito em água sem sal.", "Bata tudo no processador com o caldo até virar patê.", "Deixe amornar e sirva pequenas porções."],
       "Gatos convalescentes ou com baixo apetite.",
       ["Fígado no máximo 1x por semana (excesso de vitamina A é tóxico).", "Congele em porções pequenas."],
       "35 min", "3 porções", "meat"),

    _r("gato-p-04", "Peixe Branco com Cenoura", "gato", "facil", "principal",
       "Leveza e saúde da visão",
       ["Proteína magra e leve", "Betacaroteno da cenoura", "Baixo teor de gordura"],
       ["120 g de filé de pescada", "1 colher de sopa de cenoura ralada e cozida", "1 fio de azeite"],
       ["Cozinhe o filé no vapor até ficar opaco.", "Verifique e retire espinhas.", "Misture a cenoura cozida amassada.", "Regue com azeite e sirva morno."],
       "Gatos com sobrepeso ou digestão sensível.",
       ["Evite peixes crus com frequência.", "Sem sal e sem limão."],
       "25 min", "1 porção", "fish"),

    _r("gato-p-05", "Carne Moída com Abobrinha", "gato", "facil", "principal",
       "Massa muscular e saciedade",
       ["Proteína completa de alto valor biológico", "Abobrinha hidrata e sacia", "Ferro de fácil absorção"],
       ["150 g de patinho moído magro", "2 colheres de sopa de abobrinha cozida", "1 fio de azeite"],
       ["Refogue a carne apenas em água, sem óleo nem sal.", "Cozinhe a abobrinha no vapor e amasse.", "Misture tudo e finalize com azeite morno."],
       "Gatos ativos e em manutenção de peso.",
       ["Retire a gordura aparente da carne.", "Não use carne temperada."],
       "25 min", "1 porção", "meat"),

    _r("gato-p-06", "Ensopado de Coração de Frango", "gato", "medio", "principal",
       "Fonte natural de taurina",
       ["Coração é rico em taurina, essencial ao coração felino", "Proteína densa", "Muito palatável"],
       ["100 g de coração de frango", "50 g de peito de frango", "3 colheres de sopa de água filtrada", "1 colher de chá de azeite"],
       ["Higienize bem os corações.", "Cozinhe com o peito em água sem sal até macios.", "Pique bem pequeno e sirva com um pouco do caldo."],
       "Gatos que precisam de reforço de taurina.",
       ["Taurina é vital para gatos.", "Pique bem para evitar engasgos."],
       "35 min", "2 porções", "meat"),

    _r("gato-p-07", "Salmão com Arroz Integral", "gato", "medio", "principal",
       "Anti-inflamatório e energético",
       ["Ômega 3 anti-inflamatório", "Carboidrato integral de energia lenta", "Ajuda articulações"],
       ["120 g de salmão fresco", "1 colher de sopa de arroz integral cozido", "1 fio de azeite"],
       ["Cozinhe o salmão no vapor.", "Retire pele e espinhas.", "Misture com o arroz integral bem cozido.", "Sirva morno com azeite."],
       "Gatos idosos ou com rigidez articular.",
       ["Salmão sempre bem cozido.", "Ofereça 1 a 2x por semana."],
       "30 min", "1 porção", "fish"),

    _r("gato-p-08", "Peru com Espinafre", "gato", "facil", "principal",
       "Ferro e proteína magra",
       ["Peru é leve e rico em proteína", "Espinafre fornece ferro e antioxidantes", "Baixa gordura"],
       ["140 g de peito de peru", "1 colher de sopa de espinafre cozido", "1 fio de azeite"],
       ["Cozinhe o peru em água sem sal e desfie.", "Cozinhe o espinafre rapidamente no vapor e pique.", "Misture e finalize com azeite morno."],
       "Gatos com necessidade de dieta leve.",
       ["Espinafre em pequena quantidade.", "Evite se o gato tiver histórico de cálculo urinário."],
       "25 min", "1 porção", "cat_meal"),

    _r("gato-p-09", "Frango com Ovo Cozido", "gato", "facil", "principal",
       "Reforço proteico completo",
       ["Ovo é proteína de referência", "Combinação altamente palatável", "Colina para o cérebro"],
       ["120 g de frango cozido desfiado", "1/2 ovo cozido", "1 fio de azeite"],
       ["Cozinhe o frango e desfie.", "Cozinhe o ovo por 10 min e pique.", "Misture tudo e sirva morno."],
       "Gatos em fase de ganho de massa.",
       ["Ovo sempre cozido, nunca cru.", "No máximo 2 a 3 ovos por semana."],
       "20 min", "1 porção", "cat_meal"),

    _r("gato-p-10", "Tilápia com Purê de Abóbora", "gato", "facil", "principal",
       "Digestão delicada",
       ["Peixe branco de fácil digestão", "Abóbora acalma o intestino", "Baixo teor calórico"],
       ["120 g de filé de tilápia", "2 colheres de sopa de abóbora cozida", "1 fio de azeite"],
       ["Cozinhe a tilápia no vapor e cheque espinhas.", "Faça um purê com a abóbora.", "Misture e sirva morno com azeite."],
       "Gatos com estômago sensível.",
       ["Ótima primeira receita natural.", "Sirva morna."],
       "25 min", "1 porção", "fish"),

    _r("gato-p-11", "Cordeiro com Cenoura e Abobrinha", "gato", "medio", "principal",
       "Proteína alternativa hipoalergênica",
       ["Cordeiro é opção para gatos com alergias", "Legumes fornecem fibras", "Rico em zinco"],
       ["130 g de cordeiro magro", "1 colher de sopa de cenoura cozida", "1 colher de sopa de abobrinha cozida"],
       ["Cozinhe o cordeiro em água sem sal.", "Pique bem pequeno.", "Cozinhe os legumes no vapor e amasse.", "Misture e sirva morno."],
       "Gatos com alergia a frango ou peixe.",
       ["Retire toda a gordura.", "Introduza gradualmente."],
       "35 min", "2 porções", "meat"),

    _r("gato-p-12", "Frango com Moranga e Linhaça", "gato", "medio", "principal",
       "Trato urinário e pele",
       ["Boa hidratação", "Linhaça (moída) reforça ômega vegetal", "Moranga é diurética natural"],
       ["130 g de frango cozido", "2 colheres de sopa de moranga cozida", "1 pitada de linhaça dourada moída"],
       ["Cozinhe e desfie o frango.", "Amasse a moranga cozida.", "Misture e polvilhe a linhaça moída na hora.", "Sirva morno."],
       "Gatos propensos a problemas urinários.",
       ["Linhaça sempre moída na hora.", "Incentive o consumo de água."],
       "30 min", "1 porção", "cat_meal"),

    _r("gato-p-13", "Músculo Bovino Desfiado", "gato", "medio", "principal",
       "Colágeno e articulações",
       ["Rico em colágeno natural", "Proteína de longa saciedade", "Fortalece articulações"],
       ["150 g de músculo bovino", "3 colheres de sopa de caldo do cozimento", "1 fio de azeite"],
       ["Cozinhe o músculo em panela até ficar macio (sem sal).", "Desfie e retire nervos duros.", "Sirva com um pouco do caldo e azeite."],
       "Gatos idosos com articulações sensíveis.",
       ["O caldo natural hidrata e agrada.", "Congele em porções."],
       "50 min", "2 porções", "meat"),

    _r("gato-p-14", "Peixe com Inhame", "gato", "facil", "principal",
       "Energia e recuperação",
       ["Inhame fortalece a imunidade", "Peixe leve e proteico", "Carboidrato nutritivo"],
       ["120 g de filé de peixe branco", "1 colher de sopa de inhame cozido", "1 fio de azeite"],
       ["Cozinhe o peixe no vapor e cheque espinhas.", "Cozinhe e amasse o inhame.", "Misture e sirva morno."],
       "Gatos em recuperação de doenças.",
       ["Inhame sempre bem cozido.", "Sirva morno."],
       "25 min", "1 porção", "fish"),

    _r("gato-p-15", "Frango com Brócolis", "gato", "facil", "principal",
       "Antioxidante e leve",
       ["Brócolis é antioxidante", "Frango magro", "Boa fonte de vitamina C natural"],
       ["130 g de frango cozido desfiado", "1 colher de sopa de brócolis cozido e picado", "1 fio de azeite"],
       ["Cozinhe e desfie o frango.", "Cozinhe o brócolis no vapor e pique bem fino.", "Misture e sirva morno."],
       "Gatos saudáveis em dieta variada.",
       ["Brócolis em pequena quantidade.", "Pique bem fino."],
       "25 min", "1 porção", "cat_meal"),

    _r("gato-p-16", "Coelho com Abóbora", "gato", "avancado", "principal",
       "Proteína nobre hipoalergênica",
       ["Carne de coelho é magra e hipoalergênica", "Excelente para gatos sensíveis", "Alta digestibilidade"],
       ["140 g de carne de coelho", "2 colheres de sopa de abóbora cozida", "1 fio de azeite"],
       ["Cozinhe o coelho em água sem sal até macio.", "Desfie removendo todos os ossinhos com cuidado.", "Misture com a abóbora amassada.", "Sirva morno."],
       "Gatos com alergias alimentares múltiplas.",
       ["Atenção redobrada aos ossos finos.", "Fonte proteica nobre, mas cara."],
       "45 min", "2 porções", "meat"),

    _r("gato-p-17", "Ovos Mexidos Naturais", "gato", "facil", "principal",
       "Refeição rápida e proteica",
       ["Proteína completa", "Rápido de preparar", "Muito bem aceito"],
       ["1 ovo inteiro", "1 colher de sopa de água", "1 fio mínimo de azeite"],
       ["Bata o ovo com a água.", "Cozinhe em fogo baixo sem sal, mexendo até firmar.", "Deixe amornar e sirva pequenas porções."],
       "Gatos que precisam de refeição rápida e reforçada.",
       ["Sem sal, sem manteiga.", "Não ofereça diariamente."],
       "10 min", "1 porção", "cat_meal"),

    _r("gato-p-18", "Frango com Quinoa", "gato", "medio", "principal",
       "Aminoácidos e energia",
       ["Quinoa é rica em aminoácidos", "Frango magro", "Boa fonte de energia"],
       ["120 g de frango cozido", "1 colher de sopa de quinoa cozida", "1 fio de azeite"],
       ["Cozinhe e desfie o frango.", "Cozinhe bem a quinoa em água.", "Misture pequena porção de quinoa ao frango.", "Sirva morno."],
       "Gatos ativos que precisam de energia extra.",
       ["Quinoa em pequena quantidade.", "Carne deve ser sempre a base."],
       "30 min", "1 porção", "cat_meal"),

    # ===================== GATOS — PETISCOS =====================
    _r("gato-t-01", "Chips de Frango Desidratado", "gato", "facil", "petisco",
       "Petisco proteico e crocante",
       ["100% proteína", "Sem conservantes", "Ajuda a limpar os dentes"],
       ["1 peito de frango fatiado bem fino"],
       ["Fatie o peito de frango em tiras finas.", "Disponha em assadeira sem sobrepor.", "Asse em forno baixo (120°C) por 2h até secar.", "Deixe esfriar e guarde em pote fechado."],
       "Recompensa saudável para treino e carinho.",
       ["Guarde na geladeira por até 5 dias.", "Ofereça com moderação."],
       "2h 10min", "Vários", "meat"),

    _r("gato-t-02", "Bolinhas de Sardinha", "gato", "facil", "petisco",
       "Ômega 3 em forma de mimo",
       ["Rico em ômega 3", "Pelo brilhante", "Altamente palatável"],
       ["1 sardinha cozida e sem espinhas", "1 colher de sopa de batata-doce cozida"],
       ["Amasse a sardinha bem.", "Misture com a batata-doce até dar liga.", "Modele bolinhas pequenas.", "Refrigere por 1h antes de servir."],
       "Mimo semanal para pele e pelo.",
       ["Máximo 2 bolinhas por dia.", "Cheque bem as espinhas."],
       "20 min", "6 bolinhas", "fish"),

    _r("gato-t-03", "Cubos de Fígado Assado", "gato", "medio", "petisco",
       "Recompensa rica em ferro",
       ["Alta palatabilidade", "Fonte de ferro", "Ótimo para treinos"],
       ["100 g de fígado de frango"],
       ["Corte o fígado em cubos pequenos.", "Asse em forno baixo até firmar.", "Deixe esfriar completamente."],
       "Recompensa de treino ou administração de remédios.",
       ["Fígado em pequenas quantidades.", "Não diariamente."],
       "40 min", "Vários", "meat"),

    _r("gato-t-04", "Picolé de Caldo de Frango", "gato", "facil", "petisco",
       "Hidratação refrescante",
       ["Incentiva a ingestão de água", "Refrescante no calor", "Sem aditivos"],
       ["Caldo de frango caseiro sem sal", "Formas de gelo pequenas"],
       ["Coe o caldo de frango bem.", "Despeje em forminhas de gelo.", "Congele por 4h.", "Ofereça 1 cubinho por vez."],
       "Gatos que bebem pouca água, especialmente no verão.",
       ["Caldo sempre sem sal e sem cebola.", "Ofereça em ambiente fresco."],
       "4h 10min", "Vários cubos", "cat_meal"),

    _r("gato-t-05", "Snack de Atum e Ovo", "gato", "facil", "petisco",
       "Mimo proteico rápido",
       ["Proteína dupla", "Muito saboroso", "Fácil de fazer"],
       ["2 colheres de sopa de atum natural (em água)", "1 ovo"],
       ["Misture o atum escorrido com o ovo batido.", "Asse em forminhas por 15 min a 160°C.", "Deixe esfriar e corte em pedaços."],
       "Recompensa ocasional.",
       ["Atum em água, nunca em óleo/sal.", "Ofereça com moderação."],
       "20 min", "Vários", "fish"),

    _r("gato-t-06", "Palitos de Peru Desidratado", "gato", "medio", "petisco",
       "Petisco magro e duradouro",
       ["Baixa gordura", "Proteína pura", "Ajuda na saúde bucal"],
       ["1 filé de peito de peru em tiras finas"],
       ["Corte o peru em tiras finas.", "Desidrate no forno baixo por 2h30.", "Esfrie e armazene em pote."],
       "Gatos em controle de peso.",
       ["Guarde refrigerado.", "Corte em pedaços adequados ao gato."],
       "2h 40min", "Vários", "meat"),

    _r("gato-t-07", "Bolinho de Frango e Cenoura", "gato", "facil", "petisco",
       "Mimo colorido e nutritivo",
       ["Combina proteína e fibra", "Betacaroteno", "Textura macia"],
       ["100 g de frango cozido", "1 colher de sopa de cenoura cozida"],
       ["Processe o frango com a cenoura.", "Modele bolinhas pequenas.", "Refrigere por 30 min."],
       "Recompensa nutritiva do dia a dia.",
       ["Consuma em até 3 dias.", "Porções pequenas."],
       "20 min", "8 bolinhas", "cat_meal"),

    _r("gato-t-08", "Gelatina Natural de Peixe", "gato", "avancado", "petisco",
       "Colágeno e hidratação",
       ["Rica em colágeno", "Hidratante", "Boa para articulações"],
       ["Caldo de peixe sem sal", "1 folha de gelatina incolor sem sabor"],
       ["Aqueça o caldo de peixe coado.", "Dissolva a gelatina conforme a embalagem.", "Despeje em forminhas e leve à geladeira por 3h.", "Sirva em cubinhos."],
       "Gatos idosos ou com articulações sensíveis.",
       ["Use gelatina sem açúcar/sabor.", "Ofereça pequenas porções."],
       "3h 20min", "Vários cubos", "fish"),

    _r("gato-t-09", "Chips de Batata-doce", "gato", "facil", "petisco",
       "Petisco leve e fibroso",
       ["Fonte de fibras", "Baixa gordura", "Naturalmente adocicado"],
       ["1 batata-doce pequena fatiada fina"],
       ["Fatie a batata-doce bem fininha.", "Asse a 150°C por 40 min virando na metade.", "Esfrie até ficar crocante."],
       "Mimo vegetal para variar o cardápio.",
       ["Petisco ocasional (carne é prioridade para gatos).", "Sem sal."],
       "45 min", "Vários", "cat_meal"),

    _r("gato-t-10", "Iscas de Coração", "gato", "medio", "petisco",
       "Taurina em forma de mimo",
       ["Fonte natural de taurina", "Muito palatável", "Reforça o coração"],
       ["100 g de coração de frango"],
       ["Higienize e fatie os corações.", "Asse em forno baixo até firmar.", "Deixe esfriar e sirva pequenas iscas."],
       "Recompensa que reforça a taurina.",
       ["Ótimo para treino.", "Ofereça com moderação."],
       "35 min", "Vários", "meat"),

    _r("gato-t-11", "Mini Omelete de Ervas", "gato", "facil", "petisco",
       "Mimo aromático",
       ["Proteína do ovo", "Salsinha refresca o hálito", "Rápido"],
       ["1 ovo", "1 pitada de salsinha picada"],
       ["Bata o ovo com a salsinha.", "Cozinhe em fogo baixo sem sal.", "Corte em quadradinhos e sirva."],
       "Mimo ocasional aromático.",
       ["Sem sal e sem óleo em excesso.", "Porções pequenas."],
       "10 min", "Vários", "cat_meal"),

    _r("gato-t-12", "Bolinhas de Ricota Leve", "gato", "medio", "petisco",
       "Cálcio suave (uso ocasional)",
       ["Fonte de cálcio", "Textura macia", "Aceito por muitos gatos"],
       ["1 colher de sopa de ricota fresca", "1 colher de sopa de frango cozido"],
       ["Amasse a ricota com o frango.", "Modele bolinhas mínimas.", "Refrigere antes de servir."],
       "Gatos que toleram bem laticínios leves.",
       ["Nem todo gato tolera laticínio — teste pequena quantidade.", "Uso ocasional."],
       "15 min", "6 bolinhas", "cat_meal"),

    _r("gato-t-13", "Cubos de Melancia Sem Semente", "gato", "facil", "petisco",
       "Hidratação de verão",
       ["Alta hidratação", "Refrescante", "Baixa caloria"],
       ["1 fatia pequena de melancia sem sementes"],
       ["Retire toda a casca e sementes.", "Corte em cubinhos bem pequenos.", "Ofereça 1 a 2 cubinhos gelados."],
       "Gatos no calor que gostam de frutas.",
       ["Sem sementes e sem casca.", "Fruta é só um agrado, não alimento base."],
       "5 min", "Poucos cubos", "cat_meal"),

    _r("gato-t-14", "Snack Crocante de Salmão", "gato", "medio", "petisco",
       "Ômega 3 crocante",
       ["Ômega 3", "Pele e pelo saudáveis", "Sabor irresistível"],
       ["1 filé pequeno de salmão em tiras"],
       ["Corte o salmão em tiras finas.", "Desidrate no forno baixo por 2h.", "Esfrie e armazene refrigerado."],
       "Mimo semanal para pelo brilhante.",
       ["Salmão bem seco.", "Consuma em poucos dias."],
       "2h 10min", "Vários", "fish"),

    # ===================== CÃES — AMOSTRA (expansão futura) =====================
    _r("cao-p-01", "Frango com Arroz e Cenoura", "cachorro", "facil", "principal",
       "Refeição equilibrada do dia a dia",
       ["Proteína magra", "Energia do arroz", "Fibra e vitaminas dos legumes"],
       ["200 g de frango cozido desfiado", "3 colheres de sopa de arroz integral cozido", "2 colheres de sopa de cenoura cozida"],
       ["Cozinhe o frango sem sal e desfie.", "Cozinhe o arroz integral.", "Cozinhe a cenoura no vapor e pique.", "Misture tudo e sirva morno."],
       "Cães adultos saudáveis em dieta natural.",
       ["Ajuste a porção ao porte do cão.", "Sem temperos."],
       "35 min", "1-2 porções", "dog"),

    _r("cao-p-02", "Patinho com Abóbora e Espinafre", "cachorro", "medio", "principal",
       "Digestão e imunidade",
       ["Proteína de qualidade", "Abóbora regula o intestino", "Espinafre traz ferro"],
       ["200 g de patinho moído magro", "3 colheres de sopa de abóbora cozida", "1 colher de sopa de espinafre cozido"],
       ["Refogue a carne apenas em água.", "Cozinhe a abóbora e amasse.", "Cozinhe o espinafre e pique.", "Misture e sirva morno."],
       "Cães com digestão sensível.",
       ["Introduza gradualmente.", "Ajuste porção ao porte."],
       "35 min", "1-2 porções", "dog"),

    _r("cao-t-01", "Biscoito Natural de Banana e Aveia", "cachorro", "facil", "petisco",
       "Petisco caseiro e fibroso",
       ["Fonte de fibras", "Energia natural", "Sem açúcar adicionado"],
       ["1 banana madura amassada", "4 colheres de sopa de aveia em flocos"],
       ["Misture a banana com a aveia até dar liga.", "Modele biscoitos pequenos.", "Asse a 180°C por 20 min.", "Deixe esfriar bem."],
       "Recompensa saudável para cães.",
       ["Sem açúcar, sem mel.", "Ofereça com moderação."],
       "30 min", "Vários", "dog"),

    _r("cao-t-02", "Iscas de Fígado para Adestramento", "cachorro", "medio", "petisco",
       "Recompensa de alto valor",
       ["Extremamente palatável", "Fonte de ferro", "Ideal para treino"],
       ["150 g de fígado bovino"],
       ["Corte o fígado em cubinhos.", "Asse em forno baixo até firmar.", "Esfrie e use como recompensa."],
       "Cães em fase de adestramento.",
       ["Fígado em pequenas quantidades.", "Guarde refrigerado."],
       "40 min", "Vários", "dog"),
]


def filter_recipes(pet=None, dificuldade=None, refeicao=None, busca=None):
    result = RECIPES
    if pet and pet != "todos":
        result = [r for r in result if r["pet"] == pet]
    if dificuldade and dificuldade != "todos":
        result = [r for r in result if r["dificuldade"] == dificuldade]
    if refeicao and refeicao != "todos":
        result = [r for r in result if r["refeicao"] == refeicao]
    if busca:
        q = busca.strip().lower()
        result = [
            r for r in result
            if q in r["nome"].lower()
            or q in r["beneficio"].lower()
            or any(q in ing.lower() for ing in r["ingredientes"])
        ]
    return result


def get_recipe(rid):
    return next((r for r in RECIPES if r["id"] == rid), None)
