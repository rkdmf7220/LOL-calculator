<template>
  <div class="spell-item-container">
<!--    <div class="spell-img"></div>-->
    <CooldownImageContainer :cooldown-data="cooldownData"/>
    <ul class="select-spell-list">
      <li class="select-spell-item">
        <div class="spell-img"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import CooldownImageContainer from "@/components/CooldownImageContainer";
export default {
  name: "SummonerSpellItem",
  components: {CooldownImageContainer},
  data() {
    return {
      cooldownData: {
        thumb: "img/summonerSpell/mark.png",
        cooldown: 10
      }
    }
  }

}
</script>

<style scoped lang="scss">
.spell-item-container{
  width: 60px;
  height: 90px;
  position: relative;

  &:first-child{
    margin-right: 10px;
  }
}
</style>