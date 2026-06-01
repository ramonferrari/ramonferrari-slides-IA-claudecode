    # Aula: Como Usar Claude Code com Melhores PrÃ¡ticas
**DuraÃ§Ã£o:** 2 horas | **NÃ­vel:** IntermediÃ¡rio a AvanÃ§ado

---

<SeÃ§Ã£o 1: IntroduÃ§Ã£o e VisÃ£o Geral>

# Slide 1: O que Ã© Claude Code?

## Texto no slide
- **Claude Code** Ã© um ambiente de codificaÃ§Ã£o agÃªntico da Anthropic
- Diferente de um chatbot: Claude **lÃª arquivos, executa comandos, faz alteraÃ§Ãµes e resolve problemas autonomamente**
- VocÃª descreve o que quer â†’ Claude explora, planeja e implementa
- DisponÃ­vel via CLI (`npm install -g @anthropic-ai/claude-code`) e integraÃ§Ã£o com VS Code / JetBrains
- Requer conta Anthropic (planos Max, Team ou Enterprise para uso completo)

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama: comparaÃ§Ã£o lado a lado entre "Chatbot tradicional" (pergunta â†’ resposta) vs "Claude Code" (objetivo â†’ exploraÃ§Ã£o â†’ planejamento â†’ implementaÃ§Ã£o â†’ verificaÃ§Ã£o). Setas circulares ilustrando o loop agÃªntico.]

## Fala esperada
"Bom dia a todos! Hoje vamos aprender a usar o Claude Code de forma profissional, com as melhores prÃ¡ticas diretas da Anthropic e de power users. Antes de mais nada: Claude Code nÃ£o Ã© um chatbot. Ã‰ um agente. A diferenÃ§a Ã© fundamental. Enquanto vocÃª usa o ChatGPT perguntando 'como eu faÃ§o X?', no Claude Code vocÃª diz 'faÃ§a X' e ele vai atÃ© o seu repositÃ³rio, lÃª os arquivos relevantes, planeja a implementaÃ§Ã£o e executa. Isso muda completamente a forma de trabalhar. E com essa autonomia vem uma curva de aprendizado, que Ã© exatamente o que vamos cobrir hoje nas prÃ³ximas 2 horas."

---

# Slide 2: Por que Claude Code Importa?

## Texto no slide
- Times da Anthropic reportam ganhos de produtividade de **40%+**
- Debuga 30% mais rÃ¡pido com feedback adaptativo
- Boris Cherney, criador do Claude Code: "Paralelizar tarefas com worktrees Ã© o maior ganho de produtividade que vimos"
- Casos de uso reais: onboarding de codebases, migraÃ§Ã£o de frameworks, revisÃ£o de cÃ³digo, testes automatizados, anÃ¡lise de dados via CLI

## ConteÃºdo do slide (alÃ©m do texto)
[InfogrÃ¡fico com 5 Ã­cones de casos de uso: ðŸ” ExploraÃ§Ã£o de Codebase | ðŸ› ï¸ ImplementaÃ§Ã£o | ðŸ§ª Testes | ðŸ”„ MigraÃ§Ã£o em Massa | ðŸ“Š AnÃ¡lise de Dados]

## Fala esperada
"Por que aprender isso agora? Porque Claude Code se tornou a ferramenta de codificaÃ§Ã£o com IA mais usada do mundo em 2025. Times que adotaram as melhores prÃ¡ticas reportam ganhos de 40% na produtividade. O criador da ferramenta, Boris Cherney, diz que o maior ganho vem de paralelizar sessÃµes usando worktrees do Git â€” algo que veremos mais Ã  frente. Os casos de uso sÃ£o variados: desde explorar um codebase novo que vocÃª nunca viu, atÃ© fazer migraÃ§Ãµes em massa de centenas de arquivos de forma automatizada. Para nÃ³s que trabalhamos com dados e pesquisa, isso Ã© especialmente Ãºtil."

---

# Slide 3: A RestriÃ§Ã£o Fundamental â€” O Context Window

## Texto no slide
- **A constraint mais importante:** o context window se enche rapidamente
- Cada mensagem, arquivo lido e saÃ­da de comando consome tokens
- Uma sessÃ£o de debug pode consumir dezenas de milhares de tokens
- **Performance degrada Ã  medida que o contexto se enche**
- Claude pode "esquecer" instruÃ§Ãµes anteriores quando prÃ³ximo do limite
- âš ï¸ Gerenciar o contexto Ã© a habilidade #1 do Claude Code

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de barra de progresso do context window: mostra como tokens sÃ£o consumidos por "Mensagens do usuÃ¡rio", "Arquivos lidos", "Outputs de comandos" e "HistÃ³rico da sessÃ£o". A barra vai de verde â†’ amarelo â†’ vermelho com degradaÃ§Ã£o de performance indicada.]

## Fala esperada
"Antes de qualquer dica prÃ¡tica, precisamos entender a restriÃ§Ã£o fundamental do Claude Code, porque ela explica todas as melhores prÃ¡ticas que vamos ver hoje. O context window Ã© como a memÃ³ria de trabalho do Claude â€” Ã© onde ele guarda tudo: suas mensagens, os arquivos que leu, as saÃ­das de comandos, o histÃ³rico da conversa. E esse espaÃ§o Ã© limitado. Quando comeÃ§a a encher, a performance comeÃ§a a cair. O Claude pode esquecer instruÃ§Ãµes que vocÃª deu no inÃ­cio da sessÃ£o, comeÃ§ar a cometer mais erros. EntÃ£o toda a arte de usar Claude Code bem gira em torno de uma coisa: gerenciar o context window de forma inteligente. Isso vai guiar tudo que veremos hoje."

---

<SeÃ§Ã£o 2: ConfiguraÃ§Ã£o do Ambiente>

# Slide 4: InstalaÃ§Ã£o e ConfiguraÃ§Ã£o Inicial

## Texto no slide
```bash
# InstalaÃ§Ã£o global
npm install -g @anthropic-ai/claude-code

# AutenticaÃ§Ã£o (uma vez)
claude auth login

# Iniciar no diretÃ³rio do projeto
cd meu-projeto
claude
```
- Execute sempre **dentro do diretÃ³rio raiz do projeto**
- Mantenha o repositÃ³rio buildÃ¡vel e testÃ¡vel localmente
- Claude performa melhor sobre uma Ã¡rvore de cÃ³digo funcional
- Comando `/init` gera um CLAUDE.md inicial analisando sua estrutura

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de sequÃªncia: instalaÃ§Ã£o npm â†’ autenticaÃ§Ã£o â†’ cd projeto â†’ claude â†’ /init â†’ CLAUDE.md gerado automaticamente]

## Fala esperada
"Vamos Ã  prÃ¡tica. A instalaÃ§Ã£o Ã© simples: npm install -g @anthropic-ai/claude-code. VocÃª autentica uma vez e pronto. O ponto crÃ­tico Ã©: sempre execute o Claude dentro do diretÃ³rio raiz do seu projeto. Claude Code performa significativamente melhor quando pode raciocinar sobre uma Ã¡rvore de cÃ³digo intacta e funcional. Se o seu projeto nÃ£o builda, corrija isso primeiro antes de comeÃ§ar a trabalhar com Claude. O comando /init Ã© seu primeiro passo em qualquer projeto novo â€” ele analisa a estrutura do codebase, detecta frameworks, sistemas de build e padrÃµes de cÃ³digo, e gera um arquivo CLAUDE.md inicial que vocÃª vai refinar ao longo do tempo."

---

# Slide 5: O Arquivo CLAUDE.md â€” A Base de Tudo

## Texto no slide
**O que Ã©:** arquivo especial lido no inÃ­cio de **cada** conversa

**O que incluir âœ…**
- Comandos Bash que Claude nÃ£o consegue adivinhar
- Regras de estilo de cÃ³digo diferentes do padrÃ£o
- InstruÃ§Ãµes de teste e runners preferidos
- ConvenÃ§Ãµes de repositÃ³rio (branch naming, PR)
- DecisÃµes arquiteturais especÃ­ficas do projeto

**O que NÃƒO incluir âŒ**
- Coisas que Claude jÃ¡ sabe pelo cÃ³digo
- ConvenÃ§Ãµes padrÃ£o de linguagem
- DocumentaÃ§Ã£o de API (coloque um link)
- ExplicaÃ§Ãµes longas ou tutoriais

## ConteÃºdo do slide (alÃ©m do texto)
[Exemplo de CLAUDE.md real com highlighting de sintaxe:
```markdown
# Code style
- Use ES modules (import/export), not CommonJS
- Destructure imports when possible

# Workflow
- Typecheck after a series of code changes
- Run single tests, not the whole suite
- Commit after every major change

# Architecture
- State management: Zustand
- API calls: /src/utils/api.ts
```]

