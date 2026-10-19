/**
 * Sumber: reference/skills.md
 * Dikelompokkan sesuai file referensi (pengelompokan jadi keputusan display rules).
 * Tanpa progress bar / persentase / label level — sesuai display rules di file referensi
 * dan keputusan pemilik CV (proficiency tidak ditampilkan).
 *
 * Diperbarui (merger ke section Tentang):
 * - `techSkillGroups` berisi item berlogo (logo lokal di public/logos/, tanpa hotlink).
 * - `softSkills` tetap chip teks tanpa logo (logo hanya untuk skill teknis).
 */

export const techSkillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', logo: '/logos/html5.svg' },
      { name: 'CSS', logo: '/logos/css.svg' },
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', logo: '/logos/php.svg' },
      { name: 'Laravel', logo: '/logos/laravel.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Flask', logo: '/logos/flask.svg' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'SQLite', logo: '/logos/sqlite.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
    ],
  },
  {
    title: 'API & Integrasi',
    items: [
      { name: 'Integrasi REST API', logo: '/logos/rest-api.svg' },
      { name: 'Payment Gateway — Midtrans', logo: '/logos/midtrans.svg' },
      { name: 'Layanan Pihak Ketiga — RajaOngkir', logo: '/logos/rajaongkir.webp' },
      { name: 'Binderbyte', logo: '/logos/binderbyte.svg' },
    ],
  },
]

export const softSkills = [
  'Ketelitian dan keakuratan data',
  'Organisasi data',
  'Analisis sistem',
  'Dokumentasi teknis',
  'Perancangan antarmuka',
  'Pemecahan masalah',
  'Komunikasi dan kolaborasi',
]
