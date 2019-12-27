<template>
  <div class="spotCheck">
    <div class="left">
      <div class="title">
        <div>质控病人</div>
        <el-button type="primary" size="mini" class="refresh" round>
          <img src="./img/refresh.png" alt /> 刷新
        </el-button>
      </div>
      <div class="navMenu">
        <div class="peopleSelect">
          <span>人数 ({{ patientList.length }})</span>
          <i class="el-icon-arrow-down" @click="turnNext"></i>
          <i class="el-icon-arrow-up" @click="turnBefore"></i>
        </div>
        <el-menu :default-active="menuList[0]" background-color="transparent">
          <el-submenu index="1">
            <template slot="title">
              <img src="./img/femaleAvatar.png" /> {{ currentPatient.name }}({{
                currentPatient.bedNo
              }})
            </template>
            <el-menu-item
              :index="item"
              v-for="(item, index) in menuList"
              :key="index"
              @click="selectMenu(item)"
              >{{ item }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="main">
      <ul class="patientInfo">
        <li>
          <span class="key">姓名：</span>
          <span class="value">{{patientInfoList.name}}</span>
        </li>
        <li>
          <span class="key">住院号：</span>
          <span class="value">{{patientInfoList.inHospitalNo}}</span>
        </li>
        <li>
          <span class="key">床号：</span>
          <span class="value">{{patientInfoList.bedNo}}</span>
        </li>
        <li>
          <span class="key">性别：</span>
          <span class="value">{{patientInfoList.sex}}</span>
        </li>
        <li>
          <span class="key">年龄：</span>
          <span class="value">{{patientInfoList.age}}</span>
        </li>
        <li>
          <span class="key">结算：</span>
          <span class="value">{{patientInfoList.count}}</span>
        </li>
        <li class="dashed"></li>
        <li>
          <span class="key">护理：</span>
          <span class="value">{{patientInfoList.nursing}}</span>
        </li>
        <li>
          <span class="key">病情：</span>
          <span class="value">{{patientInfoList.condition}}</span>
        </li>
        <li>
          <span class="key">饮食：</span>
          <span class="value">{{patientInfoList.diet}}</span>
        </li>
        <li>
          <span class="key">体重：</span>
          <span class="value">{{patientInfoList.weight}}</span>
        </li>
        <li>
          <span class="key">入院日期：</span>
          <span class="value">{{patientInfoList.enterHospDate}}</span>
        </li>
        <li>
          <span class="key">特注：</span>
          <span class="value">{{patientInfoList.remark}}</span>
        </li>
        <div class="dashed"></div>
      </ul>
      <div class="noData" v-if="menuActiveItem === undefined">
        <img src="./img/noData.png" alt="" />
        <div>该病人暂无病历信息</div>
      </div>
      <OperationPanel v-else :menuActiveItem="menuActiveItem"></OperationPanel>
    </div>
  </div>
</template>

<script>
import OperationPanel from './OperationPanel/OperationPanel'
// import { post } from '@/request/http'
export default {
  components: { OperationPanel },
  data () {
    return {
      regVisible1: false,
      regVisible2: false,
      patientList: this.$store.state.secSelected,
      patientIndex: 0,
      medicalList: [],
      dateRange: [],
      tabName: '',
      menuActiveItem: '',
      patientInfoList: {
        name: '王敏婷',
        inHospitalNo: '545548',
        bedNo: '003',
        sex: '女',
        age: '28岁',
        count: '自费',
        nursing: '--',
        condition: '--',
        diet: '--',
        weight: '--',
        enterHospDate: '2012-11-23',
        remark: '--'
      }
    }
  },
  computed: {
    currentPatient () {
      return this.patientList[this.patientIndex]
    },
    menuList () {
      let menuList = []
      for (const key in this.medicalList) {
        menuList.push(this.medicalList[key].MedicalType)
      }
      return Array.from(new Set(menuList))
    }
  },
  // 不行的话换用mounted
  created () {
    this.menuActiveItem = this.menuList[0]
    this.menuActiveItem = 'ssss'
    this._getMedicalList()
  },
  methods: {
    selectMenu (item) {
      this.menuActiveItem = item
      // this.medicalList.forEach(el => {
      //   if (el.MedicalType === item) {
      //   }
      // })
    },
    _getMedicalList () {
      console.log('请求')
      // post('/api/admin/medicallist', {visitid: this.currentPatient.inHospitalNo}).then(res => {
      //   console.log(res)
      //   this.medicalList = res.data
      // })
    },
    turnNext () {
      if (this.patientIndex < this.patientList.length - 1) {
        this.patientIndex += 1
      }
    },
    turnBefore () {
      if (this.patientIndex > 0) {
        this.patientIndex -= 1
      }
    }
  },
  // 当前病人改变时，重新获取数据
  watch: {
    currentPatient () {
      this._getMedicalList()
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.spotCheck
  position: absolute
  top: -30px
  left: -50px
  height: 100%
  .left
    width: 250px
    height: 100%
    border-right: 1px solid $color-border-grey
    .title
      padding: 0 20px
      height: 60px
      display: flex
      justify-content: space-between
      align-items: center
      background: $color-bg-blue
      z-index: -102
      @include font(18px, 800, $color-word-black)
      .refresh
        width: 75px
        height: 30px
        padding: 0
        font-size: 15px
        img
          width: 14px
          height: 16px
    .navMenu
      .peopleSelect
        padding: 0px 20px
        height: 60px
        line-height: 60px
        display: flex
        justify-content: space-between
        align-items: center
        span
          flex: 1
        i
          display: inline-block
          width: 20px
          height: 20px
          margin-left: 5px
          @include font(14px, 800, $color-word-blue)
          cursor: pointer
      .el-menu
        border: none
  .main
    position: absolute
    top: 60px
    left: 330px
    width: 1400px
    height: 790px
    .patientInfo
      margin-bottom: 20px
      padding: 30px 50px
      clear: both
      display: flex
      flex-wrap: wrap
      align-items: center
      justify-content: space-between
      @include box-shadow
      .dashed
        height: 1px
        width: 100%
        border-bottom: 1px dashed $color-border-grey
        margin: 10px 0
      >li
        width: 200px
        .key
          color: $color-word-blue
</style>
