/* =============================================
   LearnIT — app.js
   ============================================= */

/*
 * ASSETS:
 * Taruh semua gambar di folder  assets/  sejajar dengan index.html
 *
 * assets/
 *   tutorials/
 *     linux.png, python.png, html.png, javascript.png,
 *     sql.png, git.png, php.png, docker.png, react.png
 *   kontributor/
 *     alliot.jpg, marcus.jpg, max.jpg, snowden.jpg,
 *     aiden.jpg, stephan.jpg, darlene.jpg, clay.jpg, dst...
 *
 * Jika file belum ada, icon fallback (emoji) akan otomatis tampil.
 */

/* ===== DATA ===== */
const popularTutorials = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', name: 'Linux', desc: 'Basic Command hingga bash scripting', badges: ['green','popular'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', name: 'Python', desc: 'Pengenalan dan syntax dasar Python', badges: ['green','popular'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', name: 'HTML & CSS', desc: 'Dasar HTML & CSS sampai membuat web', badges: ['green','popular'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript', desc: 'Membuat web lebih hidup dan intraktif', badges: ['yellow','popular'] },
];
const otherTutorials = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg', name: 'SQL', desc: 'Membuat dan Manajemen Database', badges: ['yellow'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', name: 'Git', desc: 'Version Control System dengan Git', badges: ['yellow'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', name: 'PHP', desc: 'Pengenalan dan syntax dasar PHP', badges: ['green'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', name: 'Docker', desc: 'Membuat kontainer menggunakan Docker', badges: ['yellow'] },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', name: 'React', desc: 'Framework JavaScript modern populer', badges: ['red'] },
];

const contributors = [
  { name: 'Alliot',         role: 'Founder',         asset: 'assets/kontributor/alliot.jpg' },
  { name: 'Marcus Holloway',role: 'Developer',        asset: 'assets/kontributor/marcus.jpg' },
  { name: 'MRX',            role: 'Security Expert',  asset: 'assets/kontributor/mrx.jpg' },
  { name: 'Edward Snowden', role: 'Privacy Advocate', asset: 'assets/kontributor/snowden.jpg' },
  { name: 'Aiden Pearce',   role: 'Hacker',           asset: 'assets/kontributor/aiden.jpg' },
  { name: 'Stephan',        role: 'DevOps',           asset: 'assets/kontributor/stephan.jpg' },
  { name: 'Darlene',        role: 'Exploit Dev',      asset: 'assets/kontributor/darlene.jpg' },
  { name: 'CLAY',           role: 'Researcher',       asset: 'assets/kontributor/clay.jpg' },
  { name: 'Zero Cool',      role: 'Pentester',        asset: 'assets/kontributor/zerocool.jpg' },
  { name: 'Acid Burn',      role: 'Web Dev',          asset: 'assets/kontributor/acidburn.jpg' },
  { name: 'Phantom',        role: 'OSINT',            asset: 'assets/kontributor/Phantom.jpg' },
];

const badgeLabels = { green: 'Pemula', yellow: 'Menengah', red: 'Lanjutan', popular: 'Populer' };

