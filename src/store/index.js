import { createStore } from 'vuex'
import axios from "axios";
const API_KEY = 'RGAPI-dced7af2-3b51-4bed-8c47-b10d2b3aecec'
const URL = {
  summonerInfo : 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
  activeGameInfo: 'https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/}'
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
              let summonerId = item.accoundId
              commit('summonerInfo', item)
              this.$store.dispatch('getActiveGameInfo', {summonerId})
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
