// 新碟上架
<template>
    <div class="whole">
<!--      小标题-->
        <div class="l-title">
          <h3><span>热门新碟</span></h3>
        </div>
        <ul class="m-cvrlst m-cvrlst-alb2 f-cb">
            <li v-for="(item,index) in hot_list" :key="index">
              <div class="u-cover u-cover-alb2">
                <img :src="item.picUrl" alt="" style="width: 130px;height: 130px;">
                <a href="/" class="msk"></a>
                <a href="/" class="icon-play f-alpha f-fr"></a>
              </div>
              <p class="dec">
                <a class="tit f-thide s-fc0" href="/" :title="item.name" style="color:black">{{item.name}}</a>
              </p>
              <p class="f-thide" style="margin-top: -15px">
                <span class="nm f-thide" :title="item.artist.name " >
                <a class="s-fc3" href="/">{{item.artist.name}}</a>
                </span>
              </p>
            </li>
        </ul>
      <div class="l-title" style="clear: both;position: relative">
        <h3><span>全部新碟</span></h3>
        <div class="tab" id="areaList">
          <a href="/" class="s-fc6">全部</a><span class="line">|</span>
          <a href="/" class="s-fc3">华语</a><span class="line">|</span>
          <a href="/" class="s-fc3">欧美</a><span class="line">|</span>
          <a href="/" class="s-fc3">韩国</a><span class="line">|</span>
          <a href="/" class="s-fc3">日本</a>
        </div>
      </div>
      <ul class="m-cvrlst m-cvrlst-alb2 f-cb">
        <li v-for="(item,index) in all_list" :key="index">
          <div class="u-cover u-cover-alb2">
            <img :src="item.picUrl" alt="" style="width: 130px;height: 130px;">
            <a href="/" class="msk"></a>
            <a href="/" class="icon-play f-alpha f-fr"></a>
          </div>
          <p class="dec">
            <a class="tit f-thide s-fc0" href="/" :title="item.name" style="color:black">{{item.name}}</a>
          </p>
          <p class="f-thide" style="margin-top: -15px">
                <span class="nm f-thide" :title="item.artist.name " >
                <a class="s-fc3" href="/">{{item.artist.name}}</a>
                </span>
          </p>
        </li>
        <el-pagination
          style="clear: both"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="page_size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </ul>

    </div>
</template>
<script>
export default {
  data () {
    return {
      // 总数
      total: 100,
      // 每页默认显示的数量
      page_size: 30,
      currentPage: 1,
      // 热门新碟列表
      hot_list: [],
      // 全部新碟
      all_list: []
    }
  },
  created () {
    this.getNewon()
    this.getAll()
    this.handleSizeChange()
    this.handleCurrentChange()
  },
  methods: {
    // 热门新碟上架
    async getNewon () {
      const { data: res } = await this.$http.get('album/newest')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取新碟上架列表失败！')
      }
      this.hot_list = res.albums
    },
    // 全部新碟
    async getAll (limit = 30, offset = 1) {
      const { data: res } = await this.$http.get('/album/new')
      console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取全部新碟列表失败！')
      }
      this.total = res.total
      this.all_list = res.albums
    },
    handleSizeChange (val) {
      this.getAll(30, 2)
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="less" scoped>
/*整个大的div*/
  .whole{
    width: 980px;
    margin: 0 auto;
    /*height: 800px;*/
    border: 1px solid #d3d3d3;
    /*标题div*/
    .l-title {
      height: 40px;
      width: 900px;
      margin: 0 auto;
      border-bottom: 2px solid #c20c0c;

      h3 {
        /*float: left;*/
        font-size: 24px;
        font-weight: normal;
      }
    }
      /*音乐片ul*/
    .u-cover {
      position: relative;
      display: block;
    }
    .icon-play{
      display: none;
    }
    .u-cover:hover .icon-play{
      display: block;
    }
    .u-cover-alb2 {
      width: 130px;
      height: 130px;
    }
    .n-alblist .m-cvrlst {
        margin: 20px 0 0 -33px;
    }
    .m-cvrlst-alb2 li, .m-cvrlst-alb3 li {
      width: 153px;
      height: 178px;
    }
    .m-cvrlst li {
        float: left;
        /*display: inline-block;*/
        width: 140px;
        height: 188px;
        /*overflow: hidden;*/
        padding: 0 0 15px 32px;
        line-height: 1.4;
        a{
          font-size:14px;
        }
    }
    .u-cover .msk {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .u-cover .bottom, .u-cover .msk{
      background-image: url('https://s2.music.126.net/style/web2/img/coverall.png') ;
    }
    .u-cover-alb2 .msk {
      display: block;
      width: 153px;
      height: 130px;
      /*background-color: red;*/
      background-position: 0 -845px;
    }
    .u-cover .ply, .u-cover .icon-headset, .u-cover .icon-play, .u-face .msk, .n-note .head .msk, .icn-vip, .icn-daren, .u-checkbox {
      background: url('https://s2.music.126.net/style/web2/img/iconall.png') no-repeat;
    }
    .u-cover .icon-play {
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 16px;
      height: 17px;
      background-position: 0 0;
    }
    .u-cover-alb2 .icon-play, .u-cover-alb3 .icon-play, .u-cover-9 .icon-play {
      left: 94px;
      width: 28px;
      height: 28px;
      background-position: 0 -140px;
    }
    .m-cvrlst li .tit {
      display: inline-block;
      max-width: 100%;
      _width: 100%;
      vertical-align: middle;
    }
    .tit:hover{
      text-decoration: underline;
    }
    .dec{
      margin-top: 1px;
    }
    /*p标签字体*/
    .f-thide {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      clear: both;
      a{
        text-align: left;
        /*display: block;*/
        color: #666;
        margin-right: 5px;
      }
      a:hover{
        text-decoration: underline;
      }
    }
    .l-title .tab {
      /*float: left;*/
      /*display: inline-block;*/
      position: absolute;
      top:7px;
      left: 136px;

      a{
        color:#666;
        font-size: 12px;
      }
      a:hover{
        text-decoration: underline;
      }
    }
    .l-title .tab .line {
      margin: 0 10px;
      color: #c7c7c7;
    }
  }
</style>
