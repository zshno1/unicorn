<template>
    <div v-if="true">
        <Charts :optionData="option"></Charts>
    </div>
</template>
<script lang="ts" setup>
// import { ref, onMounted } from 'vue';
import { Data_netWorthTrend } from './data';
import Charts from '@/components/Charts/index.vue';
import { dateFormat } from '@/depends/utils';
console.log(Data_netWorthTrend);
const seriesData: any[] = [];
const xAxis: string[] = [];
Data_netWorthTrend.forEach(_item => {
    seriesData.push({
        value: _item.y,
    });
    xAxis.push(dateFormat('YYYY-mm-dd HH:MM:SS', _item.x));
});
const option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        data: xAxis,
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: seriesData,
            type: 'line',
            smooth: true,
        },
    ],
};


// Data_netWorthTrend.forEach
</script>

<style lang="scss">
.main {
    height: 300px;
}
</style>
