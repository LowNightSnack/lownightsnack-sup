import TableHeader from "./common/TableHeader";

const AttendanceTable = ({ studentList, onSubmit }) => {
  const keys = Object.keys(studentList[0]);
  const headers = ["Roll No.", "Name", "Presence"];
  return (
    <form onSubmit={onSubmit}>
      <table className="table-fixed w-full mb-4">
        <TableHeader headers={headers} />
        <tbody>
          {studentList.map((student, index) => (
            <tr
              className={`${
                (index + 1) % 2 == 0 ? "bg-blue-100 " : ""
              }divide-x divide-black`}
              key={index}
            >
              {keys.map((key) => (
                <td className="p-2 overflow-hidden" key={student[key]}>
                  {student[key]}
                </td>
              ))}
              <td className="p-2 text-center">
                <input
                  type="checkbox"
                  className="w-6 h-6"
                  value={student[keys[0]]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AttendanceTable;
