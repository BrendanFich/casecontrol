<template>
  <div class="caseHistoryReview">
    <div class="left">
      <div class="title">
        <div>质控病人</div>
        <el-button type="primary" size="mini" class="refresh" round>
          <img src="./img/refresh.png" alt=""> 刷新
        </el-button>
      </div>
      <div class="navMenu">
        <el-menu
          default-active="/qualityControl/caseHistoryReview/enterHospRecord"
          background-color="transparent"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>人数 (1)</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <img src="./img/femaleAvatar.png"> 王敏婷(033)
              </template>
              <el-menu-item index="">体温单</el-menu-item>
              <el-menu-item index="">长期医嘱</el-menu-item>
              <el-menu-item index="">临时医嘱</el-menu-item>
              <el-menu-item index="/qualityControl/caseHistoryReview/enterHospRecord">入院记录</el-menu-item>
              <el-menu-item index="">首次病程记录</el-menu-item>
              <el-menu-item index="">病程记录</el-menu-item>
              <el-menu-item index="">病程记录(完整浏览)</el-menu-item>
              <el-menu-item index="">查看检验报告</el-menu-item>
              <el-menu-item index="">出院记录</el-menu-item>
              <el-menu-item index="">护士记录</el-menu-item>
              <el-menu-item index="">病案首页</el-menu-item>
              <el-menu-item index="">历史病历</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.caseHistoryReview
  position: absolute
  top: -30px
  left: -50px
  height: calc( 100% )
  .left
    width: 250px
    height: 100%
    border-right: 1px solid $color-border-grey
    .title
      padding: 15px 20px
      display: flex
      justify-content: space-between
      align-items: center
      background: $color-bg-blue
      z-index: -102
      @include font(18px, 800, $color-word-black)
      .refresh
        width: 75px
        height: 30px
        padding: 0
        font-size: 15px
        img
          width: 14px
          height: 16px
    .navMenu
      .el-menu
        border: none
  .main
    position: absolute
    top: 60px
    left: 330px
    width: 1400px
    height: 790px
</style>
