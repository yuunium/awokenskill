function box(a){
    document.getElementById(a).src='./pic/selected.png';
    document.getElementById('selected_box').innerHTML=a;
  }
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