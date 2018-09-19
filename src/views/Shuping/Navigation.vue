<template>
  <div class="bag-xian">
    <div class="bgs">
      <router-link :to="item.to" class="shou" v-for="item in links" :key="item.text">
        <img :src="$route.path === item.to ? item.activeMenu : item.menu">
        <p>{{ item.text }}</p>
      </router-link>
      <!-- <router-link  to="/shuping" class="shou">
        <img src="../../assets/images/menu1.png">
        <p>书评</p>
      </router-link>
      <div class="shou">
        <img src="../../assets/images/menu3.png">
        <p>影评</p>
      </div>
      <div class="shou">
        <img src="../../assets/images/menu5.png">
        <p>艺评</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import menu1 from '../../assets/images/menu1.png'
import menu2 from '../../assets/images/menu2.png'
import menu3 from '../../assets/images/menu3.png'
import menu4 from '../../assets/images/menu4.png'
import menu5 from '../../assets/images/menu5.png'
import menu6 from '../../assets/images/menu6.png'
export default {
  name: '',
  data: function () {
    return {
      links: [
        {
          menu: menu1,
          activeMenu: menu2,
          text: '书评',
          to: '/shuping'
        },
        {
          menu: menu3,
          activeMenu: menu4,
          text: '影评',
          to: '/shuping'
        },
        {
          menu: menu5,
          activeMenu: menu6,
          text: '艺评',
          to: '/shuping'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.bag-xian {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
    margin-top: 16/@rate;
  }
  .bgs {
    display: flex;
    margin-top: 20/@rate;
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
        width: 60/@rate;
        height: 50/@rate;
      }
      p {
        margin-top: 16/@rate;
      }
    }
  }
  .router-link-active {
    p {
      color: #00b7f0;
    }
  }
}
</style>
