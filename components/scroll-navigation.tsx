"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItem {
  id: string
  label: string
  isActive?: boolean
}

interface ScrollNavigationProps {
  items: NavigationItem[]
  onItemClick?: (item: NavigationItem) => void
}

export function ScrollNavigation({ items, onItemClick }: ScrollNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current
    if (!container) return

    // Check if we can scroll left
    setShowLeftArrow(container.scrollLeft > 0)

    // Check if we can scroll right
    const canScrollRight = container.scrollWidth > container.clientWidth + container.scrollLeft
    setShowRightArrow(canScrollRight)
  }

  useEffect(() => {
    checkScrollPosition()
    window.addEventListener("resize", checkScrollPosition)
    return () => window.removeEventListener("resize", checkScrollPosition)
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 200 // Adjust as needed
    const newScrollLeft =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })

    // Update arrow visibility after scrolling
    setTimeout(checkScrollPosition, 300)
  }

  const handleItemClick = (item: NavigationItem) => {
    onItemClick?.(item)
  }

  return (
    <div className="relative w-full">
      {/* Left scroll button */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center h-8 w-8 bg-white/80 rounded-full shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-orange-500" />
        </button>
      )}

      {/* Navigation items */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onScroll={checkScrollPosition}
      >
        <div className="flex min-w-max">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={cn(
                "px-6 py-4 whitespace-nowrap relative",
                item.isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-700",
              )}
            >
              {item.label}
              {item.isActive && <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />}
            </button>
          ))}
        </div>
      </div>

      {/* Right scroll button */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center h-8 w-8 bg-white/80 rounded-full shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-orange-500" />
        </button>
      )}
    </div>
  )
}

