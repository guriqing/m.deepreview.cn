<template>
  <div>
    <Search/>
    <div class="souye">
      <img src="../../assets/images/logo.png">
      <h1>首页</h1>
    </div>
    <!-- <ul>
      <List v-for="n in 2" :key="n"/>
    </ul> -->
    <List/>
  </div>
</template>

<script>
import Search from './Search.vue'
import List from './List.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
  name: 'test',
  data () {
    return {
      test: 'tesddt'
    }
  },
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
  text-align: left;
  margin-top: 32/@rate;
}
.souye img {
  display: inline-block;
  width: 48/@rate;
  height: 48/@rate;
  vertical-align: middle;
}
.souye h1 {
  display: inline-block;
  font-size: 36/@rate;
  font-family: 宋体;
  font-weight: bold;
  margin-left: 15/@rate;
  vertical-align: middle;
}
</style>
