import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {  Route, Routes } from 'react-router-dom'

const App = (props) => {
  return (


    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={ <Profile state={props.state.aPosts} />} />
          <Route path='/dialogs/*' element={ <Dialogs state={props.state} />} />
          <Route path='/news' element={ <News /> } />
          <Route path='/music' element={ <Music /> } />
          <Route path='/settings' element={ <Settings />} />
          <Route path='/friends' element={ <div>Друзья</div>} />
          <Route path='/friend/*' element={ <div>Друг</div>} />
        </Routes>
        {/* <Dialogs />
        
        <Profile /> */}
      </div>

    </div>

  );
}

export default App;
