"use client"

import { useEffect } from 'react'

function rippleEffect(event: MouseEvent, htmlElementId: string) {
  const target = document.getElementById(htmlElementId) as HTMLElement

  const circle = document.createElement('span')
  const diameter = Math.max(target.clientWidth, target.clientHeight)
  const radius = diameter / 2

  const targetRect = target.getBoundingClientRect()

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - (targetRect.left + radius)}px`
  circle.style.top = `${event.clientY - (targetRect.top + radius)}px`
  circle.classList.add('ripple')

  const ripple = target.getElementsByClassName('ripple')[0]

  if (ripple) {
    ripple.remove()
  }

  target.appendChild(circle)
}

export function useRippleEffect(htmlElementId: string | undefined) {
  useEffect(() => {
    if (!htmlElementId) return

    const htmlElement = document.getElementById(htmlElementId)
    if (!htmlElement) return

    const handleClick = (event: MouseEvent) => {
      rippleEffect(event, htmlElementId)
    }

    htmlElement.addEventListener('click', handleClick)

    // Cleanup function to remove event listener
    return () => {
      htmlElement.removeEventListener('click', handleClick)
    }
  }, [htmlElementId])
}
