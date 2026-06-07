<template>
  <div class="loop-wrap rf-grid">
    <svg class="loop-svg" viewBox="0 0 500 500" fill="none">
      <!-- Orbit ring -->
      <circle
        cx="250" cy="250" r="170"
        stroke="var(--rf-border-primary)"
        stroke-width="1"
        stroke-dasharray="4 6"
        class="orbit-ring"
      />

      <!-- Arc segments between nodes, drawn as path arcs -->
      <g class="arcs">
        <path
          v-for="(arc, i) in arcs"
          :key="'arc'+i"
          :d="arc.d"
          stroke="var(--rf-primary)"
          stroke-width="1.8"
          fill="none"
          stroke-linecap="round"
          class="arc-path"
          :class="{ lit: activeArc === i }"
        />
      </g>

      <!-- Nodes -->
      <g v-for="(node, i) in nodes" :key="i">
        <!-- Glow ring when active -->
        <circle
          :cx="node.x" :cy="node.y" :r="38"
          fill="none"
          stroke="var(--rf-primary)"
          stroke-width="1.2"
          class="glow-ring"
          :class="{ active: activeNode === i }"
        />
        <!-- Node circle -->
        <circle
          :cx="node.x" :cy="node.y" :r="28"
          class="node-circle"
          :class="{ active: activeNode === i }"
        />
        <!-- Icon -->
        <text
          :x="node.x" :y="node.y + 7"
          text-anchor="middle"
          class="node-icon"
          :class="{ active: activeNode === i }"
        >{{ node.icon }}</text>
        <!-- Label below/above node -->
        <text
          :x="node.lx" :y="node.ly"
          text-anchor="middle"
          class="node-label"
          :class="{ active: activeNode === i }"
        >{{ node.label }}</text>
      </g>

      <!-- Center label -->
      <text x="250" y="244" text-anchor="middle" class="center-title">Loop</text>
      <text x="250" y="284" text-anchor="middle" class="center-sub">agêntico</text>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 5 nodes evenly spaced on a circle, starting from top
const R = 170
const cx = 250
const cy = 250

function nodePos(i, total) {
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2
  return {
    x: cx + R * Math.cos(angle),
    y: cy + R * Math.sin(angle),
  }
}

const nodeDefs = [
  { label: 'Tarefa',     icon: '📥' },
  { label: 'Planeja',    icon: '🧠' },
  { label: 'Age',        icon: '⚡' },
  { label: 'Observa',   icon: '👁' },
  { label: 'Ajusta',    icon: '🔄' },
]

const total = nodeDefs.length

const nodes = nodeDefs.map((n, i) => {
  const { x, y } = nodePos(i, total)
  // label offset: push outward from center
  const angle = (i / total) * 2 * Math.PI - Math.PI / 2
  const labelR = R + 42
  return {
    ...n,
    x, y,
    lx: cx + labelR * Math.cos(angle),
    ly: cy + labelR * Math.sin(angle) + 5,
  }
})

// Arc paths: arc from node i to node (i+1)%total
function arcPath(i) {
  const from = nodePos(i, total)
  const to   = nodePos((i + 1) % total, total)
  // large-arc=0, sweep=1 (clockwise)
  return `M ${from.x} ${from.y} A ${R} ${R} 0 0 1 ${to.x} ${to.y}`
}

const arcs = nodeDefs.map((_, i) => ({ d: arcPath(i) }))

const activeNode = ref(0)
const activeArc  = ref(-1)
let interval = null
let step = 0

function tick() {
  activeNode.value = step % total
  activeArc.value  = step % total
  step++
}

onMounted(() => {
  tick()
  interval = setInterval(tick, 900)
})
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.loop-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border-radius: var(--rf-radius);
  background: transparent;
}

.loop-svg {
  width: 100%;
  max-width: 460px;
  height: auto;
}

.orbit-ring {
  animation: spin 30s linear infinite;
  transform-origin: 250px 250px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.arc-path {
  opacity: 0.18;
  transition: opacity 0.4s var(--rf-ease), filter 0.4s var(--rf-ease);
}

.arc-path.lit {
  opacity: 1;
  filter: drop-shadow(0 0 5px rgba(99, 211, 161, 0.7));
}

.glow-ring {
  opacity: 0;
  transition: opacity 0.4s var(--rf-ease), r 0.4s var(--rf-ease);
}

.glow-ring.active {
  opacity: 0.4;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.25; r: 34; }
  50%       { opacity: 0.55; r: 40; }
}

.node-circle {
  fill: var(--rf-surface-primary);
  stroke: var(--rf-border-secondary);
  stroke-width: 1.5;
  transition: fill 0.35s var(--rf-ease), stroke 0.35s var(--rf-ease);
}

.node-circle.active {
  fill: rgba(99, 211, 161, 0.18);
  stroke: var(--rf-primary);
  filter: drop-shadow(0 0 8px rgba(99, 211, 161, 0.5));
}

.node-icon {
  font-size: 18px;
  transition: font-size 0.3s var(--rf-ease);
}

.node-icon.active {
  font-size: 20px;
}

.node-label {
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  fill: var(--rf-text-muted);
  transition: fill 0.35s var(--rf-ease);
}

.node-label.active {
  fill: var(--rf-primary);
}

.center-title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 42px;
  font-weight: 700;
  fill: var(--rf-text-primary);
  letter-spacing: -0.03em;
}

.center-sub {
  font-family: "TeX Gyre Pagella", Georgia, serif;
  font-style: italic;
  font-size: 32px;
  fill: var(--rf-text-muted);
}
</style>
