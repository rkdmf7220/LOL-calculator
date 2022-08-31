<template>
  <div class="calculator-list">
    <div class="calculator-item">
      <AbilityHasteCalculator/>
    </div>
    <div class="calculator-item">
      <AbilityHasteCalculator/>
    </div>
    <div class="calculator-item">
      <AbilityHasteCalculator/>
    </div>
    <div class="calculator-item">
      <AbilityHasteCalculator/>
    </div>
    <div class="calculator-item">
      <AbilityHasteCalculator/>
    </div>
  </div>
  <ChampionExp/>
</template>

<script>
import AbilityHasteCalculator from "@/components/AbilityHasteCalculator";
import ChampionExp from "@/components/ChampionExp";
export default {
  name: "Simulator",
  components: {ChampionExp, AbilityHasteCalculator}
}
</script>

<style lang="scss">
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
button{
  margin: 0;
  padding: 0;
}
.calculator-list{
  display: flex;
  justify-content: center;
  .calculator-item{
    margin-right: 20px;
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>
