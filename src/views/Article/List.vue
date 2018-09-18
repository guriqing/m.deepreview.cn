<template>
  <div>
    <div class="daxiang">
      <p class="xiaoren">《大象席地而坐》：小人物的时代悲歌</p>
      <p class="yuancuang">原创 · 迷茫 · 逃离</p>
      <p class="riqi"><span>2018年9月5日</span><span class="zuojie">作者：无名</span></p>
      <div class="neis">
        <P class="neiru">你感受过绝望之后的绝望吗？《大象席地而坐》每一个镜头似乎都在诉说着生活当中的那份难以磨灭的痛痛了以后还是痛，几位不同阶段的主人公因生活的不顺遂踏上了去往满洲里的征程，那里有一头大象整天就坐在那，动也不动，有人打它，逗它，它都不动。电影的最后我们没有看到大象席地而坐的场景，在寂静的夜下，只听到了大象近乎凄惨的叫声，在这声哀嚎中电影落下了帷幕，就像我们的生活依然要痛苦的前进一样。</P>
        <p class="neiru">这部电影的导演是青年作家胡波，电影改编自他的同名小说《大象席地而坐》,文字的感染力总是强大的,字里行间渲染的压抑让读者可以深深体会到生活仿佛是一个漩涡，任由它肆虐着我们而越陷越深。电影当中胡波用长镜头的手法营造了同样深不见底的痛苦深渊。主人公一睡了自己好朋友的妻子从而逼死了自己的朋友，于是他想要去满洲里看大象躲几天。年迈的主人公二被自己儿子劝说去养老院，他碰见了失手杀死人的主人公三。还有一位花季少女和教导主任的不寻常关系被人发现以后的迷茫，每一个故事都是一种锥心的痛。他们都想去满洲里看看那只一直坐着不动的大象。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/_variables.less';
.daxiang {
  width: 100%;
  box-sizing: border-box;
  padding: 0/@rate 30/@rate;
  margin-top: 80/@rate;
  .xiaoren {
    font-size: 36/@rate;
    font-family: 宋体;
    color: #333;
  }
  .yuancuang {
    font-size: 20/@rate;
    font-family: 宋体;
    color: #00b7f0;
    margin-top: 50/@rate;
  }
  .riqi {
    font-size: 18/@rate;
    font-family: 宋体;
    color: #a0a0a0;
    margin-top: 16/@rate;
  }
  .neis {
    margin-top: 60/@rate;
    .neiru {
      font-size: 28/@rate;
      font-family: 宋体;
      color: #333;
      line-height: 50/@rate;
    }
  }
}
</style>
