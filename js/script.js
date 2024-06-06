// Ganti nama
function fungsigantinama () {
    let name = prompt('Siapakah nama anda?', '');
    document.getElementById("name").innerHTML = name;
}

document.getElementById('gantinama').addEventListener('click', function() {fungsigantinama() })

// fungsi banner slide.
var slideIndex = 1;
showDivs(slideIndex)

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n) {
    const imglist = document.getElementsByClassName('gambarbanner');

    if (n > imglist.length)  slideIndex = 1;
    if (n < 1) slideIndex = imglist.length;

    for (let i = 0; i < imglist.length; i++){
        imglist[i].style.display = 'none';
    }

    imglist[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
plusDivs(1)
},30000)


// Fungsi untuk membuat pesan error
function createError(element, message) {
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = message;
    element.after(error);
}

// Fungsi untuk menangani submit form
function submitform(event) {
    event.preventDefault();
    
    let isValid = true;

    const formData = {
        nama: document.getElementById('nama').value,
        tgllahir: document.getElementById('tgllahir').value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        pesan: document.getElementById('pesan').value
    };

    // Hapus semua pesan error sebelumnya
    document.querySelectorAll('.error').forEach(error => error.remove());

    // Validasi data form
    if (!formData.nama) {
        isValid = false;
        createError(document.getElementById('nama'), 'Nama tidak boleh kosong');
    }
    if (!formData.tgllahir) {
        isValid = false;
        createError(document.getElementById('tgllahir'), 'Tanggal lahir tidak boleh kosong');
    }
    if (!formData.gender) {
        isValid = false;
        createError(document.getElementById('lakilaki').parentNode, 'Gender tidak boleh kosong');
    }
    if (!formData.pesan) {
        isValid = false;
        createError(document.getElementById('pesan'), 'Pesan tidak boleh kosong');
    }

    // Tampilkan hasil jika valid
    if (isValid) {
        document.getElementById('pesanhasilform').innerHTML = `
            <p>Terimakasih telah menghubungi kami dengan mengisi form! 
            Berikut adalah jawaban Anda pada form : </p>
        `;

        document.getElementById('hasilform').innerHTML = `
            <p>Nama : ${formData.nama}</p>
            <p>Tanggal Lahir : ${formData.tgllahir}</p>
            <p>Gender : ${formData.gender}</p>
            <p>Pesan : ${formData.pesan}</p>
        `;
    }
}

// Tambahkan event listener pada form
document.getElementById('form').addEventListener('submit', submitform);