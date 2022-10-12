import React, { FC, useEffect } from "react"
import { Admin, CustomRoutes, Resource } from "react-admin"
import { BrowserRouter, Route } from "react-router-dom"
// internal files
import LoginPage from "@/auth/LoginPage"
import AuthRoutesProvider from "@/auth/AuthRoutesProvider"
import appAuthenticationProvider from "@/auth/AuthProvider"
import posts from "@/posts"

const NotFoundPage: FC<any> = ({ extraInfo }) => {
  return <h1>{extraInfo || "404 not found"}</h1>
}

NotFoundPage.defaultProps = {
  extraInfo: "404 not found",
}

interface AppProps {
  name: string
}

export const App: FC<AppProps> = ({ name }) => {
  const basename = process.env.PUBLIC_URL

  useEffect(() => {
    document.title = `${name}`
    // eslint-disable-next-line
  }, [])

  return (
    <BrowserRouter basename={basename}>
      <Admin
        title={name}
        catchAll={NotFoundPage}
        authProvider={appAuthenticationProvider}
        loginPage={LoginPage}>
        <CustomRoutes noLayout>{AuthRoutesProvider()}</CustomRoutes>
        <CustomRoutes>
          <Route path="/settings" element={<>Settings</>} />
          <Route path="/profile" element={<>Profile</>} />
        </CustomRoutes>
        <Resource name="posts" options={{ label: "Posts" }} {...posts} />
        <Resource
          name="books"
          options={{ label: "Dashboard" }}
          list={() => <p>Books</p>}
        />
        <Resource
          name="publisher"
          options={{ label: "publisher" }}
          list={() => <p>Publisher</p>}
        />
        <Resource
          name="authors"
          options={{ label: "authors" }}
          list={() => <p>Authors</p>}
        />
      </Admin>
    </BrowserRouter>
  )
}

export default App
