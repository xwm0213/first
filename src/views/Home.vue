<template>
  <el-container>
<!--    播放器区域-->
    <div class="play_area">
      <div class="play_in">
        <div class="btn_area">
          <a href="javascript:;" hidefocus="true" data-action="prev" class="prv" title="上一首(ctrl+←)"></a>
<!--          ply j-flag pas-->
          <a href="javascript:;" hidefocus="true" data-action="pause" class="ply j-flag" title="播放/暂停(p)" @click="change_btn($event)" ></a>
          <a href="javascript:;" hidefocus="true" data-action="next" class="nxt" title="下一首(ctrl+→)"></a>
        </div>
        <div class="head j-flag">
          <img :src="songInfoList.al.picUrl" style="width: 34px;height: 34px;">
          <a href="/song?id=1481164987" hidefocus="true" class="mask"></a>
        </div>
        <div class="play">
<!--          播放音频-->
          <audio id="myAudio"
                 :src="music_url"
                 hidden
                 controls>
          </audio>
          <div class="j-flag words">
            <a hidefocus="true" href="/song?id=1498342485" class="f-thide name fc1 f-fl" :title="songInfoList.name">{{songInfoList.name}}</a>
            <span class="by f-thide f-fl"><span >
<!--              <a class="" href="/artist?id=5781" hidefocus="true">薛之谦</a>/-->
              <a class="" href="/artist?id=12479356" hidefocus="true">{{songInfoList.ar[0].name}}</a></span>
            </span><a href="#" class="src"></a>
          </div>
<!--          播放器进度条-->
          <div class="block">
            <el-slider :show-tooltip="false" v-model="value1" @change='play_time'></el-slider>
            <span class="song_times">{{curTime | format}}/{{songInfoList.dt | dateFormat}}</span>
          </div>
        </div>
        <div class="oper f-fl">
          <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏">收藏</a>
          <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a>
        </div>
        <div class="ctrl f-fl f-pr j-flag">
<!--          音量区域-->
          <div class="m-vol" v-show="isShow">
<!--            style="visibility:hidden;"-->
<!--            &lt;!&ndash; 竖着的进度条&ndash;&gt;-->
<!--            <div class="vbg j-t" ><div class="curr j-t" style="height: 0px;"></div>-->
<!--              <span class="btn f-alpha j-t" style="top: 11px;"></span>-->
<!--            </div>-->
            <div class="barbg"></div>
            <!-- :v-model="value"-->
            <el-slider
              v-model="value"
              vertical
              @change='TurnOnOrDown'
              height="113px">
            </el-slider>
          </div>
          <a href="javascript:;" hidefocus="true" data-action="volume" class="icn icn-vol" @click="toggle()"></a>
          <a href="javascript:;" hidefocus="true" data-action="mode" class="icn icn-loop" title="循环"></a>
          <span class="add f-pr" @click="toggle1()">
              <span class="tip" style="display:none;">已添加到播放列表</span>
              <a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" class="icn icn-list s-fc3">{{play_songs_list.length}}</a>
          </span>
          <div class="tip tip-1" style="display:none;">循环</div>
        </div>
      </div>
    <!--歌单列表与歌词区域-->
      <div class="songs_list_area" v-show="isShow1">
        <div class="songs_left">
          <div class="left_head">
            <h4>播放列表</h4>
            <a href="javascript:;" class="addall"><span class="ico ico-add"></span>收藏全部</a>
            <span class="line"></span>
            <a href="javascript:;" class="clear"  @click="clear_song_list"><span class="ico icn-del"></span>清除</a>
          </div>
          <div class="out_ul">
            <ul class="listbdc j-flag">
              <!-- 点击播放当前歌曲-->
              <li v-for="(item,index) in play_songs_list" :key="item.id" @click="getSongUrl(item.id),getSongInfo(item.id),getSongWords(item.id)">
                <span class="playicn ico"></span>
              <!--mv的小图标-->
                <span class="mv_icon"  v-if="play_songs_list[index].mv !== 0" @click="mv(item.mv)"></span>
