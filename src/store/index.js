import { createStore } from 'vuex'
import axios from "axios";
const API_KEY = 'RGAPI-d2f23ca9-dc26-4012-9c10-589d3b09861c'
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
    getSummonerInfo3({commit, state}, {summonerName}) {
      const runTest = async () => {
        let result = await axios.get(`${URL.summonerInfo}${summonerName}?api_key=${API_KEY}`);
        console.log(result)
        // something do it
        return result
      }
      let res = runTest()
      console.log('res ===> ',res)
      console.log(commit, state)
    },
    async getSummonerInfo({commit, state}, {summonerName}) {
      let result =  await axios.get(`${URL.summonerInfo}${summonerName}?api_key=${API_KEY}`);
      if (result.statusText === "OK") {
        console.log('result = ', result)
        let item = result.data
        let res = await axios.get(`${URL.activeGameInfo}${item.id}?api_key=${API_KEY}`)
        console.log('res =', res)
      }

      console.log(commit, state, summonerName)
    },

    getSummonerInfo2({commit, state}, {summonerName}) {
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
/*    getSummonerInfo({commit, state}, {summonerName}) {
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
    },*/
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
