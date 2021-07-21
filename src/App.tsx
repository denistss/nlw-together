import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from "./pages/auth/Home";
import { NewRoom } from "./pages/auth/NewRoom";
import { Room } from "./pages/Rooms/Room";
import { AdminRoom } from "./pages/Rooms/AdminRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';


function App() {

  return (
    <BrowserRouter>
        <ThemeContextProvider>
          <AuthContextProvider>
              <GlobalStyle/>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/rooms/new" exact component={NewRoom}/>
                <Route path="/rooms/:id" component={Room}/>
                <Route path="/admin/rooms/:id" component={AdminRoom}/>
              </Switch>
          </AuthContextProvider>
          </ThemeContextProvider>
      </BrowserRouter>
  );
}

export default App;
