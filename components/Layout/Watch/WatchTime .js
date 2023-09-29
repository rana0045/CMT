import React, { useState, useEffect } from 'react';

const WatchTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update the time every 1000ms (1 second)

        return () => {
            clearInterval(intervalId); // Cleanup the interval on component unmount
        };
    }, []);

    const formatTime = (time) => {
        // Format the time as you desire (e.g., hh:mm:ss)
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (


        <p className='font-bold text-green-400' suppressHydrationWarning>{formatTime(currentTime)}</p>


    );
};

export default WatchTime;
