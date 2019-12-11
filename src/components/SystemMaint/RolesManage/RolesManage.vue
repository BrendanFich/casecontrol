<template>
  <div class="rolesManage">
    <div class="left">
      <div class="operatings">
        <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
          <el-button type="primary" class="addBtn">添加</el-button>
      </div>
      <div class="leftMain">
        <el-table :data="leftTableData" style="width: 100%" class="table">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="rolesCode" label="角色编码" align="center"></el-table-column>
          <el-table-column prop="rolesName" label="角色名称" align="center"></el-table-column>
          <el-table-column prop="originSystem" label="来源系统" align="center"></el-table-column>
          <el-table-column prop="rolesDescription" label="角色描述" width="150" align="center"></el-table-column>
          <el-table-column prop="remark" label="备注" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template>
              <i class="el-icon-edit edit" @click="edit"></i><i class="el-icon-delete" @click="remove"></i>
            </template>
          </el-table-column>
        </el-table>
        <div class="footer">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
      </div>
    </div>
    <div class="right">
      <div class="operatings">
        <el-input placeholder="请输入内容" v-model="input2" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
          <el-button type="primary" class="addBtn">添加</el-button>
      </div>
      <div class="tag">权限</div>
      <div class="rightMain">
        <el-table :data="rightTableData" style="width: 100%" class="table">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="authorityCode" label="权限编码" align="center"></el-table-column>
          <el-table-column prop="authorityName" label="权限名称" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template>
              <span class="cancel" @click="cancel">取消</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="footer">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
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
      input1: '',
      input2: '',
      leftTableData: [
        {
          rolesCode: 'hdr-control',
          rolesName: '系统管理员',
          originSystem: 'hdr-console',
          rolesDescription: '管理用户以及权限',
          remark: '-'
        },
        {
          rolesCode: 'hdr-control',
          rolesName: '系统管理员',
          originSystem: 'hdr-console',
          rolesDescription: '管理用户以及权限',
          remark: '-'
        },
        {
          rolesCode: 'adr-admin',
          rolesName: '审核员',
          originSystem: 'hdr-adr',
          rolesDescription: 'ADR审核人',
          remark: '-'
        }
      ],
      rightTableData: [
        {
          authorityCode: 'hdr-control',
          authorityName: '管理用户以及权限'
        },
        {
          authorityCode: 'hdrcs_ct_all',
          authorityName: '只能看到自己操作以内权限'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    edit () {
      console.log('edit')
    },
    remove () {
      console.log('delete')
    },
    cancel () {
      console.log('cancel')
    }
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.rolesManage
  .operatings
    margin-bottom: 25px
    .input-with-select
      width: 200px
      >>>.el-input__inner
        height: 35px
      .el-button
        width: 43px
      >>>.el-input-group__append
        background: $color-primary
        border: 1px solid $color-primary
        i
          color: $color-white
    .addBtn
      width: 90px
      height: 35px
  .left
    float: left
    width: 824px
    height: 715px
    margin-right: 40px
    .leftMain
      height: 100%
      position: relative
      @include box-shadow
      .table
        i
          @include font(18px, 800, #BFBFBFFF)
          font-size: 20px
          cursor: pointer
          margin: 5px
      .footer
        width: 100%
        text-align: center
        position: absolute
        margin-bottom: 40px
        bottom: 0
        left: 0
  .right
    float: left
    width: 730px
    height: 677px
    .rightMain
      height: 100%
      position: relative
      @include box-shadow
      border-top: none
    .tag
      width: 120px
      height: 36px
      line-height: 36px
      text-align: center
      background: $color-primary
      color: $color-white
    .table
      border-top: 3px solid $color-border-blue
      .cancel
        @include font(14px, 400, $color-word-blue)
        cursor: pointer
    .footer
        width: 100%
        text-align: center
        position: absolute
        margin-bottom: 40px
        bottom: 0
        left: 0
</style>
