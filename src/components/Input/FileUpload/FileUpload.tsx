import React, { forwardRef, useCallback, useId, useState, useRef, DragEvent } from "react";
import { Upload, X, File, Image as ImageIcon, Video, FileText, Music, Archive, Code } from "react-feather";
import "./FileUpload.css";

const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(({
  name,
  value = [],
  onChange,
  onUpload,
  onProgress,
  onError,
  onPreview,
  onRemove,
  label,
  description,
  error,
  success,
  warning,
  required = false,
  disabled = false,
  multiple = false,
  accept,
  maxFiles,
  maxSize,
  minSize,
  showProgress = true,
  showPreview = true,
  allowDragDrop = true,
  uploadOnDrop = false,
  size = "Medium",
  variant = "Default",
  layout = "vertical",
  previewType = "list",
  id,
  className,
  style,
  ...props
}, ref) => {
  const generatedId = useId();
  const fileUploadId = id || `fileupload-${generatedId}`;
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Internal state for drag and drop
  const [isDragOver, setIsDragOver] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);

  // File type icons mapping
  const getFileIcon = (file: File) => {
    const type = file.type.toLowerCase();
    const name = file.name.toLowerCase();
    
    if (type.startsWith('image/')) return <ImageIcon size={16} />;
    if (type.startsWith('video/')) return <Video size={16} />;
    if (type.startsWith('audio/')) return <Music size={16} />;
    if (type.includes('pdf') || name.endsWith('.pdf')) return <FileText size={16} />;
    if (type.includes('zip') || type.includes('rar') || type.includes('tar')) return <Archive size={16} />;
    if (name.match(/\.(js|ts|jsx|tsx|css|html|xml|json)$/)) return <Code size={16} />;
    return <File size={16} />;
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Validate file
  const validateFile = (file: File): string | null => {
    // Check file size
    if (maxSize && file.size > maxSize) {
      return `File size (${formatFileSize(file.size)}) exceeds maximum allowed size (${formatFileSize(maxSize)})`;
    }
    
    if (minSize && file.size < minSize) {
      return `File size (${formatFileSize(file.size)}) is below minimum required size (${formatFileSize(minSize)})`;
    }

    // Check file type
    if (accept && accept.length > 0) {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const mimeType = file.type.toLowerCase();
      
      const isValidType = accept.some((acceptType: string) => {
        if (acceptType.startsWith('.')) {
          return fileExtension === acceptType.toLowerCase();
        }
        if (acceptType.includes('/')) {
          return mimeType === acceptType.toLowerCase() || 
                 (acceptType.endsWith('/*') && mimeType.startsWith(acceptType.split('/')[0] + '/'));
        }
        return false;
      });

      if (!isValidType) {
        return `File type not supported. Accepted types: ${accept.join(', ')}`;
      }
    }

    return null;
  };

  // Process files
  const processFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const newFiles: FileUploadFile[] = [];
    const errors: string[] = [];

    // Check total file count
    if (maxFiles && value.length + fileArray.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed. Currently ${value.length} files selected.`);
      if (onError) {
        onError(errors);
      }
      return;
    }

    fileArray.forEach((file) => {
      const error = validateFile(file);
      
      if (error) {
        errors.push(`${file.name}: ${error}`);
      } else {
        const fileUploadFile: FileUploadFile = {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          status: uploadOnDrop ? 'uploading' : 'pending',
          progress: 0,
          error: null,
          preview: null,
        };

        // Generate preview for images
        if (showPreview && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            fileUploadFile.preview = e.target?.result as string;
            // Trigger re-render by updating the file
            if (onChange) {
              const updatedFiles = value.map((f: FileUploadFile) => f.id === fileUploadFile.id ? fileUploadFile : f);
              onChange(updatedFiles);
            }
          };
          reader.readAsDataURL(file);
        }

        newFiles.push(fileUploadFile);
      }
    });

    if (errors.length > 0 && onError) {
      onError(errors);
    }

    if (newFiles.length > 0) {
      const updatedFiles = multiple ? [...value, ...newFiles] : newFiles;
      
      if (onChange) {
        onChange(updatedFiles);
      }

      // Auto-upload if enabled
      if (uploadOnDrop && onUpload) {
        newFiles.forEach(file => {
          onUpload(file);
        });
      }
    }
  }, [value, maxFiles, multiple, uploadOnDrop, showPreview, onChange, onError, onUpload]);

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
    // Reset input value to allow same file to be selected again
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  // Handle drag events
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    if (disabled || !allowDragDrop) return;
    
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(prev => prev + 1);
    
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (disabled || !allowDragDrop) return;
    
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(prev => {
      const newCounter = prev - 1;
      if (newCounter === 0) {
        setIsDragOver(false);
      }
      return newCounter;
    });
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (disabled || !allowDragDrop) return;
    
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (disabled || !allowDragDrop) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragOver(false);
    setDragCounter(0);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
  };

  // Handle file removal
  const handleRemoveFile = (fileId: string) => {
    const updatedFiles = value.filter((file: FileUploadFile) => file.id !== fileId);
    const removedFile = value.find((file: FileUploadFile) => file.id === fileId);
    
    if (onChange) {
      onChange(updatedFiles);
    }
    
    if (onRemove && removedFile) {
      onRemove(removedFile);
    }
  };

  // Handle file preview
  const handlePreviewFile = (file: FileUploadFile) => {
    if (onPreview) {
      onPreview(file);
    }
  };

  // Handle upload trigger
  const handleUploadFile = (file: FileUploadFile) => {
    if (onUpload) {
      onUpload(file);
    }
  };

  // Get validation state
  const getValidationState = () => {
    if (error) return "error";
    if (warning) return "warning";
    if (success) return "success";
    return "default";
  };

  const validationState = getValidationState();

  // Generate CSS classes
  const fileUploadClasses = [
    "jf-fileupload",
    `jf-fileupload--${size.toLowerCase()}`,
    `jf-fileupload--${variant.toLowerCase()}`,
    `jf-fileupload--${validationState}`,
    `jf-fileupload--${layout}`,
    disabled ? "jf-fileupload--disabled" : "",
    isDragOver ? "jf-fileupload--drag-over" : "",
    value.length > 0 ? "jf-fileupload--has-files" : "",
    className || "",
  ].filter(Boolean).join(" ");

  // Get help text
  const getHelpText = () => {
    if (error) return error;
    if (warning) return warning;
    if (success) return success;
    return description;
  };

  const helpText = getHelpText();

  // Generate accept string for input
  const acceptString = accept ? accept.join(',') : undefined;

  // Get upload area content
  const getUploadAreaContent = () => {
    if (isDragOver) {
      return (
        <div className="jf-fileupload-content jf-fileupload-content--drag">
          <Upload size={24} className="jf-fileupload-icon" />
          <div className="jf-fileupload-text">
            <span className="jf-fileupload-primary-text">Drop files here</span>
          </div>
        </div>
      );
    }

    return (
      <div className="jf-fileupload-content">
        <Upload size={24} className="jf-fileupload-icon" />
        <div className="jf-fileupload-text">
          <span className="jf-fileupload-primary-text">
            {allowDragDrop ? "Drag & drop files here or " : ""}
            <button 
              type="button" 
              className="jf-fileupload-browse-button"
              onClick={() => inputRef.current?.click()}
              disabled={disabled}
            >
              browse
            </button>
          </span>
          {(maxSize || accept) && (
            <span className="jf-fileupload-secondary-text">
              {accept && `Supported: ${accept.join(', ')}`}
              {accept && maxSize && ' • '}
              {maxSize && `Max size: ${formatFileSize(maxSize)}`}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={ref}
      className={fileUploadClasses}
      style={style}
      {...props}
    >
      {/* Label */}
      {label && (
        <label 
          htmlFor={fileUploadId}
          className="jf-fileupload-label"
        >
          {label}
          {required && <span className="jf-fileupload-required">*</span>}
        </label>
      )}

      {/* Upload Area */}
      <div
        className="jf-fileupload-area"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={`File upload area. ${allowDragDrop ? 'Drag and drop files or click' : 'Click'} to select files.`}
        aria-disabled={disabled}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
      >
        <input
          ref={inputRef}
          id={fileUploadId}
          name={name}
          type="file"
          multiple={multiple}
          accept={acceptString}
          onChange={handleFileChange}
          disabled={disabled}
          className="jf-fileupload-input"
          aria-describedby={helpText ? `${fileUploadId}-help` : undefined}
        />
        
        {getUploadAreaContent()}
      </div>

      {/* File List */}
      {value.length > 0 && (
        <div className={`jf-fileupload-files jf-fileupload-files--${previewType}`}>
          {value.map((file: FileUploadFile) => (
            <FileItem
              key={file.id}
              file={file}
              showProgress={showProgress}
              showPreview={showPreview}
              onRemove={() => handleRemoveFile(file.id)}
              onPreview={() => handlePreviewFile(file)}
              onUpload={() => handleUploadFile(file)}
              getFileIcon={getFileIcon}
              formatFileSize={formatFileSize}
              previewType={previewType}
            />
          ))}
        </div>
      )}

      {/* Help Text */}
      {helpText && (
        <div 
          id={`${fileUploadId}-help`}
          className={`jf-fileupload-help jf-fileupload-help--${validationState}`}
        >
          {helpText}
        </div>
      )}
    </div>
  );
});

// File Item Component
interface FileItemProps {
  file: FileUploadFile;
  showProgress: boolean;
  showPreview: boolean;
  onRemove: () => void;
  onPreview: () => void;
  onUpload: () => void;
  getFileIcon: (file: File) => React.ReactNode;
  formatFileSize: (bytes: number) => string;
  previewType: "list" | "grid" | "compact";
}

const FileItem: React.FC<FileItemProps> = ({
  file,
  showProgress,
  showPreview,
  onRemove,
  onPreview,
  onUpload,
  getFileIcon,
  formatFileSize,
  previewType,
}) => {
  const [imageError, setImageError] = useState(false);

  const getStatusColor = () => {
    switch (file.status) {
      case 'uploaded': return '#10b981';
      case 'error': return '#ef4444';
      case 'uploading': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const canPreview = showPreview && file.preview && file.file.type.startsWith('image/') && !imageError;

  return (
    <div className={`jf-fileitem jf-fileitem--${file.status} jf-fileitem--${previewType}`}>
      {/* Preview/Icon */}
      <div className="jf-fileitem-preview">
        {canPreview ? (
          <img
            src={file.preview || ""}
            alt={file.name}
            className="jf-fileitem-image"
            onError={() => setImageError(true)}
            onClick={onPreview}
          />
        ) : (
          <div className="jf-fileitem-icon">
            {getFileIcon(file.file)}
          </div>
        )}
      </div>

      {/* File Info */}
      <div className="jf-fileitem-info">
        <div className="jf-fileitem-name">{file.name}</div>
        <div className="jf-fileitem-details">
          <span className="jf-fileitem-size">{formatFileSize(file.size)}</span>
          {file.status !== 'pending' && (
            <>
              <span className="jf-fileitem-separator">•</span>
              <span 
                className="jf-fileitem-status"
                style={{ color: getStatusColor() }}
              >
                {file.status === 'uploading' ? `${file.progress}%` : file.status}
              </span>
            </>
          )}
        </div>
        
        {file.error && (
          <div className="jf-fileitem-error">{file.error}</div>
        )}
      </div>

      {/* Progress Bar */}
      {showProgress && file.status === 'uploading' && (
        <div className="jf-fileitem-progress">
          <div 
            className="jf-fileitem-progress-bar"
            style={{ width: `${file.progress}%` }}
          />
        </div>
      )}

      {/* Actions */}
      <div className="jf-fileitem-actions">
        {file.status === 'pending' && (
          <button
            type="button"
            className="jf-fileitem-action jf-fileitem-action--upload"
            onClick={onUpload}
            aria-label="Upload file"
          >
            <Upload size={16} />
          </button>
        )}
        
        <button
          type="button"
          className="jf-fileitem-action jf-fileitem-action--remove"
          onClick={onRemove}
          aria-label="Remove file"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

// Type definitions
export interface FileUploadFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  progress: number;
  error: string | null;
  preview: string | null;
}

export interface FileUploadProps {
  /** Input name attribute */
  name?: string;
  
  /** Array of uploaded files */
  value?: FileUploadFile[];
  
  /** Change handler */
  onChange?: (files: FileUploadFile[]) => void;
  
  /** Upload handler for individual files */
  onUpload?: (file: FileUploadFile) => void;
  
  /** Progress update handler */
  onProgress?: (fileId: string, progress: number) => void;
  
  /** Error handler */
  onError?: (errors: string[]) => void;
  
  /** Preview handler */
  onPreview?: (file: FileUploadFile) => void;
  
  /** Remove handler */
  onRemove?: (file: FileUploadFile) => void;
  
  /** Upload area label */
  label?: React.ReactNode;
  
  /** Description/help text */
  description?: string;
  
  /** Error message */
  error?: string;
  
  /** Success message */
  success?: string;
  
  /** Warning message */
  warning?: string;
  
  /** Whether field is required */
  required?: boolean;
  
  /** Whether upload is disabled */
  disabled?: boolean;
  
  /** Allow multiple file selection */
  multiple?: boolean;
  
  /** Accepted file types */
  accept?: string[];
  
  /** Maximum number of files */
  maxFiles?: number;
  
  /** Maximum file size in bytes */
  maxSize?: number;
  
  /** Minimum file size in bytes */
  minSize?: number;
  
  /** Show upload progress */
  showProgress?: boolean;
  
  /** Show file previews */
  showPreview?: boolean;
  
  /** Allow drag and drop */
  allowDragDrop?: boolean;
  
  /** Auto-upload on file drop */
  uploadOnDrop?: boolean;
  
  /** Component size */
  size?: "Small" | "Medium" | "Large";
  
  /** Visual variant */
  variant?: "Default" | "Dashed" | "Solid";
  
  /** Layout direction */
  layout?: "vertical" | "horizontal";
  
  /** Preview display type */
  previewType?: "list" | "grid" | "compact";
  
  /** Component ID */
  id?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

// Legacy interface for backward compatibility
export interface UploadI extends Omit<FileUploadProps, 'value' | 'onChange' | 'onUpload'> {
  /** @deprecated Use multiple instead */
  isMultiple?: boolean;
  /** @deprecated Use allowDragDrop instead */
  isDragable?: boolean;
  /** @deprecated Use disabled instead */
  isDisabled?: boolean;
  /** @deprecated Use maxFiles instead */
  maxCount?: number;
  /** @deprecated Use description instead */
  helpText?: string;
  /** @deprecated Use description with icon separately */
  helpIcon?: React.ReactNode;
  /** @deprecated Use onChange with proper signature */
  onChange?: (files: any, single?: any) => void;
  /** @deprecated Use onError with proper signature */
  onError?: (errorData: any, message: string) => void;
  /** @deprecated Use onRemove with proper signature */
  onRemove?: (file: any) => void;
  /** @deprecated Use showProgress and status instead */
  isFileUploaded: boolean[];
}

FileUpload.displayName = "FileUpload";

export default FileUpload;