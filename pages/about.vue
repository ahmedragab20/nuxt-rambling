<template>
  <div class="flex justify-center flex-col items-center">
    <div>
      <UButton to="/">GO HOME!</UButton>
    </div>
    <div class="text-center">
      {{ version }}
    </div>
    <div>
      <UButton @click="version = '2.2.2'" color="indigo"> change version </UButton>
    </div>
    <div>
      {{ local }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const { version } = useApp();
  const local = useState('index.vue.local');
</script>
