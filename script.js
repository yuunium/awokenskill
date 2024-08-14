var selected_box = "";
function box(a) {
  document.getElementById(a).src = './pic/selected.png';
  selected_box = a;
};

var set_count = 0;
let now_url= "";
let url = document.getElementById("url");
function set(a) {
  document.getElementById(selected_box).src = './pic/' + a + '.png';

  let parameter_number = selected_box.charAt(selected_box.length - 1);
  if(set_count>0) {
    let new_url = url + "&" + parameter_number + "=" + a;
    url.href = new_url;
    url.innerHTML = new_url;
    now_url = new_url;
  }else{
    let new_url = url + parameter_number + "=" + a;
    url.href = new_url;
    url.innerHTML = new_url;
    now_url = new_url;
  }
  selected_box = "";
  set_count = set_count+1;
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

function copy(){
  navigator.clipboard.writeText(now_url);
}

function url_reset(){
  url.href = "https://yuunium.github.io/awokenskill/?"
  url.innerHTML = "https://yuunium.github.io/awokenskill/?";
}

function nomal() {
  document.getElementById('super').style.display = "none";
  for (let i = 1; i < 10; i++) {
    var getbox = document.getElementById('box' + i);
    getbox.src = './pic/space.png';
    getbox.style.display = "";
  };
};

function super_skill() {
  document.getElementById('box1').src = './pic/space.png';
  document.getElementById('super').style.display = "";
  for (let i = 2; i < 10; i++) {
    var getbox = document.getElementById('box' + i);
    getbox.style.display = "none";
  };
};

function syncro() {
  document.getElementById('box1').src = './pic/syncro.png';
  document.getElementById('super').style.display = "none";
  for (let i = 2; i < 10; i++) {
    var getbox = document.getElementById('box' + i);
    getbox.style.display = "none";
  };
};

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
  let Y = even(X);
  let Z = odd(X);
  let length = Y.length;

  for (let i = 0; i < length; i++) {
    selected_box = "box" + String(Number(Y[i]));
    set(Z[i]);
  }
}
