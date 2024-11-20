const Codehighlighter = (code: string): string => {
  const code_array: string[] = code.split("\n");
  let code_array_html = "";

  for (let i = 0; i < code_array.length; i++) {
    code_array_html += `<pre data-prefix="${i + 1}"><code>${code_array[i]}</code></pre>`;
  }
  return `<div class="mockup-code">${code_array_html}</div>`;
};

export default Codehighlighter;
