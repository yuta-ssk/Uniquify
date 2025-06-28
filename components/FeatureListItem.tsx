import CheckIcon from './CheckIcon'

interface FeatureListItemProps {
  children: React.ReactNode
}

export default function FeatureListItem({ children }: FeatureListItemProps) {
  return (
    <li className="flex items-start">
      <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
      <span>{children}</span>
    </li>
  )
}