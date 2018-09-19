<template>
  <div>
    <div class="more">
      <div class="that">
        <p>专栏 | 视觉岛屿</p>
      </div>
      <div class="wei-recen" v-for="tiem in links" :key="tiem.text">
        <div class="recent">
          <img :src="tiem.umnd">
          <div class="save">
            <p class="ais"><span class="shengm">{{ tiem.name }}</span>|<span class="touxiang">{{ tiem.text }}</span></p>
            <p class="riqin">{{ tiem.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import columnd1 from '../../assets/images/columnd1.png'
export default {
  name: '',
  data: function () {
    return {
      links: [
        {
          umnd: columnd1,
          name: '爱你就像爱生命',
          text: '一波情侣头像',
          date: '2018年8月17日'
        },
        {
          umnd: columnd1,
          name: '爱你就像爱生命',
          text: '一波情侣头像',
          date: '2018年8月17日'
        }
      ]
    }
  }
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
  .wei-recen {
    margin-top: 40/@rate;
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 2/@rate;
      background: #e5e5e5;
      margin-top: 30/@rate;
    }
    .recent {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      img {
        width: 239/@rate;
        height: 239/@rate;
      }
      .save {
        flex: 1;
        padding: 0/@rate 24/@rate;
        .ais {
          font-size: 30/@rate;
          font-family: 宋体;
          color: #333;
          margin-top: 12/@rate;
          .shengm {
            margin-right: 26/@rate;
          }
          .touxiang {
            margin-left: 26/@rate;
          }
        }
        .riqin {
          font-size: 24/@rate;
          font-family: 宋体;
          color: #a0a0a0;
          margin-top: 100/@rate;
        }
      }
    }
  }
}
</style>
