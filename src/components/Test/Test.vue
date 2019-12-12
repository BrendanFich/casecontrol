<template>
  <div>
    <el-col :span="11">
      <el-table
        :data="data1"
        border
        ref="selection"
        @selection-change="checkAll"
        style="width: 100%"
      >
        <el-table-column type="selection" width="30"> </el-table-column>
        <el-table-column prop="date" label="日期" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="2">
      <div class="opSetting">
        <div @click="handelSelect">
          <el-button
            icon="el-icon-d-arrow-right"
            :disabled="nowSelectData.length ? false : true"
            :size="buttonSize"
            type="primary"
          >
            選中
          </el-button>
        </div>
        <div class="spacing" @click="handleRemoveSelect">
          <el-button
            icon="el-icon-d-arrow-left"
            :disabled="nowSelectRightData.length ? false : true"
            :size="buttonSize"
            type="primary"
          >
            取消
          </el-button>
        </div>
      </div>
    </el-col>

    <el-col :span="11">
      <el-table
        :data="selectArr"
        border
        ref="selection"
        @selection-change="checkRightAll"
        style="width: 100%"
      >
        <el-table-column type="selection" width="30"> </el-table-column>
        <el-table-column prop="date" label="日期" width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectArr: [], // 右邊列表
      buttonSize: 'large',
      options: [],
      value: '',
      data1: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀區金沙江路 1518 弄'
        }
      ],
      nowSelectData: [], // 左邊選中列表數據
      nowSelectRightData: [] // 右邊選中列表數據
    }
  },
  methods: {
    checkAll (val) {
      console.log(val)
      this.nowSelectData = val
    },
    checkRightAll (val) {
      this.nowSelectRightData = val
    },
    // 選中
    handelSelect () {
      this.selectArr = this.handleConcatArr(this.selectArr, this.nowSelectData)
      this.handleRemoveTabList(this.nowSelectData, this.data1)
      this.nowSelectData = []
    },
    // 取消
    handleRemoveSelect () {
      this.data1 = this.handleConcatArr(this.data1, this.nowSelectRightData)
      this.handleRemoveTabList(this.nowSelectRightData, this.selectArr)
      this.nowSelectRightData = []
    },
    handleConcatArr (selectArr, nowSelectData) {
      let arr = []
      arr = arr.concat(selectArr, nowSelectData)
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
  }
}
</script>
<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
</style>