<!--                -->
                <p class="song_name" @click="sss(index)">{{item.name}}</p>
                <p class="icos">
                  <i class="j-t ico ico-add" title="收藏" ></i>
                  <i class="ico ico-share" title="分享" ></i>
                  <i class="ico ico-dl" title="下载" ></i>
                  <i class="ico icn-del" title="删除" ></i>
                </p>
                <p class="singer_time">
                  <span class="singer_name f-thide">{{item.ar[0].name}}</span>
                  <span class="song_time">{{item.dt| dateFormat}}</span>
                  <i class="ico ico-src"></i>
                </p>
              </li>
            </ul>
          </div>

        </div>
        <div class="songs_right">
          <div class="right_head">
            <p class="lytit f-ff0 f-thide j-flag">{{songInfoList.name}}</p>
            <span class="close" @click="close">关闭</span>
          </div>
<!--歌词区域-->
          <div class="song_words" >
            <p v-for="(item,index) in songs_words" :key="index">{{songs_words[index]}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 顶部区域 -->
    <el-header height="70px" class="top">
      <!-- 设置居中的容器 -->
      <div class="header">
        <!-- 设置背景图标 -->
        <div class="logo"></div>
        <!-- 中间导航栏 -->
        <div class="heade-content">
          <!-- 导航栏 -->
          <el-menu
            mode="horizontal"
            background-color="#242424"
            text-color="#fff"
            active-text-color="#ffffff"
            width="520px"
            router
            @select="handleSelect"
            class="menu"
          >
            <el-menu-item index="/Discover_music"
              >发现音乐
              <div class="cor">&nbsp;</div>
            </el-menu-item>
            <el-menu-item index="/my_music"
              >我的音乐
              <div class="cor">&nbsp;</div>
            </el-menu-item>
            <el-menu-item index="/friend"
              >朋友
              <div class="cor">&nbsp;</div>
            </el-menu-item>
            <el-menu-item index="/Shopping"
              >商城
              <div class="cor">&nbsp;</div>
            </el-menu-item>
            <el-menu-item index="/musician"
              >音乐人
              <div class="cor">&nbsp;</div>
            </el-menu-item>
            <el-menu-item index="/download"
              >下载客户端
              <div class="cor">&nbsp;</div>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 右侧区域 -->
        <div class="login">
          <a href="javascript:;" >登录</a>
<!--          登录区域-->
          <div class="login_area" style="display: none;">
            <el-input v-model="input2" placeholder="请输入手机号" ></el-input>
            <el-input v-model="input1" placeholder="请输入密码" type="password"></el-input>
          </div>
        </div>
        <el-button type="info" size="small" round class="btn"
          >创造者中心</el-button
        >
        <el-input
          v-model="input"
          placeholder="音乐/视频/电台/用户"
          class="myinput"
          size="small"
        ></el-input>
      </div>
    </el-header>
    <div class="g_nav"></div>
    <!-- 中间部分 -->
    <el-main class="main">
      <!-- 路由占位符 -->
      <router-view></router-view>
    </el-main>
    <!-- 底部地区 -->
    <el-footer height="200px">
      <div class="fo">
        <div class="f-left">
          <div class="copy">
            <p class="link" id="music-link">
              <a
                href="//st.music.163.com/official-terms/service"
                target="_blank"
                class="item s-fc4"
              >服务条款</a
              ><span class="line">|</span>
              <a
                href="//st.music.163.com/official-terms/privacy"
                target="_blank"
                class="item s-fc4"
              >隐私政策</a
              ><span class="line">|</span>
              <a
                href="//st.music.163.com/official-terms/children"
                target="_blank"
                class="item s-fc4"
              >儿童隐私政策</a
              ><span class="line">|</span>
              <a
                href="//music.163.com/st/staticdeal/complaints.html"
                target="_blank"
                class="item s-fc4"
              >版权投诉指引</a
              ><span class="line">|</span>
              <a
                id="g_feedback"
                href="#"
                class="item s-fc4"
                onclick="nm.x.feedback();return false;"
                hidefocus="true"
              >意见反馈</a
              >
              <span class="line">|</span><a class="s-fc4"></a>
            </p>
            <p class="right s-fc3">
            <span class="sep span">网易公司版权所有©1997-2020</span
            ><span class="span">杭州乐读科技有限公司运营：</span
            ><a
              href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              target="_blank"
              class="alink s-fc3"
            >浙网文[2018]3506-263号</a
            >
            </p>
            <p class="contact s-fc3">
              <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
              <span class="span">举报邮箱：</span
              ><a class="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
            <p class="right s-fc3">
            <span class="sep span">粤B2-20090191-18</span
            ><a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noopener noreferrer"
              target="_blank"
              class="alink s-fc3"
            >工业和信息化部备案管理系统网站</a
            >
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                rel="noopener noreferrer"
                target="_blank"
                class="alink s-fc3 police-link"
              >
                <span class="police-logo"></span>
                <span class="police-text">浙公网安备 33010902002564号</span>
              </a>
            </p>
          </div>
        </div>
        <div class="f-right">
          <ul class="f-r-ul">
            <li class="unit">
              <a
                class="logo-amped"
                href="https://web-amped.music.163.com/"
                target="_blank"
              ></a>
              <span class="tt-amped"></span>
            </li>
            <li class="unit">
              <a
                class="logo-auth"
                href="//music.163.com/st/userbasic#/auth"
                target="_blank"
              ></a>
              <span class="tt-auth"></span>
            </li>
            <li class="unit">
              <a
                class="logo-musician"
                href="//music.163.com/musician/artist"
                target="_blank"
              ></a>
              <span class="tt-musician"></span>
            </li>
            <li class="unit">
              <a
                class="logo-reward"
                href="//music.163.com/web/reward"
                target="_blank"
              ></a>
              <span class="tt-reward"></span>
            </li>
            <li class="unit">
              <a
                class="logo-cash"
                href="//music.163.com/uservideo#/plan"
                target="_blank"
              ></a>
              <span class="tt-cash"></span>
            </li>
          </ul>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // 导航栏
      activeIndex: '1',
      /* 搜索框数据 */
      input: '',
      index: 1,
      isShow: false,
      isShow1: false,
      songUrl: '',
      // songInfoList: [],
      value: 100,
      value1: 0,
      isStore: true,
      curTime: 0,
      isHaveMv: false,
      input1: '',
      input2: ''
    }
  },
  computed: {
    // 引入公共的数据
    ...mapState(['songs_words', 'play_songs_list', 'music_url', 'songInfoList', 'mv_url', 'mv_info', 'MusicList'])
  //  , 'songInfoList'
  },
  mounted () {
    // if(this.play_songs_list !== ''){
    // }
    this.getSongUrl(1483488153)
    this.getSongInfo(1483488153)
    this.getSongWords(1483488153)
  },
  created () {
  },
  methods: {
    ...mapMutations(['set_songs_words', 'set_songInfoList', 'set_music_url', 'set_mv_url', 'set_mv_info', 'set_getMusicList']),
    sss (index) {
      console.log(this.play_songs_list[index].mv)
    },
    //  获取mv的url地址
    async get_mv_url (id) {
      // console.log(id)
      const { data: res } = await this.$http.get('mv/url', {
        params: {
          id: id
        }
      })
      if (res.code !== 200) {
        return this.$message.error('获取mvurl列表失败！')
      }
      this.set_mv_url(res.data.url)
      var myVideo = document.getElementById('myVideo')
      myVideo.load()
    },
    // 获取mv的信息
    async get_mv_info (mvid) {
      // console.log(id)
      const { data: res } = await this.$http.get('mv/detail', {
        params: {
          mvid: mvid
        }
      })
      if (res.code !== 200) {
        return this.$message.error('获取mvurl列表失败！')
      }
      this.set_mv_info(res.data)
    },
    // 跳转到mv的路由组件
    mv (id) {
      this.$router.push('/mv?id=' + id)
      this.get_mv_url(id)
      this.get_mv_info(id)
      console.log(this.mv_url)
      // console.log(id)
      // console.log(this.mv_url)
      // console.log(this.mv_info)
      // console.log(id)
    },
    // 导航栏
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    // 调节音量
    TurnOnOrDown () {
      var myAudio = document.getElementById('myAudio')
      var number = (this.value) / 100
      myAudio.volume = number
      // console.log(myAudio.volume)
      // console.log(this.value)
    },
    // 点击切换播放和暂停
    change_btn (e) {
      // this.getSongUrl(1483488153)
      var myAudio = document.getElementById('myAudio')
      console.log(myAudio.paused)
      console.log(e.target.className !== 'pas j-flag')
      if (myAudio.paused && e.target.className !== 'pas j-flag') {
        e.target.className = 'pas j-flag'
        myAudio.play()
        const timer = setInterval(() => {
          const numbers = myAudio.currentTime / myAudio.duration
          const perNumber = (numbers * 100).toFixed(2)
          if (perNumber >= 100) {
            this.isStore = true
            this.value1 = 0
            clearInterval(timer)
            e.target.className = 'ply j-flag'
          }
          this.value1 = Number(perNumber)
          this.curTime = myAudio.currentTime
          // console.log(this.curTime)
        }, 1000)
      } else {
        e.target.className = 'ply j-flag'
        myAudio.pause()
      }
    },
    //  点击显示与隐藏音量区域
    toggle () {
      this.isShow = !this.isShow
    },
    toggle1 () {
      this.isShow1 = !this.isShow1
    },
    close () {
      this.isShow1 = false
    },
    // 清除播放列表
    clear_song_list () {
      this.set_getMusicList([])
    },
    // 拖动音乐进度条触发的事件
    play_time () {
      const myAudio = document.getElementById('myAudio')
      myAudio.currentTime = (this.value1 / 100) * myAudio.duration
    },
    // 获取歌曲url
    async getSongUrl (id = 1483488153) {
      // console.log(id)
      const { data: res } = await this.$http.get('song/url', {
        params: {
          id: id
        }
      })
      if (res.code !== 200) {
        return this.$message.error('获取歌曲url列表失败！')
      }
      this.set_music_url(res.data[0].url)
      // console.log(res.data.url + '这是歌曲地址')
    },
    // 获取歌曲详情
    async getSongInfo (ids = 1483488153) {
      const { data: res } = await this.$http.get('song/detail', {
        params: {
          ids: ids
        }
      })
      // console.log(res.songs[0].ar)1483488153
      if (res.code !== 200) {
        return this.$message.error('获取歌曲详情失败！')
      }
      this.set_songInfoList(res.songs[0])
      if (res.songs[0].mv === 0) {
        this.isHaveMv = false
      } else {
        // console.log('此歌曲有mv' + res.songs[0].mv)
        this.isHaveMv = true
      }
      // console.log(res.songs)
    },
    // 获取歌曲歌词
    async getSongWords (id) {
      const { data: res } = await this.$http.get('lyric', {
        params: {
          id: id
        }
      })
      if (res.code !== 200) {
        return this.$message.error('获取歌曲详情失败！')
      }
      // this.songs_words = res.lrc.lyric
      this.set_songs_words((res.lrc.lyric).split('\n'))
      // console.log(this.songs_words)
    }

  }
}
</script>

