<template>
  <div class="loop-container rf-grid">
    <div class="loop-track">
      <div
        v-for="(step, i) in steps"
        :key="i"
        class="step-wrapper"
        :style="{ animationDelay: `${i * 0.18}s` }"
      >
        <div class="step glass" :class="{ active: activeStep === i }">
          <span class="step-icon">{{ step.icon }}</span>
          <span class="step-label">{{ step.label }}</span>
        </div>
        <div v-if="i < steps.length - 1" class="arrow-wrap">
          <svg class="arrow" :class="{ fired: arrowFired[i] }" viewBox="0 0 40 16" fill="none">
            <path d="M0 8 H32" stroke="currentColor" stroke-width="1.5"/>
            <path d="M26 2 L38 8 L26 14" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="loop-back glass">
      <span class="loop-label rf-eyebrow">loop infinito</span>
      <svg class="loop-arrow" viewBox="0 0 520 32" fill="none" preserveAspectRatio="none">
        <path
          d="M8 8 L512 8 L512 24 L8 24 L8 8"
          stroke="var(--rf-primary)"
          stroke-width="1.5"
          fill="none"
          stroke-dasharray="6 4"
          class="dash-path"
        />
        <path d="M20 24 L8 16 L20 8" stroke="var(--rf-primary)" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
      </svg>
    </div>

    <div class="verdict rf-reveal-3">
      <span class="rf-eyebrow" style="color: var(--rf-text-muted)">resultado</span>
      <p class="verdict-text">Você virou o sistema nervoso periférico do modelo.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const steps = [
  { icon: '💬', label: 'Pede pro modelo' },
  { icon: '📋', label: 'Copia o código' },
  { icon: '⌨️', label: 'Cola no terminal' },
  { icon: '💥', label: 'Lê o erro' },
  { icon: '🔁', label: 'Reporta ao modelo' },
]

const activeStep = ref(-1)
const arrowFired = ref(Array(steps.length - 1).fill(false))
let interval = null
let step = 0

function advance() {
  arrowFired.value = Array(steps.length - 1).fill(false)
  activeStep.value = step % steps.length
  if (step % steps.length < steps.length - 1) {
    setTimeout(() => { arrowFired.value[step % steps.length] = true }, 200)
  }
  step++
}

onMounted(() => {
  advance()
  interval = setInterval(advance, 900)
})
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.loop-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 2.4rem 2rem;
  border-radius: var(--rf-radius);
  background:
    radial-gradient(circle at 60% 0%, var(--rf-glow) 0%, transparent 55%),
    var(--rf-bg);
  min-height: 260px;
  justify-content: center;
}

.loop-track {
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
}

.step-wrapper {
  display: flex;
  align-items: center;
  animation: fadeUp 0.6s var(--rf-ease) both;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 0.9rem 1.1rem;
  border-radius: 16px;
  min-width: 90px;
  transition: border-color 0.25s var(--rf-ease), box-shadow 0.25s var(--rf-ease), transform 0.25s var(--rf-ease);
  cursor: default;
}

.step.active {
  border-color: var(--rf-primary) !important;
  box-shadow: 0 0 18px rgba(99, 211, 161, 0.35), var(--rf-shadow-soft);
  transform: translateY(-3px);
}

.step-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.step-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--rf-text-secondary);
  text-align: center;
  white-space: nowrap;
}

.arrow-wrap {
  width: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  width: 36px;
  height: 14px;
  color: var(--rf-border-secondary);
  transition: color 0.2s var(--rf-ease);
}

.arrow.fired {
  color: var(--rf-primary);
  filter: drop-shadow(0 0 4px rgba(99, 211, 161, 0.6));
}

.loop-back {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.2rem;
  border-radius: 14px;
}

.loop-label {
  font-size: 0.62rem;
  letter-spacing: 0.3em;
}

.loop-arrow {
  width: 100%;
  height: 28px;
}

.dash-path {
  stroke-dashoffset: 0;
  animation: dash 3s linear infinite;
}

@keyframes dash {
  to { stroke-dashoffset: -40; }
}

.verdict {
  text-align: center;
  padding: 0.8rem 1.6rem;
  border-top: 1px solid var(--rf-border-primary);
  width: 100%;
  max-width: 600px;
}

.verdict-text {
  font-family: "TeX Gyre Pagella", Georgia, serif;
  font-style: italic;
  font-size: 0.95rem;
  color: var(--rf-text-muted);
  margin: 0.3rem 0 0;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
</style>
