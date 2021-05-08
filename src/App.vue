<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup(props, context) {
    
  }
})
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>