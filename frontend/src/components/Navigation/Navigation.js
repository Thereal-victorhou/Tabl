import React, { useEffect, useState, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LocationSearchInput from './LocationSearchInput';
import { liveRestaurantSearch, clearSearch } from '../../store/liveSearch';
import { getSearchResults } from '../../store/searchResult';
import {
	oneRestaurant,
	getNearByRestaurants,
	getRestaurantResults,
} from '../../store/restaurant';
import { saveCurrentPage } from '../../store/navigation';
import { saveLocation } from '../../store/location';
import { v4 as uuidv4 } from 'uuid';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import './Navigation.css';


function Navigation({ isLoaded }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const [restaurantSearchInput, setRestaurantSearchInput] = useState('');
	const [selectedLocation, setSelectedLocation] = useState({});
	const [isSelected, setIsSelected] = useState(false);
	const [sessionToken, setSessionToken] = useState('');
	const [selectInput, setSelectInput] = useState(false);

	const sessionUser = useSelector((state) => state.session.user);
	const searchResult = useSelector((state) => state.liveSearch);

	const pageType = useSelector((state) => state.navigation?.currentPage);

	const restaurantSearchInputLength = document.querySelector(
		'.search-bar-restaurants-input'
	)?.value?.length;

	// Clearing restaurant search field
	const updateRestaurantSearch = (e) => {
		setRestaurantSearchInput(e.target.value);
		if (e.target.value.length === 1) {
			dispatch(clearSearch());
		}
	};

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<div className='login-signup-container'>
					<div className='login-container'>
						<NavLink
							className='nav-links-login'
							id='nav-login'
							to='/login'
							// type='button'
							// onClick={(e) => handleLoginSignUp(e)}
							onClick={()=> dispatch(saveCurrentPage('other'))}
							>
							Log In
						</NavLink>
					</div>
					<div className='signup-container'>
						<NavLink
							className='nav-links-signup'
							id='nav-signup'
							to='/signup'
							// onClick={(e) => handleLoginSignUp(e)}
							onClick={()=> dispatch(saveCurrentPage('other'))}
							>
							Sign Up
						</NavLink>
					</div>
				</div>
			</>
		);
	};


	// Save location, dispatch a search for near restaurants
	const handleUpdateLocation = (locationObj) => {
		dispatch(getNearByRestaurants(locationObj));
		setSelectedLocation(locationObj);
	};

	const handleClick = async (e, res) => {
		e.preventDefault();
		await dispatch(oneRestaurant(res.id));
		await dispatch(clearSearch());
		setRestaurantSearchInput('');
		dispatch(saveCurrentPage('other'));
		history.push(`/restaurants/${res.id}`);
	};

	const handleAddRestaurantPage = async (e) => {
		e.preventDefault();
		await dispatch(saveCurrentPage('other'));
		history.push(sessionUser ? '/add/restaurant' : '/login');
	};

	//Render restaurant search results
	const restaurantSearchRender = (res, i) => {
		if (res.location) {
			const resLocation = res.location;
			const len = resLocation.length - 1;
			const addy = resLocation[len];

			return (
				<NavLink
					exact
					to={`/restaurants/${i}`}
					id='search-result'
					key={i}
					onClick={(e) => handleClick(e, res)}>
					<div
						id='search-img'
						style={{
							backgroundImage: `url(${res?.imgSrc})`,
						}}></div>
					<div className='search-info-container'>
						<p id='name'>{res.name}</p>
						<p id='address'>{addy}</p>
					</div>
				</NavLink>
			);
		}
	};


	// Search for restaurants
	const handleSearch = async (e) => {
		e.preventDefault();

		// If there is no selected location, set default location to Sacramento, CA, USA
		if (JSON.stringify(selectedLocation) === '{}') {
			let defaultLocation = {
				location: 'Sacramento, CA',
				lat: 38.5815719,
				lng: -121.4943996,
			}

			await dispatch(saveLocation(defaultLocation))
			await dispatch(
				getRestaurantResults({
					searchInput: restaurantSearchInput,
					locationObj: defaultLocation,
				})
			);
			await dispatch(getSearchResults({
				searchInput: restaurantSearchInput,
				locationObj: defaultLocation,
			}));

		// Otherwise, change search as usual
		} else {
			await dispatch(
				getRestaurantResults({
					searchInput: restaurantSearchInput,
					locationObj: selectedLocation,
				})
			);
			await dispatch(getSearchResults({
				searchInput: restaurantSearchInput,
				locationObj: selectedLocation,
			}));
		}

		dispatch(saveCurrentPage('other'));
		history.push(`/search?find_desc=${restaurantSearchInput}`);
	};

	// Set Nav to Home Version
	const handleNav = (e) => {
		e.preventDefault();
		dispatch(saveCurrentPage('home'));
		dispatch(clearSearch());
	};

	// Modifying style of NavBar based on current Page
	useEffect(async () => {
		const amIHome = window.location.href;
		// console.log('==========, ', amIHome.endsWith('/'))
		if (pageType === undefined && amIHome.endsWith('/')) {
			dispatch(saveCurrentPage('home'))
		}
		if (pageType === 'home') {
			await document
				.querySelector('.background-slideshow')
				?.classList.remove('other');
			await document.querySelector('.nav_container')?.classList.remove('other');
			await document.querySelector('.nav-gradient')?.classList.remove('other');
			await document.querySelector('.li-container')?.classList.remove('other');
			await document
				.querySelector('.nav-links-home')
				?.classList.remove('other');
			await document
				.querySelector('.search-bar-restaurants-input')
				?.classList.remove('other');
			await document.querySelector('.search-btn')?.classList.remove('other');
			await document
				.querySelector('.search-bar-restaurant-main')
				?.classList.remove('other');
			await document
				.querySelector('.add-restaurant-link')
				?.classList.remove('other');
			await document
				.querySelector('.nav-links-login')
				?.classList.remove('other');
		} else {
			await document
				.querySelector('.background-slideshow')
				?.classList.add('other');
			await document.querySelector('.nav_container')?.classList.add('other');
			await document.querySelector('.nav-gradient')?.classList.add('other');
			await document.querySelector('.li-container')?.classList.add('other');
			await document.querySelector('.nav-links-home')?.classList.add('other');
			await document
				.querySelector('.search-bar-restaurants-input')
				?.classList.add('other');

			await document.querySelector('.search-btn')?.classList.add('other');
			await document
				.querySelector('.search-bar-restaurant-main')
				?.classList.add('other');
			await document
				.querySelector('.add-restaurant-link')
				?.classList.add('other');
			await document.querySelector('.nav-links-login')?.classList.add('other');
		}
	}, [pageType]);

	// Live Restaurant Search
	useEffect(() => {
		if (restaurantSearchInput.length > 1) {
			dispatch(
				liveRestaurantSearch({
					searchInput: restaurantSearchInput,
					locationObj: selectedLocation,
				})
			);
		}
	}, [restaurantSearchInput]);

	// Determine if restaurant input box and which location was selected
	useEffect(() => {
		window.onclick = (event) => {
			event.preventDefault();

			if (event.target.name === 'restaurant-input') setIsSelected(true);
			else setIsSelected(false);

			if (event.target.name === 'location-input') {
				// setSelectInput(false)
				setSelectInput(true);
			} else setSelectInput(false);
		};
	}, []);

	// Create session token if location input is selected
	// useEffect(()=> {

	// },[])

	// Hide/Show Restaurant
	useEffect(async () => {
		if (isSelected) {
			await document
				.querySelector('.restaurant-search-results-container')
				?.classList.remove('hide');
		} else {
			await document
				.querySelector('.restaurant-search-results-container')
				?.classList.add('hide');
		}
	}, [isSelected]);

	// Styling Live Restaurant Search Box
	useEffect(() => {
		if (isSelected && restaurantSearchInputLength > 1) {
			document
				.querySelector('.search-bar-restaurants-input')
				?.classList.add('live');
		} else {
			document
				.querySelector('.search-bar-restaurants-input')
				?.classList.remove('live');
		}
	}, [isSelected, restaurantSearchInputLength]);

	return (
		<div className='nav_container'>
			<CCarousel transition='crossfade' className='background-slideshow'>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-1.png'} alt='slide1' />
				</CCarouselItem>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-2.png'} alt='slide2' />
				</CCarouselItem>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-3.png'} alt='slide3' />
				</CCarouselItem>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-4.png'} alt='slide4' />
				</CCarouselItem>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-5.png'} alt='slide5' />
				</CCarouselItem>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-6.png'} alt='slide66' />
				</CCarouselItem>
				<CCarouselItem>
					<CImage className='d-block w-100' src={'https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/tabl-home-backgrounds/tabl-home-7.png'} alt='slide7' />
				</CCarouselItem>
			</CCarousel>
			<div className='nav-gradient'>
				<div className='li-container'>
					<div className='nav_container_homelink'>
						<div
							className='homelink_containter'
							onClick={(e) => {
								handleNav(e);
							}}>
							<NavLink exact to='/' className='nav-links-home' id='home-link'>
								Tabl
							</NavLink>
						</div>
					</div>
					<div className='middle-container'>
						<div id='upper-middle'>
							<div className='search-bar-container'>
								<div className='search-bar-restaurant-main'>
									<input
										className='search-bar-restaurants-input'
										placeholder='tacos, burgers, dinner'
										name='restaurant-input'
										value={restaurantSearchInput}
										onChange={updateRestaurantSearch}></input>
									<div className='search-results-container'>
										<div className='restaurant-search-results-container'>
											{searchResult &&
												Object.values(searchResult).map((res, i) =>
													restaurantSearchRender(res, i)
												)}
										</div>
									</div>
								</div>
								<div className='search-bar-divider'>
									<div id='divide'></div>
								</div>
								<LocationSearchInput
									inputSelection={selectInput}
									sessionToken={sessionToken}
									handleUpdateLocation={handleUpdateLocation}
								/>
								<NavLink
									exact
									to='/search'
									className='search-btn'
									onClick={(e) => handleSearch(e)}>
									<SearchIcon
										className='search-mag'
										sx={{ color: grey[50], fontSize: 36, fontWeight: 'bold' }}
									/>
								</NavLink>
							</div>
						</div>
					</div>
					<div className='session_links'>
						<NavLink
							exact
							to={sessionUser ? '/add/restaurant' : '/login'}
							className='add-restaurant-link'
							id='add-restaurant-link'
							onClick={(e) => handleAddRestaurantPage(e)}>
							Add a Restaurant
						</NavLink>
						{isLoaded && sessionLinks}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
