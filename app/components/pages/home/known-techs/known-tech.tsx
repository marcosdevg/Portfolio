import { CMSIcon } from '@/app/components/cms-icon'
import { KnownTech as IKnownTech } from '@/app/types/projects'

type KnowTechProps = {
  tech: IKnownTech
}

export const KnownTech = ({ tech }: KnowTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
    </div>
  )
}
