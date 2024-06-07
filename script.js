
function box(a){
    document.getElementById(a).src='./pic/selected.png';
    document.getElementById('selected_box').innerHTML=a;
};

function set(a){
  var in_box = document.getElementById('selected_box').innerHTML;
  console.log(in_box);
  document.getElementById(in_box).src='./pic/'+a+'.png';
  document.getElementById('selected_box').innerHTML='';
  in_box='';
};

function color(a){
  document.getElementById('body').style.backgroundColor= a;
}

function downloadPng() {
  const element =document.getElementById('canvas');
  const getImage = document.getElementById("getImage");
  html2canvas(element,{backgroundColor: null,scale: 2,height:800}).then(canvas => {
    getImage.setAttribute("href", canvas.toDataURL());
    getImage.setAttribute("download", "awokenskill.png");
    getImage.click();
  });	
  };
