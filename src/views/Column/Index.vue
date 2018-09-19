<template>
  <div>
    <div class="column">
      <h1>专栏</h1>
    </div>
    <List/>
    <Tabbar/>
  </div>
</template>

<script>
import List from './List.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
  components: {
    List,
    Tabbar
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.column {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 120/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
    margin-top: 20/@rate;
  }
  h1 {
    font-size: 36/@rate;
    font-family: 宋体;
    color: #333;
  }
}
</style>
