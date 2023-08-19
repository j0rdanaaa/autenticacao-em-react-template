import React from 'react'
import { useProtectedpage } from '../../hooks/useProtectedPage'

export default function DetalhesPost() {

  useProtectedpage()
  return (
    <div>DetalhesPost</div>
  )
}
