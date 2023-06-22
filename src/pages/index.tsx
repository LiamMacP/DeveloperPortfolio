import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Footer } from "../components/Footer"
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <React.Fragment>
      <main className="flex flex-col flex-auto bg-gray-100/40">
        <div className="mx-auto max-w-screen-2xl h-400 items-center justify-center pt-24 ">
          <StaticImage
            className="rounded-full mx-auto"
            src="../images/thumbnail.png"
            alt="Liam MacPherson"
            width={192} height={192}
            placeholder="blurred"
            layout="fixed" />
          <h1 className="font-semibold text-center text-3xl pt-4">Liam MacPherson</h1>
          <p className="text-center text-md py-1">I'm a software developer</p>
        </div>
        <div className="mx-auto max-w-4xl min-h-100 mt-24 mb-12">
          <div className="bg-blue-100 rounded-md flex flex-row px-6 py-4">
            <div className="text-blue-400 my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 my-auto"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            <p className="ml-2 text-blue-600">This site is being actively developed - please come back later.</p>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export const Head: HeadFC = () => <title>Liam MacPherson</title>

export default IndexPage