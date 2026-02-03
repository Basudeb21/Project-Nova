import Scratchpad from "./Scratchpad";
import EventCenter from "./EventCenter";
import CommandCenter from "./CommandCenter";
import TaskPlanner from "./TaskPlanner";
import TaskAdd from "./TaskAdd";
import WorkHistory from "./WorkHistory";
import Weather from './Weather'
import MediaControl from './MediaControl'

import "./styles/dynamicPanel.css";

function DynamicPanel({ selectedModule, setActiveModule }) {
    let content;

    switch (selectedModule?.id) {
        case "scratchpad":
            content = <Scratchpad />;
            break;

        case "event":
            content = <EventCenter />;
            break;

        case "command":
            content = <CommandCenter />;
            break;

        case "task":
            content = <TaskPlanner setActiveModule={setActiveModule} />;
            break;

        case "taskAdd":
            content = <TaskAdd setActiveModule={setActiveModule} />;
            break;

        case "history":
            content = <WorkHistory />;
            break;

        case "weather":
            content = <Weather />;
            break;
        case "media":
            content = <MediaControl />;
            break;

        default:
            content = <CommandCenter />;
            break;

    }

    return (
        <div className="dynamic-panel-root">
            {content}
        </div>
    );
}


export default DynamicPanel;
