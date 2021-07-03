import React, { createRef, useLayoutEffect } from "react"

const src = "https://utteranc.es/client.js"

export interface IUtterancesProps {
  repo?: string
  theme?: string
}

const Utterances: React.FC<IUtterancesProps> = React.memo(
  ({ repo = "kyujonglee/klog", theme = "github-light" }) => {
    const containerRef = createRef<HTMLDivElement>()

    useLayoutEffect(() => {
      const utterances = document.createElement("script")

      const attributes = {
        src,
        repo,
        theme,
        "issue-term": "pathname",
        label: "✨💬 comments ✨",
        crossOrigin: "anonymous",
        async: "true",
      }

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value)
      })

      containerRef.current?.appendChild(utterances)
    }, [repo, theme])

    return <div ref={containerRef} />
  }
)

Utterances.displayName = "Utterances"

export default Utterances
