import { useState } from "react";
import "./styles/scratchpad.css";
import { FaSave, FaFolderOpen } from "react-icons/fa";

function Scratchpad() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editingTitle, setEditingTitle] = useState(false);

    return (
        <div className="scratch-root">

            {/* HEADER */}
            <div className="scratch-header">

                {editingTitle ? (
                    <input
                        type="text"
                        className="scratch-header-input"
                        autoFocus
                        value={title}
                        placeholder="note title…"
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={() => setEditingTitle(false)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && setEditingTitle(false)
                        }
                    />
                ) : (
                    <span
                        className="scratch-header-title"
                        onClick={() => setEditingTitle(true)}
                    >
                        {title || "SCRATCHPAD"}
                    </span>
                )}

                <div className="scratch-actions">
                    <button className="scratch-btn" title="Open">
                        <FaFolderOpen />
                    </button>
                    <button className="scratch-btn" title="Save">
                        <FaSave />
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <textarea
                className="scratch-textarea no-scrollbar"
                placeholder="Think here… Draft commands, notes, ideas."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

        </div>
    );
}

export default Scratchpad;
