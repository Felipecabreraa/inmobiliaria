// Arreglos de propiedades (Venta y Alquiler)
const propiedades_venta = [
    {
      nombre: "Casa en la playa",
      src: "img/propiedades/casa1.avif",
      descripcion: "Hermosa casa con vista al mar.",
      ubicacion: "Costa Rica",
      habitaciones: 3,
      costo: 250000,
      smoke: false,
      pets: true
    },
    {
        nombre: "Casa en la playa",
        src: "img/propiedades/casa1.avif",
        descripcion: "Hermosa casa con vista al mar.",
        ubicacion: "Costa Rica",
        habitaciones: 3,
        costo: 250000,
        smoke: false,
        pets: true
      },
      {
        nombre: "Casa en la playa",
        src: "img/propiedades/casa1.avif",
        descripcion: "Hermosa casa con vista al mar.",
        ubicacion: "Costa Rica",
        habitaciones: 3,
        costo: 250000,
        smoke: false,
        pets: true
      },
    {
      nombre: "Departamento en ciudad",
      src: "img/propiedades/depto1.avif",
      descripcion: "Departamento moderno en el centro de la ciudad.",
      ubicacion: "San José, Costa Rica",
      habitaciones: 2,
      costo: 150000,
      smoke: false,
      pets: true
    },
    {
      nombre: "Casa rural",
      src: "img/propiedades/rural1.jpg",
      descripcion: "Casa en el campo con terreno amplio.",
      ubicacion: "Cartago, Costa Rica",
      habitaciones: 4,
      costo: 200000,
      smoke: false,
      pets: true
    },
    {
      nombre: "Casa en las montañas",
      src: "img/propiedades/monta.avif",
      descripcion: "Hermosa casa en las montañas.",
      ubicacion: "Monteverde, Costa Rica",
      habitaciones: 5,
      costo: 300000,
      smoke: true,
      pets: false
    }
  ];
  
  const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro",
      src: "img/propiedades/depa1.avif",
      descripcion: "Apartamento de 2 habitaciones en el centro de la ciudad.",
      ubicacion: "San José, Costa Rica",
      habitaciones: 2,
      costo: 800,
      smoke: true,
      pets: true
    },
    {
      nombre: "Departamento con vista al mar",
      src: "img/propiedades/mar1.avif",
      descripcion: "Alquiler de departamento con espectacular vista al mar.",
      ubicacion: "Guanacaste, Costa Rica",
      habitaciones: 3,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: "Casa en la montaña",
      src: "img/propiedades/monta.avif",
      descripcion: "Casa aislada en la montaña, perfecta para vacacionar.",
      ubicacion: "Monteverde, Costa Rica",
      habitaciones: 4,
      costo: 1500,
      smoke: true,
      pets: true
    },
    {
      nombre: "Apartamento moderno",
      src: "img/propiedades/depa2.avif",
      descripcion: "Apartamento moderno y acogedor.",
      ubicacion: "San José, Costa Rica",
      habitaciones: 1,
      costo: 600,
      smoke: false,
      pets: true
    },

    {
        nombre: "Apartamento moderno",
        src: "img/propiedades/depa2.avif",
        descripcion: "Apartamento moderno y acogedor.",
        ubicacion: "San José, Costa Rica",
        habitaciones: 1,
        costo: 600,
        smoke: false,
        pets: true
    },

    {
        nombre: "Apartamento moderno",
        src: "img/propiedades/depa2.avif",
        descripcion: "Apartamento moderno y acogedor.",
        ubicacion: "San José, Costa Rica",
        habitaciones: 1,
        costo: 600,
        smoke: false,
        pets: true
    }
  ];
  
  // Función para mostrar las propiedades
  function renderizarPropiedades(propiedades, contenedor) {
    contenedor.innerHTML = '';
    propiedades.forEach(prop => {
      const div = document.createElement('div');
      div.classList.add('property-card');
      
      // Condicional para fumar
      const smokeIcon = prop.smoke ? 
        '<i class="fas fa-smoking"></i> Se permite fumar' : 
        '<i class="fas fa-smoking-ban"></i> No se permite fumar';
  
      // Condicional para mascotas
      const petsIcon = prop.pets ? 
        '<i class="fas fa-paw"></i> Se permiten mascotas' : 
        '<i class="fas fa-paw-slash"></i> No se permiten mascotas';
  
      // Mostrar propiedad con íconos y alertas
      div.innerHTML = `
        <img src="${prop.src}" alt="${prop.nombre}">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p>Ubicación: ${prop.ubicacion}</p>
        <p>Habitaciones: ${prop.habitaciones}</p>
        <p>Costo: $${prop.costo}</p>
        <p class="smoke-pets">
          ${smokeIcon} <br>
          ${petsIcon}
        </p>
      `;
  
      // Agregar el evento de alerta si no se permite fumar o tener mascotas
      div.querySelector('.smoke-pets').addEventListener('click', () => {
        if (!prop.smoke) {
          alert('¡Atención! No se permite fumar en esta propiedad.');
        }
        if (!prop.pets) {
          alert('¡Atención! No se permiten mascotas en esta propiedad.');
        }
      });
  
      contenedor.appendChild(div);
    });
  }
  
  // Renderizar las 3 propiedades en venta y alquiler en index.html
  document.addEventListener('DOMContentLoaded', () => {
    const listaVenta = document.getElementById('lista-venta');
    const listaAlquiler = document.getElementById('lista-alquiler');
  
    renderizarPropiedades(propiedades_venta.slice(0, 3), listaVenta);
    renderizarPropiedades(propiedades_alquiler.slice(0, 3), listaAlquiler);
  
    // Ver todas las propiedades
    document.getElementById('ver-todas-venta').addEventListener('click', () => {
      window.location.href = 'propiedades_venta.html';
    });
  
    document.getElementById('ver-todas-alquiler').addEventListener('click', () => {
      window.location.href = 'propiedades_alquiler.html';
    });
  });
  
  // Renderizar todas las propiedades en las páginas de venta y alquiler
  if (window.location.pathname === '/propiedades_venta.html') {
    const listaVentaCompleta = document.getElementById('lista-venta-completa');
    renderizarPropiedades(propiedades_venta, listaVentaCompleta);
  } else if (window.location.pathname === '/propiedades_alquiler.html') {
    const listaAlquilerCompleta = document.getElementById('lista-alquiler-completa');
    renderizarPropiedades(propiedades_alquiler, listaAlquilerCompleta);
  }
  