const throttle = (func, delay) => {
  let throttled = false
  return (...args) => {
    if (!throttled) {
      throttled = true
      const ms = delay
      const old = performance.now()
      let curr
      const runner = () => {
        curr = performance.now()
        if (curr - old > ms) {
          func(...args)
          throttled = false
        } else {
          requestAnimationFrame(runner)
        }
      }
      requestAnimationFrame(runner)
    }
  }
}

export default throttle
