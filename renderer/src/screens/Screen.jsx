import { useState } from "react";

import BigPanel from "../components/panels/BigPanel";
import SmallPanel from "../components/panels/SmallPanel";

import Face from "../components/Face";
import Chat from "../components/Chat";
import NeuralLog from "../components/NeuralLog";
import SystemMonitor from "../components/SystemMonitor";
import MenuPanel from "../components/MenuPanel";
import DynamicPanel from "../components/DynamicPanel";

import { FaRobot, FaComments, FaBrain, FaServer, FaThLarge } from "react-icons/fa";
import { MdApps } from "react-icons/md";

import "../styles/theme.css";
import "../styles/style.css";

function Screen() {
    const [activeModule, setActiveModule] = useState(null);

    return (
        <div className="ai-screen-root">

            {/* 🎥 BACKGROUND VIDEO */}
            <video autoPlay loop muted playsInline className="ai-bg-video">
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            <div className="container-fluid h-100 ai-layout">

                {/* ───── TOP ROW ───── */}
                <div className="row ai-top-row gx-3">

                    <div className="col-4 h-100">
                        <BigPanel title="COMMUNICATION" icon={FaComments}>
                            <Chat />
                        </BigPanel>
                    </div>

                    <div className="col-4 h-100">
                        <BigPanel title="NOVA AI" icon={FaRobot}>
                            <Face />
                        </BigPanel>
                    </div>

                    <div className="col-4 h-100">
                        <BigPanel
                            title={activeModule?.label}
                            icon={activeModule?.icon}
                        >

                            <DynamicPanel
                                selectedModule={activeModule}
                                setActiveModule={setActiveModule}
                            />
                        </BigPanel>
                    </div>
                </div>

                {/* ───── BOTTOM ROW ───── */}
                <div className="row ai-bottom-row gx-3">
                    <div className="col-4 h-100">
                        <SmallPanel title="SYSTEM STATUS" icon={FaServer}>
                            <SystemMonitor />
                        </SmallPanel>
                    </div>


                    <div className="col-4 h-100">
                        <SmallPanel title="NEURAL LOG" icon={FaBrain}>
                            <NeuralLog />
                        </SmallPanel>
                    </div>

                    <div className="col-4 h-100">
                        <SmallPanel title="SYSTEM MENU" icon={MdApps}>
                            <MenuPanel onSelect={setActiveModule} />
                        </SmallPanel>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Screen;
