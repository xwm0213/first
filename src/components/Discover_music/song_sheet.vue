// 歌单
<template>
  <div>
    <div class="song_sheet">
      <!-- 标题部分 -->
      <div class="title">
        <span class="title-flag">全部</span>
        <a href="#" class="tit_a" @click="displayAndHide"><i class="t">选择分类</i><i class="v"></i></a>
        <!-- 选择标签分类的那个div -->
        <div class="dsp" :style="{display: Display}" >
          <a href="#" class="qb">全部风格</a>
          <div
            class="line"
            v-for = "(value,index) in categories"
            :key="index"
          >
            <dt class="d_t"
            >
              {{value}}
            </dt>
            <dd class="d_d">

              <div class="one"
                   v-for="(item1, index1) in sub"
                   :key="index1"
              >
                <div v-if="item1.category == index">
                  <a href="#" @click="toUpdata(item1.name)">{{item1.name}}</a><span style="margin-left: 5px;">|</span>
                </div>
              </div>
            </dd>
          </div>
        </div>
        <span class="title_hot">
                    <a href="#" class="s-fc3">热门</a>
                </span>
      </div>
      <div class="song_sheet_content">
        <div class="song_sheet-one"
             v-for="item in songSheetData"
             :key="item.id"
        >
          <div class="song_sheet-one_top">
            <img v-lazy="item.coverImgUrl" class="song_sheet-top_img">
            <a href="#" class="details"></a>
            <div class="song_sheet-one_top_bottom">
              <span class="headset"></span>
              <span class="nb">{{item.subscribedCount}}</span>
              <a href="javascript:;" class="song_sheet_play" @click="getMusicList(item.id)"></a>
            </div>
          </div>
          <a href="#" class="synopsis">{{item.name}}</a>
          <span class="by">by</span>
          <a href="#" class="nm">{{item.creator.nickname}}</a>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="current"

        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // 歌单数据
      songSheetData: [],
      // 总的条数
      total: 0,
      // 分类标题
      categories: {},
      // 分类内容
      sub: [],
      // 当前页数
      page: 1,
      // 控制显示和隐藏标签区
      Display: 'none'
    }
  },
  computed: {
    ...mapState(['play_songs_list', 'MusicList'])
  },
  created () {
    this.gitSongSheetData('全部')
    this.gitCategoriesSub()
  },
  methods: {
    ...mapMutations(['set_songs_words', 'set_getMusicList']),
    async gitSongSheetData (tag) {
      const { data: res } = await this.$http.get('/top/playlist', {
        params: {
          limit: 35,
          offset: (this.page - 1) * 35,
          cat: tag
        }
      })
      if (res.code !== 200) {
        return this.$message.error('获取歌单失败')
      }
      this.songSheetData = res.playlists
      this.total = res.total
      //   console.log(this.songSheetData)
    },
    async gitCategoriesSub () {
      const { data: res } = await this.$http.get('/playlist/catlist')
      if (res.code !== 200) {
        return this.$message.error('获取分类标签失败')
      }
      this.categories = res.categories
      this.sub = res.sub
      //   console.log(this.categories)
      //   console.log(this.sub)
    },
    // 控制分页
    current (newpage) {
      this.page = newpage
      this.gitSongSheetData('全部')
    },
    // 控制显示隐藏
    displayAndHide () {
      if (this.Display === 'none') {
        this.Display = 'block'
      } else if (this.Display === 'block') {
        this.Display = 'none'
      }
    },
    toUpdata (cat) {
      this.gitSongSheetData(cat)
      this.displayAndHide()
    },
    // 获取歌单中的歌曲
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

<style lang="less" scoped>
  a{
    color:black;
  }
  .song_sheet{
    width: 900px;
    height: 1800px;
    padding: 40px;
    position: relative;
    margin: 0 auto;
    // background-color: rgb(216, 193, 158);
    // 标题
    .title{
      position: relative;
      height: 40px;
      border-bottom: 2px solid #c20c0c;
      .title-flag{
        float: left;
        font-size: 24px;
        font-weight: normal;
      }
      .tit_a{
        width: 86px;
        height: 31px;
        float: left;
        background: url('../../../public/images/button2.png') no-repeat;
        background-position: right -100px;
        line-height: 31px;
        padding: 0 5px;
        margin: 0 5px;
        .t{
          display: block;
          width: 86px;
          height: 31px;
          text-align: center;
          font-style: normal;
          color: #0c73c2 !important;
          background: url('../../../public/images/button2.png') no-repeat;
          background-position: 0 -59px;
        }
        .v{
          width: 8px;
          height: 5px;
          background: url('../../../public/images/button2.png') no-repeat;
          background-position: -70px -243px;
        }

      }
      .dsp{
        z-index: 1000;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 40px;
        padding: 0 20px;
        width: 720px;
        background-position: -720px 0;
        background-image: url('https://s2.music.126.net/style/web2/img/sltlyr.png') ;
        a{
          color:#000000;
        }
        .qb{
          display: block;
          width: 86px;
          height: 31px;
          text-align: center;
          line-height: 31px;
          margin-left: 50px;
          /*background: url('../../../public/images/button2.png') no-repeat;*/
          /*background-position: 0 -59px;*/
        }
        .line{
          height: 42px;
          position: relative;
          .d_t{
            float: left;
          }
          .one{
            float: left;
            margin-left: 5px;

          }
          .d_d{
            /*margin-top: -22px;*/
            position: absolute;
            float: left;
          }
        }
      }
      .title_hot{
        float: right;
        width: 46px;
        border-radius: 3px;
        background: url('../../../public/images/button.png') no-repeat 0 9999px;
        background-position: 0 0;
        .s-fc3{
          width: 46px;
          float: right;
          line-height: 29px;
          text-align: center;
          color: #fff;
        }
      }
    }
    //内容部分
    .song_sheet_content{
      width: 950px;
      height: 1526px;
      border-color:red;
      .song_sheet-one{
        float: left;
        width: 140px;
        height: 188px;
        overflow: hidden;
        margin: 0 50px 30px 0px;
        line-height: 1.4;
        margin-top: 20px;
        .song_sheet-one_top{
          width: 144px;
          height: 144px;
          position: relative;
          .song_sheet-top_img{
            width: 140px;
          }
          .details{
            width: 144px;
            height: 144px;
            position: absolute;
            top: 0;
            left: 0;
          }
          .song_sheet-one_top_bottom{
            position:absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 27px;
            background: url('../../../public/images/coverall.png') no-repeat 0 9999px;
            background-position: 0 -537px;
            .headset{
              float: left;
              width: 14px;
              height: 11px;
              background: url('../../../public/images/iconall.png') no-repeat 0 9999px;
              background-position: 0 -24px;
              margin: 9px 5px 9px 10px;
            }
            .nb{
              float: left;
              margin: 3px 0 0 0;
              color: #cccccc;
            }
            .song_sheet_play{
              position: absolute;
              right: 10px;
              bottom: 5px;
              width: 16px;
              height: 17px;
              background: url('../../../public/images/iconall.png') no-repeat 0 9999px;
              background-position: 0 0;

            }

          }

        }
        .synopsis{
          display: inline-block;
          max-width: 100%;
          height: 19px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .by{
          color: #999;
        }
        .nm{
          color: #666666;
          margin-left: 2px;
          height: 19px;
        }
      }
    }
    // 下边分页部分
    .pagination{
      position: absolute;
      bottom: 38px;
      left: 270px;
    }
  }
</style>
