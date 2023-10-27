import { CrossAnimation } from './CrossAnimation'
import { MainTitle } from './MainTitle'

interface MainContentProps {}

export function MainContent(props: MainContentProps) {
  return (
    <div className="col-span-8">
      <MainTitle />
      <CrossAnimation />
    </div>
  )
}
