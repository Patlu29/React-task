import Navbar from "../components/Navbar";
import animeCard from "../components/EntranceCards";
import TopAnime from "../assets/images/dashboardImages/top-anime.svg";
import TopWatches from "../assets/images/dashboardImages/top-watches.svg";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex flex-wrap"
        style={{ gap: "15px", padding: "20px", justifyContent: "space-around" }}
      >
        <div>
          <h2>Top Anime</h2>
          {animeCard(
            TopAnime,
            "Anime isn’t just entertainment—it’s a journey. These top picks left a lasting impact with their stories, emotions, and unforgettable moments. Dive in and enjoy the adventure!"
          )}
        </div>
        <div>
          <h2>Top Watches</h2>
          {animeCard(
            TopWatches,
            "These are the most-watched and beloved anime of all time! From action-packed adventures to heartwarming stories, these series have captivated fans worldwide."
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
