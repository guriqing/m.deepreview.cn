<template>
  <div>
    <div class="listcolumn" v-for="time in likes" :key="time.texts">
      <div class="clumn">
        <div class="jiachen">
          <img class="colnm" :src="time.columnd">
          <p class="wuming"><span class="lans">{{ time.texts }}</span>|<span class="wus">{{ time.name }}</span></p>
        </div>
        <img class="qianjin" :src="time.columns">
      </div>
    </div>
  </div>
</template>

<script>
import column1 from '../../assets/images/column1.png'
import column2 from '../../assets/images/column2.png'
import column3 from '../../assets/images/column3.png'
import column4 from '../../assets/images/column4.png'
import column5 from '../../assets/images/column5.png'
import column6 from '../../assets/images/column6.png'
export default {
  name: '',
  data: function () {
    return {
      likes: [
        {
          columnd: column1,
          texts: '专栏',
          name: '无名',
          columns: column2
        },
        {
          columnd: column3,
          texts: '专栏',
          name: '南映辰',
          columns: column2
        },
        {
          columnd: column4,
          texts: '专栏',
          name: '青城未暖，烟花易冷',
          columns: column2
        },
        {
          columnd: column5,
          texts: '专栏',
          name: '老东坡',
          columns: column2
        },
        {
          columnd: column6,
          texts: '专栏',
          name: '晴雯',
          columns: column2
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.listcolumn {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 2/@rate;
    background: #e5e5e5;
  }
  .clumn {
    width: 100%;
    padding: 28/@rate 0/@rate;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .jiachen {
      display: flex;
      align-items: center;
      .colnm {
        width: 140/@rate;
        height: 140/@rate;
      }
      .wuming {
        font-size: 32/@rate;
        font-family: 宋体;
        color: #333;
        margin-left: 30/@rate;
        .lans {
          margin-right: 12/@rate;
        }
        .wus {
          margin-left: 12/@rate;
        }
      }
    }
    .qianjin {
      width: 17/@rate;
      height: 30/@rate;
    }
  }
}
</style>
