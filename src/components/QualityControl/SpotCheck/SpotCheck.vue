<template>
  <div class="spotCheck">
    <div class="left">
      <div class="title">
        <div>质控病人</div>
        <el-button type="primary" size="mini" class="refresh" round>
          <img src="./img/refresh.png" alt /> 刷新
        </el-button>
      </div>
      <div class="navMenu">
        <div class="peopleSelect">
          <span>人数 (1)</span>
          <i class="el-icon-arrow-down"></i>
          <i class="el-icon-arrow-up"></i>
        </div>
        <el-menu
          default-active="/qualityControl/spotCheck/enterHospRecord"
          background-color="transparent"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <img src="./img/femaleAvatar.png" /> 王敏婷(033)
            </template>
            <el-menu-item index>体温单</el-menu-item>
            <el-menu-item index>长期医嘱</el-menu-item>
            <el-menu-item index>临时医嘱</el-menu-item>
            <el-menu-item index="/qualityControl/spotCheck/enterHospRecord">入院记录</el-menu-item>
            <el-menu-item index>首次病程记录</el-menu-item>
            <el-menu-item index>病程记录</el-menu-item>
            <el-menu-item index>病程记录(完整浏览)</el-menu-item>
            <el-menu-item index>查看检验报告</el-menu-item>
            <el-menu-item index>出院记录</el-menu-item>
            <el-menu-item index>护士记录</el-menu-item>
            <el-menu-item index>病案首页</el-menu-item>
            <el-menu-item index>历史病历</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <div class="operatings">
        <el-button type="primary" class="btn" @click="regVisible = true">缺陷登记</el-button>
        <el-button type="primary" class="btn">查看缺陷</el-button>
        <el-button type="primary" class="btn" @click="isScore = !isScore">评分</el-button>
        <el-button type="primary" class="btn">发送质控问题</el-button>
        <el-button type="primary" class="btn">质量没问题</el-button>
      </div>
      <div class="patientInfo">
        <div class="item">
          <span class="key">姓名：</span>
          <span class="value">王敏婷</span>
        </div>
        <div class="item">
          <span class="key">住院号：</span>
          <span class="value">545548</span>
        </div>
        <div class="item">
          <span class="key">床号：</span>
          <span class="value">003</span>
        </div>
        <div class="item">
          <span class="key">性别：</span>
          <span class="value">女</span>
        </div>
        <div class="item">
          <span class="key">年龄：</span>
          <span class="value">28岁</span>
        </div>
        <div class="item">
          <span class="key">结算：</span>
          <span class="value">自费</span>
        </div>
        <div class="dashed"></div>
        <div class="item">
          <span class="key">护理：</span>
          <span class="value">--</span>
        </div>
        <div class="item">
          <span class="key">病情：</span>
          <span class="value">--</span>
        </div>
        <div class="item">
          <span class="key">饮食：</span>
          <span class="value">--</span>
        </div>
        <div class="item">
          <span class="key">体重：</span>
          <span class="value">--</span>
        </div>
        <div class="item">
          <span class="key">入院日期：</span>
          <span class="value">2012-11-23</span>
        </div>
        <div class="item">
          <span class="key">特注：</span>
          <span class="value">--</span>
        </div>
        <div class="dashed"></div>
      </div>
      <router-view></router-view>
    </div>
    <ProblemRegDialog :visible="regVisible" @changeVisible="changeVisible"></ProblemRegDialog>
  </div>
</template>

<script>
import ProblemRegDialog from './ProblemRegDialog/ProblemRegDialog'
export default {
  components: { ProblemRegDialog },
  data () {
    return {
      regVisible: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen () {},
    handleClose () {},
    changeVisible (value) {
      this.regVisible = value
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.spotCheck
  position: absolute
  top: -30px
  left: -50px
  height: 100%
  .left
    width: 250px
    height: 100%
    border-right: 1px solid $color-border-grey
    .title
      padding: 0 20px
      height: 60px
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
      .peopleSelect
        padding: 0px 20px
        height: 60px
        line-height: 60px
        display: flex
        justify-content: space-between
        align-items: center
        span
          flex: 1
        i
          display: inline-block
          width: 20px
          height: 20px
          margin-left: 5px
          @include font(14px, 800, $color-word-blue)
          cursor: pointer
      .el-menu
        border: none
  .main
    position: absolute
    top: 60px
    left: 330px
    width: 1400px
    height: 790px
    .operatings>.btn
      display: inline-block
    .patientInfo
      margin-top: 20px
      padding: 30px 50px
      clear: both
      display: flex
      flex-wrap: wrap
      align-items: center
      justify-content: space-between
      @include box-shadow
      .dashed
        height: 1px
        width: 100%
        border-bottom: 1px dashed $color-border-grey
        margin: 10px 0
      .item
        width: 200px
        .key
          color: $color-word-blue
</style>
