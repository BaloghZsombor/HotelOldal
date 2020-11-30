let szobaar = 3500;

function frissitsdAszemelyeket(){
    let szemelyek = document.getElementById("szemelyek");
    let szemelyek_szama = document.getElementById("szam").value;
    let napok_szama = document.getElementById("napok").value;
    szemelyek.innerHTML = szobaar * szemelyek_szama * napok_szama + " Ft";
}