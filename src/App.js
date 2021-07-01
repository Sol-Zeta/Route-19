import React, {useEffect} from 'react';
import './App.css';
import MapContainer from './components/MapContainer/MapContainer.js'
import './components/MapContainer/MapContainer.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loading from './components/Loading/Loading.js'
// --- REACT-GA Google Analytics --- ///
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
// import auth from './auth.ts'; // Sample authentication provider


// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })


// const history = createBrowserHistory();

// // Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });


export default function App() {

  // const trackingId = "200586696"; // Replace with your Google Analytics tracking ID
  useEffect(() => {
    ReactGA.initialize('200586696');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  
    return (
      <div className="App">
        {/* <RemoveScrollBar /> */}
          <Router>
            <Switch>
                <Route exact path='/'>
                  <MapContainer/> 
                </Route>
                <Route exact path='/loading'>
                  <Loading/> 
                </Route>
            </Switch>
          </Router>
      </div>
    );
}
