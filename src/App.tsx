import { h, FunctionComponent } from 'preact';
import GridLayout from './design/GridLayout';
import Homepage from './pages/Homepage';

const App: FunctionComponent = () => {
  return (
    <div class="container">
      {/* <GridLayout /> */}
      <Homepage />
    </div>
  );
};

export default App;
