<template>
  <div class="modifyTemplate">
    <div class="left">
      <ul>
        <li>
          <label>模板名称</label>
          <el-input v-model="templateName"></el-input>
        </li>
        <li>
          <div class="totalScore">
            总分：<span>0</span>分
          </div>
        </li>
        <li style="border-top:1px dashed #cccccc;height: 1px;width: 100%;overflow:hidden">
        </li>
        <li>
          <label>编码</label>
          <el-input v-model="code"></el-input>
        </li>
        <li>
          <label>中文名称</label>
          <el-input v-model="chineseName"></el-input>
        </li>
        <li>
          <el-select v-model="leftType" placeholder="类别" style="width: 130px"></el-select>
        </li>
        <li style="border-top:1px dashed #cccccc;height: 1px;width: 100%;overflow:hidden">
        </li>
        <li>
          <el-button type="primary" class="btn">查找</el-button>
        </li>
      </ul>
      <div class="sumText">
        共有
        <span>21</span>
        条记录
      </div>
      <div class="table">
        <el-table :data="leftData" style="width: 100%" height="488" ref="selection" @selection-change="checkAll">
          <el-table-column type="selection" width="55"></el-table-column>
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
    <div class="middle">
      <el-button type="primary" round :disabled="nowSelectLeftData.length ? false : true" @click="handelSelect">添加 <i class="el-icon-d-arrow-right"></i></el-button>
      <el-button type="primary" round :disabled="nowSelectRightData.length ? false : true" @click="handleRemoveSelect" icon="el-icon-d-arrow-left">删除</el-button>
    </div>
    <div class="right">
      <div class="title">
        模板内容
      </div>
      <div class="operatings">
        <el-button type="primary" class="btn">修改</el-button>
        <el-button type="primary" class="btn">评分表</el-button>
        <el-select v-model="rightType" placeholder="类别" style="width: 130px"></el-select>
      </div>
      <div class="sumText">
        共有
        <span>21</span>
        条记录
      </div>
      <div class="table">
        <el-table :data="rightData" style="width: 100%" height="567" ref="selection" @selection-change="checkRightAll">
          <el-table-column type="selection" width="55"></el-table-column>
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
</template>

<script>
export default {
  components: {},
  data () {
    return {
      templateName: '',
      code: '',
      chineseName: '',
      leftType: '',
      rightType: '',
      leftData: [
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
      ],
      rightData: [],
      nowSelectLeftData: [],
      nowSelectRightData: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    checkAll (val) {
      this.nowSelectLeftData = val
    },
    checkRightAll (val) {
      this.nowSelectRightData = val
    },
    handelSelect () {
      this.rightData = this.handleConcatArr(this.rightData, this.nowSelectLeftData)
      this.handleRemoveTabList(this.nowSelectLeftData, this.leftData)
      this.nowSelectLeftData = []
    },
    handleRemoveSelect () {
      this.leftData = this.handleConcatArr(this.leftData, this.nowSelectRightData)
      this.handleRemoveTabList(this.nowSelectRightData, this.rightData)
      this.nowSelectRightData = []
    },
    handleConcatArr (rightData, nowSelectLeftData) {
      let arr = []
      arr = arr.concat(rightData, nowSelectLeftData)
      return arr
    },
    handleRemoveTabList (isNeedArr, originalArr) {
      if (isNeedArr.length && originalArr.length) {
        for (let i = 0; i < isNeedArr.length; i++) {
          for (let k = 0; k < originalArr.length; k++) {
            if (isNeedArr[i]['name'] === originalArr[k]['name']) {
              originalArr.splice(k, 1)
            }
          }
        }
      }
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.modifyTemplate
  height: 750px
  .left
    float: left
    width: 681px
    height: 100%
    border: 1px solid $color-border-grey
    ul
      padding: 0 22px
      @include font(14px, 400, $color-border-blue)
      display: flex
      flex-wrap: wrap
      align-items: center
      >li
        margin-right: 30px
        display: flex
        align-items: center
        label
          text-align: end
          width: 60px
          margin-right: 10px
          height: 75px
          line-height: 75px
        .el-input
          width: 130px
        &:first-child
          .el-input
            width: 364px
        .totalScore>span
          color: $color-notice-red
          display: inline-block
          width: 50px
          text-align: center
        .btn
          margin-top: 20px
  .sumText
    margin: 25px 0 11px 27px
    font-size: 14px
    >span
      @include font(14px, 800, $color-border-blue)
  .table
    border-top: 3px solid $color-border-blue

  .middle
    float: left
    width: 123px
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    .el-button
      margin: 0
      margin-top: 40px
      padding: 0
      width: 80px
  .right
    float: left
    width: 760px
    height: 100%
    border: 1px solid $color-border-grey
    .title
      @include font(16px, 400, $color-word-blue)
      margin: 36px 0 29px 26px
    .operatings
      margin-left: 26px
</style>
