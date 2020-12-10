<template>
  <div class="big_area">
    <div class="video_area">
      <div class="v_head">
        <h2 class="f-ff2 f-thide">{{mv_info.name}}</h2>
        <span>&nbsp;by&nbsp;<a href="javascript:;" class="name">{{mv_info.artistName}}</a></span>
      </div>
      <video id="myVideo" width="640px" height="360px" controls autoplay>
        <source :src="mv_url" type="video/mp4">
      </video>
      <a href="javascript:;" class="icon icon1"><i class="el-icon-s-promotion"></i>(4001)</a>
      <a href="javascript:;" class="icon icon2"><i class="el-icon-folder-add"></i>({{mv_info.subCount}})</a>
      <a href="javascript:;" class="icon icon3"><i class="el-icon-position"></i>({{mv_info.shareCount}})</a>
    </div>
    <div class="mv_info">
      <h3 class="mv_title">MV简介</h3>
      <div class="mv_time_play">
        <p class="s-fc4">发布时间：{{mv_info.publishTime}}</p>
        <p class="s-fc4">播放次数：{{mv_info.playCount}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    // 引入公共的数据
    ...mapState(['songs_words', 'play_songs_list', 'music_url', 'songInfoList', 'mv_url', 'mv_info'])
  },
  methods: {
    ...mapMutations(['set_songs_words', 'set_songInfoList', 'set_music_url', 'set_mv_url', 'set_mv_info']),
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
      console.log(res.data.url)
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
      console.log(res.data)
    }
  }
}
</script>
<style lang="less" scoped>
  .big_area{
    width: 980px;
    min-height: 500px;
    height: 100%;
    margin:0 auto;
    border: 1px solid #d3d3d3;
  }
  .f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .f-ff2 {
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .video_area{
    float: left;
    width: 640px;
    margin-left: 34px;
    margin-top: 15px;
    height: 473px;
    /*background-color: lightgrey;*/
    .v-head h2{
      float: left;
      max-width: 100%;
      margin-top: -10px;
      margin-right: 8px;
      font-size: 24px;
      line-height: 32px;
      font-weight: normal;
    }
    span{
      font-size: 12px;
    }
      .name{
      color: #0c73c2;
    }
    .icon{
      color:black;
      display: inline-block;
      width: 70px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      /*background-color: red;*/
      border: 1px solid gray;
      margin-top: 10px;
      margin-right: 15px;
      /*background: url(../../style/web2/img/button2.png?13f42d8…) no-repeat 0 9999px;*/
      /*background: url('https://s2.music.126.net/style/web2/img/button2.png');*/
    }
    .icon1{
      background-position: right -100px;
    }
  }
  .mv_info{
    float: right;
    width: 270px;
    height: 500px;
    border: 1px solid #d3d3d3;
    border-bottom: none;
    /*background-color: red;*/
    .mv_title{
      margin: 20px auto;
      width: 200px;
      height: 24px;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
    }
    .mv_time_play{
      width: 200px;
      height: 70px;
      margin: 15px auto;
    }
    .s-fc4{
      text-align: left;
      font-size: 12px;
    }
  }
</style>
