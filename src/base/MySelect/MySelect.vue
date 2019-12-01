<template>
  <div class="mySelect">
    <label class="label">
      <i :class="icon"></i>
      {{label}}
    </label>
    <el-select v-model="data" placeholder="请选择" size="small" :style="{width:selectWidth + 'px'}">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: this.value
    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    selectWidth: {
      type: Number,
      default: 120
    },
    value: {
      default: ''
    },
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    value (val) {
      this.data = val
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.mySelect
  display: inline-block
  .label
    @include font(14px, 400, $color-word-black)
    margin-right: 14px
    i
      margin-right: 10px
      color: $color-word-blue
</style>
