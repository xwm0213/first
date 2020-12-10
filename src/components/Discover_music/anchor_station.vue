//主播电台
<template>
    <div class="big_area">
      <div class="header">
        <ul>
          <li>
            <a href="/discover/djradio/category?id=3">
              <div class="icon" style="background-image:url(http://p3.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg);"></div>
              <em>情感调频</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=2">
              <div class="icon" style="background-image:url(http://p4.music.126.net/fWonYYR8sORR2mEKZfYqjQ==/109951165406418703.jpg);"></div>
              <em>音乐故事</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=3001">
              <div class="icon" style="background-image:url(http://p3.music.126.net/pBodB8v8tbQxsoC1UCZfEw==/109951165406412456.jpg);"></div>
              <em>声音恋人</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=2001">
              <div class="icon" style="background-image:url(http://p4.music.126.net/GqeTI3A_g4FFzm_4MoNSsQ==/109951165406411412.jpg);"></div>
              <em>创作翻唱</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=10001">
              <div class="icon" style="background-image:url(http://p3.music.126.net/nEQJH0QRoLbcHho11tsQrw==/109951165406409464.jpg);"></div>
              <em>声之剧场</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=8">
              <div class="icon" style="background-image:url(http://p4.music.126.net/LIkzDiW_ktaSbk_s6MgMkg==/109951165406441809.jpg);"></div>
              <em>脱口秀</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=5">
              <div class="icon" style="background-image:url(http://p4.music.126.net/DzeP-S6FMZYzjwppwY3-Jw==/109951165406417278.jpg);"></div>
              <em>侃侃而谈</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=10002">
              <div class="icon" style="background-image:url(http://p3.music.126.net/3qyLawhgmTyHNabhuaKYTg==/109951165406422635.jpg);"></div>
              <em>电音趴</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=6">
              <div class="icon" style="background-image:url(http://p3.music.126.net/RgtBB0IPWuzAK5KMKEFCgg==/109951165406425027.jpg);"></div>
              <em>助眠解压</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=14">
              <div class="icon" style="background-image:url(http://p4.music.126.net/VrBtcrNXRb6lIogyGLtfkQ==/109951165406414913.jpg);"></div>
              <em>你好爱豆</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=13">
              <div class="icon" style="background-image:url(http://p4.music.126.net/CPvQ2tG9oV1FngMOYyyziA==/109951165406424089.jpg);"></div>
              <em>铃声</em>
            </a>
          </li>
          <li>
            <a href="/discover/djradio/category?id=11">
              <div class="icon" style="background-image:url(http://p3.music.126.net/ULDTiR13aSOEzB3RBh7NdQ==/109951165406416867.jpg);"></div>
              <em>其他</em>
            </a>
          </li>
          <li>
            <a href="#/topic?id=18652232" target="_blank">
              <div class="icon" style="background-image:url(https://s2.music.126.net/style/web2/img/index_radio/radio_faq.png);"></div>
              <em>常见问题</em>
            </a>
          </li>
          <li class="apply">
            <a id="j-djradio-entry" href="/st/radioweb/apply" target="_blank">
              <div class="icon" style="background-image:url(https://s2.music.126.net/style/web2/img/index_radio/radio_apply.png);"></div>
              <em>我要做主播</em>
            </a>
          </li>
        </ul>
      </div>
