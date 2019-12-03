<template>
  <div class="sectionQcInfoSum2">
    <div class="top">
      <div class="topLeft">
        <div class="tag">环节质控信息汇总</div>
        <div class="infoText">
          全院 共
          <span style="color: #3399FFFF; font-size: 18px">31</span> 个科室
          <span style="color: #3399FFFF; font-size: 14px">(双击科室查看详情)</span>
        </div>
      </div>
      <div class="topRight">
        <div class="input">
          <label>按科室过滤 </label>
          <el-input v-model="department"></el-input>
        </div>
        <el-button type="primary" class="btn">刷新</el-button>
      </div>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column prop="deptName" label="科室名称" align="center"></el-table-column>
        <el-table-column prop="inHospitalAmount" label="在院人数" align="center"></el-table-column>
        <el-table-column prop="newAmount" label="新收人数" align="center"></el-table-column>
        <el-table-column prop="inAmount" label="转入数" align="center"></el-table-column>
        <el-table-column prop="outAmount" label="转出数" align="center"></el-table-column>
        <el-table-column prop="oneLevelAmount" label="一级护理病人数" align="center"></el-table-column>
        <el-table-column prop="seriousAmount" label="危重人数" align="center"></el-table-column>
        <el-table-column prop="surgeryAmount" label="手术例数" align="center"></el-table-column>
        <el-table-column prop="qcAmount" label="质控人数" align="center"></el-table-column>
        <el-table-column prop="defectTatal" label="缺陷问题总数" align="center"></el-table-column>
        <el-table-column prop="unfinishTotal" label="未完成总数" align="center"></el-table-column>
        <el-table-column prop="handUnfinish" label="手动监控未完成" align="center"></el-table-column>
        <el-table-column prop="timeUnfinish" label="时限监控未完成" align="center"></el-table-column>
        <el-table-column prop="contentUnfinish" label="内容监控未完成" align="center"></el-table-column>
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
          deptName: '心血管内科',
          inHospitalAmount: '1',
          newAmount: '0',
          inAmount: '2',
          outAmount: '2',
          oneLevelAmount: '2',
          seriousAmount: '0',
          surgeryAmount: '6',
          qcAmount: '1',
          defectTatal: '64',
          unfinishTotal: '41',
          handUnfinish: '2',
          timeUnfinish: '24',
          contentUnfinish: '15'
        },
        {
          deptName: '呼吸内科',
          inHospitalAmount: '2',
          newAmount: '0',
          inAmount: '0',
          outAmount: '0',
          oneLevelAmount: '0',
          seriousAmount: '0',
          surgeryAmount: '0',
          qcAmount: '0',
          defectTatal: '0',
          unfinishTotal: '0',
          handUnfinish: '0',
          timeUnfinish: '0',
          contentUnfinish: '0'
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
.sectionQcInfoSum2
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
    .topRight
      margin-top: -20px
      display: flex
      justify-content: flex-end
      align-items: center
      label
        width: 150px
      .input
        display: flex
        align-items: center
        >>>.el-input__inner
          height: 32px
          width: 148px
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
