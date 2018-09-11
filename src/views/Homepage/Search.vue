<template>
  <div class="classify">
    <div class="fense">
      <div class="sify">
        <p>分类</p>
        <img src="../../assets/images/Spinner.png">
      </div>
      <ul class="liebiao">
        <li><a href="#">书评</a></li>
        <li><a href="#">影评</a></li>
        <li><a href="#">艺评</a></li>
      </ul>
    </div>
    <div class="seek">
      <a href="#"><img src="../../assets/images/icon-search1.png"></a>
      <input type="text" name="" placeholder="请输入关键词">
    </div>
    <div class="xian"></div>
  </div>
</template>

<script>
export default {
  name: 'classify'
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.classify {
  margin: 0;
}
.fense {
  position: relative;
  display: inline-block;
}
.sify p {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #a0a0a0;
  display: inline-block;
  vertical-align: middle;
}
.sify img {
  width: 18/@rate;
  height: 11/@rate;
  margin: 12/@rate;
  display: inline-block;
  vertical-align: middle;
}
.liebiao {
  position: absolute;
  width: 94/@rate;
  text-align: center;
  background: red;
  border: 1/@rate solid #f5f5f5;
  list-style: none;
  margin-top: -20/@rate;
}
.liebiao li a {
  display: block;
  font-size: 20/@rate;
  font-family: 宋体;
  width: 96/@rate;
  height: 40/@rate;
  line-height: 40/@rate;
  color: #333333;
  text-decoration: none;
  background: blue;
}
.seek {
  display: inline-block;
}
img {
  width: 55/@rate;
  height: 68/@rate;
  vertical-align: middle;
}
input {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #d2d2d2;
  padding-left: 10/@rate;
  width: 520/@rate;
  height: 65/@rate;
  background: #eee;
  border-radius: 0/@rate 5/@rate 5/@rate 0/@rate;
  border: 1/@rate solid #eee;
  vertical-align: middle;
  outline: none;
}
.xian {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
  margin-top: 13/@rate;
}
</style>
