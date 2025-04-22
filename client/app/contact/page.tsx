import Header from "@/components/Header";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="about-page layout-design">
      <main className="layout-design_main">
        <Header />

        <div className="about--blobs">
          <img
            src="../wave-1.svg" // Path relative to the `public` folder
            alt="Decorative SVG"
            className="wave-1"
          />
        </div>
      </main>
    </div>
  );
}
