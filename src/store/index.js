import { createStore } from 'vuex'
import axios from "axios";
const API_KEY = 'RGAPI-7ac7029e-89ad-4907-81f2-df86c8514fea'
const URL = {
  summonerInfo : 'https://my-weather-server.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
  activeGameInfo: 'https://my-weather-server.herokuapp.com/https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/'
}

export default createStore({
  state: {
    summonerInfo: {},
    activeGameInfo: {}
  },
  mutations: {
    summonerInfo(state, data) {
      state.summonerInfo = data
    },
    activeGameInfo(state, data) {
      state.activeGameInfo = data
    }
  },
  actions: {
    // api key 고정일 때
    getSummonerInfo({commit, state}, {summonerName}) {
      axios.get(`${URL.summonerInfo}${summonerName}?api_key=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              console.log('if로 작동')
              console.log(result)
              let item = result.data
              // let summonerId = item.accoundId
              commit('summonerInfo', item)
            } else {
              // console.log('else로 작동')
              // TODO: error 처리
            }
          })
      console.log(commit, state)
    },
    getActiveGameInfo({commit, state}, {summonerId}) {
      axios.get(`${URL.activeGameInfo}${summonerId}?api_key=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              console.log('게임 정보 ==> ', result)
            }
          })
      console.log(commit, state, summonerId)
    }
  },
  modules: {
  }
})
