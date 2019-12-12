<template>
  <div class="myDatePicker">
    <el-date-picker
      v-model="dateRange"
      size="small"
      style="width:270px"
      type="daterange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    selectWidth: {
      type: Number,
      default: 120
    },
    value: {
      default: ""
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    value(val) {
      this.data = val;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~assets/sass/variable'
@import '~assets/sass/mixin'
.myDatePicker
</style>
