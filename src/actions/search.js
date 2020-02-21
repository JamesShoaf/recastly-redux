import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


//state: results of query, isLoading

// var searchLoadingState = (bool) => ({
//   type: 'SEARCH_LOAD_STATUS'
//   isLoading: bool
// });

var updateSearchResults = (videos) => ({
  type: 'UPDATE_SEARCH_RESULTS',
  videos,
  currentVideo: videos[0]
});

var searchComplete = (videos) => {
  searchLoadingState(false);
  updateSearchResults(videos);
}

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return () => {
    //searchLoadingState(true);
    searchYouTube({YOUTUBE_API_KEY, q}, searchComplete)
  }
//   return (dispatch) => {
//     setTimeout(() => {
//         // This function is able to dispatch other action creators
//         dispatch(itemsHasErrored(true));
//     }, 5000);
// };



};

export default handleVideoSearch;

var set