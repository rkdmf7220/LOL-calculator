<template>
  <div class="wrap">
    <div class="border-box">
      <div class="input-area-container item-container">
        <div class="input-item-container input-champion-name">
          <button @click="this.inputChampionName = null" class="btn-clear-input">×</button>
          <label for="champion-names" @input="onSelectChampion">챔피언 : </label>
          <input type="text" list="champion-names" v-model="inputChampionName" class="champion-names">
          <datalist id="champion-names">
            <option v-for="item in championNames" :key="item" :value="item"></option>
          </datalist>
        </div>

        <div class="input-item-container">
          <input @change="useUltimateHunter = !useUltimateHunter" type="checkbox" name="" id="check-ultimate-hunter">
          <label for="check-ultimate-hunter">궁극의 사냥꾼</label>
          <input :disabled="!useUltimateHunter" v-model="inputUltimateHunter" type="number" id="ultimate-hunter" min="0"
                 max="5">
        </div>

        <div class="input-item-container">
          <label for="ability-haste">스킬 가속 : </label>
          <input v-model="inputHasteText" type="number" id="ability-haste" minlength="1" maxlength="3" min="0">
        </div>

<!--        <div class="input-item-container">
          <label for="current-time">게임 시간 : </label>
          <input v-model="inputCurrentTime" type="text" id="current-time" minlength="4" maxlength="4">
        </div>-->

        <div class="input-item-container">
          <span>궁극기 렙 : </span>
          <div class="ultimate-level-container">
            <button :class="{active: ultimateLevel !== 1}" @click="subtractUltimateLevel" class="btn-ultimate-level btn-ultimate-level-subtract">−</button>
            <span>{{this.ultimateLevel}}</span>
            <button :class="{active: ultimateLevel !== 3}" @click="addUltimateLevel" class="btn-ultimate-level btn-ultimate-level-add">+</button>
          </div>
        </div>
      </div>

      <div class="output-area-container">
        <CooldownImageContainer :cooldown-data="computeUltimateData" ref="cooldownContainer"/>
        <div class="output-data-list">
          <div class="output-data-item">
            <span class="output-label">궁 쿨 :</span>
            <span>{{ computeUltimateData.cooldown.toFixed(2) }}</span>
          </div>
          <div class="output-data-item output-timer">
            <span class="output-label">쿨타임 감소</span>
            <div class="output-timer-btn">
              <button @click="() => reduceUltimateCooldown(5)" class="btn-subtract-timer">-5s</button>
              <button @click="() => reduceUltimateCooldown(10)" class="btn-subtract-timer">-10s</button>
              <button @click="() => reduceUltimateCooldown(30)" class="btn-subtract-timer">-30s</button>
            </div>
          </div>
        </div>
      </div>
    <SummonerSpell/>
    </div>
  </div>
</template>