## Fala esperada
"O CLAUDE.md Ã© provavelmente a ferramenta mais poderosa para quem usa Claude Code regularmente. Ã‰ um arquivo Markdown que fica na raiz do projeto e Ã© carregado automaticamente em cada sessÃ£o â€” pense nele como o briefing que vocÃª dÃ¡ ao Claude antes de comeÃ§ar a trabalhar. A regra de ouro Ã©: mantenha-o conciso. Para cada linha, pergunte: 'Remover isso faria o Claude cometer erros?' Se nÃ£o, corte. CLAUDE.md muito longo Ã© contraproducente porque o Claude comeÃ§a a ignorar partes dele â€” exatamente o efeito contrÃ¡rio do que vocÃª quer. Um truque: apÃ³s corrigir um erro do Claude, diga a ele: 'Atualize seu CLAUDE.md para evitar este erro no futuro.' O Claude Ã© excelente em auto-regulaÃ§Ã£o. Versione o arquivo no Git para que toda a equipe se beneficie."

---

# Slide 6: Hierarquia e LocalizaÃ§Ã£o dos CLAUDE.md

## Texto no slide
Claude carrega **mÃºltiplos** arquivos CLAUDE.md automaticamente:

| LocalizaÃ§Ã£o | Escopo | Versionado? |
|---|---|---|
| `~/.claude/CLAUDE.md` | Todas as sessÃµes (pessoal) | NÃ£o |
| `./CLAUDE.md` | Projeto raiz (time) | âœ… Git |
| `./CLAUDE.local.md` | Projeto (pessoal) | âŒ .gitignore |
| `./src/CLAUDE.md` | SubdiretÃ³rio | âœ… Git |

- ImportaÃ§Ã£o com `@path/to/file` dentro do CLAUDE.md
- Use arquivos em subdiretÃ³rios para monorepos
- Quebre CLAUDE.mds grandes em mÃºltiplos arquivos especÃ­ficos por domÃ­nio

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de Ã¡rvore de diretÃ³rios mostrando os diferentes CLAUDE.md e suas setas de heranÃ§a/escopo:]
```
~/.claude/CLAUDE.md (global)
    â””â”€â”€ projeto/
        â”œâ”€â”€ CLAUDE.md (time)
        â”œâ”€â”€ CLAUDE.local.md (pessoal, gitignored)
        â”œâ”€â”€ src/
        â”‚   â””â”€â”€ CLAUDE.md (frontend rules)
        â””â”€â”€ api/
            â””â”€â”€ CLAUDE.md (backend rules)
```

## Fala esperada
"Uma dica avanÃ§ada que muitos usuÃ¡rios nÃ£o conhecem: vocÃª pode ter mÃºltiplos CLAUDE.md em diferentes lugares. O da sua pasta home aplica a todas as sessÃµes â€” Ã³timo para suas preferÃªncias pessoais de cÃ³digo. O da raiz do projeto Ã© versionado no Git e compartilhado com o time. O CLAUDE.local.md fica no .gitignore, para suas notas pessoais sobre o projeto. E vocÃª pode ter CLAUDE.mds em subdiretÃ³rios para regras especÃ­ficas de domÃ­nio. Em um monorepo, por exemplo, vocÃª pode ter regras de TypeScript no frontend e regras de Python no backend, cada um no seu diretÃ³rio. O Claude carrega automaticamente o arquivo relevante quando lÃª arquivos daquele diretÃ³rio."

---

# Slide 7: Modos de PermissÃ£o

## Texto no slide
Claude Code tem **4 modos de permissÃ£o**:

| Modo | Comportamento | Quando usar |
|---|---|---|
| **Default** | Pede aprovaÃ§Ã£o para cada aÃ§Ã£o | UsuÃ¡rios novos, cÃ³digo sensÃ­vel |
| **Plan** | Somente leitura, sem modificaÃ§Ãµes | Code review, exploraÃ§Ã£o |
| **AcceptEdits** | Aprova mudanÃ§as de arquivos automaticamente | Sprint de desenvolvimento ativo |
| **Auto** | Classificador aprova aÃ§Ãµes seguras | Runs autÃ´nomas confiÃ¡veis |

- Use `/permissions` para allowlist de comandos especÃ­ficos
- Use `/sandbox` para isolamento no nÃ­vel do SO
- Configure com `--permission-mode auto` para CI/CD

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de fluxo de decisÃ£o: "Qual modo usar?" â†’ pergunta "Estou em review?" â†’ Plan | "Ã‰ desenvolvimento ativo?" â†’ AcceptEdits | "Ã‰ CI/CD automatizado?" â†’ Auto | "CÃ³digo sensÃ­vel/novo projeto?" â†’ Default]

## Fala esperada
"Os modos de permissÃ£o controlam o quanto de autonomia vocÃª dÃ¡ ao Claude. Por padrÃ£o, ele pede aprovaÃ§Ã£o para cada aÃ§Ã£o â€” seguro, mas tedioso. Depois da dÃ©cima aprovaÃ§Ã£o, vocÃª jÃ¡ nÃ£o estÃ¡ realmente revisando, sÃ³ clicando. O modo Plan Ã© sÃ³ leitura â€” perfeito para explorar um codebase ou fazer review sem risco de mudanÃ§as acidentais. O AcceptEdits aprova automaticamente mudanÃ§as de arquivos, Ã³timo para sprints de desenvolvimento onde vocÃª confia na direÃ§Ã£o do trabalho. O modo Auto usa um modelo classificador que verifica se cada aÃ§Ã£o Ã© segura â€” ideal para runs nÃ£o-supervisionadas em CI. A dica prÃ¡tica: mude de modo conforme a fase do trabalho. ComeÃ§a em Plan para entender o problema, muda para AcceptEdits para implementar, volta ao Default para revisar o resultado."

---

<SeÃ§Ã£o 3: O Fluxo de Trabalho Ideal>

# Slide 8: Explorar â†’ Planejar â†’ Implementar â†’ Commitar

## Texto no slide
**O workflow de 4 fases recomendado pela Anthropic:**

**1. Explorar** (Plan mode)
```
leia /src/auth e entenda como gerenciamos sessÃµes e login.
```

**2. Planejar** (Plan mode)
```
Quero adicionar OAuth com Google. Quais arquivos precisam mudar?
Qual Ã© o fluxo de sessÃ£o? Crie um plano.
```

**3. Implementar** (Default/AcceptEdits)
```
Implemente o fluxo OAuth do seu plano. Escreva testes para o
callback handler, execute o suite de testes e corrija falhas.
```

**4. Commitar**
```
FaÃ§a commit com mensagem descritiva e abra um PR
```

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de 4 etapas em sequÃªncia com Ã­cones: ðŸ” Explorar (lupa) â†’ ðŸ“‹ Planejar (prancheta) â†’ ðŸ’» Implementar (cÃ³digo) â†’ ðŸ“¦ Commitar (caixa com seta). Seta de retorno de "Implementar" para "Planejar" indicando iteraÃ§Ã£o.]

## Fala esperada
"Este Ã© o padrÃ£o de workflow mais importante desta aula. A documentaÃ§Ã£o oficial da Anthropic Ã© clara: separe exploraÃ§Ã£o e planejamento de implementaÃ§Ã£o para evitar resolver o problema errado. Deixar o Claude pular direto para o cÃ³digo pode gerar cÃ³digo correto tecnicamente, mas que resolve o problema errado. O modo Plan Ã© chave aqui â€” no modo Plan, o Claude lÃª arquivos e responde perguntas, mas nÃ£o faz nenhuma modificaÃ§Ã£o. Ã‰ o seu modo de seguranÃ§a para exploraÃ§Ã£o. Depois de ter o plano, vocÃª pode inclusive pressionar Ctrl+G para abrir o plano no seu editor de texto e editar diretamente antes do Claude comeÃ§ar a implementar. Uma ressalva: esse workflow tem overhead. Para tarefas pequenas e claras, como corrigir um typo ou renomear uma variÃ¡vel, pule o planejamento e peÃ§a direto."

---

# Slide 9: Prompts EspecÃ­ficos e Ricos

## Texto no slide
**A precisÃ£o das suas instruÃ§Ãµes determina a qualidade dos resultados.**

