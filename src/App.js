import './App.css';
import MobileComponent from './Pages/Mobile/Home page/mobileComponent';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Signin_form from './Pages/Authentication/singin_form';
import SignUp_form from './Pages/Authentication/signup_form';
import SongPageForDesktop from './components/Desktop/songPageForDesktop';
import { useContext } from 'react';
import { useEffect } from 'react';
import AudioPlayerForDektop from './components/Desktop/Music player/audioPlayerForDektop';
import { UserContext } from './Contexts/authenticationContext';
import HomePageBeforeLogin from './Pages/Desktop/Home page before login/homePageBeforeLogin';
import ProfilePageForDesktop from './Pages/Desktop/profile page/profilePageForDesktop';
import DiscoverPageForDesktop from './Pages/Desktop/discoverPageForDesktop';
import FeedPageForDesktop from './Pages/Desktop/feedPageForDesktop';
import LoginPage from './Pages/Authentication/loginPage';
import PopularTracksSection from './Pages/Desktop/profile page/popularTracksSection';
import TracksSection from './Pages/Desktop/profile page/tracksSection';
import AlbumsSection from './Pages/Desktop/profile page/albumsSection';
import PlaylistSection from './Pages/Desktop/profile page/playlistSection';
import RepostSection from './Pages/Desktop/profile page/repostSection';
import { MusicContext } from './Contexts/musicContext';
import { getListFromLocal } from './utils/utilites';
import AllSection from './Pages/Desktop/profile page/allSection';
import LibraryPageForDesktop from './Pages/Desktop/library page/libraryPageForDesktop';
import OverviewForLibraryPage from './Pages/Desktop/library page/overviewForLibraryPage';
import LikesForLibraryPage from './Pages/Desktop/library page/likesForLibraryPage';
import PlaylistsForLibraryPage from './Pages/Desktop/library page/playlistsForLibraryPage';
import AlbumsForLibraryPage from './Pages/Desktop/library page/albumsForLibraryPage';
import StationsForLibraryPage from './Pages/Desktop/library page/stationsForLibraryPage';
import FollowingForLibraryPage from './Pages/Desktop/library page/followingForLibraryPage';
import HistoryForLibraryPage from './Pages/Desktop/library page/historyForLibraryPage';
import AlbumPageForDesktop from './components/Desktop/albumPageForDesktop';
import { getFavouritesList } from './utils/fetchFunctions';
import { AudioContext } from './Contexts/audioContext';

function App() {
  
  const isMobile= window.innerWidth < 1024;

  const {setFavourites, setFavArtists, projectId}= useContext(MusicContext);
  const {isActive}= useContext(AudioContext);
  const {save_user_and_token, showLogInForm, showSignUpForm, isAuthenticated, setAuthenticated}= useContext(UserContext);

  const navigate= useNavigate();

  let authToken;

  function setList(data) {
    setFavourites(data);
  }

  // to get user info from local storage
  
  useEffect(() => {
    authToken= localStorage.getItem("authToken");
    if(authToken) {
    const user= localStorage.getItem("userInfo");
    const parsedUser= JSON.parse(user);

      save_user_and_token(parsedUser, authToken);
      setAuthenticated(true);
      navigate("/discover");
    }

    getFavouritesList()

  }, [])

  useEffect(() => {
    if(authToken) {
      const favArtists= getListFromLocal("favArtists");
      const trimedArr= favArtists.filter(item => item != null);
      setFavArtists(trimedArr);

      getFavouritesList(authToken, projectId, setList);
      
    }
  }, [authToken])

  
  return (
    <div className='relative'>
    {
      isMobile ? 
      (
        <MobileComponent />
      ) 
        :
      (
        <>
          <Routes>
            <Route path="/" element={<HomePageBeforeLogin />} />
            <Route path='/discover' element={<DiscoverPageForDesktop />} />
            <Route path='/feed' element={<FeedPageForDesktop />} >
              <Route path=":songId" element={<SongPageForDesktop />} />
            </Route>
            <Route path='/signin' element={<LoginPage />} />
            
            <Route path='/song/:songId' element={<SongPageForDesktop />} />
            <Route path='/artist/:artistName' element={<SongPageForDesktop />} />

            <Route path='/sets/:artistName/:albumId' element={<AlbumPageForDesktop />} />

            <Route path="/you" element={<LibraryPageForDesktop />}>
              <Route path="library" element={<OverviewForLibraryPage />} />
              <Route path="likes" element={<LikesForLibraryPage />} />
              <Route path="sets" element={<PlaylistsForLibraryPage />} />
              <Route path="albums" element={<AlbumsForLibraryPage />} />
              <Route path="stations" element={<StationsForLibraryPage />} />
              <Route path="following" element={<FollowingForLibraryPage />} />
              <Route path="history" element={<HistoryForLibraryPage />} />
            </Route>

            <Route path="/user/:username" element={<ProfilePageForDesktop />}>
              <Route path="all" element={<AllSection />} />  
              <Route path="popular-tracks" element={<PopularTracksSection />} />
              <Route path="tracks" element={<TracksSection />} />
              <Route path="albums" element={<AlbumsSection />} />
              <Route path="sets" element={<PlaylistSection />} />
              <Route path="reposts" element={<RepostSection />} />
            </Route>

            <Route path="*" element={isAuthenticated ? <DiscoverPageForDesktop /> : <HomePageBeforeLogin />} />
          </Routes>

          {
            
            (isActive) && <AudioPlayerForDektop />
          }
        </>
      )   
    }  

      {showLogInForm && <Signin_form />}
      {showSignUpForm && <SignUp_form />}
      
      <Outlet />
    </div>
  );
}

export default App;

