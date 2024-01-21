import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import Loader from "components/common/loader"
import { MainRoutes, AdminRoutes } from "./config.d"

const AppRoutes = () => {
  const routing = useRoutes([AdminRoutes, MainRoutes])
  return <Suspense fallback={<Loader text="Routing loading..." />}>{routing}</Suspense>
}

export default AppRoutes
