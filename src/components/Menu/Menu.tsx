import React, { useState } from "react";
import moment from "moment-timezone";

interface TimeZone {
    value: string;
    label: string;
}

const getTimeZones = (): TimeZone[] => {
    const zones = moment.tz.names();
    return zones.map((zone) => ({
        value: zone,
        label: zone,
    }));
}

interface MenuProps {
    onAddClock: (name: string, timeZone: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddClock }) => {
    const timeZones = getTimeZones();
    const moscowTimeZone = timeZones.find((tz) => tz.label === "Europe/Moscow")?.value || "";

    const [name, setName] = useState("");
    const [timezone, setTimeZone] = useState(moscowTimeZone);

    const handleAddClock = () => {
        onAddClock(name, timezone);
        setName("");
    };

    return (
        <div className="menu">
            <input
                type="text"
                placeholder="Название часов"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <select
                value={timezone}
                onChange={(e) => setTimeZone(e.target.value)}
            >
                {timeZones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                        {tz.label}
                    </option>
                ))}
            </select>
            <button onClick={handleAddClock}>Добавить</button>
        </div>
    )
}

export default Menu