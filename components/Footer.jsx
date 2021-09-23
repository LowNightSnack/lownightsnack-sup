import CustomLink from "./common/CustomLink";

const Footer = () => {
  return (
    <>
      <footer className="border-t-2 text-center border-gray-800">
        'Sup? &#169;{" "}
        <CustomLink
          linkHref="https://nitandhra.ac.in/"
          linkText="NIT Andhra Pradesh"
        />
        <br />
        Made by Mamoor &#38; Rahul
      </footer>
    </>
  );
};

export default Footer;
