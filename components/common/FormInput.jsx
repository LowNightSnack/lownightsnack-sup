const FormInput = ({
  name,
  label,
  type,
  required = false,
  warn = false,
  error = false,
  removeHighlight,
  svg,
}) => {
  const handleClassName = () => {
    let cn =
      "border-2 border-grey-200 rounded-md focus:outline-none focus:border-blue-400 p-0.5 md:placeholder-transparent";
    if (warn) cn += " border-yellow-500";
    if (error) cn += " border-red-500";
    return cn;
  };
  const inputAttributes = {
    name,
    label,
    type,
    className: handleClassName(),
    placeholder: label,
  };
  console.log;
  if (removeHighlight) inputAttributes.onChange = removeHighlight;

  return (
    <div className="flex justify-between items-center">
      <label className="mr-1 flex" htmlFor={name}>
        {svg}
        <span className={svg ? "ml-1 hidden md:block" : "block"}>
          {`${label}${required ? "*" : ""}${":"}`}
        </span>
      </label>
      <input {...inputAttributes} />
    </div>
  );
};

export default FormInput;
