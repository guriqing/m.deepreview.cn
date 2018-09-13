<template>
  <div class="dis">
    <div class="daxiang" v-for="n in 10" :key="n">
      <img class="homeimg" src="../../assets/images/menu7.png">
      <p class="shidi">《1984》：所谓自由，就是可以说2+2等于四的自由</p>
      <p class="yuancuan">&nbsp;# 原创&nbsp;&nbsp;&nbsp;# 自由</p>
      <p class="yuancuan">作者：穿山饼，能躺着就绝不坐着的95年老阿姨</p>
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
.daxiang {
  width: 690/@rate;
  height: 100%;
  margin: 0 auto;
  border-radius: 10/@rate;
  text-align: left;
  box-shadow: 0/@rate 0/@rate 60/@rate #e2e2e2;
  margin-top: 30/@rate;
}
.shidi {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #333333;
}
.yuancuan {
  font-size: 20/@rate;
  font-family: 宋体;
  color: #a0a0a0;
}
.homeimg {
  width: 690/@rate;
  height: 400/@rate;
}
</style>
