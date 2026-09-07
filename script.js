function calculate() {
    let out = document.getElementById("out");
    //declare g
    let g1 = document.getElementById("g1").value;
    let g2 = document.getElementById("g2").value;
    let g3 = document.getElementById("g3").value;
    let g4 = document.getElementById("g4").value;
    let g5 = document.getElementById("g5").value;
    //declare p
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;
    let p4 = document.getElementById("p4").value;
    let p5 = document.getElementById("p5").value;
    //
    if (p1 == 0) {
        out.innerText = "Please put a percentage in Portion 1"
    } else {
        out.innerText = "Grade: " + (calculateGrade());
    }
}

function calculateGrade() {
    let g = (g1.value * p1.value / 100) + (g2.value * p2.value / 100) + (g3.value * p3.value / 100) + (g4.value * p4.value / 100) + (g5.value * p5.value / 100)
    console.log(g);
    g = Math.round(g);
    if (g == 7) {
        g = "A+"
    } else if (g == 6) {
        g = "A"
    } else if (g == 5) {
        g = "B+"
    } else if (g == 4) {
        g = "B"
    } else if (g == 3) {
        g = "C"
    } else if (g == 2) {
        g = "D"
    } else if (g == 1) {
        g = "F"
    } else {
        g = "error"
    }
    return g;
}