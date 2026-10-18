# PRD: Website Portofolio Karyo Suryadi

> Dokumen ini adalah **sumber kebenaran utama** buat agent. Baca SELURUH dokumen ini sebelum nulis kode apa pun. Kalau ada konflik antara PRD ini dan asumsi lo sendiri, PRD ini yang menang.

---

## 1. Tujuan

Website portofolio pribadi satu halaman (single page) yang dipakai buat **melamar kerja** sebagai **Frontend / Web Developer** (juga terbuka untuk posisi admin), prioritas lokasi **Jakarta**.

Yang harus terjadi: recruiter atau HRD buka link ini, dalam **30 detik** paham (1) siapa orangnya, (2) bisa apa, (3) udah bikin apa, (4) gimana cara hubunginya.

**Bukan** tujuan: blog, e-commerce, CMS, dashboard, atau fitur login.

---

## 2. Aturan Main Agent (WAJIB)

1. **Jangan ngarang konten.** Semua teks tentang profil, pengalaman, skill, proyek, dan link HARUS diambil dari folder `reference/`. Kalau datanya nggak ada di sana, tulis placeholder `[ISI: ...]` dan kasih tau gw. Jangan bikin testimoni, angka, nama perusahaan, atau tanggal palsu.
2. **`reference/` itu read-only.** Jangan edit, hapus, atau pindahin file di dalamnya.
3. **Jangan nambah dependency di luar yang diizinkan** (lihat bagian 4). Mau nambah library? Tanya dulu.
4. **Jangan ubah struktur folder** yang udah ada. Kalau butuh folder baru di dalam `src/`, boleh, tapi sebutin di ringkasan.
5. **Kerjain per tahap** (bagian 9). Selesaiin satu tahap, kasih ringkasan singkat, tunggu konfirmasi sebelum lanjut.
6. **Kasih file lengkap**, bukan potongan. Setiap file yang lo ubah harus ditulis utuh, siap pakai.
7. **Jangan refactor atau "rapihin" hal yang nggak diminta.**
8. Kalau ada yang ambigu, **tanya**, jangan nebak.

---

## 3. Sumber Konten

| File | Isi | Dipakai di section |
|---|---|---|
| `reference/profile.md` | Nama, bio, tagline, posisi yang dicari | Hero, About |
| `reference/experience.md` | Pengalaman kerja/magang/freelance | Experience |
| `reference/skills.md` | Daftar skill dan tools | Skills |
| `reference/projects/bekas-dicintai.md` | Detail proyek skripsi | Projects |
| `reference/projects/pergudangan.md` | Detail proyek pergudangan | Projects |
| `reference/links.md` | Email, WhatsApp, GitHub, LinkedIn, dll. | Contact, Footer |

Gambar ada di folder `assets/`:

- `assets/projects/bekas-dicintai/`, `assets/projects/pergudangan/` → screenshot proyek
- `assets/experience/data-entry/`, `assets/experience/editing/`, `assets/experience/wordpress/` → dokumentasi pengalaman

Kalau sebuah folder gambar kosong, tampilkan placeholder netral (kotak abu tipis dengan label), jangan pakai stock image dari internet.

---

## 4. Tech Stack (Fixed)

- **React** (Vite, JavaScript, `.jsx`)
- **Tailwind CSS v4** (via plugin `@tailwindcss/vite`, `@import "tailwindcss";` di `src/index.css`). **Jangan** bikin `tailwind.config.js` atau `postcss.config.js`; kustomisasi lewat `@theme` di CSS.
- **Font**: Google Fonts, maksimal 2 family.
- **Dependency tambahan yang diizinkan**: `lucide-react` (icon). Selain itu **tanya dulu**.
- **Tidak boleh**: UI kit/komponen jadi (MUI, Chakra, shadcn, DaisyUI, dll.), library animasi berat, template Tailwind siap pakai, CSS-in-JS.
- **Routing**: nggak perlu. Single page dengan anchor scroll (`#about`, `#projects`, dst.).
- **Backend**: nggak ada. Form kontak diganti tombol/link (`mailto:` dan WhatsApp), jangan bikin form yang nembak API.

