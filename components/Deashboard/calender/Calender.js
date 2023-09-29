// src/components/Calendar.js
import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const Calendar = () => {
    dayjs.locale('en');

    const currentMonth = dayjs().format('MMMM YYYY');
    const firstDayOfMonth = dayjs().startOf('month').day();
    const totalDaysInMonth = dayjs().daysInMonth();
    const currentDay = dayjs().date(); // Get the current day of the month

    const daysArray = [...Array(totalDaysInMonth).keys()];
    const blanksArray = [...Array(firstDayOfMonth).keys()];

    return (
        <div className="container mx-auto p-4">

            <div className="grid grid-cols-7 gap-4">
                <div className="text-center text-grey">Sun</div>
                <div className="text-center text-grey">Mon</div>
                <div className="text-center text-grey">Tue</div>
                <div className="text-center text-grey">Wed</div>
                <div className="text-center text-grey">Thu</div>
                <div className="text-center text-grey">Fri</div>
                <div className="text-center text-grey">Sat</div>

                {/* Render the days of the month */}
                {blanksArray.map((blank, index) => (
                    <div key={`blank-${index}`} className="text-center"></div>
                ))}
                {daysArray.map((day, index) => (
                    <div
                        key={`day-${index}`}
                        className={`text-center text-black ${day + 1 === currentDay ? 'bg-red-400 text-white rounded' : ''
                            }`}
                    >
                        {day + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