<style lang="less" scoped>
  html{
    min-width: 980px;
  }
  .f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  /*登录区域*/
  .login_area{
    z-index: 888;
    position: absolute;
    top: 25%;
    left: 30%;
    width: 500px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.8);
    background-color:wheat;
    border-radius: 4px;
  }
  .song_words{
    margin: 0 auto;
    width: 420px;
    height: 261px;
    color: white;
    text-align: center;
    overflow-y: scroll;
  }
  /*滚动条样式*/
  .song_words::-webkit-scrollbar {
    width: 8px;
    height: 100%;
  }
  .song_words::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px white;
    background: rgba(0,0,0,0.2);
  }
  .song_words::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,255,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  /*播放器区域*/
  .play_area{
    z-index: 999;
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 53px;
    background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
    background-repeat: repeat-x;
    .icn {
      float: left;
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
      background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
    }
    .play_in{
      position: absolute;
      bottom: 0;
      left:50%;
      transform: translateX(-50%);
      margin:0 auto;
      width: 980px;
      height: 47px;
      /*background-color: red;*/
      .btn_area,.head,.play,.oper,.ctrl{
        float: left;
      }
      /*按钮区域*/
      .btn_area{
        width: 137px;
        height: 47px;
        padding: 6px 0 0 0;
        /*background-color: #ccc;*/
      }
      .btn_area .ply {
        width: 36px;
        height: 36px;
        margin-top: 0;
        background-position: 0 -204px;
      }
      .ply:hover {
        background-position: -40px -204px;
      }
      /*播放与暂停*/
      .btn_area .pas {
        width: 36px;
        height: 36px;
        margin-top: 0;
        background-position: 0 -165px;
      }
      .pas:hover {
        background-position: -40px -165px;
      }
      .btn_area .prv {
        background-position: 0 -130px;
      }
      .prv:hover {
        background-position: -30px -130px;
      }
      .btn_area .nxt {
        background-position: -80px -130px;
      }
      .nxt:hover {
        background-position: -110px -130px;
      }
      .btn_area a {
        display: block;
        float: left;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 5px;
        text-indent: -9999px;
        background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
        background-repeat: no-repeat;
      }
    }
  /*  播放图片*/
    .head {
      position: relative;
      *zoom: 1;
      margin: 6px 15px 0 0;
      /*background-color: green;*/
      img{
        width: 34px;
        height: 34px;
        border:0;
      }
      .mask {
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        width: 34px;
        height: 35px;
        background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
        background-position: 0 -80px;
      }
    }
  /*  歌曲区域*/
    .play{
      position: relative;
      top: 0;
      width: 608px;
      /*background-color: mediumpurple;*/
      .words {
        height: 28px;
        overflow: hidden;
        color: #e8e8e8;
        text-shadow: 0 1px 0 #171717;
        line-height: 28px;
        .name {
          max-width: 300px;
        }
        .fc1 {
          color: #e8e8e8;
        }
        .by {
          max-width: 220px;
          margin-left: 15px;
          color: #9b9b9b;
          a {
            color: #9b9b9b;
          }
        }
      }
    /*  进度条*/
      .block{
        margin-top: -15px;
        width: 80%;
        position: relative;
        .song_times{
          position: absolute;
          top:9px;
          right:-93px;
          font-size: 14px;
          color: #a1a1a1;
        }
      }
    }
  /* 收藏与分享 */
    .oper{
      width: 60px;
      height: 36px;
      /*background-color: bisque;*/
      .icn-add {
        background-position: -88px -163px;
      }
      .icn-add:hover {
        background-position: -88px -189px;
      }
      .icn-share {
        background-position: -114px -163px;
      }
      .icn-share:hover {
        background-position: -114px -189px;
      }
    }
    /*声音大小，循环，播放列表*/
     .ctrl {
      position: relative;
      z-index: 10;
      width: 113px;
      height: 36px;
      padding-left: 13px;
      background-position: -147px -238px;
      /* 音量区域*/
       .m-vol {
         position: absolute;
         top: -113px;
         left: 9px;
         clear: both;
         width: 32px;
         height: 113px;
         z-index: 999999;
         /*background-color: red;*/
         .barbg {
           position: absolute;
           top: 0;
           left: 2px;
           width: 32px;
           height: 113px;
           background-position: 0 -503px;
           background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
         }
         .vbg {
           padding: 4px 0;
           /*top: 7px; */
         }
         .vbg ,.curr{
           position: absolute;
           top: 11px;
           left: 14px;
           width: 4px;
           height: 93px;
         }
         .curr {
           top: auto;
           bottom: 4px;
           left: 0;
           background-position: -40px bottom;
           overflow: hidden;
           background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
         }
         .btn {
           position: absolute;
           top: 0;
           left: 13px;
           display: block;
           width: 17px;
           height: 17px;
           border-radius: 50%;
           background-position: -40px -250px;
           _background-position: 0 0;
           cursor: pointer;
           background-image: url("https://s2.music.126.net/style/web2/img/iconall.png");
         }
       }
      /*background-color: pink;*/
       .icn {
         float: left;
         width: 25px;
         height: 25px;
         /*margin: -14px 2px 0 -4px;*/
         text-indent: -9999px;
         background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
       }
       .icn-vol {
         background-position: -2px -248px;
       }
       .icn-vol:hover {
         background-position: -31px -248px;
       }
       .icn-loop {
         background-position: -3px -344px;
       }
       .icn-loop:hover {
         background-position: -33px -344px;
       }
       .add {
         float: left;
         width: 59px;
         height: 36px;
       }
        .tip {
         position: absolute;
         top: -51px;
         left: -65px;
         clear: both;
         width: 152px;
         height: 49px;
         background-position: 0 -287px;
         text-align: center;
         color: #fff;
         line-height: 37px;
          background-image: url("https://s2.music.126.net/style/web2/img/frame/playbar.png");
       }
       .icn-list {
         display: block;
         float: none;
         width: 38px;
         padding-left: 21px;
         background-position: -42px -68px;
         line-height: 27px;
         text-align: center;
         color: #666;
         text-shadow: 0 1px 0 #080707;
         text-indent: 0;
         text-decoration: none;
       }
       .icn-list:hover {
         background-position: -42px -98px;
         text-decoration: none;
       }
    }
  /*  歌单列表与歌词区域*/
    .songs_list_area{
      position: absolute;
      left: 50%;
      bottom: 47px;
      width: 986px;
      height: 301px;
      /*background-color: lightgrey;*/
      background-color: #000000;
      opacity: 0.9;
      margin-left: -493px;
      font-size: 12px;
      .ico-add {
        width: 16px;
        background-position: -24px 0;
      }
      .icn-del {
        width: 13px;
        background-position: -51px 0;
      }
      .ico-dl {
        width: 14px;
        background-position: -57px -50px;
      }
      .ico-share {
        width: 14px;
        background-position: 0 0;
      }
      .ico-src {
        width: 14px;
        /*margin-left: 0;*/
        background-position: -80px 0px;
      }
      /*播放按钮*/
      .playicn {
        /*display: none;*/
        visibility: hidden;
        margin-top: 8px !important;
        margin-left: -18px !important;
        width: 10px;
        height: 13px;
        background-position: -182px 0;
      }
      /*小图标*/
      .ico {
        float: left;
        margin: 1px 6px 0 0;
        height: 16px;
        background-image: url('https://s2.music.126.net/style/web2/img/frame/playlist.png');
        background-repeat: no-repeat;
        cursor: pointer;
      }
      .songs_left{
        /*position: relative;*/
        float: left;
        width: 553px;
        height: 301px;
        .left_head{
          height: 39px;
          border-bottom: 0.1px solid ghostwhite;
        }
        .left_head h4 {
          position: absolute;
          left: 25px;
          top: 0;
          height: 39px;
          line-height: 39px;
          font-size: 14px;
          color: #e2e2e2;
        }
        .left_head .addall {
          left: 398px;
        }
        .clear, .addall {
          width: 70px;
          position: absolute;
          left: 490px;
          top: 12px;
          height: 15px;
          line-height: 15px;
          cursor: pointer;
        }
        .left_head a {
          color: #ccc;
        }
      /*  中间的竖线*/
        .left_head .line {
          position: absolute;
          top: 13px;
          left: 477px;
          height: 15px;
          border-left: 1px solid #000;
           border-right: 1px solid #2c2c2c;
        }
        /*歌曲列表*/
        .listbdc {
          /*position: absolute;*/
          /*left: 0px;*/
          /*top: 25px;*/
          z-index: 4;
          height: 251px;
          width: 534px;
          overflow-y: scroll;
          color: #fff;
          /*background-color: red;*/
        }
          /*mv的小图标*/
        .mv_icon{
          position: absolute;
          top:6px;
          left:206px;
          display: block;
          /*控制宽度 是否显示*/
          width: 22px;
          height: 17px;
          margin: 1px 0 0 0;
          background-position: 0 -151px;
          background-image: url('https://s2.music.126.net/style/web2/img/table.png');
        }
        .mv2{
          position: absolute;
          top:6px;
          left:206px;
          display: block;
          /*控制宽度 是否显示*/
          width: 0px;
          height: 17px;
          margin: 1px 0 0 0;
          background-position: 0 -151px;
          background-image: url('https://s2.music.126.net/style/web2/img/table.png');
        }
          /*滚动条样式*/
          .listbdc::-webkit-scrollbar {
            width: 8px;
            height: 100%;
          }
          .listbdc::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px white;
            background: rgba(0,0,0,0.2);
          }
          .listbdc::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgba(0,255,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);
          }
          li{
            position: relative;
            cursor: pointer;
            /*top: 20px;*/
            left: 0;
            width: 526px;
            height: 28px;
            line-height: 28px;
            /*background-color: gainsboro;*/
            p{
              position: absolute;
              top: -12px;
              float: left;
              /*background-color: red;*/
            }
            .song_name{
              width: 206px;
              /*background-color: red;*/
            }
            .icos{
              position: absolute;
              left: 240px;
              top: -5px;
              width: 100px;
              height: 23px;
              /*background-color: red;*/
              i{
                padding-right: 2px;
              }
            }
            .singer_time{
              position: absolute;
              right:28px;
              width: 178px;
              /*background-color: wheat;*/
              span{
                padding-left: 10px;
              }
              .song_time{
                margin-left: 30px;
              }
              .ico-src{
                float: right;
                margin-top: 8px;
              }
            }
          }
          li:hover{
            background-color: darkslateblue;
            /*color:red;*/
          }
          li:hover .playicn{
            visibility: visible;
          }
        }
      .songs_right{
        float: right;
        width: 420px;
        height: 301px;
        border-left: 1px solid lightgrey;
        .right_head{
          height: 39px;
          width: 100%;
          /*background-color: #fff;*/
          border-bottom: 0.1px solid white;
        }
        .lytit {
          position: absolute;
          left: 595px;
          top: -14px;
          width: 346px;
          text-align: center;
          height: 39px;
          line-height: 39px;
          color: #fff;
          font-size: 14px;
          /*background-color: red;*/
        }
        .close {
          position: absolute;
          top: 6px;
          right: 8px;
          width: 30px;
          height: 30px;
          overflow: hidden;
          text-indent: -999px;
          cursor: pointer;
          background-position: -195px 9px;
          background-image: url('https://s2.music.126.net/style/web2/img/frame/playlist.png');
        }
      }
    }
  }
