document.getElementById("ra").setAttribute('srcdoc', '<h2 style = "font-family: sans-serif;">Type something into the field above to run!</h2>')
document.body.onkeydown = function(event) {
  document.getElementById("ra").setAttribute('srcdoc', document.getElementById("ta").value);
};
