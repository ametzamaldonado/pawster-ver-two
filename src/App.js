import './App.scss';
import { Home, Profile, Settings } from "./pages/Web/index";
import { Login, Register } from './components';
import { Routes, Route } from "react-router-dom"
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' />
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute> }/>
          <Route path='profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='settings' element={<ProtectedRoute><Settings/></ProtectedRoute>}/> 

          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register /> }/>
      </Routes>
      
    </div>
  );
}

export default App;
