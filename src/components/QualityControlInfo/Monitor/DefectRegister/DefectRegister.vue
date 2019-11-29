<template>
  <div class="defectRegister">
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
      tableData: []
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
.defectRegister
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
