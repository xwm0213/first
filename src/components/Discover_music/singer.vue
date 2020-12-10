// 歌手
<template>
    <div class="big_area">
      <div class="left">
        <div class="left_in g-wrap4 n-sgernav">
          <h2 class="tit">推荐</h2>
          <ul class="nav f-cb">
            <li>
              <a href="#" class="cat-flag z-slt">推荐歌手</a>
            </li>
            <li>
              <a href="#" class="cat-flag" >入驻歌手</a>
            </li>
          </ul>
          <div class="blk" >
            <h2 class="tit">华语</h2>
            <ul class="nav f-cb">
              <li><a href="/discover/artist/cat?id=1001" class="cat-flag" data-cat="1001">华语男歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=1002" class="cat-flag" data-cat="1002">华语女歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=1003" class="cat-flag" data-cat="1003">华语组合/乐队</a>
              </li>
            </ul>
          </div>
          <div class="blk">
            <h2 class="tit">欧美</h2>
            <ul class="nav f-cb">
              <li><a href="/discover/artist/cat?id=2001" class="cat-flag" data-cat="2001">欧美男歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=2002" class="cat-flag" data-cat="2002">欧美女歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=2003" class="cat-flag" data-cat="2003">欧美组合/乐队</a>
              </li>
            </ul>
          </div>
          <div class="blk">
            <h2 class="tit">日本</h2>
            <ul class="nav f-cb">
              <li><a href="/discover/artist/cat?id=6001" class="cat-flag" data-cat="6001">日本男歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=6002" class="cat-flag" data-cat="6002">日本女歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=6003" class="cat-flag" data-cat="6003">日本组合/乐队</a>
              </li>
            </ul>
          </div>
          <div class="blk">
            <h2 class="tit">韩国</h2>
            <ul class="nav f-cb">
              <li><a href="/discover/artist/cat?id=7001" class="cat-flag" data-cat="7001">韩国男歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=7002" class="cat-flag" data-cat="7002">韩国女歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=7003" class="cat-flag" data-cat="7003">韩国组合/乐队</a>
              </li>
            </ul>
          </div>
          <div class="blk">
            <h2 class="tit">其他</h2>
            <ul class="nav f-cb">
              <li><a href="/discover/artist/cat?id=4001" class="cat-flag" data-cat="4001">其他男歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=4002" class="cat-flag" data-cat="4002">其他女歌手</a>
              </li>
              <li><a href="/discover/artist/cat?id=4003" class="cat-flag" data-cat="4003">其他组合/乐队</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
          <div class="hot_title">
            <h3 class="f-ff2">入驻歌手</h3>
            <a href="#"><span class="more s-fc3">更多 ></span></a>
          </div>
        <div class="login_singer">
          <ul class="m-cvrlst m-cvrlst-5 f-cb">
            <li v-for="(item,index) in hot_singer_list" :key="index">
              <img :src="item.img1v1Url" style="width: 130px;height: 130px;" alt="">
              <p style="margin-top: 1px"><a href="#">{{item.name}}</a><i class="u-icn u-icn-5"></i></p>
            </li>
          </ul>
        </div>
        <div class="hot_title" style="clear: both">
          <h3 class="f-ff2">热门歌手</h3>
          <a href="#"><span class="more s-fc3">更多 ></span></a>
        </div>
        <div class="hot_singer">
          <ul class="m-cvrlst m-cvrlst-5 f-cb">
            <li v-for="(item,index) in hot_singer_list" :key="index">
              <img :src="item.img1v1Url" style="width: 130px;height: 130px;" alt="">
              <p style="margin-top: 1px"><a href="#">{{item.name}}</a><i class="u-icn u-icn-5"></i></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 歌手列表
      hot_singer_list: []
    }
  },
  created () {
    this.GetHotSingerLlist()
  },
  methods: {
    async GetHotSingerLlist () {
      const { data: res } = await this.$http.get('artist/list?limit=10')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取歌手列表失败！')
      }
      this.hot_singer_list = res.artists
    }
  }
}
</script>
<style lang="less" scoped>
  .big_area{
    margin: 0 auto;
    width: 980px;
    /*min-height: 700px;*/
    height: 100%;
    border: 1px solid #d3d3d3;
    .left{
      float: left;
      width: 180px;
      /*height: 952px;*/
      height: auto;
      /*background-color: red;*/
      a{
        color: #333;
        font-size: 12px;
        cursor: pointer;
        /*padding-left: 27px;*/
      }
      a:hover{
        text-decoration: underline;
      }
      .left_in{
        /*margin-top: 51px;*/
        height: 914px;
        padding: 51px 10px 40px;
        border: 1px solid #d3d3d3;
        /*background-color: cornflowerblue;*/
      }
      .left_in .tit {
        height: 25px;
        padding-left: 14px;
        font-size: 16px;
        font-family: "Microsoft Yahei";
      }
      .n-sgernav .blk {
        clear: both;
        margin: 5px 0 0;
        padding-top: 1px;
        border-top: 1px solid #d3d3d3;
      }
      .n-sgernav li{
        /*background-color: red;*/
        margin-left: -37px;
        margin-bottom: 2px;
      }
      .n-sgernav li, .n-sgernav li a {
        float: left;
        width: 160px;
        height: 29px;
        line-height: 29px;
        /*background-position: 0px 0px;*/
      }
      .n-sgernav li a {
        background: url('https://s2.music.126.net/style/web2/img/singer.png') no-repeat 0 9999px;
      }
      .n-sgernav li a {
        width: 133px;
        padding-left: 27px;
        background-position: 0 -30px;
        color: #333;
      }
    }
    .right{
      float: left;
      width: 799px;
      /*height: 900px;*/
      height: 100%;
      border-right: 1px solid #d3d3d3;;
      /*background-color: green;*/
      .hot_title{
        height: 40px;
        margin: 40px auto;
        width: 719px;
        /*margin-left: 20px;*/
        box-sizing: border-box;
        border-bottom: 2px solid #c20c0c;
      }
      .hot_title h3 {
        /*float: left;*/
        display: inline;
        font-size: 24px;
        font-weight: normal;
      }
      .hot_title .more {
        margin-left: 585px;
        /*margin-top: 14px;*/
        font-size: 12px;
        color:#000000;
      }
      .hot_title .more:hover{text-decoration: underline}
    /*  入驻歌手区域*/
      .m-sgerlist .m-cvrlst {
        margin: 20px 0 0 -17px;
        background-color: red;
      }
      .login_singer ul li,.hot_singer ul li{
        float: left;
        display: inline-block;
        width: 140px;
        height: 202px;
        overflow: hidden;
        /*padding: 0 0 30px 50px;*/
        line-height: 1.4;
        a{
          color:black;
        }
      }
      .u-icn{
        background: url('https://s2.music.126.net/style/web2/img/icon.png') no-repeat 0 9999px;
      }
      .m-cvrlst-5 li .u-icn-5 {
        position: relative;
        top:4px;
        right: 12px;
        float: right;
      }
      .u-icn-5 {
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
      }
      .u-icn, .u-icn2, .u-icn3 {
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
      }

    }
  }
</style>
