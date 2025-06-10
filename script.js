function switchLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(e => e.classList.remove('visible'));
  document.querySelectorAll('[data-lang="' + lang + '"]').forEach(e => e.classList.add('visible'));
}
window.onload = () => switchLang('ar');

