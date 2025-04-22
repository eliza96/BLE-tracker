import Image from "next/image";
import Header from "@/components/Header";

import "./globals.css";

export default function Home() {
  return (
    <div className="landing-page layout-design">
      <main className="landing-page_main layout-design_main">
        <Header />
        <div className="bg--blobs">
          <img
            src="/1.svg" // Path relative to the `public` folder
            alt="Decorative SVG"
          />
          <img
            src="/elder2.svg" // Path relative to the `public` folder
            alt="Elderly"
            className="bg--blobs__elder-image"
          />
          <img
            src="/hill.svg" // Path relative to the `public` folder
            alt="hill"
            className="bg--blobs__hill"
          />{" "}
        </div>
        <section className="welcome-section">
          <div className="welcome-content">
            <h1 className="welcome-title">
              Welcome <span className="elegance">Elegance</span>
            </h1>
            <p className="welcome-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
            <button className="welcome-button">Learn More</button>
          </div>
        </section>
        <div className="decorative-lines">
          <div className="btn-container">
            <div className="button-top"></div>
            <div className="button-bottom"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