/* ===== TUTORIAL CONTENT ===== */
const tutorialData = {
  'Linux': {
    sections: [
      {
        title: 'Pengenalan',
        items: [
          { label: 'Apa itu Linux?', content: genContent('Apa itu Linux?', 'Linux adalah sistem operasi open-source berbasis kernel Unix yang sangat populer di kalangan developer, sysadmin, dan pengguna teknis. Linux digunakan secara luas di server, superkomputer, embedded systems, dan Android.', '$ uname -a\n# Output: Linux ubuntu 5.15.0 #1 SMP x86_64 GNU/Linux\n\n$ lsb_release -a\n# Cek detail distribusi Ubuntu') },
          { label: 'Struktur Direktori', content: genContent('Struktur Direktori Linux', 'Linux menggunakan struktur direktori hirarki berbentuk pohon. Direktori root (/) adalah puncak dari semua direktori lainnya.', '$ ls /\nbin  boot  dev  etc  home  lib  media  mnt  opt\nproc  root  run  sbin  srv  sys  tmp  usr  var') },
          { label: 'Navigasi Terminal', content: genContent('Navigasi Terminal', 'Terminal adalah antarmuka baris perintah yang memungkinkan kamu berinteraksi langsung dengan sistem operasi menggunakan perintah teks.', '$ pwd\n/home/user\n\n$ cd /var/log\n$ cd ..\n$ cd ~') },
        ]
      },
      {
        title: 'Perintah Dasar',
        items: [
          { label: 'ls, cd, pwd', content: genContent('Perintah ls, cd, pwd', 'Tiga perintah paling dasar dan paling sering digunakan saat bernavigasi di sistem file Linux.', '$ ls -la\n$ cd /home/user/Documents\n$ pwd') },
          { label: 'cp, mv, rm', content: genContent('Perintah cp, mv, rm', 'Perintah untuk menyalin, memindahkan, dan menghapus file atau direktori.', '$ cp file.txt backup.txt\n$ mv file.txt /tmp/file.txt\n$ rm -rf direktori_lama/') },
          { label: 'chmod & chown', content: genContent('chmod & chown', 'chmod digunakan untuk mengubah izin file, sedangkan chown untuk mengubah kepemilikan file.', '$ chmod 755 script.sh\n$ chmod +x script.sh\n$ chown user:group file.txt') },
        ]
      },
      {
        title: 'Lanjutan',
        items: [
          { label: 'Bash Scripting', content: genContent('Bash Scripting', 'Bash scripting memungkinkan kamu mengotomasi tugas-tugas berulang dengan membuat skrip shell.', '#!/bin/bash\n# Script sederhana\necho "Hello, World!"\n\nfor i in 1 2 3; do\n  echo "Iterasi ke-$i"\ndone') },
          { label: 'grep & find', content: genContent('grep & find', 'grep digunakan untuk mencari teks dalam file, sedangkan find untuk mencari file dalam direktori.', '$ grep -r "error" /var/log/\n$ find /home -name "*.txt"\n$ find / -size +100M 2>/dev/null') },
        ]
      }
    ]
  },
  'Python': {
    sections: [
      {
        title: 'Dasar Python',
        items: [
          { label: 'Pengenalan Python', content: genContent('Pengenalan Python', 'Python adalah bahasa pemrograman tingkat tinggi yang mudah dipelajari, dinamis, dan serbaguna. Cocok untuk pemula maupun programmer profesional.', '# Hello World\nprint("Hello, World!")\n\n# Cek versi Python\nimport sys\nprint(sys.version)') },
          { label: 'Variabel & Tipe Data', content: genContent('Variabel & Tipe Data', 'Python memiliki tipe data dinamis — kamu tidak perlu mendeklarasikan tipe variabel secara eksplisit.', 'nama = "Budi"\numur = 25\ntinggi = 1.75\naktif = True\n\nprint(type(nama))   # <class "str">\nprint(type(umur))   # <class "int">') },
          { label: 'Kondisi & Perulangan', content: genContent('Kondisi & Perulangan', 'Python menggunakan indentasi (spasi) untuk menandai blok kode, bukan kurung kurawal seperti bahasa lain.', 'for i in range(5):\n    print(f"Iterasi {i}")\n\nx = 10\nif x > 5:\n    print("Lebih dari 5")\nelse:\n    print("Kurang atau sama dengan 5")') },
        ]
      },
      {
        title: 'Fungsi & OOP',
        items: [
          { label: 'Fungsi', content: genContent('Fungsi di Python', 'Fungsi adalah blok kode yang dapat digunakan ulang. Didefinisikan menggunakan keyword def.', 'def sapa(nama, salam="Halo"):\n    return f"{salam}, {nama}!"\n\nprint(sapa("Budi"))         # Halo, Budi!\nprint(sapa("Ani", "Selamat pagi"))') },
          { label: 'Class & Objek', content: genContent('Class & Objek', 'Python mendukung pemrograman berorientasi objek (OOP) dengan class, inheritance, dan encapsulation.', 'class Hewan:\n    def __init__(self, nama):\n        self.nama = nama\n\n    def suara(self):\n        return "..."\n\nclass Kucing(Hewan):\n    def suara(self):\n        return "Meow"') },
        ]
      }
    ]
  },
  'HTML & CSS': {
    sections: [
      {
        title: 'Dasar HTML',
        items: [
          { label: 'Pengenalan HTML', content: genContent('Pengenalan HTML', 'HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. Setiap elemen HTML ditulis dengan tag pembuka dan penutup.', '<!DOCTYPE html>\n<html lang="id">\n<head>\n  <title>Halaman Pertamaku</title>\n</head>\n<body>\n  <h1>Halo Dunia!</h1>\n  <p>Ini paragraf pertama saya.</p>\n</body>\n</html>') },
          { label: 'Tag & Elemen', content: genContent('Tag & Elemen HTML', 'HTML memiliki banyak tag bawaan untuk berbagai tujuan — heading, paragraf, gambar, link, tabel, dan lain-lain.', '<h1>Heading 1</h1>\n<p>Paragraf biasa</p>\n<a href="https://google.com">Link</a>\n<img src="gambar.jpg" alt="Deskripsi" />\n<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>') },
        ]
      },
      {
        title: 'CSS Styling',
        items: [
          { label: 'Pengenalan CSS', content: genContent('Pengenalan CSS', 'CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan elemen HTML — warna, font, layout, animasi, dan lain-lain.', 'body {\n  font-family: Arial, sans-serif;\n  background-color: #f5f5f5;\n  margin: 0;\n}\n\nh1 {\n  color: #333;\n  font-size: 2rem;\n}') },
          { label: 'Flexbox & Grid', content: genContent('Flexbox & Grid', 'Flexbox dan CSS Grid adalah dua sistem layout modern yang memudahkan pembuatan desain responsif dan kompleks.', '.container {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}') },
        ]
      }
    ]
  }
};

