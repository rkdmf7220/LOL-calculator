<template>
  <AbilityHasteCalculator/>
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

<style>
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
}
</style>
