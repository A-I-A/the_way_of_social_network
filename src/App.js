import React from 'react';
import style from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import { Redirect, Route, Switch } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/Dialogs.container';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/Profile.container';
import HeaderContainer from './components/Header/Header.container';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
// import {withSuspense} from './hoc/withSuspense'


const DialogsContainer = React.lazy(()=>import('./components/Dialogs/Dialogs.container'));
const ProfileContainer =  React.lazy(()=>import('./components/Profile/Profile.container'));
class App extends React.Component{
  catchAllUnhandledErrors=(promiseRejectionEvent)=>{
    alert("some error occured")
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  
  render() {
    if(!this.props.initialized) {return <Preloader/>}
    return (
      <div className={style.app_wrapper}>
        <HeaderContainer /> 
        <Navigation />
        <div className={style.app_wrapper_content}>
          <Switch>
          <Route exact path="/"> <Redirect to='/profile'/> </Route>
          <Route path="/profile/:userId?"> <React.Suspense fallback={<Preloader/>}> <ProfileContainer /></React.Suspense> </Route>
          <Route path="/dialogs"><React.Suspense fallback={<Preloader/>}> <DialogsContainer /></React.Suspense> </Route>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users"> <UsersContainer /> </Route>
          <Route path="/login"> <Login />  </Route>
          <Route path="/*"> <div>404 NOT FOUND </div>  </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized : state.app.initialized,
  }
}
 
 let AppContainer = connect (mapStateToProps,{initializeApp}) (App);

 
const AppMain = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  )
}


export default AppMain;