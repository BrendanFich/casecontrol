<template>
  <div class="endQcInfoSum1">
    <div class="top">
      <div class="topLeft">
        <div class="tag">终末质控信息汇总</div>
        <div class="infoText">
          全院 共
          <span style="color: #3399FFFF; font-size: 18px">31</span> 个科室
          <span style="color: #3399FFFF; font-size: 14px">(双击科室查看详情)</span>
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
      <el-table :data="tableData" style="width: 100%" class="table" @current-change="handleCurrentChange" :row-class-name="tableRowClassName">
        <el-table-column prop="deptName" label="科室名称" align="center"></el-table-column>
        <el-table-column prop="outHospitalAmount" label="出院人数" align="center"></el-table-column>
        <el-table-column prop="liveOver30Amount" label="住院超过30天" align="center"></el-table-column>
        <el-table-column prop="liveOver60Amount" label="住院超过60天" align="center"></el-table-column>
        <el-table-column prop="notArchivedAmount" label="未归档数" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.notArchivedAmount>0}">{{scope.row.notArchivedAmount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="ArchivedAmount" label="已归档数" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.ArchivedAmount>0}">{{scope.row.ArchivedAmount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="deathAmount" label="死亡人数" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.deathAmount>0}">{{scope.row.deathAmount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="surgeryAmount" label="手术例数" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.surgeryAmount>0}">{{scope.row.surgeryAmount}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="qcAmount" label="质控人数" align="center"></el-table-column>
        <el-table-column prop="defectTatal" label="缺陷问题总数" align="center"></el-table-column>
        <el-table-column prop="unfinishTotal" label="未完成总数" align="center"></el-table-column>
        <el-table-column prop="handUnfinish" label="手动监控未完成" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.handUnfinish>0}">{{scope.row.handUnfinish}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="timeUnfinish" label="时限监控未完成" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.timeUnfinish>0}">{{scope.row.timeUnfinish}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="contentUnfinish" label="内容监控未完成" align="center">
          <template slot-scope="scope">
            <span :class="{noticeNo: scope.row.contentUnfinish>0}">{{scope.row.contentUnfinish}}</span>
          </template>
        </el-table-column>
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
          deptName: '泌尿胸外科',
          outHospitalAmount: '2',
          liveOver30Amount: '0',
          liveOver60Amount: '0',
          notArchivedAmount: '2',
          ArchivedAmount: '2',
          deathAmount: '1',
          surgeryAmount: '3',
          qcAmount: '0',
          defectTatal: '32',
          unfinishTotal: '19',
          handUnfinish: '1',
          timeUnfinish: '12',
          contentUnfinish: '7'
        },
        {
          deptName: '神经外科',
          outHospitalAmount: '0',
          liveOver30Amount: '0',
          liveOver60Amount: '0',
          notArchivedAmount: '0',
          ArchivedAmount: '0',
          deathAmount: '0',
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
    },
    tableRowClassName ({ row, rowIndex }) {
      let isRed =
        row.notArchivedAmount > 0 ||
        row.archivedAmount > 0 ||
        row.deathAmount > 0 ||
        row.surgeryAmount > 0 ||
        row.handUnfinish > 0 ||
        row.timeUnfinish > 0 ||
        row.contentUnfinish > 0
      if (isRed) {
        return 'warningRow'
      }
      return ''
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.endQcInfoSum1
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
    >>>.warningRow
      background: $color-warning-red
    .noticeNo
      color: $color-notice-red
    >>>.el-table__row
      cursor: pointer
    .footer
      width: 100%
      text-align: center
      margin-bottom: 40px
      position: absolute
      bottom: 0
      left: 0
</style>
