// 发现音乐
<template>
  <div class="output">
    <!-- 设置顶部导航栏的背景色 -->
    <div class="top">
      <!-- 定位导航栏 -->
      <div class="top_centre">
        <el-menu
          mode="horizontal"
          background-color="#C20C0C"
          :select="handleSelect"
          text-color="#fff"
          active-text-color="#ffffff"
          router
          class="menu"
        >
          <el-menu-item index="/recommend">推荐</el-menu-item>
          <el-menu-item index="/ranking_list">排行榜</el-menu-item>
          <el-menu-item index="/song_sheet">歌单</el-menu-item>
          <el-menu-item index="/anchor_station">主播电台</el-menu-item>
          <el-menu-item index="/singer">歌手</el-menu-item>
          <el-menu-item index="/new_disc">新碟上架</el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.output {
  overflow: hidden;
}
html,
body {
  margin: 0;
  padding: 0;
}
.top {
  width: 100%;
  height: 40px;
  background-color: #c20c0c;
}
.top_centre {
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}
.menu {
  width: 744px;
  height: 34px;
  margin-left: 180px;
  border: none !important;
  .el-menu-item {
    margin: 0 10px;
    height: 40px;
    line-height: 40px;
    border-radius:20px;
  }
}
</style>
