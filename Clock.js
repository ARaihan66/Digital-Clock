
const time = function(){
    const date = new Date();
    const week = ['Sunday','Monday','Thuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = date.getDay();
    document.getElementById('root1').innerHTML= week[day];
    document.getElementById('root2').innerHTML= date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds(); 
    document.getElementById('root3').innerHTML= date.getDate()+"/"+ date.getMonth()+"/"+ date.getFullYear(); 

}

setInterval(time,1000);