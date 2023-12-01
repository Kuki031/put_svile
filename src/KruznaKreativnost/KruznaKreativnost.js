import React, { Component } from "react";
import Slider from "react-slick";
import { SektorKreativneIndustrije } from "./SektorKreativneIndustrije/SektorKreativneIndustrije";

export default class KruznaKreativnost extends Component {
  images = [];

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="kruzna-kreativnost-box" id="kruzna-kreativnost-box">
          <h2 className="kruzna-kreativnost-header">KRUŽNA KREATIVNOST</h2>
          <p className="slider-text">
            Kružnost kreativne industrije posjeduje potencijale sumjerljive
            potencijalima kružnosti i svake druge industrije. Razlika od koje je
            potrebno krenuti nalazi se u definiranju „sirovine“ (u kreativnoj
            industriji riječ sirovinu predstavlja autorska ideja), mogućnostima
            i načinima njezina „kruženja“ kroz sve sektore kreativne industrije
            te određivanju cilja, misije i vizije koji se takvom, kružnom
            proizvodnjom postižu posebice ukoliko su usmjereni na godinilobalno
            brendiranje zajednica ili proizvoda. U takvom teorijskom
            promišljanju kružnosti kreativne industrije polazi se od Throsbyjeva
            Koncentričnog kružnog modela (Throsby, 2008).
          </p>

          {/* <div className="image-holder">
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL + "/assets/slider/01 - Arhitektura.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL +
                "/assets/slider/02 - Audiovizualna.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL + "/assets/slider/03 - Glazba.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL +
                "/assets/slider/04 - Izvedbene umjetnosti.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL +
                "/assets/slider/05 - Knjiga, nakladništvo.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL + "/assets/slider/06 - Mediji.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL + "/assets/slider/07 - Oglašavanje.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL +
                "/assets/slider/08 - Primijenjene umjetnosti.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL +
                "/assets/slider/09 - Računalne igre, novi mediji.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL +
                "/assets/slider/10 - Vizualne umjetnosti.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL + "/assets/slider/11 - Dizajn.png"
                }`}
            />
          </div>
          <div>
            <SektorKreativneIndustrije
              src={`${process.env.PUBLIC_URL + "/assets/slider/12 - Baština.png"
                }`}
            />
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}
