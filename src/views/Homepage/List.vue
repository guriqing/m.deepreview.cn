<template>
  <div class="daxiang">
    <div class="beige" v-for="time in likes" :key="time.text">
      <p class="shidi">{{ time.text }}</p>
      <p class="yuancuan">{{ time.cuan }}</p>
      <div class="riqi">
        <p class="zuojie">{{ time.date }}</p>
        <p class="zuojie">{{ time.name }}</p>
      </div>
      <img class="homeimg" :src="time.home">
    </div>
  </div>
</template>

<script>
import home1 from '../../assets/images/home1.png'
import home2 from '../../assets/images/home2.png'
export default {
  name: 'test',
  data: function () {
    return {
      likes: [
        {
          text: '《大象席地而坐》：小人物的时代悲歌',
          cuan: '原创 · 迷茫 · 逃离',
          date: '2018年9月5日',
          name: '作者：无名',
          home: home1
        },
        {
          text: '最动人时光，未必地老天荒——浅谈《廊桥遗梦》',
          cuan: '原创 · 邂逅 · 缘分',
          date: '2018年8月15日',
          name: '作者：南映辰',
          home: home2
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.beige {
  margin-top: 60/@rate;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
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
    margin-top: 30/@rate;
  }
  .riqi {
    margin-top: 15/@rate;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .zuojie {
      font-size: 18/@rate;
      font-family: 宋体;
      color: #a0a0a0;
    }
  }
  .homeimg {
    width: 690/@rate;
    height: 400/@rate;
    margin-top: 30/@rate;
  }
 }
// .xian {
//   width: 100%;
//   height: 2/@rate;
//   background: #e5e5e5;
//   margin-top: 13/@rate;
// }

// .dongren {
//   margin-top: 60/@rate;
// }
// .homeimgs {
//   width: 690/@rate;
//   height: 301/@rate;
//   margin-top: 30/@rate;
// }
</style>
