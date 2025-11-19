<script>
  function switchLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
    localStorage.setItem('lang', lang);
  }

  window.onload = () => {
    const savedLang = localStorage.getItem('lang') || 'fr';
    switchLang(savedLang);
  };
</script>
