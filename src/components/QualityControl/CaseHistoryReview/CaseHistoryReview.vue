<template>
  <div class="caseHistoryReview">
    <div class="operating">
      <el-button type="primary" class="btn" @click="spotCheck">抽查</el-button>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px" :inline="true">
        <el-form-item label="检查时间">
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
        <el-form-item label="住院号">
          <el-input v-model="form.inHospitalNo"></el-input>
        </el-form-item>
        <el-form-item label="主管医生">
          <el-input v-model="form.doctor"></el-input>
        </el-form-item>
        <div class="dashed"></div>
        <el-form-item>
          <el-radio-group v-model="form.status">
            <el-radio label="已整改"></el-radio>
            <el-radio label="未整改"></el-radio>
            <el-radio label="已确认"></el-radio>
            <el-radio label="全部"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.isNeedChange" style="margin-left: 20px">需整改</el-checkbox>
        </el-form-item>
        <div class="dashed"></div>
        <el-form-item label="检查人">
          <el-input v-model="form.checker"></el-input>
        </el-form-item>
        <el-form-item label="质控科室">
          <el-input v-model="form.department"></el-input>
        </el-form-item>
        <div class="dashed"></div>
        <el-button type="primary" class="searchBtn">查找</el-button>
        <el-button class="clearBtn">清空</el-button>
      </el-form>
    </div>
    <div class="main">
      <div class="tab">病复抽查</div>
      <div class="panel">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="400">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="qualityControl" label="质控" align="center" width="300"></el-table-column>
            <el-table-column prop="patientName" label="病人姓名" align="center" width="300"></el-table-column>
            <el-table-column prop="inHospitalNo" label="住院号" align="center"></el-table-column>
            <el-table-column prop="sex" label="性别" align="center"></el-table-column>
            <el-table-column prop="remainingProblem" label="遗留问题数" align="center"></el-table-column>
            <el-table-column prop="isNeedChange" label="是否需要改变病历" align="center"></el-table-column>
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
        beginDate: '',
        endDate: '',
        inHospitalNo: '054595',
        doctor: '',
        status: '',
        isNeedChange: '',
        checker: '',
        department: '呼吸内科'
      },
      tableData: [
        {
          qualityControl: '环节',
          patientName: '周志文',
          inHospitalNo: '054895',
          sex: '男',
          remainingProblem: '0',
          isNeedChange: '是'
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
    },
    spotCheck () {
      this.$router.push('/qualityControl/spotCheck/enterHospRecord')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.caseHistoryReview
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