---

## 5. Arah Desain

**Vibe: minimalist & clean.** Banyak whitespace, tipografi jadi pemeran utama, dekorasi seminimal mungkin.

### Prinsip

- Hierarki lewat **ukuran dan berat font**, bukan lewat kotak, bayangan, dan gradient.
- Spacing lega dan konsisten (pakai skala Tailwind, jangan angka acak).
- Satu warna aksen aja, dipakai hemat (link, hover, penanda penting).
- Layout rapi, grid sederhana, lebar konten dibatasi (`max-w-3xl` sampai `max-w-5xl`).

### Palet

- Background: putih atau off-white hangat
- Teks: hampir hitam (bukan `#000` murni), plus satu abu buat teks sekunder
- Aksen: **satu** warna. Pilih satu yang kalem dan tulis sebagai variabel di `@theme`. Jangan pakai warna lain.
- Siapkan dark mode **hanya kalau** tahap inti udah kelar dan gw minta.

### Tipografi

- Pasangan font: satu untuk heading, satu untuk body (atau satu family aja dengan beberapa weight).
- Heading besar dan percaya diri, body nyaman dibaca (16-18px, line-height lega).
- Hindari font yang kelewat umum kalau ada alternatif yang lebih berkarakter, tapi tetep terbaca.

### DILARANG (biar nggak keliatan "AI slop")

- Gradient ungu-biru, gradient teks, glassmorphism, neon glow
- Emoji sebagai icon atau dekorasi heading
- Kartu dengan border-radius gede + shadow tebal di mana-mana
- Hero berisi "Hi, I'm ... 👋" dengan blob/orb abstrak di belakangnya
- Copy generik: "passionate developer", "crafting digital experiences", "turning ideas into reality", "cutting-edge", dan sejenisnya
- Animasi berlebihan (parallax, typing effect, partikel, cursor custom)
- Section "Testimonials", counter statistik, atau badge yang datanya nggak ada di `reference/`
- Stock photo atau ilustrasi dari internet

### Boleh

- Transisi halus (hover, fade-in ringan saat scroll). Hormati `prefers-reduced-motion`.
- Garis tipis (border 1px) sebagai pemisah.
- Detail kecil yang rapi: nomor section, label kecil huruf kapital, dst.

---

## 6. Struktur Halaman

Urutan section (single page):

1. **Navbar**: nama/logo teks di kiri, link anchor ke section di kanan. Di mobile jadi menu sederhana. Sticky, tipis.
2. **Hero**: nama, satu kalimat tagline, posisi yang dicari, dua tombol: "Lihat Proyek" (anchor) dan "Hubungi" (anchor/kontak). Tagline diambil dari `profile.md`.
3. **About**: bio singkat (maks. 2 paragraf) dari `profile.md`.
4. **Projects**: kartu proyek dari `reference/projects/*.md`. Tiap proyek: judul, deskripsi singkat, tech stack, screenshot (kalau ada), link (kalau ada di `links.md` atau file proyeknya). Bekas Dicintai tampil duluan sebagai proyek utama.
5. **Experience**: timeline vertikal sederhana dari `experience.md` (terbaru di atas). Tampilkan dokumentasi gambar dari `assets/experience/` hanya kalau ada dan relevan.
6. **Skills**: dikelompokkan (misal: Frontend, Backend, Tools, Lainnya) sesuai isi `skills.md`. Teks biasa atau chip tipis. **Jangan** pakai progress bar atau persentase skill.
7. **Contact**: ajakan singkat + link email, WhatsApp, GitHub, LinkedIn, dll. dari `links.md`. Tombol download CV hanya kalau file CV-nya ada.
8. **Footer**: nama + tahun, satu baris.

Kalau section tertentu nggak ada datanya di `reference/`, **jangan dihapus diam-diam**: kasih tau gw.

---

## 7. Arsitektur Kode

```
src/
├── main.jsx
├── App.jsx
├── index.css            # @import "tailwindcss"; + @theme (warna, font)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── data/
    ├── profile.js
    ├── projects.js
    ├── experience.js
    ├── skills.js
    └── links.js
```

