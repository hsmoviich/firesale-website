import Image from 'next/image'

interface HowItWorksStepProps {
  icon: string
  title: string
  description: string
}

export function HowItWorksStep({ icon, title, description }: HowItWorksStepProps) {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

