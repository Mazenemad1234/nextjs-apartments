import { LucideIcon } from 'lucide-react'

type props = {
    text1: string,
    text2: string | number,
    icon: LucideIcon,
    color? : 'white' | 'green'
}

const colorMap = {
  white: 'text-white',
  green: 'text-green-500',
}

function Iconsdetails({ text1, text2, icon: Icon, color = 'white' }: props) {
  const colorClass = colorMap[color]

  return (
    <p className="text-gray-400 py-2 border-b border-gray-800 flex justify-between items-center">
      <span className="flex flex-row items-center gap-3">
        <Icon size={16} className="text-red-400" />
        <span className="text-red-400 text-sm">{text1}</span>
      </span>
      <span className={`${colorClass} text-sm`}>{text2}</span>
    </p>
  )
}

export default Iconsdetails