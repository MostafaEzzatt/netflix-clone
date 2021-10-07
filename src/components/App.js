import "../styles/index.scss";
import Header from "./Header";
import Sections from "./Sections";
import Question from "./Question";
import Footer from "./Footer";

// Images
import tvImage from "../images/tv.png";
import mobileImage from "../images/sectionMobile.jpg";
import mobilePoster from "../images/poster.png";
import macScreen from "../images/macScreen.png";
import kids from "../images/kids.png";

// Videos
import videoTV from "../videos/video-tv.m4v";
import videoMac from "../videos/video-devices.m4v";

const App = () => {
  return (
    <>
      <Header />
      <Sections
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        elmCase="tv"
        image={tvImage}
        media={{
          url: { videoTV }, //https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v
        }}
      />

      <Sections
        title="Download your shows to watch offline."
        subtitle="Save your favorites easily and always have something to watch."
        image={mobileImage}
        elmCase="mobile"
        media={{
          poster: mobilePoster,
          title: "Stranger Things",
          url: { mobilePoster },
        }}
        reversed={true}
      />

      <Sections
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        elmCase="mac"
        image={macScreen}
        media={{
          url: { videoMac }, //https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v
        }}
      />

      <Sections
        title="Create profiles for kids."
        subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        elmCase="image"
        image={kids}
        media=""
        reversed={true}
      />

      <Question />

      <Footer />
    </>
  );
};

export default App;
