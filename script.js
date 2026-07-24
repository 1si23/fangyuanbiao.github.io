// ===== 房源数据 =====
const rawRows = [
  { store: "和会街", address: "和会街75号", room: "308", original: "", price: "2080", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "和会街75号", room: "408", original: "", price: "2280", remark: "", utility: "水30/月，电1元/度" },
  { store: "模范马路店", address: "新模范马路九号小区", room: "B栋104", original: "2080", price: "1780", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "A栋108", original: "2180", price: "1880", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "A栋111", original: "2380", price: "2080", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "A栋301", original: "2380", price: "2080", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "B栋101", original: "", price: "1880", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "B栋201", original: "", price: "2380", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "A栋102", original: "", price: "2080", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "A栋201", original: "", price: "2280", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "新模范马路九号小区", room: "A栋305", original: "", price: "2280", remark: "", utility: "水30/月，电1元/度" },
  { store: "工人新村店", address: "109号3楼（清沐酒店旁）", room: "301", original: "2180", price: "1880", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "109号3楼（清沐酒店旁）", room: "304", original: "", price: "2080", remark: "", utility: "水30/月，电1元/度" },
  { store: "新街口德基店", address: "华侨路26号新兴大厦", room: "8518", original: "2480", price: "2280", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "华侨路26号新兴大厦", room: "8516", original: "", price: "1380", remark: "", utility: "水30/月，电1元/度" },
  { store: "来凤小区店", address: "三山街地铁", room: "208", original: "2080", price: "1780", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "三山街地铁", room: "213", original: "", price: "2380", remark: "", utility: "水30/月，电1元/度" },
  { store: "琥珀巷店", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "5栋101", original: "1480", price: "1180", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "7栋202", original: "2280", price: "1980", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "5栋104", original: "", price: "1880", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "7栋104", original: "", price: "1680", remark: "预约看房", utility: "水30/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "7栋101", original: "", price: "1780", remark: "预约看房", utility: "水30/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "8栋106", original: "", price: "1780", remark: "8.18可住", utility: "水30/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "员工宿舍四人间", original: "", price: "600", remark: "元/月/床", utility: "水10/人/月，电1元/度" },
  { store: "", address: "琥珀巷高层小区9栋和10栋之间赛翁公寓", room: "员工宿舍六人间", original: "", price: "500", remark: "元/月/床", utility: "水10/人/月，电1元/度" },
  { store: "象房新村店", address: "象房新村15幢三单元", room: "103", original: "2380", price: "1880", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "象房新村15幢三单元", room: "101", original: "2380", price: "1980", remark: "一口价", utility: "水30/月，电1元/度" },
  { store: "", address: "象房新村15幢三单元", room: "502", original: "", price: "1780", remark: "", utility: "水30/月，电1元/度" },
  { store: "", address: "象房新村15幢三单元", room: "201", original: "", price: "2380", remark: "", utility: "水30/月，电1元/度" },
  { store: "紫峰店", address: "鼓楼地铁站", room: "601", original: "", price: "600", remark: "员工宿舍", utility: "水10/人/月，电1元/度" },
  { store: "", address: "鼓楼地铁站", room: "602/606/502", original: "", price: "600", remark: "7.20可约看，八人间整租元/月/床", utility: "水10/人/月，电1元/度" },
  { store: "", address: "鼓楼地铁站", room: "505", original: "", price: "680", remark: "四间整租元/月", utility: "水10/人/月，电1元/度" },
  { store: "", address: "鼓楼地铁站", room: "507", original: "", price: "980", remark: "双人间整租元/月", utility: "水10/人/月，电1元/度" },
  { store: "秦淮区江宁路三号店", address: "秦淮区江宁路三号", room: "505", original: "", price: "4180", remark: "3室1厅", utility: "民水民电" },
  { store: "卫岗55号店", address: "苜蓿园 下马坊地铁", room: "13-107A", original: "", price: "2580", remark: "单室套1楼带院", utility: "民水民电" },
  { store: "", address: "苜蓿园 下马坊地铁", room: "13-208", original: "", price: "3180", remark: "3室", utility: "民水民电" },
  { store: "", address: "苜蓿园 下马坊地铁", room: "12-403", original: "", price: "3380", remark: "3室", utility: "民水民电" },
  { store: "", address: "苜蓿园 下马坊地铁", room: "12-406", original: "", price: "3380", remark: "3室", utility: "民水民电" },
  { store: "", address: "苜蓿园 下马坊地铁", room: "12-207", original: "", price: "3580", remark: "2室1厅", utility: "民水民电" },
  { store: "", address: "苜蓿园 下马坊地铁", room: "12-306", original: "", price: "3580", remark: "3室1厅", utility: "民水民电" },
  { store: "", address: "苜蓿园 下马坊地铁", room: "98-202", original: "", price: "3580", remark: "3室1厅", utility: "民水民电" }
];

// 补全门店名称
let lastStore = '';
rawRows.forEach(r => { if (r.store && r.store.trim()) lastStore = r.store.trim(); else r.store = lastStore; });

// 门店列表
const storeSet = new Set();
rawRows.forEach(r => storeSet.add(r.store));
const storeList = Array.from(storeSet).sort();

// DOM 引用
const tbody = document.getElementById('priceTableBody');
const storeFilter = document.getElementById('storeFilter');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const resetBtn = document.getElementById('resetFilterBtn');
const filterStats = document.getElementById('filterStats');
const totalBadge = document.getElementById('totalBadge');

// 填充门店下拉
storeList.forEach(s => {
  const opt = document.createElement('option');
  opt.value = s;
  opt.textContent = s;
  storeFilter.appendChild(opt);
});

// ===== 轮播逻辑 =====
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalRoomLabel = document.getElementById('modalRoomLabel');
const modalCounter = document.getElementById('modalCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('modalCloseBtn');
const thumbnailsContainer = document.getElementById('thumbnailsContainer');

let currentMediaList = [];
let currentIndex = 0;

function detectMediaList(room, maxAttempt = 30) {
  const safeRoom = room.replace(/\//g, '_').replace(/[\\:*?"<>|]/g, '_');
  const list = [];
  let failures = 0;
  let idx = 1;
  return new Promise((resolve) => {
    function tryNext() {
      if (idx > maxAttempt || failures >= 2) { resolve(list); return; }
      const img = new Image();
      img.src = `images/${safeRoom}_${idx}.jpg`;
      img.onload = function() { failures = 0; list.push({ src: `images/${safeRoom}_${idx}.jpg`, type: 'image' }); idx++; tryNext(); };
      img.onerror = function() {
        const png = new Image();
        png.src = `images/${safeRoom}_${idx}.png`;
        png.onload = function() { failures = 0; list.push({ src: `images/${safeRoom}_${idx}.png`, type: 'image' }); idx++; tryNext(); };
        png.onerror = function() {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.onloadedmetadata = function() { failures = 0; list.push({ src: `images/${safeRoom}_${idx}.mp4`, type: 'video' }); idx++; tryNext(); };
          video.onerror = function() { failures++; idx++; tryNext(); };
          video.src = `images/${safeRoom}_${idx}.mp4`;
          video.load();
        };
        png.src = `images/${safeRoom}_${idx}.png`;
      };
      img.src = `images/${safeRoom}_${idx}.jpg`;
    }
    tryNext();
  });
}

async function openModal(room) {
  modalRoomLabel.textContent = `📷 ${room}`;
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  modalBody.innerHTML = '<div style="color:#8892a8;">⏳ 加载中...</div>';
  thumbnailsContainer.innerHTML = '';
  modalCounter.textContent = '0 / 0';
  prevBtn.disabled = true; nextBtn.disabled = true;

  const mediaList = await detectMediaList(room);
  currentMediaList = mediaList;
  currentIndex = 0;
  if (mediaList.length === 0) {
    modalBody.innerHTML = '<div style="color:#8892a8;">📷 暂无图片</div>';
    modalCounter.textContent = '0 / 0';
    return;
  }
  renderSlide(0);
  renderThumbnails();
}

function renderSlide(index) {
  const item = currentMediaList[index];
  if (!item) return;
  modalBody.innerHTML = '';
  if (item.type === 'video') {
    const v = document.createElement('video');
    v.src = item.src; v.className = 'slide-video'; v.controls = true; v.autoplay = true; v.muted = false;
    modalBody.appendChild(v);
  } else {
    const img = document.createElement('img');
    img.src = item.src; img.className = 'slide-img';
    modalBody.appendChild(img);
  }
  modalCounter.textContent = `${index+1} / ${currentMediaList.length}`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === currentMediaList.length - 1;
  updateThumbnails(index);
}

function renderThumbnails() {
  thumbnailsContainer.innerHTML = '';
  currentMediaList.forEach((item, idx) => {
    const el = document.createElement(item.type === 'video' ? 'video' : 'img');
    el.src = item.src;
    if (item.type === 'video') { el.muted = true; el.loop = true;
      el.addEventListener('mouseenter', () => el.play());
      el.addEventListener('mouseleave', () => el.pause());
    }
    el.dataset.index = idx;
    el.addEventListener('click', () => renderSlide(idx));
    thumbnailsContainer.appendChild(el);
  });
}

function updateThumbnails(activeIdx) {
  for (let i = 0; i < thumbnailsContainer.children.length; i++) {
    thumbnailsContainer.children[i].classList.toggle('active', i === activeIdx);
  }
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  document.querySelectorAll('.slide-video').forEach(v => v.pause());
}

prevBtn.addEventListener('click', () => { if (currentIndex > 0) renderSlide(currentIndex - 1); });
nextBtn.addEventListener('click', () => { if (currentIndex < currentMediaList.length - 1) renderSlide(currentIndex + 1); });
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (!modalOverlay.classList.contains('active')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

// ===== 渲染表格 =====
function renderTable() {
  const selected = storeFilter.value;
  const minVal = priceMin.value.trim() === '' ? -1 : Number(priceMin.value);
  const maxVal = priceMax.value.trim() === '' ? -1 : Number(priceMax.value);

  const filtered = rawRows.filter(r => {
    if (selected !== 'all' && r.store !== selected) return false;
    const p = parseInt(r.price, 10);
    if (isNaN(p)) return false;
    if (minVal >= 0 && p < minVal) return false;
    if (maxVal >= 0 && p > maxVal) return false;
    return true;
  });

  filterStats.textContent = `显示 ${filtered.length} 条`;
  totalBadge.textContent = `🏷️ 共 ${rawRows.length} 条房源`;
  tbody.innerHTML = '';

  if (filtered.length === 0) {
    const tr = document.createElement('tr');
    tr.className = 'no-result';
    const td = document.createElement('td');
    td.colSpan = 8;
    td.textContent = '😅 没有匹配的房源';
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  filtered.forEach(item => {
    const tr = document.createElement('tr');
    if (item.remark && item.remark.includes('预约')) tr.className = 'row-muted';
    if (item.remark && item.remark.includes('一口价')) tr.className = 'row-highlight';

    const safeRoom = item.room.replace(/\//g, '_').replace(/[\\:*?"<>|]/g, '_');

    // 门店
    const td1 = document.createElement('td');
    td1.className = 'store-group';
    const span = document.createElement('span');
    span.className = 'store-name';
    span.textContent = item.store || '—';
    td1.appendChild(span);

    const td2 = document.createElement('td');
    td2.textContent = item.address || '';

    const td3 = document.createElement('td');
    td3.textContent = item.room || '';

    const td4 = document.createElement('td');
    td4.textContent = item.original || '—';
    if (!item.original) td4.style.color = '#9aabc0';

    const td5 = document.createElement('td');
    const priceSpan = document.createElement('span');
    priceSpan.className = 'highlight-price';
    priceSpan.textContent = item.price ? `¥${item.price}` : '—';
    td5.appendChild(priceSpan);

    const td6 = document.createElement('td');
    if (item.remark) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      if (item.remark.includes('一口价')) tag.classList.add('tag-primary');
      else if (item.remark.includes('预约')) tag.classList.add('tag-warning');
      else if (item.remark.includes('可住') || item.remark.includes('宿舍')) tag.classList.add('tag-success');
      tag.textContent = item.remark;
      td6.appendChild(tag);
    } else {
      td6.textContent = '—';
      td6.style.color = '#b0c0d4';
    }

    const td7 = document.createElement('td');
    const utilSpan = document.createElement('span');
    utilSpan.className = 'water-electric';
    utilSpan.textContent = item.utility || '—';
    td7.appendChild(utilSpan);

    // 媒体列
    const td8 = document.createElement('td');
    td8.className = 'media-cell';

    const cover = document.createElement('img');
    cover.className = 'cover';
    cover.src = `images/${safeRoom}_1.jpg`;
    cover.alt = `${item.room} 封面`;

    const badge = document.createElement('span');
    badge.className = 'badge-count-small';
    badge.textContent = '⏳ 检测中...';

    td8.appendChild(cover);
    td8.appendChild(badge);

    cover.addEventListener('click', () => openModal(item.room));

    // 探测数量
    function detectCount() {
      let count = 0, failures = 0, idx = 1;
      function check() {
        if (failures >= 2) { badge.textContent = `${count} 张`; return; }
        const img = new Image();
        img.src = `images/${safeRoom}_${idx}.jpg`;
        img.onload = function() { count++; failures = 0; idx++; check(); };
        img.onerror = function() {
          const png = new Image();
          png.src = `images/${safeRoom}_${idx}.png`;
          png.onload = function() { count++; failures = 0; idx++; check(); };
          png.onerror = function() {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.onloadedmetadata = function() { count++; failures = 0; idx++; check(); };
            video.onerror = function() { failures++; idx++; check(); };
            video.src = `images/${safeRoom}_${idx}.mp4`;
            video.load();
          };
          png.src = `images/${safeRoom}_${idx}.png`;
        };
        img.src = `images/${safeRoom}_${idx}.jpg`;
      }
      check();
    }

    cover.onerror = function() {
      this.src = `images/${safeRoom}_1.png`;
      this.onerror = function() {
        this.style.display = 'none';
        const vc = document.createElement('video');
        vc.src = `images/${safeRoom}_1.mp4`;
        vc.className = 'cover';
        vc.muted = true;
        vc.loop = true;
        vc.playsInline = true;
        vc.style.display = 'block';
        vc.style.margin = '0 auto';
        vc.onerror = function() {
          this.style.display = 'none';
          badge.textContent = '无图';
        };
        vc.onloadeddata = function() {
          td8.innerHTML = '';
          td8.appendChild(vc);
          td8.appendChild(badge);
          vc.addEventListener('click', () => openModal(item.room));
        };
        td8.innerHTML = '';
        td8.appendChild(vc);
        td8.appendChild(badge);
        detectCount();
      };
    };
    cover.onload = detectCount;

    tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3);
    tr.appendChild(td4); tr.appendChild(td5); tr.appendChild(td6);
    tr.appendChild(td7); tr.appendChild(td8);
    tbody.appendChild(tr);
  });
}

storeFilter.addEventListener('change', renderTable);
priceMin.addEventListener('input', renderTable);
priceMax.addEventListener('input', renderTable);
resetBtn.addEventListener('click', () => {
  storeFilter.value = 'all';
  priceMin.value = '';
  priceMax.value = '';
  renderTable();
});

renderTable();
