
function box(a){
    document.getElementById(a).src='./pic/selected.png';
    document.getElementById('selected_box').innerHTML=a;
};

function set(a){
  var in_box = document.getElementById('selected_box').innerHTML;
  document.getElementById(in_box).src='./pic/'+a+'.png';
  document.getElementById('selected_box').innerHTML='';
  in_box='';
};

function downloadPng() {
  const element =document.getElementById('canvas');
  const getImage = document.getElementById("getImage");
  html2canvas(element,{backgroundColor: null,scale: 3,height:800}).then(canvas => {
    getImage.setAttribute("href", canvas.toDataURL());
    getImage.setAttribute("download", "awokenskill.png");
    getImage.click();
  });
};

function nomal(){
  document.getElementById('super').style.display = "none";
  for(let i = 1;i<10;i++){
    var getbox = document.getElementById('box'+i);
    getbox.src='./pic/space.png';
    getbox.style.display = "";
  };
};

function super_skill(){
  document.getElementById('box1').src = './pic/space.png';
  document.getElementById('super').style.display = "";
  for(let i = 2;i<10;i++){
    var getbox = document.getElementById('box'+i);
    getbox.style.display = "none";
  };
};

function syncro(){
  document.getElementById('box1').src = './pic/syncro.png';
  document.getElementById('super').style.display = "none";
  for(let i = 2;i<10;i++){
    var getbox = document.getElementById('box'+i);
    getbox.style.display = "none";
  };
};


if (registration.installing.state === "installed") {


}
