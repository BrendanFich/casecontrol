<template>
  <div class="scoreDialog">
    <el-dialog
      title="评审信息"
      :modal="true"
      :visible.sync="childVisible"
      width="900px"
      :before-close="close"
    >
      <ul class="left">
        <li class="item">
          <label>计分项目：</label>
          <el-input v-model="countItem"></el-input>
        </li>
        <li class="item">
          <label>评分级别：</label>
          <el-select v-model="scoreLevel"></el-select>
        </li>
        <li class="item">
          <label>项目分值：</label>
          <el-input v-model="countItem"></el-input>
        </li>
        <li class="item">
          <label>扣分：</label>
          <el-input v-model="countItem"></el-input>
        </li>
        <el-checkbox v-model="checked">手动评分</el-checkbox>
      </ul>
      <div class="right">
        <label>评分标准描述：</label>
        <el-input
          type="textarea"
          :rows="7"
          placeholder="请输入内容"
          v-model="textarea1">
        </el-input>
      </div>
      <div class="bottom">
        <label>扣分原因描述：</label>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea2">
        </el-input>
        <el-button type="primary">确定</el-button>
        <el-button type="primary">取消</el-button>
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
      textarea1: '',
      textarea2: '',
      checked: '',
      countItem: '缺有鉴别诊断意义的阴性体征',
      scoreLevel: '',
      itemScore: '2',
      cutScore: '1',
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
.scoreDialog
  >>>.el-dialog__body
    padding: 0  10px 10px 10px
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    height: 400px
    .left
      width: calc(50% - 40px)
      height: 200px
      padding: 0 20px
      .item
        width: 100%
        display: flex
        align-items: center
        margin: 10px 0
        label
          width: 80px
        .el-input
          flex: 1
        .el-input__inner
          height: 30px
    .right
      width: calc(50% - 40px)
      height: 50%
      padding: 0 20px
    .bottom
      width: 100%
      height: 150px
</style>
