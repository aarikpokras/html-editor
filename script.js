// Add color (not func.)

// Default Value
document.getElementById("ta-html").textContent = "<!-- HTML -->";
document.getElementById("ta-css").textContent = "/* CSS */";
document.getElementById("ta-js").textContent = "// JavaScript";
document.getElementById("ra").setAttribute('srcdoc', '<h2 style = "font-family: sans-serif;">Hello, world!</h2>');
// Run Button
document.getElementById("run").addEventListener('click', () => {  document.getElementById("ra").setAttribute(
  'srcdoc',
    document.getElementById("ta-html").innerText + "<style>" + document.getElementById("ta-css").innerText + "</style><script>" + document.getElementById("ta-js").innerText + "</script>"
  );
});
