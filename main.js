var dummyDate = new Date();
var targetDate = new Date();
var day
var hour
var min
var sec
var interval

document.getElementById("date").value = dummyDate.toJSON().toString().slice(0, 10)

function getTargetDate() {
    
    currentDate = new Date();

    targetTime = document.getElementById("time").value ? document.getElementById("time").value : '00:00:00'
    targetDate =  new Date(document.getElementById("date").value + 'T' + targetTime);
    
    console.log('targetDate:' + targetDate, 'type: ', typeof(targetDate));
    console.log('currentDate:' + currentDate);

    clearInterval(interval);
    interval = setInterval(counter, 1000);
}

function counter() {
    currentDate = new Date();
    var delta = (targetDate - currentDate) / 1000;
    day = Math.floor(delta / 86400);
    hour = Math.floor((delta - day * 86400) / 3600);
    min = Math.floor((delta - day * 86400 - hour * 3600) / 60);
    sec = Math.floor(delta - day * 86400 - hour * 3600 - min * 60);

    document.getElementById("seventh").src = 'pics/' + Math.floor(sec/10) + '.png'
    document.getElementById("eighth").src = 'pics/' +  sec % 10 + '.png'

    document.getElementById("fifth").src = 'pics/' + Math.floor(min/10) + '.png'
    document.getElementById("sixth").src = 'pics/' +  min % 10 + '.png'

    document.getElementById("third").src = 'pics/' + Math.floor(hour/10) + '.png'
    document.getElementById("fourth").src = 'pics/' +  hour % 10 + '.png'

    document.getElementById("first").src = 'pics/' + Math.floor(day/10) + '.png'
    document.getElementById("second").src = 'pics/' +  day % 10 + '.png'


    if (!sec && !min && !hour && !day && !month) {
        
    }
    console.log('remain ' + day + ' days ' + hour + ' hours ' + min + ' mins ' + sec + ' secs');
    if (sec > 0) {
        sec -= 1;
    }
    else if (min > 0) {
        sec = 59;
        min -= 1;
    }
    else if (hour > 0) {
        sec = 59;
        min = 59;
        hour -= 1;
    }
    else if (day > 0) {
        sec = 59;
        min = 59;
        hour = 23;
        day -= 1;
    }    
    else {
        console.log('finish');
        clearInterval(interval);
        return
    }
}
