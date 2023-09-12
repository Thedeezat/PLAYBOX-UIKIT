import grid from "../../../../image/grid.png";

import ElementContext from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: grid, text: "Caching Mechanisms" },
  { image: grid, text: "File Handling" },
  { image: grid, text: "Authentication Utilities" },
  { image: grid, text: "Encryption Utilities" },
  { image: grid, text: "Email Handling" },
  { image: grid, text: "Data Compression" },
  { image: grid, text: "Dependency Injection" },
  { image: grid, text: "Utilities Library" },
  { image: grid, text: "Statistics" },
  { image: grid, text: "Search and Indexing" },
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
