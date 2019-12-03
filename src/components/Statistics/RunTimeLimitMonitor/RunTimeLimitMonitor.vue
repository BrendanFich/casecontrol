<template>
  <div class="runTimeLimitMonitor">
    <div class="top">
      <div class="topLeft">
        <div class="tag">运行病历时限监控</div>
        <div class="infoText">
          全院汇总
        </div>
      </div>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column prop="deptName" label="科室名称" align="center"></el-table-column>
        <el-table-column prop="statisticsTotal" label="统计总数" align="center"></el-table-column>
        <el-table-column prop="admissionRecord" label="入院记录(再次或多次入院记录)" align="center"></el-table-column>
        <el-table-column prop="firstCourse8Unfinished" label="首次病程记录未在8小时内完成" align="center"></el-table-column>
        <el-table-column prop="deathUnfinished" label="死亡讨论记录未在患者死亡后完成" align="center"></el-table-column>
        <el-table-column prop="turn24Unfinished" label="转院记录未在24小时内完成" align="center"></el-table-column>
        <el-table-column prop="out24Unfinished" label="出院记录24小时内未完成" align="center"></el-table-column>
        <el-table-column prop="death24Unfinished" label="死亡记录24小时内未完成" align="center"></el-table-column>
      </el-table>
      <div class="footer">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      department: '',
      tableData: [
        {
          deptName: '急诊科',
          statisticsTotal: '0',
          admissionRecord: '0',
          firstCourse8Unfinished: '0',
          deathUnfinished: '0',
          turn24Unfinished: '0',
          out24Unfinished: '0',
          death24Unfinished: '0'
        },
        {
          deptName: '新生儿(内五)',
          statisticsTotal: '0',
          admissionRecord: '0',
          firstCourse8Unfinished: '0',
          deathUnfinished: '0',
          turn24Unfinished: '0',
          out24Unfinished: '0',
          death24Unfinished: '0'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleCurrentChange () {
      this.$router.push('/qualityControl/deptQcInfo')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.runTimeLimitMonitor
  .top
    display: flex
    justify-content: space-between
    align-items: center
    .topLeft
      display: flex
      align-items: center
      .tag
        background: $color-tag-blue
        width: 138px
        height: 36px
        line-height: 36px
        text-align: center
        @include font(14px, 400, $color-white)
      .infoText
        margin-left: 20px
      .el-button
        width: 90px
        height: 35px
  .main
    width: 100%
    height: 686px
    position: relative
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
