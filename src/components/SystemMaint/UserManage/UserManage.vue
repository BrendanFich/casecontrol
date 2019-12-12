<template>
  <div class="userManage">
    <div class="operateBtns">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">删除</el-button>
      <el-button type="primary">保存</el-button>
      <el-button type="primary">修改</el-button>
    </div>
    <div class="tag">用户管理</div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column type="index" label="序号" align="center" width="100px"></el-table-column>
        <el-table-column prop="accountNo" label="账号" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" align="center"></el-table-column>
        <el-table-column prop="affiliation" label="所属机构" align="center"></el-table-column>
        <el-table-column prop="department" label="科室" align="center"></el-table-column>
        <el-table-column prop="ward" label="病区" align="center"></el-table-column>
        <el-table-column prop="position" label="职务" align="center"></el-table-column>
        <el-table-column prop="image" label="图片" align="center"></el-table-column>
        <el-table-column prop="signImage" label="签名图" align="center"></el-table-column>
        <el-table-column prop="entryDate" label="录入日期" align="center"></el-table-column>
        <el-table-column prop="entryStaff" label="录入人员" align="center"></el-table-column>
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
      tableData: [
        {
          accountNo: 'CD001',
          name: '管理员',
          affiliation: '佛山第一养老院',
          department: '保健科',
          ward: '保健一区',
          position: '超级管理员',
          image: '--',
          signImage: '--',
          entryDate: '2019-03-20',
          entryStaff: '小刘'
        },
        {
          accountNo: 'CD001',
          name: '管理员',
          affiliation: '佛山第二养老院',
          department: '保健科',
          ward: '保健一区',
          position: '超级管理员',
          image: '--',
          signImage: '--',
          entryDate: '2019-03-20',
          entryStaff: '小刘'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.userManage
  width: 1600px
  height: 686px
  .operateBtns
    margin-bottom: 20px
    .el-button
      width: 90px
      height: 32px
      padding: 0
  .tag
    width: 120px
    height: 36px
    line-height: 36px
    text-align: center
    background: $color-primary
    color: $color-white
  .main
    width: 100%
    height: 686px
    @include box-shadow
    border-top: none
    position: relative
    .table
      border-top: 3px solid $color-border-blue
    .footer
      width: 100%
      text-align: center
      position: absolute
      margin-bottom: 40px
      bottom: 0
      left: 0
</style>
