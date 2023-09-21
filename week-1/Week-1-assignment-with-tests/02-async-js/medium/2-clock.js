setInterval(timesNow,1000);

function timesNow(){
    let today=new Date();
    let hours=today.getHours();
    let ampm=hours>=12?'PM':'AM';
    hours=hours%12;
    hours=hours?hours:12;
    let minutes=today.getMinutes();
    let seconds=today.getSeconds();

    let strTime= hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    console.log(strTime);
}