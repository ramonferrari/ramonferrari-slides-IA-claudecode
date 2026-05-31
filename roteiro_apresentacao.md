# Apresentação: Claude Code — Do Básico ao Intermediário

---

**seção 1: intro**

---

# Slide 1: Título (Capa)

## Estética
Tipografia pura. Título em `rf-hero` + `rf-title`, subtítulo em `rf-muted` italic. Detalhe: `<Terminal>` minúsculo no canto inferior direito com uma única linha animada — `modelName="Claude Sonnet 4.5"`, `fontSize="0.75rem"`, `loop=true`, conversa curta de apresentação (ex: `user: "quem é você?"` / `response: "Seu novo colega de trabalho."`). Serve como elemento vivo na capa sem competir com o título.

## Texto na tela
**Claude Code**
*Do chat ao agente: como um LLM ganha mãos*

Ramon [Sobrenome] · [Mês] 2026

## Fala sugerida
Hoje eu quero mostrar uma mudança de paradigma no uso de IA para desenvolvimento. Não é mais sobre perguntar pro modelo e copiar a resposta. É sobre deixar o modelo agir dentro do seu ambiente real.

---

# Slide 2: O que é uma LLM "normal"?

## Estética
`<Terminal>` ocupando metade direita do slide. Conversa ilustrativa de chat genérico — `modelName="ChatGPT"` (ficará verde piscina), com uma pergunta técnica simples e resposta que o usuário precisa copiar manualmente. Esquerda: bullet list dos limitantes em `rf-panel`. Mostra visualmente o que está sendo descrito.

## Texto na tela
**Modelo de chat tradicional**
- Você escreve uma mensagem
- O modelo responde com texto
- Você copia, aplica, testa manualmente
- Sem acesso ao seu ambiente

## Fala sugerida
O claude.ai, o ChatGPT — são interfaces de conversa. O modelo vive numa caixa: recebe texto, devolve texto. Ele não sabe nada do seu projeto, não toca nos seus arquivos, não roda nenhum comando. Você é o intermediário entre ele e o mundo real.

---

# Slide 3: O problema do intermediário humano

## Estética
`<LoopChatManual>` em tela cheia (ou centralizando o slide). O componente já traz o loop animado com steps iluminando sequencialmente, seta tracejada de retorno e a quote em itálico no rodapé. Nenhum outro elemento necessário — o componente é o slide.

## Texto na tela
**O ciclo manual**
1. Pede pro modelo
2. Copia o código
3. Cola no terminal
4. Lê o erro
5. Reporta o erro pro modelo
6. Repete

> *Você virou o sistema nervoso periférico do modelo.*

## Fala sugerida
Quem já usou IA pra programar conhece esse loop. Você fica no meio, sendo o carteiro entre o modelo e o seu ambiente. É produtivo? Sim. Mas é ainda o humano executando cada passo. O Claude Code quebra esse padrão.

---

**seção 2: o que é o Claude Code**

---

# Slide 4: Claude Code — definição direta

## Estética
`<Terminal>` grande, `modelName="Claude Sonnet 4.5"` (laranja), ocupando 60% do slide. Conversa: `user: "o que você consegue fazer que um chatbot não consegue?"` / resposta listando as 4 capacidades do texto. Esquerda ou abaixo: título do slide em `rf-eyebrow` + `h1`. O terminal é a demonstração ao vivo do conceito.

## Texto na tela
**Claude Code é um agente de codificação que vive no seu terminal.**

- Lê seu codebase
- Edita arquivos
- Roda comandos
- Itera com base nos resultados

Disponível via CLI, VS Code, JetBrains, GitHub Actions.

## Fala sugerida
Claude Code não é um chat. É uma ferramenta de linha de comando que roda no seu ambiente local. Você digita `claude` no terminal e passa a trabalhar com um agente que enxerga seus arquivos, executa comandos reais e raciocina com base no que acontece — não com base só no que você descreve.

---

# Slide 5: A diferença fundamental

## Estética
`<TabelaComparativa>` em tela cheia. O componente já traz chips coloridos, reveal por linha com stagger e header diferenciado por badge. Nenhum outro elemento necessário.

## Texto na tela

| | LLM via chat | Claude Code |
|---|---|---|
| Acesso ao seu projeto | ✗ | ✓ |
| Executa comandos | ✗ | ✓ |
| Edita arquivos | ✗ | ✓ |
| Raciocina sobre resultados | Parcial | ✓ |
| Memória entre sessões | ✗ | Configurável |

## Fala sugerida
A diferença não é de qualidade do modelo — é de arquitetura. O chat te devolve texto. O Claude Code age. Ele tem "mãos": pode ler o repositório, modificar arquivos, rodar testes e usar o resultado pra decidir o próximo passo.

