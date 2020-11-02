<template>
  <div class="index">
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.index {
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
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
