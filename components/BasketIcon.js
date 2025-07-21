import { useState } from 'react'

export default function BasketIcon() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="basket-button"
        aria-label="Shopping basket"
        onClick={() => setOpen(!open)}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M7 4h-2l-3 7v2h2l3-7h10l3 7h2v-2l-3-7h-2l-3-4h-4l-3 4zM4 14h16v8h-16v-8z" fill="currentColor"/>
        </svg>
      </button>
      {open && (
        <div className="basket">
          <p>Your basket is empty.</p>
        </div>
      )}
    </>
  )
}
