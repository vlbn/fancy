<script setup>
const props = defineProps({
    position: {
        type: String,
        default() {
            return "";
        },
    },
});
</script>

<template>
    <div :class="position" class="onTopOfEverything">
        <div class="mouse-container pointer">
            <div class="mouse-body">
                <div class="mouse-wheel"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// mouse icon - scroll indicator
.onTopOfEverything {
    z-index: 9999 !important;
}
.mouse {
    &-container {
        margin: 3rem;
        width: 25px;
        height: 43px;
        z-index: 3;
    }

    &-body {
        display: block;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #6e6e6e5e;
        -moz-border-radius: 15px;
        -webkit-border-radius: 15px;
        border-radius: 15px;
    }

    &-wheel {
        display: block;
        margin: 0 0 0 -2px;
        position: relative;
        top: 10px;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #6e6e6e5e;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -moz-animation: mouse-wheel 1.8s linear 0s infinite normal none;
        -webkit-animation: mouse-wheel 1.8s linear 0s infinite normal none;
        animation: mouse-wheel 1.8s linear 0s infinite normal none;
    }
}

@keyframes mouse-wheel {
    0% {
        -moz-transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

    35% {
        -moz-transform: translate3d(0, 7px, 0);
        -webkit-transform: translate3d(0, 7px, 0);
        transform: translate3d(0, 7px, 0);
        opacity: 1;
    }

    50% {
        -moz-transform: translate3d(0, 10px, 0);
        -webkit-transform: translate3d(0, 10px, 0);
        transform: translate3d(0, 10px, 0);
        opacity: 0;
    }

    50.001% {
        -moz-transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 0;
    }

    80% {
        -moz-transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 0;
    }
}
</style>
