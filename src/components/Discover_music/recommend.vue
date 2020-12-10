// 推荐
<template>
  <div>
        <!-- 轮播图部份 -->
              <!-- 轮播图背景色 -->
      <div class="bg" :style="'backgroundImage:url('+warpsImg.imageUrl+'?imageView&blur=40x40)'">
                <!-- 轮播图部分 -->

          <!-- 这个div用于定位 -->
          <div class="location">
              <!-- 这里是轮播 -->
             <div class="block">
                <el-carousel trigger="click" height="283px"
                arrow='always'
                @change="backImg"
                >
                  <el-carousel-item v-for="(item, index) in Rotation" :key="index">
                    <img :src="item.imageUrl">
                  </el-carousel-item>
                </el-carousel>
             </div>
            <!-- 下载客户端 -->
              <div class="download">
                <a href="/download" class="btn" hidefocus="true">下载客户端</a>
                <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
              </div>
          </div>
      </div>
    <!-- 中间div -->
      <div class="contre">
        <!-- 中间——左 -->
        <div class="contre_left">
          <!-- 热门推荐 -->
          <div class="hot">
            <div class="hot_title red_circle">
              <a href="" class="hot_title_word">热门推荐</a>
              <div class="tab">
                <a href="#" class="s-fc3">华语</a>
                <span class="line">|</span>
                <a href="#" class="s-fc3">流行</a>
                  <span class="line">|</span>
                <a href="#" class="s-fc3">摇滚</a>
                  <span class="line">|</span>
                <a href="#" class="s-fc3">民谣</a>
                 <span class="line">|</span>
                <a href="#" class="s-fc3">电子</a>
              </div>
              <span class="more">
                <a href="#" class="s-fc3">更多</a>
                <i class="s-bg-6">&nbsp;</i>
              </span>
            </div>
<!--            热门推荐下的音乐模块-->
            <el-row :gutter="20"  >
              <el-col :span="6" v-for="(item,index) in hot_list" :key="index">
              <div class="grid-content bg-purple">
                <img :src="item.picUrl" alt="" class="hot_img">
                <p>{{item.name}}</p>
              </div>
              </el-col>
            </el-row>
          </div>
            <!--新碟上架-->
          <div class="new_on">
            <div class="hot_title1 red_circle">
              <a href="#" class="title_s">新碟上架</a>
              <span class="more" style="margin-left: 515px">
                <a href="#" class="s-fc3">更多</a>
                <i class="s-bg-6"></i>
              </span>
            </div>
<!--            下方小图区-->
            <div class="new_on_imgs">
              <el-carousel indicator-position="none" height="180px">
                <el-carousel-item v-for="k in 2" :key="k">
                  <ul>
                    <li v-for="(item,index) in newest.slice((k - 1) * 5, k * 5)" :key="index">
                      <div class="u-cover u-cover-alb1">
                        <img :src="item.picUrl" class="j-img" style="width: 100px;height: 100px;">
                        <a href="/" :title="item.name" class="msk"></a>
                      </div>
                      <p class="f-thide" >
                        <a href="/" :title="item.name" class="s-fc0 tit">{{item.name}}</a>
                      </p>
                      <p class="tit f-thide" style="margin-top: -20px">
                        <a href="/" :title="item.artist.name" class="s-fc3" style="color: #666;">{{item.artist.name}}</a>
                      </p>
                    </li>
                  </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!--榜单-->
          <div class="toplist">
            <div class="hot_title1 red_circle">
              <a href="#" class="title_s">榜单</a>
              <span class="more" style="margin-left: 555px">
                <a href="#" class="s-fc3">更多</a>
                <i class="s-bg-6"></i>
              </span>
            </div>
<!--            榜单 下表格-->
            <div class="list_area">
