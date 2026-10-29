// ========== MENSAJES DE LOS GLOBITOS ==========
const mensajes = {
    1: {
        texto: " 🎂 Feliz cumple chiquita, te deseo lo mejor del mundo y que la pases increible. Te quiero muchísimoo!",
        imagen: "imagenes/imagen1.jpg"
    },
    2: {
        texto: "💖Cada momento contigo es un goce. Gracias por existir y hacer mi vida más bonita con los dias que pasan✨",
        imagen: "imagenes/imagen2.jpg"
    },
    3: {
        texto: "🎉 Hoy celebramos tu vida, tu alegría y todo lo maravilloso que eres. ¡Feliz cumpleaños Milary <3!",
        imagen: "imagenes/imagen3.jpg"
    },
    4: {
        texto: "✨ Que todos tus sueños se hagan realidad este año y lo que te propongas lo logres. Te mereces todo lo bonito del mundoo, te amamos con neguito <3.",
        imagen: "imagenes/imagen4.jpg"
    },
    5: {
        texto: "🎂 Se te quiere demasiado aunque hagas tonteras igual se te quiere jaja. Sigue siendo como eres, que eso te hace unica <3",
        imagen: "imagenes/imagen5.jpg"
    }
};

// ========== FUNCIONES DEL MODAL (Página 1) ==========
function abrirMensaje(numero) {
    const modal = document.getElementById('modalOverlay');
    const texto = document.getElementById('modalTexto');
    const imagen = document.getElementById('modalImagen');
    
    if (modal && texto && imagen) {
        const mensaje = mensajes[numero];
        texto.textContent = mensaje.texto;
        imagen.src = mensaje.imagen;
        modal.classList.add('activo');
    }
}

function cerrarMensaje() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.classList.remove('activo');
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarMensaje();
    }
});

// ========== CONTROL DE AUDIO ==========
let audioReproduciendo = false;

function toggleAudio() {
    const audio = document.getElementById('audioCumple');
    const boton = document.getElementById('btnAudio');
    
    if (!audio) return;
    
    if (!audioReproduciendo) {
        audio.volume = 0.5;
        audio.play();
        boton.innerHTML = '⏸️ Pausar música';
        audioReproduciendo = true;
    } else {
        audio.pause();
        boton.innerHTML = '▶ Aplasta Aqui';
        audioReproduciendo = false;
    }
}

// ========== FUNCIÓN PRINCIPAL: REPRODUCIR Y SEGUIR ==========
function reproducirYSeguir() {
    const audio = document.getElementById('audioCumple');
    const modalBienvenida = document.getElementById('modalBienvenida');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');
    const audioControl = document.getElementById('audioControl');
    
    if (audio) {
        audio.volume = 0.5;
        audio.play();
        audioReproduciendo = true;
    }
    
    // Ocultar la ventanita con animación
    modalBienvenida.style.transition = 'opacity 0.5s ease';
    modalBienvenida.style.opacity = '0';
    
    setTimeout(() => {
        modalBienvenida.style.display = 'none';
        
        // Mostrar el contenido principal
        contenidoPrincipal.style.display = 'block';
        contenidoPrincipal.classList.add('visible');
        
        // Mostrar el control de audio (pausar/reproducir)
        audioControl.style.display = 'block';
    }, 500);
}

// ========== SOPAR VELA ==========
function soplarVela() {
    const fuego = document.getElementById('fuego');
    const mensaje = document.getElementById('mensajeSecreto');
    const boton = document.querySelector('.boton-soplar');
    
    if (fuego) {
        fuego.classList.add('apagado');
    }
    
    if (mensaje) {
        mensaje.classList.add('visible');
    }
    
    if (boton) {
        boton.textContent = '¡Feliz Cumpleaños! 🎉';
        boton.disabled = true;
        boton.style.opacity = '0.7';
    }
    
    crearConfeti();
}

function crearConfeti() {
    const colores = ['#ff6b9d', '#ffd700', '#764ba2', '#667eea', '#f093fb'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.position = 'fixed';
            confeti.style.width = '10px';
            confeti.style.height = '10px';
            confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            confeti.style.left = Math.random() * 100 + '%';
            confeti.style.top = '-10px';
            confeti.style.borderRadius = '50%';
            confeti.style.pointerEvents = 'none';
            confeti.style.zIndex = '1000';
            
            document.body.appendChild(confeti);
            
            const duracion = Math.random() * 3 + 2;
            confeti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(720deg)`, opacity: 0 }
            ], {
                duration: duracion * 1000,
                easing: 'ease-out'
            });
            
            setTimeout(() => confeti.remove(), duracion * 1000);
        }, i * 50);
    }
}