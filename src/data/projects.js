/**
 * Sumber: reference/projects/bekas-dicintai.md dan reference/projects/pergudangan.md
 *
 * Urutan: Bekas Dicintai lebih dulu sebagai proyek utama (sesuai PRD bagian 6).
 * Tidak ada link demo/repo sengaja ditambahkan — file referensi melarang link palsu,
 * dan repository/demo yang asli belum tersedia.
 *
 * Gambar di-import langsung dari folder assets/ di root proyek (di luar public/).
 * width/height = dimensi asli file, supaya browser menghitung rasio tanpa layout shift.
 */

import bekasDicintaiBerandaBuyer from '../../assets/projects/bekas-dicintai/berandabuyer.webp'
import bekasDicintaiDashboard from '../../assets/projects/bekas-dicintai/dashboard.webp'
import bekasDicintaiProduk from '../../assets/projects/bekas-dicintai/produk.webp'
import pergudanganDaftar from '../../assets/projects/pergudangan/daftar.webp'
import pergudanganDashboard from '../../assets/projects/pergudangan/dashboard.webp'
import pergudanganLaporan from '../../assets/projects/pergudangan/laporan.webp'

export const projects = [
  {
    slug: 'bekas-dicintai',
    name: 'Bekas Dicintai',
    type: 'E-Commerce Berbasis Web',
    context: 'Proyek Skripsi',
    featured: true,
    descriptionId:
      'Bekas Dicintai merupakan aplikasi e-commerce berbasis website yang dirancang untuk memfasilitasi jual beli barang preloved. Aplikasi ini menyediakan fitur tawar menawar di mana pembeli dapat menawar harga barang dengan bantuan AI sebagai negosiator.',
    featuresId: [
      'Autentikasi pengguna dengan hak akses admin dan pembeli',
      'Katalog produk dan penelusuran kategori',
      'Pencarian produk berbasis Content-Based Filtering',
      'Keranjang belanja',
      'Negosiasi harga antara pembeli dan penjual',
      'Alur transaksi dan pembayaran',
      'Integrasi pembayaran Midtrans (sandbox)',
      'Integrasi ongkir RajaOngkir Komerce',
      'Manajemen produk untuk admin',
    ],
    // Detail sistem pencarian/rekomendasi (bagian yang di-highlight sesuai file referensi)
    searchDetailId: [
      'Metode Content-Based Filtering (CBF) dengan TF-IDF dan cosine similarity.',
      'Pemrosesan teks produk: lowercase, normalisasi, stopword removal, dan stemming menggunakan Sastrawi.',
      'Relevansi pencarian menggunakan nama produk, kategori, dan deskripsi dengan bobot berbeda.',
      'Layanan pencarian dibangun dengan Python (Flask) dan dipanggil dari aplikasi Laravel melalui API.',
    ],
    techStack: [
      'PHP',
      'Laravel',
      'MySQL',
      'Tailwind CSS',
      'Python',
      'Flask',
      'Sastrawi',
      'Midtrans Sandbox',
      'RajaOngkir Komerce',
    ],
    contributionId: [
      'Analisis kebutuhan dan desain sistem',
      'Desain dan implementasi database',
      'Pengembangan backend dan frontend',
      'Implementasi dan integrasi algoritma pencarian',
      'Testing dan deployment',
      'Dokumentasi dan evaluasi',
    ],
    screenshots: [
      {
        src: bekasDicintaiBerandaBuyer,
        alt: 'Tampilan Proyek Skripsi Bekas Dicintai — beranda pembeli',
        width: 1763,
        height: 1285,
      },
      {
        src: bekasDicintaiDashboard,
        alt: 'Tampilan Proyek Skripsi Bekas Dicintai — dashboard admin',
        width: 1763,
        height: 1957,
      },
      {
        src: bekasDicintaiProduk,
        alt: 'Tampilan Proyek Skripsi Bekas Dicintai — halaman produk',
        width: 1763,
        height: 1602,
      },
    ],
  },
  {
    slug: 'product-inventory',
    name: 'Product Inventory',
    type: 'Aplikasi Berbasis Web',
    context: 'Proyek Kuliah',
    featured: false,
    descriptionId:
      'Sistem pergudangan dengan dua peran pengguna, admin dan pemilik, yang dibuat untuk menyelesaikan persoalan pencatatan alur barang masuk dan keluar.',
    featuresId: [
      'Autentikasi pengguna dengan hak akses admin dan pemilik',
      'Manajemen produk untuk admin',
      'Dashboard dengan grafik transaksi',
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS'],
    contributionId: [
      'Analisis kebutuhan dan desain sistem',
      'Desain dan implementasi database',
      'Pengembangan backend dan frontend',
    ],
    screenshots: [
      {
        src: pergudanganDashboard,
        alt: 'Tampilan Proyek Kuliah Product Inventory — dashboard grafik transaksi',
        width: 1600,
        height: 832,
      },
      {
        src: pergudanganDaftar,
        alt: 'Tampilan Proyek Kuliah Product Inventory — daftar produk',
        width: 1600,
        height: 838,
      },
      {
        src: pergudanganLaporan,
        alt: 'Tampilan Proyek Kuliah Product Inventory — laporan transaksi',
        width: 1600,
        height: 832,
      },
    ],
  },
]
