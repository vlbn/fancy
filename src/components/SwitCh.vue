<script setup>
const props = defineProps({
    isOn: {
        type: Boolean,
    },
});

</script>

<template>
    <div>
        {{ isOn }}
    </div>
</template>

<style scoped>
div {
    cursor: pointer;
}
</style>