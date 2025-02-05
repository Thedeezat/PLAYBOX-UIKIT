import hero from "../../../../image/hero.png";
import ElementContext from "../ElementModal";
import {
  Input,
  Button,
  Checkbox,
  RadioButton,
  Rating,
  Select,
  Slider,
  Switch,
  DropDown,
  ToggleButton,
} from "../../../../../../../../constants/db";

interface ImageTextObject {
  image: string;
  text: string;
  sourceCode: string;
}

const textLists: ImageTextObject[] = [
  { image: hero, text: "Input", sourceCode: Input },
  { image: hero, text: "Button", sourceCode: Button },
  { image: hero, text: "Checkbox", sourceCode: Checkbox },
  { image: hero, text: "Radio button", sourceCode: RadioButton },
  { image: hero, text: "Rating", sourceCode: Rating },
  { image: hero, text: "Select", sourceCode: Select },
  { image: hero, text: "Slider", sourceCode: Slider },
  { image: hero, text: "Switch", sourceCode: Switch },
  { image: hero, text: "Drop down", sourceCode: DropDown },
  { image: hero, text: "Toogle button", sourceCode: ToggleButton },
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
