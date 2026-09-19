// Shared by site/join/index.html and site/404.html (GitHub Pages' catch-all
// for /join/CODE, since Pages doesn't rewrite paths). Reads the invite code
// out of the URL and wires up the "Open in the app" fallback button.
// Mirrors the regex in src/lib/links.ts (parseJoinCode) — keep in sync.
(function () {
  // Links are /join/?code=CODE (a real 200 on GitHub Pages); the older
  // /join/CODE form still lands on 404.html and is parsed from the path.
  var q = location.search.match(/[?&]code=([A-Za-z0-9]{6})/i);
  var match = q || location.pathname.match(/\/join\/([A-Za-z0-9]{6})(?:[/?#].*)?$/i);
  var code = match ? match[1].toUpperCase() : null;

  var codeRow = document.getElementById("code-row");
  var codeEl = document.getElementById("code");
  var openBtn = document.getElementById("open-btn");

  if (code) {
    codeEl.textContent = code;
    openBtn.href = "punishmenthq://join/" + code;
  } else if (codeRow) {
    codeRow.style.display = "none";
    openBtn.href = "punishmenthq://join/";
  }
})();
