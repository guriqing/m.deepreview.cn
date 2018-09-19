<template>
  <div class="time">
    <div class="men" v-for="time in links" :key="time.text">
      <img class="sets" :src="time.menu">
      <p class="zhiyou">{{ time.text }}</p>
      <p class="yuancuan"><span class="cuang">{{ time.yuan }}</span><span class="yous">{{ time.yous }}</span></p>
      <p class="zuojie yuancuan">{{ time.author }}</p>
    </div>
  </div>
</template>

<script>
import menu7 from '../../assets/images/menu7.png'
import menu8 from '../../assets/images/menu8.png'
export default {
  name: '',
  data: function () {
    return {
      links: [
        {
          menu: menu7,
          text: '《1984》：所谓自由，就是可以说2+2等于四的自由',
          yuan: '# 原创',
          yous: '# 自由',
          author: '作者：穿山饼，能躺着就绝不坐着的95年老阿姨'
        },
        {
          menu: menu8,
          text: '《人类简史》：人类真的了解自己吗',
          yuan: '# 原创',
          yous: '# 人类',
          author: '作者：木洛'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.time {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  .men {
    width: 100%;
    box-sizing: border-box;
    border-radius: 20/@rate;
    box-shadow: 0/@rate 0/@rate 50/@rate #e2e2e2;
    margin-top: 30/@rate;
    background: #fff;
    .sets {
      width: 690/@rate;
      height: 401/@rate;
    }
    .zhiyou {
      font-size: 30/@rate;
      font-family: 宋体;
      color: #333;
      margin-top: 30/@rate;
      padding: 0/@rate 12/@rate;
    }
    .yuancuan {
      font-size: 20/@rate;
      font-family: 宋体;
      color: #a0a0a0;
      margin-top: 28/@rate;
      padding: 0/@rate 12/@rate;
      .yous {
        margin-left: 50/@rate;
      }
    }
    .zuojie {
      padding-bottom: 40/@rate;
    }
  }
}
</style>
