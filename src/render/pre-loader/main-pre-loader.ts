window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  const types: Array<keyof NodeJS.ProcessVersions> = ['chrome', 'node', 'electron'];

  for (const type of types) {
    if (typeof process.versions === 'object' && typeof type === 'string') {
      const version = process.versions[type];
      if (typeof version === 'string') {
        replaceText(`${type}-version`, version);
      }
    }
  }
});
