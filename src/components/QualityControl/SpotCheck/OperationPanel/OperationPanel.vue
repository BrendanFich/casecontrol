<template>
  <div class="operationPanel">
    <div class="operatings">
      <el-button type="primary" class="btn" @click="regVisible1 = true">缺陷登记</el-button>
      <el-button type="primary" class="btn">查看缺陷</el-button>
      <el-button type="primary" class="btn">质量没问题</el-button>
    </div>
    <div class="enterHospRecord">
      <div class="selectBar">
        <div class="tabs">
          <div
            class="tab"
            :class="{ active: tabName === menuActiveItem }"
            @click="selectTab(menuActiveItem)"
          >
            <span class="tabName">{{ menuActiveItem }}</span>
          </div>
          <div
            class="tab"
            :class="{ active: tabName === '查看缺陷登记' }"
            @click="selectTab('查看缺陷登记')"
          >
            <span class="tabName">查看缺陷登记</span>
          </div>
          <div
            class="tab"
            :class="{ active: tabName === '病历评分' }"
            @click="selectTab('病历评分')"
          >
            <span class="tabName">病历评分</span>
          </div>
        </div>
      </div>
      <div class="panel" v-if="tabName === '查看缺陷登记'">
        <div class="operatingBtns">
          <el-radio-group v-model="checkStatus">
            <el-radio label="缺陷登记"></el-radio>
            <el-radio label="时限监控"></el-radio>
            <el-radio label="内容监控"></el-radio>
          </el-radio-group>
        </div>
        <el-table :data="checkTable1" style="width: 100%" class="table">
          <el-table-column
            prop="qcDate"
            label="质控日期"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="qcDept"
            label="质控科室"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="qcer"
            label="质控人"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="patientName"
            label="病人姓名"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="doctor"
            label="主管医生"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="isNeedChange"
            label="是否需修改病历"
            align="center"
          ></el-table-column>
        </el-table>
        <div class="result">
          <div class="resultTop">
            <el-dropdown class="selectStatus">
              <span class="el-dropdown-link">
                缺陷状态
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部</el-dropdown-item>
                <el-dropdown-item>已完成</el-dropdown-item>
                <el-dropdown-item>未完成</el-dropdown-item>
                <el-dropdown-item>取消</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-checkbox v-model="isNeedChange" style="margin-left: 20px"
              >所有缺陷标签明细</el-checkbox
            >
          </div>
          <el-table :data="checkTable2" style="width: 100%" class="table">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="status" label="状态" align="center">
              <template>
                <i
                  class="el-icon-success"
                  style="color: #5bd542; font-size: 20px"
                ></i>
              </template>
            </el-table-column>
            <el-table-column
              prop="monitorItem"
              label="监控项目"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="remark"
              label="备注"
              align="center"
              width="300"
            ></el-table-column>
            <el-table-column
              prop="belongDoctor"
              label="缺陷所属医生"
              align="center"
            ></el-table-column>
          </el-table>
          <div class="footer">
            <el-button class="btn" round style="padding: 0">确认完成</el-button>
          </div>
        </div>
      </div>
      <div class="panel" v-if="tabName === menuActiveItem">
        <div class="operatingBtns">
          <el-button class="btn">刷新列表</el-button>
          <el-button class="btn">重建文档</el-button>
          <el-button class="btn">缺陷</el-button>
          <el-button class="btn">关闭</el-button>
        </div>
        <MedicalRecordContent :recordData="recordData"></MedicalRecordContent>
      </div>
      <div class="score panel" v-if="tabName === '病历评分'">
        <div class="operatingBtns">
          <label style="margin-right:10px">评分日期</label>
          <el-date-picker
            v-model="dateRange"
            size="small"
            style="width:270px"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
          <el-button class="btn" style="margin-left:20px">新增评分</el-button>
          <el-button class="btn">修改评分</el-button>
          <el-button class="btn">删除评分</el-button>
          <el-button class="btn">取消</el-button>
          <el-button class="btn">保存</el-button>
          <el-button class="btn">关闭</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" class="table">
          <el-table-column
            prop="wardName"
            label="病区名称"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="doctor"
            label="主管医生"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="rater"
            label="评分人"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="scoreTime"
            label="评分时间"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="scoreTpye"
            label="评分类型"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="totalScore"
            label="总分"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="level"
            label="等级"
            align="center"
          ></el-table-column>
        </el-table>
        <div class="result">
          <div class="resultTop">
            <label>总分</label>
            <el-input v-model="sumScore" size="small"></el-input>
            <label>等级</label>
            <el-input v-model="level" size="small"></el-input>
          </div>
          <el-table
            :data="tableData2"
            style="width: 100%"
            class="table"
            @row-click="regVisible2 = true"
          >
            <el-table-column
              prop="typeCode"
              label="类别码"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="typeName"
              label="类别名"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="itemName"
              label="项目名"
              align="center"
              width="300"
            ></el-table-column>
            <el-table-column
              prop="level"
              label="等级"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="score"
              label="分数"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="unit"
              label="单位"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="cutScoreLevel"
              label="扣分级别"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="cutScore"
              label="扣分"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="scroeType"
              label="评分类型"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <ScoreDialog :visible="regVisible2" @changeVisible="changeVisible2"></ScoreDialog>
    <ProblemRegDialog :visible="regVisible1" @changeVisible="changeVisible1"></ProblemRegDialog>
  </div>
