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
  // The demo clip stands still for anyone who has asked for less motion.
  document.addEventListener('DOMContentLoaded', function () {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    [].forEach.call(document.querySelectorAll('video[autoplay]'), function (v) { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });
  });
  // News: each button shows or hides one kind of item; a year with nothing left is hidden.
  document.addEventListener('click', function (ev) {
    var tog = ev.target.closest && ev.target.closest('.n-tog');
    var list = document.getElementById('news-list');
    if (!tog || !list) return;
    tog.setAttribute('aria-pressed', tog.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    var hidden = [].filter.call(document.querySelectorAll('.n-tog'), function (b) {
      return b.getAttribute('aria-pressed') !== 'true';
    }).map(function (b) { return b.getAttribute('data-kind'); });
    list.setAttribute('data-hide', hidden.join(' '));
    [].forEach.call(list.querySelectorAll('.n-year'), function (year) {
      var left = [].some.call(year.querySelectorAll('.n-item'), function (li) {
        return hidden.indexOf(li.getAttribute('data-kind')) === -1;
      });
      year.hidden = !left;
    });
  });
})();
