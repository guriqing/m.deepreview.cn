<template>
  <div>
    <div class="listcolumn" v-for="n in 10" :key="n">
      <div class="clumn">
        <div class="jiachen">
          <img class="colnm" src="../../assets/images/column1.png">
          <p class="wuming">专栏&nbsp;|&nbsp;无名</p>
        </div>
        <img class="qianjin" src="../../assets/images/column2.png">
      </div>
      <div class="xiahuanx"></div>
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
.listcolumn {
  width: 690/@rate;
  margin: 0 auto;
}
.clumn {
  width: 100%;
  height: 196/@rate;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jiachen {
  display: flex;
  align-items: center;
}
.colnm {
  width: 140/@rate;
  height: 140/@rate;
}
.wuming {
  font-size: 32/@rate;
  font-family: 宋体;
  color: #333;
  margin-left: 30/@rate;
}
.qianjin {
  width: 17/@rate;
  height: 30/@rate;
}
.xiahuanx {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
}
</style>
