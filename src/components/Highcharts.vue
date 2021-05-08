<template>
  <div class="highcharts-container"></div>
</template>

<script lang='ts'>
import * as Highcharts from 'highcharts';

export default {
  name: "Highcharts",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.buildChart();
    },
    buildChart() {
      Highcharts.chart(this.$el, {
        // 配置
      });
    }
  },
  watch: {
    options: {
      handler: function(val, oldval) {
        this.buildChart();
      }
    }
  }
};
</script>

<style lang="scss">
.highcharts-container {
  width: 800px;
  height: 400px;
}
</style>
