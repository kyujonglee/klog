import { useRef, useCallback, useEffect } from "react"

const handleDirection = name => {
  switch (name) {
    case "up":
      return "translate3d(0, 30%, 0)"
    case "down":
      return "translate3d(0, -30%, 0)"
    case "left":
      return "translate3d(30%, 0, 0)"
    case "right":
      return "translate3d(-30%, 0, 0)"
    default:
      return
  }
}

interface UseScrollFadeInProps {
  direction?: string
  delay?: string | number
  duration?: string | number
  threshold?: number
}

const defaultProps = {
  direction: "up",
  delay: "0",
  duration: "0.3",
  threshold: 0.7,
}

const useScrollFadeIn = <T extends HTMLElement>({
  direction = "up",
  delay = "0",
  duration = "0.3",
  threshold = 0.7,
}: UseScrollFadeInProps = defaultProps) => {
  const dom = useRef<T>()

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom

      if (current && entry.isIntersecting) {
        current.style.cssText = `
        transition: all ${duration}s linear ${delay}s;
        opacity: 1;
        transform: translate3d(0, 0, 0);
        `
      }
    },
    [duration, delay]
  )

  useEffect(() => {
    let observer
    const { current } = dom

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold })
      observer.observe(current)

      return () => observer && observer.disconnect()
    }
  }, [handleScroll, threshold])

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  }
}

export default useScrollFadeIn
