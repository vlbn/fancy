import { ref } from "vue";

// state
const switchState = ref(false);

// actions
const setSwitchState = () => {
  switchState.value = !switchState.value;
};

export default {
  switchState,
  setSwitchState,
};
