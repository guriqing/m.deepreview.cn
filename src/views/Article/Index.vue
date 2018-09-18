<template>
  <div>
    <div class="details">
      <div class="columns">
        <img src="../../assets/images/return.png">
        <h1>返回</h1>
      </div>
      <img class="alisd" src="../../assets/images/share.png">
    </div>
    <List/>
  </div>
</template>

<script>
import List from './List.vue'
export default {
  components: {
    List
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.details {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 30/@rate;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 20/@rate;
      height: 35/@rate;
      margin-right: 18/@rate;
    }
    h1 {
      font-size: 30/@rate;
      font-family: 宋体;
      color: #333;
    }
  }
  .alisd {
    width: 27/@rate;
    height: 27/@rate;
  }
}
</style>
