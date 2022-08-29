<template>
  <div class="image-container">
    <div :class="{cooldown: this.isCooldown}" class="cooldown-container">
      <span class="cooldown-text">{{ remainingCooldown }}</span>
      <div class="cooldown-navy-box" :style="{height: this.cooldownNavyHeight + '%'}"></div>
      <div class="dim-box"></div>
    </div>
    <div class="img-thumb" @click="onClickThumbImage" :style="{ backgroundImage: 'url(/' + cooldownData.thumb + ')'}"></div>
  </div>
</template>

<script>
let test
export default {
  name: "CooldownImageContainer",
  props: {
    cooldownData: Object,
  },
  computed: {
    cooldownNavyHeight() {
      return 100 * this.remainingCooldown / this.cooldownData.cooldown
    }
  },
  data() {
    return {
      isCooldown: false,
      remainingCooldown: null
    }
  },
  methods: {
    onClickThumbImage() {
      this.isCooldown = true
      this.remainingCooldown = this.cooldownData.cooldown
      test = setInterval(this.decreaseCooldown, 1000)
    },
    decreaseCooldown() {
      if(this.remainingCooldown > 0) {
        this.remainingCooldown --
      } else {
        this.remainingCooldown = 0
        clearInterval(test)
        this.isCooldown = false
      }
    },
    resetCooldown() {
      this.remainingCooldown = 0
      clearInterval(test)
      this.isCooldown = false
    },
    reduceCooldown(seconds) {
      if(this.remainingCooldown >= seconds) {
        this.remainingCooldown = this.remainingCooldown - seconds
      } else {
        this.resetCooldown()
      }

    }
  }
}
</script>

<style scoped lang="scss">
.image-container{
  width: 60px;
  height: 60px;
  position: relative;

  .cooldown-container{
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;

    .cooldown-text{
      color: white;
      font-weight: 700;
      text-shadow: 0 1px 2px black;
      position: absolute;
      z-index: 999;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .cooldown-navy-box {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      background-color: rgba(7, 64, 116, 0.8);
      z-index: 10;
    }
    .dim-box{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 9;
    }

    &.cooldown{
      display: block;
    }
  }

  .img-thumb{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
</style>