<template>
  <div class="home">
    <div class="top">
      <div class="title">病历质控系统</div>
      <div class="subNav"></div>
    </div>
    <div class="left">
      <div class="userInfo"></div>
      <div class="nav"></div>
    </div>
    <div class="main">
      <div class="operating"></div>
      <div class="table"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.home
  width: 100%
  height: 100%
  .top
    width: 100%
    height: 80px
    background: $color-white
    box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.08)
    .title
      display: inline-block
      width: 200px
      height: 80px
      line-height: 80px
      text-align: center
      letter-spacing: 4px
      @include font(24px, 500, $color-white)
      background: #1657EBFF
    .left
      background: #1657EBFF
</style>
