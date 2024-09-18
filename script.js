var selected_box = "";
function box(a) {
  document.getElementById(a).src = './pic/selected.png';
  selected_box = a;
};



let boxes = ["", "", "", "", "", "", "", "", "", ""];
function set(a) {
  document.getElementById(selected_box).src = './pic/' + a + '.png';
  let parameter_number = selected_box.charAt(selected_box.length - 1);
  boxes[parameter_number - 1] = a;
  selected_box = "";
};
function downloadPngFile() {
  const element = document.getElementById('canvas');
  const getImage = document.getElementById("downloadImage");
  html2canvas(element, { backgroundColor: null, scale: 3, height: 800 }).then(canvas => {
    getImage.setAttribute("href", canvas.toDataURL());
    getImage.setAttribute("download", "awokenskill.png");
    getImage.click();
  });
};

function downloadPngDisplay() {
  const element = document.getElementById('canvas');
  const getImage = document.getElementById("displayImage");
  html2canvas(element, { backgroundColor: null, scale: 3, height: 800 }).then(canvas => {
    const imageData = canvas.toDataURL("image/png");
    getImage.src = imageData;
  });
  getImage.style.display = "block";
};

let now_url = "";
function copy() {
  now_url = "https://yuunium.github.io/awokenskill/";
  for (let i = 1; i < 11; i++) {
    if (boxes[i - 1] != "") {
      if (i < 2) {
        now_url = now_url + "?" + i + "=" + boxes[i - 1];
      } else {
        now_url = now_url + "&" + i + "=" + boxes[i - 1];
      }
    }
    if (boxes[9] = "") {
      now_url = now_url + "&add=close";
    } else {
      now_url = now_url + "&add=open";
    }
  }
  navigator.clipboard.writeText(now_url);
};

function skillreset() {
  for (let i = 1; i < 11; i++) {
    var getbox = document.getElementById('box' + i);
    getbox.src = './pic/space.png';
    getbox.style.display = "";
  };
};

function nomal() {
  document.getElementById('addskill').style.display = "none";
};

function super_skill() {
  document.getElementById('addskill').style.display = "";
  document.getElementById('super').style.display = "";
  document.getElementById('box10').src = "./pic/question.png";
};

function syncro() {
  document.getElementById('addskill').style.display = "";
  document.getElementById('super').style.display = "none";
  document.getElementById('box10').src = "./pic/syncro.png";
};

function disappear_bar() {
  document.getElementById('super').style.display = "none";
  if (document.getElementById("box10").src == "question.png") {
    document.getElementById("box10").src == ".pic/syncro.png";
};
}

function appear_bar() {
  document.getElementById('super').style.display = "";
  if (document.getElementById("box10").src == "./pic/syncro.png") {
    document.getElementById("box10").src = "./pic/question.png";
};
}

function even(array) {
  const result = [];

  array.forEach((element, index) => {
    if (index % 2 === 0) {
      result.push(element);
    }
  });

  return result;
}

function odd(array) {
  const result = [];

  array.forEach((element, index) => {
    if (index % 2 !== 0) {
      result.push(element);
    }
  });

  return result;
}

var params = location.href.split("?");
if (params.length > 1) {
  let X = params[1].split(/&|=/);
  let Y = even(X).pop();
  let Z = odd(X);
  let Zlast = Z.pop();
  let length = Y.length;

  for (let i = 0; i < length; i++) {
    selected_box = "box" + String(Number(Y[i]));
    set(Z[i]);
  };
  if (Zlast == "open") {
    document.getElementById('addskill').style.display = "";
  }
};
