import image from "../../../../image/img.png";

import ElementModal from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: image, text: "Badge" },
  { image: image, text: "Lists" },
  { image: image, text: "Divider" },
  { image: image, text: "Typography" },
  { image: image, text: "Tables" },
  { image: image, text: "Data Grids" },
  { image: image, text: "Data Comparisons" },
  { image: image, text: "Charts and Graphs" },
];

export default function DataDisplay() {
  return (
    <section className="layoutPages">
      {" "}
      <h2 className="layoutPages_heading">Data display components</h2>
      <p className="layoutPages_info">
        Here is a list of all the prebuilt form components that PlayBox makes
        available for use.
      </p>
      {/* compoonets */}
      <div>
        <ElementModal imageTextArray={textLists} />
      </div>
      <p className="coming-soon"> More coming soon ✌️ </p>
    </section>
  );
}
