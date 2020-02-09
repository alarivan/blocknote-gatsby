import React from "react"
import Layout from "../components/layout"
const AppLazy = React.lazy(() => import("../components/app"))

const App = () => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <AppLazy />
        </React.Suspense>
      )}
    </Layout>
  )
}

export default App
