import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login/Login';
import NotesContainer from './Components/Notescontainer/NotesContainer';
import { ToastContainer } from 'react-toastify';
import Signup from './Components/Login/Signup/Signup';
import Allnotes from './Components/Alllnotes/Allnotes';
import Header from './Components/Shared/Header/Header';
import React, { useState } from 'react';
import SIdebar from './Sidebar/SIdebar';
import Recent from './Recent/Recent';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebaseinit';
import RequireAuth from './Components/RequireAuth/RequireAuth';
export const ColorContext = React.createContext([])
function App() {
  const [user] = useAuthState(auth)
  const colors = ["#02394A", "#043565", "#5158BB", "#F26DF9", "#EB4B98", '#207398']
  const [color, setColor] = useState('')
  return (
    <ColorContext.Provider value={color}>
      <div className="App row">
        {
          user && <div className='col-12 col-md-3'>
            <SIdebar colors={colors}
              color={color}
              setColor={setColor}></SIdebar>

          </div>
        }
        <div className="allcontainer col-12 col-md-9">
          {
            user && <Header></Header>
          }
          <Routes>


            {/* <Route path='/' element={<NotesContainer></NotesContainer>} /> */}
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/' element={<Login></Login>}></Route>

            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/notescontainer' element={<RequireAuth>
              <NotesContainer>
              </NotesContainer>
            </RequireAuth>} />
            <Route path='/allnotes' element={<Allnotes></Allnotes>} />
            <Route path='/recent' element={<Recent></Recent>} />
          </Routes>
        </div>
        <ToastContainer />
      </div>

    </ColorContext.Provider>
  );
}

export default App;
