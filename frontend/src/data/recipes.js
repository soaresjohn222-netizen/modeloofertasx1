// Dados estaticos gerados a partir dos PDFs. Fonte unica de verdade no frontend.
const DATA = {
  "recipes": [
    {
      "id": "gato-p-01",
      "nome": "Frango Desfiado com Abóbora e Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Digestão leve e saúde ocular",
      "beneficios": [
        "Proteína segura e digestiva",
        "Abóbora regula o intestino",
        "Betacaroteno da cenoura para visão"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele",
        "2 col. sopa de abóbora cozida e amassada",
        "1 col. sopa de cenoura cozida e ralada"
      ],
      "preparo": [
        "Cozinhe o frango em água sem sal por ~20 min e desfie fino.",
        "Cozinhe abóbora e cenoura até amolecerem.",
        "Amasse a abóbora, rale a cenoura e misture ao frango.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Gatos adultos e idosos; ótima para intestino lento.",
      "dicas": [
        "Congele a abóbora em forminhas para o dia a dia.",
        "Nunca sirva quente."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-02",
      "nome": "Patê de Frango com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Textura macia e energia gradual",
      "beneficios": [
        "Ideal para gatos exigentes ou com sensibilidade dental",
        "Energia de liberação lenta",
        "Antioxidantes da batata doce"
      ],
      "ingredientes": [
        "100g de peito de frango cozido",
        "2 col. sopa de batata doce cozida e amassada",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe o frango sem sal e reserve a água.",
        "Cozinhe a batata doce até amolecer.",
        "Bata frango, batata e água até virar patê.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Filhotes 4m+, idosos e gatos com problemas dentários.",
      "dicas": [
        "Evite para gatos diabéticos.",
        "Ótima na primeira refeição do dia."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-03",
      "nome": "Frango com Vagem e Abobrinha no Vapor",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Leve e hidratante",
      "beneficios": [
        "Vapor preserva nutrientes",
        "Vagem com vitamina K e fibras",
        "Abobrinha ajuda na hidratação"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele",
        "3 vagens frescas picadas",
        "3 rodelas de abobrinha"
      ],
      "preparo": [
        "Cozinhe frango, vagem e abobrinha no vapor por 20–25 min.",
        "Desfie o frango e pique os legumes.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos ativos e gatos com tendência ao sobrepeso.",
      "dicas": [
        "Pode trocar abobrinha por chuchu.",
        "Ótima para dias quentes."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-04",
      "nome": "Fígado de Frango com Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Reforço de ferro e vitamina A",
      "beneficios": [
        "Rico em ferro e B12",
        "Ótimo para anemia leve",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "80g de fígado de frango limpo",
        "1 cenoura média cozida e fatiada"
      ],
      "preparo": [
        "Lave o fígado e remova membranas.",
        "Cozinhe em água sem sal por 15–20 min até firme.",
        "Cozinhe a cenoura e misture ao fígado picado.",
        "Sirva morno."
      ],
      "indicado": "Adultos com anemia ou pelo opaco.",
      "dicas": [
        "Máximo 1–2x/semana (vitamina A).",
        "Congele em porções."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-05",
      "nome": "Coração de Frango com Chuchu",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Fonte natural de taurina",
      "beneficios": [
        "Maior fonte natural de taurina",
        "Essencial para coração e visão",
        "Chuchu hidrata"
      ],
      "ingredientes": [
        "100g de coração de frango limpo",
        "1 chuchu pequeno cozido e picado"
      ],
      "preparo": [
        "Higienize os corações e retire a gordura.",
        "Cozinhe em água sem sal por 20 min.",
        "Corte em pedaços; cozinhe e pique o chuchu.",
        "Misture e sirva morno."
      ],
      "indicado": "Todas as idades; vital em dieta natural exclusiva.",
      "dicas": [
        "Ofereça ~3x/semana pela taurina.",
        "Pique bem para evitar engasgos."
      ],
      "tempo": "30 min",
      "porcoes": "2 porções",
      "img": "meat"
    },
    {
      "id": "gato-p-06",
      "nome": "Frango Assado Desfiado com Ervilha",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Aroma que estimula o apetite",
      "beneficios": [
        "Assar realça sabor e aroma",
        "Ervilha traz magnésio e vitaminas B",
        "Boa para gatos seletivos"
      ],
      "ingredientes": [
        "100g de peito de frango sem tempero",
        "2 col. sopa de ervilha fresca ou congelada"
      ],
      "preparo": [
        "Asse o frango a 180°C por 25–30 min.",
        "Cozinhe a ervilha por 5 min.",
        "Desfie o frango e misture à ervilha.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos saudáveis, seletivos ou inapetentes.",
      "dicas": [
        "Ervilha no máx. 10% do prato.",
        "Evite ervilha enlatada."
      ],
      "tempo": "35 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-07",
      "nome": "Mousse de Frango com Espinafre",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Textura suave e ferro",
      "beneficios": [
        "Espinafre rico em ferro e folato",
        "Mousse facilita a mastigação",
        "Boa para idosos e filhotes"
      ],
      "ingredientes": [
        "100g de peito de frango cozido",
        "2 folhas pequenas de espinafre cozidas",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe o frango até macio e reserve a água.",
        "Cozinhe o espinafre por 2 min.",
        "Bata tudo até virar mousse cremoso.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Filhotes 4m+ e idosos; evitar em cálculos de oxalato.",
      "dicas": [
        "Máx. 2 folhas de espinafre por porção.",
        "Troque por abobrinha se houver histórico urinário."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-08",
      "nome": "Frango com Brócolis e Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Antioxidante e imunidade",
      "beneficios": [
        "Brócolis rico em antioxidantes",
        "Vitaminas A, B6 e C",
        "Reforça a imunidade"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "1 raminho de brócolis (~20g) cozido",
        "1 col. sopa de cenoura ralada e cozida"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe brócolis e cenoura até macios.",
        "Pique o brócolis bem fino e misture.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos com imunidade baixa ou em recuperação.",
      "dicas": [
        "Máx. 20g de brócolis por refeição, 2x/semana.",
        "Nunca ofereça brócolis cru."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-09",
      "nome": "Patê de Fígado de Frango com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Palatável e rico em ferro",
      "beneficios": [
        "Alta palatabilidade",
        "Ferro biodisponível e vitamina A",
        "Batata doce suaviza o sabor"
      ],
      "ingredientes": [
        "70g de fígado de frango limpo",
        "2 col. sopa de batata doce cozida",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe o fígado em água sem sal por 15 min.",
        "Cozinhe a batata doce até macia.",
        "Processe tudo até patê homogêneo.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos com anemia ou pelo opaco.",
      "dicas": [
        "Máximo 2x/semana.",
        "Congela por até 30 dias."
      ],
      "tempo": "25 min",
      "porcoes": "3 porções",
      "img": "meat"
    },
    {
      "id": "gato-p-10",
      "nome": "Sopa Nutritiva de Frango com Legumes",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Hidratação profunda",
      "beneficios": [
        "Caldo rico em colágeno e minerais",
        "Legumes variados",
        "Ideal para gatos que bebem pouca água"
      ],
      "ingredientes": [
        "100g de frango com osso (retirar antes de servir)",
        "1 cenoura em cubos",
        "1 col. sopa de abóbora",
        "2 rodelas de abobrinha",
        "400ml de água filtrada"
      ],
      "preparo": [
        "Cozinhe o frango com osso por 30 min.",
        "Adicione os legumes e cozinhe mais 15 min.",
        "Retire TODOS os ossos e desfie a carne.",
        "Retorne ao caldo e sirva morno."
      ],
      "indicado": "Gatos doentes, em recuperação ou desidratados.",
      "dicas": [
        "Nunca ofereça ossos cozidos.",
        "Congele em cubinhos para hidratação diária."
      ],
      "tempo": "50 min",
      "porcoes": "2 porções",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-11",
      "nome": "Frango com Abóbora e Ervilha",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Regula o intestino",
      "beneficios": [
        "Proteína + fibra solúvel",
        "Ajuda contra constipação",
        "Boa saciedade"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "2 col. sopa de abóbora amassada",
        "1 col. sopa de ervilha cozida"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Amasse a abóbora cozida.",
        "Cozinhe a ervilha por 5 min.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos com constipação ou intestino irregular.",
      "dicas": [
        "Sirva em prato raso se o gato comer rápido.",
        "Sem sal."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-12",
      "nome": "Coração de Frango com Batata Doce",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Taurina + energia",
      "beneficios": [
        "Taurina natural",
        "Energia de liberação gradual",
        "Ótimo custo-benefício"
      ],
      "ingredientes": [
        "100g de coração de frango limpo",
        "2 col. sopa de batata doce cozida e amassada"
      ],
      "preparo": [
        "Higienize os corações e retire gordura.",
        "Cozinhe por 20 min e corte ao meio.",
        "Amasse a batata doce cozida.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos e idosos em dieta natural exclusiva.",
      "dicas": [
        "Compre em maior quantidade e congele porções.",
        "Muito nutritivo e barato."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-13",
      "nome": "Frango Grelhado Desfiado com Chuchu",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Leve e para seletivos",
      "beneficios": [
        "Textura diferente agrada seletivos",
        "Chuchu hidrata e é leve",
        "Baixa caloria"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele",
        "1 chuchu pequeno cozido e picado"
      ],
      "preparo": [
        "Grelhe o frango em frigideira seca 5–7 min por lado.",
        "Cozinhe o chuchu até amolecer.",
        "Desfie o frango e pique o chuchu.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos com sobrepeso leve e gatos seletivos.",
      "dicas": [
        "Use frigideira antiaderente em bom estado.",
        "Sem óleo e sem sal."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-14",
      "nome": "Frango com Abobrinha e Vagem no Vapor",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Simples e digestivo",
      "beneficios": [
        "Legumes bem tolerados",
        "Vapor preserva vitaminas",
        "Alta palatabilidade"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele",
        "3 rodelas de abobrinha",
        "3 vagens frescas"
      ],
      "preparo": [
        "Corte o frango em tiras finas.",
        "Cozinhe tudo no vapor por 20–25 min.",
        "Desfie o frango e pique os legumes.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos saudáveis; uso rotineiro.",
      "dicas": [
        "Use peneira metálica se não tiver cesta de vapor.",
        "Preserva mais nutrientes."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-15",
      "nome": "Sardinha Assada com Cenoura Ralada",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Pelo brilhante (Ômega 3)",
      "beneficios": [
        "Ômega 3 anti-inflamatório",
        "Pele e pelo saudáveis",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "1 sardinha fresca média limpa e sem espinhas",
        "1 cenoura pequena cozida e ralada"
      ],
      "preparo": [
        "Limpe a sardinha e asse a 180°C por 20–25 min.",
        "Retire TODAS as espinhas.",
        "Cozinhe e rale a cenoura.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos, especialmente com pelo opaco. Máx. 3x/semana.",
      "dicas": [
        "Sempre remova todas as espinhas.",
        "Sardinha é rica em ômega 3 e baixa em mercúrio."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-16",
      "nome": "Tilápia Cozida com Abobrinha",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Peixe seguro e suave",
      "beneficios": [
        "Baixíssimo mercúrio",
        "Alta digestibilidade",
        "Abobrinha hidrata"
      ],
      "ingredientes": [
        "100g de filé de tilápia",
        "3 rodelas de abobrinha cozida"
      ],
      "preparo": [
        "Verifique e remova espinhas.",
        "Cozinhe a tilápia por 15–20 min.",
        "Cozinhe a abobrinha e pique.",
        "Desfie o peixe conferindo espinhas e misture."
      ],
      "indicado": "Adultos e idosos com sensibilidade digestiva. Até 3x/semana.",
      "dicas": [
        "Descongele na geladeira.",
        "Filé barato e seguro."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-17",
      "nome": "Patê de Atum com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Estimula o apetite",
      "beneficios": [
        "Atum muito palatável",
        "Textura cremosa",
        "Bom para inapetentes"
      ],
      "ingredientes": [
        "80g de atum em água natural (sem sal)",
        "2 col. sopa de batata doce cozida",
        "1 col. sopa de água filtrada"
      ],
      "preparo": [
        "Enxágue bem o atum e escorra.",
        "Cozinhe a batata doce.",
        "Amasse tudo até virar patê.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos inapetentes ou em recuperação. Máx. 1x/semana.",
      "dicas": [
        "Sempre atum em água, nunca em óleo.",
        "Atenção ao mercúrio."
      ],
      "tempo": "20 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-18",
      "nome": "Merluza com Abóbora Cabotiá",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Peixe branco delicado",
      "beneficios": [
        "Baixíssimo mercúrio",
        "Digestão fácil",
        "Abóbora com betacaroteno"
      ],
      "ingredientes": [
        "100g de filé de merluza",
        "3 col. sopa de abóbora cabotiá cozida e amassada"
      ],
      "preparo": [
        "Verifique e remova espinhas.",
        "Cozinhe a merluza por 15–20 min.",
        "Amasse a abóbora cozida.",
        "Misture o peixe desfiado e sirva morno."
      ],
      "indicado": "Filhotes 4m+ e adultos em introdução ao peixe.",
      "dicas": [
        "Merluza congelada tem ótimo custo.",
        "Confira espinhas com cuidado."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-19",
      "nome": "Tilápia com Espinafre e Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Imunidade e visão",
      "beneficios": [
        "Proteína magra + ferro",
        "Betacaroteno para visão",
        "Boa para pelo opaco"
      ],
      "ingredientes": [
        "100g de filé de tilápia",
        "2 folhas pequenas de espinafre",
        "1 col. sopa de cenoura ralada e cozida"
      ],
      "preparo": [
        "Cozinhe a tilápia por 15–20 min.",
        "Cozinhe o espinafre por 2 min.",
        "Desfie o peixe conferindo espinhas.",
        "Pique o espinafre, misture tudo e sirva."
      ],
      "indicado": "Adultos com pelo opaco; evitar em cálculos de oxalato.",
      "dicas": [
        "Máx. 2 folhas de espinafre.",
        "Troque por abobrinha se houver histórico urinário."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-20",
      "nome": "Sardinha com Brócolis Cozido",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Ômega 3 + antioxidantes",
      "beneficios": [
        "Ômega 3, cálcio e vitamina D",
        "Sulforafano do brócolis",
        "Refeição funcional"
      ],
      "ingredientes": [
        "1 sardinha fresca média limpa e sem espinhas",
        "1 raminho de brócolis (~20g) cozido"
      ],
      "preparo": [
        "Asse a sardinha a 180°C por 20 min.",
        "Cozinhe o brócolis até macio.",
        "Desfie a sardinha conferindo espinhas.",
        "Pique o brócolis e misture."
      ],
      "indicado": "Adultos saudáveis. Máx. 3x/semana.",
      "dicas": [
        "Máx. 20g de brócolis por porção.",
        "Remova todas as espinhas."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-21",
      "nome": "Pescada Branca com Chuchu e Vagem",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Refeição leve e hidratante",
      "beneficios": [
        "Peixe suave e digestivo",
        "Alta hidratação",
        "Baixa caloria"
      ],
      "ingredientes": [
        "100g de filé de pescada branca",
        "1 chuchu pequeno cozido e picado",
        "3 vagens cozidas e picadas"
      ],
      "preparo": [
        "Verifique e remova espinhas.",
        "Cozinhe a pescada por 15 min.",
        "Cozinhe chuchu e vagem.",
        "Desfie o peixe conferindo espinhas e misture."
      ],
      "indicado": "Adultos com sobrepeso; dias quentes.",
      "dicas": [
        "Alternativa barata à tilápia.",
        "Confira espinhas duas vezes."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-22",
      "nome": "Mousse de Atum com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Irresistível para exigentes",
      "beneficios": [
        "Atum muito palatável",
        "Textura aveludada",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "80g de atum em água natural (sem sal)",
        "1 cenoura pequena cozida",
        "2 col. sopa de água filtrada"
      ],
      "preparo": [
        "Enxágue o atum para reduzir o sódio.",
        "Cozinhe a cenoura até macia.",
        "Processe tudo até mousse.",
        "Sirva em temperatura ambiente (mesmo dia)."
      ],
      "indicado": "Adultos e idosos inapetentes. Máx. 1x/semana.",
      "dicas": [
        "Útil para introduzir novos sabores.",
        "Atenção ao mercúrio."
      ],
      "tempo": "20 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-23",
      "nome": "Tilápia no Vapor com Ervilha e Abobrinha",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Trato urinário saudável",
      "beneficios": [
        "Peixe suculento no vapor",
        "Ervilha com magnésio",
        "Alta umidade"
      ],
      "ingredientes": [
        "100g de filé de tilápia",
        "1 col. sopa de ervilha",
        "3 rodelas de abobrinha"
      ],
      "preparo": [
        "Cozinhe tilápia e abobrinha no vapor por 20 min.",
        "Cozinhe a ervilha por 5 min.",
        "Desfie o peixe conferindo espinhas.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos com tendência a problemas urinários.",
      "dicas": [
        "Dietas úmidas ajudam o trato urinário.",
        "Consulte o vet sobre frequência de peixe."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-24",
      "nome": "Caldinho de Peixe com Legumes",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Hidratação reconfortante",
      "beneficios": [
        "Rico em minerais e colágeno",
        "Estimula ingestão de líquidos",
        "Sabor natural de peixe"
      ],
      "ingredientes": [
        "100g de peixe branco com espinha dorsal (para o caldo)",
        "1 cenoura picada",
        "1 chuchu picado",
        "500ml de água filtrada"
      ],
      "preparo": [
        "Cozinhe peixe e legumes por 30 min.",
        "Coe removendo TODOS os ossos e espinhas.",
        "Reserve pedaços de peixe sem espinha.",
        "Sirva morno."
      ],
      "indicado": "Todas as idades; gatos desidratados ou doentes.",
      "dicas": [
        "Atenção total às espinhas.",
        "Congele em cubinhos para a água."
      ],
      "tempo": "45 min",
      "porcoes": "2 porções",
      "img": "fish"
    },
    {
      "id": "gato-p-25",
      "nome": "Patê de Sardinha com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Ômega 3 cremoso",
      "beneficios": [
        "Ômega 3 + cálcio e fósforo",
        "Ossos e dentes fortes",
        "Antioxidantes da batata doce"
      ],
      "ingredientes": [
        "1 sardinha fresca pequena (ou em água, enxaguada)",
        "2 col. sopa de batata doce cozida",
        "1 col. sopa de água filtrada"
      ],
      "preparo": [
        "Asse a sardinha a 180°C por 20 min e retire espinhas.",
        "Cozinhe a batata doce.",
        "Bata tudo até virar patê.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos e idosos com pelo ressecado. Máx. 3x/semana.",
      "dicas": [
        "Sardinha em lata: só sardinha e água.",
        "Remova todas as espinhas."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-26",
      "nome": "Filé de Merluza com Vagem e Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Equilíbrio e saúde dental",
      "beneficios": [
        "Textura firme exige mastigação",
        "Vitamina K e betacaroteno",
        "Boa introdução ao peixe"
      ],
      "ingredientes": [
        "100g de filé de merluza",
        "3 vagens cozidas e picadas",
        "1 col. sopa de cenoura cozida e picada"
      ],
      "preparo": [
        "Verifique e remova espinhas.",
        "Cozinhe a merluza por 15 min.",
        "Cozinhe vagem e cenoura.",
        "Desfie o peixe conferindo espinhas e misture."
      ],
      "indicado": "Adultos em introdução ao peixe.",
      "dicas": [
        "Comece com meia porção e observe 48h.",
        "Confira espinhas com atenção."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-27",
      "nome": "Carne Moída com Abóbora",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Imunidade e músculos",
      "beneficios": [
        "Zinco, ferro e B12",
        "Fortalece musculatura",
        "Abóbora regula o intestino"
      ],
      "ingredientes": [
        "100g de carne moída magra (patinho/acém)",
        "3 col. sopa de abóbora cozida e amassada"
      ],
      "preparo": [
        "Cozinhe a carne em água sem sal, desmanchando bem.",
        "Escorra o excesso de líquido.",
        "Amasse a abóbora e misture.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos com fezes moles ou intestino sensível.",
      "dicas": [
        "Use sempre carne magra.",
        "Carne bem cozida, nunca malpassada."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-28",
      "nome": "Patê de Carne Bovina com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Ferro para idosos",
      "beneficios": [
        "Ferro de alta biodisponibilidade",
        "Bom para dificuldade de mastigação",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "100g de carne moída magra cozida",
        "1 cenoura pequena cozida",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe a carne até macia e reserve a água.",
        "Cozinhe a cenoura.",
        "Amasse tudo até patê homogêneo.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos e idosos com problemas dentários.",
      "dicas": [
        "Geladeira por até 2 dias.",
        "Congela por até 30 dias."
      ],
      "tempo": "25 min",
      "porcoes": "2 porções",
      "img": "meat"
    },
    {
      "id": "gato-p-29",
      "nome": "Músculo Bovino Desfiado com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Colágeno para articulações",
      "beneficios": [
        "Rico em colágeno",
        "Beneficia articulações e pele",
        "Energia da batata doce"
      ],
      "ingredientes": [
        "100g de músculo bovino sem gordura",
        "2 col. sopa de batata doce cozida e amassada"
      ],
      "preparo": [
        "Cozinhe o músculo na pressão por 40–45 min.",
        "Desfie a carne.",
        "Amasse a batata doce cozida.",
        "Misture e sirva morno."
      ],
      "indicado": "Adultos e idosos com articulações sensíveis.",
      "dicas": [
        "Prepare em lote e congele.",
        "Inclua um pouco do caldo coado."
      ],
      "tempo": "50 min",
      "porcoes": "2 porções",
      "img": "meat"
    },
    {
      "id": "gato-p-30",
      "nome": "Fígado Bovino com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Densidade nutricional máxima",
      "beneficios": [
        "Maior teor de vitamina A",
        "Excelente ferro e B12",
        "Transformador para anemia"
      ],
      "ingredientes": [
        "70g de fígado bovino limpo",
        "1 cenoura pequena cozida e fatiada"
      ],
      "preparo": [
        "Lave e remova membranas do fígado.",
        "Cozinhe em água sem sal por 20 min até firme.",
        "Cozinhe a cenoura.",
        "Corte o fígado e misture; sirva morno."
      ],
      "indicado": "Adultos com anemia ou deficiências.",
      "dicas": [
        "Máx. 1–2x/semana.",
        "Nunca use fígado diariamente."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-31",
      "nome": "Carne Moída com Espinafre e Abobrinha",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Amplo espectro nutricional",
      "beneficios": [
        "Ferro da carne e do espinafre",
        "Folato e vitamina C",
        "Hidratação da abobrinha"
      ],
      "ingredientes": [
        "100g de carne moída magra cozida",
        "2 folhas pequenas de espinafre cozidas",
        "2 rodelas de abobrinha cozida"
      ],
      "preparo": [
        "Cozinhe a carne e escorra.",
        "Cozinhe o espinafre por 2 min.",
        "Cozinhe a abobrinha e pique.",
        "Misture tudo e sirva."
      ],
      "indicado": "Adultos saudáveis; evitar em cálculos de oxalato.",
      "dicas": [
        "Máx. 2 folhas de espinafre.",
        "Troque por chuchu se houver FLUTD."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-32",
      "nome": "Carne com Chuchu e Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Econômica e hidratante",
      "beneficios": [
        "Chuchu com 94% de água",
        "Proteína completa com ferro",
        "Ótima para uso diário"
      ],
      "ingredientes": [
        "100g de carne magra cozida",
        "1 chuchu pequeno cozido e picado",
        "1 col. sopa de cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe a carne e escorra.",
        "Cozinhe chuchu e cenoura.",
        "Pique os legumes e misture à carne.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos saudáveis; dias quentes.",
      "dicas": [
        "Ingredientes baratos e fáceis.",
        "Prepare em lote e congele."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-33",
      "nome": "Coração Bovino com Cenoura e Vagem",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Taurina e coração forte",
      "beneficios": [
        "Ótima fonte de taurina",
        "Coenzima Q10 e ferro",
        "Suporta coração e visão"
      ],
      "ingredientes": [
        "100g de coração bovino limpo",
        "1 cenoura pequena cozida",
        "3 vagens cozidas e picadas"
      ],
      "preparo": [
        "Retire a gordura e corte o coração.",
        "Cozinhe por 30–35 min (ou 15 na pressão).",
        "Cozinhe cenoura e vagem.",
        "Pique tudo, misture e sirva."
      ],
      "indicado": "Adultos e idosos em dieta natural exclusiva.",
      "dicas": [
        "Se recusar, misture 10% ao alimento habitual.",
        "Cheiro mais intenso que o frango."
      ],
      "tempo": "40 min",
      "porcoes": "2 porções",
      "img": "meat"
    },
    {
      "id": "gato-p-34",
      "nome": "Carne com Ervilha e Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Energia para gatos ativos",
      "beneficios": [
        "Proteína animal + vegetal",
        "Magnésio da ervilha",
        "Energia da batata doce"
      ],
      "ingredientes": [
        "100g de carne moída magra cozida",
        "1 col. sopa de ervilha cozida",
        "1 col. sopa de batata doce cozida e amassada"
      ],
      "preparo": [
        "Cozinhe a carne.",
        "Cozinhe a ervilha por 5 min.",
        "Cozinhe e amasse a batata doce.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos ativos; evitar em sobrepeso.",
      "dicas": [
        "Troque batata por abobrinha em gatos diabéticos.",
        "Bom pela manhã."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-35",
      "nome": "Caldo Bovino com Legumes",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Suplemento líquido natural",
      "beneficios": [
        "Colágeno, gelatina e minerais",
        "Ótimo para quem bebe pouca água",
        "Beneficia articulações"
      ],
      "ingredientes": [
        "150g de osso bovino limpo",
        "1 cenoura picada",
        "1 chuchu picado",
        "500ml de água filtrada"
      ],
      "preparo": [
        "Ferva os ossos 5 min e descarte a água.",
        "Cozinhe ossos e legumes por 2h em fogo baixo.",
        "Coe rigorosamente e descarte sólidos.",
        "Sirva o caldo morno."
      ],
      "indicado": "Todas as idades; idosos e desidratados.",
      "dicas": [
        "Nunca ofereça os ossos cozidos.",
        "Congela por até 30 dias."
      ],
      "tempo": "2h 15min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-p-36",
      "nome": "Peru Desfiado com Abóbora",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Proteína magra e calmante",
      "beneficios": [
        "Peru muito magro",
        "Triptofano acalma",
        "Abóbora com fibras"
      ],
      "ingredientes": [
        "100g de peito de peru sem pele",
        "3 col. sopa de abóbora cozida e amassada"
      ],
      "preparo": [
        "Cozinhe o peru em água sem sal por 25 min.",
        "Desfie fino.",
        "Amasse a abóbora e misture.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos ansiosos ou agitados.",
      "dicas": [
        "Use sempre peito, in natura.",
        "Evite peru temperado/defumado."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-37",
      "nome": "Patê de Peru com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Alta aceitação",
      "beneficios": [
        "Peru em patê é muito aceito",
        "Textura aveludada",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "100g de peito de peru cozido",
        "1 cenoura média cozida",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe o peru por 25 min e reserve a água.",
        "Cozinhe a cenoura até macia.",
        "Bata tudo até patê homogêneo.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Filhotes 4m+ e adultos inapetentes.",
      "dicas": [
        "Ótimo para transição alimentar.",
        "Congele sobras."
      ],
      "tempo": "30 min",
      "porcoes": "2 porções",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-38",
      "nome": "Peru com Batata Doce e Vagem",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Equilíbrio e cicatrização",
      "beneficios": [
        "Proteína magra + energia",
        "Vagem com vitamina K",
        "Zinco para imunidade"
      ],
      "ingredientes": [
        "100g de peito de peru cozido e desfiado",
        "1 col. sopa de batata doce cozida",
        "4 vagens cozidas e picadas"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Cozinhe e amasse a batata doce.",
        "Cozinhe e pique as vagens.",
        "Misture tudo e sirva."
      ],
      "indicado": "Adultos saudáveis com boa atividade.",
      "dicas": [
        "Prefira vagens firmes e verdes.",
        "Sem sal."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-39",
      "nome": "Peru Assado com Abobrinha e Ervilha",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Aroma para seletivos",
      "beneficios": [
        "Assar realça sabor",
        "Abobrinha hidrata",
        "Ervilha com vitaminas B"
      ],
      "ingredientes": [
        "100g de peito de peru sem tempero",
        "3 rodelas de abobrinha cozida",
        "1 col. sopa de ervilha cozida"
      ],
      "preparo": [
        "Asse o peru a 180°C por 25–30 min.",
        "Cozinhe abobrinha e ervilha.",
        "Desfie o peru assado.",
        "Misture e sirva em temperatura ambiente."
      ],
      "indicado": "Adultos seletivos ou enjoados de cozidos.",
      "dicas": [
        "Use refratário de vidro, não alumínio.",
        "O aroma resgata o apetite."
      ],
      "tempo": "35 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-40",
      "nome": "Mousse de Peru com Espinafre",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Suave para idosos",
      "beneficios": [
        "Triptofano + folato",
        "Facilita digestão",
        "Ótima para idosos"
      ],
      "ingredientes": [
        "100g de peito de peru cozido",
        "2 folhas pequenas de espinafre cozidas",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe o peru e reserve a água.",
        "Cozinhe o espinafre por 2 min.",
        "Bata tudo até mousse.",
        "Sirva morno."
      ],
      "indicado": "Filhotes 4m+ e idosos; evitar em cálculos de oxalato.",
      "dicas": [
        "Use folhas jovens de espinafre.",
        "Idosos preferem morno."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-41",
      "nome": "Peru com Chuchu e Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Clássica e versátil",
      "beneficios": [
        "Proteína magra",
        "Chuchu leve e hidratante",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "100g de peito de peru cozido e desfiado",
        "1 chuchu pequeno cozido e picado",
        "1 col. sopa de cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Cozinhe chuchu e cenoura.",
        "Pique os legumes e misture.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Adultos saudáveis; uso rotineiro.",
      "dicas": [
        "Pode ser feita 3–4x/semana.",
        "Ótima para alternar com o frango."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-42",
      "nome": "Peru com Abóbora e Brócolis",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Foco em imunidade",
      "beneficios": [
        "Brócolis antioxidante",
        "Betacaroteno da abóbora",
        "Combate estresse oxidativo"
      ],
      "ingredientes": [
        "100g de peito de peru cozido e desfiado",
        "2 col. sopa de abóbora amassada",
        "1 raminho de brócolis (~20g) cozido"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Amasse a abóbora.",
        "Cozinhe o brócolis bem macio e pique.",
        "Misture e sirva."
      ],
      "indicado": "Adultos saudáveis ou em recuperação leve.",
      "dicas": [
        "Máx. 20g de brócolis.",
        "Nunca ofereça brócolis cru."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-43",
      "nome": "Mix de Frango e Sardinha com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Dupla proteína completa",
      "beneficios": [
        "Frango + sardinha (ômega 3)",
        "Taurina natural e vitamina D",
        "Perfil de aminoácidos amplo"
      ],
      "ingredientes": [
        "70g de peito de frango cozido e desfiado",
        "40g de sardinha assada sem espinhas",
        "1 col. sopa de cenoura ralada e cozida"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Asse a sardinha, retire espinhas e desfie.",
        "Cozinhe e rale a cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Adultos em dieta natural exclusiva.",
      "dicas": [
        "Confirme que não há espinhas.",
        "Uma das mais completas do guia."
      ],
      "tempo": "35 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-44",
      "nome": "Frango com Fígado de Frango e Legumes",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Multiproteica e rica",
      "beneficios": [
        "Peito + fígado",
        "Vitamina A, ferro e B12",
        "Legumes variados"
      ],
      "ingredientes": [
        "70g de peito de frango cozido",
        "30g de fígado de frango cozido",
        "1 col. sopa cada de cenoura, abobrinha e chuchu cozidos"
      ],
      "preparo": [
        "Cozinhe frango (20 min) e fígado (15 min) separadamente.",
        "Desfie o frango e pique o fígado.",
        "Cozinhe e pique os legumes.",
        "Misture tudo e sirva."
      ],
      "indicado": "Adultos. Máx. 2x/semana (pelo fígado).",
      "dicas": [
        "Fígado no máx. 30% da receita.",
        "Alterne com outras proteínas."
      ],
      "tempo": "35 min",
      "porcoes": "1 porção",
      "img": "meat"
    },
    {
      "id": "gato-p-45",
      "nome": "Carne com Coração de Frango e Abóbora",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Equilíbrio para o coração",
      "beneficios": [
        "Ferro + taurina",
        "Protege o cardiovascular",
        "Abóbora regula o intestino"
      ],
      "ingredientes": [
        "60g de carne moída magra cozida",
        "50g de coração de frango cozido",
        "2 col. sopa de abóbora amassada"
      ],
      "preparo": [
        "Cozinhe carne (15 min) e coração (20 min).",
        "Corte os corações ao meio.",
        "Amasse a abóbora.",
        "Misture os três e sirva."
      ],
      "indicado": "Adultos e idosos; ótimo em dieta natural completa.",
      "dicas": [
        "Coração é barato e nutritivo.",
        "Consulte o vet em cardiopatias."
      ],
      "tempo": "30 min",
      "porcoes": "2 porções",
      "img": "meat"
    },
    {
      "id": "gato-p-46",
      "nome": "Peru com Frango e Batata Doce",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Aves combinadas",
      "beneficios": [
        "Aminoácidos mais completos",
        "Triptofano + leucina",
        "Energia gradual"
      ],
      "ingredientes": [
        "60g de peito de frango cozido e desfiado",
        "50g de peito de peru cozido e desfiado",
        "2 col. sopa de batata doce cozida"
      ],
      "preparo": [
        "Cozinhe frango e peru juntos por 25 min.",
        "Desfie separadamente.",
        "Cozinhe e amasse a batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Adultos ativos e gatos em crescimento (6–12m).",
      "dicas": [
        "Teste proteínas separadas se houver alergia.",
        "Bom pela manhã."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-47",
      "nome": "Receita para Pelo Brilhante e Pele Saudável",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Formulada para a pelagem",
      "beneficios": [
        "Ômega 3 (EPA e DHA)",
        "Reduz inflamação da pele",
        "Betacaroteno para a pele"
      ],
      "ingredientes": [
        "1 sardinha fresca média sem espinhas",
        "3 rodelas de abobrinha cozida",
        "1 col. sopa de cenoura ralada e cozida"
      ],
      "preparo": [
        "Limpe e asse a sardinha a 180°C por 20 min.",
        "Cozinhe abobrinha e cenoura.",
        "Desfie a sardinha conferindo espinhas.",
        "Misture e sirva."
      ],
      "indicado": "Gatos com pelo longo/opaco. Máx. 3x/semana.",
      "dicas": [
        "Resultados em 4–6 semanas.",
        "Combine com escovação regular."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "fish"
    },
    {
      "id": "gato-p-48",
      "nome": "Receita para Digestão Sensível",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Suave para o estômago",
      "beneficios": [
        "Frango é a proteína mais digerível",
        "Abóbora regula nos dois sentidos",
        "Chuchu hidrata"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado fino",
        "3 col. sopa de abóbora bem lisa",
        "1 chuchu pequeno cozido e amassado"
      ],
      "preparo": [
        "Cozinhe o frango por 20 min e desfie fino.",
        "Cozinhe abóbora e chuchu até macios.",
        "Amasse até purê liso.",
        "Misture em textura pastosa e sirva."
      ],
      "indicado": "Todas as idades; gastrite, vômitos ou fezes inconsistentes.",
      "dicas": [
        "Introduza sempre de forma gradual.",
        "Se houver vômito/diarreia, volte ao anterior e consulte o vet."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-p-49",
      "nome": "Receita para Gatos Idosos (7+ anos)",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Nutrição para a terceira idade",
      "beneficios": [
        "Proteína magra e leve",
        "Taurina do coração",
        "Antioxidantes anti-idade"
      ],
      "ingredientes": [
        "70g de filé de tilápia cozido",
        "40g de coração de frango cozido",
        "1 cenoura pequena cozida",
        "3 col. sopa de água filtrada"
      ],
      "preparo": [
        "Cozinhe tilápia e coração; confira espinhas.",
        "Cozinhe a cenoura bem macia.",
        "Bata tudo até patê suave.",
        "Aqueça levemente e sirva morno."
      ],
      "indicado": "Gatos 7+ com perda muscular ou problemas dentários.",
      "dicas": [
        "3 refeições menores por dia.",
        "Perda de peso rápida? Consulte o vet."
      ],
      "tempo": "35 min",
      "porcoes": "2 porções",
      "img": "fish"
    },
    {
      "id": "gato-p-50",
      "nome": "Receita para Controle de Peso",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Emagrecimento saudável",
      "beneficios": [
        "Alta proteína magra",
        "Vagem e abobrinha de baixa caloria",
        "Fibras que saciam"
      ],
      "ingredientes": [
        "100g de peito de frango cozido sem gordura",
        "4 vagens cozidas e picadas",
        "3 rodelas de abobrinha cozida",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe e desfie bem o frango.",
        "Cozinhe vagem e abobrinha.",
        "Pique os legumes.",
        "Misture com a água do cozimento e divida em 3 refeições."
      ],
      "indicado": "Gatos castrados ou com sobrepeso.",
      "dicas": [
        "Emagrecimento nunca abrupto.",
        "Pese o gato mensalmente e acompanhe com o vet."
      ],
      "tempo": "25 min",
      "porcoes": "3 porções",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-01",
      "nome": "Cubinhos de Frango Crocante",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Recompensa crocante e dental",
      "beneficios": [
        "Estimula a mastigação",
        "100% proteína",
        "Reduz placa bacteriana"
      ],
      "ingredientes": [
        "50g de peito de frango sem pele"
      ],
      "preparo": [
        "Corte em cubos de ~1cm.",
        "Asse a 150°C por 25–30 min, virando na metade.",
        "Deixe esfriar; guarde na geladeira por até 3 dias."
      ],
      "indicado": "Gatos 1,5kg+; todas as fases (exceto filhotes <4m).",
      "dicas": [
        "Até 3x/semana, 3 cubinhos.",
        "Ótimo para esconder em brincadeiras de caça."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-02",
      "nome": "Chips de Frango Desidratado",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Aroma intenso e sem gordura",
      "beneficios": [
        "Concentra sabor",
        "Praticamente sem gordura",
        "Mastigação profunda"
      ],
      "ingredientes": [
        "50g de peito de frango sem pele, fatiado fino"
      ],
      "preparo": [
        "Fatie o frango bem fino.",
        "Asse a 100–110°C por 2–3h com porta entreaberta.",
        "Esfrie até ficar seco e crocante."
      ],
      "indicado": "Gatos 2kg+; adultos e idosos com boa dentição.",
      "dicas": [
        "Até 3x/semana, 2–3 chips.",
        "Premiação de alto valor em treino."
      ],
      "tempo": "3h",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-03",
      "nome": "Bolinhas de Frango com Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Divertido e nutritivo",
      "beneficios": [
        "Formato interativo",
        "Betacaroteno da cenoura",
        "Fácil de fazer"
      ],
      "ingredientes": [
        "80g de peito de frango cozido desfiado",
        "1 col. sopa de cenoura cozida amassada"
      ],
      "preparo": [
        "Desfie bem o frango.",
        "Amasse a cenoura em purê.",
        "Misture e modele bolinhas.",
        "Asse a 180°C por 15 min e esfrie."
      ],
      "indicado": "Recompensa e enriquecimento ambiental.",
      "dicas": [
        "Até 3x/semana, 2–3 bolinhas.",
        "Geladeira 3 dias; freezer 15 dias."
      ],
      "tempo": "25 min",
      "porcoes": "Várias",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-04",
      "nome": "Strips de Peito de Frango Assado",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Estímulo instintivo",
      "beneficios": [
        "Gato segura com as patas",
        "Exercita mandíbula",
        "Comportamento natural"
      ],
      "ingredientes": [
        "50g de peito de frango sem pele em tiras"
      ],
      "preparo": [
        "Corte o frango em tiras.",
        "Asse a 170°C até firmar.",
        "Esfrie e sirva 1 tira por oferta."
      ],
      "indicado": "Gatos 2kg+ com boa dentição; gatos entediados.",
      "dicas": [
        "Até 2x/semana.",
        "Nunca use pele ou partes gordurosas."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-05",
      "nome": "Cubos de Fígado de Frango Assado",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Alto valor em treino",
      "beneficios": [
        "Aroma irresistível",
        "Ferro, vitamina A e B12",
        "Pequenas porções bastam"
      ],
      "ingredientes": [
        "50g de fígado de frango em cubos"
      ],
      "preparo": [
        "Corte o fígado em cubos pequenos.",
        "Asse em forno baixo até firmar.",
        "Esfrie completamente."
      ],
      "indicado": "Treino, veterinário e situações difíceis.",
      "dicas": [
        "Máx. 2x/semana, 2 cubinhos.",
        "Alto teor de vitamina A."
      ],
      "tempo": "40 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-06",
      "nome": "Lascas de Sardinha Assada",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Ômega 3 e pelo brilhante",
      "beneficios": [
        "Aroma poderoso",
        "Ômega 3 concentrado",
        "Pele menos ressecada"
      ],
      "ingredientes": [
        "1 sardinha fresca pequena limpa e sem espinhas"
      ],
      "preparo": [
        "Limpe e asse a sardinha a 180°C por 20 min.",
        "Quebre em lascas conferindo espinhas.",
        "Esfrie e sirva."
      ],
      "indicado": "Premiação e suporte à saúde do pelo.",
      "dicas": [
        "Máx. 3x/semana, 2–3 lascas.",
        "Retire TODAS as espinhas."
      ],
      "tempo": "25 min",
      "porcoes": "Várias",
      "img": "fish"
    },
    {
      "id": "gato-t-07",
      "nome": "Chips de Tilápia Desidratada",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Peixe suave e seguro",
      "beneficios": [
        "Sabor mais suave",
        "Baixo mercúrio",
        "Uso frequente seguro"
      ],
      "ingredientes": [
        "50g de filé de tilápia sem espinhas"
      ],
      "preparo": [
        "Fatie fino conferindo espinhas.",
        "Asse a 100°C por 2h com porta entreaberta.",
        "Esfrie até crocante."
      ],
      "indicado": "Introdução ao peixe; uso frequente.",
      "dicas": [
        "Até 3x/semana, 2–3 chips.",
        "Guarde com papel toalha no pote."
      ],
      "tempo": "2h 10min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-08",
      "nome": "Pastinha de Sardinha com Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Lambedura calmante",
      "beneficios": [
        "Efeito calmante",
        "Reduz cortisol",
        "Ômega 3"
      ],
      "ingredientes": [
        "40g de sardinha em água (enxaguada)",
        "1 col. sopa de cenoura cozida amassada",
        "1 col. sopa de água filtrada"
      ],
      "preparo": [
        "Enxágue bem a sardinha e confira espinhas.",
        "Amasse com a cenoura e a água.",
        "Sirva em tapete de lambedura."
      ],
      "indicado": "Gatos ansiosos ou estressados.",
      "dicas": [
        "Máx. 3x/semana, 1 col. chá.",
        "Congele em forminhas para dias quentes."
      ],
      "tempo": "15 min",
      "porcoes": "Várias",
      "img": "fish"
    },
    {
      "id": "gato-t-09",
      "nome": "Biscoitinhos de Frango com Abóbora",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Caseiro sem aditivos",
      "beneficios": [
        "Sem conservantes",
        "Saúde bucal",
        "Textura firme"
      ],
      "ingredientes": [
        "80g de frango cozido moído",
        "2 col. sopa de abóbora amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa moldável.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 20–25 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa do dia a dia.",
      "dicas": [
        "Até 3x/semana, 2 biscoitinhos.",
        "Use farinha de arroz, evite trigo."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-10",
      "nome": "Cubinhos de Peru Assado",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Variação proteica",
      "beneficios": [
        "Sabor diferente do frango",
        "Previne sensibilizações",
        "Triptofano calmante"
      ],
      "ingredientes": [
        "50g de peito de peru sem pele em cubos"
      ],
      "preparo": [
        "Corte o peru em cubos.",
        "Asse até firmar.",
        "Esfrie e sirva."
      ],
      "indicado": "Variação de proteína e premiação.",
      "dicas": [
        "Até 3x/semana, 3 cubinhos.",
        "Alterne com cubinhos de frango."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-11",
      "nome": "Carne Bovina Desfiada Seca",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Alta proteína e ferro",
      "beneficios": [
        "Sabor intenso",
        "Ferro, zinco e B12",
        "Exercita a mandíbula"
      ],
      "ingredientes": [
        "80g de patinho ou músculo bovino magro"
      ],
      "preparo": [
        "Cozinhe a carne sem sal.",
        "Desfie e seque no forno baixo.",
        "Esfrie e guarde."
      ],
      "indicado": "Gatos que rejeitam aves.",
      "dicas": [
        "Até 3x/semana, 1 col. chá.",
        "Use cortes magros."
      ],
      "tempo": "50 min",
      "porcoes": "Várias",
      "img": "meat"
    },
    {
      "id": "gato-t-12",
      "nome": "Coração de Frango Cozido Inteiro",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Petisco natural completo",
      "beneficios": [
        "Rico em taurina",
        "Exercita dentes e mandíbula",
        "Muito nutritivo"
      ],
      "ingredientes": [
        "2 a 3 corações de frango limpos"
      ],
      "preparo": [
        "Higienize os corações.",
        "Cozinhe em água sem sal por ~20 min.",
        "Esfrie e sirva inteiros."
      ],
      "indicado": "Exercício dental e alto valor nutricional.",
      "dicas": [
        "Até 3x/semana, 1–2 corações.",
        "Coloque em dispensador para comer devagar."
      ],
      "tempo": "25 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-13",
      "nome": "Pastinha de Frango para Lambedura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Máximo efeito calmante",
      "beneficios": [
        "Libera endorfinas",
        "Reduz cortisol",
        "Ideal para procedimentos"
      ],
      "ingredientes": [
        "80g de frango cozido",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Bata o frango com a água até pastinha lisa.",
        "Sirva em tapete de lambedura ou colher."
      ],
      "indicado": "Gatos ansiosos, resgatados ou estressados.",
      "dicas": [
        "Até 4x/semana, 1 col. chá.",
        "Use no banho e no corte de unhas."
      ],
      "tempo": "15 min",
      "porcoes": "Várias",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-14",
      "nome": "Biscoitinhos de Sardinha",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Alto valor olfativo",
      "beneficios": [
        "Aroma marcante",
        "Chama a atenção à distância",
        "Ótimo em treino"
      ],
      "ingredientes": [
        "50g de sardinha em água (enxaguada)",
        "1 col. sopa de farinha de arroz",
        "1 col. sopa de cenoura amassada seca"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 20–25 min.",
        "Esfrie."
      ],
      "indicado": "Treino de comportamento e premiação.",
      "dicas": [
        "Máx. 2x/semana, 2 biscoitinhos.",
        "Congele para estoque."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-15",
      "nome": "Cubos de Tilápia com Catnip",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Funcional e divertido",
      "beneficios": [
        "Proteína da tilápia",
        "Efeito estimulante do catnip",
        "Nutre e diverte"
      ],
      "ingredientes": [
        "50g de filé de tilápia cozido sem espinhas",
        "1 pitada de catnip seco"
      ],
      "preparo": [
        "Cozinhe a tilápia e confira espinhas.",
        "Corte em cubos.",
        "Polvilhe o catnip só na hora de servir."
      ],
      "indicado": "Gatos que respondem ao catnip.",
      "dicas": [
        "Filhotes <6m raramente respondem.",
        "Adicione o catnip por último."
      ],
      "tempo": "20 min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-16",
      "nome": "Bolinhas de Atum com Abóbora",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Altíssima aceitação",
      "beneficios": [
        "Atum muito palatável",
        "Abóbora dá liga",
        "Bom para inapetentes"
      ],
      "ingredientes": [
        "50g de atum em água (enxaguado)",
        "1 col. sopa de abóbora amassada seca"
      ],
      "preparo": [
        "Amasse o atum com a abóbora.",
        "Modele bolinhas pequenas.",
        "Refrigere antes de servir."
      ],
      "indicado": "Gatos inapetentes ou em recuperação.",
      "dicas": [
        "Máx. 1x/semana (mercúrio).",
        "Atum só em água, sem sal."
      ],
      "tempo": "15 min",
      "porcoes": "Várias",
      "img": "fish"
    },
    {
      "id": "gato-t-17",
      "nome": "Crocantes de Fígado Bovino",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Recompensa de altíssimo impacto",
      "beneficios": [
        "Sabor mais intenso",
        "Vitamina A, ferro e B12",
        "Poucos gatos recusam"
      ],
      "ingredientes": [
        "50g de fígado bovino em cubinhos"
      ],
      "preparo": [
        "Corte o fígado em cubinhos minúsculos.",
        "Asse até firmar.",
        "Esfrie completamente."
      ],
      "indicado": "Situações especiais: pós-cirurgia, banho, veterinário.",
      "dicas": [
        "Máx. 1x/semana, 1–2 cubinhos.",
        "Cubinhos muito pequenos (0,3–0,5cm)."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-18",
      "nome": "Gel de Caldo de Frango",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Hidratação refrescante",
      "beneficios": [
        "Gelatiniza com colágeno",
        "Textura diferente",
        "Hidrata"
      ],
      "ingredientes": [
        "150g de frango com osso (mais colágeno)",
        "300ml de água filtrada"
      ],
      "preparo": [
        "Cozinhe em fogo baixo por 1h.",
        "Coe rigorosamente.",
        "Distribua em forminhas.",
        "Geladeira por 4h até gelificar."
      ],
      "indicado": "Hidratação e petisco interativo.",
      "dicas": [
        "Até 4x/semana, 2 cubinhos.",
        "Sirva levemente congelado no calor."
      ],
      "tempo": "1h 15min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-19",
      "nome": "Chips de Abobrinha com Frango",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Crocância de baixa caloria",
      "beneficios": [
        "Proteína + crocância vegetal",
        "Baixíssima caloria",
        "Bom para castrados"
      ],
      "ingredientes": [
        "30g de frango cozido desfiado",
        "3 fatias finas de abobrinha (2–3mm)"
      ],
      "preparo": [
        "Fatie a abobrinha bem fina.",
        "Distribua o frango sobre as fatias.",
        "Asse a 100°C por 2h até secar."
      ],
      "indicado": "Gatos com restrição calórica.",
      "dicas": [
        "Até 4x/semana, 3–4 chips.",
        "Não use abobrinha crua."
      ],
      "tempo": "2h 10min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-20",
      "nome": "Cubinhos de Coração de Frango Grelhado",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Taurina concentrada",
      "beneficios": [
        "Aroma mais intenso",
        "Fonte natural de taurina",
        "Camada crocante"
      ],
      "ingredientes": [
        "3 a 4 corações de frango limpos"
      ],
      "preparo": [
        "Higienize e grelhe em frigideira seca.",
        "Verifique que estão cozidos por dentro.",
        "Corte em cubinhos e sirva."
      ],
      "indicado": "Suplementação natural de taurina.",
      "dicas": [
        "Até 3x/semana, 2 corações.",
        "Nunca grelhe em óleo ou manteiga."
      ],
      "tempo": "20 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-21",
      "nome": "Palitinhos de Peru Assado",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Segura com as patas",
      "beneficios": [
        "Formato instintivo",
        "Proteína magra com triptofano",
        "Interação com o tutor"
      ],
      "ingredientes": [
        "50g de peito de peru sem pele em tiras"
      ],
      "preparo": [
        "Corte o peru em tiras finas.",
        "Asse a 170°C por 25 min.",
        "Esfrie e ofereça da mão."
      ],
      "indicado": "Enriquecimento e jogo de interação.",
      "dicas": [
        "Até 3x/semana, 1 palitinho.",
        "Geladeira 3 dias."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-22",
      "nome": "Gelatina de Caldo de Peixe",
      "pet": "gato",
      "dificuldade": "avancado",
      "refeicao": "petisco",
      "beneficio": "Colágeno e curiosidade",
      "beneficios": [
        "Textura diferente",
        "Minerais e colágeno",
        "Muito bem aceita"
      ],
      "ingredientes": [
        "100g de carcaça de tilápia ou espinha de merluza",
        "300ml de água filtrada"
      ],
      "preparo": [
        "Cozinhe para extrair o caldo.",
        "Coe com peneira fina e depois pano de musselina.",
        "Distribua em forminhas e leve à geladeira."
      ],
      "indicado": "Hidratação e curiosidade sensorial.",
      "dicas": [
        "Até 3x/semana, 2 cubinhos.",
        "Coagem impecável — zero fragmentos."
      ],
      "tempo": "1h",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-23",
      "nome": "Biscoitinhos de Frango, Cenoura e Arroz",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Nutritivo e aromático",
      "beneficios": [
        "Sem conservantes",
        "Aroma de frango assado",
        "Crocante"
      ],
      "ingredientes": [
        "80g de frango cozido processado",
        "2 col. sopa de cenoura amassada seca",
        "2 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa e dispensadores.",
      "dicas": [
        "Até 4x/semana, 2–3 biscoitinhos.",
        "Se amolecer, volte ao forno 10 min."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-24",
      "nome": "Rolinhos de Frango com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Formato que desperta curiosidade",
      "beneficios": [
        "Núcleo úmido de cenoura",
        "Exterior de frango",
        "Sensorialmente rico"
      ],
      "ingredientes": [
        "80g de peito de frango cozido amassado",
        "1 cenoura pequena cozida em palitinhos"
      ],
      "preparo": [
        "Abra a massa de frango na palma.",
        "Coloque a cenoura no centro e enrole.",
        "Asse a 170°C por 20 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa e enriquecimento.",
      "dicas": [
        "Até 3x/semana, 2 rolinhos.",
        "Também pode servir sem assar."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-25",
      "nome": "Lascas de Frango no Caldo",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Petisco líquido e hidratante",
      "beneficios": [
        "Hidratação + proteína",
        "Muito palatável",
        "Atrai gatos seletivos"
      ],
      "ingredientes": [
        "80g de frango em lascas",
        "100ml de caldo de frango sem sal"
      ],
      "preparo": [
        "Cozinhe e desfie o frango em lascas.",
        "Aqueça o caldo sem sal.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Gatos que rejeitam petiscos sólidos.",
      "dicas": [
        "Consuma no mesmo dia.",
        "Ótimo para hidratação (consulte o vet em doença renal)."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-26",
      "nome": "Biscoitinhos de Peru com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Suave e calmante",
      "beneficios": [
        "Triptofano do peru",
        "Betacaroteno da batata doce",
        "Sabor adocicado"
      ],
      "ingredientes": [
        "80g de peito de peru cozido processado",
        "2 col. sopa de batata doce amassada seca",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Gatos ansiosos ou agitados.",
      "dicas": [
        "Até 3x/semana, 2 biscoitinhos.",
        "Menos forno = mais macio."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-27",
      "nome": "Cubinhos de Frango e Coração Mistos",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Mix de texturas e taurina",
      "beneficios": [
        "Sabores e texturas variados",
        "Taurina do coração",
        "Muito nutritivo"
      ],
      "ingredientes": [
        "30g de peito de frango",
        "30g de coração de frango"
      ],
      "preparo": [
        "Cozinhe juntos por 20 min.",
        "Corte em cubinhos.",
        "Seque no forno a 150°C por 15 min.",
        "Misture em pote único."
      ],
      "indicado": "Recompensa nutritiva semanal.",
      "dicas": [
        "Até 3x/semana, 3–4 cubinhos.",
        "Prepare o mix da semana."
      ],
      "tempo": "40 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-28",
      "nome": "Pastinha de Carne Bovina com Cenoura",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Lambedura para resistentes a aves",
      "beneficios": [
        "Alta palatabilidade",
        "Ferro biodisponível",
        "Suporte imunológico"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido macio",
        "1 cenoura pequena cozida",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe carne, cenoura e água até pastinha.",
        "Sirva em tapete de lambedura ou colher."
      ],
      "indicado": "Gatos que não gostam de aves.",
      "dicas": [
        "Até 3x/semana, 1 col. chá.",
        "Freezer 15 dias."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "meat"
    },
    {
      "id": "gato-t-29",
      "nome": "Chips de Frango e Peru Mistos",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Estímulos variados",
      "beneficios": [
        "Duas proteínas",
        "Mantém o interesse",
        "Triptofano + leucina"
      ],
      "ingredientes": [
        "30g de peito de frango",
        "30g de peito de peru"
      ],
      "preparo": [
        "Fatie fino cada proteína.",
        "Asse separadas a 100°C por 2–2,5h.",
        "Esfrie e misture."
      ],
      "indicado": "Recompensa variada e dispensadores.",
      "dicas": [
        "Até 3x/semana, 3 chips.",
        "Ótimo para brinquedos dispensadores."
      ],
      "tempo": "2h 30min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-30",
      "nome": "Bolinha de Sardinha com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Dupla poderosa para o pelo",
      "beneficios": [
        "Ômega 3 + betacaroteno",
        "Sem farinha",
        "Pelo saudável"
      ],
      "ingredientes": [
        "50g de sardinha em água (enxaguada)",
        "2 col. sopa de batata doce amassada seca"
      ],
      "preparo": [
        "Amasse sardinha e batata doce.",
        "Modele bolinhas.",
        "Asse a 160°C por 20 min.",
        "Esfrie."
      ],
      "indicado": "Saúde do pelo e premiação.",
      "dicas": [
        "Máx. 2x/semana, 2 bolinhas.",
        "Resultados no pelo em 4–8 semanas."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "fish"
    },
    {
      "id": "gato-t-31",
      "nome": "Cubos de Músculo Bovino com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Colágeno e mastigação",
      "beneficios": [
        "Textura densa",
        "Colágeno natural",
        "Ótimo para idosos"
      ],
      "ingredientes": [
        "80g de músculo bovino sem gordura",
        "1 col. sopa de cenoura cozida"
      ],
      "preparo": [
        "Cozinhe o músculo na pressão por 40 min.",
        "Corte em cubos.",
        "Seque no forno a 140°C por 25–30 min.",
        "Esfrie."
      ],
      "indicado": "Gatos idosos com articulações sensíveis.",
      "dicas": [
        "Cozinhe em lote e congele.",
        "Planeje o preparo no fim de semana."
      ],
      "tempo": "1h 15min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-32",
      "nome": "Biscoitinhos de Fígado de Frango",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Isca de alto valor",
      "beneficios": [
        "Aroma penetrante",
        "Muito aceitos",
        "Fácil de fazer"
      ],
      "ingredientes": [
        "70g de fígado de frango limpo",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Cozinhe e processe o fígado até pasta.",
        "Misture com a farinha.",
        "Modele biscoitinhos minúsculos.",
        "Asse a 150°C por 20–25 min."
      ],
      "indicado": "Treino, veterinário e novos ambientes.",
      "dicas": [
        "Máx. 2x/semana, 2 biscoitinhos.",
        "Congele metade do lote."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-33",
      "nome": "Palitinhos de Peixe com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Predatório e funcional",
      "beneficios": [
        "Ômega 3 do peixe",
        "Betacaroteno da cenoura",
        "Formato de caça"
      ],
      "ingredientes": [
        "60g de filé de tilápia cozido processado",
        "1 cenoura pequena cozida em palitinhos"
      ],
      "preparo": [
        "Envolva os palitinhos de cenoura com a pasta de tilápia.",
        "Asse a 170°C por 18 min.",
        "Esfrie."
      ],
      "indicado": "Interação ativa e divertida.",
      "dicas": [
        "Até 2x/semana, 1 palitinho.",
        "Ofereça pela ponta e deixe puxar."
      ],
      "tempo": "25 min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-34",
      "nome": "Mini Almôndegas de Peru",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Enriquecimento e jogo",
      "beneficios": [
        "Formato surpreendente",
        "Boa para dispensadores",
        "Estrutura densa"
      ],
      "ingredientes": [
        "100g de peito de peru moído",
        "1 col. sopa de cenoura amassada seca"
      ],
      "preparo": [
        "Misture peru e cenoura.",
        "Modele mini almôndegas.",
        "Asse a 175°C por 18–20 min.",
        "Esfrie."
      ],
      "indicado": "Jogo, estimulação física e premiação.",
      "dicas": [
        "Até 3x/semana, 3 mini almôndegas.",
        "Esconda pela casa para caçadas."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "meat"
    },
    {
      "id": "gato-t-35",
      "nome": "Cubo de Gelo de Caldo de Frango",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Petisco gelado de verão",
      "beneficios": [
        "Hidratação",
        "Refrescância",
        "Enriquecimento ambiental"
      ],
      "ingredientes": [
        "200ml de caldo de frango caseiro sem sal"
      ],
      "preparo": [
        "Coe o caldo.",
        "Distribua em forminhas de gelo.",
        "Congele por no mínimo 4h."
      ],
      "indicado": "Períodos de calor.",
      "dicas": [
        "Até diariamente no calor, 1–2 cubos.",
        "Deixe derreter um pouco se agitar."
      ],
      "tempo": "4h 10min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-36",
      "nome": "Biscoitinhos de Tilápia com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Introdução ao peixe",
      "beneficios": [
        "Sabor suave de peixe",
        "Fácil aceitação",
        "Nutritivo"
      ],
      "ingredientes": [
        "60g de filé de tilápia cozido sem espinhas",
        "2 col. sopa de batata doce amassada seca",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 20 min.",
        "Esfrie."
      ],
      "indicado": "Gatos seletivos ou novos ao peixe.",
      "dicas": [
        "Até 3x/semana, 2 biscoitinhos.",
        "Comece esfarelando sobre o petisco habitual."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-37",
      "nome": "Rolinhos de Peru com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Visualmente atraente",
      "beneficios": [
        "Dois momentos de sabor",
        "Exterior de peru",
        "Interior de cenoura"
      ],
      "ingredientes": [
        "80g de peito de peru cozido processado",
        "1 cenoura pequena cozida em palitinhos"
      ],
      "preparo": [
        "Abra a pasta de peru e coloque a cenoura no centro.",
        "Enrole e asse a 170°C por 20 min.",
        "Esfrie."
      ],
      "indicado": "Enriquecimento ambiental.",
      "dicas": [
        "Até 3x/semana, 2 rolinhos.",
        "Esconda pela casa."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-38",
      "nome": "Pastinha de Peru com Batata Doce (Lambedura)",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Calmante para ansiosos",
      "beneficios": [
        "Triptofano calmante",
        "Textura aveludada",
        "Reduz estresse"
      ],
      "ingredientes": [
        "80g de peito de peru cozido",
        "2 col. sopa de batata doce amassada",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe tudo até pastinha.",
        "Sirva em tapete de lambedura."
      ],
      "indicado": "Gatos ansiosos.",
      "dicas": [
        "Até 4x/semana, 1 col. chá.",
        "Ofereça 20 min antes de situações estressantes."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-39",
      "nome": "Mix de Petisco Proteico",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "O mais completo do guia",
      "beneficios": [
        "Frango + peru + coração",
        "Aminoácidos variados",
        "Taurina, triptofano e leucina"
      ],
      "ingredientes": [
        "30g de frango",
        "30g de peru",
        "30g de coração de frango"
      ],
      "preparo": [
        "Cozinhe as três proteínas.",
        "Corte em cubinhos.",
        "Seque juntas no forno.",
        "Divida em potinhos de 3 dias."
      ],
      "indicado": "Dieta natural exclusiva.",
      "dicas": [
        "Descongele na geladeira.",
        "Prepare em maior quantidade."
      ],
      "tempo": "40 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-40",
      "nome": "Bolinha de Frango com Brócolis",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Vegetal disfarçado",
      "beneficios": [
        "Antioxidante e anti-inflamatório",
        "Frango esconde o vegetal",
        "Palatável"
      ],
      "ingredientes": [
        "80g de peito de frango cozido processado",
        "1 col. chá de brócolis cozido macio amassado"
      ],
      "preparo": [
        "Misture 90% frango e 10% brócolis.",
        "Modele bolinhas.",
        "Asse até firmar.",
        "Esfrie."
      ],
      "indicado": "Gatos saudáveis (não indicado com problema de tireoide).",
      "dicas": [
        "Máx. 2x/semana, 2 bolinhas.",
        "Nunca use brócolis cru."
      ],
      "tempo": "25 min",
      "porcoes": "Várias",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-41",
      "nome": "Petisco Gelado de Atum para o Verão",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Experiência sensorial no calor",
      "beneficios": [
        "Lambedura prolongada",
        "Hidratação",
        "Aroma irresistível"
      ],
      "ingredientes": [
        "40g de atum em água (enxaguado)",
        "80ml de água filtrada"
      ],
      "preparo": [
        "Amasse o atum e dilua na água.",
        "Distribua em forminha de gelo.",
        "Congele por 4h."
      ],
      "indicado": "Dias quentes.",
      "dicas": [
        "Máx. 1x/semana, 1 cubo (mercúrio).",
        "Tenha caldo de frango como alternativa diária."
      ],
      "tempo": "4h 10min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-42",
      "nome": "Croquete de Carne e Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Petisco especial",
      "beneficios": [
        "Dupla textura",
        "Alta palatabilidade",
        "Premiação importante"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido processado",
        "2 col. sopa de batata doce amassada seca",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele croquetes minúsculos.",
        "Asse até dourar.",
        "Esfrie."
      ],
      "indicado": "Fim de semana e premiação especial.",
      "dicas": [
        "Até 2x/semana, 2 croquetes.",
        "Prepare em lote e congele metade."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-43",
      "nome": "Chips de Peru e Abobrinha",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Baixa caloria e variedade",
      "beneficios": [
        "Dupla textura e sabor",
        "Baixíssima caloria",
        "Variedade sem calorias extras"
      ],
      "ingredientes": [
        "30g de peito de peru",
        "3 fatias finas de abobrinha"
      ],
      "preparo": [
        "Intercale peru e abobrinha na assadeira.",
        "Asse a 95–100°C por 2–2,5h.",
        "Seque bem e esfrie."
      ],
      "indicado": "Gatos em controle de peso.",
      "dicas": [
        "Até 4x/semana, 4 chips.",
        "A abobrinha é aceita intercalada com o peru."
      ],
      "tempo": "2h 30min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-44",
      "nome": "Pastinha de Coração de Frango (Lambedura)",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Taurina em lambedura",
      "beneficios": [
        "Alto valor nutricional",
        "Taurina biodisponível",
        "Momento de calma"
      ],
      "ingredientes": [
        "80g de coração de frango cozido limpo",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe o coração com a água até pastinha.",
        "Sirva em tapete ou colher."
      ],
      "indicado": "Dieta natural exclusiva.",
      "dicas": [
        "Até 4x/semana, 1 col. chá.",
        "Ideal em momentos de calma."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "meat"
    },
    {
      "id": "gato-t-45",
      "nome": "Biscoitinhos de Frango com Vagem",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Fibras e minerais",
      "beneficios": [
        "Vitamina K da vagem",
        "Potássio e magnésio",
        "Baixa caloria"
      ],
      "ingredientes": [
        "80g de frango cozido processado",
        "2 vagens cozidas amassadas secas",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 20–22 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa de baixa caloria.",
      "dicas": [
        "Até 4x/semana, 2–3 biscoitinhos.",
        "Vagem no máx. 15% da receita."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-46",
      "nome": "Petisco de Sardinha Congelado",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Refrescância para o verão",
      "beneficios": [
        "Aroma irresistível",
        "Hidratação",
        "Enriquecimento"
      ],
      "ingredientes": [
        "20g de sardinha em água (sem espinhas)",
        "80ml de água filtrada"
      ],
      "preparo": [
        "Remova TODAS as espinhas.",
        "Amasse e dilua na água.",
        "Congele em forminha por 4h."
      ],
      "indicado": "Dias quentes.",
      "dicas": [
        "Máx. 2x/semana, 1 cubo.",
        "Espinhas só podem ser conferidas antes de congelar."
      ],
      "tempo": "4h 10min",
      "porcoes": "Vários",
      "img": "fish"
    },
    {
      "id": "gato-t-47",
      "nome": "Biscoitinhos de Carne com Cenoura",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Versão bovina intensa",
      "beneficios": [
        "Sabor mais intenso",
        "Ferro e B12",
        "Boa para quem prefere vermelha"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido processado",
        "2 col. sopa de cenoura amassada seca",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 165°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Gatos que preferem carne vermelha.",
      "dicas": [
        "Até 3x/semana, 2 biscoitinhos.",
        "Se secar demais, adicione 1 col. chá da água do cozimento."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "meat"
    },
    {
      "id": "gato-t-48",
      "nome": "Rolinhos de Frango com Batata Doce",
      "pet": "gato",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "O mais elaborado do guia",
      "beneficios": [
        "Recheio adocicado",
        "Alta aceitação",
        "Sensorialmente rico"
      ],
      "ingredientes": [
        "80g de peito de frango cozido em pasta",
        "2 col. sopa de batata doce amassada seca"
      ],
      "preparo": [
        "Abra a pasta de frango e recheie com batata doce.",
        "Enrole e asse até firmar.",
        "Esfrie."
      ],
      "indicado": "Ocasiões especiais.",
      "dicas": [
        "Até 2x/semana, 2 rolinhos.",
        "Decore com marca de garfo para fotos."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-49",
      "nome": "Pastinha de Abóbora com Frango",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Funcional para o intestino",
      "beneficios": [
        "Fibra solúvel da abóbora",
        "Regula o intestino",
        "Alivia constipação"
      ],
      "ingredientes": [
        "60g de frango cozido",
        "3 col. sopa de abóbora amassada",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe tudo até pastinha.",
        "Sirva em tapete ou colher."
      ],
      "indicado": "Constipação leve (uso terapêutico curto).",
      "dicas": [
        "Até 4x/semana, 1 col. chá.",
        "Se piorar, consulte o veterinário."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "cat_meal"
    },
    {
      "id": "gato-t-50",
      "nome": "Mix de Petiscos da Semana",
      "pet": "gato",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Variedade organizada",
      "beneficios": [
        "Previne alergias",
        "Mantém o interesse",
        "Espectro nutricional amplo"
      ],
      "ingredientes": [
        "Combinação semanal dos petiscos anteriores",
        "Ex.: frango, sardinha, coração, peru, fígado"
      ],
      "preparo": [
        "Prepare os petiscos base no fim de semana.",
        "Divida por dia da semana.",
        "Marque na geladeira o que usou."
      ],
      "indicado": "Rotina semanal de petiscos.",
      "dicas": [
        "Petiscos = máx. 10% das calorias diárias.",
        "Varie a proteína a cada dia."
      ],
      "tempo": "—",
      "porcoes": "Semana",
      "img": "meat"
    },
    {
      "id": "cao-p-01",
      "nome": "Frango Desfiado com Arroz e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "A base da alimentação natural",
      "beneficios": [
        "Proteína magra digestível",
        "Arroz bem tolerado",
        "Betacaroteno da cenoura"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele",
        "3 col. sopa de arroz branco cozido",
        "1 cenoura média cozida e picada"
      ],
      "preparo": [
        "Cozinhe o frango por 20 min e desfie.",
        "Cozinhe o arroz e a cenoura.",
        "Misture os três ingredientes.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Todas as idades e portes; introdução à dieta natural.",
      "dicas": [
        "Comece por esta receita por 7 dias.",
        "Proporção 70% proteína / 20% carbo / 10% vegetal."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-02",
      "nome": "Patê de Frango com Batata Doce e Abobrinha",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Ideal para pequenos e idosos",
      "beneficios": [
        "Ótimo para problemas dentários",
        "Energia gradual",
        "Abobrinha hidrata"
      ],
      "ingredientes": [
        "100g de peito de frango cozido",
        "2 col. sopa de batata doce amassada",
        "3 rodelas de abobrinha cozida",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe o frango e reserve a água.",
        "Cozinhe batata doce e abobrinha.",
        "Bata tudo até patê homogêneo.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Filhotes 2m+, idosos e cães com problemas dentários.",
      "dicas": [
        "Aqueça levemente para idosos.",
        "Nunca sirva quente."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-03",
      "nome": "Frango com Ovo Cozido e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Alto valor proteico",
      "beneficios": [
        "Todos os aminoácidos essenciais",
        "Colina e vitamina B12",
        "Muito palatável"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "1 ovo inteiro cozido e amassado",
        "1 cenoura pequena cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe o ovo por 12 min e amasse.",
        "Cozinhe e pique a cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Adultos e filhotes em crescimento.",
      "dicas": [
        "Nunca ofereça ovo cru.",
        "Limite 3–4 ovos/semana (1–2 para pequenos)."
      ],
      "tempo": "25 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-04",
      "nome": "Frango Assado com Arroz Integral e Brócolis",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Baixo índice glicêmico",
      "beneficios": [
        "Arroz integral com fibras",
        "Brócolis antioxidante",
        "Aroma que estimula o apetite"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele",
        "3 col. de arroz integral cozido",
        "1 raminho de brócolis (30g) cozido"
      ],
      "preparo": [
        "Asse o frango até dourar.",
        "Cozinhe bem o arroz integral.",
        "Cozinhe o brócolis e pique.",
        "Misture e sirva."
      ],
      "indicado": "Adultos com sobrepeso leve; porte médio e grande.",
      "dicas": [
        "Máx. 30g de brócolis, 3x/semana.",
        "Prepare arroz integral em lote."
      ],
      "tempo": "45 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-05",
      "nome": "Frango com Abóbora e Vagem",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Leveza intestinal",
      "beneficios": [
        "Abóbora regula o intestino",
        "Vagem de baixa caloria",
        "Ótima para intestino sensível"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "3 col. sopa de abóbora amassada",
        "4 vagens cozidas e picadas"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Amasse a abóbora cozida.",
        "Cozinhe e pique as vagens.",
        "Misture e sirva."
      ],
      "indicado": "Cães com digestão sensível.",
      "dicas": [
        "Em diarreia leve, aumente a abóbora e retire a vagem.",
        "Se persistir 24h, procure o vet."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-06",
      "nome": "Frango com Batata Doce e Espinafre",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Alta densidade nutricional",
      "beneficios": [
        "Espinafre com ferro e folato",
        "Energia da batata doce",
        "Fortalece a imunidade"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "2 col. sopa de batata doce amassada",
        "3 folhas de espinafre cozidas"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe e amasse a batata doce.",
        "Cozinhe o espinafre por 3 min e pique.",
        "Misture e sirva."
      ],
      "indicado": "Adultos saudáveis; anemia leve. Não indicado em cálculos de oxalato.",
      "dicas": [
        "Sempre cozinhe o espinafre (reduz oxalatos).",
        "3 folhas por porção."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-07",
      "nome": "Coxa de Frango Desossada com Arroz e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Mais calórica para ativos",
      "beneficios": [
        "Mais gordura boa para o pelo",
        "Ácidos graxos essenciais",
        "Energia extra"
      ],
      "ingredientes": [
        "100g de coxa de frango SEM OSSO",
        "3 col. sopa de arroz branco cozido",
        "1 cenoura média cozida e picada"
      ],
      "preparo": [
        "Retire TODOS os ossos e cozinhe por 25 min.",
        "Desfie a carne.",
        "Cozinhe arroz e cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cães magros, filhotes e portes grandes.",
      "dicas": [
        "Atenção redobrada aos ossos.",
        "Não use em cães com sobrepeso."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-08",
      "nome": "Frango com Maçã e Aveia (Café da Manhã)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Manhã completa e palatável",
      "beneficios": [
        "Maçã com fibra e quercetina",
        "Aveia de baixo IG",
        "Betaglucana"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "2 col. sopa de aveia em flocos cozida",
        "2 fatias de maçã sem casca e sem sementes, cozidas"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe a aveia por 5 min.",
        "Cozinhe levemente a maçã por 3 min.",
        "Misture e sirva."
      ],
      "indicado": "Café da manhã de cães adultos.",
      "dicas": [
        "Nunca ofereça maçã com sementes (cianeto).",
        "Aveia sempre cozida."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "dog"
    },
    {
      "id": "cao-p-09",
      "nome": "Fígado de Frango com Arroz e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Superalimento nutritivo",
      "beneficios": [
        "Ferro biodisponível",
        "Vitamina A, B12 e zinco",
        "Ótimo para anemia"
      ],
      "ingredientes": [
        "80g de fígado de frango limpo",
        "3 col. sopa de arroz branco cozido",
        "1 cenoura pequena cozida e picada"
      ],
      "preparo": [
        "Lave e cozinhe o fígado por 20 min até firme.",
        "Pique em pedaços pequenos.",
        "Cozinhe arroz e cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cães com anemia ou fraqueza.",
      "dicas": [
        "Máx. 2x/semana (vitamina A).",
        "Use o fígado para disfarçar ingredientes rejeitados."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-10",
      "nome": "Sopa de Frango com Legumes Variados",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Hidratação e recuperação",
      "beneficios": [
        "Caldo rico em colágeno",
        "Estimula a hidratação",
        "Ótima para doentes"
      ],
      "ingredientes": [
        "100g de frango (retirar osso antes de servir)",
        "1 cenoura",
        "2 col. sopa de abóbora",
        "3 rodelas de abobrinha",
        "2 col. sopa de arroz cru",
        "500ml de água"
      ],
      "preparo": [
        "Cozinhe o frango por 30 min.",
        "Retire TODOS os ossos e desfie.",
        "Adicione legumes e arroz e cozinhe 20 min.",
        "Retorne o frango e sirva morno."
      ],
      "indicado": "Cães doentes, em recuperação ou inapetentes.",
      "dicas": [
        "Congela por até 30 dias.",
        "O caldo sozinho estimula o apetite."
      ],
      "tempo": "1h",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-11",
      "nome": "Carne Moída com Arroz e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Clássica com carne bovina",
      "beneficios": [
        "Ferro heme biodisponível",
        "Zinco e B12",
        "Refeição nutritiva"
      ],
      "ingredientes": [
        "100g de carne moída magra (patinho/acém)",
        "3 col. sopa de arroz branco cozido",
        "1 cenoura média cozida e picada"
      ],
      "preparo": [
        "Cozinhe a carne desmanchando bem, por 20 min.",
        "Escorra o excesso de líquido.",
        "Cozinhe arroz e cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cães com tendência à anemia.",
      "dicas": [
        "Use sempre cortes magros.",
        "Evite cortes gordurosos (pancreatite)."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-12",
      "nome": "Músculo Bovino com Batata Doce e Vagem",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Articulações fortes",
      "beneficios": [
        "Colágeno natural",
        "Gelatina para articulações",
        "Vitamina K e magnésio"
      ],
      "ingredientes": [
        "100g de músculo bovino sem gordura",
        "2 col. sopa de batata doce amassada",
        "4 vagens cozidas e picadas"
      ],
      "preparo": [
        "Cozinhe o músculo na pressão até macio.",
        "Desfie a carne.",
        "Cozinhe batata doce e vagem.",
        "Misture (inclua um pouco do caldo) e sirva."
      ],
      "indicado": "Adultos e idosos; raças grandes.",
      "dicas": [
        "Inclua 1–2 col. do caldo (gelatina).",
        "Prepare em lote e congele."
      ],
      "tempo": "50 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-13",
      "nome": "Patê de Carne Bovina com Cenoura e Aveia",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Nutritivo para pequenos",
      "beneficios": [
        "Bom para mastigação difícil",
        "Betaglucana da aveia",
        "Betacaroteno"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido",
        "1 cenoura cozida",
        "2 col. sopa de aveia cozida",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe a carne e reserve a água.",
        "Cozinhe cenoura e aveia.",
        "Bata tudo até patê.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Porte pequeno/médio e idosos.",
      "dicas": [
        "Use aveia em flocos finos.",
        "A aveia dá volume sem muitas calorias."
      ],
      "tempo": "30 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-14",
      "nome": "Coração Bovino com Arroz e Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "CoQ10 para o coração",
      "beneficios": [
        "Fonte de CoQ10",
        "Ferro e complexo B",
        "Barato e nutritivo"
      ],
      "ingredientes": [
        "100g de coração bovino sem gordura",
        "3 col. sopa de arroz branco cozido",
        "1 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Retire a gordura e cozinhe por 30–35 min (ou 15 na pressão).",
        "Pique em cubos.",
        "Cozinhe arroz e batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Raças com predisposição a cardiopatias.",
      "dicas": [
        "Cheiro intenso: comece com 30% misturado.",
        "Aumente ao longo de 5–7 dias."
      ],
      "tempo": "45 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-15",
      "nome": "Fígado Bovino com Arroz e Abobrinha",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Máxima vitamina A e ferro",
      "beneficios": [
        "Riquíssimo em vitamina A",
        "Ferro e B12",
        "Transformador para anemia"
      ],
      "ingredientes": [
        "80g de fígado bovino limpo",
        "3 col. sopa de arroz branco cozido",
        "3 rodelas de abobrinha cozida"
      ],
      "preparo": [
        "Lave e remova membranas do fígado.",
        "Cozinhe por 20–25 min.",
        "Pique em cubos.",
        "Cozinhe arroz e abobrinha; misture e sirva."
      ],
      "indicado": "Cães com anemia ou baixa imunidade.",
      "dicas": [
        "Máx. 10–15% da porção, 1–2x/semana.",
        "Nunca use fígado diariamente."
      ],
      "tempo": "35 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-16",
      "nome": "Peru Desfiado com Arroz e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Proteína magra e calmante",
      "beneficios": [
        "Peru muito magro",
        "Triptofano acalma",
        "Bom para controle de peso"
      ],
      "ingredientes": [
        "100g de peito de peru sem pele",
        "3 col. sopa de arroz branco cozido",
        "1 cenoura média cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Cozinhe arroz e cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cães com sobrepeso, castrados ou ansiosos.",
      "dicas": [
        "Substitua o frango pelo peru 3x/semana em sobrepeso.",
        "Sem sal."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-17",
      "nome": "Sardinha com Arroz e Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Ômega 3 anti-inflamatório",
      "beneficios": [
        "EPA e DHA",
        "Pelo e pele saudáveis",
        "Ação anti-inflamatória"
      ],
      "ingredientes": [
        "1 sardinha fresca sem espinhas (ou em água, enxaguada)",
        "3 col. sopa de arroz branco cozido",
        "2 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Asse a sardinha a 180°C por 20 min e retire espinhas.",
        "Cozinhe arroz e batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Cães com artrite ou displasia (3x/semana).",
      "dicas": [
        "Remova TODAS as espinhas.",
        "Resultados em 4–8 semanas."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-18",
      "nome": "Tilápia com Batata Doce e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Peixe suave e seguro",
      "beneficios": [
        "Baixíssimo mercúrio",
        "Sabor suave",
        "Betacaroteno"
      ],
      "ingredientes": [
        "100g de filé de tilápia",
        "2 col. sopa de batata doce amassada",
        "1 cenoura pequena cozida e picada"
      ],
      "preparo": [
        "Verifique e remova espinhas; cozinhe 15–20 min.",
        "Desfaça em lascas conferindo espinhas.",
        "Cozinhe batata doce e cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cães novos ao peixe; alérgicos a frango.",
      "dicas": [
        "Descongele na geladeira.",
        "Ótima proteína alternativa."
      ],
      "tempo": "25 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-19",
      "nome": "Atum com Arroz e Brócolis (Ativos)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Antioxidante para ativos",
      "beneficios": [
        "Ômega 3 e vitamina D",
        "Sulforafano do brócolis",
        "Para cães muito ativos"
      ],
      "ingredientes": [
        "100g de atum em água (enxaguado)",
        "3 col. sopa de arroz branco cozido",
        "1 raminho de brócolis (30g) cozido"
      ],
      "preparo": [
        "Enxágue bem o atum.",
        "Cozinhe arroz e brócolis.",
        "Pique o brócolis e misture.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Cães adultos ativos.",
      "dicas": [
        "Máx. 1x/semana (mercúrio).",
        "Nunca use atum em óleo."
      ],
      "tempo": "25 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-20",
      "nome": "Caldo de Osso Bovino com Legumes",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Superalimento articular",
      "beneficios": [
        "Colágeno e glucosamina naturais",
        "Cálcio e magnésio",
        "Beneficia intestino e imunidade"
      ],
      "ingredientes": [
        "200g de osso bovino com carne",
        "1 cenoura",
        "1 chuchu",
        "1 talo de aipo (opcional)",
        "600ml de água"
      ],
      "preparo": [
        "Ferva os ossos 5 min e descarte a água.",
        "Cozinhe ossos e legumes por 3–4h em fogo baixo.",
        "Coe rigorosamente.",
        "Sirva o caldo morno."
      ],
      "indicado": "Idosos com dores articulares.",
      "dicas": [
        "Nunca ofereça os ossos cozidos.",
        "Congela por até 30 dias."
      ],
      "tempo": "4h",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-p-21",
      "nome": "Frango com Ovo e Batata Doce",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Refeição completa e palatável",
      "beneficios": [
        "Dupla proteína completa",
        "Colina do ovo",
        "Energia da batata doce"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "1 ovo bem cozido e picado",
        "2 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe o ovo por 12 min e pique.",
        "Cozinhe e amasse a batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Adultos ativos e filhotes 4m+.",
      "dicas": [
        "Proteína essencial no crescimento.",
        "Máx. 3–4 ovos/semana."
      ],
      "tempo": "25 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-22",
      "nome": "Peru com Abóbora e Arroz (Castrados)",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Para metabolismo lento",
      "beneficios": [
        "Proteína magra",
        "Abóbora sacia",
        "Arroz sem excessos"
      ],
      "ingredientes": [
        "100g de peito de peru cozido e desfiado",
        "4 col. sopa de abóbora amassada",
        "2 col. sopa de arroz branco cozido"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Amasse a abóbora cozida.",
        "Misture com o arroz e sirva."
      ],
      "indicado": "Cães castrados com tendência ao sobrepeso.",
      "dicas": [
        "Reduza calorias gradualmente (2–3 semanas).",
        "Monitore o peso mensalmente."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-23",
      "nome": "Carne com Ovo e Cenoura (Alta Proteína)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Para cães atletas",
      "beneficios": [
        "Proteínas complementares",
        "Alta concentração proteica",
        "Boa para musculação"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido e desfiado",
        "1 ovo bem cozido e picado",
        "1 cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie a carne.",
        "Cozinhe o ovo por 12 min e pique.",
        "Cozinhe a cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cães de trabalho, esporte ou musculação.",
      "dicas": [
        "Não sirva antes de exercícios intensos.",
        "Sirva 1h antes/depois do exercício."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-24",
      "nome": "Peru com Ovo, Batata Doce e Vagem",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Muito completa",
      "beneficios": [
        "Proteína magra + colina",
        "Energia e antioxidantes",
        "Vitamina K da vagem"
      ],
      "ingredientes": [
        "80g de peito de peru cozido e desfiado",
        "1 ovo bem cozido e picado",
        "1 col. sopa de batata doce amassada",
        "3 vagens cozidas e picadas"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Cozinhe o ovo por 12 min.",
        "Cozinhe batata doce e vagem.",
        "Pique tudo, misture e sirva."
      ],
      "indicado": "Cães saudáveis.",
      "dicas": [
        "Reduza a batata doce em sobrepeso.",
        "Substitua por mais vagem se preciso."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-25",
      "nome": "Frango com Arroz, Abóbora e Ovo",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Base semanal completa",
      "beneficios": [
        "Ampla abrangência nutricional",
        "Colina e fibras",
        "Energia do arroz"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "1 ovo bem cozido e picado",
        "2 col. sopa de arroz branco cozido",
        "2 col. sopa de abóbora amassada"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe o ovo por 12 min e pique.",
        "Cozinhe arroz e abóbora.",
        "Misture e sirva."
      ],
      "indicado": "Uso rotineiro como base semanal.",
      "dicas": [
        "Congela por até 30 dias.",
        "Nunca descongele no micro-ondas."
      ],
      "tempo": "25 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-26",
      "nome": "Frango com Maçã, Cenoura e Aveia (Anti-inflamatória)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Foco anti-inflamatório",
      "beneficios": [
        "Quercetina da maçã",
        "Betacaroteno",
        "Betaglucana da aveia"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "3 fatias de maçã sem casca e sem sementes cozidas",
        "1 cenoura cozida e ralada",
        "2 col. sopa de aveia cozida"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe a maçã por 3 min.",
        "Cozinhe cenoura e aveia.",
        "Misture e sirva."
      ],
      "indicado": "Cães com artrite leve ou alergias.",
      "dicas": [
        "Retire casca e sementes da maçã.",
        "Prefira maçã Fuji ou Gala."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-27",
      "nome": "Frango com Espinafre, Ovo e Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Reforço imunológico",
      "beneficios": [
        "Ferro, folato e vitamina K",
        "Aminoácidos completos",
        "Carbo de fácil digestão"
      ],
      "ingredientes": [
        "80g de frango cozido e desfiado",
        "1 ovo bem cozido e picado",
        "3 folhas de espinafre cozidas",
        "2 col. sopa de arroz branco cozido"
      ],
      "preparo": [
        "Cozinhe frango, ovo e espinafre.",
        "Cozinhe o arroz.",
        "Pique o espinafre e o ovo.",
        "Misture e sirva."
      ],
      "indicado": "Cães saudáveis; evitar em cálculos de oxalato.",
      "dicas": [
        "3 folhas (pequenos) a 6 (grandes).",
        "Espinafre sempre cozido."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-28",
      "nome": "Carne com Ovo, Arroz e Abóbora",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Completa para o dia a dia",
      "beneficios": [
        "Proteínas complementares",
        "Abóbora regula o intestino",
        "Arroz bem tolerado"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido e desfiado",
        "1 ovo bem cozido e picado",
        "2 col. sopa de arroz branco cozido",
        "2 col. sopa de abóbora amassada"
      ],
      "preparo": [
        "Cozinhe e desfie a carne.",
        "Cozinhe o ovo por 12 min e pique.",
        "Cozinhe arroz e abóbora.",
        "Misture e sirva."
      ],
      "indicado": "Uso diário; cães com constipação.",
      "dicas": [
        "Aumente a abóbora para 40% em constipação.",
        "Se persistir 2 dias, procure o vet."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-29",
      "nome": "Sardinha com Ovo e Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Pelo, pele e sistema nervoso",
      "beneficios": [
        "Ômega 3 + vitamina D",
        "Melhora absorção de cálcio",
        "Antioxidantes"
      ],
      "ingredientes": [
        "1 sardinha fresca sem espinhas (ou em água, enxaguada)",
        "1 ovo bem cozido e picado",
        "2 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Asse/cozinhe a sardinha e retire espinhas.",
        "Cozinhe o ovo por 12 min.",
        "Cozinhe e amasse a batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Cães com pelo seco ou dermatite. Máx. 3x/semana.",
      "dicas": [
        "Resultados no pelo em 4–8 semanas.",
        "Combine com escovação."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-30",
      "nome": "Frango com Banana, Aveia e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Café da manhã especial",
      "beneficios": [
        "Potássio da banana",
        "Fibra da aveia",
        "Betacaroteno"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "2 rodelas de banana madura amassada",
        "2 col. sopa de aveia cozida"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe a aveia por 5 min.",
        "Amasse a banana e misture tudo.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Café da manhã palatável.",
      "dicas": [
        "Use banana madura.",
        "Máx. 2 rodelas; retire a casca."
      ],
      "tempo": "25 min",
      "porcoes": "1 porção",
      "img": "dog"
    },
    {
      "id": "cao-p-31",
      "nome": "Peru com Ovo, Cenoura e Espinafre",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Alto valor para ativos",
      "beneficios": [
        "Proteína magra + ovo",
        "Ferro e folato",
        "Betacaroteno"
      ],
      "ingredientes": [
        "80g de peito de peru cozido e desfiado",
        "1 ovo bem cozido e picado",
        "1 cenoura cozida e picada",
        "3 folhas de espinafre cozidas"
      ],
      "preparo": [
        "Cozinhe peru, ovo e espinafre.",
        "Cozinhe a cenoura.",
        "Pique tudo fino e misture.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Cães muito ativos (agility, canicross).",
      "dicas": [
        "Pode ser diária para atletas.",
        "Espinafre sempre cozido."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-32",
      "nome": "Carne com Batata Doce, Cenoura e Vagem",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Espectro nutricional amplo",
      "beneficios": [
        "Ferro e proteína",
        "Três vegetais complementares",
        "Vitaminas variadas"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido e desfiado",
        "1 col. sopa de batata doce amassada",
        "1 cenoura cozida e picada",
        "4 vagens cozidas e picadas"
      ],
      "preparo": [
        "Cozinhe e desfie a carne.",
        "Cozinhe os legumes.",
        "Amasse a batata doce e pique o resto.",
        "Misture e sirva."
      ],
      "indicado": "Cardápio semanal rotineiro.",
      "dicas": [
        "Alterne proteínas ao longo da semana.",
        "Garante espectro nutricional completo."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-33",
      "nome": "Frango com Feijão Verde e Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Leve e nutritiva",
      "beneficios": [
        "Feijão verde com vitamina K",
        "Baixa caloria",
        "Betacaroteno"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "5 vagens de feijão verde cozidas e picadas",
        "1 cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Cozinhe o feijão verde por 10 min.",
        "Cozinhe a cenoura.",
        "Pique tudo, misture e sirva."
      ],
      "indicado": "Cães em controle de peso.",
      "dicas": [
        "Feijão VERDE cozido é seguro; feijão seco temperado é proibido.",
        "Nunca ofereça cru."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-34",
      "nome": "Mix de Frango e Sardinha com Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Perfil nutricional excepcional",
      "beneficios": [
        "Proteína magra + ômega 3",
        "Leucina e EPA/DHA",
        "Anti-inflamatória"
      ],
      "ingredientes": [
        "70g de peito de frango cozido e desfiado",
        "40g de sardinha sem espinhas",
        "3 col. sopa de arroz branco cozido"
      ],
      "preparo": [
        "Cozinhe e desfie o frango.",
        "Prepare a sardinha e retire espinhas.",
        "Cozinhe o arroz.",
        "Misture e sirva."
      ],
      "indicado": "Cães com artrite ou displasia (3x/semana).",
      "dicas": [
        "Resultados em 4–6 semanas.",
        "Confira todas as espinhas."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-35",
      "nome": "Receita para Filhotes (4–12 meses)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Crescimento saudável",
      "beneficios": [
        "Alta proteína",
        "Cálcio para ossos",
        "Vitaminas para imunidade"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado fino",
        "1 ovo bem cozido e amassado",
        "1 col. sopa de batata doce amassada",
        "1 col. sopa de cenoura amassada"
      ],
      "preparo": [
        "Cozinhe tudo separadamente sem sal.",
        "Amasse ovo, batata e cenoura.",
        "Desfie o frango bem fino.",
        "Misture em textura pastosa e sirva morno."
      ],
      "indicado": "Filhotes de 4 a 12 meses.",
      "dicas": [
        "Divida em 3–4 refeições.",
        "Raças grandes: não superalimente."
      ],
      "tempo": "30 min",
      "porcoes": "3–4 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-36",
      "nome": "Receita para Cães Idosos (7+ anos)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Nutrição para a terceira idade",
      "beneficios": [
        "Proteína de qualidade",
        "Carbo de baixo IG",
        "Ingredientes anti-inflamatórios"
      ],
      "ingredientes": [
        "80g de filé de tilápia cozido sem espinhas",
        "1 ovo bem cozido e amassado",
        "2 col. sopa de arroz integral cozido",
        "1 cenoura cozida e amassada"
      ],
      "preparo": [
        "Cozinhe a tilápia e confira espinhas.",
        "Cozinhe o ovo por 12 min.",
        "Cozinhe arroz integral e cenoura.",
        "Misture e sirva levemente morno."
      ],
      "indicado": "Cães 7+ anos.",
      "dicas": [
        "3 refeições menores por dia.",
        "Exames semestrais são essenciais."
      ],
      "tempo": "50 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-37",
      "nome": "Receita para Controle de Peso",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Menos calorias, mesma nutrição",
      "beneficios": [
        "Proteína magra",
        "Vegetais de baixa caloria",
        "Alta saciedade"
      ],
      "ingredientes": [
        "100g de peito de peru cozido e desfiado",
        "4 rodelas de abobrinha cozida",
        "5 vagens cozidas e picadas",
        "2 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Cozinhe abobrinha e vagem.",
        "Pique os legumes.",
        "Misture com a água e divida em 3 porções."
      ],
      "indicado": "Cães com sobrepeso.",
      "dicas": [
        "Perda máx. 1–2% do peso/semana.",
        "Pese quinzenalmente."
      ],
      "tempo": "30 min",
      "porcoes": "3 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-38",
      "nome": "Receita para Pelo Brilhante e Pele Saudável",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Formulada para a pelagem",
      "beneficios": [
        "Ômega 3 (EPA e DHA)",
        "Biotina do ovo",
        "Betacaroteno da batata doce"
      ],
      "ingredientes": [
        "1 sardinha fresca sem espinhas (ou em água, enxaguada)",
        "1 ovo bem cozido e picado",
        "2 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Asse a sardinha a 180°C por 20 min e retire espinhas.",
        "Cozinhe o ovo por 12 min.",
        "Cozinhe e amasse a batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Cães com pelo opaco. 3x/semana.",
      "dicas": [
        "Resultados em 4–8 semanas.",
        "Escove o pelo 3x/semana."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-39",
      "nome": "Receita para Articulações Sensíveis",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Anti-inflamatória e articular",
      "beneficios": [
        "Colágeno do músculo",
        "Ômega 3 da sardinha",
        "Antioxidantes"
      ],
      "ingredientes": [
        "60g de músculo bovino cozido e desfiado",
        "40g de sardinha assada sem espinhas",
        "2 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Cozinhe o músculo na pressão por 40 min e desfie.",
        "Asse a sardinha e retire espinhas.",
        "Cozinhe e amasse a batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Cães com displasia ou artrite.",
      "dicas": [
        "4x/semana, alternando com caldo de osso (R20).",
        "Protocolo anti-inflamatório natural."
      ],
      "tempo": "50 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-40",
      "nome": "Carne com Ovo, Espinafre e Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Densidade nutricional máxima",
      "beneficios": [
        "Ferro, B12 e zinco",
        "Proteína completa",
        "Ferro vegetal e folato"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido e desfiado",
        "1 ovo bem cozido e picado",
        "3 folhas de espinafre cozidas",
        "1 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Cozinhe tudo separadamente.",
        "Desfie a carne e pique o ovo e o espinafre.",
        "Amasse a batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Cães em recuperação ou com deficiências.",
      "dicas": [
        "2x ao dia em recuperação.",
        "Acompanhe com o veterinário."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-41",
      "nome": "Frango com Abóbora, Aveia e Maçã",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Funcional e palatável",
      "beneficios": [
        "Quercetina + betaglucana",
        "Fibra reguladora",
        "Proteína magra"
      ],
      "ingredientes": [
        "100g de peito de frango cozido e desfiado",
        "2 col. sopa de abóbora amassada",
        "2 col. sopa de aveia cozida",
        "3 fatias de maçã sem casca e sem sementes cozidas"
      ],
      "preparo": [
        "Cozinhe frango, abóbora e aveia.",
        "Cozinhe a maçã por 3 min.",
        "Desfie o frango e amasse a abóbora.",
        "Misture e sirva."
      ],
      "indicado": "Alternância no cardápio.",
      "dicas": [
        "Máx. 3 fatias de maçã.",
        "Prefira maçã Fuji ou Gala."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-42",
      "nome": "Peru com Sardinha, Cenoura e Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Mix proteico funcional",
      "beneficios": [
        "Peru magro + ômega 3",
        "Vitamina D",
        "Manutenção muscular + coração"
      ],
      "ingredientes": [
        "60g de peito de peru cozido e desfiado",
        "50g de sardinha sem espinhas",
        "2 col. sopa de arroz branco cozido",
        "1 cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie o peru.",
        "Prepare a sardinha e retire espinhas.",
        "Cozinhe arroz e cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Raças de pelo longo (3x/semana).",
      "dicas": [
        "Impacto documentado no pelo.",
        "Confira as espinhas."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-43",
      "nome": "Carne com Banana, Aveia e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Prebiótica e palatável",
      "beneficios": [
        "Potássio da banana",
        "Fibra imunorreguladora",
        "Efeito prebiótico"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido e desfiado",
        "2 rodelas de banana madura amassada",
        "2 col. sopa de aveia cozida",
        "1 cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe e desfie a carne.",
        "Cozinhe a aveia e a cenoura.",
        "Amasse a banana e misture tudo.",
        "Sirva em temperatura ambiente."
      ],
      "indicado": "Cães com disbiose intestinal.",
      "dicas": [
        "Ajuda a flora em 2–3 semanas.",
        "Use banana madura."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-44",
      "nome": "Frango com Ervilha, Cenoura e Ovo",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Variada e nutritiva",
      "beneficios": [
        "Proteína vegetal complementar",
        "Magnésio e vitaminas B",
        "Antioxidantes"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "1 ovo bem cozido e picado",
        "2 col. sopa de ervilha cozida",
        "1 cenoura cozida e picada"
      ],
      "preparo": [
        "Cozinhe frango e ovo.",
        "Cozinhe a ervilha por 5 min.",
        "Cozinhe a cenoura.",
        "Misture e sirva."
      ],
      "indicado": "Cardápio variado.",
      "dicas": [
        "Ervilha fresca/congelada sem sal.",
        "Máx. 2 col.; cuidado em doença renal."
      ],
      "tempo": "25 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-45",
      "nome": "Frango com Batata Doce, Maçã e Canela",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Funcional com sabor irresistível",
      "beneficios": [
        "Canela anti-inflamatória",
        "Antioxidantes",
        "Controle glicêmico"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "2 col. sopa de batata doce amassada",
        "3 fatias de maçã sem casca e sem sementes cozidas",
        "1 pitada mínima de canela do Ceilão"
      ],
      "preparo": [
        "Cozinhe frango, batata doce e maçã.",
        "Desfie o frango e amasse a batata.",
        "Pique a maçã e misture.",
        "Adicione uma pitada de canela e sirva."
      ],
      "indicado": "Cardápio funcional.",
      "dicas": [
        "Use APENAS canela do Ceilão.",
        "Dose mínima; não use em cães grandes sem o vet."
      ],
      "tempo": "30 min",
      "porcoes": "1 porção",
      "img": "dog"
    },
    {
      "id": "cao-p-46",
      "nome": "Caldo de Frango com Legumes e Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Refeição líquida completa",
      "beneficios": [
        "Hidratação + nutrientes",
        "Rico em eletrólitos",
        "Ótima para inapetentes"
      ],
      "ingredientes": [
        "150g de frango com osso (retirar antes de servir)",
        "1 cenoura picada",
        "1 chuchu picado",
        "2 col. sopa de arroz cru",
        "700ml de água"
      ],
      "preparo": [
        "Cozinhe o frango com osso por 40 min.",
        "Retire TODOS os ossos e desfie.",
        "Adicione legumes e arroz e cozinhe 20 min.",
        "Retorne o frango e sirva morno."
      ],
      "indicado": "Cães doentes ou desidratados.",
      "dicas": [
        "Comece com 1–2 col. por hora.",
        "Se persistir 24h, vá ao vet."
      ],
      "tempo": "1h",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-47",
      "nome": "Tilápia com Ovo, Arroz e Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Completa e acessível",
      "beneficios": [
        "Proteínas complementares",
        "Baixo mercúrio",
        "Energia de qualidade"
      ],
      "ingredientes": [
        "80g de filé de tilápia cozido sem espinhas",
        "1 ovo bem cozido e picado",
        "2 col. sopa de arroz branco cozido",
        "1 col. sopa de batata doce amassada"
      ],
      "preparo": [
        "Cozinhe a tilápia e confira espinhas.",
        "Cozinhe o ovo por 12 min.",
        "Cozinhe arroz e batata doce.",
        "Misture e sirva."
      ],
      "indicado": "Cães com alergia ao frango.",
      "dicas": [
        "Tilápia raramente causa reação.",
        "Descongele na geladeira."
      ],
      "tempo": "30 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-48",
      "nome": "Carne com Feijão Verde, Brócolis e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "Diversidade vegetal",
      "beneficios": [
        "Ferro e proteína",
        "Sulforafano do brócolis",
        "Vitamina K e betacaroteno"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido e desfiado",
        "1 raminho de brócolis (25g) cozido",
        "4 vagens de feijão verde cozidas",
        "1 cenoura pequena cozida"
      ],
      "preparo": [
        "Cozinhe e desfie a carne.",
        "Cozinhe bem os vegetais.",
        "Pique tudo pequeno.",
        "Misture e sirva."
      ],
      "indicado": "Cardápio com diversidade vegetal.",
      "dicas": [
        "Brócolis máx. 25g, sempre cozido.",
        "Consulte o vet em hipotireoidismo."
      ],
      "tempo": "35 min",
      "porcoes": "1–2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-49",
      "nome": "Frango com Ovo, Abóbora, Batata Doce e Aveia",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "principal",
      "beneficio": "A 'receita mãe' semanal",
      "beneficios": [
        "Cinco ingredientes complementares",
        "Proteína completa",
        "Fibra e energia"
      ],
      "ingredientes": [
        "80g de peito de frango cozido e desfiado",
        "1 ovo bem cozido e picado",
        "2 col. sopa de abóbora amassada",
        "1 col. sopa de batata doce amassada",
        "1 col. sopa de aveia cozida"
      ],
      "preparo": [
        "Cozinhe tudo separadamente.",
        "Desfie o frango e pique o ovo.",
        "Amasse abóbora e batata; cozinhe a aveia.",
        "Misture os cinco e sirva."
      ],
      "indicado": "Base do cardápio 2–3x/semana.",
      "dicas": [
        "Congele em porções de 3 dias.",
        "Adicione 1 col. de água morna ao descongelar."
      ],
      "tempo": "35 min",
      "porcoes": "2 porções",
      "img": "dog"
    },
    {
      "id": "cao-p-50",
      "nome": "Guia de Cardápio Semanal",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "principal",
      "beneficio": "Organização da semana",
      "beneficios": [
        "Variedade previne alergias",
        "Espectro nutricional amplo",
        "Mantém o interesse"
      ],
      "ingredientes": [
        "Combine as receitas anteriores em 2 refeições/dia",
        "Ex.: R01, R11, R17, R05, R21, R12..."
      ],
      "preparo": [
        "Varie a proteína diariamente.",
        "Inclua 1 refeição de peixe/semana.",
        "Inclua 1 refeição de vísceras/semana."
      ],
      "indicado": "Planejamento semanal.",
      "dicas": [
        "Fígado máx. 2x/semana; peixe máx. 3x.",
        "Introdução gradual em 4 semanas."
      ],
      "tempo": "—",
      "porcoes": "Semana",
      "img": "dog"
    },
    {
      "id": "cao-t-01",
      "nome": "Cubinhos de Frango Crocante",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "O petisco de treino mais versátil",
      "beneficios": [
        "Crocante por fora, macio por dentro",
        "100% proteína",
        "Ideal para treino"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele em cubos de 1–1,5cm"
      ],
      "preparo": [
        "Corte em cubos sem tempero.",
        "Asse a 150°C por 25–30 min, virando na metade.",
        "Esfrie e guarde na geladeira até 4 dias."
      ],
      "indicado": "Adultos e filhotes 3m+; todos os portes.",
      "dicas": [
        "Até 5x/semana, 3–5 cubinhos.",
        "Leve no bolso nos passeios."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-02",
      "nome": "Chips de Frango Desidratado",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Alto valor olfativo",
      "beneficios": [
        "Concentra sabor e aroma",
        "Textura quebradiça",
        "Chama a atenção"
      ],
      "ingredientes": [
        "100g de peito de frango sem pele em fatias de 2–3mm"
      ],
      "preparo": [
        "Fatie o frango fino.",
        "Asse a 100–110°C por 2–3h com porta entreaberta.",
        "Esfrie; geladeira até 5 dias."
      ],
      "indicado": "Treino de alta performance; dispensadores.",
      "dicas": [
        "Até 4x/semana, 2–3 chips.",
        "Ótimo para Kong e bolas furadas."
      ],
      "tempo": "3h",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-03",
      "nome": "Biscoitinhos de Frango, Cenoura e Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Caseiro completo",
      "beneficios": [
        "Sem corante/conservante",
        "Farinha de arroz hipoalergênica",
        "Palatável"
      ],
      "ingredientes": [
        "100g de frango cozido processado",
        "3 col. sopa de cenoura amassada seca",
        "3 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa moldável.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22–25 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa do dia a dia.",
      "dicas": [
        "Até 5x/semana, 2–3 biscoitinhos.",
        "Prepare em lote e congele metade."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-04",
      "nome": "Palitinhos de Frango Assado",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Segura com as patas",
      "beneficios": [
        "Comportamento natural",
        "Exercita patas e mandíbula",
        "Prolonga o consumo"
      ],
      "ingredientes": [
        "100g de peito de frango em tiras de 1,5cm × 5–8cm"
      ],
      "preparo": [
        "Corte o frango em tiras.",
        "Asse a 170°C por 25 min.",
        "Esfrie; geladeira até 3 dias."
      ],
      "indicado": "Adultos com boa dentição; cães entediados.",
      "dicas": [
        "Ofereça da mão e deixe puxar.",
        "Fortalece o vínculo."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-05",
      "nome": "Bolinhas de Frango com Cenoura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Petisco-brinquedo",
      "beneficios": [
        "Rola de forma imprevisível",
        "Estimula a caça",
        "Coordenação motora"
      ],
      "ingredientes": [
        "100g de peito de frango cozido processado",
        "2 col. sopa de cenoura amassada (purê)"
      ],
      "preparo": [
        "Processe o frango até pasta densa.",
        "Misture com o purê de cenoura.",
        "Modele bolinhas e asse a 175°C por 18–20 min.",
        "Esfrie."
      ],
      "indicado": "Enriquecimento ambiental.",
      "dicas": [
        "Até 4x/semana, 3–4 bolinhas.",
        "Esconda pela casa."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-06",
      "nome": "Fígado de Frango Assado (Alto Valor)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Moeda de troca no treino",
      "beneficios": [
        "Aroma intenso",
        "Recompensa de alto valor",
        "Ferro e vitamina A"
      ],
      "ingredientes": [
        "100g de fígado de frango limpo em cubinhos de 0,5–1cm"
      ],
      "preparo": [
        "Cozinhe o fígado por 20 min.",
        "Corte em cubinhos.",
        "Asse a 140°C por 25–30 min.",
        "Esfrie; geladeira até 4 dias."
      ],
      "indicado": "Recall, veterinário, banho, novos ambientes.",
      "dicas": [
        "Máx. 2x/semana, 3–4 cubinhos.",
        "Reserve para situações de alto valor."
      ],
      "tempo": "50 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-07",
      "nome": "Biscoitinhos de Fígado de Frango",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Petisco de treino mais eficaz",
      "beneficios": [
        "Aroma penetrante",
        "Funciona com distrações",
        "Não suja o bolso"
      ],
      "ingredientes": [
        "100g de fígado de frango cozido",
        "2 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Cozinhe e processe o fígado até pasta.",
        "Misture com a farinha.",
        "Modele biscoitinhos de 0,5cm.",
        "Asse a 150°C por 20–25 min."
      ],
      "indicado": "Treino com muitas repetições.",
      "dicas": [
        "Máx. 2x/semana, 4–5 biscoitinhos.",
        "Tamanho minúsculo para engolir rápido."
      ],
      "tempo": "40 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-08",
      "nome": "Cubinhos de Carne Bovina Assada",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Sabor robusto para treino longo",
      "beneficios": [
        "Sabor intenso",
        "Ferro, zinco e B12",
        "Mantém o interesse"
      ],
      "ingredientes": [
        "100g de patinho bovino magro (sem gordura)"
      ],
      "preparo": [
        "Cozinhe em água sem sal por 20 min.",
        "Asse a 150°C por 25 min.",
        "Esfrie; geladeira até 4 dias."
      ],
      "indicado": "Treino prolongado; cães de campo.",
      "dicas": [
        "Até 3x/semana, 3–4 cubinhos.",
        "Energia sustentada em treinos físicos."
      ],
      "tempo": "50 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-09",
      "nome": "Chips de Peru Desidratado",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Suave e calmante",
      "beneficios": [
        "Sabor diferente do frango",
        "Triptofano acalma",
        "Mantém o interesse"
      ],
      "ingredientes": [
        "100g de peito de peru sem pele em fatias de 2mm"
      ],
      "preparo": [
        "Fatie fino.",
        "Asse a 100°C por 2–2,5h com porta entreaberta.",
        "Esfrie; geladeira até 5 dias."
      ],
      "indicado": "Cães reativos; variação de sabor.",
      "dicas": [
        "Até 4x/semana, 3 chips.",
        "Efeito calmante com uso regular."
      ],
      "tempo": "2h 30min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-10",
      "nome": "Lascas de Sardinha Assada",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Aroma irresistível e pelo brilhante",
      "beneficios": [
        "Aroma potente",
        "Ômega 3 concentrado",
        "Quebra a resistência"
      ],
      "ingredientes": [
        "1 sardinha fresca média limpa e sem espinhas"
      ],
      "preparo": [
        "Limpe e asse a 180°C por 20–25 min.",
        "Quebre em lascas conferindo espinhas.",
        "Esfrie; geladeira até 2 dias."
      ],
      "indicado": "Cães que ignoram outros petiscos.",
      "dicas": [
        "Máx. 3x/semana, 2–3 lascas.",
        "Retire TODAS as espinhas."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-11",
      "nome": "Pastinha de Frango para Lambedura",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Calmante em procedimentos",
      "beneficios": [
        "Libera endorfinas",
        "Reduz cortisol",
        "Distração eficaz"
      ],
      "ingredientes": [
        "100g de peito de frango cozido",
        "4 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Bata até pastinha lisa e fluida.",
        "Sirva no tapete de lambedura ou congele em forminhas."
      ],
      "indicado": "Banho, corte de unhas e viagens.",
      "dicas": [
        "Congele por até 20 dias.",
        "Corte unhas enquanto o cão lambe."
      ],
      "tempo": "15 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-12",
      "nome": "Biscoitinhos de Sardinha com Farinha de Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Treino outdoor de impacto",
      "beneficios": [
        "Aroma penetrante",
        "Ômega 3 real",
        "Funciona com distrações"
      ],
      "ingredientes": [
        "80g de sardinha em água (enxaguada)",
        "2 col. sopa de farinha de arroz",
        "1 ovo bem cozido e amassado"
      ],
      "preparo": [
        "Enxágue a sardinha.",
        "Misture sardinha, ovo e farinha.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min."
      ],
      "indicado": "Treino ao ar livre e premiação de impacto.",
      "dicas": [
        "Máx. 2x/semana, 3–4 biscoitinhos.",
        "O ovo é o aglutinante natural."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-13",
      "nome": "Biscoitinhos de Carne com Aveia e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Robusto e crocante",
      "beneficios": [
        "Sabor robusto",
        "Betaglucana da aveia",
        "Prolonga a saciedade"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido processado",
        "2 col. sopa de aveia em flocos finos",
        "2 col. sopa de cenoura amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa moldável.",
        "Modele biscoitinhos.",
        "Asse a 165°C por 22–25 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa nutritiva.",
      "dicas": [
        "Até 4x/semana, 2–3 biscoitinhos.",
        "Aveia crua funciona como espessante."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-14",
      "nome": "Cubo de Gelo de Caldo de Frango",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Hidratação refrescante",
      "beneficios": [
        "Refrescância",
        "Enriquecimento sensorial",
        "Libera sabor gradual"
      ],
      "ingredientes": [
        "300ml de caldo de frango caseiro sem sal, coado"
      ],
      "preparo": [
        "Coe o caldo e deixe esfriar.",
        "Distribua em forminhas.",
        "Congele por no mínimo 4h."
      ],
      "indicado": "Períodos de calor.",
      "dicas": [
        "Até diariamente no calor, 1–2 cubos.",
        "Sirva em prato de inox no quintal."
      ],
      "tempo": "4h 10min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-15",
      "nome": "Bolinha de Sardinha com Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Pelo brilhante",
      "beneficios": [
        "Ômega 3 + betacaroteno",
        "Reduz descamação",
        "Sem farinha"
      ],
      "ingredientes": [
        "60g de sardinha em água (enxaguada)",
        "3 col. sopa de batata doce amassada seca"
      ],
      "preparo": [
        "Misture sardinha e batata doce.",
        "Modele bolinhas.",
        "Asse a 165°C por 18–20 min.",
        "Esfrie."
      ],
      "indicado": "Saúde do pelo.",
      "dicas": [
        "Máx. 2x/semana, 2–3 bolinhas.",
        "Resultados em 4–8 semanas."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-16",
      "nome": "Pastinha de Carne com Cenoura (Lambedura)",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Estímulo intenso",
      "beneficios": [
        "Sabor mais intenso",
        "Ferro biodisponível",
        "Apoia a energia"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido",
        "1 cenoura pequena cozida",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe tudo até pastinha lisa.",
        "Sirva no tapete de lambedura."
      ],
      "indicado": "Distração no banho.",
      "dicas": [
        "Espalhe no vidro do box.",
        "Freezer por até 20 dias."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-17",
      "nome": "Biscoitinhos de Frango com Banana e Aveia",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Aroma adocicado",
      "beneficios": [
        "Banana carameliza",
        "Potássio",
        "Betaglucana"
      ],
      "ingredientes": [
        "80g de frango cozido processado",
        "2 rodelas de banana madura amassada",
        "2 col. sopa de aveia em flocos",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa palatável.",
      "dicas": [
        "Use banana bem madura.",
        "Retire sempre a casca."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-18",
      "nome": "Biscoitinhos de Peru com Batata Doce",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Concentração no treino",
      "beneficios": [
        "Triptofano calmante",
        "Betacaroteno",
        "Mantém o foco"
      ],
      "ingredientes": [
        "80g de peito de peru cozido processado",
        "3 col. sopa de batata doce amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture os três.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Treinos de obediência ou agility.",
      "dicas": [
        "Ofereça 2 biscoitinhos 10 min antes de sair.",
        "Combine com enriquecimento."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-19",
      "nome": "Mini Almôndegas de Frango com Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Versátil para puzzles",
      "beneficios": [
        "Ótimas para dispensadores",
        "Reduz comportamentos destrutivos",
        "Estimulação mental"
      ],
      "ingredientes": [
        "100g de peito de frango cozido processado",
        "2 col. sopa de cenoura amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo.",
        "Forme bolinhas de 1–2cm.",
        "Asse a 175°C por 18–20 min.",
        "Esfrie."
      ],
      "indicado": "Puzzles e enriquecimento.",
      "dicas": [
        "Até 4x/semana, 4–6 almôndegas.",
        "Use em puzzles de dificuldade crescente."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-20",
      "nome": "Chips de Tilápia Desidratada",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Peixe suave e hipoalergênico",
      "beneficios": [
        "Sabor suave",
        "Baixo mercúrio",
        "Uso frequente"
      ],
      "ingredientes": [
        "100g de filé de tilápia (sem espinhas) em fatias de 2mm"
      ],
      "preparo": [
        "Fatie fino conferindo espinhas.",
        "Asse a 100°C por 2h com porta entreaberta.",
        "Confira espinhas de novo; geladeira até 4 dias."
      ],
      "indicado": "Introdução ao peixe; alérgicos a frango.",
      "dicas": [
        "Até 3x/semana, 2–3 chips.",
        "Palpe cada chip antes e depois."
      ],
      "tempo": "2h 10min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-21",
      "nome": "Carne Desfiada Seca (Jerky Canino)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Jerky natural e seguro",
      "beneficios": [
        "Sem conservantes",
        "Textura fibrosa satisfatória",
        "Mastigação intensa"
      ],
      "ingredientes": [
        "150g de músculo bovino sem gordura"
      ],
      "preparo": [
        "Cozinhe na pressão por 40 min e desfie.",
        "Espalhe e leve ao forno a 130°C por 40–50 min.",
        "Mexa a cada 10 min; geladeira até 5 dias."
      ],
      "indicado": "Cães que precisam mastigar bastante.",
      "dicas": [
        "Use como recheio de Kong.",
        "Redireciona a vontade de roer."
      ],
      "tempo": "1h 30min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-22",
      "nome": "Pastinha de Sardinha com Batata Doce",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Palatabilidade máxima",
      "beneficios": [
        "Aroma intenso",
        "Textura aveludada",
        "Alto impacto no tapete"
      ],
      "ingredientes": [
        "60g de sardinha em água (enxaguada)",
        "3 col. sopa de batata doce amassada",
        "2 col. sopa de água filtrada"
      ],
      "preparo": [
        "Processe tudo até pastinha lisa.",
        "Sirva no tapete de lambedura."
      ],
      "indicado": "Viagens e distração.",
      "dicas": [
        "Congele no LickiMat para dias quentes.",
        "Freezer por até 15 dias."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-23",
      "nome": "Biscoitinhos de Ovo com Aveia e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Suave e saboroso",
      "beneficios": [
        "Proteína completa e colina",
        "Betaglucana",
        "Sabor adocicado"
      ],
      "ingredientes": [
        "2 ovos bem cozidos e amassados",
        "3 col. sopa de aveia em flocos",
        "2 col. sopa de cenoura amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Cozinhe os ovos por 12 min e amasse.",
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 165°C por 20 min."
      ],
      "indicado": "Filhotes 4–6m em início de treino.",
      "dicas": [
        "Geladeira até 4 dias.",
        "Tamanho regulável."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-24",
      "nome": "Strips de Peru Assado",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Mastigação calmante",
      "beneficios": [
        "Efeito calmante",
        "Redireciona a mordida",
        "Sabor diferente"
      ],
      "ingredientes": [
        "100g de peito de peru sem pele em tiras de 1,5cm × 7–8cm"
      ],
      "preparo": [
        "Corte em tiras.",
        "Asse a 170°C por 25–28 min, virando na metade.",
        "Esfrie; geladeira até 3 dias."
      ],
      "indicado": "Cães que roem demais.",
      "dicas": [
        "Objeto legítimo para mastigar.",
        "Triptofano acalma."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-25",
      "nome": "Gelatina de Caldo de Frango",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Colágeno para articulações",
      "beneficios": [
        "Gelifica com colágeno",
        "Hidratação",
        "Ótima para idosos"
      ],
      "ingredientes": [
        "200g de frango com osso (mais colágeno)",
        "400ml de água filtrada"
      ],
      "preparo": [
        "Cozinhe o frango com osso por 1h em fogo baixo.",
        "Coe rigorosamente.",
        "Distribua em forminhas.",
        "Geladeira por 4–6h até gelificar."
      ],
      "indicado": "Idosos e articulações.",
      "dicas": [
        "Nunca ofereça os ossos cozidos.",
        "Freezer por até 30 dias."
      ],
      "tempo": "1h 15min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-26",
      "nome": "Mix de Petiscos Proteicos",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Três proteínas variadas",
      "beneficios": [
        "Frango + peru + carne",
        "Sabores imprevisíveis",
        "Mais motivação no treino"
      ],
      "ingredientes": [
        "40g de frango",
        "40g de peru",
        "40g de patinho bovino"
      ],
      "preparo": [
        "Cozinhe as três proteínas.",
        "Corte em cubinhos de 1cm.",
        "Asse juntas a 150°C por 20 min.",
        "Misture em pote único."
      ],
      "indicado": "Treino com maior motivação.",
      "dicas": [
        "Geladeira até 3 dias.",
        "A imprevisibilidade reforça comportamentos."
      ],
      "tempo": "40 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-27",
      "nome": "Biscoitinhos de Frango com Maçã e Aveia",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Anti-inflamatório leve",
      "beneficios": [
        "Quercetina da maçã",
        "Adoçamento natural",
        "Função nutritiva"
      ],
      "ingredientes": [
        "80g de frango cozido processado",
        "2 col. sopa de maçã sem casca e sem sementes cozida",
        "2 col. sopa de aveia em flocos",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Cozinhe a maçã por 3 min e amasse.",
        "Misture tudo.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min."
      ],
      "indicado": "Cães com inflamações crônicas leves.",
      "dicas": [
        "Retire sementes e miolo da maçã.",
        "Prefira Fuji ou Gala."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-28",
      "nome": "Palitinho de Carne com Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Máxima satisfação de mastigação",
      "beneficios": [
        "Textura densa",
        "Mastigação prolongada",
        "Núcleo colorido"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido processado",
        "1 cenoura cozida em palitinhos finos"
      ],
      "preparo": [
        "Envolva cada palitinho de cenoura com a pasta de carne.",
        "Asse a 175°C por 22 min.",
        "Esfrie; geladeira até 3 dias."
      ],
      "indicado": "Cães que roem móveis.",
      "dicas": [
        "Ofereça 1–2 dentro de um Kong.",
        "Mantém o cão concentrado."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-29",
      "nome": "Biscoitinhos de Atum com Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Recurso de emergência",
      "beneficios": [
        "Aroma extremamente atrativo",
        "Alto valor",
        "Chama a atenção"
      ],
      "ingredientes": [
        "60g de atum em água (muito bem enxaguado)",
        "2 col. sopa de cenoura amassada",
        "2 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo.",
        "Modele biscoitinhos minúsculos.",
        "Asse a 160°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Recall em parque; ambientes estimulantes.",
      "dicas": [
        "Máx. 1x/semana (mercúrio).",
        "Reserve para alto valor."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-30",
      "nome": "Cubo de Gelo de Caldo de Osso",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Refrescante e articular",
      "beneficios": [
        "Colágeno e minerais",
        "Glucosamina natural",
        "Refrescância"
      ],
      "ingredientes": [
        "300ml de caldo de osso bovino coado"
      ],
      "preparo": [
        "Coe muito bem com peneira fina.",
        "Distribua em forminhas.",
        "Congele por no mínimo 4h."
      ],
      "indicado": "Idosos com articulações doloridas.",
      "dicas": [
        "Até 5x/semana, 1–2 cubos.",
        "Combine com sardinha (protocolo articular)."
      ],
      "tempo": "4h 10min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-31",
      "nome": "Bolinha de Frango com Aveia e Maçã",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Sabor complexo e funcional",
      "beneficios": [
        "Quercetina + betaglucana",
        "Proteína do frango",
        "Funcionalmente rica"
      ],
      "ingredientes": [
        "80g de frango cozido processado",
        "2 col. sopa de aveia em flocos",
        "2 col. sopa de maçã sem casca e sem sementes cozida",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Forme bolinhas.",
        "Asse a 170°C por 18–20 min.",
        "Esfrie."
      ],
      "indicado": "Puzzles de dificuldade média/alta.",
      "dicas": [
        "Se quebrar, some 1 col. de farinha.",
        "Asse 5 min a mais."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-32",
      "nome": "Pastinha de Peru com Batata Doce (Lambedura)",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Alto relaxamento",
      "beneficios": [
        "Triptofano do peru",
        "Textura aveludada",
        "Para ansiedade crônica"
      ],
      "ingredientes": [
        "100g de peito de peru cozido",
        "3 col. sopa de batata doce amassada",
        "3 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe tudo até pastinha lisa.",
        "Sirva no tapete de lambedura."
      ],
      "indicado": "Cães com ansiedade crônica.",
      "dicas": [
        "Congele no LickiMat e ofereça antes de sair.",
        "Freezer por até 20 dias."
      ],
      "tempo": "20 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-33",
      "nome": "Biscoitinhos de Carne com Ovo e Aveia",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Nobre e nutritivo",
      "beneficios": [
        "Ferro + colina",
        "Perfis complementares",
        "Betaglucana"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido processado",
        "1 ovo bem cozido e amassado",
        "2 col. sopa de aveia em flocos",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 165°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Cães de trabalho ou esporte.",
      "dicas": [
        "Ofereça 30 min após o exercício.",
        "Nunca antes nem logo depois."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-34",
      "nome": "Chips de Banana com Frango (Tropical)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Sabor tropical surpreendente",
      "beneficios": [
        "Textura crocante e doce",
        "Potássio da banana",
        "Variedade sensorial"
      ],
      "ingredientes": [
        "60g de frango cozido e desfiado",
        "3 rodelas de banana madura"
      ],
      "preparo": [
        "Disponha o frango sobre cada rodela de banana.",
        "Asse a 110°C por 1,5–2h até secar.",
        "Esfrie; geladeira até 2 dias."
      ],
      "indicado": "Enriquecimento de cardápio.",
      "dicas": [
        "Até 2x/semana, 3–4 chips.",
        "Retire a casca da banana."
      ],
      "tempo": "2h",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-35",
      "nome": "Mini Croquetes de Peru com Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Visualmente atraente",
      "beneficios": [
        "Dupla textura",
        "Proteína magra + triptofano",
        "Betacaroteno"
      ],
      "ingredientes": [
        "100g de peito de peru cozido processado",
        "2 col. sopa de cenoura amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo.",
        "Modele croquetinhos de 2cm.",
        "Asse a 175°C por 22–25 min.",
        "Esfrie."
      ],
      "indicado": "Recompensa fotogênica.",
      "dicas": [
        "Até 3x/semana, 3–4 croquetes.",
        "Congele metade do lote."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-36",
      "nome": "Petisco Gelado de Sardinha para o Verão",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Impacto sensorial no calor",
      "beneficios": [
        "Aroma liberado ao derreter",
        "Hidratação",
        "Ômega 3"
      ],
      "ingredientes": [
        "30g de sardinha em água (sem espinhas)",
        "100ml de água filtrada"
      ],
      "preparo": [
        "Amasse a sardinha até pasta.",
        "Dilua na água.",
        "Congele em forminha por 4h.",
        "Sirva em prato fundo."
      ],
      "indicado": "Dias quentes.",
      "dicas": [
        "Máx. 2x/semana, 1 cubo.",
        "Retire espinhas ANTES de congelar."
      ],
      "tempo": "4h 10min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-37",
      "nome": "Biscoitinhos de Carne com Banana",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Sabor equilibrado",
      "beneficios": [
        "Robusto + adocicado",
        "Potássio + ferro",
        "Função muscular e sangue"
      ],
      "ingredientes": [
        "80g de patinho bovino cozido processado",
        "2 rodelas de banana madura amassada",
        "2 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa moldável.",
        "Modele biscoitinhos.",
        "Asse a 165°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Quebra de resistências alimentares.",
      "dicas": [
        "A banana carameliza (pontos dourados são normais).",
        "Geladeira até 3 dias."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-38",
      "nome": "Strips de Frango com Ovo (Proteína Dupla)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Cobertura mais nutrida",
      "beneficios": [
        "Proteína extra e colina",
        "Textura mais rica",
        "Vitamina D"
      ],
      "ingredientes": [
        "100g de peito de frango em tiras",
        "1 ovo bem cozido e amassado (pasta)"
      ],
      "preparo": [
        "Corte o frango em tiras.",
        "Mergulhe cada tira na pasta de ovo.",
        "Asse a 175°C por 25–28 min.",
        "Esfrie; geladeira até 2 dias."
      ],
      "indicado": "Recompensa reforçada.",
      "dicas": [
        "Corte uma tira para conferir cozimento.",
        "Deve estar branca por dentro."
      ],
      "tempo": "35 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-39",
      "nome": "Pastinha de Frango Congelada (Antiestresse)",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "O antiestresse mais eficaz",
      "beneficios": [
        "Gelo + lambedura + sabor familiar",
        "Relaxamento máximo",
        "Ansiedade e fogos"
      ],
      "ingredientes": [
        "150g de peito de frango cozido",
        "5 col. sopa da água do cozimento"
      ],
      "preparo": [
        "Processe até pastinha fluida.",
        "Despeje no LickiMat ou forminha.",
        "Congele por 4h.",
        "Sirva direto do freezer."
      ],
      "indicado": "Ansiedade de separação, fogos, tempestades.",
      "dicas": [
        "Tenha 3–4 tapetes prontos no freezer.",
        "Retire 10 min antes do barulho."
      ],
      "tempo": "4h 15min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-40",
      "nome": "Biscoitinhos de Tilápia com Cenoura e Arroz",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Introdução ao peixe",
      "beneficios": [
        "Sabor suave",
        "Baixo mercúrio",
        "Hipoalergênico"
      ],
      "ingredientes": [
        "80g de tilápia cozida (sem espinhas)",
        "2 col. sopa de cenoura amassada",
        "2 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Cozinhe a tilápia e remova espinhas.",
        "Misture tudo.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min."
      ],
      "indicado": "Alérgicos ao frango.",
      "dicas": [
        "Introduza gradualmente misturando com os de frango.",
        "Geladeira até 4 dias."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-41",
      "nome": "Mix de Biscoitinhos Semanais (3 Sabores)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Variedade em um pote",
      "beneficios": [
        "Frango, carne e peru",
        "Mantém o interesse",
        "Variação proteica"
      ],
      "ingredientes": [
        "60g frango + 1,5 col. farinha",
        "60g patinho + 1,5 col. farinha",
        "60g peru + 1,5 col. farinha"
      ],
      "preparo": [
        "Processe cada proteína.",
        "Modele formatos diferentes por sabor.",
        "Asse a 160°C por 22 min.",
        "Misture em pote único."
      ],
      "indicado": "Semana de treino variada.",
      "dicas": [
        "Quadrado=frango, triângulo=carne, rolinho=peru.",
        "Geladeira até 4 dias."
      ],
      "tempo": "40 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-42",
      "nome": "Petisco de Banana com Aveia (Energético)",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Carbo para ativos",
      "beneficios": [
        "Açúcar natural + energia lenta",
        "Para treinos longos",
        "Palatável"
      ],
      "ingredientes": [
        "3 rodelas de banana madura",
        "3 col. sopa de aveia em flocos finos",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Amasse a banana.",
        "Misture tudo.",
        "Modele bolinhas ou barrinhas.",
        "Asse a 160°C por 20 min."
      ],
      "indicado": "Cães ativos e esporte canino.",
      "dicas": [
        "Ofereça 30–45 min antes da atividade.",
        "Não use em cães sedentários/obesos."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-43",
      "nome": "Bolinha de Carne com Batata Doce (Luxo)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Alta densidade nutricional",
      "beneficios": [
        "Ferro e B12",
        "Vitamina C e betacaroteno",
        "Formato curioso"
      ],
      "ingredientes": [
        "100g de patinho bovino cozido processado",
        "3 col. sopa de batata doce amassada",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Forme bolinhas bem redondas.",
        "Asse a 175°C por 20–22 min até dourar.",
        "Esfrie; geladeira até 3 dias."
      ],
      "indicado": "Premiação especial.",
      "dicas": [
        "Até 2x/semana, 2–3 bolinhas.",
        "Decore com cenoura ralada para fotos."
      ],
      "tempo": "30 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-44",
      "nome": "Biscoitinhos de Ovo com Frango (Proteína Máxima)",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Máxima concentração proteica",
      "beneficios": [
        "Aminoácidos essenciais",
        "Colina + leucina",
        "Muito aceito"
      ],
      "ingredientes": [
        "80g de frango cozido processado",
        "2 ovos bem cozidos e amassados",
        "2 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo até massa.",
        "Modele biscoitinhos.",
        "Asse a 165°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Filhotes 4–8m em início de treino.",
      "dicas": [
        "Alta proteína para o crescimento.",
        "Geladeira até 4 dias."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-45",
      "nome": "Pastinha de Atum com Batata Doce",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Recurso quando nada funciona",
      "beneficios": [
        "Palatabilidade máxima",
        "Aroma irresistível",
        "Textura aveludada"
      ],
      "ingredientes": [
        "50g de atum em água (muito bem enxaguado)",
        "3 col. sopa de batata doce amassada",
        "2 col. sopa de água filtrada"
      ],
      "preparo": [
        "Processe tudo até pastinha lisa.",
        "Sirva no mesmo dia ou congele (até 10 dias)."
      ],
      "indicado": "Situações de alto impacto e medo extremo.",
      "dicas": [
        "Máx. 1x/semana (mercúrio).",
        "Quanto menos usar, maior o poder."
      ],
      "tempo": "15 min",
      "porcoes": "Várias",
      "img": "dog"
    },
    {
      "id": "cao-t-46",
      "nome": "Biscoitinhos de Peru com Aveia e Maçã",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Perfil suave e tripla ação",
      "beneficios": [
        "Calmante + anti-inflamatório",
        "Imunorregulador",
        "Ideal para filhotes e idosos"
      ],
      "ingredientes": [
        "80g de peru cozido processado",
        "2 col. sopa de aveia em flocos",
        "2 col. sopa de maçã sem casca e sem sementes cozida",
        "1 col. sopa de farinha de arroz"
      ],
      "preparo": [
        "Misture tudo.",
        "Modele biscoitinhos.",
        "Asse a 160°C por 22 min.",
        "Esfrie."
      ],
      "indicado": "Filhotes e cães idosos.",
      "dicas": [
        "Quebre em pedaços minúsculos para raças pequenas.",
        "Geladeira até 4 dias."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-47",
      "nome": "Rolinho de Frango com Ovo e Cenoura",
      "pet": "cachorro",
      "dificuldade": "medio",
      "refeicao": "petisco",
      "beneficio": "Três camadas surpreendentes",
      "beneficios": [
        "Frango externo, ovo, cenoura interna",
        "Sabor e textura complexos",
        "Criativo"
      ],
      "ingredientes": [
        "80g de frango cozido processado (pasta)",
        "1 ovo bem cozido e amassado",
        "1 cenoura cozida em palitinhos finos"
      ],
      "preparo": [
        "Abra a pasta de frango na palma.",
        "Espalhe o ovo e coloque a cenoura no centro.",
        "Enrole fechando os lados e asse a 175°C por 22 min.",
        "Esfrie; geladeira até 2 dias."
      ],
      "indicado": "Festas de pets e redes sociais.",
      "dicas": [
        "Corte ao meio para revelar as camadas.",
        "Muito fotogênico."
      ],
      "tempo": "30 min",
      "porcoes": "Vários",
      "img": "dog"
    },
    {
      "id": "cao-t-48",
      "nome": "Caldo de Frango com Banana (Isotônico Natural)",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Recuperação pós-exercício",
      "beneficios": [
        "Potássio + aminoácidos",
        "Hidratação",
        "Isotônico natural"
      ],
      "ingredientes": [
        "200ml de caldo de frango caseiro sem sal",
        "1 rodela de banana madura"
      ],
      "preparo": [
        "Amasse a banana.",
        "Misture com o caldo morno (não quente).",
        "Sirva após o exercício.",
        "Consuma no mesmo dia."
      ],
      "indicado": "Cães ativos, pós-exercício.",
      "dicas": [
        "Sirva 20–30 min após a atividade.",
        "Nunca durante ou logo depois."
      ],
      "tempo": "15 min",
      "porcoes": "1 porção",
      "img": "dog"
    },
    {
      "id": "cao-t-49",
      "nome": "Kit de Petiscos da Semana",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "Prepare a semana em uma tarde",
      "beneficios": [
        "Organização eficiente",
        "Petiscos frescos todos os dias",
        "~2h por semana"
      ],
      "ingredientes": [
        "300g de frango cozido",
        "200g de patinho bovino cozido",
        "200g de peru cozido"
      ],
      "preparo": [
        "Cozinhe as proteínas base em lote.",
        "Faça biscoitinhos, cubinhos e pastinhas.",
        "Congele as pastinhas e caldos.",
        "Marque a data em cada pote."
      ],
      "indicado": "Rotina organizada.",
      "dicas": [
        "Tenha sempre caldos e pastinha no freezer.",
        "Cão saudável começa com tutor organizado."
      ],
      "tempo": "2h",
      "porcoes": "Semana",
      "img": "dog"
    },
    {
      "id": "cao-t-50",
      "nome": "Guia de Frequência e Cardápio de Petiscos",
      "pet": "cachorro",
      "dificuldade": "facil",
      "refeicao": "petisco",
      "beneficio": "O mapa dos 7 dias",
      "beneficios": [
        "Equilíbrio e variedade",
        "Dentro dos limites calóricos",
        "Segurança"
      ],
      "ingredientes": [
        "Combine os petiscos anteriores ao longo da semana",
        "Alterne proteínas principais e complementares"
      ],
      "preparo": [
        "Fígado máx. 2x, atum 1x, sardinha 3x, ovo 4x por semana.",
        "Total de petiscos ≤ 10% das calorias diárias.",
        "Varie a proteína entre os dias."
      ],
      "indicado": "Planejamento semanal de petiscos.",
      "dicas": [
        "Água fresca sempre disponível.",
        "A variedade garante perfil nutricional completo."
      ],
      "tempo": "—",
      "porcoes": "Semana",
      "img": "dog"
    }
  ],
  "warnings": {
    "regras_de_ouro": [
      "Consulte o médico-veterinário antes de iniciar ou alterar a dieta natural.",
      "Introdução gradual ao longo de 4 semanas (25% → 50% → 75% → 100%).",
      "Nunca use sal, açúcar, alho, cebola, temperos ou condimentos.",
      "Toda carne deve ser completamente cozida; ovos sempre bem cozidos, nunca crus.",
      "Retire TODAS as espinhas de peixe e todos os ossos antes de servir.",
      "Sirva em temperatura ambiente ou morno — nunca quente do fogão nem gelado.",
      "Fígado no máximo 1–2x/semana (excesso de vitamina A é tóxico).",
      "Ofereça sempre água fresca e limpa à vontade."
    ],
    "alimentos_proibidos": [
      {
        "nome": "Cebola e Alho",
        "motivo": "Causam anemia grave (destroem glóbulos vermelhos)."
      },
      {
        "nome": "Chocolate e Cafeína",
        "motivo": "Tóxicos ao coração e sistema nervoso."
      },
      {
        "nome": "Uvas e Uvas-passas",
        "motivo": "Podem causar insuficiência renal aguda."
      },
      {
        "nome": "Abacate",
        "motivo": "Contém persina, tóxica para muitos animais."
      },
      {
        "nome": "Xilitol (adoçante)",
        "motivo": "Provoca queda perigosa de açúcar no sangue."
      },
      {
        "nome": "Nozes e Macadâmia",
        "motivo": "Tóxicas e de difícil digestão."
      },
      {
        "nome": "Ossos cozidos",
        "motivo": "Lascam e podem perfurar o trato digestivo."
      },
      {
        "nome": "Leite e derivados",
        "motivo": "A maioria dos pets é intolerante à lactose."
      },
      {
        "nome": "Carne, peixe e ovo crus",
        "motivo": "Risco de contaminação; sempre cozinhe."
      },
      {
        "nome": "Sal, açúcar e temperos",
        "motivo": "Sobrecarregam rins e fígado."
      },
      {
        "nome": "Sementes e caroços de frutas",
        "motivo": "Podem conter cianeto."
      },
      {
        "nome": "Lírios e plantas tóxicas",
        "motivo": "Extremamente tóxicos para gatos — mantenha longe."
      }
    ]
  },
  "premium": [
    {
      "id": "prod-ebook-cru",
      "titulo": "E-book: Dieta Crua para Gatos (BARF Felino)",
      "descricao": "Guia completo passo a passo para montar uma dieta crua biologicamente adequada, com tabelas de porções, suplementação e cardápios de 30 dias.",
      "destaque": "Mais vendido",
      "preco": "R$ 47,00",
      "beneficios": [
        "Cardápios prontos para 30 dias",
        "Tabela de porções por peso do gato",
        "Lista de suplementos essenciais"
      ],
      "img": "ebook"
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
        "Dosagem simples com medidor incluso"
      ],
      "img": "suplemento"
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
        "Potes herméticos sem BPA"
      ],
      "img": "kit"
    }
  ]
};

export const RECIPES = DATA.recipes;
export const WARNINGS = DATA.warnings;
export const PREMIUM_PRODUCTS = DATA.premium;
