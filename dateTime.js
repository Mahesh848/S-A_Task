months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
getUTCDate();
getUTCTime();
getUNIXTime();
getLocalDate();
getLocalTime();
setInterval(() => {getUTCDate(); getLocalDate();},86400000);
setInterval(() => {getUTCTime(); getLocalTime();},1000);
setInterval(() => {getUNIXTime()},1000);
getCurrentSeconds();
const current_secs_div = document.getElementById('getCurrentSecs');
current_secs_div.addEventListener("click",getCurrentSeconds);
const leftNow_div = document.getElementById("leftNow");
leftNow_div.addEventListener("click",leftNow);
const rightNow_div = document.getElementById("rightNow");
rightNow_div.addEventListener("click",rightNow);
mdc.textField.MDCTextField.attachTo(document.getElementById('input1'));
mdc.textField.MDCTextField.attachTo(document.getElementById('input2'));
mdc.textField.MDCTextField.attachTo(document.getElementById('input3'));
mdc.textField.MDCTextField.attachTo(document.getElementById('input4'));
function getUTCDate() {
    var d1 = Date.now();
    var month = (new Date(d1)).getUTCMonth();
    const UTCDate = (new Date(d1)).getUTCDate()+" "+months[month]+" "+(new Date(d1)).getUTCFullYear();
    document.getElementById("UTCDate").innerHTML = ''+UTCDate;
}
function getUTCTime() {
    var d1 = Date.now();
    const UTCTime = (new Date(d1)).getUTCHours()+":"+(new Date(d1)).getUTCMinutes()+":"+(new Date(d1)).getUTCSeconds();
    document.getElementById("UTCTime").innerHTML = ''+UTCTime;
}
function getUNIXTime() {
    var d1 = Date.now();
    const UNIXTime = parseInt(((new Date(d1)).getTime())/1000);
    document.getElementById("UNIXTime").innerHTML = ''+UNIXTime;
}
function onInput1() {
    var sec = document.getElementById("my-text-field1").value;
    convertSecondsToUTC(sec);
    convertSecondsToLocal(sec);
}
function onInput2() {
    var year = document.getElementById("my-text-field4").value;
    var month = document.getElementById("my-text-field5").value;
    var date = document.getElementById("my-text-field6").value;
    var hours = document.getElementById("my-text-field7").value;
    var minutes = document.getElementById("my-text-field8").value;
    var seconds = document.getElementById("my-text-field9").value;
    var date = new Date(year,month-1,date,hours,minutes,seconds);
    var totalMillis = date.getTime();
    var totalSeconds = parseInt(totalMillis/1000);
    document.getElementById("my-text-field10").value = ''+totalSeconds;
}
function convertSecondsToUTC(seconds) {
    var milliseconds = seconds*1000;
    var localDate = new Date(milliseconds);
    const date = days[localDate.getUTCDay()]+" "+months[localDate.getUTCMonth()]+" "+localDate.getUTCDate()+" "+localDate.getUTCFullYear()+" "+localDate.getUTCHours()+":"+localDate.getUTCMinutes()+":"+localDate.getUTCSeconds();
    document.getElementById("my-text-field2").value = ''+date;
}
function convertSecondsToLocal(seconds) {
    var milliseconds = seconds*1000;
    var localDate = new Date(milliseconds);
    const date = days[localDate.getDay()]+" "+months[localDate.getMonth()]+" "+localDate.getDate()+" "+localDate.getFullYear()+" "+localDate.getHours()+":"+localDate.getMinutes()+":"+localDate.getSeconds();
    document.getElementById("my-text-field3").value = ''+date;
}
function getLocalDate() {
    var d1 = Date.now();
    var month = (new Date(d1)).getMonth();
    const localDate = (new Date(d1)).getDate()+" "+months[month]+" "+(new Date(d1)).getFullYear();
    document.getElementById("LOCALDate").innerHTML = ''+localDate;
}
function getLocalTime() {
    var d1 = Date.now();
    const localTime = (new Date(d1)).getHours()+":"+(new Date(d1)).getMinutes()+":"+(new Date(d1)).getSeconds();
    document.getElementById("LOCALTime").innerHTML = ''+localTime;
}
function getCurrentSeconds() {
    var d1 = new Date();
    var sec = parseInt((d1.getTime())/1000);
    document.getElementById("current_secs").innerHTML = ''+sec;
}
function leftNow() {
    var d1 = new Date();
    var sec = parseInt((d1.getTime())/1000);
    document.getElementById('my-text-field1').value = ''+sec;
    convertSecondsToUTC(sec);
    convertSecondsToLocal(sec);
}
function rightNow() {
    var d1 = new Date();
    document.getElementById("my-text-field4").value = d1.getFullYear();
    document.getElementById("my-text-field5").value = d1.getMonth();
    document.getElementById("my-text-field6").value = d1.getDate();
    document.getElementById("my-text-field7").value = d1.getHours();
    document.getElementById("my-text-field8").value = d1.getMinutes();
    document.getElementById("my-text-field9").value = d1.getSeconds();
    var totalMillis = d1.getTime();
    var totalSeconds = parseInt(totalMillis/1000);
    document.getElementById("my-text-field10").value = ''+totalSeconds;
}