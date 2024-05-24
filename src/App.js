import { Routes, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';
import AddPosts from './components/AddPosts';
import './assets/sass/style.scss';

function App() {
  return (
    <div className="App">

      <Link to="/">Posts   </Link>
      <Link to='/about'>Add Posts </Link>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="about" element={<AddPosts />} />
      </Routes>
      
    </div>
  );
}

export default App;
