import logo from './logo.svg';
import './App.css';
import YouTubeHeader from './components/YouTubeHeader';
import Videos from "./components/Videos"
import { Toolbar } from '@mui/material';
function App() {
  return (
    <div className="App">
      <YouTubeHeader />
      <Videos></Videos>
    </div>
  );
}

export default App;
