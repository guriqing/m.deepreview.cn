<template>
  <div>
    <div class="details">
      <div class="alis">
        <div class="deat">
          <img src="../../assets/images/return2.png">
          <p>返回</p>
        </div>
        <img class="img" src="../../assets/images/share2.png">
      </div>
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
.details {
  background-image: url("../../assets/images/xq.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 750/@rate;
  .alis {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0/@rate 30/@rate;
    padding-top: 30/@rate;
    .deat {
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
        color: #fff;
      }
    }
    .img {
      width: 27/@rate;
      height: 27/@rate;
    }
  }
}
</style>
