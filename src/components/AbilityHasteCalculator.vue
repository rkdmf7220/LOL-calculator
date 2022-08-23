<template>
  <div>
    <label for="champion-names" @input="onSelectChampion">챔피언 명 : </label>
    <input type="text" list="champion-names" v-model="inputChampionName">
    <datalist id="champion-names">
      <option v-for="item in championNames" :key="item" :value="item"></option>
    </datalist>

    <label for="ability-haste">스킬 가속 : </label>
    <input v-model="inputHasteText" type="number" id="ability-haste" minlength="1" maxlength="3">

    <span> 궁 1렙 : {{ computeUltimateLevel1 }}</span>
    <span> 궁 2렙 : {{ computeUltimateLevel2 }}</span>
    <span> 궁 3렙 : {{ computeUltimateLevel3 }}</span>
<!--    <span> {{ championNames }}</span>-->
  </div>
</template>

<script>
import champions from "../data/champions.json"
export default {
  name: "AbilityHasteCalculator",
  computed: {
    foundChampionInfo() {
      return champions.find(info => (
          info.name === this.inputChampionName
      ))
    },
    computeUltimateLevel1() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel1 * 100 / ( 100 + this.inputHasteText )
        return result.toFixed(2)
      } else {
        return null
      }
    },
    computeUltimateLevel2() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel2 * 100 / ( 100 + this.inputHasteText )
        return result.toFixed(2)
      } else {
        return null
      }
    },
    computeUltimateLevel3() {
      if(this.foundChampionInfo) {
        let result = this.foundChampionInfo.ultimateLevel3 * 100 / ( 100 + this.inputHasteText )
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
      inputHasteText: "",
      ultimateCooldown: 6,
    }
  },
  methods: {
    onSelectChampion() {

    }
  }
}
</script>

<style scoped>

</style>