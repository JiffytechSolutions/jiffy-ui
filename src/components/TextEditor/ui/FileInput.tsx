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
  return (
    <div className="inte-TextEditor__fileInput">
      <label className="inte-TextEditor__fileInput__label">{label}</label>
      <input
        type="file"
        accept={accept}
        className="inte-TextEditor__fileInput__input"
        onChange={(e) => onChange(e.target.files)}
        data-test-id={dataTestId}
      />
    </div>
  );
}