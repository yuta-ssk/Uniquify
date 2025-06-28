interface StepListItemProps {
  stepNumber: number
  children: React.ReactNode
}

export default function StepListItem({ stepNumber, children }: StepListItemProps) {
  return (
    <li className="flex">
      <span className="font-bold mr-2">{stepNumber}.</span>
      <span>{children}</span>
    </li>
  )
}