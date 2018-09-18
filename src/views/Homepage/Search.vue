<template>
  <div class="fans">
    <div class="classify">
      <div class="fense">
        <div class="sify" @click="toggle()">
          <p>分类</p>
          <img src="../../assets/images/Spinner.png">
        </div>
        <div class="liebiao" v-show="isShow">
          <ul>
            <li :to="item.to" v-for="item in links" :key="item.text">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="seek">
        <a href="#"><img src="../../assets/images/icon-search.png"></a>
        <input type="text" name="" placeholder="请输入关键词">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify',
  data: function () {
    return {
      links: [
        '书评',
        '影评',
        '艺评'
      ]
    }
  }
  // el: '.fense',
  // data: {
  //   isShow: false
  // },
  // methods: {
  //   toggle: function () {
  //     this.isShow = !this.isShow
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.fans {
  width: 100;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
    margin-top: 14/@rate;
  }
  .classify {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20/@rate;
    .fense {
      position: relative;
      .sify {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 30/@rate;
          font-family: 宋体;
          color: #a0a0a0;
        }
        img {
          width: 18/@rate;
          height: 11/@rate;
          margin: 12/@rate;
        }
      }
      .liebiao {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        border: 1/@rate solid #f5f5f5;
        text-align: center;
        margin-top: 6/@rate;
        li {
          font-size: 20/@rate;
          font-family: 宋体;
          width: 96/@rate;
          height: 40/@rate;
          line-height: 40/@rate;
          color: #333333;
        }
      }
    }
    .seek {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-left: 10/@rate;
      img {
        width: 33/@rate;
        height: 33/@rate;
        position: absolute;
        top: 18/@rate;
        left: 14/@rate;
      }
      input {
        box-sizing: border-box;
        font-size: 30/@rate;
        font-family: 宋体;
        color: #d2d2d2;
        padding-left: 57/@rate;
        width: 100%;
        height: 68/@rate;
        background: #eee;
        border-radius: 10/@rate;
        border: 1/@rate solid #eee;
        outline: none;
      }
    }
  }
}
</style>
