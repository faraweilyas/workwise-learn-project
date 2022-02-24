import NextLink from 'next/link'
import { useRouter } from 'next/router'

const Link = ({ to, children, as, className }) => {
  const { pathname } = useRouter()
  const isActive = pathname === to || pathname === as ? 'bg-blue-900' : ''
  return (
    <NextLink href={to}>
      <a className={`${className} ${isActive}`}>{children}</a>
    </NextLink>
  )
}

export default Link
