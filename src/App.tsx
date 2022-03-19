import { h, FunctionComponent } from 'preact';
import GridLayout from './design/GridLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';

const App: FunctionComponent = () => {
  return (
    <div class="container">
      {/* <GridLayout /> */}
      <Homepage />
      {/* <About /> */}
    </div>
  );
};

export default App;
