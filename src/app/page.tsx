import { SideContent } from '@/components/SideContent'
import { MainContent } from '@/components/MainContent'

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-1">
      <SideContent></SideContent>
      <MainContent></MainContent>
    </div>
  )
}
