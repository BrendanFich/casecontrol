<template>
  <div class="login">
    <div class="content">
      <div class="leftImg"></div>
      <div class="rightInfo">
        <div class="title">病历质控系统</div>
        <div class="loginInput">
          <el-input placeholder="请输入用户名" prefix-icon="el-icon-user-solid" v-model="loginInfo.username" size="large" clearable></el-input>
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="loginInfo.password" type="password" size="large" clearable></el-input>
          <div class="remember">
            <span>记住密码</span> <el-switch v-model="isRemember"></el-switch>
          </div>
          <el-button round type="primary" size="small" @click="_login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from '@/request/http'
export default {
  name: 'Login',
  data () {
    return {
      isRemember: true,
      loginInfo: {
        username: 'xiaoming',
        password: '1'
      }
    }
  },
  methods: {
    _login () {
      post('/login', this.loginInfo).then(res => {
        console.log(res)
        if (res.code === 0) {
          localStorage.setItem('blzkToken', res.data.token)
          console.log(this.$route)
          if (this.$route.query.redirect) {
            this.$router.push(this.$route.query.redirect)
          } else {
            this.$router.push({path: '/home'})
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.login
  position: relative
  width: 100%
  height: 100%
  background: linear-gradient(to bottom, #5342f6FF, #2a82feFF)
  .content
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 1150px
    height: 620px
    background: $color-white
    border-radius: 29px
    .leftImg
      display: inline-block
      width: 641px
      height: 552px
      transform: translate(80px, -69px)
      float: left
      background: url('./login.png') no-repeat 0 0
    .rightInfo
      display: inline-block
      width: 280px
      float: right
      margin: 88px 146px 0 0
      .title
        @include font(40px, 800, $color-login-title)
        margin-bottom: 54px
      .loginInput
        >>>.el-input
          margin: 10px 0
          .el-input__inner
            background: transparent
            border-radius: 0
            border: 0
            border-bottom: 1px solid $color-border-grey
            &:focus
              border-bottom-color: $color-primary
          .el-input__icon
            @include font(16px, 400, $color-primary)
        .remember
          margin: 30px 0
          span
            @include font(15px, 400, $color-word-grey)
            margin: 0 14px
        .el-button
          width: 100%
          height: 40px
          @include font(18px, 400, $color-white)
</style>