// Default content for tutorials not in tutorialData
function genContent(title, desc, code) {
  return `
    <p>${desc}</p>
    <div class="tut-note info">
      <i class="bi bi-info-circle-fill me-2"></i>
      Pastikan kamu mengikuti langkah-langkah di bawah ini dengan seksama dan mencoba kode sendiri di terminal.
    </div>
    <h5 class="mt-4 mb-2">Contoh Kode</h5>
    <div class="code-block">
      <div class="code-block-header">
        <span class="lang-label">bash / code</span>
        <button class="btn-copy" onclick="copyCode(this)"><i class="bi bi-clipboard"></i> Salin</button>
      </div>
      <pre class="code-pre"><code>${escapeHtml(code)}</code></pre>
    </div>
    <div class="tut-note warning mt-3">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>
      Coba praktikkan sendiri di lingkungan development kamu untuk hasil belajar yang lebih efektif.
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Fallback tutorial for names not in tutorialData */
function getFallbackTutorial(name) {
  const info = {
    'JavaScript': { desc: 'JavaScript adalah bahasa pemrograman yang memungkinkan kamu menambahkan interaktivitas ke halaman web. Berjalan langsung di browser tanpa perlu kompilasi.', code: 'console.log("Hello, JS!")\n\n// Variabel\nconst nama = "Budi"\nlet umur = 25\n\n// Fungsi\nfunction sapa(n) {\n  return `Halo, ${n}!`\n}' },
    'SQL': { desc: 'SQL (Structured Query Language) adalah bahasa standar untuk mengelola dan memanipulasi database relasional.', code: 'CREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  nama VARCHAR(100),\n  email VARCHAR(150) UNIQUE\n);\n\nINSERT INTO users (nama, email)\nVALUES ("Budi", "budi@mail.com");\n\nSELECT * FROM users WHERE id = 1;' },
    'Git': { desc: 'Git adalah sistem version control terdistribusi yang memungkinkan kamu melacak perubahan kode dan berkolaborasi dengan tim.', code: '$ git init\n$ git add .\n$ git commit -m "Initial commit"\n\n$ git branch fitur-baru\n$ git checkout fitur-baru\n\n$ git push origin main' },
    'PHP': { desc: 'PHP adalah bahasa scripting server-side yang banyak digunakan untuk pengembangan web. PHP berjalan di server dan menghasilkan HTML yang dikirim ke browser.', code: '<?php\n  $nama = "Budi";\n  $umur = 25;\n\n  echo "Halo, $nama!";\n\n  // Array\n  $bahasa = ["PHP", "Python", "JS"];\n  foreach ($bahasa as $b) {\n    echo $b . "\\n";\n  }\n?>' },
    'Docker': { desc: 'Docker adalah platform containerisasi yang memungkinkan kamu menjalankan aplikasi dalam container terisolasi, konsisten di berbagai environment.', code: '# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["node", "server.js"]\n\n# Build & run\n$ docker build -t myapp .\n$ docker run -p 3000:3000 myapp' },
    'React': { desc: 'React adalah library JavaScript untuk membangun antarmuka pengguna (UI) yang interaktif dan berbasis komponen. Dikembangkan oleh Meta (Facebook).', code: 'import { useState } from "react"\n\nfunction Counter() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Tambah\n      </button>\n    </div>\n  )\n}' },
  };
  const d = info[name] || { desc: `Tutorial ${name} lengkap dari dasar hingga mahir.`, code: `// Contoh kode ${name}` };
  return {
    sections: [
      {
        title: 'Pengenalan',
        items: [
          { label: `Apa itu ${name}?`,       content: genContent(`Apa itu ${name}?`, d.desc, d.code) },
          { label: 'Instalasi & Setup',       content: genContent('Instalasi & Setup', `Panduan instalasi dan konfigurasi ${name} di berbagai sistem operasi (Windows, macOS, Linux).`, `# Instalasi ${name}\n# Ikuti dokumentasi resmi di website official`) },
          { label: 'Contoh Pertama',          content: genContent('Contoh Pertama', `Mari buat program pertama kita menggunakan ${name}!`, d.code) },
        ]
      },
      {
        title: 'Konsep Dasar',
        items: [
          { label: 'Sintaks Dasar',   content: genContent('Sintaks Dasar', `Pelajari sintaks dan aturan dasar penulisan ${name}.`, '// Sintaks dasar\n// Akan segera hadir...') },
          { label: 'Best Practices',  content: genContent('Best Practices', `Tips dan praktik terbaik dalam menggunakan ${name} secara profesional.`, '// Best practices\n// Akan segera hadir...') },
        ]
      }
    ]
  };
}

