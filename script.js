/* All content is in index.html. This file only adds optional interactions. */
'use strict';
const one = (selector) => document.querySelector(selector);
const products = [...document.querySelectorAll('.product')];
document.body.classList.add('js');
const menu = one('.menu-toggle');
menu.hidden = false;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  one('#navigation').classList.toggle('open', open);
});
one('#navigation').addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.setAttribute('aria-expanded', 'false');
    one('#navigation').classList.remove('open');
  }
});
let activeCategory = 'All';
const filters = one('.filters');
filters.hidden = false;
function filterCollection(category) {
  activeCategory = category;
  const term = one('#searchInput').value.trim().toLowerCase();
  let count = 0;
  products.forEach((product) => {
    const categoryMatches = category === 'All' || product.dataset.category === category;
    const text = (product.textContent + ' ' + product.dataset.description).toLowerCase();
    product.hidden = !categoryMatches || !text.includes(term);
    if (!product.hidden) count++;
  });
  filters.querySelectorAll('button').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  });
  one('#results').textContent = `${count} lovely ${count === 1 ? 'idea' : 'ideas'}`;
  one('#emptyState').hidden = count !== 0;
}
filters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (button) filterCollection(button.dataset.filter);
});
document.querySelectorAll('[data-category-link]').forEach(link => link.addEventListener('click', () => { one('#searchInput').value = ''; filterCollection(link.dataset.categoryLink); }));
one('.search').hidden = false;
one('.search').addEventListener('submit', event => { event.preventDefault(); filterCollection(activeCategory); one('#collection').scrollIntoView(); });
one('#searchInput').addEventListener('input', () => filterCollection(activeCategory));
one('#resetSearch').addEventListener('click', () => { one('#searchInput').value = ''; filterCollection('All'); });
const dialog = one('#productDialog');
products.forEach((product) => {
  product.querySelector('.product-photo').addEventListener('click', () => {
    const name = product.querySelector('h3').textContent;
    const image = product.querySelector('img');
    one('#detailImage').src = image.getAttribute('src');
    one('#detailImage').alt = image.alt;
    one('#detailTitle').textContent = name;
    one('#detailCategory').textContent = product.dataset.category;
    one('#detailDescription').textContent = product.dataset.description;
    one('#enquiryMessage').value = `Hi Hrid! I saw “${name}” on Dreamdots. Could you share current photos, the price and making time? I’d love to know more.`;
    one('#copyStatus').textContent = '';
    dialog.showModal();
  });
});
one('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
one('#copyMessage').addEventListener('click', async () => {
  const field = one('#enquiryMessage');
  try {
    await navigator.clipboard.writeText(field.value);
    one('#copyStatus').textContent = 'Copied! Open Instagram and paste into your chat.';
  } catch {
    field.focus();
    field.select();
    one('#copyStatus').textContent = 'Message selected. Copy it using your device’s Copy option.';
  }
});
one('#year').textContent = new Date().getFullYear();
