<script setup lang="ts">
const route = useRoute();

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
const foo = useFoo();
console.log('foo:', foo);
let useX = useState('useX', () => 1)

</script>

<template>
  <div>
    {{ 'useX: ' + useX }}
    <button @click="useX++">
      +
    </button>
    <button @click="useX--">
      -
    </button>

    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <AppAlert> This is an auto-imported components. </AppAlert>
  </div>
</template>
