<template>
  <div class="searchByDefect">
    <div class="operating">
      <el-button type="primary" class="btn">导出</el-button>
      <el-button type="primary" class="btn">刷新</el-button>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px" :inline="true">
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio label="所有"></el-radio>
            <el-radio label="在院"></el-radio>
            <el-radio label="出院"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="查询时间">
          <el-date-picker
            size="small"
            style="width:148px"
            v-model="form.beginDate"
            type="date"
            placeholder="选择开始日期">
          </el-date-picker>
          -
          <el-date-picker
            size="small"
            style="width:148px"
            v-model="form.endDate"
            type="date"
            placeholder="选择结束日期">
          </el-date-picker>
        </el-form-item>
        <div class="dashed"></div>
        <el-form-item label="科室">
          <el-input v-model="form.department"></el-input>
        </el-form-item>
        <el-form-item label="质控员">
          <el-input v-model="form.qcer"></el-input>
        </el-form-item>
        <div class="dashed"></div>
        <el-button type="primary" class="searchBtn">查找</el-button>
      </el-form>
    </div>
    <div class="main">
      <div class="tab">全院缺陷明细统计(按缺陷)</div>
      <div class="panel">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="450">
            <el-table-column prop="itemTypeId" label="项目分类ID" align="center"></el-table-column>
            <el-table-column prop="itemType" label="项目分类" align="center"></el-table-column>
            <el-table-column prop="itemId" label="项目ID" align="center"></el-table-column>
            <el-table-column prop="itemName" label="项目名称" align="center" width="300"></el-table-column>
            <el-table-column prop="frequency" label="发生频次" align="center"></el-table-column>
            <el-table-column prop="defectRate" label="缺陷率" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="footer">
          <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      form: {
        department: '呼吸内科',
        doctor: '',
        beginDate: '',
        endDate: '',
        qcer: '',
        qcItem: ''
      },
      tableData: [
        {
          itemTypeId: '01',
          itemType: '病案首页',
          itemId: '100005',
          itemName: '诊断不确切，依据不充分（中，西）',
          frequency: '5',
          defectRate: '6.98%'
        },
        {
          itemTypeId: '02',
          itemType: '入院记录',
          itemId: '200023',
          itemName: '48小时内无主治（或以上医师审核签字）',
          frequency: '3',
          defectRate: '6.98%'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.searchByDefect
  .operating
    .btn
      width: 90px
  .form
    margin-top: 20px
    padding: 10px 15px 26px
    @include box-shadow
    >>>.el-input__inner
      height: 30px
    .el-form-item
      margin-bottom: 10px
      margin-top: 10px
      margin-left: 0
    >>>.el-form-item__label
      color: $color-word-blue
    .dashed
      border-bottom: 1px dashed $color-border-grey
    .searchBtn
      margin-left: 50px
    .clearBtn
      border-color: $color-primary
      color: $color-primary
    .searchBtn,.clearBtn
      margin-top: 20px
  .main
    margin-top: 30px
    position: relative
    float: left
    width: 100%
    .tab
      width: 200px
      height: 36px
      text-align: center
      line-height: 36px
      background: $color-border-blue
      @include font(14px, 400, $color-white)
    .panel
      float: left
      width: 100%
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
  .el-button
    width: 90px
    height: 32px
    padding: 0
</style>
