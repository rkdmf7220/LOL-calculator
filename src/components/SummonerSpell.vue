<template>
  <div class="summoner-spell-container">
    <div class="input-area-container">
      <div class="summoner-spell-list">
        <SummonerSpellItem/>
        <SummonerSpellItem/>
      </div>
      <ul class="option-list">
        <li>
          <input type="checkbox" name="" id="" class="option-item">
          <label for="">칼바람</label>
        </li>
        <li>
          <input type="checkbox" name="" id="" class="option-item">
          <label for="">쿨감신</label>
        </li>
        <li>
          <input type="checkbox" name="" id="" class="option-item">
          <label for="">우주적<br>통찰력</label>
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
  components: {SummonerSpellItem}
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