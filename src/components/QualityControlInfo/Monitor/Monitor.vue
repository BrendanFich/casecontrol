<template>
  <div class="monitor">
    <div class="top">
      <ul class="patientInfo">
        <li>
          <div class="key">床号</div>
          <div class="value">006</div>
        </li>
        <li>
          <div class="key">姓名</div>
          <div class="value">宋凝</div>
        </li>
        <li>
          <div class="key">质控次数</div>
          <div class="value">1</div>
        </li>
      </ul>
      <ul class="operating">
        <li>
          <el-button round class="btn">上一人</el-button>
        </li>
        <li>
          <el-button round class="btn">下一人</el-button>
        </li>
        <li>
          <el-button round class="btn">返回列表</el-button>
        </li>
      </ul>
    </div>
    <div class="main">
      <el-dropdown class="selectStatus">
        <span class="el-dropdown-link">
          缺陷状态
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>全部</el-dropdown-item>
          <el-dropdown-item>已完成</el-dropdown-item>
          <el-dropdown-item>未完成</el-dropdown-item>
          <el-dropdown-item>取消</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="tabs">
        <div
          v-for="(item, index) in tabsList"
          :key="index"
          class="tab"
          :class="{active: tabName === item.tabName}"
          :to= item.path
          @click="selectTab(item)"
        >
          <span class="tabName">{{item.tabName}}</span>
          <span class="number">{{item.number}}</span>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      value: '',
      tabName: '时限监控',
      tabsList: [
        {
          tabName: '缺陷登记',
          path: '/qualityControlInfo/monitor/defectRegister',
          number: 20
        },
        {
          tabName: '时限监控',
          path: '/qualityControlInfo/monitor/timeLimitMonitor',
          number: 20
        },
        {
          tabName: '内容监控',
          path: '/qualityControlInfo/monitor/contentMonitor',
          number: 1
        }
      ],
      statusOptions: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '已完成'
        },
        {
          value: '选项3',
          label: '未完成'
        },
        {
          value: '选项4',
          label: '取消'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleClick (e) {},
    selectTab (item) {
      this.tabName = item.tabName
      this.$router.push(item.path)
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.monitor
  width: calc(100% - 120px)
  .top
    width: 1720px
    height: 80px
    position: fixed
    top: 0px
    left: 200px
    display: flex
    justify-content: space-between
    align-items: center
  li
    display: inline-block
    width: 160px
    text-align: center
  .patientInfo>li
    border-right: 1px solid $color-border-grey
    &:last-child
      border: none
    .key
      @include font(16px, 400, $color-word-blue)
      line-height: 30px
    .value
      line-height: 20px
  .operating>li
    .btn
      @include font(16px, 400, $color-word-blue)
      width: 105px
      height: 30px
      padding: 0
      border-color: $color-word-blue
  .main
    .selectStatus
      position: absolute
      right: 70px
      top: 30px
      z-index: 1
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
    .content
      clear: both
      border-top: 3px solid $color-border-blue
</style>
