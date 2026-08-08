function debounce(fn, args) {
  let inDebounce;
  return function () {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      fn.apply(this, args);
    });
  };
};