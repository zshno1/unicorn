<template>
    <div>
        <nut-form>
            <nut-form-item label="金额" label-align="center">
                <input v-model="basicData.money" placeholder="请输入金额" type="number" />
            </nut-form-item>
            <nut-form-item label="年化率" label-align="center"> <input v-model="basicData.rate" placeholder="请输入年化率" type="number" />% </nut-form-item>
            <nut-form-item label="天数" label-align="center">
                <input v-model="basicData.day" placeholder="请输入天数" type="number" />
            </nut-form-item>
            <nut-cell>
                预计收益：
                <template v-if="result">
                    <nut-price :price="result" :thousands="true" />
                </template>
                <template v-else> -- </template>
            </nut-cell>
            <nut-cell>
                <nut-button block type="primary" @click="submit">计算收益</nut-button>
            </nut-cell>
        </nut-form>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const basicData = reactive({
    rate: undefined,
    money: undefined,
    day: '1',
});
const result = ref<null | number>(null);

const submit = () => {
    if (basicData.rate && basicData.money && basicData.day) {
        result.value = (((basicData.rate / 100) * basicData.money) / 356) * Number(basicData.day);
    }
};
</script>
