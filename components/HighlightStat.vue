<script setup lang="ts">
defineProps<{
  value: string
  caption: string
}>()
</script>

<template>
  <div class="rf-highlight">

    <div class="rf-value">
      {{ value }}
    </div>

    <div class="rf-caption">
      {{ caption }}
    </div>

  </div>
</template>

<style scoped>
.rf-highlight {
  text-align: center;
  margin-top: 0.5rem;
}

.rf-value {
  font-size: 7rem;
  font-weight: 700;
  color: var(--rf-primary);
  line-height: 1;
}

.rf-caption {
  margin-top: 0.5rem;
  opacity: 1 !important;
  font-size: 1.3rem;
  font-weight: 500;
  color: #e0e0e0 !important;
}
</style>