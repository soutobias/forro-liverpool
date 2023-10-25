import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Main Page</h1>
      <Button title='Go to Button Page' href='/button'/>
    </div>
  )
}
