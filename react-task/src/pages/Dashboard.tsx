import Navbar from "../components/Navbar";
import animeCard from "../components/EntranceCards";
import TopAnime from "../assets/images/dashboardImages/top-anime.svg";
import TopWatches from "../assets/images/dashboardImages/top-watches.svg";
import { useNavigate } from "react-router-dom";
import TopAnimeData from "./AnimeTable";
import TopWatchedAnime from "./AnimeTable";

const Dashboard = () => {
  const navigate = useNavigate();

  const navigateTopAnime = (isTopAnime: boolean) => {
    navigate("/topanime", { state: { isTopAnime } });
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex flex-wrap"
        style={{ gap: "15px", padding: "20px", justifyContent: "space-around" }}
      >
        <div onClick={() => navigateTopAnime(true)}>
          <h2>Top Anime</h2>
          {animeCard(
            TopAnime,
            "Anime isn’t just entertainment—it’s a journey. These top picks left a lasting impact with their stories, emotions, and unforgettable moments. Dive in and enjoy the adventure...!",
            "📌Click the post to see more details"
          )}
          <p>Table data count: {TopAnimeData.TopAnimeData.length}</p>
        </div>
        <div onClick={() => navigateTopAnime(false)}>
          <h2>Top Watches</h2>
          {animeCard(
            TopWatches,
            "These are the most-watched and beloved anime of all time! From action-packed adventures to heartwarming stories, these series have captivated fans worldwide...!",
            "📌Click the post to see more details"
          )}
          <p>Table data count: {TopWatchedAnime.TopWatchedAnime.length}</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
