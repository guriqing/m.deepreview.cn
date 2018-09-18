<template>
  <div>
    <div class="result">
      <div class="return">
        <img src="../../assets/images/return.png">
        <p>返回</p>
      </div>
      <h1 class="searc">搜索结果</h1>
      <div class="xian"></div>
    </div>
    <List/>
  </div>
</template>

<script>
import List from './List.vue'
import Tabbar from '@/components/Tabbar.vue'
export default {
  components: {
    List,
    Tabbar
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.result {
  width: 690/@rate;
  margin: 0 auto;
  text-align: left;
}
.return {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.return img {
  width: 20/@rate;
  height: 35/@rate;
  margin-right: 18/@rate;
}
.return p {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #333;
}
.searc {
  font-size: 36/@rate;
  font-family: 宋体;
  color: #333;
}
.xian {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
}
</style>