<!--              <el-table-->
<!--                :data="tableData"-->
<!--                stripe-->
<!--                border-->
<!--                style="width: 100%">-->
<!--                <el-table-column-->
<!--                  style="color: red;"-->
<!--                  type="index"-->
<!--                  width="50">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                  prop="first"-->
<!--                  label="云音乐飙升榜"-->
<!--                  width="180"-->
<!--                >-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                  prop="second"-->
<!--                  label="云音乐新歌榜"-->
<!--                  width="180">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                  prop="third"-->
<!--                  label="网易原创歌曲榜">-->
<!--                </el-table-column>-->
<!--              </el-table>-->
              <div class="blk">
              <!--云音乐飙升榜-->
                <div class="b_head">
                  <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=80y80" alt="" @click="getMusicList(19723756)">
                  <div class="tit">
                    <div class="tit">
                      <a href="/discover/toplist?id=19723756" title="云音乐飙升榜"><h3 class="f-fs1 f-thide">云音乐飙升榜</h3></a>
                      <div class="btn">
                        <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放"  >播放</a>
                        <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="19723756" title="收藏">收藏</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="song_list">
                  <ol>
                    <li v-for="(item,index) in song_list1.slice(0,10)" :key="index">
                      <span class="no no-top">{{index+1}}</span>
                      <a href="/song?id=1495058484" class="nm s-fc0 f-thide" title="茫">{{item.name}}</a>
                      <div class="oper">
                        <a href="#" class="s-bg s-bg-11" title="播放"  ></a>
                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表"  ></a>
                        <a href="#" class="s-bg s-bg-12" title="收藏"  ></a>
                      </div>
                    </li>
                  </ol>
                  <div class="more"><a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a></div>
                </div>
              </div>
              <div class="blk">
                <!--云音乐飙升榜-->
                <div class="b_head">
                  <img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=80y80" alt="" @click="getMusicList(3779629)">
                    <div class="tit">
                      <a href="/discover/toplist?id=19723756" title="云音乐新歌榜"><h3 class="f-fs1 f-thide">云音乐新歌榜</h3></a>
                      <div class="btn">
                        <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" >播放</a>
                        <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="19723756" title="收藏">收藏</a>
                      </div>
                    </div>
                </div>
                <div class="song_list">
                  <ol>
                    <li v-for="(item,index) in song_list2.slice(0,10)" :key="index">
                      <span class="no no-top">{{index+1}}</span>
                      <a href="/song?id=1495058484" class="nm s-fc0 f-thide" title="茫">{{item.name}}</a>
                      <div class="oper">
                        <a href="#" class="s-bg s-bg-11" title="播放"  ></a>
                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表"  ></a>
                        <a href="#" class="s-bg s-bg-12" title="收藏"  ></a>
                      </div>
                    </li>
                  </ol>
                  <div class="more"><a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a></div>
                </div>
              </div>
              <div class="blk">
                <!--云音乐飙升榜-->
                <div class="b_head">
                  <img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=80y80" alt="" @click="getMusicList(2884035)">
                  <div class="tit">
                    <div class="tit">
                      <a href="/discover/toplist?id=19723756" title="云音乐飙升榜"><h3 class="f-fs1 f-thide">网易原创歌曲榜</h3></a>
                      <div class="btn">
                        <a href="javascript:;" class="s-bg s-bg-9 f-tdn" hidefocus="true" title="播放" data-res-type="13" data-res-id="19723756" data-res-action="play" data-res-from="31" data-res-data="19723756">播放</a>
                        <a href="javascript:;" hidefocus="true" class="s-bg s-bg-10 f-tdn subscribe-flag " data-plid="19723756" title="收藏">收藏</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="song_list">
                  <ol>
                    <li v-for="(item,index) in song_list3.slice(0,10)" :key="index">
                      <span class="no no-top">{{index+1}}</span>
                      <a href="/song?id=1495058484" class="nm s-fc0 f-thide" title="茫">{{item.name}}</a>
                      <div class="oper">
                        <a href="#" class="s-bg s-bg-11" title="播放"  ></a>
                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表"  ></a>
                        <a href="#" class="s-bg s-bg-12" title="收藏"  ></a>
                      </div>
                    </li>
                  </ol>
                  <div class="more"><a href="/discover/toplist?id=19723756" class="s-fc0">查看全部&gt;</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--        右侧div-->
        <div class="contre_right">
