const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebar-toggle');
const mainWrapper = document.querySelector('.main-wrapper');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  mainWrapper.classList.toggle('expanded');
});
