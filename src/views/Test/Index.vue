<template>
  <div>
    <Search/>
    <h1>首页</h1>
    <ul>
      <List v-for="n in 10" :key="n"/>
    </ul>
  </div>
</template>

<script>
import Search from './Search.vue'
import List from './List.vue'
export default {
  name: 'test',
  data () {
    return {
      test: 'testtestsstestset'
    }
  },
  components: {
    Search,
    List
  }
}
</script>

<style scoped lang="less">
@import '../../assets/styles/_variables.less';
.test {
  width: 100/@rate;
  font-size: 16/@rate;
  // .fontSize(16);
}
</style>
