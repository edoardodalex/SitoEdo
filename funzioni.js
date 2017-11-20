function sereno () {
  document.bgColor = "#FAEBD7	"
}

function rabbia() {
  document.bgColor = "red"
}

function change_color() {
  console.log(0);
  var emoction_array = ["arrabbiato", "sereno", "tranquillo", "depresso", "triste", "apatico"];
  var x=false;
  var word = document.getElementById('dato').value;
  console.log(word);
  console.log(emoction_array[0]);
  console.log(1);
  while (!x) {
    console.log(2);
    if (word == emoction_array[0]) {
      document.bgColor = "red";
      x=true;
    } else {
      if (word == emoction_array[1]) {
        document.bgColor = "#FAEBD7	";
        x=true;
      } else {
        x=true;
      }
      x=true;
    }
  }
  console.log(6);
}

function controlla_campi_Up() {
  var campo = document.getElementById('username_up').value
  var i = campo.length;
  if (i == 0) {
    alert('Inserisci il campo username');
  } else {
    campo = document.getElementById('password_up').value;
    i = campo.length;
    if (i == 0) {
      alert('Inserisci una password');
    } else {
      campo = document.getElementById('email_up').value;
      i = campo.length;
      if (i == 0) {
        alert('Inserisci un campo email');
      } else {
        window.location.href = "./home.html";
        alert ("Sei stato registrato");
      }
    }
  }
}

function controlla_campi_In() {
  var campo = document.getElementById('username_in').value
  var i = campo.length;
  if (i == 0) {
    alert('Inserisci il campo username');
  } else {
    campo = document.getElementById('password_in').value;
    i = campo.length;
    if (i == 0) {
      alert('Inserisci una password');
    } else {
      window.location.href = "./home.html";
      var string = "Benvenuto " + campo;
      alert (string);
    }
  }
}
