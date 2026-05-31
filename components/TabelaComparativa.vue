<template>
  <div class="compare-wrap rf-grid">
    <table class="rf-table compare-table">
      <thead>
        <tr>
          <th class="col-feature">Capacidade</th>
          <th class="col-chat">
            <span class="col-badge badge-chat">LLM via chat</span>
          </th>
          <th class="col-code">
            <span class="col-badge badge-code">Claude Code</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in rows"
          :key="i"
          class="data-row"
          :class="{ visible: visibleRows[i] }"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <td class="feature-cell">{{ row.feature }}</td>
          <td class="status-cell">
            <span class="chip" :class="chipClass(row.chat)">
              <span class="chip-icon">{{ chipIcon(row.chat) }}</span>
              <span class="chip-text">{{ chipLabel(row.chat) }}</span>
            </span>
          </td>
          <td class="status-cell">
            <span class="chip" :class="chipClass(row.code)">
              <span class="chip-icon">{{ chipIcon(row.code) }}</span>
              <span class="chip-text">{{ chipLabel(row.code) }}</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const rows = [
  { feature: 'Acesso ao seu projeto',      chat: 'no',      code: 'yes' },
  { feature: 'Executa comandos reais',     chat: 'no',      code: 'yes' },
  { feature: 'Edita arquivos',             chat: 'no',      code: 'yes' },
  { feature: 'Raciocina sobre resultados', chat: 'partial', code: 'yes' },
  { feature: 'Memória entre sessões',      chat: 'no',      code: 'config' },
  { feature: 'Integrações externas (MCP)', chat: 'no',      code: 'yes' },
]

const visibleRows = ref(Array(rows.length).fill(false))

const chipClass = v => ({
  'chip-yes':     v === 'yes',
  'chip-no':      v === 'no',
  'chip-partial': v === 'partial',
  'chip-config':  v === 'config',
})

const chipIcon = v => ({
  yes: '✓', no: '✗', partial: '◐', config: '⚙'
})[v]

const chipLabel = v => ({
  yes: 'Sim', no: 'Não', partial: 'Parcial', config: 'Configurável'
})[v]

onMounted(() => {
  rows.forEach((_, i) => {
    setTimeout(() => { visibleRows.value[i] = true }, 120 + i * 110)
  })
})
</script>

<style scoped>
.compare-wrap {
  padding: 2rem;
  border-radius: var(--rf-radius);
  background:
    radial-gradient(circle at 80% 10%, var(--rf-glow) 0%, transparent 50%),
    var(--rf-bg);
}

.compare-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: var(--rf-radius);
  overflow: hidden;
  border: 1px solid var(--rf-border-primary);
  background: var(--rf-surface-primary);
  backdrop-filter: blur(20px);
}

.compare-table thead {
  background: rgba(23, 175, 109, 0.32);
}

.compare-table th {
  padding: 14px 22px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rf-text-primary);
  border-bottom: 1px solid var(--rf-border-primary);
  text-align: left;
}

.col-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.badge-chat {
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--rf-border-secondary);
  color: var(--rf-text-muted);
}

.badge-code {
  background: rgba(99, 211, 161, 0.15);
  border: 1px solid rgba(99, 211, 161, 0.4);
  color: var(--rf-primary);
}

.data-row {
  opacity: 0;
  transform: translateX(-12px);
  transition:
    opacity 0.45s var(--rf-ease),
    transform 0.45s var(--rf-ease);
}

.data-row.visible {
  opacity: 1;
  transform: translateX(0);
}

.data-row:hover {
  background: rgba(255,255,255,0.025);
}

.data-row td {
  padding: 14px 22px;
  border-bottom: 1px solid var(--rf-border-primary);
}

.data-row:last-child td {
  border-bottom: none;
}

.feature-cell {
  font-size: 0.9rem;
  color: var(--rf-text-secondary);
  font-weight: 500;
}

.status-cell {
  text-align: left;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: box-shadow 0.2s var(--rf-ease);
}

.chip-icon {
  font-style: normal;
  font-size: 0.8rem;
}

.chip-yes {
  background: rgba(99, 211, 161, 0.12);
  border: 1px solid rgba(99, 211, 161, 0.35);
  color: var(--rf-primary);
}

.chip-no {
  background: rgba(255, 80, 80, 0.08);
  border: 1px solid rgba(255, 80, 80, 0.25);
  color: rgba(255, 110, 110, 0.8);
}

.chip-partial {
  background: rgba(226, 248, 27, 0.08);
  border: 1px solid rgba(226, 248, 27, 0.25);
  color: var(--rf-highlight);
}

.chip-config {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--rf-border-secondary);
  color: var(--rf-text-muted);
}
</style>
