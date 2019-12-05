<template>
  <div class="home">
    <div class="top">
      <div class="title">病历质控系统</div>
    </div>
    <div class="left">
      <img class="avatar" src="./img/faleAvatar.png">
      <div class="name">Admin</div>
      <div class="nav">
        <el-menu
          :unique-opened="true"
          background-color="transparent"
          text-color="#fff"
          active-text-color="#99FFFFFF"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>质控</span>
            </template>
            <el-menu-item index="/qualityControl/sectionQcInfoSum1">环节质控信息汇总</el-menu-item>
            <el-menu-item index="/qualityControl/endQcInfoSum1">终末质控信息汇总</el-menu-item>
            <el-menu-item index="/qualityControl/caseHistoryReview">病例复查</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>统计</span>
            </template>
            <el-menu-item index="/statistics/sectionQcInfoSum2">环节质控信息汇总</el-menu-item>
            <el-menu-item index="/statistics/endQcInfoSum2">终末质控信息汇总</el-menu-item>
            <el-menu-item index="/statistics/runTimeLimitMonitor">运行病历时限监控</el-menu-item>
            <el-menu-item index="/statistics/endScore">终末病历评分</el-menu-item>
            <el-menu-item index="/statistics/qcerWorkload">质控员工作量</el-menu-item>
            <el-menu-item index="/statistics/qcDetailSearch">质控问题明细查询</el-menu-item>
            <el-menu-item index="/statistics/searchByDefect">缺陷明细查询(按缺陷)</el-menu-item>
            <el-menu-item index="/statistics/searchByDept">缺陷明细查询(按科室)</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span>字典维护</span>
            </template>
            <el-menu-item index="/dictionaryMaint/maintQcDictionary">维护质控字典</el-menu-item>
            <el-menu-item index="/dictionaryMaint/maintQcTemplate">维护质控模板</el-menu-item>
            <el-menu-item index="/dictionaryMaint/maintDeptQcTemplate">维护科室质控模板</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统维护</span>
            </template>
            <el-menu-item index="/systemMaint/userManage">用户管理</el-menu-item>
            <el-menu-item index="/systemMaint/rolesManage">角色管理</el-menu-item>
            <el-menu-item index="/systemMaint/menuManage">菜单管理</el-menu-item>
            <el-menu-item index="/systemMaint/paramsConfig">参数配置</el-menu-item>
            <el-menu-item index="/systemMaint/passwordChange">密码修改</el-menu-item>
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
      flex: 1
      width: 100%
      overflow-x: hidden
      overflow-y: auto
      &::-webkit-scrollbar
        display: none
      >>>.el-menu
        width: 100%
        .el-submenu.is-opened>.el-submenu__title
          background: $color-white!important
          color: $color-primary!important
          i
            color: $color-primary
        .el-submenu__title
          i
            color: $color-white
          &:hover
            background: $color-white!important
            color: $color-primary!important
            i
              color: $color-primary
        .el-menu-item
          &:hover
            background: transparent!important
        .el-menu-item.is-active
          color: $color-menu-green!important
          background: transparent!important
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
