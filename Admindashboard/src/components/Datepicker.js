
import React from 'react';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.css";

const styles = {
  
padding:8
}


const Cal = () => (
  <div id="Calendar" className="field" style={styles}>
    <style>
      
    </style>
    <DateRangePicker 
      format="yyyy-MM-dd HH:mm:ss"
      defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
      placeholder={['Select Date']}
     />
  </div>
);

export default Cal