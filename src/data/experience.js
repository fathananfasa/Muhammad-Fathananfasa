/**
 * Sumber: reference/experience.md
 * Urutan: terbaru berdasarkan tanggal mulai di atas (Web Developer Intern, Mar 2025),
 * lalu Personal Assistant yang masih berjalan (keputusan pemilik CV).
 *
 * Gambar di-import langsung dari folder assets/ (di luar public/) agar Vite
 * memprosesnya saat build. Konteks:
 * - assets/experience/*        → dokumentasi pekerjaan di Andrastudio
 * - assets/projects/portal-berita → dokumentasi magang di Winnicode
 * width/height = dimensi asli file, supaya browser menghitung rasio tanpa layout shift.
 */

import portalBeritaFigma from '../../assets/projects/portal-berita/figma.webp'
import portalBeritaBerita from '../../assets/projects/portal-berita/berita.webp'
import portalBeritaBerita2 from '../../assets/projects/portal-berita/berita2.webp'
import dataEntryVilla from '../../assets/experience/data-entry/villa.webp'
import dataEntryRenang from '../../assets/experience/data-entry/renang.webp'
import dataEntryMobil from '../../assets/experience/data-entry/mobil.webp'
import wordpressPool from '../../assets/experience/wordpress/pool.webp'
import wordpressLinea from '../../assets/experience/wordpress/linea.webp'
import editingQuiz from '../../assets/experience/editing/quiz.webp'
import editingArsen from '../../assets/experience/editing/arsen.webp'

export const experiences = [
  {
    position: 'Web Developer Intern',
    company: 'PT. Winnicode Garuda Teknologi',
    period: 'Mar 2025 – Jul 2025',
    arrangementId: 'Work from home',
    descriptionId:
      'Mendukung kegiatan pengembangan website melalui analisis sistem, perancangan antarmuka, dan pengembangan fitur menggunakan Laravel, PHP, dan MySQL. Turut membantu dokumentasi serta perancangan antarmuka menggunakan Figma dan Canva.',
    responsibilitiesId: [
      'Menganalisis kebutuhan sistem.',
      'Merancang antarmuka pengguna dan alur navigasi.',
      'Mengembangkan halaman artikel, kategori, dan admin menggunakan Laravel dan PHP.',
      'Bekerja dengan MySQL untuk data aplikasi.',
      'Menyusun dokumentasi teknis.',
    ],
    documentation: [
      {
        label: 'Proyek portal berita',
        images: [
          {
            src: portalBeritaFigma,
            alt: 'Dokumentasi magang Winnicode — rancangan antarmuka portal berita',
            width: 997,
            height: 807,
          },
          {
            src: portalBeritaBerita,
            alt: 'Dokumentasi magang Winnicode — tampilan halaman portal berita',
            width: 827,
            height: 283,
          },
          {
            src: portalBeritaBerita2,
            alt: 'Dokumentasi magang Winnicode — tampilan lain halaman portal berita',
            width: 827,
            height: 360,
          },
        ],
      },
    ],
  },
  {
    position: 'Personal Assistant',
    company: 'Andrastudio',
    period: 'Jan 2023 – sekarang',
    arrangementId: null,
    descriptionId:
      'Mendukung operasional klien melalui pengelolaan data yang akurat, pembuatan website sesuai kebutuhan klien, serta produksi konten video mulai dari pengambilan gambar hingga proses penyuntingan.',
    responsibilitiesId: [
      'Melakukan input dan pengelolaan data secara akurat dan tepat waktu sesuai kebutuhan klien.',
      'Menjaga konsistensi dan format data sesuai standar yang ditetapkan.',
      'Membangun antarmuka website berdasarkan kebutuhan klien.',
      'Mendukung produksi konten video, mulai dari pengambilan gambar hingga penyuntingan pascaproduksi.',
    ],
    documentation: [
      {
        label: 'Pengelolaan data',
        images: [
          {
            src: dataEntryVilla,
            alt: 'Dokumentasi Andrastudio — hasil pengelolaan data',
            width: 1600,
            height: 681,
          },
          {
            src: dataEntryRenang,
            alt: 'Dokumentasi Andrastudio — hasil pengelolaan data',
            width: 1407,
            height: 751,
          },
          {
            src: dataEntryMobil,
            alt: 'Dokumentasi Andrastudio — hasil pengelolaan data',
            width: 1332,
            height: 732,
          },
        ],
      },
      {
        label: 'Pembuatan website',
        images: [
          {
            src: wordpressPool,
            alt: 'Dokumentasi Andrastudio — website yang dibuat untuk klien',
            width: 1600,
            height: 826,
          },
          {
            src: wordpressLinea,
            alt: 'Dokumentasi Andrastudio — website yang dibuat untuk klien',
            width: 1600,
            height: 753,
          },
        ],
      },
      {
        label: 'Produksi konten video',
        images: [
          {
            src: editingQuiz,
            alt: 'Dokumentasi Andrastudio — hasil penyuntingan konten video',
            width: 720,
            height: 1600,
          },
          {
            src: editingArsen,
            alt: 'Dokumentasi Andrastudio — hasil penyuntingan konten video',
            width: 720,
            height: 1600,
          },
        ],
      },
    ],
  },
]
