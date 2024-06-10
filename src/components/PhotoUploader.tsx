import React, { useRef, useState, ChangeEvent } from "react";

const PhotoUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDivClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="relative h-[210px] w-[210px] rounded-2xl bg-[url('/Uploader.svg')] bg-center bg-no-repeat my-4">
            {previewUrl && (
                <span
                    onClick={() => {
                        setPreviewUrl(null);
                        setSelectedFile(null);
                    }}
                    className="absolute right-0.5 top-0.5 z-50 block h-6 w-6 -translate-y-1/2 translate-x-1/2 transform bg-[url('/RedCross.svg')] "
                />
            )}

            <div
                onClick={handleDivClick}
                className="flex h-full w-full flex-col items-center justify-center gap-[8px] text-[14px] text-black"
            >
                <img
                    alt="Photo Frame"
                    className={
                        previewUrl
                            ? `z-30 h-[210px] w-[210px] rounded-2xl object-cover`
                            : ""
                    }
                    src={previewUrl ? previewUrl as string : "/PhotoFrame.svg"}
                />

                {!previewUrl && <div>Upload Image</div>}
                <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
};

export default PhotoUploader;
