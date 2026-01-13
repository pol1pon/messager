import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import ChatsPage from '../../pages/ChatsListPage/ChatListPage'
import Registration from '../../pages/Registration/Registration';
import AuthIn from '../../pages/Authorization/Authorisation';
import Error from '../../pages/error';
export const router = createBrowserRouter([
  {
    // path: ROUTES.Default,
    // element: <Registration/>,
    children: [{
      path: ROUTES.Default,
      element: <Registration/>,
    },
      {
        path: ROUTES.Chats,
        element: <ChatsPage/>,
      },
      {
        path: ROUTES.Auth,
        element: <AuthIn/>,
      },
       {
        path: ROUTES.Error,
        element: <Error/>,
      },
    ],
  },
]);