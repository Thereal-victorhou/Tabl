import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation'
import HomePage from "./components/HomePage";
import RestaurantPage from "./components/RestaurantPage";
import AddReviewForm from './components/ReviewPage';
import EditReviewForm from "./components/EditPage";
import AddRestaurantPage from "./components/AddRestaurant";
import EditRestaurantPage from './components/EditRestaurant'
import SearchResultPage from './components/SearchResultPage'
import SettingsPage from "./components/Settings/SettingsPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LoadScript } from "@react-google-maps/api";




function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
    <>
      <LoadScript
        googleMapsApiKey={'AIzaSyAV_Av8kiFRXTUMoummUh8tOAbg4zJZ2tY'}
        libraries={['places']}
      >

        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Routes>
            <Route path="/" element={<HomePage user={user}/>} />
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/signup" element={<SignupFormPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path="/restaurants/:id" element={<RestaurantPage user={user}/>} />
            <Route path='/add/restaurant' element={<AddRestaurantPage user={user}/>} />
            <Route path='/edit/restaurant/:id' element={<EditRestaurantPage user={user}/>} />
            <Route path="/review/restaurant/:id" element={<AddReviewForm user={user}/>} />
            <Route path="/review/rating/:selectedRating/restaurant/:id" element={<AddReviewForm user={user}/>} />
            <Route path="/edit/review/:id" element={<EditReviewForm user={user}/>} />
            <Route path="/search" element={<SearchResultPage />} />
            {/* <Route path="*" element={<h2>Page Not Found</h2>} /> */}
          </Routes>
        )}
      </LoadScript>
    </>
  );
}

export default App;
