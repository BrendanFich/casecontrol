<template>
  <div class="enterHospRecord">
    <div class="operatings">
      <el-button type="primary" class="btn">缺陷登记</el-button>
      <el-button type="primary" class="btn">查看缺陷</el-button>
      <el-button type="primary" class="btn">评分</el-button>
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
    <div class="selectBar">
      <div class="tabs">
        <div class="tab" :class="{active: tabName === '查看缺陷登记'}" @click="selectTab('查看缺陷登记')">
          <span class="tabName">查看缺陷登记</span>
        </div>
        <div class="tab" :class="{active: tabName === '入院记录'}" @click="selectTab('入院记录')">
          <span class="tabName">入院记录</span>
        </div>
      </div>
      <div class="operatingBtns">
        <el-button class="btn">刷新列表</el-button>
        <el-button class="btn">重建文档</el-button>
        <el-button class="btn">缺陷</el-button>
        <el-button class="btn">关闭</el-button>
      </div>
    </div>
    <div class="panel" v-if="tabName === '查看缺陷登记'">
      查看缺陷登记
    </div>
    <div class="panel" v-if="tabName === '入院记录'">
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
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabName: '入院记录',
      patientInfo: {
        '姓名:': '王敏婷'
      },
      tabsList: [
        {
          tabName: '查看缺陷登记',
          number: 20
        },
        {
          tabName: '入院记录',
          number: 20
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    selectTab (tabName) {
      this.tabName = tabName
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.enterHospRecord
  .operatings
    .btn
      display: inline-block
  .patientInfo
    margin-top: 20px
    padding: 50px
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
  .selectBar
    float: left
    margin-top: 20px
    .tabs
      .tab
        float: left
        width: 120px
        height: 36px
        text-align: center
        line-height: 36px
        @include font(14px, 400, $color-word-black)
        border: 1px solid $color-border-grey
        border-right: none
        border-bottom: none
        cursor: pointer
        &:last-child
          border-right: 1px solid $color-border-grey
      .active
        background: $color-border-blue
        color: $color-white
    .operatingBtns
      float: left
      clear: both
      width: calc(100% - 20px)
      height: 56px
      background: $color-bg-label
      border: 1px solid $color-border-grey
      border-top: 3px solid $color-border-blue
      display: flex
      align-items: center
      padding-left: 20px
  .panel
    padding: 0 40px
    margin-top: 10px
    float: left
    width: calc(100% - 80px)
    height: 387px
    @include box-shadow
    .title
      text-align: center
      @include font(25px, 800, $color-word-black)
      &:first-child
        margin-top: 47px
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