/* ===== STATE ===== */
let currentTutorial = 'Linux';
let currentSectionIdx = 0;
let currentItemIdx = 0;
let isDark = true;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  buildScrollTrack('track1',  popularTutorials, 'tutorial');
  buildScrollTrack('track2',  otherTutorials,   'tutorial');
  buildContribTrack('contrib-track1', contributors.slice(0, 8));
  buildContribTrack('contrib-track2', contributors.slice(4));
});

/* ===== SCROLL TRACK BUILDERS ===== */
function buildScrollTrack(id, data, clickPage) {
  const el = document.getElementById(id);
  if (!el) return;
  const cards = data.map(t => cardHTML(t, clickPage)).join('');
  el.innerHTML = cards + cards; // duplicate for infinite loop
}

function iconHTML(t) {
  if (t.icon) {
    // If icon is a URL (CDN SVG), render as <img>; otherwise render as text/emoji
    if (t.icon.startsWith('http')) {
      return `<span class="scroll-card-icon">
        <img src="${t.icon}" alt="${t.name}"
             onerror="this.parentElement.innerHTML='<i class=\\'bi bi-code-slash\\'></i>'"
             style="width:2.4rem;height:2.4rem;object-fit:contain;display:block;">
      </span>`;
    }
    return `<span class="scroll-card-icon">${t.icon}</span>`;
  }
  return `<span class="scroll-card-icon"><i class="bi bi-code-slash"></i></span>`;
}

function cardHTML(t, clickPage) {
  const badges = t.badges.map(b => `<span class="badge-level ${b}">${badgeLabels[b]}</span>`).join('');
  return `
    <div class="scroll-card" onclick="showPage('${clickPage}','${t.name}')">
      ${iconHTML(t)}
      <div class="scroll-card-name">${t.name}</div>
      <div class="scroll-card-desc">${t.desc}</div>
      <div class="scroll-card-badges">${badges}</div>
    </div>`;
}

function buildContribTrack(id, people) {
  const el = document.getElementById(id);
  if (!el) return;
  const cards = people.map(p => {
    // Jika file foto ada di assets/, akan tampil; jika tidak, icon default
    const avatarContent = p.asset
      ? `<img src="${p.asset}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <span class="avatar-fallback" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:2.6rem;">
           <i class="bi bi-person-fill"></i>
         </span>`
      : `<i class="bi bi-person-fill"></i>`;
    return `
      <div class="contrib-card">
        <div class="contrib-avatar">${avatarContent}</div>
        <div class="contrib-name">${p.name}</div>
        <div class="contrib-role">${p.role || ''}</div>
      </div>`;
  }).join('');
  el.innerHTML = cards + cards;
}

