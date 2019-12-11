<template>
  <div class="menuManage">
    <div class="operateBtns">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">删除</el-button>
      <el-button type="primary">保存</el-button>
      <el-button type="primary">修改</el-button>
    </div>
    <div class="tag">菜单管理</div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column type="index" label="序号" align="center" width="100px"></el-table-column>
        <el-table-column prop="number" label="编号" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" align="center"></el-table-column>
        <el-table-column prop="level" label="级别" align="center"></el-table-column>
        <el-table-column prop="sort" label="排序" align="center"></el-table-column>
        <el-table-column prop="menuType" label="菜单类型" align="center"></el-table-column>
        <el-table-column prop="description" label="描述" align="center"></el-table-column>
        <el-table-column prop="superiorMenuType" label="上级菜单编码" align="center"></el-table-column>
        <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
          number: 'CD001',
          name: '人员管理',
          level: '01',
          sort: '1',
          menuType: 'operate',
          description: '人员管理',
          superiorMenuType: '00',
          remark: '--',
          entryDate: '2019-03-20',
          entryStaff: '陈智慧'
        },
        {
          number: 'CD001',
          name: '人员管理',
          level: '01',
          sort: '1',
          menuType: 'operate',
          description: '人员管理',
          superiorMenuType: '00',
          remark: '--',
          entryDate: '2019-03-20',
          entryStaff: '陈智慧'
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
.menuManage
  width: 1600px
  height: 686px
  .operateBtns
    margin-bottom: 20px
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
