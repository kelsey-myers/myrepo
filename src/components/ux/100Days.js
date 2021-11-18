import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

/* Importing Gallery Images */

const images = [
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day1Mockup_w9ikM98DKcX.png",
    alt: "Day 1: Signup Form",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day2Mockup_UhkMlJcVC.png",
    alt: "Day 2: Card Payment",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day3Mockup_lrJ0Dv4XIY.png",
    alt: "Day 3: Landing Page - Mobile",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day3MockupW_2oo17ioyvvX.png",
    alt: "Day 3: Landing Page - Web",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day4Mockup_dkNM86dO0.png",
    alt: "Day 4: Grade Calculator",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day5Mockup_SIAe08u00.png",
    alt: "Day 5: App Icon",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day6Mockup_epuTfb1xyY9.png",
    alt: "Day 6: Social Media Profile",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day7Mockup_yRFL3dmyg.png",
    alt: "Day 7: Settings Page",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day8Mockup_cuF1k2ap6.png",
    alt: "Day 8: 404 Error Page",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day9Mockup_IQterHtqE0f.png",
    alt: "Day 9: Music Player",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day10Mockup_n97QwD-Lm.png",
    alt: "Day 10: Share Button",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day11Mockup_dTQSpR90f67.png",
    alt: "Day 11: Success/Error Flash Message",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day12Mockup_Bx6jjO_xVXZ.png",
    alt: "Day 12: E-Commerce Item",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day13Mockup_BVfFF7lubVUW.png",
    alt: "Day 13: Direct Messages",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day14Mockup_gLmTRIvhDRQH.png",
    alt: "Day 14: Countdown Timer",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day15Mockup_zKFDFbJspkkt.png",
    alt: "Day 15: On/Off Switch",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day16Mockup_Hbrg7TwQJf.png",
    alt: "Day 16: Pop-up",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day17Mockup_XpvLgYSg4.png",
    alt: "Day 17: Email Receipt",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day18Mockup_ureDELz00BGo.png",
    alt: "Day 18: Analytics Chart",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day19Mockup_Qu0-Xn1yih.png",
    alt: "Day 19: Leaderboard",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day20Mockup_ReHuIUc7ven1.png",
    alt: "Day 20: Location Tracker",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day21Mockup_bybLhWao06ZA.png",
    alt: "Day 21: Home Monitoring Dashboard",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day22Mockup_SR3Lzsz_A.png",
    alt: "Day 22: Search",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day23Mockup1__aCy-O6xf3iu.png",
    alt: "Day 23: Onboarding (1)",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day23Mockup2_lQLN_GLBD2Hz_.png",
    alt: "Day 23: Onboarding (2)",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day23Mockup3_BERW3VW1i.png",
    alt: "Day 23: Onboarding (3)",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day23Mockup4_AUYo4OwBVL.png",
    alt: "Day 23: Onboarding (4)",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day24Mockup_QEOY0xcJz1dM.png",
    alt: "Day 24: Boarding Pass",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day25Mockup_Anlo9vO2A.png",
    alt: "Day 25: TV App",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day25Mockup___1_ZlRSiq8K7KUl.png",
    alt: "Day 25: TV App",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day26Mockup_whZtp8oFE.png",
    alt: "Day 26: Subscribe",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day27Mockup_x3C6KewDSBwn.png",
    alt: "Day 27: Dropdown",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day28Mockup_KFkzHB3X1.png",
    alt: "Day 28: Contact Us",
    class: "gallery-img-ux hundred w-100",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day29Mockup_wg4Hi6SqkxPp.png",
    alt: "Day 29: Map",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day30Mockup_S_BR4XmZg.png",
    alt: "Day 30: Pricing",
    class: "gallery-img-ux hundred",
  },
  {
    image:
      "https://ik.imagekit.io/kelseymyers0/UX/100_Days/Day31Mockup_0yRuAh-a7ZGW.png",
    alt: "Day 31: File Upload",
    class: "gallery-img-ux hundred",
  },
];

/* {
  image:
    "",
  alt: "Day x: ",
  class: "gallery-img-ux hundred",
}, */

export default function HundredDays() {
  return (
    <div id="100days">
      <Carousel indicators={false} interval={null}>
        {images.map((img) => (
          <Carousel.Item>
            <a href={img.image} target="_blank" rel="noopener noreferrer">
              <img className={img.class} src={img.image} alt={img.alt} />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
