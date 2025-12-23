function switchLang(lang) {
  const sections = document.querySelectorAll("[data-lang]");

  sections.forEach(section => {
    section.classList.remove("visible");
    if (section.getAttribute("data-lang") === lang) {
      section.classList.add("visible");
    }
  });

  // اتجاه الصفحة
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", lang);
  }

  // حفظ اللغة
  localStorage.setItem("site_lang", lang);
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("site_lang") || "fr";
  switchLang(savedLang);
});
