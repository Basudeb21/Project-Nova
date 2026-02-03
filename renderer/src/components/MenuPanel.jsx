import { useState } from "react";
import './../styles/style.css';
import './styles/menuPanel.css';
import {
    FaTasks,
    FaMusic,
    FaFolderOpen,
    FaFileAlt,
    FaImage,
    FaVolumeUp,
    FaRobot,
    FaTerminal,
    FaHistory,
    FaDatabase,
    FaMemory,
    FaCog,
    FaWallet,
    FaChartLine,
    FaBell,
    FaCalendarAlt,
    FaSearch,
    FaNewspaper,
    FaHeartbeat,
    FaClock
} from "react-icons/fa";
import { BsFillCloudSnowFill } from "react-icons/bs";


const MODULES = [
    // 1. Most important / daily interaction
    { id: 'command', label: "Command Center", icon: FaTerminal },
    { id: 'task', label: "Task Planner", icon: FaTasks },
    { id: 'smart_calendar', label: "Smart Calendar", icon: FaCalendarAlt },
    { id: 'next_day_planner', label: "Next Day Planner", icon: FaClock },
    { id: 'daily_brief', label: "Daily Brief", icon: FaNewspaper },

    // 2. Life management
    { id: 'finance', label: "Finance Manager", icon: FaWallet },
    { id: 'expense_insights', label: "Expense Insights", icon: FaChartLine },
    { id: 'bill_reminder', label: "Bill Tracker", icon: FaBell },
    { id: 'habit_tracker', label: "Health & Habit Tracker", icon: FaHeartbeat },

    // 3. File / Data / Knowledge
    { id: 'file', label: "File Explorer", icon: FaFolderOpen },
    { id: 'doc', label: "Document Reader", icon: FaFileAlt },
    { id: 'image', label: "Image Inspector", icon: FaImage },
    { id: 'web_scraper', label: "Web Scraper", icon: FaSearch },
    { id: 'automation', label: "Automation Builder", icon: FaRobot },

    // 4. System / AI utilities
    { id: 'session', label: "Session Memory", icon: FaMemory },
    { id: 'vault', label: "Memory Vault", icon: FaDatabase },
    { id: 'history', label: "Work History", icon: FaHistory },

    // 5. Entertainment / Misc
    { id: 'media', label: "Media Control", icon: FaMusic },
    { id: 'audio', label: "Audio Center", icon: FaVolumeUp },
    { id: 'event', label: "Event Center", icon: FaTasks },
    { id: 'scratchpad', label: "Scratchpad", icon: FaFileAlt },
    { id: 'settings', label: "Settings", icon: FaCog },
    { id: 'weather', label: "Weather", icon: BsFillCloudSnowFill },
];


function MenuPanel({ onSelect }) {
    const [active, setActive] = useState("command");

    const handleClick = (module) => {
        setActive(module.id);
        onSelect?.(module);
    };

    return (
        <div className="app-card menu-panel">
            <div className="menu-grid">
                {MODULES.map(mod => {
                    const Icon = mod.icon;
                    return (
                        <button
                            key={mod.id}
                            className={`menu-btn ${active === mod.id ? 'active' : ''}`}
                            onClick={() => handleClick(mod)}
                        >
                            <span className="menu-icon"><Icon /></span>
                            <span className="menu-label">{mod.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}


export default MenuPanel;
