import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import DiscoverMusic from '../components/Discover_music/Discover_music'
import MyMusic from '../components/my_music/my_music'
import Friend from '../components/friend/friend'
import Download from '../components/download/download'
import Shopping from '../components/Shopping/Shopping'
import Musician from '../components/musician/musician'
import NewDisc from '../components/Discover_music/new_disc'
import AnchorStation from '../components/Discover_music/anchor_station'
import RankingList from '../components/Discover_music/ranking_list'
import Singer from '../components/Discover_music/singer'
import SongSheet from '../components/Discover_music/song_sheet'
import Recommend from '../components/Discover_music/recommend'
import Mv from '../components/Discover_music/mv'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/Shopping', component: Shopping },
  { path: '/musician', component: Musician },

  {
    path: '/home',
    component: Home,
    redirect: '/Discover_music',
    children: [
      {
        path: '/Discover_music',
        component: DiscoverMusic,
        redirect: '/recommend',
        children: [
          { path: '/new_disc', component: NewDisc },
          { path: '/anchor_station', component: AnchorStation },
          { path: '/ranking_list', component: RankingList },
          { path: '/singer', component: Singer },
          { path: '/song_sheet', component: SongSheet },
          { path: '/recommend', component: Recommend },
          { path: '/mv', component: Mv }
        ]
      },
      { path: '/my_music', component: MyMusic },
      { path: '/friend', component: Friend },
      { path: '/download', component: Download }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
