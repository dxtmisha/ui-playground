function m(r, f, i) {
  requestAnimationFrame(() => {
    r(), f != null && f() ? m(r, f, i) : i == null || i();
  });
}
export {
  m as f
};
