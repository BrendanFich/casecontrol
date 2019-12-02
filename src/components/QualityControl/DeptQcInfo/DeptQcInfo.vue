<template>
  <div class="deptQcInfo">
    <div class="operating">
      <el-button type="primary" size="small" class="btn">抽查</el-button>
      <el-button type="primary" size="small" class="btn">查看缺陷</el-button>
      <el-button type="primary" size="small" class="btn">查看评分</el-button>
      <el-button type="primary" size="small" class="btn">刷新</el-button>
      <el-button type="primary" size="small" class="btn">查看全院</el-button>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px" :inline="true">
        <el-form-item label="科室">
          <el-input v-model="form.dept"></el-input>
        </el-form-item>
        <el-form-item label="主管医生">
          <el-input v-model="form.doctor"></el-input>
        </el-form-item>
        <div class="dashed"></div>
        <el-form-item label="病情">
          <el-radio-group v-model="form.condition">
            <el-radio label="危重"></el-radio>
            <el-radio label="一般"></el-radio>
            <el-radio label="新收"></el-radio>
            <el-radio>住院超出 <el-input style="width: 50px"></el-input> 天数
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手术">
          <el-radio-group v-model="form.surgery">
            <el-radio label="有"></el-radio>
            <el-radio label="无"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="护理级别">
          <el-radio-group v-model="form.nursingLevel">
            <el-radio label="一级"></el-radio>
            <el-radio label=其他></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="dashed"></div>
        <el-form-item label="诊断">
          <el-input v-model="form.diagnosis"></el-input>
        </el-form-item>
        <el-form-item label="是否转科">
          <el-radio-group v-model="form.isChangeDept">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="dashed"></div>
        <el-button type="primary" class="searchBtn">查找</el-button>
        <el-button class="clearBtn">清空</el-button>
      </el-form>
    </div>
    <div class="tag">环节质控信息汇总</div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column prop="qualityControl" label="质控" align="center" width="50"></el-table-column>
        <el-table-column prop="bedNo" label="床号" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="inHospitalNo" label="住院号" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="enterTime" label="入院时间" align="center"></el-table-column>
        <el-table-column prop="docName" label="主管医生" align="center"></el-table-column>
        <el-table-column prop="inHospitalDays" label="住院天数" align="center"></el-table-column>
        <el-table-column prop="newReceive" label="新收" align="center"></el-table-column>
        <el-table-column prop="condition" label="病情" align="center"></el-table-column>
        <el-table-column prop="firstDiagnosis" label="第一诊断" align="center"></el-table-column>
        <el-table-column prop="isSurgery" label="是否手术" align="center"></el-table-column>
        <el-table-column prop="isChanggeDept" label="是否转科" align="center"></el-table-column>
        <el-table-column prop="qcTime" label="质控次数" align="center"></el-table-column>
        <el-table-column prop="unfinishedAmount" label="未完成问题总数" align="center"></el-table-column>
        <el-table-column prop="handleUnfinishedAmount" label="手动监控未完成数" align="center"></el-table-column>
        <el-table-column prop="timeUnfinishedAmount" label="时限未完成数" align="center"></el-table-column>
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
      form: {
        dept: '呼吸内科',
        doctor: '',
        condition: '',
        surgery: '',
        nursingLevel: '',
        diagnosis: '上呼吸道感染',
        isChangeDept: ''
      },
      tableData: [
        {
          qualityControl: '',
          bedNo: '002',
          name: '周志文',
          inHospitalNo: '054595',
          sex: '女',
          age: '24',
          enterTime: '2018-8-2 15:00:47',
          docName: '周庭辉',
          inHospitalDays: '113',
          newReceive: '否',
          condition: '',
          firstDiagnosis: '上呼吸道感染',
          isSurgery: '否',
          isChanggeDept: '否',
          qcTime: '2',
          unfinishedAmount: '0',
          handleUnfinishedAmount: '0',
          timeUnfinishedAmount: '1'
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
.deptQcInfo
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
    .dashed
      border-bottom: 1px dashed $color-border-grey
    .searchBtn
      margin-left: 50px
    .clearBtn
      border-color: $color-primary
      color: $color-primary
    .searchBtn,.clearBtn
      margin-top: 20px
  .tag
    margin-top: 30px
    background: $color-tag-blue
    width: 138px
    height: 36px
    line-height: 36px
    text-align: center
    @include font(14px, 400, $color-white)
  .main
    height: 400px
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
