function initCustomCursor() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
    return;
  }

  const dot = document.createElement("div");
  const ring = document.createElement("div");

  dot.className = "cursor-dot";
  ring.className = "cursor-ring";

  document.body.append(dot, ring);
  document.body.classList.add("has-custom-cursor");

  const state = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
    visible: false,
  };

  const updateVisibility = () => {
    const opacity = state.visible ? "1" : "0";
    dot.style.opacity = opacity;
    ring.style.opacity = opacity;
  };

  const render = () => {
    state.ringX += (state.x - state.ringX) * 0.16;
    state.ringY += (state.y - state.ringY) * 0.16;

    dot.style.transform = `translate3d(${state.x - 4}px, ${state.y - 4}px, 0)`;
    ring.style.transform = `translate3d(${state.ringX - 17}px, ${state.ringY - 17}px, 0)`;

    window.requestAnimationFrame(render);
  };

  document.addEventListener("mousemove", (event) => {
    state.x = event.clientX;
    state.y = event.clientY;
    state.visible = true;
    updateVisibility();
  });

  document.addEventListener("mouseenter", () => {
    state.visible = true;
    updateVisibility();
  });

  document.addEventListener("mouseleave", () => {
    state.visible = false;
    updateVisibility();
  });

  document.addEventListener("mousedown", () => {
    ring.classList.add("is-active");
  });

  document.addEventListener("mouseup", () => {
    ring.classList.remove("is-active");
  });

  document.addEventListener("mouseover", (event) => {
    if (event.target.closest("a, button, input, textarea, select, label")) {
      ring.classList.add("is-active");
    }
  });

  document.addEventListener("mouseout", (event) => {
    if (event.target.closest("a, button, input, textarea, select, label")) {
      ring.classList.remove("is-active");
    }
  });

  window.addEventListener("blur", () => {
    state.visible = false;
    updateVisibility();
  });

  updateVisibility();
  window.requestAnimationFrame(render);
}

document.addEventListener("DOMContentLoaded", initCustomCursor);