</template>

<script>
import MedicalRecordContent from '../MedicalRecordContent/MedicalRecordContent'
import ProblemRegDialog from '../ProblemRegDialog/ProblemRegDialog'
import ScoreDialog from '../ScoreDialog/ScoreDialog'
export default {
  components: { MedicalRecordContent, ProblemRegDialog, ScoreDialog },
  data () {
    return {
      recordData: '',
      regVisible1: false,
      regVisible2: false,
      dateRange: [],
      tabName: this.menuActiveItem,
      sumScore: '100',
      isNeedChange: false,
      level: '甲',
      checkStatus: '缺陷登记',
      checkTable1: [
        {
          qcDate: '2012-11-23 23:35:16',
          status: '在院',
          qcDept: '呼吸内科',
          qcer: '小王',
          patientName: '王敏萍',
          doctor: '郭仁善',
          isNeedChange: '是'
        }
      ],
      checkTable2: [
        {
          status: '1',
          monitorItem: '主述描述有缺陷',
          remark: '主述的位置与诊断不符',
          belongDoctor: '戴桥'
        }
      ],
      tableData: [
        {
          wardName: '呼吸内科',
          doctor: '蔡文明',
          rater: '小王',
          scoreTime: '2012-11-23 23 23:35:16',
          scoreTpye: '环节评分',
          totalScore: '100',
          level: '00'
        }
      ],
      tableData2: [
        {
          typeCode: '02',
          typeName: '入院记录',
          itemName: '诊断错误，无医院签字，重新复诊',
          level: '--',
          score: '2',
          unit: '--',
          cutScoreLevel: '--',
          cutScore: '0',
          scroeType: '--'
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  created () {},
  props: {
    menuActiveItem: {
      type: String,
      required: true
    }
  },
  methods: {
    changeVisible1 (value) {
      this.regVisible1 = value
    },
    selectTab (tabName) {
      this.tabName = tabName
    },
    changeVisible2 (value) {
      this.regVisible2 = value
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.operationPanel
  .operatings>.btn
    display: inline-block
  .enterHospRecord
    width: 100%
    .selectBar
      width: 100%
      float: left
      margin-top: 20px
      .tabs
        .tab
          float: left
          width: 120px
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
      position: relative
      float: left
      width: 100%
      height: 540px
      @include box-shadow
      border-top: none
      .operatingBtns
        float: left
        width: calc(100% - 20px)
        height: 56px
        background: $color-bg-label
        border: 1px solid $color-border-grey
        border-top: 3px solid $color-border-blue
        display: flex
        align-items: center
        padding-left: 20px
    .table
      @include box-shadow
    .result
      >>>.el-table__row
        cursor: pointer
      .resultTop
        margin-top: 20px
        width: 100%
        height: 56px
        background: $color-bg-label
        border: 1px solid $color-border-grey
        display: flex
        align-items: center
        label
          margin: 0 10px
          @include font(14px, 400, $color-word-blue)
        .el-input
          width: 60px
          margin-right: 30px
        .el-dropdown
          margin-left: 30px
          color: $color-word-blue
      .footer
        margin-left: 50px
        margin-bottom: 20px
        position: absolute
        bottom: 0
        left: 0
</style>
