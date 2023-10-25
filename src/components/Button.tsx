
interface ButtonProps{
  title:string
  href: string
}

export function Button(props: ButtonProps) {
  return (
    <button className="bg-cyan-300"><a href={props.href}>{props.title}</a></button>
  )
}
