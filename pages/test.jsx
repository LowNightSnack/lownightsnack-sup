import CustomLink from "../components/common/CustomLink";
import AttendanceTable from "../components/AttendanceTable";

const Test = () => {
  const oo = [
    { rollNo: 411901, name: "Bruh" },
    { rollNo: 411902, name: "Bruuh" },
    { rollNo: 411903, name: "Bruuuh" },
    { rollNo: 411904, name: "Bruuuuh" },
    { rollNo: 411905, name: "Bruuuuuh" },
    { rollNo: 411906, name: "Bruuuuuuh" },
    { rollNo: 411907, name: "TheUltimateBruuuuuuh" },
  ];
  const doo = (event) => {
    event.preventDefault();
    const inputList = [...event.target.elements];
    inputList.pop();
    console.log(
      inputList.map((input) => {
        return { rollNo: input.value, present: input.checked };
      })
    );
  };
  return (
    <div className="w-full p-3">
      <CustomLink
        linkHref="/users/login"
        className="block py-2.5 px-4 rounded"
        linkText="Login"
      ></CustomLink>
      <AttendanceTable studentList={oo} onSubmit={doo} />
    </div>
  );
};

export default Test;
