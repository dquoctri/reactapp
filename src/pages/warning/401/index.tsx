import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import PageTitle from "components/common/page-title.component"

const Unauthorized = () => {
  return (
    <Fragment>
      <PageTitle title="Unauthorized-Deadline" />
      <p>
        Full authentication is required to access this resource: <Link to="/login">/login</Link>
      </p>
    </Fragment>
  )
}

export default Unauthorized
