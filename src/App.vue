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
  name: 'App',
  components: {
    ChampionExp,
    AbilityHasteCalculator
  }
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
html{
  background: linear-gradient(135deg, #d3e4ff, #8fb1ff) no-repeat;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 50px;
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
