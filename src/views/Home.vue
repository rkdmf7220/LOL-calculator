<template>
  <div>
    <div class="search-bar">
      <input v-model="inputSummonerName" type="text" class="search-summoner" placeholder="소환사 명">
      <button @click="this.dispatchInfo" class="submit"></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      inputSummonerName: null
    }
  },
  methods: {
    dispatchInfo() {
      this.$store.dispatch('getSummonerInfo', {summonerName: this.inputSummonerName})
      // this.$store.dispatch('getSummonerInfo', (this.inputSummonerName))
    }
  }
}
</script>

<style lang="scss">
  .search-bar{
    width: 200px;
    height: 40px;
    position: relative;
    .search-summoner{
      width: 100%;
      height: 100%;
      padding: 5px 10px;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .submit{
      width: 20px;
      height: 20px;
      position: absolute;
      top: 10px;
      right: 10px;

    }
  }
</style>