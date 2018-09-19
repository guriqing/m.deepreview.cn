<template>
  <div>
    <div class="search">
      <div class="return">
        <img src="../../assets/images/return.png">
        <span>返回</span>
      </div>
      <h1>搜索</h1>
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
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 30/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
    margin-top: 30/@rate;
  }
  .return {
    display: flex;
    align-items: center;
    img {
      width: 20/@rate;
      height: 35/@rate;
      margin-right: 16/@rate;
    }
    span {
      font-size: 30/@rate;
      font-family: 宋体;
      color: #333;
    }
  }
  h1 {
    font-size: 36/@rate;
    font-family: 宋体;
    color: #333;
    margin-top: 60/@rate;
  }
}
</style>