---

**seção 3: conceitos fundamentais**

---

# Slide 6: Contexto — o que o agente "sabe"

## Estética
`<Terminal>` lado direito, `modelName="Claude Sonnet 4.5"`, conversa curta mostrando o agente dizendo que não tem memória da sessão anterior (ilustra o ponto). Esquerda: bullets em `rf-panel` com os 4 itens do contexto. A quote `RAM, não HD` aparece embaixo em itálico serif como `rf-muted`.

## Texto na tela
**Context window: a memória de trabalho do agente**

O modelo só "vê" o que está dentro da janela de contexto:
- Mensagens da sessão atual
- Arquivos explicitamente carregados
- Saída dos comandos rodados
- Instruções de sistema (CLAUDE.md, skills)

> Contexto não é memória permanente — é RAM, não HD.

## Fala sugerida
Antes de falar em agentes, é fundamental entender contexto. O modelo não tem memória persistente por padrão. Ele só sabe o que está na janela de contexto da sessão atual — pense como uma memória de trabalho. Quando a sessão fecha, ela some, a menos que você configure algo pra persistir.

---

# Slide 7: CLAUDE.md — instruções de projeto

## Estética
`<Terminal>` com `modelName="Claude Sonnet 4.5"`, conversa mostrando o agente referenciando uma convenção do CLAUDE.md (ex: `user: "cria uma função de parsing"` / resposta já aplicando snake_case e docstring). Ao lado: bloco `pre` com o exemplo de CLAUDE.md do texto. O terminal demonstra o efeito, o código mostra a causa.

## Texto na tela
**CLAUDE.md: o briefing permanente do agente**

```markdown
# Contexto do projeto
API REST em FastAPI. Python 3.11. Testes com pytest.

# Convenções
- Snake_case em variáveis
- Docstrings em todas as funções públicas
- Nunca commitar sem rodar os testes
```

Carregado automaticamente em cada sessão dentro do projeto.

## Fala sugerida
O CLAUDE.md é o arquivo que diz pro agente quem ele é dentro do seu projeto. Stack, convenções, regras de negócio, o que nunca fazer. É o onboarding permanente. Você escreve uma vez, e toda sessão começa com esse contexto já carregado — sem precisar repetir.

---

# Slide 8: Skills — capacidades modulares

## Estética
`<Terminal>` com `modelName="Claude Sonnet 4.5"`, conversa: `user: "gera um relatório em Word"` / resposta mostrando o agente carregando a skill docx e executando. Ao lado: bloco `pre` com a estrutura de pastas `.claude/skills/`. Demonstra o mecanismo de detecção e carregamento sob demanda.

## Texto na tela
**Skills: instruções especializadas empacotadas**

Cada skill é uma pasta com um `SKILL.md` descrevendo:
- Quando usar essa skill
- O que ela faz
- Como executar

```
.claude/skills/
├── docx/SKILL.md
├── pdf/SKILL.md
└── data-analysis/SKILL.md
```

O agente lê a skill relevante **quando necessário** — não tudo de uma vez.

## Fala sugerida
Skills são módulos de expertise. Em vez de você repetir em cada sessão "quando criar um Word, use a biblioteca python-docx dessa forma…", você empacota isso numa skill. O agente detecta quando a tarefa é relevante e carrega as instruções na hora. Isso evita poluir o contexto com informações desnecessárias.

---

# Slide 9: O loop agêntico — como o agente pensa

## Estética
`<LoopAgentico>` ocupando metade do slide (preferencialmente direita ou centro). Esquerda ou abaixo: os 6 passos numerados em `rf-panel`, sincronizados visualmente com o nó ativo no diagrama (o espectador vê o ciclo girando enquanto você lê os passos). Quote embaixo em itálico serif.

## Texto na tela
**O ciclo de raciocínio do agente**

```
1. Recebe tarefa
2. Planeja ações
3. Usa uma ferramenta (lê arquivo, roda comando)
4. Observa o resultado
5. Raciocina: o que fazer agora?
6. Próxima ação — ou conclui
```

> O modelo não adivinha — ele age, observa, ajusta.

## Fala sugerida
Diferente do chat, onde o modelo responde uma vez e para, o agente opera em ciclos. Ele planeja, age, vê o que aconteceu e decide o próximo passo com base nisso. Se um teste falha, ele lê o erro, entende a causa, propõe a correção e roda de novo. Esse loop é o coração do Claude Code.

---

**seção 4: intermediário**

---

# Slide 10: Ferramentas nativas do agente

## Estética
`<GridFerramentas>` em tela cheia. O componente já traz os 6 cards com fade staggerado, hover com glow e tags de permissão. Nenhum outro elemento necessário — o grid é o slide.

## Texto na tela
**O que o agente pode usar**