/* ===== PAGE NAVIGATION ===== */
function showPage(pageName, tutorialName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Close tutorial popup if open
  closeTutorialPopupBtn();

  const target = document.getElementById('page-' + pageName);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Update nav active state
  document.querySelectorAll('.nav-page-link').forEach(l => l.classList.remove('active'));
  const map = { home: 0, about: 2, contact: 3, signin: 4, signup: 5 };
  const links = document.querySelectorAll('.nav-page-link');
  if (links[map[pageName]]) links[map[pageName]].classList.add('active');

  // Tutorial page: load content
  if (pageName === 'tutorial') {
    currentTutorial = tutorialName || currentTutorial;
    currentSectionIdx = 0;
    currentItemIdx = 0;
    loadTutorial(currentTutorial);
  }

  return false;
}

/* ===== TUTORIAL POPUP ===== */
function openTutorialPopup(e) {
  if (e) e.preventDefault();
  document.getElementById('tutorialOverlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeTutorialPopup(e) {
  if (e && e.target !== document.getElementById('tutorialOverlay')) return;
  closeTutorialPopupBtn();
}

function closeTutorialPopupBtn() {
  document.getElementById('tutorialOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeTutorialPopupBtn();
});

/* ===== TUTORIAL CONTENT LOADER ===== */
function loadTutorial(name) {
  const data = tutorialData[name] || getFallbackTutorial(name);

  // Update sidebar title
  document.getElementById('tutSidebarTitle').textContent = name + ' Tutorial';

  // Build sidebar menu
  let menuHTML = '';
  data.sections.forEach((sec, si) => {
    menuHTML += `<div class="tut-sidebar-section">${sec.title}</div>`;
    sec.items.forEach((item, ii) => {
      const active = (si === 0 && ii === 0) ? ' active' : '';
      menuHTML += `<div class="tut-sidebar-item${active}" onclick="loadTutorialItem('${name}',${si},${ii},this)">${item.label}</div>`;
    });
  });
  document.getElementById('tutSidebarMenu').innerHTML = menuHTML;

  // Load first item
  loadTutorialItem(name, 0, 0, null, true);
}

function loadTutorialItem(name, si, ii, el, skipActive) {
  const data = tutorialData[name] || getFallbackTutorial(name);
  const section = data.sections[si];
  if (!section) return;
  const item = section.items[ii];
  if (!item) return;

  currentSectionIdx = si;
  currentItemIdx = ii;

  // Update active in sidebar
  if (!skipActive) {
    document.querySelectorAll('.tut-sidebar-item').forEach(i => i.classList.remove('active'));
    if (el) el.classList.add('active');
  }

  // Update breadcrumb
  document.getElementById('tutBreadcrumb').innerHTML = `Tutorial › <span class="accent-text">${name}</span> › ${item.label}`;
  document.getElementById('tutBreadcrumbMobile') && (document.getElementById('tutBreadcrumbMobile').textContent = item.label);

  // Update title and body
  document.getElementById('tutContentTitle').textContent = item.label;
  document.getElementById('tutContentBody').innerHTML = item.content;
}

function nextTutorialItem() {
  const data = tutorialData[currentTutorial] || getFallbackTutorial(currentTutorial);
  let si = currentSectionIdx, ii = currentItemIdx + 1;
  if (ii >= data.sections[si].items.length) { si++; ii = 0; }
  if (si >= data.sections.length) return;
  const allItems = document.querySelectorAll('.tut-sidebar-item');
  let count = 0;
  let targetEl = null;
  data.sections.forEach((sec, s) => {
    sec.items.forEach((_, i) => {
      if (s === si && i === ii) targetEl = allItems[count];
      count++;
    });
  });
  loadTutorialItem(currentTutorial, si, ii, targetEl);
}

/* ===== SIDEBAR MOBILE ===== */
function openSidebar() {
  document.getElementById('tutSidebar').classList.add('open');
}
function closeSidebar() {
  document.getElementById('tutSidebar').classList.remove('open');
}

/* ===== THEME TOGGLE ===== */
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  const icon = document.getElementById('themeIcon');
  if (isDark) {
    icon.className = 'bi bi-sun-fill';
    document.getElementById('themeToggle').title = 'Switch to Light Mode';
  } else {
    icon.className = 'bi bi-moon-fill';
    document.getElementById('themeToggle').title = 'Switch to Dark Mode';
  }
}

/* ===== COPY CODE ===== */
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('.code-pre');
  navigator.clipboard.writeText(pre.textContent.trim()).then(() => {
    btn.innerHTML = '<i class="bi bi-check-lg"></i> Disalin!';
    setTimeout(() => { btn.innerHTML = '<i class="bi bi-clipboard"></i> Salin'; }, 2000);
  });
}
