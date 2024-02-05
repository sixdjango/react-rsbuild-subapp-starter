import { Route } from 'react-router-dom'
import { ManagementPage } from '~/pages/management'

interface RouteMeta {
  title?: string
  icon?: string
  hidden?: boolean
  auth?: boolean
  activeMenu?: string
}
export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
  redirect?: string
  meta?: RouteMeta
}

const routeList: RouteConfig[] = [
  {
    path: '/client-management',
    element: <ManagementPage />,
    meta: {}
  }
]

export const getRoutes = () => {
  return routeList
}

interface AuthRouteProps {
  children?: React.ReactNode
  auth?: boolean
  path: string
  title?: string
}

export function AuthRoute({ children }: AuthRouteProps) {
  return children
}

export function GenerateRoutes(routes: RouteConfig[]) {
  return routes.map((route) => {
    const { children, path, ...rest } = route
    return (
      <Route
        key={path}
        path={path}
        {...rest}
        element={
          <AuthRoute path={path} auth={rest.meta?.auth} title={rest.meta?.title}>
            {rest.element}
          </AuthRoute>
        }>
        {!!children && GenerateRoutes(children)}
      </Route>
    )
  })
}

export const StaticRouters = GenerateRoutes(routeList)
