window.onscroll = function() {
  var scrollToTop = document.getElementById('scrollToTop');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}
  
function scrollToTop() {
  var scrollToTop = document.getElementById('scrollToTop');
  scrollToTop.classList.add('clicked');
  window.scrollTo({top: 0, behavior: 'smooth'});
  setTimeout(function() {
    scrollToTop.classList.remove('clicked');
  }, 700);
}

function addCertification(image, title, description, catalog, url) {
  const container = document.querySelector(`#${catalog} .row`);
  if (!container) {
      console.error(`No se encontró el contenedor para el catálogo: ${catalog}`);
      return;
  }

  // Crea un nuevo elemento div
  const certificationDiv = document.createElement('div');
  certificationDiv.className = 'col-md-4';

  // Crea el contenido HTML dentro del div
  certificationDiv.innerHTML = `
      <div class="card mb-4 shadow-sm sombra-inferior">
          <img src="${image}" alt="${title}" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">
                  ${description}
              </p>
              <a href="${url}" target="_blank" class="btn btn-primary">Ver Certificado</a>
          </div>
      </div>
  `;

  // Agrega el nuevo div al contenedor
  container.appendChild(certificationDiv);
}


document.addEventListener('DOMContentLoaded', () => {
addCertification('/placeholder.svg', 'Certificación en Desarrollo Web', 'Aprende las últimas tecnologías y técnicas para crear sitios web modernos y responsivos.', 'Programación', 'http://example.com/certificado1');
addCertification('/placeholder.svg', 'Certificación en Gestión de Proyectos', 'Aprende a planificar, organizar y controlar proyectos de manera efectiva.', 'Negocios', 'http://example.com/certificado2');
// Añade más certificados según sea necesario
});
