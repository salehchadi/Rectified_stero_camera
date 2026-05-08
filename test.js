import katex from 'katex';

try {
  const html = katex.renderToString("Z = \\frac{388.18}{d}", { throwOnError: true });
  console.log("Success 1:", html !== "");
} catch (e) {
  console.error("Error 1:", e);
}

try {
  const html2 = katex.renderToString("E = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & -0.54 \\\\ 0 & 0.54 & 0 \\end{bmatrix}", { throwOnError: true });
  console.log("Success 2:", html2 !== "");
} catch (e) {
  console.error("Error 2:", e);
}
