<template>
  <div class="maintDeptQcTemplate">
    <ul class="left">
      <li
        v-for="(item, index) in deptList"
        :key="index"
        @click="changeDept(item)"
        :class="{active: activeName === item}"
      >{{item}}</li>
    </ul>
    <div class="right">
      <div class="operatings">
        <el-button type="primary" class="btn">环节质控</el-button>
        <el-button type="primary" class="btn">终末质控</el-button>
      </div>
      <div class="selectBar">
        <div class="tabs">
          <div class="tab" :class="{active: tabName === '环节质控'}" @click="selectTab('环节质控')">
            <span class="tabName">环节质控</span>
          </div>
          <div class="tab" :class="{active: tabName === '终末质控'}" @click="selectTab('终末质控')">
            <span class="tabName">终末质控</span>
          </div>
        </div>
        <div class="operatingBtns">
          <el-checkbox v-model="checked" style="margin-right:20px">扣分项</el-checkbox>
          <el-select v-model="rightType" placeholder="类别" style="width: 130px;margin-right:20px"></el-select>
          <span class="score">100分</span>
        </div>
        <div class="panel" v-if="tabName === '环节质控'">
          <div class="table">
            <el-table :data="tableData" style="width: 100%" height="590">
              <el-table-column prop="itemId" label="项目ID" align="center"></el-table-column>
              <el-table-column prop="typeName" label="类型名称" align="center" width="300"></el-table-column>
              <el-table-column prop="itemName" label="项目名称" align="center"></el-table-column>
              <el-table-column prop="score" label="分值" align="center"></el-table-column>
              <el-table-column prop="unit" label="单位" align="center"></el-table-column>
              <el-table-column prop="level" label="等级" align="center"></el-table-column>
            </el-table>
          </div>
          <div class="footer">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </div>
        </div>
        <div class="panel" v-if="tabName === '终末质控'">
          <div class="table">
            <el-table :data="tableData" style="width: 100%" height="590">
              <el-table-column prop="itemId" label="项目ID" align="center"></el-table-column>
              <el-table-column prop="typeName" label="类型名称" align="center" width="300"></el-table-column>
              <el-table-column prop="itemName" label="项目名称" align="center"></el-table-column>
              <el-table-column prop="score" label="分值" align="center"></el-table-column>
              <el-table-column prop="unit" label="单位" align="center"></el-table-column>
              <el-table-column prop="level" label="等级" align="center"></el-table-column>
            </el-table>
          </div>
          <div class="footer">
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </div>
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
      activeName: '儿医观察室',
      tabName: '环节质控',
      checked: false,
      rightType: '',
      deptList: [
        '急诊科',
        '急诊病区',
        '急诊综合病区',
        '儿医观察室',
        'ICU病区',
        'NICU病区',
        'CICU病区',
        '感染二区',
        '内二',
        '内三',
        '内四',
        '新生儿(内五)',
        '内六病区',
        '内九病区',
        '心脏内科',
        '五管病区科',
        '外六',
        '外七',
        '外八',
        '心脏手术室',
        '急诊科',
        '急诊病区',
        '急诊综合病区',
        'ICU病区',
        'NICU病区',
        'CICU病区',
        '感染二区',
        '内二',
        '内三',
        '内四',
        '新生儿(内五)',
        '内六病区',
        '内九病区',
        '心脏内科',
        '五管病区科',
        '外六',
        '外七',
        '外八',
        '心脏手术室',
        '急诊科',
        '急诊病区',
        '急诊综合病区',
        '儿医观察室',
        'ICU病区',
        'NICU病区',
        'CICU病区',
        '感染二区',
        '内二',
        '内三',
        '内四',
        '新生儿(内五)',
        '内六病区',
        '内九病区',
        '心脏内科',
        '五管病区科',
        '外六',
        '外七',
        '外八',
        '心脏手术室'
      ],
      tableData: [
        {
          itemId: '10000',
          typeName: '病案首页',
          itemName: '病案首页未按时2小时内完成',
          score: '0',
          unit: '--',
          level: '--'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    changeDept (activeName) {
      this.activeName = activeName
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
.maintDeptQcTemplate
  position: absolute
  top: -30px
  left: -50px
  height: 100%
  .left
    float: left
    width: 230px
    height: calc(100vh - 80px)
    overflow-x: hidden
    overflow-y: auto
    &::-webkit-scrollbar
      width: 10px
      background-color: #F5F5F5FF
    &::-webkit-scrollbar-thumb
      border-radius: 5px
      background-color: $color-word-blue
    >li
      width: 250px
      height: 46px
      padding-left: 40px
      line-height: 46px
      cursor: pointer
      &:hover
        background: rgba(226,237,252,1)
        color: $color-word-blue
    .active
      background: rgba(226,237,252,1)
      color: $color-word-blue
  .right
    float: left
    width: 1363px
    .operatings
      margin: 30px
      .btn
        display: inline-block
    .selectBar
      position: relative
      float: left
      margin-top: 20px
      margin-left: 30px
      width: 100%
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
      .operatingBtns
        float: left
        clear: both
        width: calc(100% - 20px)
        height: 56px
        background: $color-bg-label
        border: 1px solid $color-border-grey
        border-top: 3px solid $color-border-blue
        display: flex
        align-items: center
        padding-left: 20px
      .panel
        float: left
        width: 100%
        @include box-shadow
        .footer
          width: 100%
          text-align: center
          margin-bottom: 40px
          position: absolute
          bottom: 0
          left: 0
</style>
