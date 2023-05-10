<template>
    <div :id="id" :class="className" :style="{ height: height, width: width }"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, nextTick } from 'vue';
import { init, EChartsOption } from 'echarts';

export default defineComponent({
    props: {
        className: {
            type: String,
            default: 'chart',
        },
        id: {
            type: String,
            default: 'lineChartsCompoents',
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '200px',
        },
        optionData: {
            type: Object,
            default: () => {},
        },
        highlight: {
            // 高亮
            type: Object,
            default: () => null,
        },
    },
    setup(props, { emit }) {
        let barChart: any = null;
        const initChart = () => {
            nextTick(() => {
                if (barChart) {
                    barChart.dispose();
                }
                barChart = init(document.getElementById(props.id) as HTMLDivElement);
                barChart.setOption(props.optionData as EChartsOption);
                barChart.on('click', function (params) {
                    emit('chart-click', params);
                });
                if (props.highlight) {
                    barChart.dispatchAction(
                        Object.assign(
                            {
                                type: 'highlight',
                            },
                            props.highlight
                        )
                    );
                }
            });
        };
        onMounted(() => {
            initChart();
        });
        watch(
            () => props.optionData,
            () => {
                initChart();
            }
        );
    },
});
</script>
