import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


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
  