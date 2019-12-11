<template>
  <div class="problemRegDialog">
    <el-dialog
      title="质控缺陷问题登记(双击右边列表登记备注)"
      :modal="true"
      :visible.sync="childVisible"
      width="900px"
      :before-close="close"
    >
      <div class="left">
        <div class="leftTop">
          <el-select v-model="value" placeholder="项目名称" size="small" style="width: 180px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input placeholder="请输入关键字" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-table :data="leftTableData" height="300" class="table">
          <el-table-column type="selection" width="45px"></el-table-column>
          <el-table-column prop="code" label="代码" width="60px"></el-table-column>
          <el-table-column prop="itemName" label="项目名称" :show-overflow-tooltip="true"></el-table-column>
        </el-table>
      </div>
      <div class="middle">
        <el-button type="primary" round>添加 <i class="el-icon-d-arrow-right"></i></el-button>
        <el-button type="primary" round icon="el-icon-d-arrow-left">删除</el-button>
      </div>
      <div class="right">
        <div class="rightTop">
          <div class="textInfo">已记录的缺陷数：2</div>
          <div>
            <el-button type="primary" class="btn">发送</el-button>
            <el-button type="primary" class="btn">取消</el-button>
          </div>
        </div>
        <el-table :data="rightTableData" height="300" class="table">
          <el-table-column type="selection" width="45px"></el-table-column>
          <el-table-column prop="itemClass" label="项目分类" width="80px"></el-table-column>
          <el-table-column prop="itemName" label="项目名称" width="80px" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="reamark" label="备注" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="doctor" label="主管医生" width="80px"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MySelect from '@/base/MySelect/MySelect'
export default {
  components: {MySelect},
  data () {
    return {
      childVisible: this.visible,
      checkStatus: '缺陷登记',
      value: '',
      input: '',
      options: [
        {
          label: '',
          value: ''
        }
      ],
      leftTableData: [
        {
          code: '20004',
          itemName: '主诉描述有缺陷'
        },
        {
          code: '20004',
          itemName: '主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷'
        }
      ],
      rightTableData: [
        {
          itemClass: '入院记录',
          itemName: '主诉描述有缺陷',
          reamark: '主述的位置与诊断不主述的位置与诊断不主述的位置与诊断不主述的位置与诊断不',
          doctor: '黄小小'
        }
      ]
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  watch: {
    visible (val) {
      this.childVisible = val
    }
  },
  methods: {
    close () {
      this.childVisible = false
      this.$emit('changeVisible', this.childVisible)
    },
    click () {
      console.log('click')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.problemRegDialog
  >>>.el-dialog__body
    padding: 0 20px
    display: flex
    justify-content: space-around
    height: 380px
    .table
      @include box-shadow
    .left
      width: 370px
      height: 300px
      .leftTop
        height: 50px
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        .input-with-select
          width: 180px
          margin: 0
          .el-input__inner
            height: 32px
          .el-button
            width: 43px
    .middle
      width: 80px
      height: 300px
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      .el-button
        margin: 10px 0
        padding: 0
        width: 80px
    .right
      width: 370px
      height: 300px
      .rightTop
        height: 50px
        display: flex
        justify-content: space-between
        align-items: center
        .btn
          width: 70px
          height: 32px
</style>
