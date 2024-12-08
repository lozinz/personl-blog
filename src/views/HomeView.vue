<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { testfun } from '@/style/dom/home1'
import ArtiCle from '@/components/Article.vue'

onMounted(() => {
  let test = testfun()
  setInterval(test, 200)
})
</script>

<template>
  <div class="tou">
    <div class="img"></div>
    <div class="hack1">
      <div class="hack"></div>
    </div>
  </div>
  <div class="contanin">
    <div class="banner1"></div>
    <div class="banner2"></div>
  </div>
  <div class="main">
    <h1>Article</h1>
    <ArtiCle v-for="item in 9" :key="item"></ArtiCle>
  </div>
</template>

<style scoped lang="less">
.tou {
  position: relative;

  flex-direction: column;
  // flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vh;
  height: 50vh;

  // flex-wrap: nowrap;
  top: 15vh;
  margin: 0 auto;
  .img {
    width: 15vh;
    height: 15vh;
    background: url(../img/home/liangliang.jpg) no-repeat center;
    background-size: cover;
    border-radius: 50%;
    transition: all 0.5s;

    margin-bottom: 1.8519vh;
    // align-items: center;
  }
  .img:hover {
    transform: rotateZ(360deg);
  }
  .hack {
    width: 50vh;
    height: 15vh;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 2vh;
    font-size: 2vh;
    font-family: '宋体';
    color: #000;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hack::after {
    content: '|';
    opacity: 1;
    animation: fade 0.8s infinite alternate;
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.contanin {
  width: 100vw;
  height: 15vh;
  position: relative;
  bottom: -30vh;
  overflow: hidden;
}
.banner1 {
  width: 400%;
  height: 13vh;
  z-index: 4;
  background: url(../img/home/wave1.png) repeat-x center center;
  background-size: auto 13vh;

  position: absolute;
  bottom: 0;
  animation: wave 240s linear infinite;
}
.banner2 {
  position: absolute;
  width: 400%;
  height: 15vh;
  z-index: 3;
  background: url(../img/home/wave2.png) repeat-x center center;
  background-size: auto 15vh;
  // 溢出

  bottom: 0;
  animation: wave 240s linear infinite;
}
@keyframes wave {
  100% {
    transform: translate(-50%, 0);
  }
}
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  margin-top: 30vh;
  width: 100vw;
  height: 400vh;
  background-color: rgba(255, 255, 255, 0.7);
  h1 {
    width: 30vw;
    height: 10vh;
    font-size: 1.5vw;
    font-weight: 200;
    margin-top: 10vh;
  }
}
</style>
