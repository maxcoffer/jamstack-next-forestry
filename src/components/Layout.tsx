import React, { ReactNode, FunctionComponent} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const pages = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Blog', path: '/blog'}
]
const NavigationList: FunctionComponent<NavigationListProps> = ({
  items = pages
}) => {
  const navItems = items.map((item: NavigationItem, index) => (
    <Link key={index} href={item.path}>{item.name}</Link>
  ))
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4 hover:text-gray-900 z-10">
      {navItems}
    </nav>
  )
}

const Layout = ({ children, title = 'NextJS Example' }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {/* Header */}
    <header className="text-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 z-10">
            {/* Versel Logo */}
            <svg className="w-8" viewBox="0 0 200 173" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon points="99.9998268 0 200 173 0 173"></polygon>
            </svg>
            <span className="ml-3 text-xl">Example</span>
          </a>
        </Link>

        <NavigationList />

      </div>
    </header>

    {children}

    {/* Footer */}
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* Versel Logo */}
          <svg className="w-8" viewBox="0 0 200 173" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="99.9998268 0 200 173 0 173"></polygon>
          </svg>
          <span className="ml-3 text-xl">Example</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          &copy; 2021 NextJS Example
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  </div>
)

type NavigationItem = {
  name: string;
  path: string;
}
interface NavigationListProps extends React.BaseHTMLAttributes<HTMLElement> {
  items?: Array<NavigationItem>
}

export default Layout
