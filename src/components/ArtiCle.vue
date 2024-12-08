<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
</script>

<template>
  <div class="bigbox">
    <img src="../img/home/img.png" alt="" class="image" />
    <RouterLink class="title">孤独是人生的主旋律</RouterLink>
    <div class="content">
      <p>
        致友人和陷入纠结与迷茫的我： 我们曾经一起笑过，一切看起来都那么美好
        但人总是要向前看的，如孩童戏言般的约定终究抗不过名为生活的棒 …
      </p>
    </div>
  </div>
</template>

<style scoped lang="less">
.bigbox {
  position: relative;
  width: 30vw;
  height: 20vh;
  margin: 0 auto;
  border-radius: 2vh;
  overflow: hidden;
  margin-bottom: 4vh;
  .image {
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 2vh 2vh 0 0;
    transition: all 0.4s;
    transform: scale(1);
  }
  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    top: 50%;
    left: 5%;
    width: 25%;
    height: 4vh;
    font-size: 0.7vw;
    font-weight: 700;
    line-height: 4vh;
    padding: 0 0.4vw;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: saturate(180%) blur(10px);

    transition: all 0.4s;
  }
  .title:hover {
    width: 30%;
    padding: 0 1vw;
    font-size: 0.7vw;
    color: #e6c92a;
  }
  .content {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    top: 60%;
    left: 0;
    width: 100%;
    height: 40%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0 0 2vh 2vh;
    font-size: 0.7vw;
    p {
      width: 90%;
      font-size: 200;
    }
  }
  .image:hover {
    width: 100%;
    height: 100%;
    z-index: 5;
    border-radius: 2vh;
    transform: scale(1.1);
    object-fit: cover;
  }
}
</style>
