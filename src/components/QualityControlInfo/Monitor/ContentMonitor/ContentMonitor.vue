<template>
  <div class="contentMonitor">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="status" label="状态" align="center">
        <template>
          <i class="" style='color: #F97463FF; font-size: 20px'></i>
        </template>
      </el-table-column>
      <el-table-column prop="itemCode" label="项目编码" align="center"></el-table-column>
      <el-table-column prop="itemName" label="项目名称" align="center"></el-table-column>
      <el-table-column prop="beginTime" label="开始时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="完成时间" align="center"></el-table-column>
      <el-table-column prop="timeLevel" label="项目等级" align="center"></el-table-column>
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
          itemCode: '300024',
          itemName: '缺死亡讨论记录',
          beginTime: '2013-7-25 9:09:48',
          endTime: '--',
          timeLevel: '已'
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
.contentMonitor
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
