<template>
  <div class="flex justify-center flex-col items-center gap-3">
    <div class="max-w-xl max-h-96 overflow-auto bg-slate-50 p-3 rounded-xl border shadow-2xl">
      <pre>
        <code>
          {{ products || products }}
        </code>
      </pre>
    </div>
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

  const { $vFetch } = useNuxtApp();

  const products = await $vFetch('products', {
    vOptions: {
      cache: 'memory',
    },
  });
  console.log(products);
</script>
