import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext01';
import { useTheme } from './hooks/useTheme';

import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
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

        {/* </ThemeProvider> */}
      </BrowserRouter>
  );
}

export default App;
