<template>
<div>
  <div class="live-game-container">
    <div class="team-header blue-team">
      <ul class="participant-list">
        <li class="participant-item">
          <ParticipantItem/>
        </li>
      </ul>
    </div>
    <div class="team-header red-team">
      <ul class="participant-list">
        <li class="participant-item">
          <ParticipantItem/>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import ParticipantItem from "@/components/ParticipantItem";
export default {
  name: "LiveGameInfo",
  components: {ParticipantItem},
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>