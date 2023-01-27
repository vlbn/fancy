import { createClient } from "@supabase/supabase-js";
import { reactive, readonly, toRefs } from "vue";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

let state = reactive({
  usuario: null 
});

supabase.auth.onAuthStateChange((_, _session) => {
  console.log("revisando el estado de la session");
  if (!_session) {
    state.usuario = null;
    console.log("🖖🏻 gg usuario");
  } else {
    console.log("todo ok")
  }
});

supabase.auth.getSession().then(({ data }) => {
  console.log("getting session.." + `\n` + "data is: " + data.session);
  if(data != null) {
    const { session } = data;
    if(session){
      state.usuario = session.user;
      console.log("😄");
    } else {
      console.log("😥");
    }
  }
});


//
export function useUser() {  
  return {
    state: toRefs(readonly(state)),
  };
}

//
export const handleLogin = async (correo) => {
  try {
    //isLoading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: correo,
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    //isLoading.value = false;
  }
};

//
export const logOut = async () => {
  try {
    //isLoading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    //isLoading.value = false;
  }
};
