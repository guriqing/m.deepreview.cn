<template>
  <div>
    <div class="bgs">
      <div class="shou">
        <img src="../assets/images/icon1.png">
        <p>首页</p>
      </div>
      <div class="shou">
        <img src="../assets/images/icon3.png">
        <p>分类</p>
      </div>
      <div class="shou">
        <img src="../assets/images/icon5.png">
        <p>专栏</p>
      </div>
      <div class="shou">
        <img src="../assets/images/icon7.png">
        <p>搜索</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
@import '../assets/styles/_variables.less';
.bgs {
  width: 100%;
  height: 100/@rate;
  background: #fff;
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
}
.shou {
  display: inline-block;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20/@rate;
}
.shou img {
  width: 40/@rate;
  height: 40/@rate;
}
.shou p {
  font-size: 18/@rate;
  font-family: 宋体;
  color: #a0a0a0;
}
</style>
