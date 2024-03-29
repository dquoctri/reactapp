import React, { Fragment } from "react"
import { Link } from 'react-router-dom';
import PageTitle from "components/common/page-title.component"

const NotFound = () => {
  return (
    <Fragment>
      <PageTitle title="NotFound-Deadline" />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Oops! page not found</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page 404 not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we can&apos;t find that page! It might be an old link or maybe it moved</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
            <Link to="/about" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default NotFound
