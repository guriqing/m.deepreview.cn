<template>
  <div>
    <div class="classify">
      <h1>分类</h1>
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
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 130/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
    margin-top: 30/@rate;
  }
  h1 {
    font-size: 36/@rate;
    font-family: 宋体;
    color: #333;
  }
}
</style>
