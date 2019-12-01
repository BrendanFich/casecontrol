<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import '~assets/sass/variable'
html, body
  height: 100%
  margin: 0
  padding: 0
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
  color: $color-word-black
ul,li
  list-style: none
  margin: 0
  padding: 0
.el-button
  width: 90px
  height: 32px
  padding: 0
</style>
