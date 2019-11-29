<template>
  <div class="qcEndInfo">
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
        <label>出院日期</label>
        <el-date-picker
          class="datePicker"
          v-model="startTime"
          type="date"
          placeholder="请选择开始日期">
        </el-date-picker>
        -
        <el-date-picker
          class="datePicker"
          v-model="endTime"
          type="date"
          placeholder="请选择结束日期">
        </el-date-picker>
        <el-button type="primary">刷新</el-button>
      </div>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%">
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
      startTime: '',
      endTime: '',
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
  methods: {},
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.qcEndInfo
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
    .topRight
      display: flex
      align-items: center
      .el-button
        width: 90px
        height: 35px
        padding: 0
      .datePicker
        margin: 0 20px
  .main
    width: 100%
    height: 686px
    position: relative
    border: 1px solid rgba(238,238,238,1)
    box-shadow: 3px 4px 5px 0px rgba(231,233,235,0.49)
    .footer
      width: 100%
      text-align: center
      margin-bottom: 40px
      position: absolute
      bottom: 0
      left: 0
</style>