| âŒ Vago | âœ… EspecÃ­fico |
|---|---|
| "adicione testes para foo.py" | "escreva um teste para foo.py cobrindo o edge case onde o usuÃ¡rio estÃ¡ deslogado. evite mocks." |
| "corrija o bug de login" | "usuÃ¡rios reportam falha no login apÃ³s timeout de sessÃ£o. verifique o fluxo auth em src/auth/, especialmente token refresh. escreva um teste que reproduza o problema, depois corrija." |
| "adicione um widget de calendÃ¡rio" | "veja como os widgets existentes em HotDogWidget.php sÃ£o implementados. siga o padrÃ£o para implementar um novo widget de calendÃ¡rio sem usar bibliotecas alÃ©m das jÃ¡ usadas." |

**ForneÃ§a conteÃºdo rico:**
- `@arquivo.ts` para referenciar arquivos diretamente
- Cole screenshots/imagens para UI feedback
- Pipe de dados: `cat error.log | claude`

## ConteÃºdo do slide (alÃ©m do texto)
[Dois balÃµes de chat lado a lado: o da esquerda (vermelho) com prompt vago e resultado genÃ©rico; o da direita (verde) com prompt especÃ­fico e resultado preciso.]

## Fala esperada
"A qualidade do seu prompt Ã© diretamente proporcional Ã  qualidade do resultado â€” isso vale para qualquer IA, mas no Claude Code a diferenÃ§a Ã© ainda mais dramÃ¡tica porque as aÃ§Ãµes tÃªm consequÃªncias reais no cÃ³digo. Quando vocÃª diz 'adicione testes', o Claude vai adivinhar o que testar, como testar, com quais mocks. Quando vocÃª diz 'escreva um teste para foo.py cobrindo o edge case de usuÃ¡rio deslogado, sem mocks', nÃ£o hÃ¡ ambiguidade. Um recurso muito poderoso: o sÃ­mbolo @. VocÃª pode digitar @src/utils/api.ts e o Claude vai ler aquele arquivo antes de responder. E se vocÃª tem um screenshot de um bug visual, pode colar direto no terminal â€” o Claude entende imagens. Para automatizar, pode usar pipe de dados: cat error.log | claude 'analise esses erros e encontre o padrÃ£o'."

---

# Slide 10: Deixe o Claude Verificar seu PrÃ³prio Trabalho

## Texto no slide
**Claude para quando o trabalho "parece pronto". Sem verificaÃ§Ã£o, VOCÃŠ vira o loop.**

EstratÃ©gias de verificaÃ§Ã£o:

| EstratÃ©gia | Exemplo de prompt |
|---|---|
| Testes | "implemente e execute os testes. corrija falhas." |
| Build/Lint | "implemente e verifique que `npm run build` passa" |
| UI visual | "[cole screenshot] implemente e compare com o original. liste diferenÃ§as." |
| Root cause | "o build falha com [erro]. corrija a causa raiz, nÃ£o suprima o erro" |

- Use `/goal` para condiÃ§Ãµes de parada entre sessÃµes
- Stop hooks bloqueiam o turno atÃ© que um script externo passe
- PeÃ§a **evidÃªncias**, nÃ£o assertivas: "mostre o output dos testes"

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de loop: sem verificaÃ§Ã£o â†’ Claude implementa â†’ diz "pronto" â†’ vocÃª checa â†’ encontra bug â†’ ciclo lento. Com verificaÃ§Ã£o â†’ Claude implementa â†’ roda testes â†’ vÃª falha â†’ corrige â†’ loop fechado automaticamente.]

## Fala esperada
"Esse Ã© um dos insights mais importantes: Claude para quando o trabalho 'parece pronto'. Se vocÃª nÃ£o dÃ¡ a ele uma forma de verificar, vocÃª se torna o loop de verificaÃ§Ã£o â€” cada erro espera vocÃª perceber. A soluÃ§Ã£o Ã© simples: sempre inclua uma verificaÃ§Ã£o no prompt. 'Implemente e execute os testes, corrija falhas.' 'FaÃ§a a mudanÃ§a e verifique que o build passa.' Para UI, cole um screenshot do design e peÃ§a para ele comparar o resultado com o original visualmente. Um truque avanÃ§ado: peÃ§a evidÃªncias em vez de assertivas. Em vez de aceitar 'concluÃ­do', peÃ§a 'mostre o output dos testes que vocÃª rodou'. Isso Ã© muito mais confiÃ¡vel do que a palavra do Claude. Para workflows totalmente autÃ´nomos, vocÃª pode configurar Stop hooks â€” scripts que rodam automaticamente e bloqueiam o turno de terminar atÃ© que uma condiÃ§Ã£o seja satisfeita."

---

<SeÃ§Ã£o 4: Gerenciamento de Contexto>

# Slide 11: Comandos Essenciais de Contexto

## Texto no slide
```bash
/clear          # Reseta o context window completamente
/compact        # Comprime o histÃ³rico, preservando o importante
/compact "foque nas mudanÃ§as de API"  # CompressÃ£o direcionada
/rewind         # Abre menu de checkpoints (Esc+Esc)
/btw            # Pergunta lateral sem entrar no contexto
--continue      # Retoma a sessÃ£o mais recente
--resume        # Escolhe entre sessÃµes anteriores
/rename         # Nomeia a sessÃ£o atual
```

**Regra de ouro:** Se vocÃª corrigiu Claude mais de **2 vezes** na mesma questÃ£o â†’ `/clear` e reescreva o prompt com o que aprendeu

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de decisÃ£o: "Quando usar cada comando?" com Ã¡rvore: tarefa nÃ£o relacionada â†’ /clear | contexto cheio mas tarefa continua â†’ /compact | erro que Claude nÃ£o estÃ¡ conseguindo resolver â†’ /clear + prompt melhorado | quer verificar algo rapidamente â†’ /btw]

## Fala esperada
"Vamos falar dos comandos de gerenciamento de contexto â€” esses sÃ£o os que a maioria dos usuÃ¡rios nÃ£o conhece, mas que fazem toda a diferenÃ§a. O /clear Ã© nuclear: reseta tudo. Use entre tarefas nÃ£o relacionadas. O /compact Ã© mais cirÃºrgico: comprime o histÃ³rico preservando informaÃ§Ãµes importantes. VocÃª pode direcionar: '/compact foque nas mudanÃ§as de API'. O /btw Ã© um diamante escondido: faz uma pergunta lateral que aparece numa janela sobreponÃ­vel e nunca entra no contexto principal â€” perfeito para verificar um detalhe rÃ¡pido sem desperdiÃ§ar tokens. O /rewind Ã© o seu desfazer: press Esc duas vezes para abrir o menu de checkpoints e restaurar cÃ³digo, conversa ou ambos. Para o dia a dia: use --continue para retomar sua Ãºltima sessÃ£o exatamente de onde parou. E uma regra prÃ¡tica: se vocÃª corrigiu Claude mais de duas vezes pelo mesmo problema numa sessÃ£o, pare, use /clear, e reescreva o prompt incorporando o que vocÃª aprendeu. Uma sessÃ£o limpa com prompt melhor quase sempre supera uma sessÃ£o longa com muitas correÃ§Ãµes acumuladas."

---

# Slide 12: PadrÃµes Comuns de Falha

## Texto no slide
**Reconhecer esses padrÃµes vai economizar horas:**

1. **"A SessÃ£o Cozinha de Tudo"** â€” vocÃª comeÃ§a com uma tarefa, pergunta algo nÃ£o relacionado, volta para a primeira tarefa. Contexto cheio de irrelevÃ¢ncias.
   â†’ **Fix:** `/clear` entre tarefas nÃ£o relacionadas

2. **"A Espiral de CorreÃ§Ãµes"** â€” Claude erra, vocÃª corrige, ainda erra, corrige de novo...
   â†’ **Fix:** ApÃ³s 2 correÃ§Ãµes, `/clear` e escreva prompt melhor

3. **"O CLAUDE.md Monstro"** â€” arquivo muito longo, Claude ignora metade das regras
   â†’ **Fix:** Pode sem dÃ³. Se Claude jÃ¡ faz sem a instruÃ§Ã£o, delete

4. **"A ExploraÃ§Ã£o Infinita"** â€” vocÃª pede para "investigar" sem escopo. Claude lÃª centenas de arquivos.
   â†’ **Fix:** Use subagentes para exploraÃ§Ã£o

## ConteÃºdo do slide (alÃ©m do texto)
[Quadro vermelho com 4 anti-padrÃµes ilustrados com Ã­cones de aviso âš ï¸, cada um com o fix em verde]

