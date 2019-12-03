<template>
  <div class="endScore">
    <div class="operatings">
      <el-button type="primary" class="btn">导出</el-button>
      <el-button type="primary" class="btn">打印</el-button>
      <el-button type="primary" class="btn">刷新</el-button>
    </div>
    <div class="main">
      <ul class="sideBar">
        <li :class="{active : sideActive ==='全院汇总'}" @click="changeSideActive('全院汇总')">全院汇总</li>
        <li :class="{active : sideActive ==='科室汇总'}" @click="changeSideActive('科室汇总')">科室汇总</li>
        <li :class="{active : sideActive ==='病人汇总'}" @click="changeSideActive('病人汇总')">病人汇总</li>
        <li :class="{active : sideActive ==='患者详情'}" @click="changeSideActive('患者详情')">患者详情</li>
      </ul>
      <div class="tabs">
        <div class="tab" :class="{active: tabName === '运行病历时限监控统计'}" @click="selectTab('运行病历时限监控统计')">
          <span class="tabName">运行病历时限监控统计</span>
        </div>
        <div class="tab" :class="{active: tabName === '运行病历时限监控统计(科室)'}" @click="selectTab('运行病历时限监控统计(科室)')">
          <span class="tabName">运行病历时限监控统计(科室)</span>
        </div>
        <div class="tab" :class="{active: tabName === '终末病历评分统计'}" @click="selectTab('终末病历评分统计')">
          <span class="tabName">终末病历评分统计</span>
        </div>
      </div>
      <div class="panel" v-if="tabName === '运行病历时限监控统计'">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="690">
            <el-table-column prop="deptCode" label="科室代码" align="center"></el-table-column>
            <el-table-column prop="deptName" label="科室名称" align="center" width="300"></el-table-column>
            <el-table-column prop="scoredAmount" label="已评分病历数" align="center"></el-table-column>
            <el-table-column prop="classARate" label="甲级病历率" align="center"></el-table-column>
            <el-table-column prop="classAAmount" label="甲级病历数" align="center"></el-table-column>
            <el-table-column prop="classBAmount" label="乙级病历数" align="center"></el-table-column>
            <el-table-column prop="classCAmount" label="丙级病历数" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="footer">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </div>
      <div class="panel" v-if="tabName === '运行病历时限监控统计(科室)'">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="690">
            <el-table-column prop="deptCode" label="科室代码" align="center"></el-table-column>
            <el-table-column prop="deptName" label="科室名称" align="center" width="300"></el-table-column>
            <el-table-column prop="scoredAmount" label="已评分病历数" align="center"></el-table-column>
            <el-table-column prop="classARate" label="甲级病历率" align="center"></el-table-column>
            <el-table-column prop="classAAmount" label="甲级病历数" align="center"></el-table-column>
            <el-table-column prop="classBAmount" label="乙级病历数" align="center"></el-table-column>
            <el-table-column prop="classCAmount" label="丙级病历数" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="footer">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </div>
      <div class="panel" v-if="tabName === '终末病历评分统计'">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="690">
            <el-table-column prop="deptCode" label="科室代码" align="center"></el-table-column>
            <el-table-column prop="deptName" label="科室名称" align="center" width="300"></el-table-column>
            <el-table-column prop="scoredAmount" label="已评分病历数" align="center"></el-table-column>
            <el-table-column prop="classARate" label="甲级病历率" align="center"></el-table-column>
            <el-table-column prop="classAAmount" label="甲级病历数" align="center"></el-table-column>
            <el-table-column prop="classBAmount" label="乙级病历数" align="center"></el-table-column>
            <el-table-column prop="classCAmount" label="丙级病历数" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="footer">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabName: '运行病历时限监控统计',
      sideActive: '全院汇总',
      tableData: [
        {
          deptCode: '10005',
          deptName: '急诊科',
          scoredAmount: '0',
          classARate: '0',
          classAAmount: '0',
          classBAmount: '0',
          classCAmount: '0'
        },
        {
          deptCode: '10006',
          deptName: '急诊科',
          scoredAmount: '0',
          classARate: '0',
          classAAmount: '0',
          classBAmount: '0',
          classCAmount: '0'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    selectTab (tabName) {
      this.tabName = tabName
    },
    changeSideActive (sideActiveName) {
      this.sideActive = sideActiveName
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.endScore
  .operatings
    .btn
      display: inline-block
  .main
    position: relative
    float: left
    margin-top: 20px
    margin-left: 30px
    width: 100%
    .sideBar
      position: absolute
      left: -35px
      top: 53px
      >li
        width: 35px
        height: 117px
        margin: 2px 0
        border-radius: 10px 0 0 10px
        writing-mode: vertical-rl
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid $color-border-grey
        background: $color-tag-grey
        cursor: pointer
      >li.active
        width: 40px
        margin-left: -5px
        color: $color-white
        background: $color-word-blue
    .tabs
      .tab
        float: left
        width: 200px
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
    .panel
      float: left
      width: 100%
      @include box-shadow
      border-top: none
      .table
        border-top: 3px solid $color-border-blue
      .footer
        width: 100%
        text-align: center
        margin-bottom: 40px
        position: absolute
        bottom: 0
        left: 0
</style>
