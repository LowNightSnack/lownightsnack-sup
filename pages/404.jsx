import Header from "../components/Header";
import { useRouter } from "next/router";

const siteTitle = "404 | Not Found";

const error404 = () => {
  const router = useRouter();

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div className="min-h-screen flex flex-col justify-center ml-3">
        <p className="text-6xl mb-3">
          <span className="font-bold">404</span> -{" "}
          <span className=" bg-yellow-300">
            Successfully Transcended Reality
          </span>
        </p>
        <p className="text-4xl mb-3">
          Mere Mortal brains cannot comprehend our goals.
        </p>
        <p className="text-3xl mb-3">
          While you rest here interdimensional traveller, can I entertain you
          with some coffee?
        </p>
        <p className="text-3xl mb-3">or</p>
        <div>
          <button onClick={() => router.back()}>
            <abbr
              title={`Take me home~\nCountry roaaaaaads~`}
              className="text-2xl bg-yellow-300 p-3 rounded-md no-underline"
            >
              Shall I escort you back to the last place of respite you visited,
              traveller?
            </abbr>
          </button>
        </div>
      </div>
    </>
  );
};

export default error404;
