/**
 * Sumber: reference/links.md
 * Hanya kontak yang terverifikasi. Tidak ada WhatsApp / CV (file-nya tidak ada,
 * sesuai PRD tombol download CV hanya ditampilkan bila file-nya ada).
 *
 * Diperbarui: kontak kini tampil sebagai tombol logo saja —
 * `label` & `value` dipakai untuk aria-label/tooltip, `logo` untuk ikonnya.
 */

export const links = {
  email: {
    label: 'Email',
    value: 'fanfasa88@gmail.com',
    href: 'mailto:fanfasa88@gmail.com',
    logo: '/logos/mail.svg',
  },
  github: {
    label: 'GitHub',
    value: 'github.com/fathananfasa',
    href: 'https://github.com/fathananfasa',
    logo: '/logos/github.svg',
  },
  linkedin: {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-fathan-anfasa',
    href: 'https://www.linkedin.com/in/muhammad-fathan-anfasa',
    logo: '/logos/linkedin.svg',
  },
}

export const contacts = [links.email, links.github, links.linkedin]
