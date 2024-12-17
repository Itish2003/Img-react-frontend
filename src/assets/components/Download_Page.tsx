import '../css/download_page.scss';
import '../../index.css';
import NoImage from '../pictures/no-image.jpg';
import { DownloadCardProps } from '../types/DownloadCardProps';
import { useRef, useEffect, useState } from 'react';

const Download_Page = ({ image }: DownloadCardProps) => {
    const [imageSize, setImageSize] = useState({ width: '60%', height: '90%' }); // Base dimensions
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (image) {
            const img = new Image();
            img.src = image;
            img.onload = () => {
                const { width, height } = img;

                const maxWidth = 80; // 60% of the viewport width
                const maxHeight = 60; // 60% of the viewport height
                const aspectRatio = width / height;

                if (aspectRatio > 1) {
                    // Landscape Image
                    setImageSize({ width: `${maxWidth}vw`, height: `auto` });
                } else {
                    // Portrait Image
                    setImageSize({ width: `auto`, height: `${maxHeight}vh` });
                }
            };
        } else {
            setImageSize({ width: '60%', height: '90%' }); // Reset to base dimensions
        }
    }, [image]);

    const downloadImage = () => {
        if (image) {
            const link = document.createElement('a');
            link.href = image;
            link.download = 'processed_image.png';
            link.click();
        }
    };

    return (
        <div className="container-download">
            <div className="download-content">
                <p className="robo ">Amazing!</p>
                <p className="sub-Text robo ">Your file is ready to be downloaded...</p>
            </div>

            <div className="download-pic">
                <div
                    className="card"
                    ref={cardRef}
                    style={{
                        minWidth: '40%',
                        minHeight: '30%',
                        maxWidth: imageSize.width,
                        maxHeight: imageSize.height,
                    }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt="Processed"
                            className="card-image"
                        />
                    ) : (
                        <img className="no-image" src={NoImage}></img>
                    )}
                </div>
                <button className="download-btn" onClick={downloadImage}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default Download_Page;
