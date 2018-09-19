<template>
  <div id="app">
    <router-view />
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="less">
body,
ul,
li,
p,
a,
img {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
