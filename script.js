<script>
  function switchLang(lang) {
    // إظهار / إخفاء المحتوى حسب اللغة
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.remove('visible');
      if (el.getAttribute('data-lang') === lang) {
        el.classList.add('visible');
      }
    });

    // تغيير اتجاه الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // حفظ اللغة
    localStorage.setItem('lang', lang);
  }

  // تحميل اللغة المحفوظة عند فتح الصفحة
  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'fr';
    switchLang(savedLang);
  });
</script>
