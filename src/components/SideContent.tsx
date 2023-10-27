import { Sidebar } from './Sidebar'

interface SideContentProps {}

export function SideContent(props: SideContentProps) {
  return (
    <div className="col-span-3">
      <Sidebar></Sidebar>
    </div>
  )
}