| Ferramenta | O que faz |
|---|---|
| `Read` | Lê arquivos do projeto |
| `Write / Edit` | Cria e modifica arquivos |
| `Bash` | Executa comandos no terminal |
| `Web Search` | Busca informação externa |
| `Web Fetch` | Lê URLs específicas |

Cada ação pede sua aprovação (por padrão).

## Fala sugerida
O agente não faz nada silenciosamente — pelo menos não por padrão. Cada vez que ele quer rodar um comando ou modificar um arquivo, ele mostra o que vai fazer e espera sua aprovação. Você pode configurar permissões mais abertas pra tarefas de baixo risco, ou mais restritivas pra operações críticas.

---

# Slide 11: Subagentes — dividindo para conquistar

## Estética
`<Terminal>` com `modelName="Claude Sonnet 4.5"`, conversa mostrando o agente principal delegando uma tarefa de análise para um subagente (ex: `user: "analisa segurança do repo"` / resposta descrevendo que vai spawnar um subagente somente leitura). Ao lado: bullets do texto em `rf-panel`. O terminal ilustra a orquestração em linguagem natural.

## Texto na tela
**Subagentes: sessões independentes especializadas**

- Cada subagente tem seu **próprio contexto**
- Útil para tarefas paralelas ou longas demais
- Protege o contexto do agente principal
- Recomendado: subagentes somente leitura

> O agente principal orquestra. Subagentes executam tarefas isoladas.

## Fala sugerida
Quando uma tarefa é grande ou complexa, o agente principal pode delegar partes pra subagentes. Cada um opera de forma independente, com seu próprio contexto. Isso é especialmente útil pra não sobrecarregar a janela principal com resultados extensos, como output de uma análise grande ou um scan de segurança.

---

# Slide 12: MCP — conectando o agente ao mundo

## Estética
`<Terminal>` com `modelName="Claude Sonnet 4.5"`, conversa mostrando o agente criando uma issue no GitHub via MCP (ex: `user: "abre uma issue sobre o bug de autenticação"` / resposta confirmando criação com link). Ao lado: lista de integrações em `rf-panel`. O terminal torna concreto o que "integrações externas" significa na prática.

## Texto na tela
**Model Context Protocol (MCP)**

Protocolo que permite ao agente usar **serviços externos como ferramentas**:

- GitHub (issues, PRs)
- Jira, Linear (tasks)
- Slack (notificações)
- Banco de dados
- APIs internas da sua empresa

> MCP = o agente ganha integrações além do filesystem local.

## Fala sugerida
MCP é o protocolo que expande o alcance do agente pra além do seu repositório local. Com ele, você pode conectar o Claude Code a ferramentas externas — criar uma issue no GitHub, atualizar uma tarefa no Jira, consultar um banco de dados. O agente vira um orquestrador de verdade dentro do seu workflow.

---

**seção 5: fechamento**

---

# Slide 13: Resumo do mapa mental

## Estética
`<MapaMental>` ocupando 60–70% do slide. Os nós pulsam sequencialmente enquanto você faz o resumo oral — cada conceito acende na ordem da sua fala. Lista de resumo pode aparecer ao lado em `rf-panel` como referência rápida, ou você fala só com o mapa animado na tela.

## Texto na tela
**O que você acabou de aprender**

- **LLM via chat** → responde texto
- **Claude Code** → age no seu ambiente
- **Contexto** → memória de trabalho da sessão
- **CLAUDE.md** → briefing permanente do projeto
- **Skills** → expertise modular sob demanda
- **Loop agêntico** → planejar → agir → observar → iterar
- **Subagentes** → paralelismo e isolamento de contexto
- **MCP** → integrações com o mundo externo

## Fala sugerida
Resumindo: Claude Code não é uma evolução do chatbot — é uma categoria diferente. Você não conversa com ele pra depois executar. Você delega, e ele executa. Entender contexto, skills e o loop agêntico é o que separa quem usa o Claude Code como glorified autocomplete de quem usa como um colaborador real de desenvolvimento.

---

# Slide 14: Encerramento

## Estética
`<Terminal>` centralizado, `modelName="Claude Sonnet 4.5"`, `loop=true`, conversa única: `user: "e aí, o que vamos construir?"` / resposta aberta e convidativa. Abaixo do terminal: contato em `rf-muted` pequenininho. O terminal piscando é o encerramento — deixa a audiência com o agente "vivo" na tela.

## Texto na tela
```
$ claude "e aí, o que vamos construir?"
```

[seu contato / portfólio / LinkedIn]

## Fala sugerida
Obrigado. Fico à disposição pra perguntas — e se quiser ver um demo ao vivo, posso mostrar o agente rodando agora.

---
*Versão 1.0 — Ramon Ferrari · 2026*