// 顶部
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
.top {
  background-color: #242424;
  margin: 0;
  border-bottom: 1px solid #000;
}
.top > .header {
  width: 1100px;
  height: 70px;
  margin: 0 auto;
}
.top > .header > .logo {
  width: 176px;
  height: 69px;
  background: url("../../public/images/topbar.png");
  float: left;
}
/*导航栏*/
.top > .header > .heade-content {
  width: 530px;
  height: 70px;
  float: left;
}
a {
  width: 66px;
  height: 70px;
}
.login,
.btn,
.input {
  float: right;
}
.menu {
  border: none !important;
  .el-menu-item {
    height: 70px;
    line-height: 70px;
    position: relative;
    .cor {
      // 小三角
      display: none;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      background: url("../../public/images/topbar.png");
      margin-left: -6px;
      overflow: hidden;
      background-position: -226px 0;
    }
  }
}
.myinput {
  width: 130px;
  height: 20px;
  background: none;
  outline: none;
  margin-top: 18px;
  font-size: 12px;
  border-radius: 20px;
}
.input {
  background-color: #fff;
  padding: 1px;
  width: 150px;
  height: 52px;
  margin-top: 15px;
  margin-left: 20px;
  border: 1px solid #242424 !important;
  border-radius: 20px;
}
.login {
  width: 50px;
  height: 45px;
  //   margin: 19px 0 0 15px;
  margin-top: 26px;
  margin-left: 15px;
  padding: 0 22px 0 0;
  font-size: 12px;
}
.login a {
  color: gray;
}
.btn {
  margin: 19px 0 0 -20px;
  font-size: 12px;
  color: #ccc;
  background-color: #242424;
  border: 1px solid #4f4f4f;
}
.btn:hover {
  background-color: #242424;
}
.main {
  margin: 0px;
  padding: 0px;
}
//红线
.g_nav {
  width: 100%;
  height: 5px;
  border-bottom: none;
  background-color: #c20c0c;
  box-sizing: border-box;
  z-index: 90;
  position: relative;
  zoom: 1;
}
/* 底部 */
.el-footer {
  font-size: 12px;
  /*overflow: hidden;*/
  padding-top: 15px;
  border-top:1px solid #d3d3d3;
  width: 100%;
  /*width: 980px !important;*/
  height: 200px;
}
.fo{
  width: 980px;
  margin: 0 auto;
}
.el-footer ul {
  list-style: none;
}

