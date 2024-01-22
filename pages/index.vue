<template>
  <div class="flex justify-center flex-col items-center gap-3">
    <div>
      {{ version }}
    </div>
    <UButton to="/about" color="blue"> go to about </UButton>
    <div>
      <UButton color="red" @click="reload">Reload</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { version } = useApp();
  const local = useState('index.vue.local', () => 'yes local..🦉');

  const reload = () => {
    reloadNuxtApp();
  };
</script>
