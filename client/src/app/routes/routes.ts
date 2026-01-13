export const ROUTES = {
  Default: '/',
  Chats: '/chats',
  LogIn: '/login',
  Auth: '/auth',
  Error: '*',
  Registration: '/registration',
} as const;

export type ROUTES = typeof ROUTES[keyof typeof ROUTES];