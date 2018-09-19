<template>
  <div>
    <div class="result">
      <div class="return">
        <img src="../../assets/images/return.png">
        <p>返回</p>
      </div>
      <h1 class="searc">搜索结果</h1>
    </div>
    <List/>
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
.result {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 32/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
    margin-top: 26/@rate;
  }
  .return {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 20/@rate;
      height: 35/@rate;
      margin-right: 18/@rate;
    }
    p {
      font-size: 30/@rate;
      font-family: 宋体;
      color: #333;
    }
  }
  .searc {
    font-size: 36/@rate;
    font-family: 宋体;
    color: #333;
    margin-top: 56/@rate;
  }
}
</style>