## Fala esperada
"Vou compartilhar os padrÃµes de falha mais comuns que a documentaÃ§Ã£o oficial da Anthropic lista. O primeiro Ã© a 'SessÃ£o Cozinha de Tudo' â€” vocÃª mistura tarefas nÃ£o relacionadas na mesma sessÃ£o e o contexto fica poluÃ­do. O segundo Ã© a espiral de correÃ§Ãµes â€” vocÃª fica corrigindo o mesmo erro em loop. O terceiro Ã© o CLAUDE.md monstro â€” quando fica grande demais, o Claude comeÃ§a a ignorar partes. A regra Ã©: se vocÃª jÃ¡ faz aquilo sem o Claude corretamente, delete a instruÃ§Ã£o. O quarto Ã© a exploraÃ§Ã£o infinita â€” pedir 'investigue X' sem escopo. O Claude vai ler centenas de arquivos, enchendo seu contexto principal. Para esses casos, use subagentes, que exploram em janelas de contexto separadas e trazem de volta apenas o resumo. Guardem esses 4 padrÃµes â€” quando algo der errado, provavelmente Ã© um deles."

---

<SeÃ§Ã£o 5: Funcionalidades AvanÃ§adas>

# Slide 13: Subagentes â€” DelegaÃ§Ã£o Inteligente

## Texto no slide
**Subagentes rodam em context windows prÃ³prios e isolados**

```
# InvestigaÃ§Ã£o sem poluir seu contexto:
"use subagentes para investigar como nosso sistema de 
autenticaÃ§Ã£o lida com token refresh"

# RevisÃ£o apÃ³s implementaÃ§Ã£o:
"use um subagente para revisar este cÃ³digo por edge cases"

# RevisÃ£o Writer/Reviewer:
SessÃ£o A: "implemente um rate limiter para nossas APIs"
SessÃ£o B: "revise @src/middleware/rateLimiter.ts por race 
conditions e edge cases"
```

**Crie subagentes customizados em `.claude/agents/`**

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama: SessÃ£o Principal â†’ delega tarefa â†’ Subagente (context window separado) â†’ explora/executa â†’ retorna resumo â†’ SessÃ£o Principal (contexto limpo). Destaque: o contexto principal nÃ£o Ã© poluÃ­do pela exploraÃ§Ã£o do subagente.]

## Fala esperada
"Subagentes sÃ£o uma das funcionalidades mais poderosas e menos usadas do Claude Code. A ideia Ã© simples: quando Claude pesquisa um codebase, ele lÃª muitos arquivos â€” todos consumindo seu contexto. Com subagentes, essa exploraÃ§Ã£o acontece em uma janela de contexto separada e sÃ³ o resumo dos achados volta para vocÃª. Ã‰ como contratar um assistente para fazer a pesquisa e te entregar um relatÃ³rio, em vez de vocÃª acompanhar cada passo. VocÃª pode criar subagentes customizados em .claude/agents/ com instruÃ§Ãµes especÃ­ficas. Por exemplo, um agente de revisÃ£o de seguranÃ§a que tem acesso somente de leitura e um system prompt de engenheiro de seguranÃ§a sÃªnior. O padrÃ£o Writer/Reviewer Ã© um dos mais poderosos: uma sessÃ£o implementa, outra revisa com contexto limpo â€” sem o viÃ©s de quem escreveu o cÃ³digo."

---

# Slide 14: Slash Commands Customizados

## Texto no slide
**Transforme workflows repetitivos em comandos de uma linha**

Crie em `.claude/commands/nome-do-comando.md`:
```markdown
# Fix GitHub Issue

Analise e corrija o issue do GitHub: $ARGUMENTS

1. Use `gh issue view $ARGUMENTS` para ver os detalhes
2. Entenda o problema descrito
3. Busque arquivos relevantes no codebase
4. Implemente as mudanÃ§as necessÃ¡rias
5. Escreva e rode testes para verificar a correÃ§Ã£o
6. Garanta que o cÃ³digo passa no lint e typecheck
7. Crie uma mensagem de commit descritiva
8. FaÃ§a push e abra um PR
```

**Uso:** `/fix-issue 1234`

**Exemplos populares:** `/techdebt`, `/code-review`, `/test-coverage`, `/security-audit`

## ConteÃºdo do slide (alÃ©m do texto)
[Screenshot mostrando a estrutura de diretÃ³rio `.claude/commands/` com vÃ¡rios arquivos .md de comandos customizados, e ao lado um terminal mostrando o uso de `/fix-issue 1234` sendo invocado.]

## Fala esperada
"Custom slash commands sÃ£o como macros para o Claude Code. VocÃª cria um arquivo Markdown em .claude/commands/ e ele se torna um comando que vocÃª pode invocar com /nome-do-comando. O placeholder $ARGUMENTS permite passar parÃ¢metros. O exemplo clÃ¡ssico Ã© /fix-issue: vocÃª digita /fix-issue 1234, e o Claude automaticamente vai ao GitHub, lÃª o issue, encontra os arquivos relevantes, implementa a correÃ§Ã£o, escreva os testes e abre o PR â€” tudo em uma sÃ³ instruÃ§Ã£o. O Boris, criador do Claude Code, diz que a regra Ã©: se vocÃª se encontra fazendo a mesma coisa mais de uma vez por dia, transforme em um slash command. A equipe da Anthropic tem comandos para detectar dÃ­vida tÃ©cnica, fazer revisÃµes de cÃ³digo, gerar relatÃ³rios de coverage. E esses comandos podem ser versionados no Git e compartilhados com toda a equipe."

---

# Slide 15: MCP â€” Model Context Protocol

## Texto no slide
**MCP conecta Claude a sistemas externos de forma padronizada**

```bash
# Adicionar um servidor MCP
claude mcp add

# Exemplos de integraÃ§Ãµes:
claude mcp add github          # Issues, PRs, code review
claude mcp add postgres        # Queries SQL ao vivo
claude mcp add figma           # Designs direto no workflow
claude mcp add notion          # DocumentaÃ§Ã£o e tasks
```

**Casos de uso:**
- Query ao banco de dados para validar suposiÃ§Ãµes de cÃ³digo
- Criar PRs, ler issues e gerenciar repositÃ³rios sem sair do terminal
- Integrar dados de monitoring/Datadog para debugging
- Acessar designs no Figma para implementaÃ§Ã£o pixel-perfect

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama hub-and-spoke: Claude Code no centro, conectado via setas bidirecionais a: GitHub, PostgreSQL, Figma, Notion, AWS, Slack, cada um com seu Ã­cone. Legenda: "MCP como camada de integraÃ§Ã£o universal".]

## Fala esperada
"O Model Context Protocol, ou MCP, Ã© o que transforma o Claude Code de uma ferramenta de cÃ³digo em uma plataforma de automaÃ§Ã£o. Ele permite que o Claude se conecte a sistemas externos de forma padronizada e segura. Com o MCP do GitHub, vocÃª pode pedir ao Claude para 'criar um PR com as mudanÃ§as atuais, baseado no template do projeto' sem sair do terminal. Com o MCP do PostgreSQL, o Claude pode rodar queries ao vivo para validar suposiÃ§Ãµes sobre os dados antes de escrever o cÃ³digo. Para nÃ³s que trabalhamos com dados, isso Ã© especialmente poderoso: vocÃª pode ter o Claude consultando tabelas, analisando schemas e gerando cÃ³digo que vocÃª sabe que vai funcionar com a estrutura real dos dados. Sempre siga boas prÃ¡ticas de seguranÃ§a: conexÃµes criptografadas e controles de permissÃ£o estritos."

---

# Slide 16: Hooks â€” AutomaÃ§Ã£o DeterminÃ­stica

## Texto no slide
**Hooks rodam scripts automaticamente em pontos especÃ­ficos do workflow**

DiferenÃ§a crucial:
- CLAUDE.md: **advisory** (Claude pode ignorar)
- Hooks: **determinÃ­stico** (sempre executa, sem exceÃ§Ãµes)

**Tipos de hooks:**
- `PreToolUse` â€” antes de Claude usar uma ferramenta
- `PostToolUse` â€” apÃ³s Claude usar uma ferramenta  
- `Stop` â€” antes de Claude terminar o turno

**Exemplos prÃ¡ticos:**
```bash
# Hook que roda eslint apÃ³s cada ediÃ§Ã£o de arquivo
# Hook que bloqueia escritas na pasta /migrations
# Hook que roda Prettier automaticamente
# Hook que verifica erros TypeScript apÃ³s cada mudanÃ§a
```

**ConfiguraÃ§Ã£o:** `.claude/settings.json` | Comando: `/hooks`

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de timeline de uma sessÃ£o: Prompt do usuÃ¡rio â†’ [PreToolUse Hook] â†’ Claude usa ferramenta â†’ [PostToolUse Hook] â†’ Claude responde â†’ [Stop Hook] â†’ Fim do turno. Cada hook tem um Ã­cone de engrenagem e a descriÃ§Ã£o da aÃ§Ã£o automÃ¡tica.]

