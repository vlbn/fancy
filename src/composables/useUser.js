import { reactive, readonly, toRefs } from "vue";

const state = reactive({
  usuario: null 
});

export function useUser() {
  const handleState = (value) => {
    state.usuario = value;
  };
  return {
    state: toRefs(readonly(state)),
    handleState
  };
}
