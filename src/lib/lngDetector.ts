const detectedLanguage = () => {
  let userLanguages;
  if (typeof navigator !== "undefined" && navigator.languages) {
    userLanguages = navigator.languages;
  }
  if (!userLanguages) return "en";
  const firstLang = userLanguages[0]?.toLowerCase() || "en";

  let detectedLang = "en";
  if (firstLang.startsWith("es")) {
    detectedLang = "es";
  } else if (firstLang.startsWith("en")) {
    detectedLang = "en";
  }
  return detectedLang;
};

export default detectedLanguage;
