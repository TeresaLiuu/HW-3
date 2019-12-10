function genPassword() {
  var lowerEl = document.getElementById("lowercase").checked;
  var upperEl = document.getElementById("uppercase").checked;
  var numbersEl = document.getElementById("numbers").checked;
  var symbolsEl = document.getElementById("symbols").checked;


  var number = document.getElementById("length").value;
  var inputbox = document.getElementById("InputPassword");

  var chars = "";
  if (lowerEl == true){
    chars+="acdefghijklmnopqrstuvwxyz";
  }
  if (upperEl == true){
    chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbersEl == true){
    chars+="0123456789";
  }
  if (symbolsEl == true){
    chars+="#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }


  var result = "";
  for (var i = 0; i < number; i++) {
    var random = Math.floor(Math.random() * chars.length);
    result += chars.charAt(random);
  }
  inputbox.value = result;
}

function copy(){
  var copyText = document.getElementById("InputPassword");
  copyText.select();
  copyText.setSelectionRange(0, 128)
  document.execCommand("copy");
  alert("Copied Password "+ copyText.value);
}


