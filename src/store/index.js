import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(Vuex)
const store = new Vuex.Store({
  // state 中存放的就是全局共享的数据
  state: {
    // count: 0,
    // 当前播放的歌曲
    current_play_url: '',
    // 播放的歌单
    play_songs_list: [],
    // 设置歌词
    songs_words: '',
    // 歌曲详情
    songInfoList: [],
    MusicList: [],
    playlist: [],
    music_url: '',
    //  mv的url
    mv_url: '',
    //  mv的info
    mv_info: []
  },
  // 用于变更store的数据.mutations不能写异步的代码
  mutations: {
    set_getMusicList (state, ddd) {
      state.play_songs_list = ddd
    },
    set_songInfoList (state, ddd) {
      state.songInfoList = ddd
    },
    // 设置歌词
    set_songs_words (state, ddd) {
      state.songs_words = ddd
    },
    // 设置歌单
    set_play_list (state, playlist) {
      state.playlist = playlist
    },
    // 设置歌曲的url
    set_music_url (state, ddd) {
      state.music_url = ddd
    },
    // 设置mv的url
    set_mv_url (state, ddd) {
      state.mv_url = ddd
    },
    // 设置mv的info
    set_mv_info (state, ddd) {
      state.mv_info = ddd
    }
  },
  // 用于处理异步处理
  actions: {
    // 不能直接修改state中的数据
    // 必须通过context.commit()触发某个mutation才行
    // addAsync (context, step) {
    //   setTimeout(() => {
    //     context.commit('add', step)
    //   }, 1000)
    // }
    // async_getSongUrl (context, id) {
    //     //   context.commit('getSongUrl', id)
    //     // },
    //     // async_getMusicList (context, id) {
    //     //   context.commit('getMusicList', id)
    //     // }
  },
  // getter用于对store中的数据进行加工处理形成新的数据
  getters: {
    showNum: state => {
      return '当前最新的数量是' + state.count
    }
  //  this.$store.getters.showNum
  }
})
export default store
