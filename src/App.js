import Login from './views/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> } exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
