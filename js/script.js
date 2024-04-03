
//ini prompt buat ubah nama dan judul
const replaceName = function() {
    let name = prompt("May I know Your name?", "User");
    document.getElementById("name").innerHTML = name;
};
window.onload = replaceName;

//ini peringatan yang akan berfungsi ketika user mengklik link anchor di landing page
function showAlert(event) {
    event.preventDefault();
    
    alert("Mending login dulu");
}
document.querySelectorAll('.nav-container ul li a').forEach(function(link) {
    link.addEventListener('click', showAlert);
});


// validasi jika tidak ada field yang kosong 
function validateForm() {
    var name = document.getElementsByClassName('name-input')[0].value;
    var pass = document.getElementsByClassName('pass-input')[0].value;
    var conf = document.getElementsByClassName('conf-input')[0].value;
    
    // jika field kosong, pengguna diberikan sebuah peringatan
    if (name === '' || pass === '' || conf === '') {
        alert("Terdapat masalah, periksa kembali input anda!");
        document.getElementById('warning-message').style.display = 'block';
        return false;
    }
    
    alert("Data anda sudah berhasil masuk!");
    console.log('Nama:', name);
    console.log('Pass:', pass);
    console.log('Pilihan:', conf);
    

    // jika berhasil masuk, pengguna diarahkan ke main page
    window.location.href = "page/index.html";
    return false;
}

// membuat sebuah fungsi pada tombol next slide 
let indexSlide = 1;
showSlide(indexSlide);

function nextSlide(n) {
    indexSlide += n;
    showSlide(indexSlide);

    // menampilkan console log jika perulangan telah berjalan
    console.log('indexSlide' + indexSlide);
    console.log('nilai n =' + n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('left-content-img');
    if (n > listImage.length) indexSlide = 1;
    if (n < 1) indexSlide = listImage.length;

    // menyembunyikan beberapa foto dan menampilakn satu di banner
    //membuat sebuah perulangan
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = 'none';
    }

    listImage[indexSlide - 1].style.display = 'block';
}
// mengatur waktu bergantinya banner
setInterval(() => nextSlide(1), 5000);