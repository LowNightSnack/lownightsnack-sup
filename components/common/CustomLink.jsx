import Link from "next/link";
const CustomLink = ({ linkHref, linkText, className = "" }) => {
  return (
    <Link href={linkHref}>
      <a className={className}>{linkText}</a>
    </Link>
  );
};

export default CustomLink;
