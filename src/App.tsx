import { h, FunctionComponent } from 'preact';
import Router from 'preact-router';
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Homepage path="/" />
      <About path="/about" />
      <NotFound default />
    </Router>
  );
};

export default App;