## Fala esperada
"Hooks sÃ£o a resposta para 'como garantir que o Claude SEMPRE faÃ§a X?'. A diferenÃ§a entre uma instruÃ§Ã£o no CLAUDE.md e um hook Ã© a diferenÃ§a entre uma sugestÃ£o e uma regra. O CLAUDE.md Ã© advisory â€” o Claude pode ocasionalmente ignorar ou esquecer. Hooks sÃ£o determinÃ­sticos â€” executam sempre, sem exceÃ§Ã£o. Um caso de uso clÃ¡ssico da comunidade: um hook que roda Prettier em todos os arquivos editados. Resultado: cÃ³digo sempre formatado, zero discussÃµes sobre formataÃ§Ã£o. Outro exemplo: um hook Stop que verifica erros TypeScript antes de terminar o turno. Se hÃ¡ erros, o turno Ã© bloqueado e o Claude corrige antes de continuar. Um usuÃ¡rio experiente na comunidade reportou: desde que configurou esses hooks de verificaÃ§Ã£o, o Claude nunca mais deixou erros de compilaÃ§Ã£o no cÃ³digo. A forma mais fÃ¡cil de criar hooks Ã© pedir ao prÃ³prio Claude: 'escreva um hook que roda eslint apÃ³s cada ediÃ§Ã£o de arquivo'."

---

<SeÃ§Ã£o 6: Escalabilidade e Paralelismo>

# Slide 17: SessÃµes Paralelas com Git Worktrees

## Texto no slide
**A dica #1 do criador do Claude Code para produtividade mÃ¡xima**

```bash
# Criar worktrees para sessÃµes paralelas
git worktree add ../projeto-feature-auth feature/auth
git worktree add ../projeto-bugfix-login bugfix/login
git worktree add ../projeto-refactor refactor/payment

# Iniciar Claude em cada worktree independentemente
cd ../projeto-feature-auth && claude
cd ../projeto-bugfix-login && claude
cd ../projeto-refactor && claude
```

**BenefÃ­cios:**
- EdiÃ§Ãµes nÃ£o colidem entre sessÃµes
- Cada Claude tem seu prÃ³prio contexto limpo
- MÃºltiplas features em paralelo real
- Review de cÃ³digo com contexto fresco (sem viÃ©s)

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de 3 worktrees rodando em paralelo: Worktree 1 (feature/auth) com Claude Session A, Worktree 2 (bugfix/login) com Claude Session B, Worktree 3 (refactor) com Claude Session C. Todos apontando para o mesmo repositÃ³rio Git base com setas de merge.]

## Fala esperada
"Esta Ã© a dica nÃºmero um do Boris Cherney, criador do Claude Code: utilize 3 a 5 worktrees do Git, cada um rodando sua prÃ³pria sessÃ£o do Claude. Ã‰ o maior salto de produtividade individual que a equipe da Anthropic identificou. A lÃ³gica Ã© simples: em vez de trabalhar em uma feature de cada vez, vocÃª pode ter o Claude trabalhando em trÃªs features simultaneamente. Git worktrees permitem que vocÃª tenha mÃºltiplos checkouts do mesmo repositÃ³rio em diretÃ³rios diferentes, sem conflitos. Cada checkout tem seu prÃ³prio diretÃ³rio de trabalho, entÃ£o as sessÃµes do Claude nÃ£o interferem entre si. Um padrÃ£o particularmente poderoso: use uma sessÃ£o para implementar e outra, em um worktree separado, para revisar o cÃ³digo. A sessÃ£o de revisÃ£o tem contexto completamente limpo e nÃ£o estÃ¡ influenciada pelo raciocÃ­nio que produziu as mudanÃ§as â€” revisÃ£o muito mais imparcial e eficaz."

---

# Slide 18: Modo NÃ£o-Interativo e AutomaÃ§Ã£o em CI/CD

## Texto no slide
```bash
# ExecuÃ§Ã£o nÃ£o-interativa bÃ¡sica
claude -p "explique o que este projeto faz"

# SaÃ­da estruturada para scripts
claude -p "liste todos os endpoints da API" --output-format json

# Streaming para processamento em tempo real
claude -p "analise este log" --output-format stream-json --verbose

# AutomaÃ§Ã£o com permissÃµes controladas
claude --permission-mode auto -p "corrija todos os erros de lint"

# Fan-out: processar mÃºltiplos arquivos em paralelo
for file in $(cat files.txt); do
  claude -p "migre $file de React para Vue" \
    --allowedTools "Edit,Bash(git commit *)" &
done
```

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de pipeline CI/CD: Commit â†’ GitHub Action â†’ claude -p "review code" â†’ resultado JSON â†’ block ou allow â†’ Deploy. Destaque para o uso do --allowedTools para seguranÃ§a em automaÃ§Ãµes.]

## Fala esperada
"O modo nÃ£o-interativo com a flag -p transforma o Claude Code em uma ferramenta de linha de comando que vocÃª pode integrar em qualquer pipeline de automaÃ§Ã£o. A Anthropic chama isso de 'fan-out': vocÃª pode rodar dezenas de instÃ¢ncias do Claude em paralelo, cada uma processando um arquivo diferente. Imagine uma migraÃ§Ã£o de 2.000 arquivos de React para Vue â€” vocÃª lista todos os arquivos, escreve um loop Bash e deixa rolar. VocÃª testa com 2 ou 3 arquivos primeiro, refina o prompt, e depois executa em larga escala. O --allowedTools Ã© crucial aqui: restringe o que o Claude pode fazer em execuÃ§Ãµes autÃ´nomas. Por exemplo, vocÃª pode permitir sÃ³ Edit e git commit, mas nÃ£o git push ou instalaÃ§Ã£o de pacotes. Para CI/CD, o --output-format json permite que scripts parsem os resultados programaticamente. Isso abre possibilidades enormes: code review automatizado em todo PR, verificaÃ§Ã£o de seguranÃ§a em cada commit, ou anÃ¡lise de logs em tempo real."

---

<SeÃ§Ã£o 7: Prompting AvanÃ§ado>

# Slide 19: TÃ©cnicas de Prompting AvanÃ§adas

## Texto no slide
**Prompts que elevam a qualidade do trabalho:**

```
# Deixar o Claude te entrevistar (para features complexas):
"Quero construir [descriÃ§Ã£o breve]. Me entreviste em detalhes
usando AskUserQuestion. Pergunte sobre implementaÃ§Ã£o tÃ©cnica,
UX, edge cases e tradeoffs. Continue entrevistando atÃ© cobrir
tudo, depois escreva uma spec completa em SPEC.md"

# RevisÃ£o crÃ­tica:
"Me questione duramente sobre essas mudanÃ§as e nÃ£o crie o PR 
atÃ© que vocÃª mesmo passe em sua revisÃ£o"

# ApÃ³s soluÃ§Ã£o medÃ­ocre:
"Com tudo que vocÃª sabe agora, descarte isso e implemente
uma soluÃ§Ã£o mais elegante"

# Para exploraÃ§Ã£o de codebase:
"O que vocÃª melhoraria neste arquivo?"
```

## ConteÃºdo do slide (alÃ©m do texto)
[ComparaÃ§Ã£o de dois fluxos: Fluxo padrÃ£o (usuÃ¡rio especifica tudo â†’ Claude implementa â†’ resultado ok). Fluxo com entrevista (Claude entrevista usuÃ¡rio â†’ spec precisa â†’ implementaÃ§Ã£o muito melhor). Destaque para a "spec" como artefato intermediÃ¡rio.]

## Fala esperada
"Algumas tÃ©cnicas de prompting que nÃ£o sÃ£o Ã³bvias mas fazem enorme diferenÃ§a. A primeira: para features complexas, nÃ£o especifique tudo de uma vez. Em vez disso, peÃ§a para o Claude te entrevistar. Ele vai fazer perguntas sobre coisas que vocÃª provavelmente nÃ£o teria considerado: edge cases, implicaÃ§Ãµes de seguranÃ§a, tradeoffs de UX. O resultado Ã© uma spec muito mais completa do que vocÃª teria escrito sozinho. Depois de ter a spec, inicie uma nova sessÃ£o com contexto limpo para implementar. A segunda tÃ©cnica: 'me questione duramente sobre essas mudanÃ§as'. Em vez de pedir revisÃ£o, vocÃª pede ao Claude para tentar achar problemas â€” e pede que ele nÃ£o crie o PR atÃ© passar em sua prÃ³pria revisÃ£o crÃ­tica. Ã‰ uma tÃ©cnica que ativa o modo mais cÃ©tico do Claude. E uma terceira: apÃ³s uma soluÃ§Ã£o medÃ­ocre, diga 'com tudo que vocÃª sabe agora, descarte e implemente algo mais elegante'. Isso muitas vezes produz resultados significativamente melhores."

