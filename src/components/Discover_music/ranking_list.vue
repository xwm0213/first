<template>
  <div>
    <div class="container">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="left">
            <!--            -->
            <div class="top" style="margin-top: 10px">
              <h2 style="font-size: 16px">云音乐特色榜</h2>
              <el-row :gutter="20" type="flex" style="height: 62px;margin-top: 5px;" v-for="item in getLists.slice(0,4)" :key="item.id">
                <el-col :span="6">
                  <img :src="item.coverImgUrl" alt="">
                </el-col>
                <el-col :span="18">
                  <el-row><a href="javascript:;" @click="getMusicList(item.id)">{{item.name}}</a><p>{{item.updateFrequency}}</p></el-row>
                </el-col>
              </el-row>
            </div>
            <!--            -->
            <div class="bottom">
              <h2 style="font-size: 16px">全球媒体榜</h2>
              <el-row :gutter="20" type="flex" style="height: 62px;margin-top: 5px; " v-for="item in getLists.slice(4)" :key="item.id">
                <el-col :span="6">
                  <img :src="item.coverImgUrl" alt="">
                </el-col>
                <el-col :span="18">
                  <el-row><a href="javascript:;"  @click="getMusicList(item.id)">{{item.name}}</a><p>{{item.updateFrequency}}</p></el-row>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="right">
            <div class="header">
              <el-row :gutter="20" type="flex">
                <el-col :span="8">
                  <img src="https://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="">
                </el-col>
                <el-col :span="16">
                  <div class="header-text">
                    <el-row><p class="title">云音乐飙升榜</p></el-row>
                    <el-row><p>最近更新：12月03日 （每天更新）</p></el-row>
                    <el-row >
                      <button @click="play_songs">播放</button>
                      <button>收藏(343224)</button>
                      <button>转发(9687)</button>
                      <button>下载</button>
                      <button>评论(1928284)</button>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="music-text">
              <div class="music-text-header">
                <span class="one">歌曲列表</span>
                <span class="two">100首歌</span>
                <span class="three">播放：3770959872次</span>
              </div>
              <div class="music-text-text">
                <el-table :data="getMusicLists" stripe style="width: 100%">
                  <el-table-column prop="name" label="歌曲" width="400">
                  </el-table-column>
                  <el-table-column prop="dt" label="时长" width="100">
                    <template slot-scope="scope">
                      {{scope.row.dt | dateFormat}}
                    </template>
                  </el-table-column>
                  <el-table-column prop="ar.0.name" label="歌手">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      getLists: [],
      getMusicLists: []
    }
  },
  computed: {
    ...mapState(['play_songs_list', 'MusicList'])
  },
  created () {
    this.getList()
  },
  methods: {
    ...mapMutations(['set_songs_words', 'set_getMusicList']),
    play_songs () {
      this.set_getMusicList(this.getMusicLists)
    },
    async getList () {
      const { data: res } = await this.$http('toplist/detail')
      if (res.code === 200) {
        this.getLists = res.list
        // console.log()
      } else {
        this.message.error('获取失败')
      }
    },
    async getMusicList (id) {
      const { data: res } = await this.$http('/playlist/detail', {
        params: {
          id: id
        }
      })
      if (res.code === 200) {
        this.getMusicLists = res.playlist.tracks
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
<style lang="less" scoped>
  html{
    *{
      box-sizing: border-box;
    }
  }
  button{
    outline: 0;
    /*border:none;*/
    border-radius: 5px;
    color:gainsboro;
    font:16px Arial,sans-serif bold;
    font-style:normal;
    border:1px solid #2299ff;
    background-color: #333333;
  }
  .container{
    width: 1000px;
    margin: 0 auto;
    /*background-color: red;*/
  }
  .left{
    /*height: 400px;*/
    /*background-color: greenyellow;*/
    border: 1px solid #c7c7c7;
  }
  .top{
    a {
      font-size: 14px;
      color:#333333 ;
      text-decoration: none;
    }
    p{
      font-size: 12px;
      color: #999999;
    }
    img {
      margin: 10px 10px;
      width: 40px;
      height: 40px;
    }
  }
  .bottom {
    margin-top:50px ;
    a {
      font-size: 14px;
      color:#333333 ;
      text-decoration: none;
    }
    p{
      font-size: 12px;
      color: #999999;
      overflow: hidden;
      width:100px ;
    }
    img {
      margin: 10px 10px;
      width: 40px;
      height: 40px;
    }
  }
  .right{
    height: 600px;
    /*background-color: blue;*/
    .header {
      height: 300px;
      /*background-color: red;*/
      img{
        margin: 50px 50px;
        width: 200px;
        height: 200px;
        border: 3px solid #999999;
      }
      .header-text {
        width: 500px;
        margin: 50px 50px;
        .title {
          font-size: 25px;
          color: #333333;
        }
        p{
          font-size: 12px;
          color: silver;
        }
        button {
          margin:10px 5px;
        }
      }
    }
    .music-text{
      /*border: 1px solid #333333;*/
      height: 600px;
      .music-text-header{
        height: 50px;
        /*background-color: green;*/
        .one {
          font-size: 30px;
        }
        .two {
          font-size: 12px;
          margin-left: 30px;
          color: #999999;
        }
        .three {
          font-size: 14px;
          margin-left: 400px;
          color: #C20C0C;
        }
      }
      .music-text-text{
        border: 1px solid #c7c7c7;
        li {
          border-bottom: 1px solid gainsboro;
          list-style: none;
        }
      }
    }
  }

</style>
