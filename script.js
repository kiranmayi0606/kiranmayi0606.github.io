// Show only the selected section and hide others
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = 'none';
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
      link.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = 'block';
  }

  const activeLink = document.querySelector(`.sidebar a[data-section="${sectionId}"]`);
  if (activeLink) {
      activeLink.classList.add('active');
  }
}

// Add click event listeners to sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
  });
});

// Show the "About" section by default on page load
window.addEventListener('load', () => {
  showSection('about');
});

// Back to Top Button
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
