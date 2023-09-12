import footer from "../../../../image/footer.png";

import ElementContext from "../ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: footer, text: "Alert" },
  { image: footer, text: "Progress Indicators" },
  { image: footer, text: "Badge Notifications" },
  { image: footer, text: "Snackbar Notifications" },
  { image: footer, text: "Spinner" },
  { image: footer, text: "Toast Notifications" },
  { image: footer, text: "Geo-location Feedback" },
  { image: footer, text: "User Feedback Widgets" },
  { image: footer, text: "Drag-and-Drop" },
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
