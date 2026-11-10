// Theme toggle: follows the system until the button is pressed, then remembers the choice.
(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('isg-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest && ev.target.closest('.theme-btn');
    if (!btn) return;
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('isg-theme', next); } catch (e) {}
  });
})();
