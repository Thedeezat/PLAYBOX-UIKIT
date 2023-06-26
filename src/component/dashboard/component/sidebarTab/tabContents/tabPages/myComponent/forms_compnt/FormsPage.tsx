import hero from "../../../../image/hero.png";

import ElementContext from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: hero, text: "Input" },
  { image: hero, text: "Button" },
  { image: hero, text: "Checkbox" },
  { image: hero, text: "Radio button" },
  { image: hero, text: "Rating" },
  { image: hero, text: "Select" },
  { image: hero, text: "Slider" },
  { image: hero, text: "Switch" },
  { image: hero, text: "Drop down" },
  { image: hero, text: "Toogle button" },
];

export default function FormsPage() {
  return (
    <section className="layoutPages">
      {" "}
      <h2 className="layoutPages_heading">Form components</h2>
      <p className="layoutPages_info">
        Here is a list of all the prebuilt form components that PlayBox makes
        available for use.
      </p>
      {/* compoonets */}
      <div>
        <ElementContext imageTextArray={textLists} />
      </div>
      <p className="coming-soon"> More coming soon ✌️ </p>
    </section>
  );
}
