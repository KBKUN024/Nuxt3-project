<template>
  <div>
    <nuxt-link to="/about" class=" text-blue-600 mr-4">about</nuxt-link>
    <nuxt-link to="/" class=" text-blue-600 mr-4">go back</nuxt-link>
    <nuxt-link to="/posts/1" class=" text-blue-600 mr-4">post1</nuxt-link>
    <nuxt-link to="/posts/2" class=" text-blue-600 mr-4">post2</nuxt-link>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url('./assets/global.less');
</style>
