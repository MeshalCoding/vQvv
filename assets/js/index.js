


  const pages = document.querySelectorAll('.page');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentPage = 0;

  function showPage(index) {
    if (index < 0 || index >= pages.length) return;

    // إخفاء الصفحة الحالية
    pages[currentPage].classList.add('fade-out');
    setTimeout(() => {
      pages[currentPage].style.display = 'none';
      pages[currentPage].classList.remove('fade-out');

      // إظهار الصفحة الجديدة
      pages[index].style.display = 'flex';
      pages[index].classList.add('fade-in');

      // تمرير الشاشة لأعلى الصور
      document.querySelector(".images").scrollIntoView({ behavior: "smooth" });

      // إعادة تعيين الأنيميشن بعد عرضها
      setTimeout(() => {
        pages[index].classList.remove('fade-in');
      }, 500);

      currentPage = index;

      // تحديث عرض الأزرار
      prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
      nextBtn.style.display = currentPage === pages.length - 1 ? 'none' : 'inline-block';
    }, 400);
  } // ← هذا هو القوس اللي كان ناقص

  nextBtn.addEventListener('click', () => showPage(currentPage + 1));
  prevBtn.addEventListener('click', () => showPage(currentPage - 1));

  // البداية: عرض الصفحة الأولى
  pages.forEach((page, i) => {
    page.style.display = i === 0 ? 'flex' : 'none';
  });
  prevBtn.style.display = 'none';
const video2 = document.getElementById('video2');
const icon = document.querySelector('.VidBtn i');

function toggleMute() {
  if (video2.muted) {
    video2.muted = false;
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  } else {
    video2.muted = true;
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  }
}

window.onload = () => {
  video2.style.display = 'block';
  video2.play();
};


  


