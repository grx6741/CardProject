import { useRef } from 'react';
import ReactFreezeframe from 'react-freezeframe';

const getFileType = (src) => {
    // Extract the file extension
    const fileExtension = src.split(".").pop();

    // Map file extensions to corresponding types
    const imageExtensions = ['jpg', 'jpeg', 'png', 'bmp'];
    const videoExtensions = ['mp4', 'avi', 'mkv', 'mov', 'wmv'];
    const gifExtensions = ['gif'];

    if (imageExtensions.includes(fileExtension)) {
        return ['Image', fileExtension];
    } else if (videoExtensions.includes(fileExtension)) {
        return ['Video', fileExtension];
    } else if (gifExtensions.includes(fileExtension)) {
        return ['GIF', fileExtension];
    } else {
        return 'Unknown';
    }
}

const Content = ({ src, hovering }) => {
    const [fileType, fileExtension] = getFileType(src);
    const videoRef = useRef(null);
    const style = `w-auto object-cover object-center  ${hovering ? "opacity-90 " : "opacity-100"}`;
    let content;


    if (fileType === 'Image') {

        content = <img
            className={style}
            src={src}
            alt="Card"
        />

    } else if (fileType === 'Video') {

        const handleMouseEnter = () => {
            const video = videoRef.current;
            video.currentTime = 0;
            video.muted = true;
            if (video.paused)
            video.play();
        };
        const handleMouseLeave = () => {
            const video = videoRef.current;
            video.currentTime = 0;
            if (!video.paused)
            video.pause();
        };

        content = <div className={style}>
            <video 
                width="auto"
                ref={videoRef} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <source src={src} type={`video/${fileExtension}`}></source>
            </video>
        </div>

    } else if (fileType === 'GIF') {

        content = <ReactFreezeframe 
            className={style}
            src={src}
            alt="Card"
            options={{
                overlay: false,
                trigger: 'hover'
            }}
        />

    } else {

        content = <p>URL Not recognised</p>;

    }

    return <div>{content}</div>;
}

export default Content;
