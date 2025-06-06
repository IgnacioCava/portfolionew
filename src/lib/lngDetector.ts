const detectedLanguage = () => {
  const userLanguages = navigator.languages;
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
