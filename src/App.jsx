import {BrowserRouter as Router ,Routes,Route, Navigate,} from  'react-router-dom'
import './App.scss';
import  Login  from './Login/login';
import  Main  from './Main/main';
import ProtectedRoute from './protectedRoute/protectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        
      <Route path="/login" element={<Login/>} />
      <Route element={<ProtectedRoute/>}>
        
      <Route path="/main" element={<Main/>} />
      </Route >
      <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>

    </Router>
  );
}

export default App;
