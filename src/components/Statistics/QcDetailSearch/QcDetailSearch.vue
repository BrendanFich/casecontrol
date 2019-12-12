<template>
  <div class="qcDetailSearch">
    <div class="operating">
      <el-button type="primary" class="btn">导出</el-button>
      <el-button type="primary" class="btn">打印</el-button>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px" :inline="true">
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
        <el-form-item label="科室">
          <el-input v-model="form.department"></el-input>
        </el-form-item>
        <el-form-item label="主管医生">
          <el-input v-model="form.doctor"></el-input>
        </el-form-item>
        <div class="dashed"></div>
        <el-form-item label="质控员">
          <el-input v-model="form.qcer"></el-input>
        </el-form-item>
        <el-form-item label="质控项目">
          <el-input v-model="form.qcItem"></el-input>
        </el-form-item>
        <div class="dashed"></div>
        <el-button type="primary" class="searchBtn">查找</el-button>
      </el-form>
    </div>
    <div class="main">
      <div class="tab">质控问题明细查询</div>
      <div class="panel">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="450">
            <el-table-column prop="qcer" label="质控员" align="center"></el-table-column>
            <el-table-column prop="deptName" label="科室名称" align="center" width="300"></el-table-column>
            <el-table-column prop="inHospitalNo" label="住院号" align="center"></el-table-column>
            <el-table-column prop="sex" label="性别" align="center"></el-table-column>
            <el-table-column prop="patientName" label="病人姓名" align="center"></el-table-column>
            <el-table-column prop="doctor" label="主管医生" align="center"></el-table-column>
            <el-table-column prop="itemId" label="项目ID" align="center"></el-table-column>
            <el-table-column prop="itemName" label="项目名称" align="center" width="300px"></el-table-column>
            <el-table-column prop="checkDate" label="检查日期" align="center" width="200px"></el-table-column>
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
          qcer: '小刘',
          deptName: '急诊科',
          inHospitalNo: '0304124',
          sex: '男',
          patientName: '梁桂玉',
          doctor: '邵忠',
          itemId: '100013',
          itemName: '门（急）诊诊断未填写（中、西）',
          checkDate: '2013-8-12 14：33：26'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    selectTab (tabName) {
      this.tabName = tabName
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.qcDetailSearch
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
</style>
