import "../components/styles/AnimeTable.css";
import { useLocation } from "react-router-dom";

function AnimeTableData(
  AnimeName: string,
  ReleaseYear: number | string,
  Rating: number
) {
  return {
    AnimeName,
    ReleaseYear,
    Rating,
  };
}

function AnimeWatchTableData(AnimeName: string, TotalViews: number | string) {
  return {
    AnimeName,
    TotalViews,
  };
}

const TopAnimeData = [
  AnimeTableData("One Piece", "Ongoing", 9),
  AnimeTableData("Naruto", 2017, 8),
  AnimeTableData("Solo levelling", "Ongoing", 8),
  AnimeTableData("Demon Slayer", "Ongoing", 8.5),
  AnimeTableData("Attack On Titan", 2023, 9.5),
  AnimeTableData("Death note", 2010, 8.3),
  AnimeTableData("Jujutsu kaisen", "Ongoing", 8.7),
  AnimeTableData("One Punch Man", "Ongoing", 8.5),
  AnimeTableData("Tokyo Revengers", 2023, 7.6),
  AnimeTableData("Classroom of Elite", "Ongoing", 8.8),
];

const TopWatchedAnime = [
  AnimeWatchTableData("One Piece", "1 Billion+ Views"),
  AnimeWatchTableData("Naruto", "900M+ Views"),
  AnimeWatchTableData("Attack on Titan", "850M+ Views"),
  AnimeWatchTableData("Death Note", "800M+ Views"),
  AnimeWatchTableData("Dragon Ball Z", "750M+ Views"),
  AnimeWatchTableData("Demon Slayer", "700M+ Views"),
  AnimeWatchTableData("Jujutsu Kaisen", "650M+ Views"),
  AnimeWatchTableData("My Hero Academia", "600M+ Views"),
  // AnimeWatchTableData("Sword Art Online", "550M+ Views"),
  // AnimeWatchTableData("Tokyo Revengers", "500M+ Views"),
];

const AniTable = () => {
  const location = useLocation();

  const isTopAnime = location.state?.isTopAnime ?? true;


  return (
    <div
      style={{ display: "block", padding: 30, justifyItems: "center" }}
      className="table-page-container"
    >
      <h4>
        {isTopAnime
          ? "Top Anime list of all time"
          : "Top Watched Anime of all time"}
      </h4>
      <div className="table-container">
        <table className="table-body">
          <tr className="table-head-row">
            <th className="table-head" style={{ borderRadius: "20px" }}>
              Anime Name
            </th>
            <th align="left" className="table-head">
              {isTopAnime ? "Release year" : "Total views"}
            </th>
            {isTopAnime && (
              <th align="left" className="table-head">
                Rating ?/10
              </th>
            )}
          </tr>
          {isTopAnime
            ? TopAnimeData.map((row) => (
                <tr key={row.AnimeName} className="table-body-row">
                  <td scope="row">{row.AnimeName}</td>
                  <td align="left">{row.ReleaseYear}</td>
                  <td align="left">{row.Rating}</td>
                </tr>
              ))
            : TopWatchedAnime.map((row) => (
                <tr key={row.AnimeName} className="table-body-row">
                  <td scope="row">{row.AnimeName}</td>
                  <td align="left">{row.TotalViews}</td>
                </tr>
              ))}
        </table>
      </div>
    </div>
  );
};

export default { AniTable, TopAnimeData, TopWatchedAnime };
