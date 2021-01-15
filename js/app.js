const colors = document.querySelectorAll('.colors')
const p = document.querySelectorAll("p")
const btnColor= document.querySelectorAll("button")



colors.forEach(function (item) {
    // item.style.color = 'black'
    // console.log(item)
    item.addEventListener("mouseenter", function () {
        // setTimeout(, 1000)
        // if (item.id === item.target){
        // }
        item.classList.add("black")
    })
    item.addEventListener("mouseleave", function () {
        item.classList.remove("black")
    })
})
console.log(p)

// function showColorId(item){
// }
// console.log(btnColor)
// btnColor.forEach((item)=>{
//     item.addEventListener("click", ()=>{
//         p.forEach((el)=>{
//             el.classList.add("black")
//             console.log(p)
//         })
//     })
//
//     item.removeEventListener("click", (el)=>{
//         p.forEach((el)=>{
//             el.classList.remove("black")
//         })
//     })
//
//     })
// for (const el of p){
//     console.log(el)
//     setTimeout(function (){
//         el.classList.add("red")
//     }, 500)
// }
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if(h === 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();