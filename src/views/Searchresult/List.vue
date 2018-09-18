<template>
  <div class="time">
    <div class="men" v-for="n in 10" :key="n">
      <img class="sets" src="../../assets/images/menu7.png">
      <p class="zhiyou">《1984》：所谓自由，就是可以说2+2等于四的自由</p>
      <p class="yuancuan">&nbsp;# 原创&nbsp;&nbsp;&nbsp;# 自由</p>
      <p class="zuojie yuancuan">&nbsp;作者：穿山饼，能躺着就绝不坐着的95年老阿姨</p>
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
.men {
  width: 690/@rate;
  margin: 0 auto;
  text-align: left;
  background: #fff;
  border-radius: 20/@rate;
  box-shadow: 0/@rate 0/@rate 50/@rate #e2e2e2;
  margin-top: 30/@rate;
}
.sets {
  width: 690/@rate;
  height: 401/@rate;
}
.zhiyou {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #333;
}
.yuancuan {
  font-size: 20/@rate;
  font-family: 宋体;
  color: #a0a0a0;
}
.zuojie {
  padding-bottom: 40/@rate;
}
</style>
