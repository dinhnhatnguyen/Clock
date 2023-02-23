const mylabel = document.getElementById("my_label");
update();
setInterval(update,1000);
function update()
{
    let date = new Date();
    mylabel.innerHTML= fomatTime(date);
    
    function fomatTime(date)
    {
        let hours = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        
        let AmorPm = hours >= 12 ? "pm": "am";

        hours = (hours%12) || 12;

        hours = fomatZeroes(hours);
        minute = fomatZeroes(minute);
        seconds = fomatZeroes(seconds);

        return `${hours}:${minute}:${seconds} ${AmorPm}`;
    }

}

function fomatZeroes(time)
{
    time = time.toString();
    return time.length < 2 ? "0"+time :time;
}