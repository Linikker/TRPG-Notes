import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Encounters from "./pages/Encounters";
import Characters from "./pages/Characters";
import Monsters from "./pages/Monsters";
import NotFound from "./pages/NotFound";

// root route
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

// routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const encountersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/encounters",
  component: Encounters,
});

const charactersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/characters",
  component: Characters,
});

const monstersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/monsters",
  component: Monsters,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

// route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  encountersRoute,
  charactersRoute,
  monstersRoute,
  notFoundRoute,
]);

// create router
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
