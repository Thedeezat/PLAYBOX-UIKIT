import image from "../../../../image/img.png";
import ElementModal from "../ElementModal";
import {
  Badge,
  Lists,
  Divider,
  Typography,
  Tables,
  DataGrids,
  DataComparisons,
  ChartsAndGraphs,
} from "../../../../../../../../constants/db";

interface ImageTextObject {
  image: string;
  text: string;
  sourceCode: string;
}

const textLists: ImageTextObject[] = [
  { image: image, text: "Badge", sourceCode: Badge },
  { image: image, text: "Lists", sourceCode: Lists },
  { image: image, text: "Divider", sourceCode: Divider },
  { image: image, text: "Typography", sourceCode: Typography },
  { image: image, text: "Tables", sourceCode: Tables },
  { image: image, text: "Data Grids", sourceCode: DataGrids },
  { image: image, text: "Data Comparisons", sourceCode: DataComparisons },
  { image: image, text: "Charts and Graphs", sourceCode: ChartsAndGraphs },
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
