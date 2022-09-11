<template>
<div class="summoner-data-container blue-team">
  <div class="summoner-info-data">
    <div class="champion-img"></div>
    <div class="summoner-spell">
      <div class="summoner-spell-item"></div>
      <div class="summoner-spell-item"></div>
    </div>
    <div class="runes">
      <div class="rune-item"></div>
      <div class="rune-item"></div>
    </div>
    <span class="summoner-name">총열여섯글자로만들어진소환사이름</span>
  </div>
  <div class="runes-container">
    <ul class="main-rune-list rune-list">
      <li class="main-rune-item"></li>
      <li class="main-rune-item"></li>
      <li class="main-rune-item"></li>
      <li class="main-rune-item"></li>
    </ul>
    <ul class="sub-rune-list rune-list">
      <li class="sub-rune-item"></li>
      <li class="sub-rune-item"></li>
    </ul>
    <ul class="rune-stats-list rune-list">
      <li class="rune-stats-item"></li>
      <li class="rune-stats-item"></li>
      <li class="rune-stats-item"></li>
    </ul>
  </div>
  <div class="champion-ban"></div>
</div>
</template>

<script>
export default {
  name: "ParticipantItem"
}
</script>

<style scoped lang="scss">
.summoner-data-container{
  display: flex;
  flex-direction: row;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  &.blue-team{
    border-left: 5px solid #587fda;
  }
  &.red-team{
    border-left: 5px solid #ff0000;
  }
  .summoner-info-data{
    width: 303px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .champion-img{
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #ddd;
    }
    .summoner-spell{
      margin-left: 5px;
      .summoner-spell-item{
        width: 19px;
        height: 19px;
        background-color: #ddd;
        &:first-child{
          margin-bottom: 2px;
        }
      }
    }
    .runes{
      margin-left: 2px;
      .rune-item{
        width: 19px;
        height: 19px;
        border-radius: 10px;
        background-color: #ddd;
        &:first-child{
          margin-bottom: 2px;
        }
      }
    }
    .summoner-name{
      font-size: 13px;
      margin-left: 10px;
    }
  }
  .runes-container{
    width: 84px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-left:10px;
    .rune-list{
      display: flex;
      flex-direction: row;
    }
    .main-rune-list{
      .main-rune-item {
        width: 18px;
        height: 18px;
        border-radius: 9px;
        margin-right: 4px;
        background-color: #ddd;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .sub-rune-list{
      .sub-rune-item{
        width: 18px;
        height: 18px;
        border-radius: 9px;
        margin-right: 4px;
        background-color: #ddd;
      }
    }
    .rune-stats-list{
      .rune-stats-item{
        width: 12px;
        height: 12px;
        border-radius: 6px;
        margin-right: 2px;
        background-color: #ddd;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
  .champion-ban{
    width: 40px;
    height: 40px;
    background-color: #ddd;
    margin-left: 10px;
  }
}
</style>