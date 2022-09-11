import { createStore } from 'vuex'
import axios from "axios";
const API_KEY = 'RGAPI-dc084813-509d-4b80-ad6b-a2599d1f869b'
const URL = {
  summonerInfo : 'https://my-weather-server.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
  activeGameInfo: 'https://my-weather-server.herokuapp.com/https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/',
  summonerId: 'https://my-weather-server.herokuapp.com/https://kr.api.riotgames.com/lol/summoner/v4/summoners/'
}

export default createStore({
  state: {
    summonerInfo: {},
    summonerId: {},
    activeGameInfo: {},
    blueTeamInfo: [],
    redTeamInfo: []
  },
  mutations: {
    summonerInfo(state, data) {
      state.summonerInfo = data
    },
    summonerId(state, data) {
      state.summonerId = data
    },
    activeGameInfo(state, data) {
      state.activeGameInfo = data
    },
      blueTeamInfo(state, data) {
        state.blueTeamInfo = data
      },
      redTeamInfo(state, data) {
        state.redTeamInfo = data
      }
  },
  actions: {
    // api key 고정일 때
    getSummonerInfo({commit, state}, {summonerName}) {
      axios.get(`${URL.summonerInfo}${summonerName}?api_key=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              console.log(result)
              let item = result.data
              axios.get(`${URL.activeGameInfo}${item.id}?api_key=${API_KEY}`).then()
              // let summonerId = item.accoundId
              commit('summonerInfo', item)
            } else {
              // console.log('else로 작동')
              // TODO: error 처리
            }
          })
      console.log(commit, state)
    },
    getSummonerId({commit, state}, {summonerId}) {
      axios.get(`${URL.summonerId}${summonerId}?api_key=${API_KEY}`)
          .then(result => {
            if (result.statusText === "OK") {
              console.log('summonerId 결과는 ==>', result)
            }
              console.log(commit, state)
          })
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