---

# Slide 20: Dicas de Terminal e UX

## Texto no slide
**Atalhos e configuraÃ§Ãµes que economizam tempo:**

| AÃ§Ã£o | Como fazer |
|---|---|
| Interromper Claude | `Esc` (contexto preservado) |
| Desfazer + rewind | `Esc + Esc` ou `/rewind` |
| Completar caminhos | `Tab` |
| Colar screenshot | `Ctrl+V` (nÃ£o Cmd+V) |
| Arrastar imagem | Direto no terminal (macOS) |
| Executar bash | `!git status` (sem processamento do modelo) |
| Ver uso de contexto | `/statusline` |
| Ditado de voz | `Fn + Fn` no macOS (~3x mais rÃ¡pido) |
| MÃºltiplas abas | Color-code por worktree |

**Dica de ouro:** Use `!` para comandos bash diretos â€” zero tokens gastos, output vai direto para o contexto.

## ConteÃºdo do slide (alÃ©m do texto)
[Screenshot de terminal mostrando o statusline customizado com barra de progresso do context window e branch git atual. Ao lado, demonstraÃ§Ã£o do !git status com output sendo injetado diretamente no contexto.]

## Fala esperada
"Algumas dicas de UX que aceleram muito o dia a dia. O Escape Ã© seu amigo â€” quando vocÃª percebe que o Claude estÃ¡ indo na direÃ§Ã£o errada, aperte Escape imediatamente. O contexto Ã© preservado, vocÃª pode redirecionar. O duplo Escape abre o menu de checkpoints. Para usuÃ¡rios de Mac, o !ponto de exclamaÃ§Ã£o antes de um comando Bash Ã© uma dica poderosa: !git status executa o comando instantaneamente, injeta o output no contexto, sem gastar tokens do modelo para processar. Para colar screenshots, atenÃ§Ã£o: Ã© Ctrl+V, nÃ£o Cmd+V como vocÃª estÃ¡ acostumado no Mac. E uma dica do Boris que pouca gente usa: ditado de voz. No macOS, dois Fn em sequÃªncia ativam o ditado. Falar Ã© tipicamente 3x mais rÃ¡pido que digitar, e o Claude entende muito bem prompts dictados â€” especialmente em modo de planejamento onde vocÃª estÃ¡ pensando em voz alta."

---

<SeÃ§Ã£o 8: AplicaÃ§Ãµes PrÃ¡ticas e Casos de Uso>

# Slide 21: Claude Code para AnÃ¡lise de Dados

## Texto no slide
**Para data scientists e analistas â€” casos de uso especÃ­ficos:**

```bash
# AnÃ¡lise de dados com CLI tools
"Use bq CLI para buscar as mÃ©tricas de qualidade 
do Ãºltimo mÃªs e analise tendÃªncias anÃ´malas"

# GeraÃ§Ã£o de cÃ³digo com contexto de dados real
"Conecte ao PostgreSQL via MCP e analise o schema
da tabela de contratos. Gere cÃ³digo Python otimizado
para processar os registros com base na estrutura real."

# RevisÃ£o de pipelines
"Revise este pipeline de RAG em @src/rag/pipeline.py
por problemas de performance com documentos grandes"

# DocumentaÃ§Ã£o automÃ¡tica
"Leia todos os notebooks em /notebooks e gere
documentaÃ§Ã£o tÃ©cnica no formato Obsidian"
```

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de workflow para data science: Dados (DB/S3) â†’ MCP â†’ Claude Code â†’ CÃ³digo Python/SQL gerado â†’ ValidaÃ§Ã£o automÃ¡tica â†’ Pipeline funcionando. Destaque para o loop de feedback entre geraÃ§Ã£o e teste.]

## Fala esperada
"Como data scientists e pesquisadores, temos casos de uso muito especÃ­ficos para o Claude Code. O Boris, criador da ferramenta, disse que nÃ£o escreve SQL hÃ¡ mais de 6 meses â€” ele usa o Claude com CLI do BigQuery para buscar e analisar dados. VocÃª pode fazer o mesmo com o MCP do PostgreSQL: o Claude vai consultar o schema real das suas tabelas antes de gerar o cÃ³digo, garantindo que as queries sejam corretas para a sua estrutura. Para RAG especificamente, o Claude Code Ã© excelente para revisar pipelines, sugerir otimizaÃ§Ãµes de chunking, identificar problemas com documentos grandes. Outro caso de uso que uso pessoalmente: gerar documentaÃ§Ã£o automÃ¡tica de notebooks Jupyter no formato Obsidian. O Claude lÃª todos os notebooks, entende o que cada um faz e gera MDX formatado com links internos. Economiza horas de documentaÃ§Ã£o manual."

---

# Slide 22: Claude Code em Pesquisa e Escrita AcadÃªmica

## Texto no slide
**Automatizando tarefas de pesquisa com Claude Code:**

```bash
# AnÃ¡lise de literatura
"Leia todos os PDFs em /literatura e crie um mapa
temÃ¡tico em formato Markdown. Identifique gaps."

# GestÃ£o de referÃªncias + cÃ³digo
"Analise meu arquivo .bib do Zotero e gere cÃ³digo
Python para processar os metadados das citaÃ§Ãµes"

# RevisÃ£o de scripts de anÃ¡lise
"Revise @analysis/topic_model.py por boas prÃ¡ticas
de reproducibilidade e adicione seeds aleatÃ³rios"

# FormataÃ§Ã£o de artigos
"Adapte este artigo para as normas da MISQ:
- mÃ¡ximo 8000 palavras
- referÃªncias ABNT/APA
- estrutura IMRaD"
```

## ConteÃºdo do slide (alÃ©m do texto)
[Fluxograma de pesquisa acadÃªmica assistida: Coleta de literatura â†’ Claude analisa PDFs â†’ Mapa temÃ¡tico â†’ AnÃ¡lise quantitativa â†’ Claude revisa cÃ³digo â†’ Escrita â†’ Claude revisa formataÃ§Ã£o â†’ SubmissÃ£o. Cada etapa tem um Ã­cone de automaÃ§Ã£o.]

## Fala esperada
"Para quem trabalha com pesquisa acadÃªmica, o Claude Code abre possibilidades interessantes. VocÃª pode integrÃ¡-lo com seu workflow de Zotero, Obsidian e anÃ¡lise de texto. Por exemplo: vocÃª tem 200 PDFs de artigos para revisar para um mapeamento sistemÃ¡tico. Em vez de ler um por um para categorizar, vocÃª pode usar o Claude para fazer uma primeira anÃ¡lise temÃ¡tica, identificar gaps, e gerar um mapa inicial que vocÃª depois refina. Outra aplicaÃ§Ã£o: revisÃ£o de cÃ³digo de anÃ¡lise. Seus scripts de topic modeling, anÃ¡lise de regressÃ£o, processamento de dados â€” o Claude pode revisar por reproducibilidade, adicionar documentaÃ§Ã£o, sugerir otimizaÃ§Ãµes. E para a escrita em si: o Claude pode adaptar um mesmo artigo para diferentes normas de submissÃ£o, verificar contagem de palavras, formatar referÃªncias. Ressalva importante: sempre revise o output crÃ­tico. Para pesquisa, o Claude Code Ã© um acelerador, nÃ£o um substituto do julgamento acadÃªmico."

---

<SeÃ§Ã£o 9: SeguranÃ§a e Boas PrÃ¡ticas de Equipe>

# Slide 23: SeguranÃ§a e Controle de Qualidade

## Texto no slide
**Claude Code gera cÃ³digo â€” e cÃ³digo tem vulnerabilidades:**

- Estudos mostram que cÃ³digo gerado por LLMs tem vulnerabilidades em autenticaÃ§Ã£o, gestÃ£o de sessÃ£o e validaÃ§Ã£o de inputs
- **Nunca use BypassPermissions em cÃ³digo de produÃ§Ã£o**
- Sempre revise mudanÃ§as antes de merge
- Use Stop hooks para verificaÃ§Ãµes obrigatÃ³rias de seguranÃ§a
- Configure o subagente de seguranÃ§a:

