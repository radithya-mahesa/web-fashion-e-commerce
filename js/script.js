const replaceName = function() {
    let name = prompt("May I know Your name?", "User");
    document.getElementById("name").innerHTML = name;
};
window.onload = replaceName;

function showAlert(event) {
    event.preventDefault();
    
    alert("Mending login dulu");
}
document.querySelectorAll('.nav-container ul li a').forEach(function(link) {
    link.addEventListener('click', showAlert);
});


function validateForm() {
    var name = document.getElementsByClassName('name-input')[0].value;
    var pass = document.getElementsByClassName('pass-input')[0].value;
    var conf = document.getElementsByClassName('conf-input')[0].value;
    
    if (name === '' || pass === '' || conf === '') {
        alert("Terdapat masalah, periksa kembali input anda!");
        document.getElementById('warning-message').style.display = 'block';
        return false;
    }
    
    alert("Data anda sudah berhasil masuk!");
    console.log('Nama:', name);
    console.log('Pass:', pass);
    console.log('Pilihan:', conf);
    
    window.location.href = "page/index.html";
    return false;
}

let indexSlide = 1;
showSlide(indexSlide);

function nextSlide(n) {
    indexSlide += n;
    showSlide(indexSlide);
    console.log('indexSlide' + indexSlide);
    console.log('nilai n =' + n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('left-content-img');
    if (n > listImage.length) indexSlide = 1;
    if (n < 1) indexSlide = listImage.length;

    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = 'none';
    }

    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 5000);