import React from "react"
import AppLayout from "../components/layout/app"
const AppLazy = React.lazy(() => import("../components/app"))

const App = () => {
  const isSSR = typeof window === "undefined"
  return (
    <AppLayout>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <AppLazy />
        </React.Suspense>
      )}
    </AppLayout>
  )
}

export default App