.el-footer ul li {
  float: left;
  padding: 0 7px;
  height: 70px;
}
.el-footer a {
  color: #999;
  text-decoration: none;
}

.el-footer a:hover {
  text-decoration: underline;
}

.el-footer .f-left {
  float: left;
  width: 520px;
  height: 115px;
  /* background-color: gray; */
}

.el-footer .f-left p {
  margin-top: 10px;
}

.el-footer .f-left a {
  margin-right: 10px;
}

.el-footer .f-left span {
  margin-right: 10px;
}

.el-footer .f-right {
  float: left;
  margin-top: 10px;
  width: 420px;
  height: 70px;
  text-align: center;
}

.el-footer .f-right ul li {
  width: 60px;
  height: 70px;
  margin-right: 2px;
  /* background-color: red; */
}

.el-footer .f-right ul li a {
  display: inline-block;
  width: 50px;
  height: 45px;
  /* background-color: green; */
  background-image: url("https://s2.music.126.net/style/web2/img/foot_enter_new.png");
  background-size: 110px 552px;
}

.el-footer .f-right ul li .logo-amped {
  background-position: -60px -456.5px;
}

.logo-auth {
  background-position: -61px -101px;
}

.logo-musician {
  background-position: 0 0;
}

.logo-reward {
  background-position: -60px -50px;
}

.logo-cash {
  background-position: 0 -101px;
}

.el-footer .f-right ul li span {
  display: inline-block;
  margin: 5px 5px 0;
  height: 14px;
  width: 72px;
  background-size: 180px 139px;
  background-image: url("https://s2.music.126.net/style/web2/img/foot_enter_tt.png");
  /*  */
}

.el-footer .f-right ul li .tt-amped {
  background-position: 0 -108px;
  margin-left: -6px;
}

.tt-auth {
  background-position: -1px -91px;
}

.tt-musician {
  background-position: 0 0;
}

.tt-reward {
  background-position: 0 -54px;
}

.tt-cash {
  background-position: -1px -72px;
}
</style>
