function showTime(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
    return undefined;
}

//showTime()

setInterval(showTime,1000);