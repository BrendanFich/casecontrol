<template>
  <div class="qcerWorkload">
    <div class="operating">
      <el-button type="primary" class="btn">导出</el-button>
      <el-button type="primary" class="btn">打印</el-button>
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
      <div class="tabs">
        <div class="tab" :class="{active: tabName === item}" @click="selectTab(item)" v-for="(item,index) in tagList" :key="index">
          <span class="tabName">{{item}}</span>
        </div>
      </div>
      <div class="panel" v-if="tabName === '质控员工作量统计'">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" height="450">
            <el-table-column prop="deptCode" label="科室编码" align="center"></el-table-column>
            <el-table-column prop="deptName" label="科室名称" align="center" width="300"></el-table-column>
            <el-table-column prop="qcerNo" label="质控员工号" align="center"></el-table-column>
            <el-table-column prop="qcer" label="质控员" align="center"></el-table-column>
            <el-table-column prop="qcPatient" label="质控病人数" align="center"></el-table-column>
            <el-table-column prop="patientStatus" label="病人状态" align="center"></el-table-column>
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
      tabName: '质控员工作量统计',
      tagList: [
        '运行病历时限监控统计',
        '运行病历时限监控统计(科室)',
        '终末病历评分统计',
        '终末病历评分统计(科室)',
        '质控员工作量统计'
      ],
      form: {
        department: '呼吸内科',
        status: '',
        beginDate: '',
        endDate: '',
        qcer: ''
      },
      tableData: [
        {
          deptCode: '11001',
          deptName: '本区',
          qcerNo: 'zk001',
          qcer: '质控01',
          qcPatient: '9',
          patientStatus: '全部'
        },
        {
          deptCode: '11002',
          deptName: '内二病区',
          qcerNo: 'zk002',
          qcer: '质控02',
          qcPatient: '22',
          patientStatus: '全部'
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
.qcerWorkload
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
    .tabs
      .tab
        float: left
        width: 200px
        height: 36px
        text-align: center
        line-height: 36px
        @include font(14px, 400, $color-word-black)
        border: 1px solid $color-border-grey
        border-right: none
        border-bottom: none
        cursor: pointer
        &:last-child
          border-right: 1px solid $color-border-grey
      .active
        background: $color-border-blue
        color: $color-white
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
