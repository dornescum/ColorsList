const colors = document.querySelectorAll('.colors');
const p = document.querySelectorAll("p");
const btnColor = document.querySelectorAll("button");
const btn1 = document.getElementById("btn-1");
const mediaDiv = document.querySelectorAll("media");
// const blueCol =document.getElementById("blue");



// const init = () => {
//     let querry = window.matchMedia("(min-width:400px)")
//     let small = window.innerWidth;
//     console.log(small)
//
//     let direction = "";
//     small = 400;
//
//     if (querry.matches){
//         mediaDiv.style.backgroundColor ="red";
//         console.log(mediaDiv)
//     } else {
//        mediaDiv.style.backgroundColor = "blue";
//     }
// }
// document.addEventListener("DOMContentLoaded", init)

colors.forEach(function (item) {
    // item.style.color = 'black'
    // console.log(item)
    item.addEventListener("mouseenter", function () {
        // setTimeout(, 1000)
        // if (item.id === item.target){
        // }
        // todo nu stiu dc nu vrea
        if (item.id === "14000") {
            item.classList.add("white")
        } else {
            item.classList.add("black")
        }

    })
    item.addEventListener("mouseleave", function () {
        item.classList.remove("black")
    })
})
// console.log(p)
console.log(`Today is ${new Date().toUTCString()}. Very nice.`);

function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
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

showTime()

// blueObj = {
//     blueColors : [
//         {
//             col:  "#00d1d1"
//         },
//         {
//             col:  "#004d4d"
//         }
//         ],
//     showColor(){
//         const blueList = document.createElement("ul");
//         blueList.className = 'col-lg-3';
//         for (const item in this.blueColors){
//             const blueLink = document.createElement("li");
//             blueLink.className= "pl-1 colors";
//             blueLink.innerHTML = `<li>${item.col}</li>`
//             blueList.append(blueLink);
//         }
//         blueCol.append(blueList);
//     },
// };
// console.log(typeof blueObj);
// blueObj.showColor();