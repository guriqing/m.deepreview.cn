<template>
  <div class="daxiang">
    <div>
      <p class="shidi">《大象席地而坐》：小人物的时代悲歌</p>
      <p class="yuancuan">原创 · 迷茫 · 逃离  </p>
      <div class="riqi">
        <span class="zuojie">2018年9月5日</span>
        <span class="zuojie wuming">作者：无名</span>
      </div>
      <img class="homeimg" src="../../assets/images/home1.png">
    </div>
    <div class="xian"></div>
    <div class="dongren">
      <p class="shidi">最动人时光，未必地老天荒——浅谈《廊桥遗梦》</p>
      <p class="yuancuan">原创 · 邂逅 · 缘分</p>
      <div class="riqi">
        <span class="zuojie">2018年8月15日</span>
        <span class="zuojie wuming">作者：南映辰</span>
      </div>
      <img class="homeimgs" src="../../assets/images/home2.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.daxiang {
  margin-top: 60/@rate;
  text-align: left;
}
.shidi {
  font-size: 30/@rate;
  font-family: 宋体;
  color: #333333;
}
.yuancuan {
  font-size: 20/@rate;
  font-family: 宋体;
  color: #00b7f0;
}
.riqi {
  margin-top: -10/@rate;
}
.zuojie {
  font-size: 18/@rate;
  font-family: 宋体;
  color: #a0a0a0;
}
.wuming {
  margin-left: 430/@rate;
}
.homeimg {
  width: 690/@rate;
  height: 400/@rate;
  margin-top: 30/@rate;
}
.xian {
  width: 100%;
  height: 2/@rate;
  background: #e5e5e5;
  margin-top: 13/@rate;
}

.dongren {
  margin-top: 60/@rate;
}
.homeimgs {
  width: 690/@rate;
  height: 301/@rate;
  margin-top: 30/@rate;
}
</style>
