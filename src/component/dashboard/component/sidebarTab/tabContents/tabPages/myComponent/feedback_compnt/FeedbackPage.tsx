import footer from "../../../../image/footer.png";
import ElementContext from "../ElementModal";
import {
  Alert,
  ProgressIndicator,
  BadgeNotification,
  SnackbarNotification,
  Spinner,
  ToastNotification,
  GeoLocationFeedback,
  UserFeedbackWidget,
  DragAndDrop,
} from "../../../../../../../../constants/db";

interface ImageTextObject {
  image: string;
  text: string;
  sourceCode: string;
}

const textLists: ImageTextObject[] = [
  { image: footer, text: "Alert", sourceCode: Alert },
  { image: footer, text: "Progress Indicators", sourceCode: ProgressIndicator },
  { image: footer, text: "Badge Notifications", sourceCode: BadgeNotification },
  {
    image: footer,
    text: "Snackbar Notifications",
    sourceCode: SnackbarNotification,
  },
  { image: footer, text: "Spinner", sourceCode: Spinner },
  { image: footer, text: "Toast Notifications", sourceCode: ToastNotification },
  {
    image: footer,
    text: "Geo-location Feedback",
    sourceCode: GeoLocationFeedback,
  },
  {
    image: footer,
    text: "User Feedback Widgets",
    sourceCode: UserFeedbackWidget,
  },
  { image: footer, text: "Drag-and-Drop", sourceCode: DragAndDrop },
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
