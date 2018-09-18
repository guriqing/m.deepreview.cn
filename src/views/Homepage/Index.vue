<template>
  <div>
    <Search/>
    <div class="souye">
      <img src="../../assets/images/logo.png">
      <h1>首页</h1>
    </div>
    <List/>
    <Tabbar/>
  </div>
</template>

<script>
import Search from './Search.vue'
import List from './List.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'test',
  components: {
    Search,
    List,
    Tabbar
  }
}
</script>

<style scoped lang="less">
@import '../../assets/styles/_variables.less';
.souye {
  box-sizing: border-box;
  width: 100%;
  margin-top: 40/@rate;
  padding: 0/@rate 30/@rate;
  display: flex;
  align-items: center;
  img {
    width: 48/@rate;
    height: 48/@rate;
  }
  h1 {
    font-size: 36/@rate;
    font-family: 宋体;
    font-weight: bold;
    margin-left: 15/@rate;
  }
}
</style>
