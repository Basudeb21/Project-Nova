import React from "react";

function BlankScreenCard({ title = "Empty Slot" }) {
    return (
        <div className="glass-card h-100 d-flex flex-column">
            <div className="glass-card-header">
                {title}
            </div>
            <div className="glass-card-body flex-grow-1 d-flex align-items-center justify-content-center">
                <span style={{ opacity: 0.5 }}>No module loaded</span>
            </div>
        </div>
    );
}

export default BlankScreenCard;
