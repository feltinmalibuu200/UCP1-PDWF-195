/* ---------------------------------------------------
   LOGIKA INTERAKSI MULTIMEDIA
   ---------------------------------------------------
*/

// Fungsi sederhana untuk interaksi multimedia
function initMultimedia() {
    const videoElement = document.querySelector('video');

    if (videoElement) {
        videoElement.onplay = () => console.log("Video sedang diputar...");
    }

    // Fungsi interaktif klik gambar (Galeri)
    const galleryImages = document.querySelectorAll('img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            if(this.alt) {
                alert("Anda sedang melihat foto kegiatan: " + this.alt);
            }
        });
    });
}

// Jalankan fungsi multimedia saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', initMultimedia);