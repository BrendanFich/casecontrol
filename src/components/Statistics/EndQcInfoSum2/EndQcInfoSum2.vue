<template>
  <div class="endQcInfoSum2">
    <div class="top">
      <div class="topLeft">
        <div class="tag">环节质控信息汇总</div>
        <div class="infoText">
          全院 共
          <span style="color: #3399FFFF; font-size: 18px">31</span> 个科室
        </div>
      </div>
      <div class="topRight">
        <div class="datePick">
          <label>出院日期</label>
          <el-date-picker
            size="small"
            style="width:148px"
            v-model="beginDate"
            type="date"
            placeholder="选择开始日期">
          </el-date-picker>
          -
          <el-date-picker
            size="small"
            style="width:148px"
            v-model="endDate"
            type="date"
            placeholder="选择结束日期">
          </el-date-picker>
        </div>
        <div class="input">
          <label>按科室过滤 </label>
          <el-input v-model="department"></el-input>
        </div>
        <el-button type="primary" class="btn">刷新</el-button>
      </div>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column prop="deptCode" label="科室编码" align="center"></el-table-column>
        <el-table-column prop="deptName" label="科室名称" align="center"></el-table-column>
        <el-table-column prop="inHospitalAmount" label="在院人数" align="center"></el-table-column>
        <el-table-column prop="newAmount" label="新收人数" align="center"></el-table-column>
        <el-table-column prop="oneLevelAmount" label="一级护理" align="center"></el-table-column>
        <el-table-column prop="seriousAmount" label="危重人数" align="center"></el-table-column>
        <el-table-column prop="qcAmount" label="质控人数" align="center"></el-table-column>
        <el-table-column prop="defectTatal" label="缺陷问题总数" align="center"></el-table-column>
        <el-table-column prop="defectRegisterUnfinish" label="缺陷登记未完成" align="center"></el-table-column>
        <el-table-column prop="timeOver" label="时限监控已超时" align="center"></el-table-column>
        <el-table-column prop="timeNotOver" label="时限监控未超时" align="center"></el-table-column>
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
      beginDate: '',
      endDate: '',
      tableData: [
        {
          deptCode: '00',
          deptName: '本区',
          inHospitalAmount: '1',
          newAmount: '0',
          oneLevelAmount: '2',
          seriousAmount: '0',
          qcAmount: '1',
          defectTatal: '64',
          defectRegisterUnfinish: '41',
          timeOver: '2',
          timeNotOver: '24',
          contentUnfinish: '15'
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
.endQcInfoSum2
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
        margin-left: 30px
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
