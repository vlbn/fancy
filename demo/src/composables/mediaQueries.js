import { ref } from "vue";

const mediaQueries = () => {
  const mobile = window.matchMedia("(max-width: 428px)");
  const desktop = window.matchMedia("(min-width: 1200px)");

  const portrait = window.matchMedia("(orientation: portrait)");
  const landscape = window.matchMedia("(orientation: landscape)");

  const orientationIs = ref("");
  const deviceIs = ref("");

  // on MATCHMEDIA change: deviceIs (if true)

  mobile.onchange = (e) => {
    if (e.matches) {
      deviceIs.value = "mobile";
    }
  };

  desktop.onchange = (e) => {
    if (e.matches) {
      deviceIs.value = "desktop";
    }
  };

  portrait.onchange = (e) => {
    if (e.matches) {
      orientationIs.value = "portrait";
    }
  };

  landscape.onchange = (e) => {
    if (e.matches) {
      orientationIs.value = "landscape";
    }
  };

  // if MATCHES deviceIs value

  if (mobile.matches) {
    deviceIs.value = "mobile";
  }

  if (desktop.matches) {
    deviceIs.value = "desktop";
  }

  if (portrait.matches) {
    orientationIs.value = "portrait";
    if (portrait.matches && !desktop.matches) {
      deviceIs.value = "mobile";
    }
  }

  if (landscape.matches) {
    orientationIs.value = "landscape";
    if (landscape.matches && !desktop.matches) {
      deviceIs.value = "mobile";
    }
  }

  return {
    mobile,
    desktop,
    portrait,
    landscape,
    orientationIs,
    deviceIs,
  };
};

export default mediaQueries;
