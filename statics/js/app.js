/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#00B259',
    color_random: false,
    shape: 'edge', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 0.4,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.02,
        sync: true
      }
    },
    size: 1,
    size_random: false,
    nb: 50,
    line_linked: {
      enable_auto: true,
      distance: 400,
      color: '#2FB621',
      opacity: 0.3,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 1800,
        rotateY: 5500
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 150
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" or false
    line_linked: {
      opacity: 0.13
    },
    events: {
      onclick: {
        enable: false,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 640 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
