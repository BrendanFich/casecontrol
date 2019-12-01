<template>
  <div class="timeLimitMonitor">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="status" label="状态" align="center">
        <template>
          <i class="el-icon-warning" style='color: #F97463FF; font-size: 20px'></i>
        </template>
      </el-table-column>
      <el-table-column prop="monitorItem" label="监控项目" align="center"></el-table-column>
      <el-table-column prop="beginTime" label="起始时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="截止时间" align="center"></el-table-column>
      <el-table-column prop="timeLimit" label="时限" align="center"></el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tableData: [
        {
          monitorItem: '首次病程记录未在8小时内完成',
          beginTime: '2013-7-25 9:09:48',
          endTime: '2013-7-25 17:09:48',
          timeLimit: '超时474小时'
        },
        {
          monitorItem: '首次病程记录未在8小时内完成',
          beginTime: '2013-7-25 9:09:48',
          endTime: '2013-7-25 17:09:48',
          timeLimit: '超时474小时'
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
.timeLimitMonitor
  .el-table
  .footer
    width: 100%
    text-align: center
    margin-bottom: 40px
    position: absolute
    bottom: 0
    left: 0
</style>
