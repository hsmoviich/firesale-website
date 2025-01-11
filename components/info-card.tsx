interface InfoCardProps {
  title: string
  description: string
  variant: 'outline' | 'primary'
}

export function InfoCard({ title, description, variant }: InfoCardProps) {
  return (
    <div className={`p-6 rounded-lg ${
      variant === 'primary' 
        ? 'bg-[#ff6229]' 
        : 'bg-[#252b42] border border-gray-700'
    }`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={`${
        variant === 'primary' 
          ? 'text-white' 
          : 'text-gray-400'
      }`}>
        {description}
      </p>
    </div>
  )
}

