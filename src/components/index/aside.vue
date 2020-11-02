<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>推荐</span>
        </template>

        <el-menu-item index="1-1">
            <i class="el-icon-magic-stick"></i>
            发现音乐
        </el-menu-item>
        <el-menu-item index="1-2">
            <i class="el-icon-news"></i>
            <span>私人FM</span>
        </el-menu-item>
        <el-menu-item index="1-3">
            <i class="el-icon-video-camera-solid"></i>
            <span>LOOK直播</span>
        </el-menu-item>
        <el-menu-item index="1-4">
            <i class="el-icon-video-camera"></i>
            <span>视频</span>
        </el-menu-item>
        <el-menu-item index="1-5">
            <i class="el-icon-s-custom"></i>
            <span>朋友</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <span>我的音乐</span>
        </template>
        <el-menu-item index="2-1">
            <i class="el-icon-bangzhu"></i>
            <span>本地音乐</span>
        </el-menu-item>
        <el-menu-item index="2-2">
            <i class="el-icon-download"></i>
            <span>下载管理</span>
        </el-menu-item>
        <el-menu-item index="2-3">
            <i class="el-icon-cloudy"></i>
            <span>我的音乐云盘</span>
        </el-menu-item>
        <el-menu-item index="2-4">
            <i class="el-icon-coin"></i>
            <span>我的电台</span>
        </el-menu-item>
        <el-menu-item index="2-5">
            <i class="el-icon-star-off"></i>
            <span>我的收藏</span>
        </el-menu-item>
      </el-submenu>

     <el-submenu index="3">
        <template slot="title">
          <span>创建的歌单</span>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.aside {
  .el-submenu{
      text-align: left;
  }
}
</style>