Aturan:

- **Konten dipisah dari tampilan.** Teks dan data ditaruh di `src/data/*.js` (hasil terjemahan dari `reference/*.md`), komponen cuma merender. Jadi gw bisa edit konten tanpa nyentuh JSX.
- Satu komponen = satu file, fungsional, pakai hooks seperlunya.
- Tailwind utility langsung di JSX. Nggak perlu file CSS per komponen.
- Nama variabel dan komponen pakai bahasa Inggris, **isi teks website** pakai bahasa yang ditentukan di bagian 8.
- Tambahin komentar singkat hanya di bagian yang logikanya nggak jelas.

---

## 8. Konten & Bahasa

- **Bahasa website: Bahasa Indonesia** (target recruiter lokal, Jakarta). Istilah teknis tetap boleh bahasa Inggris. Struktur data disiapkan supaya nanti gampang ditambah versi Inggris, tapi **jangan bikin toggle bahasa sekarang**.
- Nada tulisan: lugas, jujur, tanpa lebay. Kalimat pendek. Fokus ke apa yang dikerjain dan hasilnya.
- Jangan melebih-lebihkan. Kalau datanya cuma "magang", tulis magang.

---

## 9. Tahapan Kerja

Selesaiin berurutan. Berhenti di akhir tiap tahap dan minta konfirmasi.

**Tahap 1: Fondasi**
- Cek Tailwind v4 udah jalan, bersihin boilerplate Vite (logo, counter, CSS bawaan).
- Set `@theme` (warna, font), global styles, struktur folder `components/` dan `data/`.
- Output: halaman kosong dengan font dan warna yang udah benar.

**Tahap 2: Data**
- Baca semua `reference/*.md`, terjemahkan jadi `src/data/*.js`.
- Laporkan data yang kurang atau ambigu **sebelum** lanjut.

**Tahap 3: Layout inti**
- Navbar, Hero, About, Footer.

**Tahap 4: Konten utama**
- Projects (+ ProjectCard), Experience, Skills, Contact.

**Tahap 5: Polish**
- Responsif (mobile dulu, cek 375px, 768px, 1280px), smooth scroll, hover states, fokus keyboard, `alt` di semua gambar, `<title>` dan meta description di `index.html`, favicon sederhana.

**Tahap 6: Cek akhir**
- `npm run build` harus sukses tanpa error. `npm run lint` harus bersih.
- Cek semua link berfungsi dan nggak ada placeholder `[ISI: ...]` tersisa tanpa sepengetahuan gw.

---

## 10. Kriteria Selesai (Definition of Done)

- [ ] Semua section di bagian 6 tampil dengan konten asli dari `reference/`
- [ ] Nggak ada teks atau data karangan
- [ ] Tampilan konsisten dengan arah desain di bagian 5, tanpa satu pun elemen dari daftar DILARANG
- [ ] Responsif di mobile, tablet, desktop
- [ ] Tailwind v4 dipakai sesuai aturan (tanpa `tailwind.config.js`)
- [ ] Nggak ada dependency di luar yang diizinkan
- [ ] `npm run build` dan `npm run lint` sukses
- [ ] Skor Lighthouse (Performance, Accessibility, Best Practices, SEO) target 90+
- [ ] Gambar dioptimasi (ukuran wajar, `loading="lazy"` kecuali di hero)

---

## 11. Di Luar Scope (Jangan Dikerjain)

Blog, CMS, login/auth, database, form yang kirim ke backend, analytics, toggle bahasa, dark mode (kecuali diminta), animasi kompleks, deployment (gw urus sendiri nanti).

---

## 12. Format Respons Agent Tiap Selesai Satu Tahap

1. Apa yang udah dikerjain (maks. 5 baris)
2. File yang dibuat atau diubah (daftar path)
3. Asumsi yang diambil
4. Data/konten yang kurang atau butuh keputusan dari gw
5. Konfirmasi: "Lanjut ke tahap berikutnya?"
