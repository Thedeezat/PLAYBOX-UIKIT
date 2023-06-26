import grid from "../../../../image/grid.png";

import ElementContext from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: grid, text: "Modal" },
  { image: grid, text: "Popover" },
  { image: grid, text: "Sidebar" },
  { image: grid, text: "Dropdown" },
  { image: grid, text: "Tooltip" },
  { image: grid, text: "Transition" },
  { image: grid, text: "Statistics" },
];

export default function UtilitiesPage() {
  return (
    <section className="layoutPages">
      {" "}
      <h2 className="layoutPages_heading">Utility components</h2>
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
