<template>
  <div class="spell-item-container">
    <div class="btn-subtract-container">
      <button @click="() => reduceRemainCooldown(5)" class="btn-subtract">-5s</button>
      <button @click="() => reduceRemainCooldown(15)" class="btn-subtract">-15s</button>
    </div>
    <CooldownImageContainer :cooldown-data="summonerSpellCooldown" ref="cooldownContainer"/>
    <button @click="isOpen = !isOpen" :class="{open: isOpen}" class="btn-spell-list">
      <span class="btn-spell-icon"></span>
    </button>
    <ul :class="{open: isOpen}" class="select-spell-list">
      <li v-for="item in SummonerSpells" :key="item.id" class="select-spell-item">
        <div class="spell-img" @click="this.onSelectSummonerSpell(item.id)" :style="{ backgroundImage: 'url(/' + item.image + ')'}"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import CooldownImageContainer from "@/components/CooldownImageContainer";
import SummonerSpells from "../data/summonerSpells.json";
export default {
  name: "SummonerSpellItem",
  components: {CooldownImageContainer},
  props: {
    itemData: Object
  },
  computed: {
    summonerSpellCooldown() {
      let cooldownResult = this.cooldownData.cooldown * 100 / (100 + Number(this.itemData.isAram) + Number(this.itemData.isIonian) + Number(this.itemData.isCosmicInsight))
      return {
        cooldown: cooldownResult.toFixed(0),
        thumb: this.cooldownData.thumb
      }
    }
  },
  data() {
    return {
      SummonerSpells,
      isOpen: false,
      currentSummonerSpell:"",
      cooldownData: {
        thumb: "img/summonerSpell/mark.png",
        cooldown: 80
      }
    }
  },
  methods: {
    onSelectSummonerSpell(id) {
      this.resetSummonerSpellCooldown()
      this.currentSummonerSpell = id
      let found = SummonerSpells.find((item) => (
          item.id === id
      ))
      this.cooldownData.thumb = found.image
      this.cooldownData.cooldown = found.cooldown
    },
    resetSummonerSpellCooldown() {
      this.$refs.cooldownContainer.resetCooldown()
    },
    reduceRemainCooldown(seconds) {
      this.$refs.cooldownContainer.reduceCooldown(seconds)
    }
  }

}
</script>

<style scoped lang="scss">
.spell-item-container{
  width: 60px;
  height: 110px;
  position: relative;

  .btn-subtract-container{
    display: flex;
    margin-bottom: 10px;
    .btn-subtract{
      width: 30px;
      height: 20px;
      font-size: 12px;
      background-color: #fff;
      border: 1px solid #CED3D6;
      border-radius: 2px;
    }
  }

  .btn-spell-list{
    width: 30px;
    height: 20px;
    display: flex;
    justify-content: center;
    margin: 5px auto 0 auto;
    box-sizing: border-box;
    border: 2px solid #BAA371;
    background-color: #196564;
    cursor: pointer;
    position: relative;
    z-index: 13;
    .btn-spell-icon{
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 12L15 5.33333L13.6 4L8 9.33333L2.4 4L1 5.33333L8 12Z' fill='%23BFAF4A'/%3E%3C/svg%3E%0A");
    }
    &.open{
      .btn-spell-icon{
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 4L1 10.6667L2.4 12L8 6.66667L13.6 12L15 10.6667L8 4Z' fill='%23BFAF4A'/%3E%3C/svg%3E%0A");
      }
    }
  }
  .select-spell-list{
    width: 244px;
    height: 314px;
    display: none;
    flex-wrap: wrap;
    padding: 20px;
    border: 2px solid #A28851;
    box-sizing: border-box;
    background-color: #031115;
    position: absolute;
    top: 105px;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    .select-spell-item{
      width: 60px;
      height: 60px;
      margin: 0 10px 10px 0;
      .spell-img{
        width: 100%;
        height: 100%;
        border: 1px solid #A28851;
        box-sizing: border-box;
        background-size: cover;
        cursor: pointer;
      }
      &:nth-child(3n){
        margin-right: 0;
      }
    }
    &.open{
      display: flex;
    }
  }
  &:first-child{
    margin-right: 10px;
  }
}
</style>