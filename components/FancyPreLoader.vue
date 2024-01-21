<template>
    <div class="is-flex is-justify-content-center fv-100 is-flex-direction-column is-align-items-center p-5">
        <div class="iSpin"></div>
    </div>
</template>

<style scoped>
.iSpin {
    &::after {
        animation: spinAround 200ms infinite linear;
        border: 2px solid rgb(224, 176, 31);
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
