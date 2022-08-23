<template>
  <div class="wrap">
    <div class="input-area-container border-box">
      <div class="input-item-container">
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
    </div>
    <div class="calculator border-box">
      <div class="calc-item">
        <span class="calc-name"> 궁 1렙 : </span><span class="calc=value">{{ computeUltimateLevel1 }}</span>
      </div>
      <div class="calc-item">
        <span class="calc-name"> 궁 2렙 : </span><span class="calc=value">{{ computeUltimateLevel2 }}</span>
      </div>
      <div class="calc-item">
        <span class="calc-name"> 궁 3렙 : </span><span class="calc=value">{{ computeUltimateLevel3 }}</span>
      </div>
    </div>
  </div>
  <SummonerSpell/>
  <ChampionExp/>
</template>

<script>
import champions from "../data/champions.json"
import ChampionExp from "@/components/ChampionExp";
import SummonerSpell from "@/components/SummonerSpell";
export default {
  name: "AbilityHasteCalculator",
  components: {SummonerSpell, ChampionExp},
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
    computeUltimateLevel1() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel1 * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return result.toFixed(2)
      } else {
        return null
      }
    },
    computeUltimateLevel2() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel2 * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return result.toFixed(2)
      } else {
        return null
      }
    },
    computeUltimateLevel3() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel3 * 100 / ( 100 + this.inputHasteText + this.computeUltimateHunter)
        return result.toFixed(2)
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
      inputChampionName: "",
      inputHasteText: 0,
      ultimateCooldown: 6,
      useUltimateHunter: false,
      inputUltimateHunter: 0
    }
  },
  methods: {
    onSelectChampion() {

    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  display: flex;
  justify-content: center;

  .border-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 4px 16px rgba(29, 101, 160, 0.3);
  }

  .input-area-container {
    width: 320px;
    height: 180px;

    .input-item-container {
      margin: 10px;

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

      #ability-haste{
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
    }
  }

  .calculator{
    width: 170px;
    height: 180px;
    margin-left: 30px;

    .calc-item{
      display: flex;
      margin: 5px 30px;
      align-items: center;
      justify-content: space-between;
    }
  }
}

</style>