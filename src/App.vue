<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created () {
    // 在页面加载时读取localStorage里的状态信息
    localStorage.getItem('vuexData') &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem('vuexData'))
        )
      )
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('vuexData', JSON.stringify(this.$store.state))
    })
  }
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