<!--      推荐节目和节目排行榜-->
      <div class="two_sta">
        <div class="left">
          <div class="hot_title">
            <h3 class="f-ff2"><a href="#">推荐节目</a></h3>
            <a href="#"><span class="more s-fc3">更多 ></span></a>
          </div>
          <ul class="list_ul">
            <li class="list_li" v-for="(item,index) in recommend_list" :key="index">
              <a href="#" class="s_img">
                <img :src="item.radio.picUrl" alt="" style="width: 40px;height: 40px;">
                <i class="play"></i>
              </a>
              <div class="font_area">
                <h3><a href="#">{{item.name}}</a></h3>
                <p><a href="#">{{item.radio.name}}</a></p>
              </div>
              <a href="#" class="u-type">{{item.radio.category}}</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="hot_title">
            <h3 class="f-ff2"><a href="#">节目排行榜</a></h3>
            <a href="#"><span class="more s-fc3" style="margin-left: 249px">更多 ></span></a>
          </div>
          <ul class="list_ul">
            <li class="list_li" v-for="(item,index) in recommend_list" :key="index">
              <a href="#" class="s_img">
                <img :src="item.radio.picUrl" alt="" style="width: 40px;height: 40px;">
                <i class="play" ></i>
              </a>
              <div class="font_area">
                <h3><a href="#">{{item.name}}</a></h3>
                <p><a href="#">{{item.radio.name}}</a></p>
              </div>
              <a href="#" class="u-type">{{item.radio.category}}</a>
            </li>
          </ul>
        </div>
      </div>
