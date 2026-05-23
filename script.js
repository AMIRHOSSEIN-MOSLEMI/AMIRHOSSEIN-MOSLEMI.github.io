// ===== PROJECT DATA =====
const projects = [
  {
    badge: 'AI · Research',
    badgeClass: 'badge-ai',
    title: 'Task Arithmetic Under Bias-Variance Trade-offs',
    desc: 'Developed a PyTorch framework to evaluate task vectors in Vision Transformers (ViT). Analyzed bias-variance trade-offs using open-vocabulary classifiers for model merging and optimization across multiple tasks.',
    stack: ['PyTorch', 'ViT', 'Deep Learning', 'Computer Vision', 'Model Merging'],
    date: 'Oct 2024 – Jul 2025 · Politecnico di Torino'
  },
  {
    badge: 'Full-stack',
    badgeClass: 'badge-fs',
    title: 'Social Budget Application',
    desc: 'Built a full-stack participatory budgeting platform with role-based access control (RBAC). Implemented dynamic voting mechanisms, secure proposal submission, and a real-time dashboard for budget allocation tracking.',
    stack: ['React.js', 'Node.js', 'REST API', 'RBAC', 'SQL'],
    date: 'Jun 2025 – Jul 2025 · Politecnico di Torino'
  },
  {
    badge: 'Software Eng.',
    badgeClass: 'badge-se',
    title: 'Ezelectronics E-commerce System',
    desc: 'Designed and developed an inventory management system for electronics retail. Integrated features for customer reviews, purchase history, and administrative data management with full UML documentation.',
    stack: ['JavaScript', 'UML', 'SQL', 'Software Engineering', 'REST API'],
    date: 'Mar 2024 – Jul 2024 · Politecnico di Torino'
  }
];

// ===== TABS =====
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

  const activeTab = document.querySelector(`.tab[data-tab="${name}"]`);
  const activePanel = document.getElementById(`panel-${name}`);

  if (activeTab) activeTab.classList.add('active');
  if (activePanel) activePanel.classList.add('active');
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

document.querySelectorAll('[data-tab]').forEach(el => {
  if (!el.classList.contains('tab')) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(el.dataset.tab);
      document.querySelector('.tabs').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});

// ===== MODAL =====
const overlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(index) {
  const p = projects[index];
  document.getElementById('mBadge').className = 'modal-badge ' + p.badgeClass;
  document.getElementById('mBadge').textContent = p.badge;
  document.getElementById('mTitle').textContent = p.title;
  document.getElementById('mDesc').textContent = p.desc;
  document.getElementById('mStack').innerHTML = p.stack.map(s => `<span class="modal-chip">${s}</span>`).join('');
  document.getElementById('mDate').innerHTML = `<i class="ti ti-calendar"></i>${p.date}`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => openModal(parseInt(card.dataset.index)));
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== MOBILE NAV =====
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(link.dataset.tab);
    mobileMenu.classList.remove('open');
    document.querySelector('.tabs').scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Sent ✓';
  btn.style.background = '#166534';
  setTimeout(() => {
    btn.innerHTML = 'Send message <i class="ti ti-arrow-right"></i>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});