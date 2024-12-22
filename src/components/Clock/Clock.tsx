import { useEffect, useRef } from "react";
import React from "react";
import moment from "moment-timezone";

interface ClockProps {
    name: string;
    timeZone: string;
    onRemove: () => void;
}

const Clock: React.FC<ClockProps> = ({ name, timeZone, onRemove }) => {
    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateClock = () => {
            const time = moment.tz(timeZone);
            const second = time.seconds() * 6;
            const minute = time.minutes() * 6 + second / 60;
            const hour = (time.hours() % 12) * 30 + minute / 12;

            if (secondRef.current) secondRef.current.style.transform = `rotate(${second}deg)`;
            if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minute}deg)`;
            if (hourRef.current) hourRef.current.style.transform = `rotate(${hour}deg)`;
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div className="clock-container">
            <div className="clock-title">
                <span>{name}</span>
                <button onClick={onRemove}>Удалить</button>
            </div>
            <div className="clock">
                <div className="hand hour" ref={hourRef}></div>
                <div className="hand minute" ref={minuteRef}></div>
                <div className="hand second" ref={secondRef}></div>
                <div className="center"></div>
            </div>
        </div>
    );
};

export default Clock;