<!-- 各个电台的div-->
      <div class="music_story">
        <div class="hot_title">
          <h3 class="f-ff2"><a href="#">音乐故事<span class="f-ff1">·</span>电台</a></h3>
          <a href="#"><span class="more s-fc3" style="margin-left: 685px">更多 ></span></a>
        </div>
        <ul class="info_area">
          <li v-for="(item,index) in music_story.slice(0,4)" :key="index" >
            <a href="" class="img_a"><img :src="item.picUrl" alt=""></a>
            <div class="font-info" >
              <h3>{{item.name}}</h3>
              <p>{{item.rcmdtext}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sleep">
        <div class="hot_title">
          <h3 class="f-ff2"><a href="#">助眠解压<span class="f-ff1">·</span>电台</a></h3>
          <a href="#"><span class="more s-fc3" style="margin-left: 685px">更多 ></span></a>
        </div>
        <ul class="info_area">
          <li v-for="(item,index) in sleep_list.slice(0,4)" :key="index" >
            <a href="" class="img_a"><img :src="item.picUrl" alt=""></a>
            <div class="font-info" >
              <h3>{{item.name}}</h3>
              <p>{{item.rcmdtext}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="talk">
        <div class="hot_title">
          <h3 class="f-ff2"><a href="#">侃侃而谈<span class="f-ff1">·</span>电台</a></h3>
          <a href="#"><span class="more s-fc3" style="margin-left: 685px">更多 ></span></a>
        </div>
        <ul class="info_area">
          <li v-for="(item,index) in talk_list.slice(0,4)" :key="index" >
            <a href="" class="img_a"><img :src="item.picUrl" alt=""></a>
            <div class="font-info" >
              <h3>{{item.name}}</h3>
              <p>{{item.rcmdtext}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="feeling">
        <div class="hot_title">
          <h3 class="f-ff2"><a href="#">情感调频<span class="f-ff1">·</span>电台</a></h3>
          <a href="#"><span class="more s-fc3" style="margin-left: 685px">更多 ></span></a>
        </div>
        <ul class="info_area">
          <li v-for="(item,index) in feeling_list.slice(0,4)" :key="index" >
            <a href="" class="img_a"><img :src="item.picUrl" alt=""></a>
            <div class="font-info" >
              <h3>{{item.name}}</h3>
              <p>{{item.rcmdtext}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sing">
        <div class="hot_title">
          <h3 class="f-ff2"><a href="#">创作翻唱<span class="f-ff1">·</span>电台</a></h3>
          <a href="#"><span class="more s-fc3" style="margin-left: 685px">更多 ></span></a>
        </div>
        <ul class="info_area">
          <li v-for="(item,index) in sing_list.slice(0,4)" :key="index" >
            <a href="" class="img_a"><img :src="item.picUrl" alt=""></a>
            <div class="font-info" >
              <h3>{{item.name}}</h3>
              <p>{{item.rcmdtext}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="other">
        <div class="hot_title">
          <h3 class="f-ff2"><a href="#">其他<span class="f-ff1">·</span>电台</a></h3>
          <a href="#"><span class="more s-fc3" style="margin-left: 685px">更多 ></span></a>
        </div>
        <ul class="info_area">
          <li v-for="(item,index) in other_list.slice(0,4)" :key="index" >
            <a href="" class="img_a"><img :src="item.picUrl" alt=""></a>
            <div class="font-info" >
              <h3>{{item.name}}</h3>
              <p>{{item.rcmdtext}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      // 推荐节目列表
      recommend_list: [],
      // 音乐故事列表
      music_story: [],
      //  助眠列表
      sleep_list: [],
      //  侃侃而谈列表
      talk_list: [],
      //  情感调频列表
      feeling_list: [],
      // 创作翻唱
      sing_list: [],
      //  其他列表
      other_list: []
    }
  },
  created () {
    this.get_recommend_list()
    this.get_music_story()
    this.get_sleep_list()
    this.get_talk_list()
    this.get_feeling_list()
    this.get_sing_list()
    this.get_other_list()
  },
  methods: {
  //  获取推荐节目
    async get_recommend_list () {
      const { data: res } = await this.$http.get('/program/recommend')
      if (res.code !== 200) {
        return this.$message.error('获取推荐节目列表失败！')
      }
      this.recommend_list = res.programs
    },
    // 获取音乐故事列表
    async get_music_story () {
      const { data: res } = await this.$http.get('/dj/recommend/type?type=2')
      console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取音乐故事列表失败！')
      }
      this.music_story = res.djRadios
    },
    async get_sleep_list () {
      const { data: res } = await this.$http.get('/dj/recommend/type?type=6')
      console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取助眠解压列表失败！')
      }
      this.sleep_list = res.djRadios
    },
    async get_talk_list () {
      const { data: res } = await this.$http.get('/dj/recommend/type?type=5')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取助眠解压列表失败！')
      }
      this.talk_list = res.djRadios
    },
    async get_feeling_list () {
      const { data: res } = await this.$http.get('/dj/recommend/type?type=3')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取助眠解压列表失败！')
      }
      this.feeling_list = res.djRadios
    },
    async get_sing_list () {
      const { data: res } = await this.$http.get('/dj/recommend/type?type=2001')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取翻唱解压列表失败！')
      }
      this.sing_list = res.djRadios
    },
    async get_other_list () {
      const { data: res } = await this.$http.get('/dj/recommend/type?type=11')
      // console.log(res)
      if (res.code !== 200) {
        return this.$message.error('获取其他列表失败！')
      }
      this.other_list = res.djRadios
    }
  }
}
</script>
<style lang="less" scoped>
  .big_area{
    width: 980px;
    height: auto;
    margin: 0 auto;
    /*background-color: lightpink;*/
    border:1px solid #d3d3d3;
    em, i {
      font-style: normal;
      text-align: left;
      font-size: inherit;
    }
    .header {
      width: 900px;
      /*background-color: red;*/
      height: 200px;
      margin: 40px auto;
      /*border: 1px solid red;*/
      ul li{
        float: left;
        margin: 0 0 25px 33px;
        a:hover{
          background-repeat: repeat;
        }
    }
       ul li a{
        display: block;
        width: 70px;
        height: 70px;
        /*background-color: red;*/
        background-position: 0 9999px;
        background-image: url('https://s2.music.126.net/style/web2/img/index_radio/radio_bg.png');
        background-repeat: no-repeat;
        text-align: center;
        color: #888;
      }

      /*  图标 */

      .icon {
        width: 48px;
        height: 48px;
        margin: 2px auto 0;
        background-position: 0 0;
      }
    }
  /*  推荐节目和节目排行榜*/
    .two_sta{
      width: 900px;
      height: 643px;
      margin: 0 auto;
      /*border: 1px solid red;*/
      .left,.right{
        width: 426px;
        height: 643px;
        margin-top: -40px;
      }
      .hot_title{
        height: 40px;
        margin: 40px auto;
        width: 406px;
        /*margin-left: 20px;*/
        box-sizing: border-box;
        border-bottom: 2px solid #c20c0c;
        a:hover{
          text-decoration: underline;
        }
      }
      .hot_title h3 {
        /*float: left;*/
        display: inline;
        font-weight: normal;
        a{
          font-size: 24px;
          color:#333;
        }
      }
      .hot_title .more {
        margin-left: 270px;
        /*margin-top: 14px;*/
        font-size: 12px;
        color:#666;
      }
      /*.hot_title .more,h3 a:hover{text-decoration: underline}*/
      .left{
        float: left;
        /*background-color: indianred;*/
      }
        /*播放小图标*/
      .play{
        position: absolute;
         display: none;
        _display: block;
        width: 22px;
        height: 22px;
        top: 38%;
        left: 50%;
        overflow: hidden;
        margin: -11px 0 0 -11px;
        background-position: 0 -85px;
        background-image: url("https://s2.music.126.net/style/web2/img/iconall.png");
      }
      .s_img:hover .play{
        display: block;
      }
      .list_ul{
          /*height: 600px;*/
          /*margin: 0;*/
          padding: 0;
          border: 1px solid #e2e2e2;
          border-top: none;
          margin-top: -38px;
          /*background-color: red;*/
          a{
            color:#333;
          }
          .list_li{
            clear: both;
            float: left;
            width: 424px;
            height: 40px;
            /*position: relative;*/
            padding: 10px 0;
            /*background-color: red;*/
            line-height: 40px;
            .list_li:hover{
              background-color: #ccc;
            }
            .s_img{
              float: left;
              position: relative;
              display: block;
              margin-left: 20px;
            }
          }
          .font_area{
            /*background-color: black;*/
            width: 254px;
            height: 40px;
            margin: 1px 0 0 68px;
            line-height: 20px;
            a:hover{
              text-decoration: underline;
            }
            h3,p{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
            p a{
              color: #999;
            }
          }
          .u-type{
            display: inline-block;
            position: relative;
            top: -41px;
            left: 277px;
            height: 16px;
            overflow: hidden;
            padding: 0 6px;
            border: 1px solid #999;
            line-height: 16px;
            *line-height: 18px;
            color: #999;
            vertical-align: middle;
            font-size: 12px;
          }
        }
      .right{
        float: right;
        /*background-color: greenyellow;*/
      }
    }
  /*  音乐故事模块*/
    .music_story,
    .sleep,
    .talk,
    .feeling,
    .sing,
    .other{
      width: 900px;
      height: 396px;
      margin: 20px auto;
      /*border: 1px solid red;*/
    }
    .music_story .hot_title,
    .talk .hot_title,
    .sleep .hot_title,
    .feeling .hot_title,
    .sing .hot_title,
    .other .hot_title{
      height: 40px;
      border-bottom: 2px solid #c20c0c;
      h3{
        display: inline;
      }
      a{
        color:#000000;
      }
      .f-ff2 a{
        font-size: 24px;
        font-weight: normal;
      }
      /*.f-ff2 a:hover{*/
      /*  text-decoration: underline;*/
      /*}*/
      /*黑点*/
      .f-ff1{
        font-family: simsun,\5b8b\4f53;
      }
    }
    .img_a{
      float: left;
      display: inline-block;
      width: 120px;
      height: 120px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .info_area{
      /*float: left;*/
      /*padding-left: 10px;*/
      width: 930px;
      height: 322px;
      /*position: relative;*/
    }
    .info_area li{
      float: left;
      width: 435px;
      height: 120px;
      /*margin-left: 30px;*/
      _margin-left: 15px;
      padding: 20px 0;
      border-bottom: 1px solid #e7e7e7;
    }
    .font-info{
      padding-left: 20px;
      width: 295px;
      height: 64px;
      display: inline-block;
      /*background-color: #ccc;*/
      h3{
        margin: 16px 0 20px;
        font-size: 18px;
      }
      p{
        margin-bottom: 6px;
        line-height: 20px;
        color: #999;
        font-size: 12px;
      }
    }
  }
</style>
