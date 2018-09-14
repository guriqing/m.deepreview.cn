<template>
  <div class="left">
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
.scoed {
  width: 690/@rate;
  margin: 0 auto;
  text-align: left;
}
.scoed ul {
  list-style: none;
  font-size: 24/@rate;
  font-family: 宋体;
  color: #00b7f0;
  margin-left: -100/@rate;
}
.scoed ul li {
  display: inline-block;
  padding: 0/@rate 40/@rate;
}
</style>
