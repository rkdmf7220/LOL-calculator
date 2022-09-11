<template>
  <div class="participant-container">
    <div class="team-header blue-team">
      <span>소환사 정보</span>
      <span>룬 정보</span>
      <span>밴</span>
    </div>
    <ul class="participant-list">
      <li class="participant-item">
        <ParticipantItem/>
      </li>
    </ul>
  </div>
</template>

<script>
import ParticipantItem from "@/components/ParticipantItem";
export default {
  name: "ParticipantList",
  components: {ParticipantItem}
}
</script>

<style scoped lang="scss">
.participant-container{
  background-color: #fff;
  .team-header {
    border-bottom: 1px solid #ddd;
    &.blue-team {
    }
  }

  .participant-list {
    display: flex;
    flex-direction: row;

    .participant-item {
    }
  }

}
</style>