(() => {
  const ID = 'simulation-notice-es';
  function ensureNotice() {
    if (!document.body) return;
    document.documentElement.lang = 'es';
    if (!document.getElementById('simulation-notice-es-style')) {
      const style = document.createElement('style');
      style.id = 'simulation-notice-es-style';
      style.textContent = `
        :root { --simulation-notice-height: 92px; }
        body { padding-top: var(--simulation-notice-height) !important; }
        #simulation-notice-es { position:fixed; top:0; left:0; right:0; z-index:2147483647;
          box-sizing:border-box; padding:10px 14px; background:#211837; color:#fff;
          border-bottom:2px solid #ab58f4; text-align:center; font:13px/1.45 Inter,Arial,sans-serif;
          box-shadow:0 2px 12px #0006; }
        #simulation-notice-es strong { display:block; font-weight:800; color:#f2dcff; }
        #simulation-notice-es span { display:block; max-width:1100px; margin:auto; }
        .simulation-payment-notice { background:#211837; border:1px solid #ab58f4; border-radius:12px;
          color:#fff; padding:14px; margin:16px 0; font-size:14px; line-height:1.55; text-align:center; }
        .stalkea-ext-overlay { top:var(--simulation-notice-height) !important; }
        .cta-timer-bar { top:var(--simulation-notice-height) !important; }
      `;
      document.head.appendChild(style);
    }
    let notice = document.getElementById(ID);
    if (!notice) {
      notice = document.createElement('aside');
      notice.id = ID;
      notice.setAttribute('role','note');
      notice.setAttribute('aria-label','Aviso de simulación');
      const title = document.createElement('strong');
      title.textContent = 'SOLO SIMULACIÓN · ENTRETENIMIENTO';
      const text = document.createElement('span');
      text.textContent = 'Los mensajes, medios privados y ubicaciones mostrados son ficticios. No se descifran contraseñas ni se accede a cuentas ajenas. La compra solo ofrece acceso a la simulación; no se envían avisos a otros perfiles.';
      notice.append(title,text);
      document.body.prepend(notice);
    }
    const height = Math.ceil(notice.getBoundingClientRect().height) + 'px';
    if (document.documentElement.style.getPropertyValue('--simulation-notice-height') !== height)
      document.documentElement.style.setProperty('--simulation-notice-height', height);
  }
  const start = () => {
    ensureNotice();
    new MutationObserver(ensureNotice).observe(document.documentElement,{childList:true,subtree:true});
    window.addEventListener('resize',ensureNotice);
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded',start,{once:true}) : start();
})();
