<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
</script>

<template>
  <div class="main1">
    <h1>孤独是人生的主旋律</h1>
    <div class="banner">
      <span>致友人和陷入纠结与迷茫的我：</span>
      <span>我们曾经一起笑过，一切看起来都那么美好</span>
      <span>但人总是要向前看的，如孩童戏言般的约定终究抗不过名为生活的棒喝</span>
      <span>曾经我自认为不是现充，如今看来只不过是身处摇篮中的我一厢情愿的幻想</span>
      <span>我很庆幸，庆幸你是我的朋友，庆幸我是我，我们大多时候是理智的，不必浪费口舌</span>
      <span>我很遗憾，遗憾太过理性的我们在分别时连再见也不会说</span>
      <span>我相信若是日后我们再有机会熟络，必不会形同陌路，但也不会像之前那样无话不说</span>
      <span>我们很像，我是懂你的，和你们说说笑笑的时光，我很开心</span>
      <span>但是人毕竟是社会关系的集合，而我们彼此也只是其中很弱的一个</span>
      <span>果然有过那种幻想，与你们一起笑过的我，终究还是向往我们畅想的生活</span>
      <span>希望还有机会能想以前一样和你说说笑笑、玩玩闹闹</span>
      <span><img src="../img/home/img2.jpg" alt="" class="img" /></span>
    </div>
  </div>
  <div class="main2"></div>
</template>

<style lang="less" scoped>
.main1 {
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100vw;
  height: 250vh;
  background-color: rgba(255, 255, 255, 0.7);
  h1 {
    height: 4.6296vh;
    width: 15vw;
    margin: 0 auto;
    font-size: 1.5vw;
    padding-top: 15vh;
    padding-bottom: 40px;
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5vh;
    span {
      display: block;
      width: 60vw;
      height: 4.6296vh;
      font-size: 1vw;
      line-height: 4.6296vh;
      font-weight: 100;
      margin-top: 1.5625vw;
    }
    .img {
      width: 52.0833vw;
      height: 41.6667vw;
    }
  }
}
.main2 {
  width: 100vw;
  height: 250vh;
}
</style>
