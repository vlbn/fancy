<template>
    <div class="basic">
        <div class="iSpin"></div>
    </div>
</template>

<style scoped>
.basic {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    min-height: 100vh;
}
.iSpin {
    &::after {
        animation: spinAround 200ms infinite linear;
        border: 2px solid rgb(224, 31, 105);
        border-radius: 9999px;
        border-right-color: transparent;
        border-top-color: transparent;
        content: "";
        display: block;
        height: 1em;
        position: relative;
        width: 1em;
    }
}
</style>
