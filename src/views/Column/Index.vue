<template>
  <div>
    <div class="column">
      <h1>专栏</h1>
      <div class="xian"></div>
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
  width: 690/@rate;
  margin: 0 auto;
  text-align: left;
}
.column h1 {
  font-size: 36/@rate;
  font-family: 宋体;
  color: #333;
}
.xian {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
}
</style>
