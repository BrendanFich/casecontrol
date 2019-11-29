<template>
  <div class="home">
    <div class="top">
      <div class="title">病历质控系统</div>
    </div>
    <div class="left">
      <div class="avatar"></div>
      <div class="name">Admin</div>
      <div class="nav">
        <el-menu
          default-active
          background-color="transparent"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title" class="ss">
              <i class="el-icon-location"></i>
              <span>质控</span>
            </template>
            <el-menu-item index="1-1" @click="$router.push('/qualityControl/qcSectionInfo')">环节质控信息汇总</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('/qualityControl/qcEndInfo')">终末质控信息汇总</el-menu-item>
            <el-menu-item index="1-3" @click="$router.push('/qualityControl/recordReview')">病例复查</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>统计</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('/statistics/statsSectionInfo')">环节质控信息汇总</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push('/statistics/statsEndInfo')">终末质控信息汇总</el-menu-item>
            <el-menu-item index="2-3">运行病历时限监控</el-menu-item>
            <el-menu-item index="2-4">终末病历评分</el-menu-item>
            <el-menu-item index="2-5">质控员工作量</el-menu-item>
            <el-menu-item index="2-6">质控问题明细查询</el-menu-item>
            <el-menu-item index="2-7">缺陷明细查询(按缺陷)</el-menu-item>
            <el-menu-item index="2-8">缺陷明细查询(按科室)</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>字典维护</span>
            </template>
            <el-menu-item index="3-1">维护质控字典</el-menu-item>
            <el-menu-item index="3-2">维护质控模板</el-menu-item>
            <el-menu-item index="3-3">维护科室质控模板</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统维护</span>
            </template>
            <el-menu-item index="4-1">用户管理</el-menu-item>
            <el-menu-item index="4-2">角色管理</el-menu-item>
            <el-menu-item index="4-3">菜单管理</el-menu-item>
            <el-menu-item index="4-4">参数配置</el-menu-item>
            <el-menu-item index="4-5">密码修改</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    linkTo (index) {}
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.home
  width: 100%
  height: 100%
  position: relative
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
    float: left
    background: linear-gradient(to bottom, #2b6cfcFF, #4352f9FF)
    width: 200px
    height: calc(100vh - 80px)
    display: flex
    flex-direction: column
    align-items: center
    .avatar
      margin-top: 32px
      margin-bottom: 22px
      width: 73px
      height: 73px
      background: $color-white
      border-radius: 50%
    .name
      @include font(16px, 400, $color-white)
      margin-bottom: 40px
    .nav
      width: 100%
      overflow-x: hidden
      overflow-y: auto
      &::-webkit-scrollbar
        display: none
      .el-menu
        width: 100%
        >>>.el-submenu__title
          @include font(14px, 800, $color-white)
          background: transparent
          p,i
            @include font(14px, 400, $color-white)
          &:hover
            background: $color-white!important
            color: $color-word-blue
            p,i
              @include font(14px, 400, $color-word-blue)
        .el-menu-item
          @include font(14px, 800, $color-white)
          &:hover
            background: transparent!important
            color: $color-menu-green
        .el-menu-item.is-active
          @include font(14px, 800, $color-menu-green)
          background: transparent!important
      .el-menu.is-active
        .el-submenu__title
          background: $color-white!important

  .main
    position: absolute
    top: 80px
    left: 200px
    width: calc(100% - 200px)
    height: calc(100% - 80px)
    overflow-y: auto
    .view
      padding: 30px 70px 0 50px
</style>
