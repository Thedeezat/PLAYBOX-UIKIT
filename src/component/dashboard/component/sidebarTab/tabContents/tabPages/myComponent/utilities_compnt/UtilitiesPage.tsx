import grid from "../../../../image/grid.png";
import ElementContext from "../ElementModal";
import {
  CachingMechanisms,
  FileHandling,
  AuthenticationUtilities,
  EncryptionUtilities,
  EmailHandling,
  DataCompression,
  DependencyInjection,
  UtilitiesLibrary,
  Statistics,
  SearchAndIndexing,
} from "../../../../../../../../constants/db";

interface ImageTextObject {
  image: string;
  text: string;
  sourceCode: string;
}

const textLists: ImageTextObject[] = [
  { image: grid, text: "Caching Mechanisms", sourceCode: CachingMechanisms },
  { image: grid, text: "File Handling", sourceCode: FileHandling },
  {
    image: grid,
    text: "Authentication Utilities",
    sourceCode: AuthenticationUtilities,
  },
  {
    image: grid,
    text: "Encryption Utilities",
    sourceCode: EncryptionUtilities,
  },
  { image: grid, text: "Email Handling", sourceCode: EmailHandling },
  { image: grid, text: "Data Compression", sourceCode: DataCompression },
  {
    image: grid,
    text: "Dependency Injection",
    sourceCode: DependencyInjection,
  },
  { image: grid, text: "Utilities Library", sourceCode: UtilitiesLibrary },
  { image: grid, text: "Statistics", sourceCode: Statistics },
  { image: grid, text: "Search and Indexing", sourceCode: SearchAndIndexing },
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
