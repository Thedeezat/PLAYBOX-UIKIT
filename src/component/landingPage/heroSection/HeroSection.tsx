import styles from "./heroSection.module.scss";

import Lottie from "lottie-react";

import arrowRight from "../../../asset/lotties/arrow-right.json";

import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles.animation}></div>
      <div className={styles["hero-section__wrapper"]}>
        {/* hero-section contents */}
        <div>
          <h1>
            <span className={styles["text-purple"]}> Customize and save </span>{" "}
            components with no setup
          </h1>
          <p className={styles["hero-section__text"]}>
            {" "}
            Build interfaces swiftly and effectively with no fuss.{" "}
          </p>
          {/* Buttons */}
          <div className={styles["button-wrapper"]}>
            <Link to="/start-now">
              <button className={styles["hero-section__button"]}>
                {" "}
                <span> Start now </span>
                <Lottie
                  animationData={arrowRight}
                  className={styles["arrow"]}
                />
              </button>
            </Link>
            <button className={styles["hero-section__github"]}>
              <GitHubIcon fontSize="large" className={styles["github-icon"]} />
              <span> Github</span>
            </button>
          </div>
        </div>
      </div>
      {/* social media */}
      <div className={styles.bottom_wrapper}></div>{" "}
    </section>
  );
}
