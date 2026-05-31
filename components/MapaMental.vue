<template>
  <div class="map-wrap rf-grid">
    <svg class="map-svg" viewBox="0 0 600 420" fill="none">
      <!-- Connecting lines -->
      <g class="lines">
        <line
          v-for="(node, i) in satellites"
          :key="'line'+i"
          :x1="center.x" :y1="center.y"
          :x2="node.x"   :y2="node.y"
          stroke="var(--rf-border-secondary)"
          stroke-width="1"
          class="connector"
          :class="{ lit: activeNode === i }"
        />
      </g>

      <!-- Satellite nodes -->
      <g v-for="(node, i) in satellites" :key="'node'+i">
        <!-- Glow -->
        <circle
          :cx="node.x" :cy="node.y" :r="40"
          fill="none"
          stroke="var(--rf-primary)"
          stroke-width="1"
          class="sat-glow"
          :class="{ active: activeNode === i }"
        />
        <!-- Circle -->
        <circle
          :cx="node.x" :cy="node.y" :r="30"
          class="sat-circle"
          :class="{ active: activeNode === i }"
        />
        <!-- Icon -->
        <text
          :x="node.x" :y="node.y - 5"
          text-anchor="middle"
          class="sat-icon"
        >{{ node.icon }}</text>
        <!-- Label inside -->
        <text
          :x="node.x" :y="node.y + 14"
          text-anchor="middle"
          class="sat-label-inner"
          :class="{ active: activeNode === i }"
        >{{ node.label }}</text>
        <!-- Sub-label outside -->
        <text
          :x="node.lx" :y="node.ly"
          text-anchor="middle"
          class="sat-sublabel"
          :class="{ active: activeNode === i }"
        >{{ node.sub }}</text>
      </g>

      <!-- Center node -->
      <circle
        cx="300" cy="210" :r="52"
        class="center-glow-outer"
      />
      <circle
        cx="300" cy="210" :r="42"
        class="center-circle"
      />
      <text x="300" y="205" text-anchor="middle" class="center-main">Claude</text>
      <text x="300" y="222" text-anchor="middle" class="center-sub-text">Code</text>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const center = { x: 300, y: 210 }
const R = 158

const defs = [
  { label: 'Contexto',  icon: '🧠', sub: 'memória de trabalho',   angle: -90  },
  { label: 'CLAUDE.md', icon: '📄', sub: 'briefing do projeto',    angle: -26  },
  { label: 'Skills',    icon: '🧩', sub: 'expertise modular',      angle: 38   },
  { label: 'Loop',      icon: '🔄', sub: 'agir → observar',        angle: 102  },
  { label: 'MCP',       icon: '🌐', sub: 'integrações externas',   angle: 166  },
  { label: 'Agentes',   icon: '🤖', sub: 'subagentes paralelos',   angle: -154 },
]

function toRad(deg) { return deg * Math.PI / 180 }

const satellites = defs.map(d => {
  const rad = toRad(d.angle)
  const x = center.x + R * Math.cos(rad)
  const y = center.y + R * Math.sin(rad)
  const subR = R + 46
  return {
    ...d,
    x, y,
    lx: center.x + subR * Math.cos(rad),
    ly: center.y + subR * Math.sin(rad) + 4,
  }
})

const activeNode = ref(0)
let interval = null
let step = 0

onMounted(() => {
  interval = setInterval(() => {
    activeNode.value = step % satellites.length
    step++
  }, 1000)
})
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.map-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem;
  border-radius: var(--rf-radius);
  background:
    radial-gradient(circle at 50% 50%, var(--rf-glow) 0%, transparent 65%),
    var(--rf-bg);
}

.map-svg {
  width: 100%;
  max-width: 580px;
  height: auto;
}

/* Center */
.center-glow-outer {
  fill: rgba(99, 211, 161, 0.08);
  stroke: rgba(99, 211, 161, 0.15);
  stroke-width: 1;
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { r: 52; opacity: 0.6; }
  50%       { r: 58; opacity: 1;   }
}

.center-circle {
  fill: rgba(99, 211, 161, 0.18);
  stroke: var(--rf-primary);
  stroke-width: 1.5;
}

.center-main {
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 700;
  fill: var(--rf-text-primary);
  letter-spacing: -0.02em;
}

.center-sub-text {
  font-family: "TeX Gyre Pagella", Georgia, serif;
  font-style: italic;
  font-size: 12px;
  fill: var(--rf-primary);
}

/* Connectors */
.connector {
  opacity: 0.3;
  transition: opacity 0.4s var(--rf-ease), stroke 0.4s var(--rf-ease);
  stroke-dasharray: 4 5;
  animation: dashMove 4s linear infinite;
}

.connector.lit {
  opacity: 1;
  stroke: var(--rf-primary) !important;
  filter: drop-shadow(0 0 3px rgba(99, 211, 161, 0.6));
}

@keyframes dashMove {
  to { stroke-dashoffset: -40; }
}

/* Satellite */
.sat-glow {
  opacity: 0;
  transition: opacity 0.4s var(--rf-ease);
}

.sat-glow.active {
  opacity: 0.35;
  animation: satPulse 1.2s ease-in-out infinite;
}

@keyframes satPulse {
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 0.5; }
}

.sat-circle {
  fill: var(--rf-surface-primary);
  stroke: var(--rf-border-secondary);
  stroke-width: 1.5;
  transition: fill 0.35s var(--rf-ease), stroke 0.35s var(--rf-ease);
}

.sat-circle.active {
  fill: rgba(99, 211, 161, 0.15);
  stroke: var(--rf-primary);
  filter: drop-shadow(0 0 6px rgba(99, 211, 161, 0.45));
}

.sat-icon {
  font-size: 13px;
}

.sat-label-inner {
  font-family: "Space Grotesk", sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  fill: var(--rf-text-muted);
  transition: fill 0.35s var(--rf-ease);
}

.sat-label-inner.active {
  fill: var(--rf-primary);
}

.sat-sublabel {
  font-family: "Space Grotesk", sans-serif;
  font-size: 9px;
  fill: var(--rf-text-muted);
  opacity: 0.7;
  transition: opacity 0.35s var(--rf-ease), fill 0.35s var(--rf-ease);
}

.sat-sublabel.active {
  opacity: 1;
  fill: var(--rf-text-secondary);
}
</style>
