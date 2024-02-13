// import './Input.css';

import * as React from 'react';

type Props = Readonly<{
  'data-test-id'?: string;
  accept?: string;
  label: string;
  onChange: (files: FileList | null) => void;
}>;

export default function FileInput({
  accept,
  label,
  onChange,
  'data-test-id': dataTestId,
}: Props): JSX.Element {
  const [isDragOver, setIsDragOver] = React.useState(false);
  return (
    <div className="inte-TextEditor__fileInput">
      <label className="inte-TextEditor__fileInput__label">
        <input
          type="file"
          accept={accept}
          className="inte-TextEditor__fileInput__input"
          onChange={(e) => onChange(e.target.files)}
          data-test-id={dataTestId}
        />

        <div className="inte-fileUpload__dropZoneText">
          <svg
            width="40"
            height="40"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="40"
              height="40"
              rx="20"
              fill={`${isDragOver ? "var(--inte-P40)" : "var(--inte-G40)"}`}
            />
            <g clipPath="url(#clip0_2527_210733)">
              <path
                d="M29.9924 28.3257C30.8052 27.8826 31.4473 27.1814 31.8174 26.3328C32.1874 25.4842 32.2643 24.5365 32.036 23.6394C31.8076 22.7422 31.287 21.9466 30.5563 21.3782C29.8256 20.8098 28.9264 20.5009 28.0006 20.5003H26.9506C26.6983 19.5246 26.2282 18.6188 25.5755 17.851C24.9228 17.0832 24.1045 16.4733 23.1822 16.0673C22.2598 15.6612 21.2574 15.4696 20.2504 15.5067C19.2433 15.5438 18.2577 15.8087 17.3678 16.2815C16.4778 16.7543 15.7066 17.4228 15.1122 18.2365C14.5178 19.0503 14.1156 19.9882 13.9358 20.9798C13.756 21.9714 13.8034 22.9909 14.0743 23.9615C14.3453 24.9322 14.8327 25.8288 15.5 26.5839M23.0004 30.5008V23.0004M23.0004 23.0004L26.3339 26.3328M23.0004 23.0004L19.6669 26.3328"
                stroke={`${isDragOver
                  ? "var(--inte-P900)"
                  : "var(--inte-G800)"
                  } `}
                strokeWidth="1.66674"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <rect
              x="3"
              y="3"
              width="40"
              height="40"
              rx="20"
              stroke={`${isDragOver ? "var(--inte-P30)" : "var(--inte-G30)"
                }`}
              strokeWidth="6"
            />
            <defs>
              <clipPath id="clip0_2527_210733">
                <rect
                  width="20.0009"
                  height="20.0009"
                  fill="white"
                  transform="translate(13 13)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="inte-fileUpload__uploadText">
            <span>Click to upload</span>
            <span> or drag and drop</span>
          </div>
        </div>
      </label>
    </div>
  );
}