<!--          登录区域-->
          <div class="loin_in">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a class="btn">用户登录</a>
          </div>
<!--          入住歌手 -->
          <div class="n-singer">
            <p class="s_title"><span>入驻歌手</span> <a href="#">查看全部 ></a></p>
            <ul class="singer_area">
              <li>
                <img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="">
                <div class="singer_info">
                  <h4 class="singer_name" >张惠妹</h4>
                  <p class="singer_place">台湾歌手张惠妹</p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62" alt="">
                <div class="singer_info">
                  <h4 class="singer_name" >Fine乐团</h4>
                  <p class="singer_place">网易音乐人</p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62" alt="">
                <div class="singer_info">
                  <h4 class="singer_name" >萬曉利</h4>
                  <p class="singer_place">网易音乐人 </p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62" alt="">
                <div class="singer_info">
                  <h4 class="singer_name" >音乐人赵雷</h4>
                  <p class="singer_place">民谣歌手</p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62" alt="">
                <div class="singer_info">
                  <h4 class="singer_name" >王三博</h4>
                  <p class="singer_place">音乐人</p>
                </div>
              </li>
            </ul>
            <div class="btn_music">
              <button><span>申请成为网易音乐人</span></button>
            </div>
          </div>
<!--          热门主播-->
          <div class="n-dj">
            <h3 class="v-hd3">热门主播</h3>
            <ul>
              <li>
                <img src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="">
                <div class="zhubo_info">
                  <a href="#">陈立</a>
                  <p>心理学家、美食家陈立教授</p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" alt="">
                <div class="zhubo_info">
                  <a href="#">DJ艳秋</a>
                  <p>著名音乐节目主持人</p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" alt="">
                <div class="zhubo_info">
                  <a href="#">国家大剧院古典音乐频道</a>
                  <p>国家大剧院古典音乐官方</p>
                </div>
              </li>
              <li>
                <img src="http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" alt="">
                <div class="zhubo_info">
                  <a href="#">谢谢收听</a>
                  <p>南京电台主持人王馨</p>
                </div>
              </li>
              <li>
                <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="">
                <div class="zhubo_info">
                  <a href="#">陈立</a>
                  <p>独立DJ，CRI环球旅游广播特邀DJ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    // 轮播图数据
      Rotation: [],
      warpsImg: [],
      hot_list: [],
      // 新碟上架列表
      newest: [],
      // 榜单列表
      bangDan_list: [],
      song_list1: [],
      song_list2: [],
      song_list3: []
    }
  },
  computed: {
    ...mapState(['play_songs_list', 'MusicList'])
  },
  created () {
    this.getRotation()
    // 获取热门推荐
    this.getHotList()
    this.getNewon()
    this.getBangDanList()
    this.get_song_list1()
    this.get_song_list2()
    this.get_song_list3()
  },
  methods: {
    ...mapMutations(['set_getMusicList']),
    // 获取轮播图数据
    async getRotation () {
      const { data: res } = await this.$http.get('banner')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取轮播图失败！')
      }
      this.Rotation = res.banners
      // console.log(this.Rotation)
      this.backImg(0)
    },
    // 图片背景
    backImg (index) {
      this.warpsImg = this.Rotation[index]
      // console.log(this.warpsImg)
    },
    // 热门推荐
    async getHotList () {
      const { data: res } = await this.$http.get('personalized?limit=8')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取热门推荐列表失败！')
      }
      this.hot_list = res.result
    },
    //  获取新碟上架
    async getNewon () {
      const { data: res } = await this.$http.get('album/newest')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取新碟上架列表失败！')
      }
      this.newest = res.albums
    },
    // 获取榜单列表
    async getBangDanList () {
      const { data: res } = await this.$http.get('toplist/detail')
      // console.log(res.list[0].tracks)
      if (res.code !== 200) {
        return this.$message.error('获取新碟上架列表失败！')
      }
      this.new_on_list = res.list[2].tracks
    },
    //  获取云音乐歌单中的歌曲列表
    async get_song_list1 () {
      const { data: res } = await this.$http.get('playlist/detail?id=19723756')
      // console.log(res.playlist.tracks)
      if (res.code !== 200) {
        return this.$message.error('获取新碟上架列表失败！')
      }
      this.song_list1 = res.playlist.tracks
    },
    async get_song_list2 () {
      const { data: res } = await this.$http.get('playlist/detail?id=3779629')
      // console.log(res.playlist.tracks)
      if (res.code !== 200) {
        return this.$message.error('获取新碟上架列表失败！')
      }
      this.song_list2 = res.playlist.tracks
    },
    async get_song_list3 () {
      const { data: res } = await this.$http.get('playlist/detail?id=2884035')
      // console.log(res.playlist.tracks)
      if (res.code !== 200) {
        return this.$message.error('获取新碟上架列表失败！')
      }
      this.song_list3 = res.playlist.tracks
    },
    async getMusicList (id) {
      const { data: res } = await this.$http('/playlist/detail', {
        params: {
          id: id
        }
      })
      if (res.code === 200) {
        this.set_getMusicList(res.playlist.tracks)
        // console.log(this.play_songs_list)
      } else {
        this.$message.error('获取失败')
      }
      // console.log(this.getMusicLists)
      // if (res.code === 200) {
      //   this.getMusicLists = res.
      // }
    }
  }
}
</script>
<style lang="less" >
.bg{
    height: 283px;
    width: 100%;
}
.bg .location{
  position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
}
.bg .location .block{
    width: 730px;
}
.el-carousel{
  overflow: hidden;
}
.el-carousel__item img {
    height: 283px;
    margin: 0;
  }
