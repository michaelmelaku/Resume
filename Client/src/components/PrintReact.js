import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Resume from '../container/resume/Resume';
//import { ComponentToPrint } from './ComponentToPrint';

const PrintReact = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button className='downloadButton'>Download Resume</button>}
        content={() => componentRef.current}
      />
      <Resume ref={componentRef} />
    </div>
  );
};

export default PrintReact;