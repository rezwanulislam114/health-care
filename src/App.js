import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthProvider from './AuthProvider/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import About from './components/About/About';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Doctors from './components/Doctors/Doctors';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/servicedetails/:id">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <PrivateRoute path="/doctordetails/:id">
            <DoctorDetails />
          </PrivateRoute>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
