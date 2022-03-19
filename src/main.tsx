import { render } from 'preact';
import App from './App';
import './styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

render(<App />, document.getElementById('app')!);
