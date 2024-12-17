import '../css/download_page.scss';
import '../../index.css';
import NoImage from '../pictures/no-image.jpg';
import { DownloadCardProps } from '../types/DownloadCardProps';
import { useRef, useEffect, useState } from 'react';

const Download_Page = ({ image }: DownloadCardProps) => {
    const [imageSize, setImageSize] = useState({ width: 'auto', height: 'auto' });
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (image) {
            const img = new Image();
            img.src = image;

            img.onload = () => {
                const { width, height } = img;
                const aspectRatio = width / height;

                // Setting max-width and max-height dynamically based on aspect ratio
                if (aspectRatio > 1) {
                    // Landscape image
                    setImageSize({ width: '100%', height: 'auto' });
                } else {
                    // Portrait image
                    setImageSize({ width: 'auto', height: '100%' });
                }
            };
        } else {
            setImageSize({ width: 'auto', height: 'auto' }); // Reset for no image
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
                <p className="robo">Amazing!</p>
                <p className="sub-Text robo">Your file is ready to be downloaded...</p>
            </div>

            <div className="download-pic">
                <div
                    className="card"
                    ref={cardRef}
                >
                    {image ? (
                        <img
                            src={image}
                            alt="Processed"
                            className="card-image"
                            style={imageSize} // Dynamically set dimensions
                        />
                    ) : (
                        <img className="no-image" src={NoImage} alt="No preview available" />
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
