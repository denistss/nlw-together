import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
// import { useTheme } from './hooks/useTheme';

function App() {
  // const { useTheme } = useTheme();

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
