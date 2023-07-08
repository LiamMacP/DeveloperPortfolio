import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby";
import { Footer } from "../components/Footer"
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <React.Fragment>
      <main className="flex flex-col flex-auto bg-gray-100/80">
        <div className="mx-auto max-w-2xl min-h-100 mt-8 px-10">
          <div className="bg-blue-100 rounded-md flex flex-row px-6 py-4">
            <div className="text-blue-400 my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="my-auto"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            <p className="ml-2 text-blue-600">This site is being actively developed - please come back later.</p>
          </div>
        </div>
        <div className="mx-auto max-w-screen-2xl items-center justify-center pt-8 pb-12 sm:pt-16 sm:pb-24 md:pt-36 md:pb-48">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr -translate-x-64 from-[#42bdf7] to-[#ce3737] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="flex px-10">
          <GatsbyImage
            className="rounded-full mx-auto"
            image={data.heroImage.childImageSharp.gatsbyImageData}
            alt="Liam MacPherson"/>
          </div>
          
          <h1 className="font-semibold text-center text-3xl pt-6">Liam MacPherson</h1>
          <p className="text-center text-md py-1 px-10 sm:typing-animation">I'm a full-stack developer and coffee enthusiast ☕</p>
        </div>
        <div className="bg-gray-300/40">
          <div className="mx-auto max-w-screen-2xl py-10 sm:py-16 px-10 2xl:px-0">
            <h1 className="text-2xl sm:text-3xl font-semibold underline underline-offset-8 decoration-2 decoration-blue-500/80 md:pb-16 pb-12">Skills</h1>
            <ul className="grid grid-cols-none md:grid-cols-2 lg:grid-cols-3 gap-8">
              <li className="bg-gray-100 rounded-lg shadow-md">
                <div className="p-10">
                  <div className="text-blue-500/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="icon-size" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                  </div>
                  <div className="mt-4 font-semibold text-lg">
                    Software Development
                  </div>
                  <div className="mt-2 text-gray-500">
                    I have a passion for creating beautiful, functional, and efficient software. I utilise a wide range of technologies, including Java, React, and Node.js.
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 rounded-lg shadow-md">
                <div className="p-10">
                  <div className="text-blue-500/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="icon-size" viewBox="0 0 16 16">
                      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                      <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                    </svg>
                  </div>
                  <div className="mt-4 font-semibold text-lg">
                    Architecture
                  </div>
                  <div className="mt-2 text-gray-500">
                    I have a passion for designing and building scalable, secure, and efficient systems that are built to last.
                  </div>
                </div>
              </li>
              <li className="bg-gray-100 rounded-lg shadow-md"><div className="p-10">
                <div className="text-blue-500/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="icon-size" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
                <div className="mt-4 font-semibold text-lg">
                  Cyber Security
                </div>
                <div className="mt-2 text-gray-500">
                  I endorse a security-first approach to development, and I am always looking for ways to improve my skills and system resilience.
                </div>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export const Head: HeadFC = () => <title>Liam MacPherson</title>

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "thumbnail.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 256
        )
      }
    }
  }
`

export default IndexPage