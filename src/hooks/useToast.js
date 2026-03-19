import { useState, useCallback } from 'react'

/**
 * useToast — lightweight notification system.
 * Returns { toast, showToast } where toast is the current notification or null.
 */
export function useToast(duration = 2800) {
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), duration)
  }, [duration])

  return { toast, showToast }
}
