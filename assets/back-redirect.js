const BF_TAPE = "<div class=\"bf-tape b\"><b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> </div><div class=\"bf-tape\"><b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> <b>BLACK</b> FRIDAY <i>●</i> </div>";
const BF_BADGE = "<svg class=\"bf-badge\" viewBox=\"0 0 120 120\" aria-label=\"Black Friday\"><defs><linearGradient id=\"bfr\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ff4040\"/><stop offset=\"1\" stop-color=\"#a30000\"/></linearGradient><linearGradient id=\"bfd\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2b2b2b\"/><stop offset=\"1\" stop-color=\"#050505\"/></linearGradient></defs><polygon points=\"60.0,2.0 72.4,22.0 94.1,13.1 92.4,36.5 115.2,42.1 100.0,60.0 115.2,77.9 92.4,83.5 94.1,106.9 72.4,98.0 60.0,118.0 47.6,98.0 25.9,106.9 27.6,83.5 4.8,77.9 20.0,60.0 4.8,42.1 27.6,36.5 25.9,13.1 47.6,22.0\" fill=\"url(#bfr)\"/><polygon points=\"60.0,12.0 70.2,28.6 88.2,21.2 86.7,40.6 105.7,45.2 93.0,60.0 105.7,74.8 86.7,79.4 88.2,98.8 70.2,91.4 60.0,108.0 49.8,91.4 31.8,98.8 33.3,79.4 14.3,74.8 27.0,60.0 14.3,45.2 33.3,40.6 31.8,21.2 49.8,28.6\" fill=\"url(#bfd)\"/><g font-family=\"Arial Black,Impact,sans-serif\" font-weight=\"900\" font-size=\"21\" text-anchor=\"middle\" transform=\"rotate(-8 60 60)\"><text x=\"60\" y=\"56\" fill=\"#000\" stroke=\"#000\" stroke-width=\"4\" stroke-linejoin=\"round\">BLACK</text><text x=\"60\" y=\"56\" fill=\"#fff\">BLACK</text><text x=\"60\" y=\"80\" fill=\"#000\" stroke=\"#000\" stroke-width=\"4\" stroke-linejoin=\"round\">FRIDAY</text><text x=\"60\" y=\"80\" fill=\"#fff\">FRIDAY</text></g></svg>";
import {
  BACK_REDIRECT_STORAGE_KEYS,
  buildCheckoutUrl,
  getCameraFrameVariant,
  getDefaultProfilePhoto,
  getInitialBackRedirectStage,
  proxifyMonitoredProfilePhoto,
  readMonitoredProfile,
} from "./back-redirect-helpers.js?v=20260803-01";

const LOGO_SRC = "/images/logos/logo-vert-transparente.png";
const CHECKOUT_URL = "https://go.perfectpay.com.br/PPU38CQHBSC";
const GENERIC_CAMERA_FALLBACK_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 600'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop stop-color='%23170d31'/%3E%3Cstop offset='1' stop-color='%23301a57'/%3E%3C/linearGradient%3E%3CradialGradient id='glow' cx='50%25' cy='28%25' r='60%25'%3E%3Cstop stop-color='%23ab58f4' stop-opacity='.52'/%3E%3Cstop offset='1' stop-color='%23ab58f4' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='480' height='600' rx='48' fill='url(%23bg)'/%3E%3Crect width='480' height='600' rx='48' fill='url(%23glow)'/%3E%3Ccircle cx='240' cy='220' r='82' fill='%23f1d8f8' fill-opacity='.95'/%3E%3Cpath d='M112 476c26-84 77-129 128-129s102 45 128 129' fill='%23f1d8f8' fill-opacity='.95'/%3E%3Ccircle cx='240' cy='220' r='118' fill='none' stroke='%239a5cff' stroke-width='10' stroke-opacity='.88'/%3E%3C/svg%3E";

