import { createRootRoute, Outlet } from '@tanstack/react-router'
import { LanguageProvider } from '../lib/Language'

export const Route = createRootRoute({
  component: () => (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  ),
})
