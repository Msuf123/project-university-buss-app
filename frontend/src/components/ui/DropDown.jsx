import { useEffect } from "react";
import Select from "react-select";

const DropDown = (props) => {
  const { label, htmlFor, ...restProps } = props;
  useEffect(()=>{
    console.log(restProps.options)
  })
  const options = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Chandighar', label: 'Chandighar' },
    { value: 'Ludhiyana', label: 'Lidhiyana' },
  ];
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 text-sm font-medium">
        {label}
      </label>
      <Select
        options={options}
        isSearchable
        isClearable
        classNames={{
          control: () =>
            "h-11 !border !focus:outline-none !border-gray-300 !focus:border-blue-400 !text-sm !rounded-md",
        }}
      />
    </div>
  );
};

export default DropDown;
