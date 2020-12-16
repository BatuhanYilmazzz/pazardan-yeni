import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import GlobalStyle from './styles/GlobalStyle';

import Footer from './components/Footer';
import Home from './pages/Home';
import Kvkk from './pages/Kvkk';
import Sss from './pages/Sss';
import GizlilikSözlesmesi from './pages/GizlilikSözlesmesi';
import AydınlatmaMetni from './pages/AydınlatmaMetni';
import KullancıSözlesmesi from './pages/KullancıSözlesmesi';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/kvkk' component={Kvkk} />
        <Route exact path='/sık-sorulan-sorular' component={Sss} />
        <Route
          exact
          path='/gizlilik-sozlesmesi'
          component={GizlilikSözlesmesi}
        />
        <Route exact path='/aydınlatma-metni' component={AydınlatmaMetni} />
        <Route
          exact
          path='/kullanıcı-sozlesmesi'
          component={KullancıSözlesmesi}
        />
      </Switch>
      <ScrollToTop />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
