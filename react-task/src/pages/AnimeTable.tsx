import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
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
];

const AniTable = () => {
  const location = useLocation();
  // const [isTopAnime, setIsTopAnime] = useState(true);
  const isTopAnime = location.state?.isTopAnime ?? true;

  return (
    <div style={{ display: "block", padding: 30, justifyItems: "center" }}>
      <h4>
        {isTopAnime
          ? "Top Anime list of all time"
          : "Top Watched Anime of all time"}
      </h4>
      <div>
        <TableContainer className="table-container">
          <Table
            style={{
              width: 600,
              margin: "10px",
            }}
            size="medium"
            className="table-body"
          >
            <TableHead className="table-head">
              <TableRow className="table-head-row">
                <TableCell>Anime Name</TableCell>
                <TableCell align="right">
                  {isTopAnime ? "Release year" : "Total views"}
                </TableCell>
                {isTopAnime && <TableCell align="right">Rating ?/10</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {isTopAnime
                ? TopAnimeData.map((row) => (
                    <TableRow key={row.AnimeName}>
                      <TableCell component="th" scope="row">
                        {row.AnimeName}
                      </TableCell>
                      <TableCell align="right">{row.ReleaseYear}</TableCell>
                      <TableCell align="right">{row.Rating}</TableCell>
                    </TableRow>
                  ))
                : TopWatchedAnime.map((row) => (
                    <TableRow key={row.AnimeName}>
                      <TableCell component="th" scope="row">
                        {row.AnimeName}
                      </TableCell>
                      <TableCell align="right">{row.TotalViews}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AniTable;
