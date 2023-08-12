let storedTheme: string | null =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');
if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme);

function toggleDarkMode(): void {
  let currentTheme: string | null =
    document.documentElement.getAttribute('data-theme');
  let targetTheme: string = 'light';

  const toggle: HTMLElement | null = document.querySelector('#theme-toggle');
  if (currentTheme === 'light') {
    targetTheme = 'dark';
    if (toggle) {
      toggle.classList.remove('from-rose-500', 'to-fuchsia-500');
      toggle.classList.add('from-indigo-700', 'to-purple-600');
    }
  } else {
    if (toggle) {
      toggle.classList.remove('from-indigo-700', 'to-purple-600');
      toggle.classList.add('from-rose-500', 'to-fuchsia-500');
    }
  }
  console.debug('toggleDarkMode', targetTheme);
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
  if (toggle) {
    toggle.innerText = `Click to toggle theme ${
      targetTheme === 'dark' ? '🌙' : '☀'
    }`;
  }
}
