// Santiago

function mostrarHoraSantiago() {
    let d = new Date()
    document.getElementById("horaSantiago").innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

setInterval(mostrarHoraSantiago, 1000)

// París

function mostrarHoraParis() {
    let d = new Date()

    document.getElementById("horaParis").innerHTML = `${d.getHours() - 18}: ${d.getMinutes()}: ${d.getSeconds()}`;
} 

function horaParis() {
    setInterval(mostrarHoraParis, 1000)
}

setTimeout(horaParis, 4000)

// Londres

function mostrarHoraLondres() {
    let d = new Date()
    
    document.getElementById("horaLondres").innerHTML = `${d.getHours() -19}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

function horaLondres() {
    setInterval(mostrarHoraLondres, 1000)
}

setTimeout(horaLondres, 4000*2)

// Nueva York

function mostrarHoraNuevaYork() {
    let d = new Date()
    document.getElementById("horaNuevaYork").innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

function horaNuevaYork() {
    setInterval(mostrarHoraNuevaYork, 1000)
}

setTimeout(horaNuevaYork, 4000*3)

// San PetersBurgo

function mostrarHoraSanPetersburgo() {
    let d = new Date()
    document.getElementById("horaRusia").innerHTML = `${d.getHours() -17}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

function horaSanPetersburgo() {
    setInterval(mostrarHoraSanPetersburgo, 1000)
}

setTimeout(horaSanPetersburgo, 4000*4)

// Beijing

function mostrarHoraBeijing() {
    let d = new Date()
    document.getElementById("horaBeijing").innerHTML = `${d.getHours() -24}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

function horaBeijing() {
    setInterval(mostrarHoraBeijing, 1000)
}

setTimeout(horaBeijing, 4000*5)

// Seúl

function mostrarHoraSeul() {
    let d = new Date()
    document.getElementById("horaSeul").innerHTML = `${d.getHours() -23}: ${d.getMinutes()}: ${d.getSeconds()}`;
}

function horaSeul() {
    setInterval(mostrarHoraSeul, 1000)
}

setTimeout(horaSeul, 4000*6)