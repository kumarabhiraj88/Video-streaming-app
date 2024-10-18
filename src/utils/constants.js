
const YOUTUBE_VIDEOS_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
const YOUTUBE_SEARCH_SUGGESTION_API=`https://dummyjson.com/products/search?q=`;
const LIVE_CHAT_REMOVE_INDEX = 25;
export {
    YOUTUBE_VIDEOS_API,
    YOUTUBE_SEARCH_SUGGESTION_API,
    LIVE_CHAT_REMOVE_INDEX
}