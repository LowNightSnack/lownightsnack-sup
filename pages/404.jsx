import Header from "../components/Header";
import Link from "next/link";

const siteTitle = "404 | Not Found";

const error404 = () => (
  <>
    <Header siteTitle={siteTitle} />
    <div className="h-full flex flex-col justify-center items-center">
      <h1>404 - Successfully Transcended Reality</h1>
      <p>Mere Mortal brains cannot comprehend our goals.</p>
      <p>
        While you rest here interdimensional traveller, can i entertain you with
        some coffee?
      </p>
      <h2>
        <Link href="/">
          <a>Take me to the docking station</a>
        </Link>
      </h2>
    </div>
  </>
);

export default error404;
