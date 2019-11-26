export const tipsMixin = {
  methods: {
    successTips (string) {
      this.$notify({
        title: '成功',
        message: `${string}成功`,
        position: 'bottom-right',
        type: 'success'
      })
    },
    errorTips (string, reason) {
      this.$notify.error({
        title: '错误',
        message: `${string}失败，原因：${reason}`,
        position: 'bottom-right'
      })
    },
    warnConfirm (name) {
      return new Promise((resolve, reject) => {
        this.$confirm(`此操作将永久删除${name}, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          resolve()
        })
      })
    }
  }
}
