import { Camera, ClipboardCheck, Upload } from 'lucide-react'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  icon: 'camera' | 'clipboard' | 'upload'
}

export function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  const getIcon = () => {
    switch (icon) {
      case 'camera':
        return <Camera className="w-8 h-8 text-[#ff6229]" />
      case 'clipboard':
        return <ClipboardCheck className="w-8 h-8 text-[#ff6229]" />
      case 'upload':
        return <Upload className="w-8 h-8 text-[#ff6229]" />
      default:
        return null
    }
  }

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff6229]/10">
          {getIcon()}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">
        STEP {number}
        <br />
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

