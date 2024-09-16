
let c = document.getElementById("audio1")
let box2 = document.querySelector(".box2")
let box = document.querySelector(".box")
let box3 = document.querySelector(".box3")
let catalog = document.querySelector(".catelog")
let box33 = document.querySelector(".box33")
let box34 = document.querySelector(".box34")
let d = document.getElementById("2")
let e = document.getElementById("3")
let audio = document.querySelector("audio")
let sn = document.querySelector(".sn")
let foot = document.querySelector(".foot")
let control = document.querySelector(".control")
let adc = document.querySelector(".adc")
let des = document.querySelector("p1")
let temp = document.querySelector("temp")
let img = document.getElementById("song")
let i = document.querySelectorAll("*")
let step = document.querySelector("step")
let des2 = document.querySelector("p2")
let box16 = document.querySelector("box16")
let c2 = document.querySelector("c2")
let play = document.querySelector(".play")

r = true
t = true
let dict = { "Oo Mahi (From 'Dunki') ": ["oo mahi.jpeg", "O Mahi O Mahi_320(PagalWorld.com.sb).mp3"], "Ve Kamleya (From `Rockey Aur Rani Ki Prem Kahanii`)": ["vekamleya.jpeg", "Ve Kamleya_320(PagalWorld.com.sb).mp3"], "Sajni From(`Laapataa Ladies`)": ["sajni.jpeg", "Sajni_320(PagalWorld.com.sb).mp3"], "Satranga (From `ANIMAL`)": ["satranga.jpeg", "Satranga_320(PagalWorld.com.sb).mp3"], }
let row = ["Pritam,Arijit Singh,Shreya Ghoshal...", "Pritam,Arijit Singh,Irshad Kamil...", "Ram Sampath,Arijit Singh,Prashant Pandey", "Arijit Singh,Shreyas Puranik,Siddharth-Garima"]
let key = Object.keys(dict)
let value = Object.values(dict)
let ids = []
let idss = []
let clas = ["b", "c"]
let arr = []

for (let j of i) {
    if (j.id) { idss.push(j.id) }
}
for (j = 2; j < (idss.length); j += 3) {
    ids.push(idss[j])
}

for (let j of i) {
    if (j.className.includes("box15") && j.className.length > 6) {
        arr.push(j.className[6]);
    }
}

function final(g) {
    a = document.querySelector("." + g)
    a.addEventListener("click", () => {
        catalog.style.display = "block"
        box2.style.display = "none"
        box.style.right = "74.1%"
        clas.forEach(element => {
            if (element == g) {
                b = document.querySelector(".c" + g)
                b.style.display = "block"
                c = b.querySelectorAll("*")
                console.log(c)
                c.forEach(ele => {

                    console.log(ele)

                    if (ids.includes(ele.id)) {
                        console.log(ele.id)
                        e.style.display = "flex"
                        let tag1 = document.getElementById("tag" + ele.id)
                        let name1 = document.getElementById("name" + ele.id)
                        tag1.src = value[parseInt(ele.id) - 1][0]
                        name1.innerText = key[parseInt(ele.id) - 1]
                        aud(ele.id)
                    }

                });

            }
            clas.forEach(element => {
                if (element != g) {
                    d = document.querySelector(".c" + element)
                    d.style.display = "none"
                }
            });

        }
        )

    });
}

function aud(s) {

    el = document.getElementById(s)
    el.addEventListener("click", () => {
        control.style.display = "flex"
        foot.style.display = "none"
        audio.src = value[(parseInt(s) - 1)][1]
        audio.autoplay = true
        audio.muted = false
        audio.play()
        des.innerText = key[parseInt(s) - 1]
        des2.innerText = row[parseInt(s) - 1]
        img.src = value[parseInt(s) - 1][0]
    })
}


box33.addEventListener("click", () => {
    catalog.style.display = "none"
    box2.style.display = "block"
}
)

clas.forEach(element => {
    final(element)
});


