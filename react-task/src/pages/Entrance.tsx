import "../components/styles/Entrance.css";
import animeCard from "../components/EntranceCards";
import Naruto from "../assets/images/entranceImages/naruto.svg";
import soloLeveling from "../assets/images/entranceImages/solo-levelling.svg";
import silentVoice from "../assets/images/entranceImages/a-silent-voice.svg";
import jjk from "../assets/images/entranceImages/jjk.svg";
import demonSlayer from "../assets/images/entranceImages/demon-slayer.svg";
import deathNote from "../assets/images/entranceImages/death-note.svg";
import ippo from "../assets/images/entranceImages/hajime-no-ippo.svg";
import yourName from "../assets/images/entranceImages/your-name.svg";
import iWantTo from "../assets/images/entranceImages/i-want-to-eat.svg";
import onePeice from "../assets/images/entranceImages/one-peice.svg";
import Navbar from "../components/Navbar";

const Entrance = () => {
  return (
    <>
      <Navbar />
      <h1>🚀Top Anime</h1>
      <div
        className="d-flex flex-wrap"
        style={{ gap: "15px", padding: "20px" }}
      >
        {animeCard(
          Naruto,
          "'Naruto' is a Japanese anime series based on Masashi Kishimoto's manga, following the story of Naruto Uzumaki, a young ninja who dreams of becoming the Hokage, the leader of his village, Konoha. "
        )}
        {animeCard(
          onePeice,
          "'One Piece' series based on Eiichiro Oda's manga of the same name, following the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, as they journey to find the legendary treasure, 'One Piece', and become the next King of the Pirates."
        )}
        {animeCard(
          soloLeveling,
          "'Solo Leveling' is a South Korean web novel-turned-anime about Sung Jinwoo, a weak E-Rank hunter, who gains the ability to level up through a mysterious system after narrowly surviving a dangerous dungeon, becoming humanity's strongest hunter."
        )}
        {animeCard(
          jjk,
          "'Jujutsu Kaisen' is a popular anime and manga series following Yuji Itadori, a seemingly ordinary high school student who becomes entangled with a powerful cursed spirit, Ryomen Sukuna, after consuming one of its fingers to save his friends."
        )}
        {animeCard(
          demonSlayer,
          "'Demon Slayer: Kimetsu no Yaiba' is a Japanese manga series by Koyoharu Gotouge, following Tanjiro Kamado, a young boy who becomes a Demon Slayer after his family is slaughtered and his sister Nezuko is turned into a demon."
        )}
        {animeCard(
          deathNote,
          "'Death Note' is a Japanese manga series, and subsequent anime, that follows the story of Light Yagami, a brilliant high school student who discovers a supernatural notebook that allows him to kill anyone by writing their name in it."
        )}
        {animeCard(
          ippo,
          "'Hajime no Ippo,'' which translates to 'The Beginning of One Step,' follows the journey of the shy high school student Ippo Makunouchi, who, after being rescued from bullies by professional boxer Mamoru Takamura, decides to pursue boxing to discover what it means to be strong."
        )}
        {animeCard(
          silentVoice,
          "'A Silent Voice' (Koe no Katachi) is a Japanese animated film that follows Shoya Ishida, who, tormented by past actions, seeks to make amends with Shoko Nishimiya, a deaf girl he bullied in elementary school, exploring themes of friendship, redemption, and the impact of bullying."
        )}
        {animeCard(
          yourName,
          "'Kimi no Na wa. (君の名は。 Your name.)' is a 2016 Japanese anime.Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person."
        )}
        {animeCard(
          iWantTo,
          "'I Want to Eat Your Pancreas' is a 2018 animated drama film about a high school student who discovers his classmate, Sakura Yamauchi, has a terminal illness, leading to an unlikely friendship and a journey of self-discovery and embracing life."
        )}
      </div>
    </>
  );
};

export default Entrance;