```markdown
# .claude/agents/security-reviewer.md
VocÃª Ã© um engenheiro de seguranÃ§a sÃªnior. Revise o cÃ³digo por:
- InjeÃ§Ã£o SQL, XSS, command injection
- Falhas de autenticaÃ§Ã£o e autorizaÃ§Ã£o
- Secrets/credenciais no cÃ³digo
- Tratamento inseguro de dados
ForneÃ§a referÃªncias de linha e correÃ§Ãµes sugeridas.
```

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de pipeline seguro: Claude implementa â†’ Subagente de seguranÃ§a revisa â†’ RelatÃ³rio de vulnerabilidades â†’ Desenvolvedor aprova â†’ Merge. Ãcones de escudo em cada etapa crÃ­tica.]

## Fala esperada
"Um ponto que nÃ£o podemos ignorar: pesquisas recentes mostram que cÃ³digo gerado por LLMs â€” incluindo o Claude â€” frequentemente nÃ£o segue boas prÃ¡ticas de seguranÃ§a em autenticaÃ§Ã£o, gestÃ£o de sessÃ£o e validaÃ§Ã£o de inputs. Isso nÃ£o Ã© motivo para nÃ£o usar, mas Ã© motivo para ter processos de revisÃ£o robustos. Nunca use o modo BypassPermissions em cÃ³digo de produÃ§Ã£o ou que lida com dados sensÃ­veis. Configure um subagente de revisÃ£o de seguranÃ§a â€” o exemplo estÃ¡ na tela. Quando Claude implementar algo que toca autenticaÃ§Ã£o, autorizaÃ§Ã£o ou inputs externos, invoque explicitamente 'use um subagente para revisar este cÃ³digo por vulnerabilidades de seguranÃ§a'. Para pipelines automatizados, configure Stop hooks que bloqueiam o turno atÃ© que uma verificaÃ§Ã£o de seguranÃ§a externa passe. A regra Ã© simples: o Claude Ã© excelente para acelerar o desenvolvimento, mas a responsabilidade pela seguranÃ§a do cÃ³digo ainda Ã© sua e da sua equipe."

---

# Slide 24: Claude Code em Equipes

## Texto no slide
**PrÃ¡ticas para adoÃ§Ã£o em equipe:**

âœ… **Versionamento compartilhado:**
- CLAUDE.md na raiz do repo (git)
- Slash commands em `.claude/commands/` (git)
- Subagentes em `.claude/agents/` (git)
- Hooks em `.claude/settings.json` (git)

âœ… **CLAUDE.local.md no .gitignore** â€” preferÃªncias pessoais

âœ… **PadrÃµes de nomenclatura para sessÃµes:** `/rename oauth-migration`

âœ… **Documentar decisÃµes do Claude em CLAUDE.md** apÃ³s cada projeto

âœ… **Onboarding:** novos membros rodam `/init` e leem o CLAUDE.md

**Ganhos reportados:** equipes adotando prÃ¡ticas compartilhadas â†’ 40% mais velocidade de entrega

## ConteÃºdo do slide (alÃ©m do texto)
[Diagrama de colaboraÃ§Ã£o: repositÃ³rio central com CLAUDE.md, commands/, agents/ â†’ Desenvolvedor A clona â†’ tem acesso a todos os workflows â†’ Desenvolvedor B clona â†’ mesma experiÃªncia. Setas de contribuiÃ§Ã£o de volta ao repo central.]

## Fala esperada
"Quando Claude Code vai alÃ©m do uso individual para equipes, a chave Ã© tratÃ¡-lo como cÃ³digo: versione tudo que for compartilhÃ¡vel. O CLAUDE.md, os slash commands, os subagentes customizados, os hooks â€” tudo isso deve estar no Git. Assim quando um novo desenvolvedor clona o repositÃ³rio, ele automaticamente tem acesso a todos os workflows que a equipe construiu ao longo do tempo. O CLAUDE.local.md fica no .gitignore para preferÃªncias pessoais que nÃ£o fazem sentido para todo o time. Uma prÃ¡tica valiosa: depois de cada projeto ou sprint, peÃ§a ao Claude para documentar as decisÃµes tÃ©cnicas importantes no CLAUDE.md. Com o tempo, esse arquivo se torna um conhecimento institucional precioso. Equipes que adotam essas prÃ¡ticas compartilhadas reportam 40% mais velocidade de entrega â€” nÃ£o sÃ³ porque o Claude Ã© mais eficiente, mas porque o onboarding de novos membros fica muito mais rÃ¡pido."

---

<SeÃ§Ã£o 10: RecapitulaÃ§Ã£o e PrÃ³ximos Passos>

# Slide 25: Os 10 Mandamentos do Claude Code

## Texto no slide
1. **Gerencie o context window** acima de tudo
2. **Explore primeiro, planeje, depois code** (4 fases)
3. **Seja especÃ­fico nos prompts** â€” reference arquivos com @
4. **DÃª ao Claude forma de verificar seu prÃ³prio trabalho** (testes, build)
5. **Mantenha CLAUDE.md conciso e focado**
6. **Use /clear agressivamente** entre tarefas
7. **Use subagentes para exploraÃ§Ã£o e revisÃ£o**
8. **Crie slash commands** para workflows repetitivos
9. **Paralelize com worktrees** para mÃ¡xima produtividade
10. **Versione tudo** (.claude/ no Git)

## ConteÃºdo do slide (alÃ©m do texto)
[Lista visual dos 10 mandamentos com Ã­cone para cada um, em formato de tÃ¡bua de mandamentos estilizada com cores e hierarquia visual. Destaque em amarelo para os 3 mais importantes: contexto, planejamento e verificaÃ§Ã£o.]

## Fala esperada
"Vamos recapitular os 10 princÃ­pios fundamentais desta aula. Se vocÃª saÃ­sse hoje com apenas trÃªs, seria: primeiro, gerencie o context window â€” Ã© a restriÃ§Ã£o que explica tudo. Segundo, explore e planeje antes de codificar â€” separe pesquisa de implementaÃ§Ã£o. Terceiro, dÃª ao Claude uma forma de verificar seu prÃ³prio trabalho â€” sem isso, vocÃª se torna o loop de verificaÃ§Ã£o. Os outros sete complementam esses trÃªs. O CLAUDE.md conciso Ã© sua configuraÃ§Ã£o persistente. O /clear frequente mantÃ©m o contexto limpo. Os subagentes protegem seu contexto principal. Os slash commands eliminam repetiÃ§Ã£o. Os worktrees multiplicam sua produtividade. E versionar tudo garante que o conhecimento acumulado nÃ£o se perca."

---

# Slide 26: Roteiro de Aprendizado

## Texto no slide
**Semana 1: Fundamentos**
- [ ] Instalar e configurar Claude Code
- [ ] Criar CLAUDE.md para um projeto real
- [ ] Praticar os 4 modos de permissÃ£o
- [ ] Dominar /clear, /compact, /rewind

**Semana 2-3: Workflow**
- [ ] Aplicar o padrÃ£o Explorarâ†’Planejarâ†’Implementar
- [ ] Criar 3 slash commands para tarefas repetitivas
- [ ] Configurar 1 subagente customizado
- [ ] Praticar prompts com verificaÃ§Ã£o automÃ¡tica

**Semana 4+: Escala**
- [ ] Configurar git worktrees para sessÃµes paralelas
- [ ] Integrar Claude em CI com -p headless
- [ ] Explorar MCP servers relevantes
- [ ] Configurar hooks determinÃ­sticos

## ConteÃºdo do slide (alÃ©m do texto)
[Timeline de 4 semanas com marcos visuais e checklist de aprendizado. Cada semana tem uma cor diferente e os itens sÃ£o checÃ¡veis. Uma seta de progresso do "iniciante" ao "power user".]

## Fala esperada
"Para consolidar o aprendizado, sugiro este roteiro progressivo. Na primeira semana, foque nos fundamentos: instale, configure, e domine os comandos bÃ¡sicos de contexto. NÃ£o tente usar todos os recursos de uma vez. Na segunda e terceira semana, incorpore o workflow de 4 fases em projetos reais, crie seus primeiros slash commands e um subagente. Na quarta semana em diante, quando jÃ¡ estiver confortÃ¡vel, explore paralelismo com worktrees, automaÃ§Ã£o headless e integraÃ§Ãµes MCP. O erro mais comum de quem comeÃ§a Ã© querer usar tudo ao mesmo tempo. Comece com CLAUDE.md + /clear + prompts especÃ­ficos â€” sÃ³ isso jÃ¡ vai transformar sua produtividade. O resto vem naturalmente com a prÃ¡tica."

---

# Slide 27: Recursos e ReferÃªncias

