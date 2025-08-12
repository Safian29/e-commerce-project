
import React from 'react'

const RegLogBtn = ({name, classname}) => {

  return (
    <div>
      <button
        className={`h-[45px] w-full text-[16px] font-semibold text-white rounded-md mt-[25px] ${classname}`}
      >
        {name}
      </button>
    </div>
  );
}

export default RegLogBtn
