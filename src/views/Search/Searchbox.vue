<template>
  <div>
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
.seek {
  display: inline-block;
  position: relative;
  margin-top: 38/@rate;
}
img {
  position: absolute;
  width: 55/@rate;
  height: 60/@rate;
  vertical-align: middle;
  left: 4/@rate;
  top: 14/@rate;
  border-radius: 10/@rate;
}
input {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #d2d2d2;
  padding-left: 68/@rate;
  width: 622/@rate;
  height: 60/@rate;
  background: #eee;
  border-radius: 20/@rate;;
  border: 1/@rate solid #eee;
  vertical-align: middle;
  outline: none;
}
</style>
