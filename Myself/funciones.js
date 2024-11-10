const aaa = document.getElementById("aaa");

function Brillo() {
    let isRed = true;
    setInterval(() => {
        if (isRed) {
            aaa.style.color = 'rgb(26, 194, 236)';
            aaa.style.textShadow= '0px 0px 6px rgb(26, 194, 236) '
        } else {
            aaa.style.color = 'rgb(208, 200, 245)';
            aaa.style.textShadow= '0px 0px 0px rgb(26, 194, 236) '
        }
        isRed = !isRed;
    }, 1200); // Cambia el color cada 500 ms
}
Brillo()
