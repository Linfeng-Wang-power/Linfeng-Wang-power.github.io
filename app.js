/* 渲染与交互。日常更新内容请编辑 content.js。 */
(() => {
  const source = window.homepage;
  let language = 'en';
  try { if (localStorage.getItem('homepage-language') === 'zh') language = 'zh'; } catch {}
  let selected = 'All Papers';
  const translations = {
    'Homepage.':'首页', 'About Me':'关于我', 'News':'动态',
    'Publications & Preprints':'论文与预印本', 'Internship':'实习经历',
    'Education':'教育经历', 'Honors & Awards':'荣誉与奖励', 'Service':'学术服务',
    'Academic Service':'学术服务', 'Research Interests':'研究兴趣',
    'RESEARCH & ACADEMIC PROFILE':'研究与学术经历',
    'Explore publications & preprints':'浏览论文与预印本',
    'Skip to content':'跳转到正文', 'Back to top ↑':'返回顶部 ↑',
    '* Equal contribution (co-first author).':'* 表示同等贡献（共同第一作者）。',
    'All Papers':'全部论文', 'Foundation Models':'基础模型',
    'Time Series Analysis':'时间序列分析', 'Computer Vision':'计算机视觉',
    'Paper':'论文', 'Code':'代码', 'Project':'项目', 'Phone':'电话', 'WeChat':'微信',
    'Updated':'更新于', 'Copy citation':'复制引用', 'Copied':'已复制',
    'Please select and copy the text above.':'请选中并复制上方文字。',
    'No publications yet.':'暂无论文。'
  };
  const t = text => language === 'zh' ? (translations[text] || text) : text;
  const labels = [...document.querySelectorAll('.brand, .nav-links a, .skip-link, .eyebrow, #about h1, main section h2, .filter-heading strong, #author-note, footer a')].map(node => [node, node.textContent.trim()]);
  function render() {
  const locale = source.locales?.[language] || {};
  const data = {...source, ...locale, profile: {...source.profile, ...locale.profile}, papers: source.papers.map((paper, i) => ({...paper, description: locale.paperDescriptions?.[i] ?? paper.description}))};
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  labels.forEach(([node, text]) => { node.textContent = t(text); });
  const toggle = document.getElementById('language-toggle');
  toggle.textContent = language === 'en' ? '中文' : 'English';
  toggle.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = value => {
    if (!value) return '';
    try { const u = new URL(value, location.href); return ['http:', 'https:', 'mailto:'].includes(u.protocol) || (u.protocol === 'file:' && location.protocol === 'file:') ? esc(value) : ''; } catch { return ''; }
  };
  const link = (label, url) => safeUrl(url) ? `<a href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>` : '';
  const p = data.profile;
  document.title = `${p.name} · ${language === 'zh' ? '学术主页' : 'Academic Homepage'}`;
  document.querySelector('meta[name="description"]').content = `${p.name} — ${p.role}, ${p.institution}. Research and publications.`;
  $('demo-note').hidden = !data.demo;
  const avatar = safeUrl(p.avatar);
  $('profile').innerHTML = `${avatar ? `<img class="portrait" src="${avatar}" alt="${esc(p.name)}">` : `<div class="portrait avatar-placeholder" aria-label="Profile photo placeholder">${esc(p.initials)}</div>`}<h2>${esc(p.name)}</h2><div class="chinese-name">${esc(p.chineseName)}</div><p class="role">${esc(p.role)}</p><p class="institution">${esc(p.institution)}</p><p class="tagline">${esc(p.tagline)}</p><div class="location">${esc(p.location)}</div><div class="socials">${p.email ? `<a href="mailto:${esc(p.email)}"><span class="social-symbol" aria-hidden="true">@</span>${esc(p.email)}</a>` : ''}${p.links.filter(item => safeUrl(item.url)).map(item => `<span>${link(item.label, item.url)}</span>`).join('')}${p.phone ? `<a href="tel:${esc(p.phone)}">${t('Phone')} · ${esc(p.phone)}</a>` : ''}${p.wechat ? `<span class="wechat">${t('WeChat')} · ${esc(p.wechat)}</span>` : ''}</div>${data.demo ? '<p class="profile-note">联系方式与学术链接待添加</p>' : ''}`;
  // Rich text stays data-driven: plain strings or {text, url?, bold?} segments.
  const rich = value => (Array.isArray(value) ? value : [value]).map(part => {
    if (typeof part === 'string') return esc(part);
    const text = safeUrl(part.url) ? link(part.text, part.url) : esc(part.text);
    return part.bold ? `<strong>${text}</strong>` : text;
  }).join('');
  $('bio').innerHTML = data.bio.map(paragraph => `<p>${rich(paragraph)}</p>`).join('');
  $('research-intro').innerHTML = rich(data.researchIntro || '');
  $('interests').innerHTML = data.interests.map(item => `<li class="interest"><strong><em>${esc(item.title)}</em></strong>: ${esc(item.description)}${item.links?.length ? ` (${item.links.map(item => link(item.label, item.url)).join(', ')})` : ''}</li>`).join('');
  const entries = items => items.map(item => `<div class="entry"><time>${esc(item.period || '')}</time><div><strong>${esc(item.title)}</strong><p>${esc(item.description)}</p></div></div>`).join('');
  $('experience').innerHTML = data.experience.map(item => `<article class="internship-entry">${safeUrl(item.logo) ? `<img class="company-logo" src="${safeUrl(item.logo)}" alt="${esc(item.title)} logo">` : ''}<div><h3>${esc(item.title)}</h3>${item.role ? `<p class="internship-role">${esc(item.role)}</p>` : ''}${item.period ? `<p class="internship-period">${esc(item.period)}</p>` : ''}<p>${esc(item.description)}</p></div></article>`).join('');
  $('education-list').innerHTML = entries(data.education);
  $('honors-list').innerHTML = entries(data.honors);
  $('service-list').innerHTML = entries(data.service);
  $('news-list').innerHTML = data.news.map(item => `<div class="news-item"><time>${esc(item.date)}</time><div>${safeUrl(item.url) ? link(item.text, item.url) : esc(item.text)}</div></div>`).join('');
  const tags = ['All Papers', ...new Set(data.papers.flatMap(paper => paper.tags))];
  function renderPapers() {
    $('filters').innerHTML = tags.map(tag => `<button class="filter" type="button" aria-pressed="${tag === selected}" data-tag="${esc(tag)}">${esc(t(tag))}<span>${tag === 'All Papers' ? data.papers.length : data.papers.filter(paper => paper.tags.includes(tag)).length}</span></button>`).join('');
    const papers = data.papers.filter(paper => selected === 'All Papers' || paper.tags.includes(selected));
    $('paper-count').textContent = language === 'zh' ? `显示 ${papers.length} / ${data.papers.length} 篇` : `${papers.length} of ${data.papers.length} papers`;
    $('papers').innerHTML = papers.map(paper => `<article class="paper">${safeUrl(paper.image) ? `<img class="paper-image" src="${safeUrl(paper.image)}" alt="Figure for ${esc(paper.title)}" loading="lazy">` : `<div class="paper-visual" aria-hidden="true"><small>${esc(paper.badge || paper.year)}</small><span>${esc(paper.tags[0] || 'Research')}</span></div>`}<div><h3>${safeUrl(paper.links.Paper) ? link(paper.title, paper.links.Paper) : esc(paper.title)}</h3><p class="authors">${paper.authors.map(author => { const label = `${esc(author)}${(paper.equalContributors || []).includes(author) ? '<sup title="Equal contribution">*</sup>' : ''}`; return author === p.name ? `<strong>${label}</strong>` : label; }).join(', ')}</p><p class="venue">${esc(paper.venue)}</p><p class="abstract">${esc(paper.description)}</p><div class="paper-links">${Object.entries(paper.links).map(([label,url]) => link(t(label),url)).join('')}</div><div class="paper-tags">${paper.tags.map(tag => esc(t(tag))).join(' · ')}</div>${paper.bibtex ? `<details class="citation"><summary>BibTeX</summary><pre>${esc(paper.bibtex)}</pre><button type="button" class="copy-citation">${t('Copy citation')}</button><span role="status"></span></details>` : ''}</div></article>`).join('') || `<p>${t('No publications yet.')}</p>`;
  }
  $('filters').onclick = event => {
    const button = event.target.closest('[data-tag]');
    if (!button) return;
    selected = button.dataset.tag;
    renderPapers();
    [...$('filters').querySelectorAll('button')].find(b => b.dataset.tag === selected)?.focus();
  };
  $('papers').onclick = async event => {
    if (!event.target.matches('.copy-citation')) return;
    const details = event.target.closest('details');
    try { await navigator.clipboard.writeText(details.querySelector('pre').textContent); details.querySelector('[role=status]').textContent = ' ' + t('Copied'); }
    catch { details.querySelector('[role=status]').textContent = ' ' + t('Please select and copy the text above.'); }
  };
  renderPapers();
  for (const key of ['news', 'service']) {
    const empty = !data[key].length;
    $(key).hidden = empty;
    document.querySelector(`.nav-links a[href="#${key}"]`).hidden = empty;
  }
  $('experience').hidden = !data.experience.length;
  $('internship').hidden = !data.experience.length;
  document.querySelector('.nav-links a[href="#internship"]').hidden = !data.experience.length;
  $('author-note').hidden = !data.papers.some(paper => paper.equalContributors?.length);
  $('footer-text').textContent = `© ${new Date().getFullYear()} ${p.name} · ${t('Updated')} ${data.updated}`;
  }
  render();
  document.getElementById('language-toggle').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('homepage-language', language); } catch {}
    render();
  });
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    document.querySelectorAll('.nav-links a').forEach(a => {
      const active = a.hash === `#${visible[0].target.id}`;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  }, { rootMargin: '-12% 0px -65% 0px' });
  document.querySelectorAll('main section').forEach(section => observer.observe(section));
})();
