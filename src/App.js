import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Setting from './components/Setting/Setting';
import Game from './components/Game/Game';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { inicialisetApp } from './redux/App-reduser.ts';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import React from "react";
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import Foto from './components/Foto/Foto';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


class App extends Component {

  componentDidMount() {
    this.props.inicialisetApp()
  }

  render() {

    if (!this.props.inicialiset) {
      return <Preloader />
    }
    return (
      <div className='app_wrapper'>
        <HeaderContainer />
        <Navbar />
        <Route path='/Стена/:userId?' render={() => <ProfileContainer />} />
        <Route path='/Сообщения'
          render={() => {
            return <React.Suspense fallback={'.........LOADING........'}>
              <DialogsContainer />
            </React.Suspense>
          }} />
        <Route path='/Настройки' render={() => <Setting />} />
        <Route path='/Игры' render={() => <Game />} />
        <Route path='/Пользователи' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/Фото' render={() => <Foto />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inicialiset: state.app.inicialiset
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { inicialisetApp }))(App)

const SamuraiAPP = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiAPP;