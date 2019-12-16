<template>
  <div class="queryByDoc">
    <div class="top">
      <MySelect label="选择医生" :options="options" v-model="value" :icon="'el-icon-user'"></MySelect>
      <el-button type="primary">刷新</el-button>
    </div>
    <div class="content">
      <div class="table">
        <el-table :data="tableData" style="width: 100%" @current-change="handleCurrentChange">
          <el-table-column prop="patientStatus" label="病人状态" align="center"></el-table-column>
          <el-table-column prop="inHospitalNo" label="住院号" align="center"></el-table-column>
          <el-table-column prop="bedNo" label="床号" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" align="center"></el-table-column>
          <el-table-column prop="sex" label="性别" align="center"></el-table-column>
          <el-table-column prop="leftProblemAmount" label="遗留问题总数" align="center"></el-table-column>
          <el-table-column prop="manualFixedAmount" label="手动缺陷完成数" align="center">
            <template slot-scope="scope">
              <span :class="{notice: scope.row.manualFixedAmount > 0}">{{ scope.row.manualFixedAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="timedOutAmount" label="时限已超时数" align="center">
            <template slot-scope="scope">
              <span :class="{notice: scope.row.timedOutAmount > 0}">{{ scope.row.timedOutAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="wattingFinishAmount" label="内容待完成数" align="center">
            <template slot-scope="scope">
              <span :class="{notice: scope.row.wattingFinishAmount > 0}">{{ scope.row.wattingFinishAmount }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import MySelect from '@/base/MySelect/MySelect'
export default {
  components: {MySelect},
  data () {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '周平'
        },
        {
          value: '选项3',
          label: '吴礼文'
        },
        {
          value: '选项4',
          label: '贾红'
        },
        {
          value: '选项5',
          label: '周萨'
        },
        {
          value: '选项6',
          label: '龙时尚'
        },
        {
          value: '选项7',
          label: '宋京'
        },
        {
          value: '选项8',
          label: '陈就'
        },
        {
          value: '选项9',
          label: '谢敏'
        }
      ],
      tableData: [
        {
          patientStatus: '出院',
          inHospitalNo: '304232',
          bedNo: '--',
          name: '王之平',
          sex: '男',
          leftProblemAmount: '2',
          manualFixedAmount: '2',
          timedOutAmount: '0',
          wattingFinishAmount: '0'
        },
        {
          patientStatus: '在院',
          inHospitalNo: '304219',
          bedNo: '009',
          name: '欧善仪',
          sex: '女',
          leftProblemAmount: '5',
          manualFixedAmount: '0',
          timedOutAmount: '4',
          wattingFinishAmount: '1'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleCurrentChange () {
      this.$router.push('/qualityControl/overview/monitor/timeLimitMonitor')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.queryByDoc
  height: calc(100% - 130px)
  .top
    display: flex
    align-items: center
    .el-button
      margin-left: 15px
  .content
    position: relative
    margin-top: 18px
    width: 100%
    height: 100%
    border: 1px solid rgba(238,238,238,1)
    box-shadow: 3px 4px 5px 0px rgba(231,233,235,0.49)
    .footer
      width: 100%
      text-align: center
      margin-bottom: 40px
      position: absolute
      bottom: 0
      left: 0
    .notice
      color: $color-notice-red
    >>>.el-table__row
      cursor: pointer
  .el-button
    width: 90px
    height: 32px
    padding: 0
</style>
