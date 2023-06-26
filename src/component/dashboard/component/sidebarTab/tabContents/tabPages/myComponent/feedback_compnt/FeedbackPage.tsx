import footer from "../../../../image/footer.png";

import ElementContext from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: footer, text: "Alert" },
  { image: footer, text: "Progress" },
  { image: footer, text: "Skeleton" },
  { image: footer, text: "Dialog" },
  { image: footer, text: "Spinner" },
  { image: footer, text: "Toast" },
  { image: footer, text: "Loader" },
];

export default function FeedbackPage() {
  return (
    <section className="layoutPages">
      {" "}
      <h2 className="layoutPages_heading">Feedback components</h2>
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
