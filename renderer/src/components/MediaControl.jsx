import "./styles/mediaControl.css";
import {
    FaPlay,
    FaPause,
    FaForward,
    FaBackward,
    FaVolumeUp,
    FaImage,
    FaVideo,
    FaMusic
} from "react-icons/fa";
import { useState } from "react";

function MediaControl() {
    // mediaType: "image" | "video" | "audio"
    const [mediaType, setMediaType] = useState("video");
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(70);

    return (
        <div className="media-root">

            {/* Media Preview */}
            <div className={`media-preview ${mediaType}`}>
                {mediaType === "image" && <FaImage />}
                {mediaType === "video" && <FaVideo />}
                {mediaType === "audio" && <FaMusic />}
            </div>

            {/* Media Info */}
            <div className="media-info">
                <div className="media-title">
                    {mediaType === "image" && "Image Preview"}
                    {mediaType === "video" && "Demo Footage"}
                    {mediaType === "audio" && "Synthwave Track"}
                </div>

                <div className="media-meta">
                    {mediaType.toUpperCase()} · LOCAL
                </div>
            </div>

            {/* Controls */}
            {(mediaType === "audio" || mediaType === "video") && (
                <div className="media-controls">
                    <button className="media-btn">
                        <FaBackward />
                    </button>

                    <button
                        className="media-btn play"
                        onClick={() => setPlaying(!playing)}
                    >
                        {playing ? <FaPause /> : <FaPlay />}
                    </button>

                    <button className="media-btn">
                        <FaForward />
                    </button>
                </div>
            )}

            {/* Volume (audio + video only) */}
            {(mediaType === "audio" || mediaType === "video") && (
                <div className="media-volume">
                    <FaVolumeUp />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                    <span>{volume}%</span>
                </div>
            )}

            {/* Media Type Switch (DEV / DEMO) */}
            <div className="media-type-switch">
                <button onClick={() => setMediaType("image")}>IMAGE</button>
                <button onClick={() => setMediaType("video")}>VIDEO</button>
                <button onClick={() => setMediaType("audio")}>AUDIO</button>
            </div>

        </div>
    );
}

export default MediaControl;
