<template>
  <div class="paramsConfig">
    <div class="content">
      <el-form :model="form" ref="form" label-width="280px" class="form">
        <el-form-item label="医院名称" prop="hospitalName">
          <el-input type="text" v-model="form.hospitalName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据库地址" prop="databaseAddress">
          <el-input type="text" v-model="form.databaseAddress" autocomplete="off" placeholder="请输入用户编码"></el-input>
        </el-form-item>
        <el-form-item label="Webservers服务地址" prop="webserversAddress">
          <el-input type="text" v-model="form.webserversAddress" autocomplete="off" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item label="接口配置" prop="interfaceConfig">
          <el-input type="text" v-model="form.interfaceConfig" autocomplete="off" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="异常报警未处理前是否继续提示" prop="checkPassword">
          <el-switch v-model="form.isPrompt"></el-switch>
        </el-form-item>
        <el-form-item label="自动监测数据存库间隔" prop="timeInterval">
          <el-input type="text" v-model="form.timeInterval" autocomplete="off" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('form')">保存</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      form: {
        hospitalName: '佛山市南海区第一人民医院',
        databaseAddress: '192.168.3.131',
        webserversAddress: '192.168.3.132/qlcs/index.asp',
        interfaceConfig: '--',
        isPrompt: true,
        timeInterval: '5分钟'
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.paramsConfig
  .content
    width: 1600px
    height: 770px
    @include box-shadow
    .form
      margin-top: 30px
      margin-left: 30px
      width: 600px
      >>>.el-form-item__label
        color: $color-word-black
        background: $color-bg-label
      >>>.el-input__inner
        color: $color-primary
        width: 300px
        border-style: dashed
        margin-left: 10px
      >>>.el-switch
        margin-left: 20px
</style>
