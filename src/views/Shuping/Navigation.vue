<template>
  <div>
    <div class="bgs">
      <div class="shou">
        <img src="../../assets/images/menu1.png">
        <p>书评</p>
      </div>
      <div class="shou">
        <img src="../../assets/images/menu3.png">
        <p>影评</p>
      </div>
      <div class="shou">
        <img src="../../assets/images/menu5.png">
        <p>艺评</p>
      </div>
    </div>
    <div class="xian"></div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.bgs {
  width: 100%;
  display: flex;
  margin-top: 20/@rate;
}
.shou {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shou img {
  width: 60/@rate;
  height: 50/@rate;
}
.shou p {
  font-size: 18/@rate;
  font-family: 宋体;
  color: #a0a0a0;
}
.xian {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
}
</style>
