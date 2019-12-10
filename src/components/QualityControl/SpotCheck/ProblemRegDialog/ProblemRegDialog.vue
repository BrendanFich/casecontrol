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
        <el-select v-model="value" placeholder="名称" size="small" style="width: 100px">
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
        <el-table :data="leftTableData" height="300" class="table">
          <el-table-column type="selection" label="代码" width="45px"></el-table-column>
          <el-table-column prop="code" label="代码" width="60px"></el-table-column>
          <el-table-column prop="name" label="名称" width="650"></el-table-column>
        </el-table>
      </div>
      <div class="middle">
        <el-button type="primary" round>添加 <i class="el-icon-d-arrow-right"></i></el-button>
        <el-button type="primary" round icon="el-icon-d-arrow-left">删除</el-button>
      </div>
      <div class="right">
        <el-table :data="rightTableData" height="300" class="table">
          <el-table-column type="selection" label="代码" width="45px"></el-table-column>
          <el-table-column prop="code" label="代码" width="60px"></el-table-column>
          <el-table-column prop="name" label="名称" width="650"></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
      </span>
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
          name: '主诉描述有缺陷'
        },
        {
          code: '20004',
          name: '主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷'
        }
      ],
      rightTableData: [
        {
          code: '20004',
          name: '主诉描述有缺陷'
        },
        {
          code: '20004',
          name: '主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷,主诉描述有缺陷'
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
    padding: 10px 20px 0
    display: flex
    justify-content: space-around
    align-items: center
    height: 300px
    .table
      @include box-shadow
    .left
      width: 340px
      height: 300px
      .input-with-select
        width: 200px
        >>>.el-button__inner
          height: 32px
          width: 63px
        >>>.el-input-group__append
          background: $color-tag-blue
          border: 1px solid $color-tag-blue
          i
            color: $color-white
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
      width: 340px
      height: 300px
</style>
