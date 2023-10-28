// Default Value
document.getElementById("ta-html").textContent = "<h2>Hello, World!</h2>";
document.getElementById("ta-css").innerHTML = "h2{<br />&nbsp;&nbsp;font-family: sans-serif;<br />}";
document.getElementById("ra").setAttribute('srcdoc', '<h2 style = "font-family: sans-serif;">Hello, world!</h2>');
// Run Button
document.getElementById("run").addEventListener('click', () => {  document.getElementById("ra").setAttribute(
  'srcdoc',
    document.getElementById("ta-html").innerText + "<style>" + document.getElementById("ta-css").innerText + "</style><script>" + document.getElementById("ta-js").innerText + "</script>"
  );
});
