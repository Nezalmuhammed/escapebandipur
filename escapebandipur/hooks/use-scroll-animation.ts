"use client"

import type React from "react"

import { useEffect, useRef, useCallback } from "react"

let globalObserver: IntersectionObserver | null = null
const observedElements = new Set<Element>()

function getGlobalObserver(): IntersectionObserver {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // Unobserve after animation to save resources
            globalObserver?.unobserve(entry.target)
            observedElements.delete(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )
  }
  return globalObserver
}

export function useScrollAnimation() {
  const elementsRef = useRef<Element[]>([])

  const observe = useCallback((element: Element | null) => {
    if (element && !observedElements.has(element)) {
      observedElements.add(element)
      elementsRef.current.push(element)
      getGlobalObserver().observe(element)
    }
  }, [])

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      elementsRef.current.forEach((el) => {
        globalObserver?.unobserve(el)
        observedElements.delete(el)
      })
    }
  }, [])

  return { observe }
}

export function useAutoScrollAnimation(containerRef: React.RefObject<HTMLElement>, selector = ".scroll-fade-in") {
  useEffect(() => {
    if (!containerRef.current) return

    const observer = getGlobalObserver()
    const elements = containerRef.current.querySelectorAll(selector)

    elements.forEach((el) => {
      if (!observedElements.has(el)) {
        observedElements.add(el)
        observer.observe(el)
      }
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
        observedElements.delete(el)
      })
    }
  }, [containerRef, selector])
}
