<template>
  <div class="recordContent">
    <div class="title">南海区xxx医院</div>
    <div class="title">入院记录</div>
    <div class="info">
      <span>姓名：王敏婷</span>
      <span>性别：女</span>
      <span>年龄：28岁</span>
      <span>科室：呼吸内科</span>
      <span>床号：003</span>
      <span>住院号：0545548</span>
    </div>
    <div class="content">
      <span>姓名：王敏婷</span>
      <span>出生地：海南</span>
      <span>性别：女</span>
      <span>常住地址：海南</span>
      <span>年龄：28岁</span>
      <span>病史陈述者：--</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    recordData: {
      type: String
    }
  },
  computed: {},
  methods: {
  },
  created () {
    console.log(this.recordData)
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.recordContent
  float: left
  width: 100%
  height: 484px
  overflow-y: auto
  .title
    text-align: center
    @include font(25px, 800, $color-word-black)
    &:first-child
  .info
    margin-top: 20px
    padding: 10px 40px
    border-bottom: 1px solid $color-border-grey
    display: flex
    justify-content: space-between
  .content
    margin: 0 auto
    margin-top: 20px
    width: 500px
    display: flex
    flex-wrap: wrap
    justify-content: between
    span
      display: block
      width: 250px
      height: 50px
      line-height: 50px
</style>
