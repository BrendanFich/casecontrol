<template>
  <div class="maintDeptQcTemplate">
    <div class="left">
      <div class="navMenu">
        <el-menu
          default-active="1-1"
          background-color="transparent"
        >
          <el-submenu index="1">
            <template slot="title">
              <img src="./img/documentIcon1.png">
              <span>模板</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <img src="./img/documentIcon2.png">
                <span>通用</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <div class="mainTop">
        <div>
          <el-button type="primary" @click="addTemplate">新增</el-button>
          <el-button type="primary">复制并新增</el-button>
          <el-button type="primary">修改</el-button>
          <el-button>删除</el-button>
        </div>
        <div class="totalInfo">共查到 <span>133</span> 条记录</div>
      </div>
      <div class="content">
        <div class="table">
          <el-table :data="tableData1" style="width: 100%">
            <el-table-column prop="templateName" label="模板名称" align="center"></el-table-column>
            <el-table-column prop="creator" label="创建者" align="center"></el-table-column>
            <el-table-column prop="createDate" label="创建时间" align="center" width="300"></el-table-column>
            <el-table-column prop="lastModify" label="最后修改人" align="center"></el-table-column>
            <el-table-column prop="modifyDate" label="修改时间" align="center"></el-table-column>
            <el-table-column prop="templateRemark" label="模板备注" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="table" style="margin-top:50px;height:520px">
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="itemCode" label="项目编码" align="center"></el-table-column>
            <el-table-column prop="itemName" label="项目名称" align="center" width="300"></el-table-column>
            <el-table-column prop="score" label="分数" align="center"></el-table-column>
            <el-table-column prop="unit" label="单位" align="center"></el-table-column>
            <el-table-column prop="level" label="等级" align="center"></el-table-column>
            <el-table-column prop="itemRemark" label="项目备注" align="center"></el-table-column>
            <el-table-column prop="isDeduction" label="是否扣分项" align="center"></el-table-column>
          </el-table>
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
      tableData1: [
        {
          templateName: '运行时病历住院运行病历评分表',
          creator: '000',
          createDate: '2012-11-9 14: 39: 10',
          lastModify: '669',
          modifyDate: '2012-11-9 14: 39: 10',
          templateRemark: '-'
        },
        {
          templateName: '运行时病历住院运行病历评分表',
          creator: '000',
          createDate: '2012-11-9 14: 39: 10',
          lastModify: '669',
          modifyDate: '2012-11-9 14: 39: 10',
          templateRemark: '-'
        }
      ],
      tableData2: [
        {
          itemCode: '100002',
          itemName: '缺整页病历记录造成病历不完整',
          score: '1',
          unit: '/项',
          level: '-',
          itemRemark: '-',
          isDeduction: '是'
        },
        {
          itemCode: '100002',
          itemName: '缺整页病历记录造成病历不完整',
          score: '1',
          unit: '/项',
          level: '-',
          itemRemark: '-',
          isDeduction: '是'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    addTemplate () {
      this.$router.push('/dictionaryMaint/modifyTemplate')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.maintDeptQcTemplate
  position: absolute
  top: -30px
  left: -50px
  height: 100%
  .left
    width: 194px
    height: 100%
    border-right: 1px solid $color-border-grey
    .navMenu>.el-menu
      border: none
  .main
    position: absolute
    top: 60px
    left: 280px
    width: 1400px
    height: 790px
    .mainTop
      display: flex
      justify-content: space-between
      align-items: center
      .el-button
        width: 90px
        height: 32px
        padding: 0
      .totalInfo
        margin-bottom: -30px
        margin-right: 50px
        @include font(14px, 400, $color-word-black)
        span
          @include font(14px, 800, $color-primary)
    .content
      position: relative
      margin-top: 18px
      width: 100%
      height: 160px
      .table
        @include box-shadow
        border-top: 3px solid $color-border-blue
      .footer
        width: 100%
        text-align: center
        margin-bottom: 40px
        position: absolute
        bottom: 0
        left: 0
</style>
