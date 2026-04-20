/* ---------------------------------------------------
   LOGIKA MANAJEMEN DATA ANGGOTA (FORM)
   ---------------------------------------------------
*/

// 1. Inisialisasi Array untuk menampung data sementara
let daftarAnggota = [];

// 2. Mengambil referensi elemen DOM
const memberForm = document.getElementById('memberForm');
const memberTableBody = document.getElementById('memberTableBody');

// 3. Fungsi untuk menampilkan data dari Array ke Tabel
function tampilkanData() {
    // Cek apakah elemen tabel ada di halaman ini (menghindari error di halaman lain)
    if (!memberTableBody) return;

    // Bersihkan isi tabel sebelum diisi ulang
    memberTableBody.innerHTML = '';

    // Loop melalui array daftarAnggota
    daftarAnggota.forEach((anggota, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${anggota.nama}</td>
                <td>${anggota.email}</td>
                <td>${anggota.minat}</td>
            </tr>
        `;
        memberTableBody.innerHTML += row;
    });
}

// 4. Event Listener untuk Handle Submit Form
if (memberForm) {
    memberForm.addEventListener('submit', function(event) {
        // Mencegah halaman refresh saat submit
        event.preventDefault();

        // Mengambil nilai dari input
        const namaInput = document.getElementById('nama').value;
        const emailInput = document.getElementById('email').value;
        const minatInput = document.getElementById('minat').value;

        // Membuat objek data baru
        const dataBaru = {
            nama: namaInput,
            email: emailInput,
            minat: minatInput
        };

        // Memasukkan objek ke dalam Array (Ketentuan Tugas)
        daftarAnggota.push(dataBaru);

        // Memberikan feedback visual sederhana
        alert(`Terima kasih ${namaInput}, data kamu telah tersimpan di Array!`);

        // Update tampilan tabel dan reset form
        tampilkanData();
        memberForm.reset();
    });
}

/* ---------------------------------------------------
   LOGIKA INTERAKSI MULTIMEDIA
   ---------------------------------------------------
*/

// Fungsi sederhana untuk interaksi multimedia (Contoh: Alert saat video dimainkan)
function initMultimedia() {
    const videoElement = document.querySelector('video');
    const audioDescription = document.getElementById('audioStatus');

    if (videoElement) {
        videoElement.onplay = () => console.log("Video sedang diputar...");
    }

    // Fungsi interaktif klik gambar (Galeri)
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            alert("Anda sedang melihat foto kegiatan: " + this.alt);
        });
    });
}

// Jalankan fungsi multimedia saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', initMultimedia);