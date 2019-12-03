<template>
  <div class="maintQcDictionary">
    <div class="top">
      <ul>
        <li :class="{active: activeName === item}" v-for="(item, index) in filterList" :key="index" @click="changeFilterTag(item)">{{item}}</li>
      </ul>
    </div>
    <div class="middle">
      <div>
        <el-button type="primary">新增</el-button>
        <el-button type="primary">修改</el-button>
        <el-button>删除</el-button>
      </div>
      <div class="totalInfo">共查到 <span>133</span> 条记录</div>
    </div>
    <div class="content">
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="itemCode" label="项目编码" align="center"></el-table-column>
          <el-table-column prop="itemType" label="项目类型" align="center"></el-table-column>
          <el-table-column prop="itemName" label="项目名称" align="center" width="300"></el-table-column>
          <el-table-column prop="score" label="分数" align="center"></el-table-column>
          <el-table-column prop="unit" label="单位" align="center"></el-table-column>
          <el-table-column prop="level" label="等级" align="center"></el-table-column>
          <el-table-column prop="sortNo" label="排序号" align="center"></el-table-column>
          <el-table-column prop="isDeduction" label="是否扣分项" align="center"></el-table-column>
        </el-table>
      </div>
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
      value: '',
      activeName: '',
      filterList: ['全部', '病案首页', '入院记录', '病程记录', '出院记录', '辅助检查', '基本要求和医嘱单', '知情同意书'],
      tableData: [
        {
          itemCode: '100001',
          itemType: '辅助检查',
          itemName: '1项未填写扣分，3项未填写乙级',
          score: '0.5',
          unit: '/项',
          level: '-',
          sortNo: '1',
          isDeduction: '是'
        },
        {
          itemCode: '100002',
          itemType: '入院记录',
          itemName: '传染病漏报',
          score: '0',
          unit: '-',
          level: '乙',
          sortNo: '1',
          isDeduction: '是'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    changeFilterTag (tagName) {
      this.activeName = tagName
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.maintQcDictionary
  height: calc(100% - 130px)
  .top
    position: fixed
    top: 0
    left: 200px
    ul
      height: 80px
      margin-left: 60px
      display: flex
      align-items: center
    ul>li
      padding: 11px 4px
      margin-right: 40px
      @include font(14px, 800, $color-word-black)
      text-align: center
      cursor: pointer
    ul>li.active
      border-bottom: 2px solid $color-primary
      color: $color-primary
      margin-top: 2px
  .middle
    display: flex
    justify-content: space-between
    align-items: center
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
    height: 100%
    @include box-shadow
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
