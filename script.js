document.getElementById("ra").setAttribute('srcdoc', '<h2 style = "font-family: sans-serif;">Hello, world!</h2>');
document.getElementById("run").addEventListener('click', () => {  document.getElementById("ra").setAttribute(
  'srcdoc',
    document.getElementById("ta-html").value + "<style>" + document.getElementById("ta-css").value + "</style><script>" + document.getElementById("ta-js").value + "</script>"
  );
});
