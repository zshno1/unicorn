<template>
    <div>
        <nut-cell title="年化率计算" @click="goaAnnualInterest"></nut-cell>
    </div>
</template>

<script setup>
import Taro from '@tarojs/taro';
const goaAnnualInterest = () => {
    Taro.navigateTo({
        url: '/packages/toolbox/pages/annualInterest/annualInterest',
    });
};
</script>

<style lang="scss"></style>
