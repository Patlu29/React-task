import "../components/styles/EntranceCards.css";

export default function animeCard(
  img: string,
  content: string,
  footer?: string
) {
  return (
    <div
      className="entrance-card"
      style={{
        width: "350px",
        border: "1px solid rgb(126, 126, 126)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img
        src={img}
        className="card-img-top"
        alt="card-img"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <p className="card-text">
          {content} <br></br>
          {footer}
        </p>
      </div>
    </div>
  );
}