const ICONS = {
  lock: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2.5"></rect>
      <path d="M8 11V8a4 4 0 1 1 8 0v3"></path>
    </svg>
  `,
  alert: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10.3 3.8 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"></path>
      <path d="M12 8.5v5"></path>
      <circle cx="12" cy="16.6" r="1"></circle>
    </svg>
  `,
  camera: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 7h3l2-2h6l2 2h3v12H4z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  `,
};

const app = document.querySelector("[data-back-redirect-root]");

if (!app) {
  throw new Error("Back redirect root element was not found.");
}

const initialSelfieDataUrl = readSavedSelfie();

const state = {
  stage: getInitialBackRedirectStage(initialSelfieDataUrl),
  cameraStatus: "idle",
  cameraError: "",
  stream: null,
  captureDelayTimer: null,
  hasRequestedCamera: false,
  cameraDenied: false,
  monitoredProfile: readMonitoredProfile(window.localStorage),
  selfieDataUrl: initialSelfieDataUrl,
};

syncProfileAliases(state.monitoredProfile);

app.addEventListener("click", handleClick);
window.addEventListener("beforeunload", stopActiveStream);

render();

function handleClick(event) {
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) {
    return;
  }

  const { action } = actionEl.dataset;

  switch (action) {
    case "go-to-cta": {
      const checkoutUrl = buildCheckoutUrl(
        CHECKOUT_URL,
        window.location.search,
      );
      let redirected = false;
      const goToCheckout = () => {
        if (redirected) {
          return;
        }
        redirected = true;
        window.location.href = checkoutUrl;
      };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pre_checkout_front",
        eventCallback: goToCheckout,
        eventTimeout: 2000,
      });
      setTimeout(goToCheckout, 400);
      break;
    }
    default:
      break;
  }
}

async function requestCamera() {
  stopActiveStream();

  state.stage = "camera";
  state.hasRequestedCamera = true;
  state.cameraStatus = "requesting";
  state.cameraError = "";
  state.cameraDenied = false;
  render();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    fallbackToGenericSelfie();
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 1080 },
        height: { ideal: 1440 },
      },
      audio: false,
    });

    state.stream = stream;
    state.cameraStatus = "streaming";
    state.cameraDenied = false;
    render();
  } catch {
    fallbackToGenericSelfie();
  }
}

function fallbackToGenericSelfie() {
  state.stream = null;
  state.stage = "identified";
  state.cameraStatus = "captured";
  state.cameraError = "";
  state.cameraDenied = true;
  state.selfieDataUrl = GENERIC_CAMERA_FALLBACK_SRC;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function captureSelfie() {
  const video = app.querySelector("[data-camera-video]");

  if (!video || !state.stream) {
    fallbackToGenericSelfie();
    return;
  }

  const width = video.videoWidth || 720;
  const height = video.videoHeight || 960;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) {
    fallbackToGenericSelfie();
    return;
  }

  context.drawImage(video, 0, 0, width, height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.92);

  try {
    window.localStorage.setItem(BACK_REDIRECT_STORAGE_KEYS.selfie, dataUrl);
    window.localStorage.setItem(
      BACK_REDIRECT_STORAGE_KEYS.selfieTakenAt,
      String(Date.now()),
    );
  } catch {
    fallbackToGenericSelfie();
    return;
  }

  state.selfieDataUrl = dataUrl;
  state.stage = "identified";
  state.cameraStatus = "captured";
  state.cameraError = "";
  stopActiveStream();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stopActiveStream() {
  if (!state.stream) {
    return;
  }

  if (state.captureDelayTimer) {
    window.clearTimeout(state.captureDelayTimer);
    state.captureDelayTimer = null;
  }

  for (const track of state.stream.getTracks()) {
    track.stop();
  }

  state.stream = null;
}

function render() {
  app.innerHTML = `
    <main class="back-redirect-page">
      <div class="back-redirect-shell">
        <header class="back-redirect-header">
          <img class="back-redirect-logo" src="${LOGO_SRC}" alt="Stalker bub." />
          <div class="back-redirect-badge">Demostración de aviso ficticio</div>
        </header>
        <div class="back-redirect-stack">
          ${renderStage()}
        </div>
      </div>
    </main>
  `;

  if (state.stage === "camera" && state.stream) {
    queueMicrotask(attachStreamToVideo);
  } else if (
    state.stage === "camera" &&
    state.cameraStatus === "idle" &&
    !state.hasRequestedCamera
  ) {
    queueMicrotask(requestCamera);
  }
}

function renderStage() {
  switch (state.stage) {
    case "camera":
      return `${renderMainWarningCard()}${renderCameraCard()}`;
    case "identified":
      return `
        ${renderMainWarningCard()}
        ${renderIdentifiedCard()}
        ${renderMetricsCard()}
        ${renderOfferCard()}
        ${renderEvidenceCard()}
        ${renderDecisionCard()}
        ${renderFinalCtaCard()}
        ${renderRiskCard()}
      `;
    default:
      return renderCameraStage();
  }
}

function renderCameraStage() {
  return `
    ${renderAutoVerificationCard()}
    ${renderMainWarningCard()}
    ${renderCameraCard()}
  `;
}

function renderAutoVerificationCard() {
  return `
    <section class="back-redirect-card back-redirect-card--danger">
      <div class="back-redirect-card__content">
        <div class="back-redirect-icon">${ICONS.lock}</div>
        <p class="back-redirect-eyebrow">Demostración del dispositivo</p>
        <h1 class="back-redirect-title">Demostración opcional de la cámara</h1>
        <p class="back-redirect-subtitle">
          Esta es una demostración de cámara. No hay vigilancia real ni avisos enviados a otras personas.
        </p>
        <div class="back-redirect-note">
          Puedes rechazar el permiso de cámara; se mostrará una imagen genérica. No es necesario pagar para evitar avisos.
        </div>
        <div class="back-redirect-status">
          <span class="back-redirect-spinner" aria-hidden="true"></span>
          <span>Espera... preparando la demostración</span>
        </div>
      </div>
    </section>
  `;
}

function renderMainWarningCard() {
  const subject = state.monitoredProfile.hasUsername
    ? state.monitoredProfile.handle
    : "EL PERFIL DEL ESCENARIO";

  return `
    <section class="back-redirect-card back-redirect-card--danger">
      <div class="back-redirect-card__content">
        <div class="back-redirect-icon">${ICONS.alert}</div>
        <h2 class="back-redirect-title">
          ${subject}: ESCENARIO FICTICIO, NO SE ENVIARÁ NINGÚN AVISO
        </h2>
        <div class="back-redirect-inline-badge">Simulación</div>
        <p class="back-redirect-subtitle">
          La versión gratuita muestra una simulación. El perfil representado no recibe ninguna notificación.
        </p>
        <p class="back-redirect-subtitle">
          La compra es opcional y ofrece únicamente acceso a la simulación completa. No impide notificaciones ni permite vigilar personas.
        </p>
        <div class="back-redirect-highlight-list">
          <div class="back-redirect-highlight">
            Explora el contenido ficticio de la simulación. No se accede a cuentas ajenas.
          </div>
          <div class="back-redirect-highlight">
            Explora DMs, historias, fotos y ubicaciones ficticias de demostración.
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCameraCard() {
  return `
    <section class="back-redirect-card">
      <div class="back-redirect-card__content">
        <div class="back-redirect-icon">${ICONS.camera}</div>
        <p class="back-redirect-eyebrow">Captura opcional para la demostración</p>
        <h2 class="back-redirect-title">Prueba la cámara en este dispositivo</h2>
        <p class="back-redirect-subtitle">
          Si aceptas el permiso, la cámara tomará una foto para mostrarla localmente en esta demostración. No se envía a ningún perfil. Puedes rechazar el permiso.
        </p>
        <div class="back-redirect-camera-frame">
          ${renderCameraFrame()}
        </div>
        <div class="back-redirect-camera-help">
          <div class="back-redirect-chip">
            Si aceptas el permiso, centra el rostro. La cámara se inicia automáticamente para esta demostración.
          </div>
          <div class="back-redirect-chip">
            La imagen se capturará automáticamente y se mostrará aquí, sin una pantalla de confirmación. Se guarda solo en este navegador.
          </div>
        </div>
        ${state.cameraError && !state.cameraDenied ? `<div class="back-redirect-error">${state.cameraError}</div>` : ""}
      </div>
    </section>
  `;
}

function renderCameraFrame() {
  const frameVariant = getCameraFrameVariant(
    state.cameraStatus,
    state.cameraDenied,
  );

  if (frameVariant === "requesting") {
    return `
      <div class="back-redirect-camera-placeholder">
        <div>
          <div class="back-redirect-status">
            <span class="back-redirect-spinner" aria-hidden="true"></span>
            <span>Solicitando permiso para la cámara...</span>
          </div>
        </div>
      </div>
    `;
  }

  if (frameVariant === "streaming") {
    return `
      <video
        class="back-redirect-camera-video"
        data-camera-video
        autoplay
        muted
        playsinline
      ></video>
      <div class="back-redirect-camera-overlay">
        <div class="back-redirect-status back-redirect-status--overlay">
          <span class="back-redirect-spinner" aria-hidden="true"></span>
          <span>Capturando automáticamente para la demostración...</span>
        </div>
      </div>
    `;
  }

  if (frameVariant === "generic") {
    return `
      <img
        class="back-redirect-camera-image"
        src="${GENERIC_CAMERA_FALLBACK_SRC}"
        alt="Imagen genérica de demostración"
      />
      <div class="back-redirect-camera-overlay">
        <div class="back-redirect-status back-redirect-status--overlay">
          <span>Permiso de cámara rechazado. Se utiliza una imagen genérica de demostración.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="back-redirect-camera-placeholder">
      <div>Esperando el permiso del navegador. Si lo rechazas, se utiliza una imagen genérica de demostración.</div>
    </div>
  `;
}

function renderIdentifiedCard() {
  return `
    <section class="back-redirect-card back-redirect-card--danger">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">DEMOSTRACIÓN: IMAGEN LOCAL DEL DISPOSITIVO</p>
        <div class="back-redirect-compare">
          <div class="back-redirect-compare-user">
            <img
              class="back-redirect-avatar back-redirect-avatar--danger"
              src="${state.selfieDataUrl}"
              alt="Tu foto capturada para la demostración"
            />
            <span class="back-redirect-avatar-label">Tu foto de demostración</span>
            <span class="back-redirect-avatar-name">Demostración de este dispositivo</span>
          </div>
          <span class="back-redirect-arrow" aria-hidden="true">&rarr;</span>
          <div class="back-redirect-compare-user">
            <img
              class="back-redirect-avatar back-redirect-avatar--danger"
              src="${proxifyMonitoredProfilePhoto(state.monitoredProfile.photoUrl) || getDefaultProfilePhoto()}"
              alt="${state.monitoredProfile.handle}"
            />
            <span class="back-redirect-avatar-label">Perfil del escenario ficticio</span>
            <span class="back-redirect-avatar-name">${state.monitoredProfile.displayName}</span>
            <span class="back-redirect-avatar-label">${state.monitoredProfile.handle}</span>
          </div>
        </div>
        <div class="back-redirect-alert-box">
          Esta foto solo se muestra en la demostración local de este navegador. No se envía al perfil ni se utiliza como prueba de acceso a datos privados.
        </div>
        <div class="back-redirect-alert-box back-redirect-alert-box--emphasis">
          IMPORTANTE: No se envía esta foto a otras personas. No necesitas comprar nada para impedir su envío.
        </div>
      </div>
    </section>
  `;
}

function renderMetricsCard() {
  return `
    <section class="back-redirect-card">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">Resultados ficticios de la demostración</p>
        <div class="back-redirect-metrics">
          <article class="back-redirect-metric">
            <div class="back-redirect-metric-icon">💬</div>
            <div class="back-redirect-metric-label">Mensajes ficticios</div>
            <span class="back-redirect-metric-value">47</span>
            <div class="back-redirect-metric-detail">conversaciones ficticias del escenario</div>
          </article>
          <article class="back-redirect-metric">
            <div class="back-redirect-metric-icon">🖼️</div>
            <div class="back-redirect-metric-label">Fotos de demostración</div>
            <span class="back-redirect-metric-value">23</span>
            <div class="back-redirect-metric-detail">imágenes y clips ficticios</div>
          </article>
          <article class="back-redirect-metric">
            <div class="back-redirect-metric-icon">📍</div>
            <div class="back-redirect-metric-label">Ubicaciones ficticias</div>
            <span class="back-redirect-metric-value">2</span>
            <div class="back-redirect-metric-detail">lugares de ejemplo</div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderOfferCard() {
  return `
    <section class="back-redirect-card back-redirect-card--success bf-section"><div class="bf-tape-wrap top">${BF_TAPE}</div>
      <div class="back-redirect-card__content">
        <div class="bf-badge-box">${BF_BADGE}</div><p class="back-redirect-offer-kicker">¡Oferta especial para ti!</p>
        <p class="back-redirect-offer-sub">Descuento en el acceso a la simulación</p>
        <div class="back-redirect-pricing">
          <div class="back-redirect-pricing-old">Antes R$79,90</div>
          <div class="back-redirect-pricing-split">6x de</div>
          <div class="back-redirect-pricing-value">
            R$5,50
            <span class="back-redirect-pricing-tag">70% OFF</span>
          </div>
          <div class="back-redirect-pricing-split">o R$37,00 en un solo pago</div>
        </div>
        <p class="simulation-payment-notice">Compra opcional: solo acceso a la simulación. Sin contraseñas, mensajes, fotos privadas ni ubicaciones reales. No se envían avisos a otros perfiles.</p>
        <div class="back-redirect-button-row">
          <button class="back-redirect-button back-redirect-button--success" data-action="go-to-cta">
            SÍ, QUIERO ACCEDER A LA SIMULACIÓN
            <span class="back-redirect-button__sub">
              COMPRA SOLO LA SIMULACIÓN, SIN DATOS PRIVADOS REALES
            </span>
          </button>
        </div>
        <p class="back-redirect-offer-sub">
          Garantía de 7 días. Si no funciona, te devolvemos el 100% de tu dinero.
        </p>
      </div>
    </section>
  `;
}

function renderEvidenceCard() {
  return `
    <section class="back-redirect-card">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">
          EL ACCESO DE PAGO OFRECE ESTOS ESCENARIOS FICTICIOS. NO SON PRUEBAS REALES...
        </p>
        <div class="back-redirect-benefits">
          ${renderBenefit(
    "Acceso a DMs, historias y fotos ficticias de la simulación",
  )}
          ${renderBenefit(
    "Ubicación e historial de lugares ficticios del escenario",
  )}
          ${renderBenefit(
    "Fotos de ejemplo de la simulación, sin acceso a archivos de teléfonos ajenos",
  )}
          ${renderBenefit("Conversaciones eliminadas y audios ficticios de demostración")}
          ${renderBenefit(
    "SIMULACIÓN — No se vigila a nadie ni se accede a datos privados reales",
  )}
        </div>
      </div>
    </section>
  `;
}

function renderDecisionCard() {
  return `
    <section class="back-redirect-card">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">La decisión está en tus manos...</p>
        <p class="back-redirect-subtitle">
          Puedes continuar con la vista previa gratuita o comprar el acceso a la simulación completa. Ninguna opción vigila a personas reales.
        </p>
        <div class="back-redirect-inline-alert back-redirect-inline-alert--warning">
          <strong>ATENCIÓN:</strong> La versión gratuita no envía avisos al perfil. No necesitas pagar para evitarlos.
        </div>
        <div class="back-redirect-inline-alert back-redirect-inline-alert--danger">
          <strong>RECUERDA:</strong> No hay vigilancia real ni acceso a datos privados.
        </div>
      </div>
    </section>
  `;
}

function renderFinalCtaCard() {
  return `
    <section class="back-redirect-card back-redirect-card--warning">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">ACCESO A LA SIMULACIÓN</p>
        <h2 class="back-redirect-title">Explora la simulación completa si lo deseas</h2>
        <p class="simulation-payment-notice">Compra opcional: solo acceso a la simulación. Sin contraseñas, mensajes, fotos privadas ni ubicaciones reales. No se envían avisos a otros perfiles.</p>
        <div class="back-redirect-button-row">
          <button class="back-redirect-button back-redirect-button--success" data-action="go-to-cta">
            COMPRAR ACCESO A LA SIMULACIÓN
            <span class="back-redirect-button__sub">
              COMPRA OPCIONAL: SIN ACCESO A DATOS PRIVADOS
            </span>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderRiskCard() {
  return `
    <section class="back-redirect-card">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">AVISO FICTICIO DE DEMOSTRACIÓN</p>
        <p class="back-redirect-subtitle">
          Este es un ejemplo ficticio de aviso. No se envía al perfil, tanto si pagas como si no:
        </p>
        <div class="back-redirect-quote">
          “Ejemplo simulado de un aviso: alguien intenta acceder a una cuenta”
        </div>
        <p class="back-redirect-footer-note">
          La compra es opcional y solo ofrece acceso a la simulación.
        </p>
      </div>
    </section>
  `;
}

function renderBenefit(text) {
  return `
    <div class="back-redirect-benefit">
      <span class="back-redirect-benefit-check">✓</span>
      <span>${text}</span>
    </div>
  `;
}

function attachStreamToVideo() {
  const video = app.querySelector("[data-camera-video]");
  if (!video || !state.stream) {
    return;
  }

  video.srcObject = state.stream;
  video.play().catch(() => { });
  video.onloadedmetadata = () => {
    scheduleAutoCapture(video);
  };
}

function readSavedSelfie() {
  try {
    return window.localStorage.getItem(BACK_REDIRECT_STORAGE_KEYS.selfie) || "";
  } catch {
    return "";
  }
}

function clearSavedSelfie() {
  try {
    window.localStorage.removeItem(BACK_REDIRECT_STORAGE_KEYS.selfie);
    window.localStorage.removeItem(BACK_REDIRECT_STORAGE_KEYS.selfieTakenAt);
  } catch {
    return;
  }

  state.selfieDataUrl = "";
}

function scheduleAutoCapture(video) {
  if (!state.stream || state.captureDelayTimer || state.stage !== "camera") {
    return;
  }

  state.captureDelayTimer = window.setTimeout(() => {
    state.captureDelayTimer = null;
    captureSelfie();
  }, 1400);
}

function syncProfileAliases(profile) {
  try {
    window.localStorage.setItem(
      BACK_REDIRECT_STORAGE_KEYS.profileUsername,
      profile.username,
    );
    window.localStorage.setItem(
      BACK_REDIRECT_STORAGE_KEYS.profileName,
      profile.displayName,
    );
    window.localStorage.setItem(
      BACK_REDIRECT_STORAGE_KEYS.profilePhoto,
      profile.photoUrl || getDefaultProfilePhoto(),
    );
  } catch {
    return;
  }
}
