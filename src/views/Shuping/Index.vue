<template>
  <div>
    <div class="classify">
      <h1>分类</h1>
      <div></div>
    </div>
    <Navigation/>
    <List/>
  </div>
</template>

<script>
import List from './List.vue'
import Navigation from './Navigation.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
  components: {
    Navigation,
    List,
    Tabbar
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.classify {
  text-align: left;
}
.classify h1 {
  font-size: 36/@rate;
  font-family: 宋体;
  color: #333;
}
.classify div {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
}
</style>
