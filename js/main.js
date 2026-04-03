const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setActiveNav() {
  const currentPage = document.body.dataset.page;
  const navLinks = document.querySelectorAll("[data-page-link]");

  navLinks.forEach((link) => {
    const isActive = link.dataset.pageLink === currentPage;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!toggle || !nav) {
    return;
  }

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      closeNav();
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}

function initReveals() {
  const revealNodes = document.querySelectorAll(".reveal");

  if (!revealNodes.length) {
    return;
  }

  revealNodes.forEach((node) => {
    const delay = Number(node.dataset.delay || 0);
    node.style.setProperty("--delay", `${delay}ms`);
  });

  if (prefersReducedMotion) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function formatNumber(value, decimals) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function renderCounterValue(counter, value, decimals) {
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  return `${prefix}${formatNumber(value, decimals)}${suffix}`;
}

function animateCounter(counter) {
  if (counter.dataset.counted === "true") {
    return;
  }

  counter.dataset.counted = "true";

  const target = Number(counter.dataset.counter || 0);
  const decimals = Number(counter.dataset.decimals || (Number.isInteger(target) ? 0 : 1));
  const duration = 1500;

  if (prefersReducedMotion) {
    counter.textContent = renderCounterValue(counter, target, decimals);
    return;
  }

  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;

    counter.textContent = renderCounterValue(counter, value, decimals);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    } else {
      counter.textContent = renderCounterValue(counter, target, decimals);
    }
  };

  window.requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  if (!counters.length) {
    return;
  }

  if (prefersReducedMotion) {
    counters.forEach((counter) => animateCounter(counter));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.4,
    }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initPageReady() {
  window.requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
}

function initGmailComposeForm() {
  const form = document.querySelector("[data-gmail-compose]");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const to = form.dataset.gmailCompose;
    const name = form.querySelector("#name")?.value.trim() || "";
    const email = form.querySelector("#email")?.value.trim() || "";
    const subject = form.querySelector("#subject")?.value.trim() || "";
    const message = form.querySelector("#message")?.value.trim() || "";
    const formattedSubject = name ? `${subject} - ${name}` : subject;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ];

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("tf", "1");
    gmailUrl.searchParams.set("to", to);
    gmailUrl.searchParams.set("su", formattedSubject);
    gmailUrl.searchParams.set("body", bodyLines.join("\n"));

    const gmailWindow = window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");

    if (gmailWindow) {
      gmailWindow.opener = null;
      form.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initMobileNav();
  initSmoothScroll();
  initReveals();
  initCounters();
  initGmailComposeForm();
  initPageReady();
});
