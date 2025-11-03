(function () {
  try {
    // Safely detect top-level `frames` from frames.js without throwing if undefined
    if (typeof frames !== 'undefined' && Array.isArray(frames)) {
      // Avoid clobbering window.frames (built-in). Use a namespaced global instead.
      window.__ASCII_FRAMES__ = frames;
    }
  } catch (e) {
    // no-op
  }
})();


