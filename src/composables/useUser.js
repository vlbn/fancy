import { reactive, readonly, toRefs } from "vue";

const state = reactive({
  usuario: null 
});

export function useUser() {
  
  return {
    state: toRefs(readonly(state)),
  };
}
