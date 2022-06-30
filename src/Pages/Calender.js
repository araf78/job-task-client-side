import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p className='mt-6'>You picked <span className='font-bold text-slate-700'>{format(date, 'PP')}</span>.</p>;
    }
    return  (
        <div>
            <DayPicker  className="grid grid-cols-1 justify-items-center mt-6 text-slate-700  p-4 border-2xl " 
             mode="single"
             date={date}
             onSelect={setDate}
             footer={footer}
            />
        </div>
    );
};

export default Calender;