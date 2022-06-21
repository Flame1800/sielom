import Link from 'next/link'

const LinkWrapper = ({children, href}) => {
    return (<Link href={href}>
        <a>
            {children}
        </a>
    </Link>)
}

export default LinkWrapper;