---
colorSchema: both
themeConfig:
  appearance: dark
  shortTitle: "Seu terminal aumentado pelo Claude Code"
fonts:
  sans: Space Grotesk
  serif: Space Grotesk
  mono: JetBrains Mono
  provider: none
class: text-left
---

<CoverSlide
  eyebrow="FGV EAESP"
  title="Seu terminal aumentado pelo Claude Code"
  subtitle="Claude code e seu papel no desenvolvimento assistido por IA"
  presenter="R. M. Ferrari"
  location="São Paulo, SP"
  date="Abril de 2026"
/>

---

# Quem sou eu?

<CircularImage 
src="https://github.com/ramonferrari.png" 
size="180px"
borderColor="var(--rf-highlight)"
:scale="1.1"
x="120"
y="200"
/>


---


# O que a IA sabe

<AIKnowledge />

---

# A IA não tem memória. Tem mesa de trabalho.

<Contextdesk />

---

# Corrida das IAs

<AICompetition />

---

# Tanto faz o modelo? Atenção aos flash X pro

<ModelComparison />

---

# Os Dois Conflitos da IA

<div class="flex items-center gap-4 mt-4" style="font-size: 0.8rem; line-height: 1.4;">

<div class="glass p-3 flex-1" style="border-color: rgba(99,211,161,0.45); text-align: center;">

<span style="color: #63d3a1; font-weight: 700;">🧠 Fiel ao treinamento</span>  
Ser completa. Agradar. Parecer confiante. Nunca deixar uma pergunta sem resposta.

</div>

<div style="font-size: 1rem; font-weight: 700; flex-shrink: 0; text-align: center; opacity: 0.45; letter-spacing: 0.1em;">vs</div>

<div class="glass p-3 flex-1" style="border-color: rgba(226,248,27,0.45); text-align: center;">

<span style="color: #e2f81b; font-weight: 700;">📋 Seguir suas instruções</span>  
Ser precisa. Dizer N/E. Citar a fonte. Usar só o que está no documento.

</div>

</div>

<div class="grid grid-cols-3 gap-2 mt-3" style="font-size: 0.7rem; line-height: 1.35;">

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Se não encontrar, põe N/E"</span>

Treinamento: resposta vazia não agrada.

→ IA inventa **8%** com total confiança.

</div>

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Extraia só o valor total"</span>

Treinamento: ser completo é ser útil.

→ IA adiciona interpretações e avisos que ninguém pediu.

</div>

<div v-click class="glass p-3" style="border-top: 2px solid #EC635E;">

<span style="color: #EC635E; font-weight: 700;">"Use só o documento enviado"</span>

Treinamento: multas ficam entre 5–10%.

→ IA "preenche" cláusula vaga com conhecimento geral.

</div>

</div>

::note::
Antes de falar nos limites técnicos, é importante entender o conflito de objetivos. A IA não falha por acidente — ela falha porque foi treinada para um objetivo (agradar, ser completa) que às vezes entra em rota de colisão com o que você precisa (precisão, rastreabilidade, contenção).

---

# Os Dois Limites da IA

<div class="relative" style="height: 355px; margin-top: 0.5rem;">

