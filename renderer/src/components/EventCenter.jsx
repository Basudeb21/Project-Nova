import { useState } from "react";
import "./styles/eventCenter.css";

import {
    FaBell,
    FaClock,
    FaExclamationTriangle,
    FaInfoCircle,
    FaTasks
} from "react-icons/fa";

const EVENTS = [
    {
        id: 1,
        type: "alert",
        title: "Unusual Login Detected",
        desc: "New device attempted access",
        time: "Just now",
        icon: <FaExclamationTriangle />
    },
    {
        id: 2,
        type: "reminder",
        title: "Team Meeting",
        desc: "Project sync at 4:30 PM",
        time: "Today",
        icon: <FaClock />
    },
    {
        id: 3,
        type: "system",
        title: "Model Updated",
        desc: "LLM model refreshed successfully",
        time: "10 min ago",
        icon: <FaInfoCircle />
    },
    {
        id: 4,
        type: "reminder",
        title: "Task Deadline",
        desc: "Submit report before 6 PM",
        time: "Today",
        icon: <FaTasks />
    },
    {
        id: 5,
        type: "alert",
        title: "Battery Low",
        desc: "Battery dropped below 20%",
        time: "5 min ago",
        icon: <FaExclamationTriangle />
    }
];

function EventCenter() {
    const [filter, setFilter] = useState("all");

    const filteredEvents =
        filter === "all"
            ? EVENTS
            : EVENTS.filter(e => e.type === filter);

    return (
        <div className="event-root">

            {/* FILTERS */}
            <div className="event-filters">
                {["all", "alert", "reminder", "system"].map(type => (
                    <button
                        key={type}
                        className={`filter-btn ${filter === type ? "active" : ""}`}
                        onClick={() => setFilter(type)}
                    >
                        {type.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* EVENTS */}
            <div className="event-list no-scrollbar">
                {filteredEvents.map(event => (
                    <div key={event.id} className={`event-item ${event.type}`}>
                        <div className="event-icon">{event.icon}</div>

                        <div className="event-content">
                            <div className="event-title">{event.title}</div>
                            <div className="event-desc">{event.desc}</div>
                        </div>

                        <div className="event-time">{event.time}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default EventCenter;
