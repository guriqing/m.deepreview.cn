<template>
  <div>
    <div class="more">
      <div class="that">
        <p>专栏 | 视觉岛屿</p>
      </div>
      <div class="recent" v-for="n in 3" :key="n">
        <img src="../../assets/images/columnd1.png">
        <div class="save">
          <p class="ais">爱你就像爱生命 丨 一波情侣头像</p>
          <p class="riqin">2018年8月17日</p>
        </div>
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
@import '../../assets/styles/_variables.less';
.more {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 34/@rate;
  .that {
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 2/@rate;
      background: #e5e5e5;
      margin-top: 40/@rate;
    }
    p {
      font-size: 36/@rate;
      font-family: 宋体;
      color: #333;
    }
  }
}
.recent {
  &.test {
    color: #fff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40/@rate;
  img {
     width: 239/@rate;
    height: 239/@rate;
  }
}
.ais {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #333;
}
.riqin {
  font-size: 24/@rate;
  font-family: 宋体;
  color: #a0a0a0;
}
</style>
