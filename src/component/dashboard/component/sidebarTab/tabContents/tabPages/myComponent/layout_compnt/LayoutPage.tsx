import accordian from "../../../../image/accordian.png";

import nav from "../../../../image/navigation.png";

import sidebar from "../../../../image/sidebar.png";

import footer from "../../../../image/footer.png";

import links from "../../../../image/links.png";

import texts from "../../../../image/text.png";

import hero from "../../../../image/hero.png";

import image from "../../../../image/img.png";

import container from "../../../../image/container.png";

import grid from "../../../../image/grid.png";

import ElementContext from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: accordian, text: "Container Components" },
  { image: nav, text: "Navigation Bars" },
  { image: sidebar, text: "Sidebar" },
  { image: links, text: "Page Templates" },
  { image: texts, text: "Fluid Layouts" },
  { image: hero, text: "Tabbed Interfaces" },
  { image: footer, text: "Responsive Images" },
  { image: container, text: "Responsive Typography" },
  { image: image, text: "Collapsible Panels" },
  { image: grid, text: "Grid Systems" },
];

export default function LayoutPage() {
  return (
    <section className="layoutPages">
      <h2 className="layoutPages_heading">Layout components</h2>
      <p className="layoutPages_info">
        {" "}
        PlayBox offers prebuilt layout elements for usage in projects: below is
        a list of all the components.{" "}
      </p>

      {/* compoonets */}
      <div>
        <ElementContext imageTextArray={textLists} />
      </div>

      <p className="coming-soon"> More coming soon ✌️ </p>
    </section>
  );
}
