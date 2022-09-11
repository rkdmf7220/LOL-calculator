<template>
<div>
  <div class="live-game-container">
    <ParticipantList/>
    <ParticipantList/>
<!--    <div class="team-header blue-team">
      <ul class="participant-list">
        <li class="participant-item">
          <ParticipantItem/>
        </li>
      </ul>
    </div>
    <div class="team-header red-team">
      <ul class="participant-list">
        <li class="participant-item">
          <ParticipantItem/>
        </li>
      </ul>
    </div>-->
  </div>
</div>
</template>

<script>
import ParticipantList from "@/components/ParticipantList";
export default {
  name: "LiveGameInfo",
  components: {ParticipantList},
  data() {
    return {
      mockUp: [
        {
          "teamId": 100,
          "spell1Id": 4,
          "spell2Id": 11,
          "championId": 62,
          "profileIconId": 5489,
          "summonerName": "xueren",
          "bot": false,
          "summonerId": "j63L5cpQ3VLvtmKN8w2Lt8Hb6plW2c3eF8Oh19LCOCIMbtI",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8010,
              9111,
              9104,
              8299,
              8304,
              8347,
              5005,
              5008,
              5002
            ],
            "perkStyle": 8000,
            "perkSubStyle": 8300
          }
        },
        {
          "teamId": 100,
          "spell1Id": 14,
          "spell2Id": 4,
          "championId": 875,
          "profileIconId": 3795,
          "summonerName": "카시스 페델리안",
          "bot": false,
          "summonerId": "dP4Avu8zBbBdsxfiNhpYbRbs7gGVbGXNTxQSU7t0ES3RF2g",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8010,
              9111,
              9104,
              8299,
              8444,
              8451,
              5005,
              5008,
              5002
            ],
            "perkStyle": 8000,
            "perkSubStyle": 8400
          }
        },
        {
          "teamId": 100,
          "spell1Id": 14,
          "spell2Id": 4,
          "championId": 236,
          "profileIconId": 4568,
          "summonerName": "안전공",
          "bot": false,
          "summonerId": "5TOqJ_v9BVNHslUAra3o0tvkO72YMJFEq6XGRPApgyuw_Nk",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8369,
              8304,
              8345,
              8347,
              8009,
              9103,
              5005,
              5008,
              5002
            ],
            "perkStyle": 8300,
            "perkSubStyle": 8000
          }
        },
        {
          "teamId": 100,
          "spell1Id": 6,
          "spell2Id": 4,
          "championId": 163,
          "profileIconId": 5418,
          "summonerName": "바다빠진고양이",
          "bot": false,
          "summonerId": "g5hOypMQmraVx0p5Odvb1dCo_moKOzt-FrUAkIZYV7YfyM3yBZrFPqn8kQ",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8360,
              8304,
              8316,
              8347,
              8210,
              8226,
              5005,
              5008,
              5003
            ],
            "perkStyle": 8300,
            "perkSubStyle": 8200
          }
        },
        {
          "teamId": 100,
          "spell1Id": 4,
          "spell2Id": 7,
          "championId": 267,
          "profileIconId": 5414,
          "summonerName": "눈내린설산",
          "bot": false,
          "summonerId": "QbxRLeUTHr-AnoCrDCm_CRS8nMgVgvC2V1vIB_IuANcGPxOLM46DDBkCEA",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8112,
              8126,
              8138,
              8135,
              8304,
              8345,
              5008,
              5008,
              5002
            ],
            "perkStyle": 8100,
            "perkSubStyle": 8300
          }
        },
        {
          "teamId": 200,
          "spell1Id": 4,
          "spell2Id": 14,
          "championId": 43,
          "profileIconId": 24,
          "summonerName": "Fawne",
          "bot": false,
          "summonerId": "AK75A4XV26DWVsnlD83AWCKasVvym3AtiMN1l-5g4ybwEwC9K-leMYk5ew",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8229,
              8275,
              8233,
              8237,
              8242,
              8473,
              5008,
              5008,
              5002
            ],
            "perkStyle": 8200,
            "perkSubStyle": 8400
          }
        },
        {
          "teamId": 200,
          "spell1Id": 3,
          "spell2Id": 4,
          "championId": 119,
          "profileIconId": 5489,
          "summonerName": "이거니당",
          "bot": false,
          "summonerId": "um5pyFAFF2Ca6JGIWmDf9IOAoK_i0YujD8_CEHOnmWx-sA",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8008,
              9111,
              9103,
              8299,
              8139,
              8135,
              5005,
              5008,
              5002
            ],
            "perkStyle": 8000,
            "perkSubStyle": 8100
          }
        },
        {
          "teamId": 200,
          "spell1Id": 11,
          "spell2Id": 4,
          "championId": 11,
          "profileIconId": 4653,
          "summonerName": "오빠는강남스타일",
          "bot": false,
          "summonerId": "H4xiG_8bRu5tB9lSCI0xqjFarzLtthZrY4QVRkVIm3BCRzE",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8008,
              9111,
              9104,
              8299,
              8135,
              8143,
              5005,
              5008,
              5002
            ],
            "perkStyle": 8000,
            "perkSubStyle": 8100
          }
        },
        {
          "teamId": 200,
          "spell1Id": 6,
          "spell2Id": 4,
          "championId": 122,
          "profileIconId": 23,
          "summonerName": "4587547512 DEL",
          "bot": false,
          "summonerId": "bYqQ5Tf_Vud_LgVl9sKz7q66gpM-YTcy6q3-1CbvcvqFcWQ",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8010,
              9111,
              9105,
              8299,
              8473,
              8242,
              5005,
              5008,
              5002
            ],
            "perkStyle": 8000,
            "perkSubStyle": 8400
          }
        },
        {
          "teamId": 200,
          "spell1Id": 4,
          "spell2Id": 14,
          "championId": 154,
          "profileIconId": 3543,
          "summonerName": "장성재",
          "bot": false,
          "summonerId": "vJE5pwcR3hFqOrtGvoYPVJI3NP33GYQPcKzzi4i2GyF6d3zb",
          "gameCustomizationObjects": [],
          "perks": {
            "perkIds": [
              8010,
              9111,
              9105,
              8299,
              8446,
              8453,
              5005,
              5008,
              5003
            ],
            "perkStyle": 8000,
            "perkSubStyle": 8400
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.live-game-container{
  width: 462px;
}
</style>