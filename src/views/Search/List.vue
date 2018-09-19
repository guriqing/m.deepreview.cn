<template>
  <div class="ziyou">
    <div class="scoed">
      <ul>
        <li v-for="n in 10" :key="n">#自由</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  nmae: ''
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.ziyou {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  .scoed {
    margin-top: 60/@rate;
    ul {
      font-size: 24/@rate;
      font-family: 宋体;
      color: #00b7f0;
      width: 376/@rate;
      li {
        display: inline-block;
        margin-right: 60/@rate;
        line-height: 60/@rate;
      }
    }
  }
}
</style>