## Texto no slide
**DocumentaÃ§Ã£o Oficial:**
- ðŸ“– `docs.anthropic.com/en/docs/claude-code` â€” documentaÃ§Ã£o completa
- ðŸ“– `anthropic.com/engineering/claude-code-best-practices` â€” guia oficial
- ðŸ“– `code.claude.com/docs/llms.txt` â€” Ã­ndice de toda a documentaÃ§Ã£o

**Comunidade:**
- Reddit: `r/ClaudeAI` â€” dicas e casos de uso reais
- GitHub: `ykdojo/claude-code-tips` â€” 45 dicas categorizado
- YouTube: "Claude Code: Best Practices for Agentic Coding" (Boris Cherney)

**Ferramentas complementares:**
- Ghostty (terminal recomendado pela equipe Anthropic)
- `gh` CLI (GitHub CLI â€” integraÃ§Ã£o nativa com Claude)
- BTT (BetterTouchTool) para atalhos de teclado avanÃ§ados

## ConteÃºdo do slide (alÃ©m do texto)
[Grid visual de recursos com Ã­cones de links: documentaÃ§Ã£o (livro), comunidade (pessoas), ferramentas (engrenagem). QR codes para os links principais.]

## Fala esperada
"Para continuar o aprendizado, os recursos mais valiosos sÃ£o a documentaÃ§Ã£o oficial da Anthropic â€” especialmente o guia de melhores prÃ¡ticas escrito pelo prÃ³prio Boris Cherney, criador da ferramenta. O subreddit r/ClaudeAI Ã© muito ativo, com power users compartilhando dicas e casos de uso reais. O repositÃ³rio do ykdojo no GitHub tem 45 dicas muito bem organizadas. Em termos de ferramentas complementares: instale o gh CLI do GitHub â€” o Claude sabe usar nativamente para criar PRs, ler issues, fazer code review. A equipe da Anthropic usa Ghostty como terminal, que tem melhor integraÃ§Ã£o com o Claude Code. E para Mac, o BetterTouchTool com gestos e atalhos customizados para o Claude Code pode economizar muito tempo no dia a dia."

---

# Slide 28: Atividade PrÃ¡tica â€” Hands-on

## Texto no slide
**ExercÃ­cio em duplas â€” 15 minutos:**

**CenÃ¡rio:** VocÃªs tÃªm um projeto Python de anÃ¡lise de dados

**Tarefas:**
1. Criar um `CLAUDE.md` para o projeto (5 min)
   - Inclua: estilo de cÃ³digo, comandos de teste, convenÃ§Ãµes
2. Explorar o codebase em Plan mode (3 min)
   - "Leia o projeto e explique a arquitetura"
3. Implementar uma melhoria com verificaÃ§Ã£o automÃ¡tica (7 min)
   - "Adicione logging para todas as funÃ§Ãµes em @src/pipeline.py. Rode os testes apÃ³s implementar."

**CritÃ©rios de sucesso:**
- CLAUDE.md conciso (< 20 linhas)
- Claude nÃ£o pediu clarificaÃ§Ãµes desnecessÃ¡rias
- Testes passaram sem intervenÃ§Ã£o manual

## ConteÃºdo do slide (alÃ©m do texto)
[Layout de atividade com 3 caixas (uma para cada tarefa), temporizador visual e critÃ©rios de avaliaÃ§Ã£o em checklist. Destaque para "boas prÃ¡ticas aplicadas" em cada tarefa.]

## Fala esperada
"Vamos colocar em prÃ¡tica o que aprendemos. Em duplas, vocÃªs tÃªm 15 minutos para este exercÃ­cio. A ideia Ã© aplicar os trÃªs conceitos mais importantes: CLAUDE.md eficiente, workflow de exploraÃ§Ã£o antes de implementaÃ§Ã£o, e prompt com verificaÃ§Ã£o automÃ¡tica. Comece pelo CLAUDE.md â€” tente mantÃª-lo abaixo de 20 linhas, incluindo apenas o que o Claude realmente precisa saber. Depois explore em Plan mode antes de qualquer mudanÃ§a. E no prompt de implementaÃ§Ã£o, inclua a instruÃ§Ã£o para rodar os testes e corrigir falhas. Eu vou circulando para acompanhar e responder dÃºvidas. Depois vamos compartilhar os CLAUDE.mds criados e discutir as escolhas."

---

# Slide 29: Perguntas Frequentes

## Texto no slide
**Q: Claude Code vs GitHub Copilot vs Cursor?**
â†’ Claude Code Ã© agÃªntico (executa autonomamente). Copilot e Cursor sÃ£o assistentes (sugerem). Claude Code Ã© melhor para tarefas complexas multi-arquivo; os outros para autocompletion rÃ¡pido.

**Q: Quanto custa?**
â†’ Plano Max ($100/mÃªs) recomendado para uso intenso. Pro ($20/mÃªs) tem limites menores. API para automaÃ§Ã£o tem pricing por token.

**Q: Claude Code vai substituir developers?**
â†’ NÃ£o. Multiplica produtividade. Boris: "Claude ainda comete erros; engenheiros experientes sabem quando e como corrigir."

**Q: Como lidar com codebases grandes (>500k linhas)?**
â†’ Use subagentes para exploraÃ§Ã£o, CLAUDE.md com mapa arquitetural, e work em mÃ³dulos isolados. Git worktrees ajudam a manter contexto focado.

## ConteÃºdo do slide (alÃ©m do texto)
[Layout de FAQ com 4 perguntas e respostas em cards visuais. Cada card tem uma cor diferente e Ã­cone representativo (comparaÃ§Ã£o, preÃ§o, robÃ´, cÃ³digo complexo).]

## Fala esperada
"Antes de encerrar, vou responder as perguntas mais comuns que surgem quando apresento o Claude Code. A comparaÃ§Ã£o com Copilot e Cursor Ã© frequente: a diferenÃ§a fundamental Ã© que o Claude Code Ã© agÃªntico â€” ele age autonomamente, nÃ£o apenas sugere. Para fluxos de trabalho complexos com mÃºltiplos arquivos, o Claude Code Ã© muito superior. Para autocompletion rÃ¡pido enquanto vocÃª digita, Copilot ainda tem vantagens de latÃªncia. Em relaÃ§Ã£o ao custo, para uso profissional intenso o plano Max a $100/mÃªs faz sentido â€” se vocÃª economizar 2 horas por semana, o ROI Ã© imediato. Para automaÃ§Ã£o em CI/CD, use a API diretamente. E sobre substituir developers: a resposta curta Ã© nÃ£o. O Claude ainda comete erros regularmente, e ter um engenheiro experiente que sabe quando e como corrigir esses erros Ã© ainda mais valioso do que antes."

---

# Slide 30: Encerramento

## Texto no slide
**Resumo executivo:**

> "Claude Code Ã© um multiplicador de produtividade. O valor vem de entender suas restriÃ§Ãµes â€” especialmente o context window â€” e construir workflows que trabalhem com elas, nÃ£o contra elas."

**3 aÃ§Ãµes para hoje:**
1. Instalar Claude Code e rodar `/init` em um projeto real
2. Criar seu primeiro CLAUDE.md (use a checklist do Slide 5)
3. Experimentar o workflow Explorarâ†’Planejarâ†’Implementar em uma tarefa real

**Contato e materiais:**
- Slides disponÃ­veis em: [link]
- CLAUDE.md template: [link]
- Slash commands de exemplo: [link]

## ConteÃºdo do slide (alÃ©m do texto)
[Slide de encerramento com visual clean: quote centralizado em destaque, 3 aÃ§Ãµes em card colorido, e QR code para materiais. Fundo com gradiente suave.]

## Fala esperada
"Para encerrar: Claude Code nÃ£o Ã© magia â€” Ã© uma ferramenta com restriÃ§Ãµes claras e bem documentadas. O valor vem de entender essas restriÃ§Ãµes, especialmente o context window, e construir workflows que trabalhem com elas. Os power users nÃ£o fazem nada diferente de bÃ¡sico â€” eles fazem o bÃ¡sico muito bem: CLAUDE.md focado, /clear frequente, prompts especÃ­ficos com verificaÃ§Ã£o, subagentes para exploraÃ§Ã£o. Minha recomendaÃ§Ã£o para hoje Ã  noite: instale o Claude Code, abra um projeto real que vocÃª conheÃ§a bem, rode /init, escreva um CLAUDE.md de 10 linhas e experimente o fluxo de Explorarâ†’Planejarâ†’Implementar em uma tarefa pequena. A curva de aprendizado Ã© rÃ¡pida quando vocÃª comeÃ§a com algo concreto. Os materiais desta aula estÃ£o disponÃ­veis nos links do slide. Obrigado a todos, e fiquem Ã  vontade para perguntas!"