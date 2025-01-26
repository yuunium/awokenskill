var selected_box = "";
function box(a) {
  document.getElementById(a).src = './pic/selected.png';
  selected_box = a;
};


function downloadPngFile() {
  const element = document.getElementById('canvas');
  const getImage = document.getElementById("downloadImage");
  html2canvas(element, { backgroundColor: null, scale: 3, width:700 }).then(canvas => {
    getImage.setAttribute("href", canvas.toDataURL());
    getImage.setAttribute("download", "awokenskill.png");
    getImage.click();
  });
};

function downloadPngDisplay() {
  const element = document.getElementById('canvas');
  const getImage = document.getElementById("displayImage");
  html2canvas(element, { backgroundColor: null, scale: 3, width:700 }).then(canvas => {
    const imageData = canvas.toDataURL("image/png");
    getImage.src = imageData;
  });
  getImage.style.display = "block";
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
  if (document.getElementById("box10").src.includes("question.png")) {
    document.getElementById("box10").src = "./pic/syncro.png";
};
}

function appear_bar() {
  document.getElementById('super').style.display = "";
  if (document.getElementById("box10").src.includes("syncro.png")) {
    document.getElementById("box10").src = "./pic/question.png";
};
}