<svg viewBox="0 0 900 355" xmlns="http://www.w3.org/2000/svg" style="position: absolute; inset: 0; width: 100%; height: 100%;">
  <defs>
    <radialGradient id="innerGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#63d3a1" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#63d3a1" stop-opacity="0.03"/>
    </radialGradient>
    <radialGradient id="inventouGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e2f81b" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#e2f81b" stop-opacity="0.02"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .svg-label { font-size: 13px; font-weight: 400; letter-spacing: 0.03em; font-family: 'Space Grotesk', sans-serif; }
      .svg-label-bold { font-size: 13px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
      .svg-badge { font-size: 11px; font-weight: 600; letter-spacing: 0; font-family: 'Space Grotesk', sans-serif; }
    </style>
  </defs>

  <!-- CLIQUE 0: sempre visível — contrato -->
  <circle cx="450" cy="183" r="145"
    fill="rgba(99,211,161,0.03)"
    stroke="#63d3a1"
    stroke-width="1.5"
    stroke-dasharray="9 6"
    opacity="0.7"/>
  <text x="450" y="27" text-anchor="middle"
    class="svg-label"
    style="font-size:13px; font-weight:400; letter-spacing:0.03em; font-family:'Space Grotesk',sans-serif;"
    fill="rgba(99,211,161,0.65)">O que estava no contrato</text>

  <!-- CLIQUE 1: o que a IA achou -->
  <g v-click>
    <circle cx="468" cy="177" r="110"
      fill="url(#innerGrad)"
      stroke="#63d3a1"
      stroke-width="1.5"
      filter="url(#softGlow)"/>
    <circle cx="412" cy="138" r="3" fill="#63d3a1" opacity="0.75"/>
    <line x1="420" y1="138" x2="542" y2="138" stroke="#63d3a1" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <circle cx="412" cy="157" r="3" fill="#63d3a1" opacity="0.75"/>
    <line x1="420" y1="157" x2="524" y2="157" stroke="#63d3a1" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    <circle cx="412" cy="176" r="3" fill="#63d3a1" opacity="0.75"/>
    <line x1="420" y1="176" x2="538" y2="176" stroke="#63d3a1" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <circle cx="412" cy="195" r="3" fill="#63d3a1" opacity="0.75"/>
    <line x1="420" y1="195" x2="514" y2="195" stroke="#63d3a1" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    <circle cx="412" cy="214" r="3" fill="#63d3a1" opacity="0.75"/>
    <line x1="420" y1="214" x2="528" y2="214" stroke="#63d3a1" stroke-width="1.8" stroke-linecap="round" opacity="0.55"/>
    <text x="468" y="308" text-anchor="middle"
      class="svg-label-bold"
      style="font-size:13px; font-weight:600; letter-spacing:0; font-family:'Space Grotesk',sans-serif;"
      fill="rgba(99,211,161,0.85)">O que a IA achou</text>
  </g>

  <!-- CLIQUE 2: perdeu (vermelho) -->
  <g v-click>
    <circle cx="323" cy="153" r="3.5" fill="#EC635E" opacity="0.55"/>
    <circle cx="312" cy="183" r="3"   fill="#EC635E" opacity="0.45"/>
    <circle cx="319" cy="213" r="3.5" fill="#EC635E" opacity="0.55"/>
    <circle cx="336" cy="137" r="2.5" fill="#EC635E" opacity="0.35"/>
    <circle cx="341" cy="167" r="3"   fill="#EC635E" opacity="0.45"/>
    <circle cx="331" cy="198" r="2.5" fill="#EC635E" opacity="0.4"/>
    <circle cx="349" cy="145" r="2.5" fill="#EC635E" opacity="0.3"/>
    <circle cx="346" cy="222" r="2.5" fill="#EC635E" opacity="0.35"/>
    <circle cx="321" cy="173" r="2"   fill="#EC635E" opacity="0.3"/>
    <rect x="240" y="108" width="72" height="22" rx="5"
      fill="rgba(236,99,94,0.12)" stroke="#EC635E" stroke-width="1" opacity="0.9"/>
    <text x="276" y="123" text-anchor="middle"
      class="svg-badge"
      style="font-size:11px; font-weight:600; font-family:'Space Grotesk',sans-serif;"
      fill="#EC635E">perdeu</text>
  </g>

  <!-- CLIQUE 3: inventou (verde-limão) -->
  <g v-click>
    <circle cx="636" cy="250" r="58"
      fill="url(#inventouGrad)"
      stroke="#e2f81b"
      stroke-width="1.5"
      stroke-dasharray="7 5"
      opacity="0.85"/>
    <line x1="582" y1="237" x2="688" y2="237" stroke="#e2f81b" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="580" y1="251" x2="690" y2="251" stroke="#e2f81b" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <line x1="584" y1="265" x2="684" y2="265" stroke="#e2f81b" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <rect x="598" y="310" width="80" height="22" rx="5"
      fill="rgba(226,248,27,0.10)" stroke="#e2f81b" stroke-width="1" opacity="0.9"/>
    <text x="638" y="325" text-anchor="middle"
      class="svg-badge"
      style="font-size:11px; font-weight:600; font-family:'Space Grotesk',sans-serif;"
      fill="#e2f81b">inventou</text>
  </g>

</svg>

<!-- Left card: aparece no clique 2 (junto com os pontos vermelhos) -->
<div v-click="2" class="glass p-4" style="position: absolute; left: 0; top: 55px; width: 190px; border-color: rgba(236,99,94,0.45);">
  <div style="color: #EC635E; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode perder informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo estava no contrato, mas não apareceu na resposta.</p>
</div>

<!-- Right card: aparece no clique 3 (junto com o círculo amarelo) -->
<div v-click="3" class="glass p-4" style="position: absolute; right: 0; top: 55px; width: 190px; border-color: rgba(226,248,27,0.45);">
  <div style="color: #e2f81b; font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem; line-height: 1.3;">⚠ A IA pode inventar informação</div>
  <p style="font-size: 0.75rem; line-height: 1.5; opacity: 0.7; margin: 0;">Algo apareceu na resposta, mas não estava no contrato.</p>
</div>

</div>

::note::
Dois problemas opostos — ao mesmo tempo. Recall: ela não cobre tudo e não avisa o que perdeu. Alucinação: ela vai além do que estava no documento sem avisar. Os próximos dois slides detalham cada um.

---

<div class="rf-center" style="height: 100%; position: relative;">

<div class="rf-eyebrow">do chat ao agente</div>

<h1 class="rf-hero rf-title" style="margin: 0.4rem 0 0.8rem;">Claude Code</h1>

<p style="font-family: 'TeX Gyre Pagella', Georgia, serif; font-style: italic; font-size: 1.35rem; color: var(--rf-text-secondary); margin: 0;">Do chat ao agente: como um LLM ganha mãos</p>

<p class="rf-muted" style="margin-top: 2.2rem; font-size: 0.9rem;">Ramon Ferrari · 2026</p>

<div style="position: absolute; right: 0; bottom: 0; width: 330px;">
<Terminal
  :conversation="[{ user: 'quem é você?', response: 'Seu novo colega de trabalho.' }]"
  modelName="Claude Sonnet 4.5"
  fontSize="0.75rem"
  :loop="true"
/>
</div>

</div>

<!-- Fala sugerida — Hoje eu quero mostrar uma mudança de paradigma no uso de IA para desenvolvimento. Não é mais sobre perguntar pro modelo e copiar a resposta. É sobre deixar o modelo agir dentro do seu ambiente real. -->

---

# O que é uma LLM "normal"?

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 1fr 1fr;">

<div class="rf-panel">

**Modelo de chat tradicional**

- Você escreve uma mensagem
- O modelo responde com texto
- Você copia, aplica, testa manualmente
- Sem acesso ao seu ambiente

</div>

<div>
<Terminal
  :conversation="[{ user: 'Como leio um arquivo JSON em Python?', response: 'Use o módulo json com json.load sobre o arquivo aberto. Agora copie, cole no seu editor e rode você mesmo — eu não tenho acesso ao seu projeto.' }]"
  modelName="ChatGPT"
/>
</div>

</div>

<!-- Fala sugerida — O claude.ai, o ChatGPT são interfaces de conversa. O modelo vive numa caixa: recebe texto, devolve texto. Ele não sabe nada do seu projeto, não toca nos seus arquivos, não roda nenhum comando. Você é o intermediário entre ele e o mundo real. -->

---

# O ciclo manual

<LoopChatManual />

<!-- Fala sugerida — Quem já usou IA pra programar conhece esse loop. Você fica no meio, sendo o carteiro entre o modelo e o seu ambiente. É produtivo? Sim. Mas é ainda o humano executando cada passo. O Claude Code quebra esse padrão. -->

---

<div class="rf-center" style="height: 100%; text-align: center; align-items: center;">

<div class="rf-eyebrow" style="margin-bottom: 1.2rem;">Seção 2</div>

<div class="rf-section-title">O que é o <span class="rf-title">Claude Code</span></div>

</div>

---

# Claude Code, direto ao ponto

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 2fr 3fr;">

<div class="rf-center">

**Um agente de codificação que vive no seu terminal.**

- Lê seu codebase
- Edita arquivos
- Roda comandos
- Itera com base nos resultados

<p class="rf-muted" style="font-size: 0.85rem; margin-top: 1rem;">Disponível via CLI, VS Code, JetBrains e GitHub Actions.</p>

</div>

<div>
<Terminal
  :conversation="[{ user: 'O que você faz que um chatbot não faz?', response: 'Eu leio seu codebase, edito arquivos, rodo comandos no terminal e itero com base nos resultados — tudo dentro do seu ambiente, sem você servir de intermediário.' }]"
  modelName="Claude Sonnet 4.5"
/>
</div>

</div>

<!-- Fala sugerida — Claude Code não é um chat. É uma ferramenta de linha de comando que roda no seu ambiente local. Você digita claude no terminal e passa a trabalhar com um agente que enxerga seus arquivos, executa comandos reais e raciocina com base no que acontece. -->

---

# A diferença fundamental

<TabelaComparativa />

<!-- Fala sugerida — A diferença não é de qualidade do modelo, é de arquitetura. O chat te devolve texto. O Claude Code age. Ele tem mãos: pode ler o repositório, modificar arquivos, rodar testes e usar o resultado pra decidir o próximo passo. -->

---

<div class="rf-center" style="height: 100%; text-align: center; align-items: center;">

<div class="rf-eyebrow" style="margin-bottom: 1.2rem;">Seção 3</div>

<div class="rf-section-title">Conceitos <span class="rf-title">fundamentais</span></div>

</div>

---

# Contexto: a memória de trabalho

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 1fr 1fr;">

<div class="rf-panel">

**O modelo só vê o que está na janela de contexto:**

- Mensagens da sessão atual
- Arquivos explicitamente carregados
- Saída dos comandos rodados
- Instruções de sistema (CLAUDE.md, skills)

</div>

<div>
<Terminal
  :conversation="[{ user: 'Continua de onde paramos ontem?', response: 'Não tenho memória da sessão anterior. Cada sessão começa com a janela de contexto limpa — só persiste o que estiver no CLAUDE.md ou o que você recarregar.' }]"
  modelName="Claude Sonnet 4.5"
/>
</div>

</div>

<p style="text-align: center; font-family: 'TeX Gyre Pagella', Georgia, serif; font-style: italic; font-size: 1.05rem; color: var(--rf-text-muted); margin-top: 1.2rem;">Contexto não é memória permanente — é RAM, não HD.</p>

<!-- Fala sugerida — Antes de falar em agentes, é fundamental entender contexto. O modelo não tem memória persistente por padrão. Ele só sabe o que está na janela de contexto da sessão atual. Quando a sessão fecha, ela some, a menos que você configure algo pra persistir. -->

---

# CLAUDE.md

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 1fr 1fr;">

<div>

**O briefing permanente do agente**

```markdown
# Contexto do projeto
API REST em FastAPI. Python 3.11. Testes com pytest.

# Convenções
- snake_case em variáveis
- Docstrings em funções públicas
- Nunca commitar sem rodar os testes
```

<p class="rf-muted" style="font-size: 0.85rem;">Carregado automaticamente em cada sessão dentro do projeto.</p>

</div>

<div>
<Terminal
  :conversation="[{ user: 'Cria uma função de parsing de datas.', response: 'Feito: nomeei em snake_case e adicionei docstring na função pública, seguindo as convenções do seu CLAUDE.md. Quer que eu rode os testes antes de seguir?' }]"
  modelName="Claude Sonnet 4.5"
/>
</div>

</div>

<!-- Fala sugerida — O CLAUDE.md é o arquivo que diz pro agente quem ele é dentro do seu projeto. Stack, convenções, regras de negócio, o que nunca fazer. É o onboarding permanente. Você escreve uma vez, e toda sessão começa com esse contexto já carregado. -->

---

# Skills

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 1fr 1fr;">

<div>

**Instruções especializadas empacotadas**

Cada skill é uma pasta com um `SKILL.md`: quando usar, o que faz, como executar.

```
.claude/skills/
├── docx/SKILL.md
├── pdf/SKILL.md
└── data-analysis/SKILL.md
```

<p class="rf-muted" style="font-size: 0.85rem;">O agente lê a skill relevante quando necessário — não tudo de uma vez.</p>

</div>

<div>
<Terminal
  :conversation="[{ user: 'Gera um relatório em Word com esses números.', response: 'Detectei a tarefa e carreguei a skill docx. Gerando o relatório com python-docx e salvando como relatorio.docx no diretório do projeto.' }]"
  modelName="Claude Sonnet 4.5"
/>
</div>

</div>

<!-- Fala sugerida — Skills são módulos de expertise. Em vez de repetir em cada sessão como criar um Word, você empacota isso numa skill. O agente detecta quando a tarefa é relevante e carrega as instruções na hora. Isso evita poluir o contexto com informação desnecessária. -->

---

# O loop agêntico

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 2fr 3fr;">

<div class="rf-panel">

**O ciclo de raciocínio**

1. Recebe a tarefa
2. Planeja as ações
3. Usa uma ferramenta
4. Observa o resultado
5. Raciocina: e agora?
6. Próxima ação — ou conclui

</div>

<div>
<LoopAgentico />
</div>

</div>

<p style="text-align: center; font-family: 'TeX Gyre Pagella', Georgia, serif; font-style: italic; font-size: 1.05rem; color: var(--rf-text-muted); margin-top: 1rem;">O modelo não adivinha — ele age, observa, ajusta.</p>

<!-- Fala sugerida — Diferente do chat, onde o modelo responde uma vez e para, o agente opera em ciclos. Ele planeja, age, vê o que aconteceu e decide o próximo passo. Se um teste falha, ele lê o erro, entende a causa, propõe a correção e roda de novo. Esse loop é o coração do Claude Code. -->

---

<div class="rf-center" style="height: 100%; text-align: center; align-items: center;">

<div class="rf-eyebrow" style="margin-bottom: 1.2rem;">Seção 4</div>

<div class="rf-section-title">Nível <span class="rf-title">intermediário</span></div>

</div>

---

# Ferramentas nativas do agente

<GridFerramentas />

<!-- Fala sugerida — O agente não faz nada silenciosamente, pelo menos não por padrão. Cada vez que ele quer rodar um comando ou modificar um arquivo, ele mostra o que vai fazer e espera sua aprovação. Você pode configurar permissões mais abertas pra tarefas de baixo risco, ou mais restritivas pra operações críticas. -->

---

# Subagentes

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 1fr 1fr;">

<div class="rf-panel">

**Sessões independentes e especializadas**

- Cada subagente tem seu **próprio contexto**
- Útil para tarefas paralelas ou longas
- Protege o contexto do agente principal
- Recomendado: subagentes somente leitura

</div>

<div>
<Terminal
  :conversation="[{ user: 'Analisa a segurança do repositório.', response: 'Vou delegar a um subagente somente leitura, com contexto próprio. Ele varre o código e me devolve apenas o resumo — assim não incho a janela do agente principal.' }]"
  modelName="Claude Sonnet 4.5"
/>
</div>

</div>

<p style="text-align: center; font-family: 'TeX Gyre Pagella', Georgia, serif; font-style: italic; font-size: 1.05rem; color: var(--rf-text-muted); margin-top: 1.2rem;">O agente principal orquestra. Subagentes executam tarefas isoladas.</p>

<!-- Fala sugerida — Quando uma tarefa é grande ou complexa, o agente principal pode delegar partes pra subagentes. Cada um opera de forma independente, com seu próprio contexto. Isso é útil pra não sobrecarregar a janela principal com resultados extensos, como o output de uma análise grande ou um scan de segurança. -->

---

# MCP

<div class="grid gap-8 mt-4 items-center" style="grid-template-columns: 1fr 1fr;">

<div class="rf-panel">

**Model Context Protocol**

Serviços externos viram ferramentas do agente:

- GitHub (issues, PRs)
- Jira, Linear (tasks)
- Slack (notificações)
- Banco de dados
- APIs internas da empresa

</div>

<div>
<Terminal
  :conversation="[{ user: 'Abre uma issue sobre o bug de autenticação.', response: 'Issue criada via MCP do GitHub: numero 142, Falha intermitente no login OAuth. Já marquei com a label bug e atribuí ao time de backend.' }]"
  modelName="Claude Sonnet 4.5"
/>
</div>

</div>

<p style="text-align: center; font-family: 'TeX Gyre Pagella', Georgia, serif; font-style: italic; font-size: 1.05rem; color: var(--rf-text-muted); margin-top: 1.2rem;">MCP = o agente ganha integrações além do filesystem local.</p>

<!-- Fala sugerida — MCP é o protocolo que expande o alcance do agente pra além do repositório local. Com ele, você conecta o Claude Code a ferramentas externas: criar uma issue no GitHub, atualizar uma tarefa no Jira, consultar um banco de dados. O agente vira um orquestrador de verdade dentro do seu workflow. -->

---

<div class="rf-center" style="height: 100%; text-align: center; align-items: center;">

<div class="rf-eyebrow" style="margin-bottom: 1.2rem;">Seção 5</div>

<div class="rf-section-title"><span class="rf-title">Fechamento</span></div>

</div>

---

# O mapa mental

<div class="grid gap-8 mt-2 items-center" style="grid-template-columns: 3fr 2fr;">

<div>
<MapaMental />
</div>

<div class="rf-panel" style="font-size: 0.82rem;">

- **LLM via chat** → responde texto
- **Claude Code** → age no ambiente
- **Contexto** → memória de trabalho
- **CLAUDE.md** → briefing permanente
- **Skills** → expertise sob demanda
- **Loop agêntico** → agir e iterar
- **Subagentes** → paralelismo isolado
- **MCP** → mundo externo

</div>

</div>

<!-- Fala sugerida — Resumindo: Claude Code não é uma evolução do chatbot, é uma categoria diferente. Você não conversa pra depois executar: você delega, e ele executa. Entender contexto, skills e o loop agêntico separa quem usa o Claude Code como autocomplete de quem usa como um colaborador real de desenvolvimento. -->

---

<div class="rf-center" style="height: 100%; align-items: center; text-align: center;">

<div style="width: 560px; max-width: 90%;">
<Terminal
  :conversation="[{ user: 'E aí, o que vamos construir?', response: 'Você decide — eu já estou no terminal, pronto pra agir.' }]"
  modelName="Claude Sonnet 4.5"
  :loop="true"
/>
</div>

<p class="rf-muted" style="margin-top: 1.6rem; font-size: 0.85rem;">Ramon Ferrari · ramon.ferrari@gmail.com · linkedin.com/in/ramonferrari</p>

</div>

<!-- Fala sugerida — Obrigado. Fico à disposição pra perguntas, e se quiser ver um demo ao vivo, posso mostrar o agente rodando agora. -->

