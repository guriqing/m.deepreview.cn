<template>
  <div>
    <div class="search">
      <div class="return">
        <img src="../../assets/images/return.png">
        <span>返回</span>
      </div>
      <h1>搜索</h1>
      <div class="xian"></div>
    </div>
    <Searchbox/>
    <List/>
  </div>
</template>

<script>
import Searchbox from './Searchbox.vue'
import List from './List.vue'
export default {
  components: {
    Searchbox,
    List
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.search {
  width: 690/@rate;
  margin: 0 auto;
  text-align: left;
}
.return img {
  width: 20/@rate;
  height: 35/@rate;
  margin-right: 16/@rate;
  vertical-align: middle;
}
.return span {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #333;
  vertical-align: middle;
}
.search h1 {
  font-size: 36/@rate;
  font-family: 宋体;
  color: #333;
  margin-top: 50/@rate;
}
.xian {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
}
</style>
