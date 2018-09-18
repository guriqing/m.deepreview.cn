<template>
  <div class="disp">
    <div class="bgs">
      <router-link :to="item.to" class="shou" v-for="item in links" :key="item.text">
        <img :src="$route.path === item.to ? item.activeIcon : item.icon">
        <p>{{ item.text }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import icon7 from '../assets/images/icon7.png'
import icon8 from '../assets/images/icon8.png'
export default {
  name: '',
  data: function () {
    return {
      links: [
        {
          icon: icon1,
          activeIcon: icon2,
          text: '首页',
          to: '/homepage'
        },
        {
          icon: icon3,
          activeIcon: icon4,
          text: '分类',
          to: '/shuping'
        },
        {
          icon: icon5,
          activeIcon: icon6,
          text: '专栏',
          to: '/column'
        },
        {
          icon: icon7,
          activeIcon: icon8,
          text: '搜索',
          to: '/search'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/_variables.less';
.disp {
  margin-top: 100/@rate;
}
.bgs {
  width: 100%;
  height: 100/@rate;
  background: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
}
.shou {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18/@rate;
  font-family: 宋体;
  color: #a0a0a0;
  img {
    width: 40/@rate;
    height: 40/@rate;
  }
  p {
    margin-top: 8/@rate;
  }
}
.router-link-active {
  p {
    color: #00b7f0;
  }
}
</style>