.el-carousel__indicators{
    width: 730px;
    height: 20px;
    text-align: center;
  }

// 下载
.bg .location .download{
    position: absolute;
    top: 0;
    z-index: 20;
    right: -1px;
    width: 254px;
    height: 285px;
    background: url(https://s2.music.126.net/style/web2/img/index/download.png);
}
.bg .location .download .btn{
   display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background-position: 0 9999px;
    text-indent: -9999px;
}
.bg .location .download p{
  width: 254px;
  height: 16px;
text-align: center;
color: #8d8d8d;
font-size: 12px;
}
.bg .location .el-carousel__button{
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-top: -5px;
}

// 中间部分
.contre{
  position: relative;
  width: 980px;
  /*height: 1200px;*/
  margin: 0 auto;
  border:1px solid #d3d3d3;
  border-width: 0 1px;
  /*background-color: wheat;*/
  .contre_left{
    width: 689px;
    /*height: 1200px;*/
    padding:20px 20px 40px;
    border:1px solid #d3d3d3;
    /*热门推荐index.png*/
    .hot{
      width: 700px;
      height: 523px;
      /*background-color: coral;*/
      .hot_title{
        height: 33px;
        padding: 0 10px 0 34px;
        border-bottom: 2px solid #c10d0c;
        /*background-image: url('https://s2.music.126.net/style/web2/img/index/index.png') ;*/
        background-position: -225px -156px;
        .hot_title_word{
          color: #333;
          float: left;
          font-size: 20px;
          font-weight: normal;
          line-height: 28px;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
        .tab{
          float: left;
          margin: 7px 0 0 20px;
          .line{
            margin: 0 10px;color:#ccc;
          }
          .s-fc3{
            color: #666;
          }
        }
        .more{
          float: right;
          margin-top: 9px;
          a{
            color:black;
          }
          .s-bg-6{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            vertical-align: middle;
          }

        }
      }
    }
      }
/*  热门推荐下的音乐模块*/
/*  右侧小箭头*/
  .s-bg-6{
    background-position: 0 -240px;
    background-image: url(https://s2.music.126.net/style/web2/img/index/index.png);
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
  }
  /*标题前红色圆圈*/
  .red_circle{
    background: url('https://s2.music.126.net/style/web2/img/index/index.png') no-repeat 0 9999px;
  }
  .el-row{
    height: 500px;
    /*background-color: red;*/
    margin-top: 20px;
    margin-right: 10px;
    font-size: 14px;
  }
  .el-row .el-col{
    margin-top: 10px;
    height: 217px;
    /*background-color: black;*/
  }
  .el-row .el-col p{
    margin-top: 2px;
    cursor: pointer;
  }
  .el-row .el-col p:hover{
    text-decoration: underline;
  }
  .hot_img{
    width: 140px;
    height: 140px;
    margin-right: 30px;
    cursor: pointer;
  }
  /*模块标题  热门推荐 新碟上架*/
  .new_on{
    width: 689px;
    height: 243px;
    .new_on_imgs{
      width: 645px;
      height: 180px;
      background-color:#f5f5f5;
      margin: 15px auto;
      ul,li{
        float: left;
        margin: 20px auto;
      }
      li{
        width: 118px;
        height: 150px;
        background-position: -260px 100px;
        a{
          color:#000;
          font-size: 12px;
        }
      }
      .s-fc3{
        margin-top: -20px;
      }
      .n-disk li {
        /*background: url('https://s2.music.126.net/style/web2/img/index/index.png') no-repeat 0 9999px;*/
      }
      .n-disk p {
        width: 90%;
        line-height: 18px;
        /*color:red !important;*/
      }
      .f-thide {
        margin-top: -10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .u-cover-alb1 .msk {
        width: 118px;
        height: 100px;
        background-position: 0 -570px;
      }
    }
  }
  .hot_title1{
    box-sizing: border-box;
    width: 100%;
    height: 33px;
    padding: 0 10px 0 34px;
    /*background-image: url('') ;*/
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    /*小标题的样式*/
    .title_s{
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      color : black;
    }
    a{
      color:black;
    }
  }
/*  榜单*/
  .toplist{
    width: 690px;
    height: 527px;
    /*background-color: green;*/
    .list_area{
      height: 472px;
      margin: 10px auto;
      /*background-color: red;*/
      background: url('https://s2.music.126.net/style/web2/img/index/index_bill.png') no-repeat;
      .blk {
        float: left;
        width: 230px;
      }
      .b_head {
        height: 100px;
        padding: 20px 0 0 19px;
        h3{
          color:#000000;
        }
        img{
          float: left;
        }
      }
      .song_list{
        width: 230px;
        height: 352px;
        .more {
          clear: both;
          height: 32px;
          margin-right: 32px;
          text-align: right;
          line-height: 32px;
          /*background-color: red;*/
         a{
           color:#000000;
         }
        }
      }
      .tit {
        float: left;
        width: 116px;
        margin: 6px 0 0 10px;
      }
      .btn {
        margin-top: 10px;
      }
      .btn a {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px;
      }
      .s-bg-9 {
        background-position: -267px -205px;
        background-image: url('https://s2.music.126.net/style/web2/img/index/index.png') ;
      }
      .s-bg-10 {
        background-position: -300px -205px;
        background-image: url('https://s2.music.126.net/style/web2/img/index/index.png') ;
      }
      ol {
        height: 319px;
        height: 180px;
        /*margin-left: 50px;*/
        margin-top: 0px;
        line-height: 32px;
        /*background-color: lightgrey;*/
        .no {
          float: left;
          position: relative;
          width: 35px;
          height: 32px;
          margin-left: -35px;
          text-align: center;
          color: #666;
          font-size: 16px;
        }
        .oper {
          display: none;
          float: right;
          width: 82px;
          margin-top: 7px;
          /*background-color: red;*/
        }
        .oper .u-icn-81 {
          margin: 2px 6px 0 0;
        }
        .oper a {
          float: left;
          width: 17px;
          height: 17px;
          margin-right: 10px;
        }
        .s-bg-11 {
          background-position: -267px -268px;
          background-image: url('https://s2.music.126.net/style/web2/img/index/index.png') ;
        }
        .s-bg-12 {
          background-position: -297px -268px;
          background-image: url('https://s2.music.126.net/style/web2/img/index/index.png') ;
        }
        .u-icn, .u-icn2, .u-icn3 {
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
        }
        .u-icn, .u-title-1 .out .icon {
          background: url('https://s2.music.126.net/style/web2/img/icon.png') no-repeat 0 9999px;
        }
        .u-icn-81 {
          width: 13px;
          height: 13px;
          background-position: 0 -700px;
        }
      }
      ol li {
        list-style: none;
        width: 180px;
        height: 32px;
        /*background-color: lightgrey;*/
        a{
          color:#000000;
        }
        .f-thide {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
      ol li:hover .oper{
        display: block;
      }
    }
  }
/*  右侧 栏目*/
  .contre_right{
    position: absolute;
    top:0;
    right: 0;
    width: 250px;
    height: 920px;
    /*background-color: red;*/
    margin: 0 auto;
    .loin_in{
      width: 100%;
      height: 126px;
      /*background-color: snow;*/
      background-position: 0 0;
      background-image: url(https://s2.music.126.net/style/web2/img/index/index.png) ;
      p{
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        font-size:12px;
        font-family: Arial, Helvetica, sans-serif;
      }
      /*登录按钮*/
      .btn{
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        margin: 0 auto;
        cursor: pointer;
        font-size: 12px;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
        background-position: 0 -195px;
        background-image: url(https://s2.music.126.net/style/web2/img/index/index.png) ;
      }
    }
    /*  入住歌手*/
    .n-singer{
      width: 250px;
      height: 455px;
      /*background-color:cornflowerblue ;*/
      font-size: 12px;
      .s_title{
        box-sizing: border-box;
        width: 210px;
        margin: 0 auto;
        padding: 10px 20px 5px 0;
        border-bottom: 1px solid #ccc;
        a{
          /*float: right;*/
          padding-left: 70px;
          color:#666;
        }
      }
      /*歌手区域*/
      .singer_area li{
        display: block;
        width: 210px;
        height: 62px;
        cursor: pointer;
        /*background-color: red;*/
        margin-left: -20px;
        margin-top: 15px;
        .singer_info,img{
          float: left;
        }
        .singer_info{
          /*box-sizing: border-box;*/
          width: 147px;
          height: 61px;
          text-align: center;
          /*margin-top: -10px;*/
          /*background-color: black;*/
          border: 1px solid #e9e9e9;
          border-left: none;
          p,h4{
            margin-top: 5px;
          }
        }
      }
      /*申请成为音乐人的按钮*/
      .btn_music{
        height: 31px;
        /*background-color: red;*/
        button{
          display: block;
          width: 210px;
          height: 100%;
          margin: 0 auto;
          cursor: pointer;
          color: #333;
          white-space: nowrap;
          font-size: 12px;
          letter-spacing: 1px;
        }
      }
    }
    /*  热门主播*/
    .n-dj{
      width: 230px;
      height: 250px;
      margin: 20px auto;
      /*background-color: green;*/
      ul li{
        width: 210px;
        height: 40px;
        margin-left: -25px;
      }
      /*标题*/
      .v-hd3{
        height: 23px;
        /*background-color: red;*/
        margin: 0 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
        font-size: 12px;
      }
      .zhubo_info,img{
        float: left;
      }
      .zhubo_info{
        width: 160px;
        height: 43px;
        margin-left: 10px;
        /*background-color: red;*/
        font-size: 12px;
        a{
          color:#000;
        }
        p{
          margin-top: 7px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
  }
}
</style>
