import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Sites from './pages/Sites';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sites />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sites" element={<Sites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
