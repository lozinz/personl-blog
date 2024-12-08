<script setup>
import { RouterView } from 'vue-router'
import { Menu, Document, House, InfoFilled } from '@element-plus/icons-vue'
import '@/style/dom/home'
import '@/style/base.css'
</script>

<template>
  <div class="main">
    <header class="header">
      <!-- <img src="./img/home/image_f90e7ce7-904d-4b47-8165-2f60de218a74.png" alt="" class="logo" /> -->
      <el-icon class="logo"><Menu /></el-icon>
      <div class="nav">
        <RouterLink to="/home"
          ><House style="width: 3vh; margin-right: 0.2604vw; color: #fff" /> 主页
        </RouterLink>
        <RouterLink to="/text">
          <Document style="width: 3vh; margin-right: 0.2604vw; color: #fff" />文章</RouterLink
        >
        <RouterLink to="/about"
          ><InfoFilled style="width: 3vh; margin-right: 0.2604vw; color: #fff" />关于</RouterLink
        >
      </div>
    </header>
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="less">
.main {
  background: url('./img/home/banner.jpg');
  // width: 100vw;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; // 背景图片固定
  overflow: hidden;
  .header {
    position: relative;
    margin: 0 auto;
    top: 2.7778vh;
    padding: 0 1.0417vw;
    display: flex;
    justify-content: space-between;
    width: 94%;
    height: 8vh;
    font-size: 1.0417vh;
    align-items: center;
    border-radius: 2.5vh;
    transition: all 1s;
    .logo {
      width: 5vh;
      color: rgb(241, 202, 118);
    }
    .nav {
      width: 40vh;
      display: flex;
      justify-content: space-around;
      height: 100%;
      line-height: 8vh;
      a {
        color: black;
        transition: all 1s;
        display: flex;
        justify-content: center;
      }
      a:hover {
        color: #e6c92a;
      }
      font-size: 2vh;
    }
  }
  .header:hover {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
  }
}
.fixed-navbar {
  position: fixed !important;
  top: 0 !important;
  left: 0;
  right: 0;
  width: 100% !important;
  border-radius: 0 !important;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
