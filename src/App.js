import { Header } from "./Header/Header";
import { Vilijun } from "./Vilijun/Vilijun";
import { QuoteGen } from "./QuoteGen/QuoteGen";
import style from "./style/main.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { HrvatskaKulturnaPutovnica } from "./HrvatskaKulturnaPutovnica/HrvatskaKulturnaPutovnica";
import KruznaKreativnost from "./KruznaKreativnost/KruznaKreativnost";
import { PozivNaSuradnju } from "./PozivNaSuradnju/PozivNaSuradnju";
import { Footer } from "./Footer/Footer";
import { Ratings } from "./PozivNaSuradnju/Rating/Rating";

function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pozadina/pos1.jpg"
              })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid black"
          }}
        >
          <Header />
          <Vilijun />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pozadina/pos4.png"
              })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid #fff"
          }}
        >
          <QuoteGen />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pozadina/pozadina3.svg"
              })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid black",
          }}
        >
          <HrvatskaKulturnaPutovnica />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL +
              "/assets/pozadina/pos2.png"
              })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderBottom: "2px solid #fff"
          }}
        >
          <KruznaKreativnost />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pozadina/pos7.png"
              })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <PozivNaSuradnju />
          <Ratings />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
