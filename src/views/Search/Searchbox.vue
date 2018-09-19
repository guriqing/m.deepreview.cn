<template>
  <div class="seard">
    <div class="seek">
      <a href="#"><img src="../../assets/images/icon-search1.png"></a>
      <input type="text" name="" placeholder="请输入关键词">
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.seard {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  .seek {
    position: relative;
    margin-top: 40/@rate;
    img {
      position: absolute;
      width: 23/@rate;
      height: 23/@rate;
      left: 18/@rate;
      top: 56/@rate;
    }
    input {
      font-size: 30/@rate;
      font-family: 宋体;
      color: #d2d2d2;
      padding-left: 46/@rate;
      width: 100%;
      height: 60/@rate;
      box-sizing: border-box;
      background: #eee;
      border-radius: 20/@rate;;
      border: 1/@rate solid #eee;
      outline: none;
    }
  }
}
</style>
