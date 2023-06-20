import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { PageLayout, Section } from "../components/Layout"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showHeading={true}/>
      <main className="flex flex-auto bg-gray-100/40" >
        <div className="flex-auto mx-auto  max-w-screen-2xl py-24 sm:py-32 px-6 lg:px-8">
          <p className="text-xl font-semibold text-blue-500 ">404</p>
          <h1 className="mt-2 sm:text-5xl  text-3xl font-semibold underline underline-offset-8 decoration-2 decoration-blue-500/80 pb-4">Page not found</h1>
          <p className="mt-4 text-base">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-8 gap-x-6">
            <Link to="/" className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Go back home
            </Link>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  )
}

export const Head: HeadFC = () => <title>Liam MacPherson | 404 Not Found</title>

export default NotFoundPage

