<style>
@font-face {
  font-family: "SofiaProLightAz";
  src: url(../fonts/SofiaProLightAz.otf) format("truetype"),
    url(../fonts/SofiaProLightAz.otf) format("truetype"),
    url(../fonts/SofiaProLightAz.otf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProUltraLightAz";
  src: url(../fonts/SofiaProUltraLightAz.otf) format("truetype"),
    url(../fonts/SofiaProUltraLightAz.otf) format("truetype"),
    url(../fonts/SofiaProUltraLightAz.otf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProMediumAz";
  src: url(../fonts/SofiaProMediumAz.otf) format("truetype"),
    url(../fonts/SofiaProMediumAz.otf) format("truetype"),
    url(../fonts/SofiaProMediumAz.otf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProExtraLightAz";
  src: url(../fonts/SofiaProExtraLightAz.otf) format("truetype"),
    url(../fonts/SofiaProExtraLightAz.otf) format("truetype"),
    url(../fonts/SofiaProExtraLightAz.otf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProLightAz";
  src: url(../fonts/SofiaProLightAz.otf) format("truetype"),
    url(../fonts/SofiaProLightAz.otf) format("truetype"),
    url(../fonts/SofiaProLightAz.otf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProBoldAz";
  src: url(../fonts/SofiaProBoldAz.otf) format("truetype"),
    url(../fonts/SofiaProBoldAz.otf) format("truetype"),
    url(../fonts/SofiaProBoldAz.otf) format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProRegularAz";
  src: url(../fonts/SofiaProRegularAz.otf) format("truetype"),
    url(../fonts/SofiaProRegularAz.otf) format("truetype"),
    url(../fonts/SofiaProRegularAz.otf) format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SofiaProBlackAz";
  src: url(../fonts/SofiaProBlackAz.otf) format("truetype"),
    url(../fonts/SofiaProBlackAz.otf) format("truetype"),
    url(../fonts/SofiaProBlackAz.otf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
* {
  box-sizing: border-box;
}

a :hover{
    text-decoration: none !important;
}

a:link { text-decoration: none !important;;  }


a:visited { text-decoration: none !important;; }


a:hover { text-decoration: none !important;; }


a:active { text-decoration: none !important;; }


.landing-page-section {
  overflow: hidden;
}

section.menu {
  display: flex;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
}

.menu-box {
  display: flex;
  height: 90px;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 33;
}

.menu-box .menu-links {
  display: flex;
  justify-content: space-evenly;
  width: 600px;
}

.menu .menu-links a {
  font-family: "SofiaProExtraLightAz";
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 46px;
  color: #ffffff;
  text-decoration: none;
}

.menu .menu-logo {
  height: 40px;
  width: 200px;
  display: flex;
  align-items: flex-end;
  background: url(../assets/LogoBlack.png);
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 15px;
}

section.landing-page {
  display: flex;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  text-transform: capitalize;
}

section .video-hero {
  background: rgba(21, 22, 20, 0.57);
}

.video-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
  height: 825px;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  background: rgba(21, 22, 20, 0.57);
  background: url(../assets/hero_landing.jpg) rgba(21, 22, 20, 0.57);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  background: rgba(21, 22, 20, 0.57);
}

#vidtop-content {
  display: flex;
  height: 680px;
  justify-content: start;
  position: absolute;
  align-content: center;
  align-items: flex-end;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
}

.vid-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  z-index: 88;
}

.vid-info h1 {
  font-family: "SofiaProBoldAz";
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: normal;
  color: #ffffff;
  display: flex;
  text-align: left;
}

.vid-info .btn-cta {
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 459px;
  height: 68px;
  background: #57f3bb;
  border-radius: 4px;
  cursor: pointer;
}

.vid-info .btn-cta a {
  font-family: "SofiaProMediumAz";
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 91%;
  color: #ffffff;
}

@media (min-aspect-ratio: 16/9) {
  .video-foreground {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video-foreground {
    width: 300%;
    left: -100%;
  }
}

@media all and (max-width: 600px) {
  .vid-info {
    width: 80%;
    padding: 0.5rem;
  }

  .vid-info h1 {
    margin-bottom: 0.2rem;
  }
}

@media all and (max-width: 500px) {
  .vid-info .acronym {
    display: none;
  }
}

.landing-page .hero {
  height: 825px;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  background: rgba(21, 22, 20, 0.57);
  background: url(../assets/hero_landing.jpg) rgba(21, 22, 20, 0.57);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.landing-page .hero iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  box-sizing: border-box;
  pointer-events: none;
}

.landing-page .title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 50%;
  z-index: 88;
}

.landing-page .title h1 {
  font-family: "SofiaProBoldAz";
  font-style: normal;
  font-weight: bold;
  font-size: 85px;
  line-height: 91%;
  color: #ffffff;
  display: flex;
}

.landing-page .btn-cta {
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 250px;
  height: 68px;
  background: -webkit-linear-gradient(94.23deg, #c51e05 0%, #e5691d 100%);
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
}

.landing-page .btn-cta a {
  font-family: "SofiaProMediumAz";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 91%;
  color: #ffffff;
  text-decoration: none;
}

.landing-page .content1 {
  margin-top: 50px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: none;
}

.landing-page p {
}

.landing-page .content1 .sub-title {
  font-family: "SofiaProBoldAz";
  font-weight: 700;
  font-size: 53px;
  line-height: 105px;
  letter-spacing: -0.02em;
  color: #c51e05;
}

.landing-page .content1 .sub-title span {
  color: #32e6a5;
  font-family: "SofiaProBlackAz";
}

.text-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.text {
  font-family: "SofiaProExtraLightAz";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 107%;
  color: #000000;
}

.landing-page .pricing {
  margin-bottom: 50px;
  display: flex;
  background-color: #57f3bb;
  width: 100vw;
  height: 800px;
}

.pricing .pricing-plan {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricing .pricing-plan .pricing-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding-right: 30px;
  padding-left: 30px;
}

.pricing-card .price-card-content {
  border-right: 2px solid #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.price-card-content[name="last"] {
  border-right: none;
}

.pricing-card .pricing-type {
  font-family: "SofiaProMediumAz";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: normal;
  display: flex;
  align-items: center;
  color: #ffffff;
}

.pricing-card .pricing-amount {
  flex-wrap: wrap;
  display: flex;
  align-items: baseline;
  width: 100%;
  justify-content: center;
}

.pricing-card .pricing-amount .card-price {
  font-family: "SofiaProBoldAz";
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: normal;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
}

.pricing-card .pricing-amount .card-month {
  font-family: "SofiaProBoldAz";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 129%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  text-transform: lowercase;
}

.pricing-card .price-box {
  margin-top: 15px;
  margin-bottom: 15px;
  height: 319px;
}

.pricing-card .price-box .price-info {
  font-family: "SofiaProLightAz";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 43px;
  display: flex;
  align-items: center;
  color: #000000;
  justify-content: center;
}

.pricing-card .price-btn {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 300px;
  height: 50px;
  background: #ffffff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pricing-card .price-btn a {
  font-family: "SofiaProMediumAz";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 91%;
  color: #57f3bb;
}

.landing-page .image-section {
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
}

.landing-page .image-people {
  background: url(../assets/influencers1.png);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: contain;
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.landing-page .card {
  background: #ffffff;
  box-shadow: 0px 4px 23px 10px rgb(0 0 0 / 9%);
  width: 100%;
  z-index: 99;
  margin-top: -136px;
  padding: 50px;
  height: 500px;
  margin-right: 20%;
  margin-left: 20%;
}

.landing-page .card .card-title {
  font-family: "SofiaProBlackAz";
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  line-height: 120px;
  letter-spacing: -0.015em;
  color: #000000;
  height: 100px;
  text-transform: none;
}

.landing-page .card .card-title span {
  color: #57f3bb;
  font-family: "SofiaProBlackAz";
  background: -webkit-linear-gradient(
    179.54deg,
    #3de2a7 26.75%,
    #6affca 99.61%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.landing-page .card .card-subtitle {
  font-family: "SofiaProLightAz";
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 43px;
  color: #000000;
  margin-top: 15px;
  text-transform: none;
  height: auto;
}
.landing-page .present-section {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}
.present-section .text-present {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
}
.text-present .present-title {
  font-family: "SofiaProBoldAz";
  font-weight: 700;
  font-size: 53px;
  line-height: 50px;
  letter-spacing: -0.02em;
  color: #c51e05;
  text-align: left;
}
.text-present .present-subtitle {
  font-family: "SofiaProLightAz";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: normal;
  letter-spacing: -0.02em;
  color: #680e01;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
}
.present-section .image-instagram {
  background: url(../assets/influencers2.png);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: contain;
  display: flex;
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.landing-page .info-section {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}
.info-section .text-info {
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 7%;
  width: 100%;
}
.info-section .images-info {
  height: auto;
  width: 100%;
  background: #ffffff;
  box-shadow: -5px 3px 42px rgb(104 14 1 / 8%);
  border-radius: 6px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 45px;
  padding-right: 45px;
}
.info-section .image-info1 {
  background: url(../assets/influencers3.png);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: contain;
  height: 500px;
  width: 100%;
  display: flex;
}
.info-section .image-info2 {
  background: url(../assets/influencers4.png);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: contain;
  height: 500px;
  width: 100%;
  display: flex;
}
.info-section .image-info3 {
  background: url(../assets/influencers5.png);
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-size: contain;
  height: 500px;
  width: 100%;
  display: flex;
}
.landing-page .bottom-section {
  margin-top: 50px;
  z-index: 55;
}
.landing-page .bottom-section-green {
  background: #57f3bb;
  margin-bottom: 30px;
  margin-top: -19px;
}
.bottom-section .title-top {
}
.bottom-section .title-bottom {
  background: #57f3bb;
}
.bottom-section-green .title-bottom .sub-title-bottom {
  font-style: normal;
  font-family: "SofiaProBoldAz";
  font-weight: 900;
  font-size: 108px;
  line-height: 108px;
  color: #ffffff;
  text-transform: none;
}
.bottom-section .title-top .sub-title-bottom {
  font-style: normal;
  font-family: "SofiaProBlackAz";
  font-weight: 900;
  font-size: 40px;
  line-height: 53px;
  color: #c51e05;
  text-transform: none;
  text-align: center;
}
.bottom-section .title-top .sub-title-bottom2 {
  font-family: "SofiaProMediumAz";
  font-style: normal;
  font-weight: 500;
  font-size: 53px;
  line-height: normal;
  text-align: center;
  color: #680e01;
}
.landing-page .footer {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.footer .btn-cta {
}
.footer .image-logo {
  height: 40px;
  width: 152px;
  display: flex;
  align-items: flex-end;
  background: url(../assets/ninjaoutreach_new.png);
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 50px;
}
.footer .social-icons {
  margin-top: 15px;
  border-top: 1px solid #c51e05;
  width: 454px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
}
.footer .social-icons .icon1 {
  width: 35px;
  height: 35px;
  background: url(../assets/tik_tok_orange.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  margin-top: 30px;
}
.footer .social-icons .icon2 {
  width: 35px;
  height: 35px;
  background: url(../assets/instagram_orange.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  margin-top: 30px;
}
.footer .social-icons .icon3 {
  width: 35px;
  height: 35px;
  background: url(../assets/twitter_orange.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  margin-top: 30px;
}
.footer .social-icons .icon4 {
  width: 35px;
  height: 35px;
  background: url(../assets/linkdin_orange.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  margin-top: 30px;
}
.footer .social-icons .icon5 {
  width: 35px;
  height: 35px;
  background: url(../assets/youtube_orange.svg);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  margin-top: 30px;
}
.landing-page .footer-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1600px) {
  .video-background {
    height: 700px;
  }
  #vidtop-content {
    bottom: 15%;
    height: auto;
  }
  .landing-page .hero {
    height: 800px;
  }
  .vid-info h1 {
    font-size: 60px;
  }
  .landing-page .btn-cta a {
    font-size: 30px;
  }
  .pricing-card .price-box .price-info {
    font-size: 17px;
  }
  .landing-page .content1 .sub-title {
    font-size: 50px;
    line-height: 100px;
  }
  .landing-page .card .card-title {
    font-size: 80px;
    line-height: 80px;
  }
  .bottom-section .title-top .sub-title-bottom {
    font-size: 50px;
  }
  .text-present .present-title {
    font-size: 40px;
  }
  .bottom-section-green .title-bottom .sub-title-bottom {
    font-size: 80px;
  }
}
@media screen and (max-width: 1200px) {
  .video-background {
    height: 660px;
  }
  #vidtop-content {
    bottom: 25%;
  }
  .vid-info h1 {
    font-size: 40px;
    line-height: 60px;
    text-align: left;
  }
  .landing-page .btn-cta a {
    font-size: 20px;
  }
  .landing-page .content1 {
    margin-top: 100px;
  }
  .landing-page .content1 .sub-title {
    font-size: 60px;
    line-height: 60px;
  }
  .landing-page .image-people {
    /* background-size: contain; */
    height: 400px;
  }
  .landing-page .card {
    height: 500px;
    margin-top: -250px;
    margin-right: 10%;
    margin-left: 10%;
  }
  .landing-page .card .card-title {
    font-size: 60px;
    line-height: 60px;
    height: auto;
  }
  .landing-page .pricing {
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
  }
  .pricing .pricing-plan {
    flex-direction: column;
  }
  .pricing .pricing-plan .pricing-card {
    align-items: center;
    border-bottom: 3px solid #000000;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .pricing .pricing-plan .pricing-card[name="last"] {
    border: none;
  }
  .pricing-card .price-card-content {
    border: none;
    align-items: center;
  }
  .pricing-card .price-box {
    height: auto;
  }
  .landing-page .bottom-section {
    margin-top: 30px;
  }
  .bottom-section .title-top .sub-title-bottom {
    font-size: 60px;
    line-height: 60px;
  }
  .bottom-section-green .title-bottom .sub-title-bottom {
    font-size: 60px;
    line-height: 50px;
  }
  .landing-page .footer {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 768px) {
  #vidtop-content {
    bottom: 50%;
  }
  .video-background {
    height: 471px;
  }
  .vid-info h1 {
    font-size: 36px;
    line-height: 36px;
  }
  .landing-page .btn-cta {
    width: 250px;
    height: 50px;
  }
  .landing-page .btn-cta a {
    font-size: 20px;
  }
  .landing-page .content1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .landing-page .content1 .sub-title {
    font-size: 36px;
    line-height: 36px;
  }
  .landing-page .image-people {
    background-size: cover;
    height: 300px;
  }
  .landing-page .card {
    height: 400px;
    margin-top: 30px;
    margin-right: 0;
    margin-left: 0;
    width: 80%;
    margin: 0 auto;
  }
  .bottom-section .title-top .sub-title-bottom2 {
    font-size: 30px;
  }

  .landing-page .card .card-title {
    font-size: 36px;
    line-height: 36px;
    margin: 0;
  }
  .landing-page .bottom-section {
    margin-top: 30px;
  }
  .bottom-section .title-top .sub-title-bottom {
    font-size: 30px;
    line-height: 36px;
  }
  .bottom-section-green .title-bottom .sub-title-bottom {
    font-size: 36px;
    line-height: 36px;
  }
  .landing-page .footer {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .landing-page .footer-top {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer .social-icons {
    width: 100%;
  }
  .landing-page .present-section {
    display: flex;
    flex-direction: column;
    margin-top: 15x;
    margin-bottom: 15px;
  }
  .present-section .text-present {
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .landing-page .info-section {
    display: flex;
    flex-direction: column-reverse;
  }
}
@media screen and (max-width: 480px) {
  .video-background {
    height: 420px;
    /* background: url(../assets/hero_landing_m.png) rgba(21, 22, 20, 0.57);
    background-repeat: no-repeat;
    background-size:cover; */
  }
  #vidtop-content {
    height: 400px;
    bottom: 5%;
  }
  .vid-info {
    bottom: 5%;
  }
  .present-section .image-instagram {
    height: 380px;
  }
  .landing-page .present-section {
    display: flex;
    flex-direction: column;
    margin-top: 15x;
    margin-bottom: 15px;
  }
  .present-section .text-present {
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .landing-page .info-section {
    display: flex;
    flex-direction: column-reverse;
  }
  .info-section .image-info1 {
    height: 200px;
    background-size: cover;
  }
  .info-section .image-info2 {
    height: 200px;
    background-size: cover;
  }
  .info-section .image-info3 {
    background-size: cover;
    height: 200px;
  }
  .text-present .present-title {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
  .text-present .present-subtitle {
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }

  .info-section .text-info {
    margin: 0;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .info-section .text-info .text-present {
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
  }
  .menu-box {
    flex-direction: row;
  }
  .menu-box .menu-links {
    justify-content: space-between;
    width: 100%;
  }
  .menu .menu-links a {
    font-size: 18px;
    text-decoration: none;
  }
  .vid-info h1 {
    font-size: 30px;
    line-height: 30px;
  }
  .landing-page .btn-cta {
    width: 220px;
    height: 50px;
  }
  .landing-page .btn-cta a {
    font-size: 18px;
  }
  .landing-page .content1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .landing-page .content1 .sub-title {
    font-size: 30px;
    line-height: 30px;
  }
  .landing-page .image-people {
    background-size: contain;
    height: 212px;
    /* background: url(../assets/influencers1_mobile.png); */
  }
  .landing-page .card {
    height: 250px;
    margin-top: 30px;
    margin-right: 0;
    margin-left: 0;
    width: 400px;
    padding: 30px;
  }
  .landing-page .card .card-title {
    font-size: 30px;
    line-height: 30px;
    margin: 0;
  }
  .pricing-card .price-btn {
    width: 220px;
    height: 50px;
  }
  .pricing-card .price-btn a {
    font-size: 26px;
  }
  .landing-page .card .card-subtitle {
    font-size: 18px;
  }
  .landing-page .bottom-section {
    margin-top: 30px;
  }
  .bottom-section .title-top .sub-title-bottom {
    font-size: 20px;
    line-height: 20px;
  }
  .bottom-section .title-top .sub-title-bottom2 {
    font-size: 20px;
    line-height: 20px;
  }
  .landing-page .bottom-section-green {
    margin-bottom: 10px;
  }
  .landing-page .footer {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .landing-page .footer-top {
    width: 100%;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
  width: 100%;
}

.header__menu {
  margin-top: -9px;
}

.header__logo {
  width: 200px;
  height: 29px;
  padding: 0 10px;
}

.header__buttons {
  display: flex;
  .booked & {
    display: none;
  }
}

a {
  text-decoration: none;
}

.nav-container {
  display: flex;
  z-index: 99;
}

.hamburger {
  display: flex;
  flex-direction: column;
  height: 25px;
  justify-content: space-between;
  margin: 1em 1em;
  z-index: 3;
}

.hamburger:hover {
  cursor: pointer;
}

.nav-bar {
  width: 32px;
  height: 3px;
  background-color: #ffffff !important;
  transition: 500ms ease-in-out all;
}

.nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.menu-container {
  display: flex;
  justify-content: center;
  width: 400px;
  background-color: #37474f;
  height: 100px;
}

.dropdown {
  position: absolute !important;
  background: #37474f 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 15px;
  display: none;
}

.dropdown-active {
  right: 0;
  top: -50px;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100%;
  padding-right: 30px;
  padding-left: 30px;
  border: none !important;
  text-align: left;
}

.dropdown p {
    font-size:26px;
    font-family: 'SofiaProLightAz';
    color: white;
    margin: 15px;
    transition: 200ms ease all;
    text-transform:uppercase;
}
.dropdown .sub-item p {
    margin-left: 10%;
    font-size: 22px;
}

.dropdown a:hover {
  border: none !important;
}

.dropdown p:hover {
  cursor: pointer;
  border-bottom: 1px solid #000000;
}

.one-active {
  background-color: #ffffff !important;
  transform: translateY(13px) rotate(45deg);
}

.two-active {
  display: none;
}

.three-active {
  background-color: #ffffff !important;
  transform: translateY(-9px) rotate(135deg);
}

@media (max-width: 768px) {
  .header {
    padding: 20px;
  }
  .header__logo {
    width: 100%;
  }
  .header__menu {
    margin-top: 0;
  }
  .dropdown {
    width: 50%;
  }
  .dropdown-active {
    padding-right: 15px;
    padding-left: 15px;
  }
  .dropdown .sub-item p {
    margin-left: 15px;
    font-size: 12px;
  }
  .dropdown p {
    font-size: 16px;
    margin: 10px;
  }
}
</style>

<template>
  <div class="landing-page-section">
    <div class="container-fluid menu">
      <div class="menu-box container-fluid">
        <div class="menu-logo"></div>
        <nav class="nav-container">
          <div class="hamburger" @click="onDropClick($event)">
            <div class="nav-bar one"></div>
            <div class="nav-bar two"></div>
            <div class="nav-bar three"></div>
          </div>
         <div class="dropdown">
      <a href="/">
        <p class="drop-item">HOME</p>
      </a>
      <a href="/influencers/">
        <p class="drop-item">FOR INFLUENCERS</p>
      </a>

      <a href="https://app.ninjaoutreach.com/onboarding-signup?ad_campaign=Google_PPC">
        <p class="drop-item">FOR BRANDS </p>
      </a>



      <a href="#">
        <p class="drop-item">ABOUT</p>
      </a>



      <a class="sub-item" href="/about.html">
        <p class="drop-item">OUR DNA
        </p>
      </a>

      <a class="sub-item" href="/wp/team/">
        <p class="drop-item">LEADERSHIP TEAM
        </p>
      </a>

      <a class="sub-item" href="/wp/careers/">
        <p class="drop-item">CAREERS
        </p>
      </a>

      <a class="" href="/wp/news/">
        <p class="drop-item">BLOG
        </p>
      </a>


      <a href="/book.html">
        <p class="drop-item">CONTACT</p>
      </a>
      <a href="" @click="ctaLogin()" >
        <p class="drop-item">LOGIN</p>
      </a>
    </div>
        </nav>
      </div>
    </div>

    <div class="container-fluid landing-page">
      <div class="row">
        <div class="video-hero">
          <div class="video-background"></div>

          <div id="vidtop-content" class="container">
            <div class="vid-info">
              <h1>
                Grow your community and <br />
                earning potential
              </h1>
              <div class="btn-cta" @click="ctaLanding()">
                <a class="free-trial-btn">
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="content1 container" id="section1">
          <p class="sub-title">
            All your social profiles in one space
          </p>
        </div>

        <div class="container image-section">
          <div class="image-people"></div>
        </div>

        <div class="container present-section">
          <div class="text-present">
            <div class="present-title">
              Be your <br />
              best self
            </div>
            <div class="present-subtitle">
              Create and present your own content portfolio
            </div>
            <div class="btn-cta" @click="ctaLanding">
              <a class="free-trial-btn">
                Join now
              </a>
            </div>
          </div>
          <div class="image-instagram"></div>
        </div>

        <div id="info1" class="container info-section">
          <div class="images-info">
            <div class="image-info1"></div>
          </div>

          <div class="text-info">
            <div class="text-present">
              <div class="present-title">
                Create and manage colaborations
              </div>
              <div class="present-subtitle">
                Discover and connect to amazing brands that are looking for
                creators like you
              </div>
              <div class="btn-cta" @click="ctaLanding()">
                <a class="free-trial-btn">
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="info2" class="container info-section">
          <div class="images-info">
            <div class="image-info2"></div>
          </div>

          <div class="text-info">
            <div class="text-present">
              <div class="present-title">
                Add and remove content <br />
                in one space
              </div>
              <div class="present-subtitle">
                Add and remove content in your partner collaborations space.
              </div>
              <div class="btn-cta" @click="ctaLanding()">
                <a class="free-trial-btn">
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="info3" class="container info-section">
          <div class="images-info">
            <div class="image-info3"></div>
          </div>

          <div class="text-info">
            <div class="text-present">
              <div class="present-title">
                Communication made easy
              </div>
              <div class="present-subtitle">
                Use dedicated chat channels to talk to your partners
              </div>
              <div class="btn-cta" @click="ctaLanding()">
                <a class="free-trial-btn">
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-section container">
          <div class="title-top">
            <p class="sub-title-bottom">
              Every brand in the world wants to collaborate
              <br />
              with content creators like you
            </p>
            <p class="sub-title-bottom2">
              Make sure they find you!
            </p>
          </div>
        </div>

        <div class="footer container">
          <div class="footer-top">
            <div class="btn-cta" @click="ctaLanding()">
              <a class="free-trial-btn">
                Join now
              </a>
            </div>
            <div class="image-logo"></div>
          </div>

          <div class="social-icons">
            <a
              class=""
              href="https://www.linkedin.com/company/ninjaoutreach/"
              target="_blank"
              rel="noopener nofollow"
            >
              <i class="icon4" title="NinjaOutreach twitter"></i>
            </a>

            <a
              class=""
              href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1"
              target="_blank"
              rel="noopener nofollow"
            >
              <i class="icon1" title="NinjaOutreach Tik Tok"></i>
            </a>

            <a
              class=""
              href="https://www.instagram.com/ninjaoutreach/?hl=en"
              target="_blank"
              rel="noopener nofollow"
            >
              <i class="icon2" title="NinjaOutreach instagram"></i>
            </a>

            <a
              class=""
              href="https://twitter.com/ninjaoutreach"
              target="_blank"
              rel="noopener nofollow"
            >
              <i class="icon3" title="NinjaOutreach twitter"></i>
            </a>

            <a
              class=""
              href="https://www.youtube.com/channel/UC30tDBHDZT54Q3n1Aty9exw"
              target="_blank"
              rel="noopener nofollow"
            >
              <i class="icon5" title="NinjaOutreach twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";

export default {
  name: "LandingPage",
  data() {
    return {};
  },
  methods: {
    ctaLanding: function() {
      mixpanel.track("App", { category: "Common", label: "LandingPage_Cta" });
      userengage("event.LandingPage_Cta");

      router.push({ name: "SignUpPage" });
    },
    ctaLogin: function() {
      mixpanel.track("App", { category: "Common", label: "LandingPage_Cta" });
      userengage("event.LandingPage_Cta");

      router.push({ name: "Login" });
    },
    onDropClick: function(e) {
      console.log("e", e);
      const dropdown = e.currentTarget.nextElementSibling;
      const burgerBars = [].slice.call(e.currentTarget.children);
      const dropdown_div = document.querySelector(".dropdown");

      if (!dropdown.classList.contains("dropdown-active")) {
        dropdown_div.style.display = "flex";

        dropdown.classList.add("dropdown-active");
        burgerBars[0].classList.add("one-active");
        burgerBars[1].classList.add("two-active");
        burgerBars[2].classList.add("three-active");
      } else if (dropdown.classList.contains("dropdown-active")) {
        dropdown_div.style.display = "none";

        dropdown.classList.remove("dropdown-active");
        burgerBars[0].classList.remove("one-active");
        burgerBars[1].classList.remove("two-active");
        burgerBars[2].classList.remove("three-active");
      }
    },
  },
};
</script>
