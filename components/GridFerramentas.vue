<template>
  <div class="tools-wrap rf-grid">
    <div class="tools-grid">
      <div
        v-for="(tool, i) in tools"
        :key="i"
        class="tool-card glass"
        :class="{ visible: visibleCards[i], hovered: hoveredCard === i }"
        :style="{ transitionDelay: `${i * 0.08}s` }"
        @mouseenter="hoveredCard = i"
        @mouseleave="hoveredCard = -1"
      >
        <div class="tool-icon-wrap">
          <span class="tool-icon">{{ tool.icon }}</span>
          <div class="icon-glow" />
        </div>
        <div class="tool-body">
          <code class="tool-name">{{ tool.name }}</code>
          <p class="tool-desc">{{ tool.desc }}</p>
        </div>
        <div class="tool-tag" :class="tool.risk === 'safe' ? 'tag-safe' : 'tag-ask'">
          {{ tool.risk === 'safe' ? 'automático' : 'pede aprovação' }}
        </div>
      </div>
    </div>
    <p class="footnote rf-muted">
      Cada ação exibe o que será feito e espera sua confirmação (por padrão).
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tools = [
  { icon: '📖', name: 'Read',       desc: 'Lê arquivos e diretórios do projeto',       risk: 'safe' },
  { icon: '✏️',  name: 'Edit',       desc: 'Modifica trechos específicos de um arquivo', risk: 'ask'  },
  { icon: '📝', name: 'Write',      desc: 'Cria novos arquivos no filesystem',          risk: 'ask'  },
  { icon: '⚡', name: 'Bash',       desc: 'Executa comandos reais no seu terminal',     risk: 'ask'  },
  { icon: '🔍', name: 'WebSearch',  desc: 'Busca informações externas na web',          risk: 'safe' },
  { icon: '🌐', name: 'WebFetch',   desc: 'Lê o conteúdo completo de uma URL',         risk: 'safe' },
]

const visibleCards = ref(Array(tools.length).fill(false))
const hoveredCard  = ref(-1)

onMounted(() => {
  tools.forEach((_, i) => {
    setTimeout(() => { visibleCards.value[i] = true }, 80 + i * 90)
  })
})
</script>

<style scoped>
.tools-wrap {
  padding: 1.8rem 2rem;
  border-radius: var(--rf-radius);
  background:
    radial-gradient(circle at 20% 80%, var(--rf-glow) 0%, transparent 50%),
    var(--rf-bg);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
}

.tool-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.2rem 1.1rem;
  border-radius: 18px;
  opacity: 0;
  transform: translateY(16px) scale(0.97);
  transition:
    opacity 0.45s var(--rf-ease),
    transform 0.45s var(--rf-ease),
    border-color 0.25s var(--rf-ease),
    box-shadow 0.25s var(--rf-ease);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.tool-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.tool-card.hovered {
  border-color: rgba(99, 211, 161, 0.4) !important;
  box-shadow: 0 0 20px rgba(99, 211, 161, 0.15), var(--rf-shadow-soft);
  transform: translateY(-2px) scale(1.01);
}

.tool-icon-wrap {
  position: relative;
  width: fit-content;
}

.tool-icon {
  font-size: 1.6rem;
  line-height: 1;
  display: block;
}

.icon-glow {
  position: absolute;
  inset: -8px;
  background: radial-gradient(circle, rgba(99, 211, 161, 0.25) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s var(--rf-ease);
  pointer-events: none;
}

.tool-card.hovered .icon-glow {
  opacity: 1;
}

.tool-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.tool-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--rf-primary);
  letter-spacing: 0.02em;
}

.tool-desc {
  font-size: 0.78rem;
  color: var(--rf-text-muted);
  line-height: 1.5;
  margin: 0;
}

.tool-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  width: fit-content;
  margin-top: auto;
}

.tag-safe {
  background: rgba(99, 211, 161, 0.1);
  border: 1px solid rgba(99, 211, 161, 0.28);
  color: var(--rf-primary);
}

.tag-ask {
  background: rgba(226, 248, 27, 0.08);
  border: 1px solid rgba(226, 248, 27, 0.25);
  color: var(--rf-highlight);
}

.footnote {
  font-size: 0.78rem;
  font-style: italic;
  text-align: center;
  margin: 0;
  padding-top: 0.4rem;
  border-top: 1px solid var(--rf-border-primary);
}
</style>
