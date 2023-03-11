import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Calendar() {
    const [value, setValue] = useState(null);

    return (
        <section className='container d-flex justify-content-center mt-5'>
            <div className="card " style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5>Calendar</h5>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Select Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <div className='mt-3'>
                    {value ?
                        <p><b>Selected Date: </b> {value?.toString()}</p>
                        :
                        <p>Date not selected</p>
                    }
                    </div>
                </div>
            </div>
        </section>

    );
}