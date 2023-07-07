<script setup lang="ts">
import { useCounterStore } from '../stores'
useHead({
    title: 'about'
})
definePageMeta({
    layout: false
})
// const data = await useFetch('http://54.168.186.100:7745/tokenList.json')
// console.log('data:', data);
const store = useCounterStore()
console.log('store:', store);
</script>
<template>
    <div>
        <NuxtLayout name="for-about-page">
            {{ 'double count:' + store.double }}<br />
            {{ 'count:' + store.count }}<br />
            <button class="hover:text-sky-400 transition-all" @click="store.increment">increment</button>
            <div>
                <section>
                    <p class="global">This page will be displayed at the /about route.</p>
                </section>
                <img class=" cursor-pointer rounded-3xl w-60 hover:w-64" src="../assets/nft-03.jpg" alt="ctxc">
            </div>
        </NuxtLayout>
    </div>
</template>
  