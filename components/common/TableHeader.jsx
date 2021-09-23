const TableHeader = ({ headers }) => {
  return (
    <thead className="border-b-2 border-black">
      <tr className="bg-blue-100 divide-x divide-black">
        {headers.map((head) => (
          <th className="p-2" key={head}>
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
