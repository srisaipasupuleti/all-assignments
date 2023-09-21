function countSeconds(time){
    if(time===0){
        console.log('time up');
        return;
    }

    console.log(time);

    setTimeout(function(){
        countSeconds(time-1);
    },1000);
}

countSeconds(10);