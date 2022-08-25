<template>
  <div class="spell-item-container">
    <div class="spell-img"></div>
    <ul class="select-spell-list">
      <li class="select-spell-item">
        <div class="spell-img"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SummonerSpellItem"
}
</script>

<style scoped lang="scss">
.spell-item-container{
  width: 60px;
  height: 60px;
  position: relative;
  cursor: pointer;
  background-color: black;

  &:first-child{
    margin-right: 10px;
  }
}
</style>