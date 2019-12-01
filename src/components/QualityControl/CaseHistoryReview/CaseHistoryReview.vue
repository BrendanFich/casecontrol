<template>
  <div class="caseHistoryReview">
    <div class="left">
      <div class="title">质控病人
        <el-button type="primary" size="mini" class="refresh">刷新</el-button>
      </div>
      <div class="navMenu">
        <el-menu
          default-active
          background-color="transparent"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>王敏婷(033)</span>
            </template>
            <el-menu-item index="1-1" @click="$router.push('/qualityControl/qcSectionInfo')">体温单</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('/qualityControl/qcEndInfo')">长期医嘱</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">临时医嘱</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">入院记录</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">首次病程记录</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">病程记录</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">病程记录(完整浏览)</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">查看检验报告</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">出院记录</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">护士记录</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">病案首页</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/caseHistoryReview')">历史病历</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
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
  .left
    width: 250px
  .title
    .refresh
      width: 75px
      height: 30px
  .navMenu

</style>
