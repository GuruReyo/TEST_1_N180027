function guru(){
    var p=/^[F][a-zA-Z]{4,9}$/;
    var us=document.getElementById('user').value;
    var emal=/^[a-z,A-Z,0-9][a-zA-Z0-9,.,_]*@[a-z]{2,6}\.?[a-z]{2,3}\.?[a-z]{2,3}$/;
    var gm=document.getElementById('gmail').value;
    var mbl=/^977[0-9]{7,7}$/;
    var mb=/^[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}$/;
    var ph=document.getElementById('phn').value;
    var g=ph.length;
    var dd=/^[SBIN][a-zA-Z]{4,4}|[0-9]{11,11}$/
    var pant=document.getElementById("pt").value;
    
    if(!p.test(us)){
        return false;
    }
    if(g==10){
        if(!mb1.test(ph)){
            return false;
        }
    }
    else if(g==14){
        if(!mb.test(ph)){
            return false;
        }
    }
    else{
        return false;
    }
    if(!emal.test(gm)){
        return false;
    }
    if(!dd.test(pant)){
        return false;
    }
    return true;
    
}
var pnt=document.getElementById('country');
pnt.addEventListener('blur',showbeer);
function showbeer(){
    if ((pnt.value!='INDIA')) {
    document.getElementById('beer').style.display='block';
    }
    else{
        document.getElementById('beer').style.display='none';
    }
}
document.getElementById('days').addEventListener('keyup',cost);
function cost(){
    var totalcost;
    var dys=document.getElementById('days').value;
    var nuz=document.getElementById('n').checked;
    var sklm=document.getElementById('s').checked;
    var kadapa=document.getElementById('k').checked;
    var ongole=document.getElementById('o').checked;
    if(nuz||kadapa){
        totalcost=dys*2000;
    }
    if(ongole||sklm){
        totalcost=dys*3000;
    }
document.getElementById('cos').innerText=totalcost;
}
var i=0;
function myfun(){
    var a=['pink','skyblue','yellow'];
    document.getElementById('formdiv').style.backgroundColor=a[i];
    i=i+1;
    if(i>a.length){
        i=0;
    }
}
setInterval(myfun,1000);
