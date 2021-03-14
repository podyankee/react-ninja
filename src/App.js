import React from 'react';

import './App.css';

import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) =>{

  return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
				<Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} /> } />
				<Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost = {props.addPost} /> } />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
  );
}

export default App;
