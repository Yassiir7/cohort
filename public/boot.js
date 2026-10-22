// Runs before first paint so a saved light/dark choice never flashes the other theme.
try {
  var t = JSON.parse(localStorage.getItem('cohort:theme'));
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
} catch (e) { /* storage unavailable: follow the system theme */ }
