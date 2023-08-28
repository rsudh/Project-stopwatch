$(function(){

var mode=0;
var timecounter=0;
var lapcounter=0;
var action;
var lapnumber=0;
var timeminute,timesec,timecentisec,lapminute=0,lapsec,lapcentisec
hideshowbutton("#startbutton","#lapbutton");
$("#startbutton").click(function(){
mode=1;
hideshowbutton("#stopbutton","#lapbutton");
startaction();



});


$("#stopbutton").click(function(){

    hideshowbutton("#resumebutton","#resetbutton");
    clearInterval(action);




});
$("#resumebutton").click(function(){

    hideshowbutton("#stopbutton","#lapbutton");
  startaction();




});
$("#resetbutton").click(function(){
location.reload();



});


$("#lapbutton").click(function(){
if(mode){
    clearInterval(action);
    lapcounter=0;
    addlap();
    startaction();
}




});


































function startaction(){
   action=setInterval(function(){
   ++timecounter;
   if(timecounter==100*60*100) timecounter=0;

    ++lapcounter;
    if(lapcounter==600000)lapcounter=0;
    updatetime();

   },10);
}
function updatetime(){
    timeminute=Math.floor(timecounter/6000);
    timesec=Math.floor((timecounter%6000)/100);
    timecentisec=((timecounter%6000)%100);
    $("#timeminute").text(format(timeminute));
    $("#timesec").text(format(timesec));
    $("#timecentisec").text(format(timecentisec));
    lapminiuteminute=Math.floor(lapcounter/6000);
    lapsec=Math.floor((lapcounter%6000)/100);
    lapcentisec=((lapcounter%6000)%100);
    $("#lapminute").text(format(lapminute));
    $("#lapsec").text(format(lapsec));
    $("#lapcentisec").text(format(lapcentisec));
}

function format(number){
    if(number<10){
        return '0'+ number;

    }
    else{
        return number;
    }

}

function hideshowbutton(x,y){
    $(".control").hide();
    $(x).show();
    $(y).show();

}


function addlap(){

    ++lapnumber;
    
        var mylapdetails=
        '<div class="lap">'+
    
        '<div class="laptimetitle">'+
        'Lap'+ lapnumber +
        '</div>'+
        
        '<div class="laptime">'+
        '<span>'+ format(lapminute) +'</span>' +  ':<span>'+ format(lapsec) +'</span>' +  ':<span>'+ format(lapcentisec)+'</span>'+
        '</div>'+
        
        
        '</div>'
        $(mylapdetails).prependTo("#laps");
    }
    
    



});