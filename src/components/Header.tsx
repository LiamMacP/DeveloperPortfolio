import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Header: React.FC<HeaderProps> = ({ showHeading = true, navLinks = [] }) => {

  const getActiveNavLinks = (navLinks: Array<NavigationLink>) => {
    return navLinks.filter(link => link.enabled ?? true)
  }

  const getNavLinkLayout = () => {
    if (showHeading) {
      return "justify-end"
    } else {
      return "justify-center"
    }
  }

  const activeNavLinks = getActiveNavLinks(navLinks);

  return (
    <header className="bg-gray-100/40 border-b border-blue-500/50">
      <nav className="mx-auto flex max-w-screen-2xl justify-between items-center p-6 lg:px-8">
        {showHeading && <Heading />}
        {activeNavLinks.length > 0 && (
          <div className={`flex flex-auto divide-x ${getNavLinkLayout()}`}>
            {activeNavLinks.map(link => (
              <a href={link.href} className="text-sm px-8 font-semibold leading-6 text-gray-900">
                {link.title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

const Heading = () => {
  const headerImage = useStaticQuery(graphql`
  query {
    thumbnail: file(relativePath: { eq: "thumbnail.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          width: 40
        )
      }
    }
  }
`);

  return (
    <div className="flex lg:flex-1">
      <GatsbyImage
        className="rounded-full"
        image={headerImage.thumbnail.childImageSharp.gatsbyImageData}
        alt="Liam MacPherson"
      />
      <Link to="/" className="px-2 py-2 font-bold">Liam MacPherson</Link>
    </div>
  )
}

type HeaderProps = {
  showHeading?: boolean
  navLinks?: Array<NavigationLink>
}

type NavigationLink = {
  title: string
  href: string
  enabled: boolean
}