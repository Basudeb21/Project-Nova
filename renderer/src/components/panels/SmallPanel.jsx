import React from "react";
import "../../styles/panels.css";

const SmallPanel = ({ title, icon: Icon, children }) => {
    return (
        <div className="ai-panel ai-panel-small">
            <div className="ai-panel-header">
                {Icon && <Icon className="ai-panel-icon" />}
                <span>{title}</span>
            </div>

            <div className="ai-panel-body">
                {children}
            </div>
        </div>
    );
};

export default SmallPanel;
