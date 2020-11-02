<template>
  <div class="app">
    <router-view></router-view>
    <div class="bg">
      <img src="./assets/img/bg/bg.jpg" alt="" />
    </div>
    <div class="main">
      <el-container>
        <el-header height="80px">Header</el-header>
        <el-container>
          <el-aside width="220px">
            <Aside/>
          </el-aside>
          <el-main width="1180px">Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/index/aside'
export default {
  data(){
    return {

    }
  },
  components: {
    Aside
  }
}
</script>

<style lang='less' scoped>
.app {
  overflow: hidden;
  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    img {
      filter: blur(80px);
    }
    z-index: -10;
  }
  .main {
    width: 1400px;
    margin: 0 auto;
    margin-top: 50px;
  }
}
.el-header{
    background-color: #5292fe;
    color: #333;
    line-height: 60px;
    
  }
  
  .el-aside {
    background-color:#eef1f6;
    color: #333;
    text-align: center;
    height: calc(100vh - 130px);
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  

</style>