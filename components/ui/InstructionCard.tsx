import { ReactNode } from 'react'

interface InstructionCardProps {
  children: ReactNode
  variant?: 'green' | 'blue' | 'gray'
  className?: string
}

export default function InstructionCard({ 
  children, 
  variant = 'gray',
  className = ''
}: InstructionCardProps) {
  const variantStyles = {
    green: 'bg-green-50 border-green-200',
    blue: 'bg-blue-50 border-blue-200', 
    gray: 'bg-gray-50 border-gray-200'
  }

  return (
    <div className={`${variantStyles[variant]} border rounded-lg p-6 ${className}`}>
      {children}
    </div>
  )
}