<script>
import champions from "../data/champions.json"
import moment from "moment"
import SummonerSpell from "@/components/SummonerSpell";
import CooldownImageContainer from "@/components/CooldownImageContainer";
export default {
  name: "AbilityHasteCalculator",
  components: {CooldownImageContainer, SummonerSpell},
  computed: {
    foundChampionInfo() {
      return champions.find(info => (
          info.name === this.inputChampionName
      ))
    },
    computeUltimateHunter() {
      if(this.useUltimateHunter) {
        return 6 + this.inputUltimateHunter * 5

      } else {
        return 0
      }
    },
    computeUltimateData() {
      if (!this.foundChampionInfo) {
        let result = champions[0][`ultimateLevel${this.ultimateLevel}`] * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return {
          cooldown: Number(result),
          thumb: champions[0].ultimateThumb
        }
      } else {
        let result = this.foundChampionInfo[`ultimateLevel${this.ultimateLevel}`] * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return {
          cooldown: parseFloat(result.toFixed(0)),
          thumb: this.foundChampionInfo.ultimateThumb
        }
      }
    },
    computeUltimateLevel1() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel1 * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return result.toFixed(1)
      } else {
        return null
      }
    },
    computeUltimateLevel2() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel2 * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return result.toFixed(1)
      } else {
        return null
      }
    },
    computeUltimateLevel3() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel3 * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return result.toFixed(1)
      } else {
        return null
      }
    },
    championNames() {
      let found = []
      champions.forEach((item) => {
        found.push(item.name)
      })
      return found
    }
  },
  data() {
    return {
      moment,
      inputChampionName: "",
      inputHasteText: 0,
      inputCurrentTime: "0000",
      ultimateCooldown: 6,
      useUltimateHunter: false,
      inputUltimateHunter: 0,
      ultimateLevel: 1
    }
  },
  methods: {
    onSelectChampion() {

    },
    subtractUltimateLevel() {
      if (this.ultimateLevel !== 1) {
        this.ultimateLevel --
      }
    },
    addUltimateLevel() {
      if (this.ultimateLevel !== 3) {
        this.ultimateLevel ++
      }
    },
    reduceUltimateCooldown(seconds) {
      this.$refs.cooldownContainer.reduceCooldown(seconds)
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  display: flex;
  justify-content: center;

  .border-box{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 4px 16px rgba(29, 101, 160, 0.3);
  }

  .item-container{
    display: flex;
    flex-direction: column;
  }

  .input-area-container {
    width: 200px;
    height: 160px;
    //justify-content: center;

    .input-item-container {
      margin: 5px;

      &.input-champion-name{
        position: relative;
        .btn-clear-input{
          position: absolute;
          width: 20px;
          height: 20px;
          top: 4px;
          right: 10px;
          border: none;
          border-radius: 10px;
          background-color: #ced3d6;
          color: #fff;
          font-size: 16px;
          line-height: 20px;
          font-weight: 900;
          cursor: pointer;
          transition: background-color 0.2s;
          &:hover{
            background-color: #d8dde0;
          }
        }
        .champion-names{
          width: 100px;
          padding: 5px 10px;
          border: 1px solid #ced3d6;
          transition: all 0.3s;
          border-radius: 5px;
          &:focus{
            outline: none;
            border: 1px solid #87b1f3;
            box-shadow: 0 0 0 1px #87b1f3;
          }
        }
      }



      #ultimate-hunter{
        width: 30px;
        padding: 5px 10px;
        margin-left: 10px;
        border: 1px solid #ced3d6;
        transition: all 0.3s;
        border-radius: 5px;

        &:focus{
          outline: none;
          border: 1px solid #87b1f3;
          box-shadow: 0 0 0 1px #87b1f3;
        }
      }

      #ability-haste, #current-time{
        width: 70px;
        padding: 5px 10px;
        margin-left: 10px;
        border: 1px solid #ced3d6;
        transition: all 0.3s;
        border-radius: 5px;

        &:focus{
          outline: none;
          border: 1px solid #87b1f3;
          box-shadow: 0 0 0 1px #87b1f3;
        }
      }

      .ultimate-level-container{
        display: inline-block;
        width: 70px;
        height: 15px;
        padding: 5px 10px;
        margin-left: 12px;

        .btn-ultimate-level{
          width: 20px;
          height: 20px;
          border-radius: 10px;
          font-weight: 900;
          background-color: #fff;
          border: 1px solid #ced3d6;
          color: #CED2D6;

          &.active{
            color: #333;
            cursor: pointer;
          }
        }
        span{
          margin: 0 10px;
        }
      }
    }
  }
  .output-area-container{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #87b1f3;
    .output-data-list{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      .output-data-item{
        font-size: 13px;
        .output-label{
          color: #999;
          font-size: 13px;
        }
        &.output-timer{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .output-timer-btn{
            margin-top: 2px;
            .btn-subtract-timer{
              padding: 2px 5px;
              border: 1px solid #CED3D6;
              background-color: #fff;
              cursor: pointer;
              border-radius: 4px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  .calculator{
    width: 200px;
    height: 100px;
    margin: auto;
    border-bottom: 1px solid #87b1f3;

    .calc-item{
      display: flex;
      align-items: center;
      justify-content: space-between;

      &.small-text{
        font-size: 14px;
        color: #777;
      }
      span{
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }
}

</style>