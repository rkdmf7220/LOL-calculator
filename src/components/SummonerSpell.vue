<template>
  <div class="summoner-spell-container">
    <div class="input-area-container">
      <div class="summoner-spell-list">
        <SummonerSpellItem :item-data="itemData"/>
        <SummonerSpellItem :item-data="itemData"/>
      </div>
      <ul class="option-list">
        <li>
          <input v-model="itemData.isAram" type="checkbox" name="summoner-spell-option" id="aram" true-value="70" class="option-item">
          <label for="aram">칼바람</label>
        </li>
        <li>
          <input v-model="itemData.isIonian" type="checkbox" name="summoner-spell-option" id="ionian" true-value="12" class="option-item">
          <label for="ionian">쿨감신</label>
        </li>
        <li>
          <input v-model="itemData.isCosmicInsight" type="checkbox" name="summoner-spell-option" id="cosmic-insight" true-value="18" class="option-item">
          <label for="cosmic-insight">우주적<br>통찰력</label>
        </li>
      </ul>
    </div>
    <div class="output-area-container"></div>
  </div>
</template>

<script>
import SummonerSpellItem from "@/components/SummonerSpellItem";
export default {
  name: "SummonerSpell",
  components: {SummonerSpellItem},
  data() {
    return {
      itemData: {
        isAram: null,
        isIonian: null,
        isCosmicInsight: null
      },
      isCosmicInsight: null
    }
  }
}
</script>

<style scoped lang="scss">
.summoner-spell-container{
  margin-top: 20px;
  .input-area-container {
    display: flex;
    flex-direction: row;

    .summoner-spell-list {
      display: flex;
      flex-direction: row;
    }

    .option-list {
      width: 72px;
    }
  }

}
</style>