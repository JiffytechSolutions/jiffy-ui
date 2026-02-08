import React, { useState } from "react";
import FileUpload, { FileUploadFile } from "./FileUpload";
import FlexLayout from "../../FlexLayout/FlexLayout";
import Button from "../../Button/Button";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Dashed", "Solid"];
const layouts = ["vertical", "horizontal"];
const previewTypes = ["list", "grid", "compact"];

export default {
  title: "Components/Input/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Upload area label",
      control: {
        type: "text",
      },
    },
    multiple: {
      description: "Allow multiple file selection",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Whether upload is disabled",
      control: {
        type: "boolean",
      },
    },
    required: {
      description: "Whether field is required",
      control: {
        type: "boolean",
      },
    },
    allowDragDrop: {
      description: "Allow drag and drop",
      control: {
        type: "boolean",
      },
    },
    showProgress: {
      description: "Show upload progress",
      control: {
        type: "boolean",
      },
    },
    showPreview: {
      description: "Show file previews",
      control: {
        type: "boolean",
      },
    },
    size: {
      description: "Component size",
      control: {
        type: "radio",
        options: sizes,
      },
    },
    variant: {
      description: "Visual variant",
      control: {
        type: "radio",
        options: variants,
      },
    },
    layout: {
      description: "Layout direction",
      control: {
        type: "radio",
        options: layouts,
      },
    },
    previewType: {
      description: "Preview display type",
      control: {
        type: "radio",
        options: previewTypes,
      },
    },
    maxFiles: {
      description: "Maximum number of files",
      control: {
        type: "number",
        min: 1,
        max: 20,
      },
    },
    maxSize: {
      description: "Maximum file size in MB",
      control: {
        type: "number",
        min: 0.1,
        max: 100,
        step: 0.1,
      },
    },
  },
  args: {
    label: "Upload Files",
    multiple: true,
    disabled: false,
    required: false,
    allowDragDrop: true,
    showProgress: true,
    showPreview: true,
    size: "Medium",
    variant: "Default",
    layout: "vertical",
    previewType: "list",
    maxFiles: 5,
    maxSize: 10,
  }
};

const Template = ({ maxSize, ...rest }: { maxSize?: number; [key: string]: any }) => {
  const [files, setFiles] = useState<FileUploadFile[]>([]);

  // Convert MB to bytes for the component
  const maxSizeBytes = maxSize ? maxSize * 1024 * 1024 : undefined;

  const handleUpload = (file: FileUploadFile) => {
    console.log("Uploading file:", file.name);
    
    // Simulate upload progress
    const updateProgress = (progress: number) => {
      setFiles(prevFiles => 
        prevFiles.map(f => 
          f.id === file.id 
            ? { ...f, status: 'uploading' as const, progress }
            : f
        )
      );
    };

    // Simulate upload
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles(prevFiles => 
          prevFiles.map(f => 
            f.id === file.id 
              ? { ...f, status: 'uploaded' as const, progress: 100 }
              : f
          )
        );
      } else {
        updateProgress(progress);
      }
    }, 500);
  };

  const handleError = (errors: string[]) => {
    console.error("Upload errors:", errors);
    alert("Upload errors:\n" + errors.join("\n"));
  };

  const handlePreview = (file: FileUploadFile) => {
    console.log("Preview file:", file.name);
    if (file.preview) {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(`<img src="${file.preview}" style="max-width: 100%; height: auto;" />`);
      }
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <FileUpload
        name="example-upload"
        value={files}
        onChange={setFiles}
        onUpload={handleUpload}
        onError={handleError}
        onPreview={handlePreview}
        accept={["image/*", ".pdf", ".doc", ".docx"]}
        maxSize={maxSizeBytes}
        description="Drag & drop files or click to browse. Supported: Images, PDF, DOC files"
        {...rest}
      />
      
      {files.length > 0 && (
        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
          <h4>File Information:</h4>
          <ul>
            {files.map(file => (
              <li key={file.id}>
                <strong>{file.name}</strong> - {(file.size / 1024 / 1024).toFixed(2)}MB - {file.status}
                {file.status === 'uploading' && ` (${file.progress.toFixed(0)}%)`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Primary = Template.bind({});

// Basic FileUpload Examples
export const FileUpload_basic_examples: any = Template.bind({});
FileUpload_basic_examples.decorators = [
  () => {
    const [singleFile, setSingleFile] = useState<FileUploadFile[]>([]);
    const [multipleFiles, setMultipleFiles] = useState<FileUploadFile[]>([]);

    return (
      <FlexLayout gap={4}>
        <h3>Basic FileUpload Examples</h3>
        
        <div>
          <h4>Single File Upload:</h4>
          <FileUpload
            name="single-upload"
            label="Upload Document"
            value={singleFile}
            onChange={setSingleFile}
            multiple={false}
            accept={[".pdf", ".doc", ".docx"]}
            maxSize={5 * 1024 * 1024} // 5MB
            description="Select a single document file (PDF or DOC)"
          />
        </div>

        <div>
          <h4>Multiple File Upload:</h4>
          <FileUpload
            name="multiple-upload"
            label="Upload Images"
            value={multipleFiles}
            onChange={setMultipleFiles}
            multiple={true}
            accept={["image/*"]}
            maxFiles={3}
            maxSize={2 * 1024 * 1024} // 2MB
            description="Select up to 3 image files (max 2MB each)"
          />
        </div>
      </FlexLayout>
    );
  },
];

// Different Sizes
export const FileUpload_different_sizes: any = Template.bind({});
FileUpload_different_sizes.decorators = [
  () => {
    return (
      <FlexLayout gap={4}>
        <h3>Different Sizes</h3>
        
        {sizes.map((size) => {
          const [files, setFiles] = useState<FileUploadFile[]>([]);
          return (
            <div key={size}>
              <h4>{size} Size:</h4>
              <FileUpload
                name={`size-${size.toLowerCase()}`}
                label={`${size} FileUpload`}
                value={files}
                onChange={setFiles}
                size={size as "Small" | "Medium" | "Large"}
                accept={["image/*", ".pdf"]}
                description={`This is a ${size.toLowerCase()} sized file upload`}
              />
            </div>
          );
        })}
      </FlexLayout>
    );
  },
];

// Different Variants
export const FileUpload_different_variants: any = Template.bind({});
FileUpload_different_variants.decorators = [
  () => {
    return (
      <FlexLayout gap={4}>
        <h3>Different Variants</h3>
        
        {variants.map((variant) => {
          const [files, setFiles] = useState<FileUploadFile[]>([]);
          return (
            <div key={variant}>
              <h4>{variant} Variant:</h4>
              <FileUpload
                name={`variant-${variant.toLowerCase()}`}
                label={`${variant} Style Upload`}
                value={files}
                onChange={setFiles}
                variant={variant as "Default" | "Dashed" | "Solid"}
                accept={["image/*", ".pdf", ".doc"]}
                description={`File upload using ${variant.toLowerCase()} visual style`}
              />
            </div>
          );
        })}
      </FlexLayout>
    );
  },
];

// Preview Types
export const FileUpload_preview_types: any = Template.bind({});
FileUpload_preview_types.decorators = [
  () => {
    return (
      <FlexLayout gap={4}>
        <h3>Preview Display Types</h3>
        
        {previewTypes.map((previewType) => {
          const [files, setFiles] = useState<FileUploadFile[]>([]);
          
          // Add some sample files for demonstration
          React.useEffect(() => {
            if (files.length === 0) {
              // Create mock files for demonstration
              const mockFiles: FileUploadFile[] = [
                {
                  id: `mock-1-${previewType}`,
                  file: new File([""], "sample-image.jpg", { type: "image/jpeg" }),
                  name: "sample-image.jpg",
                  size: 1024000,
                  type: "image/jpeg",
                  status: "uploaded",
                  progress: 100,
                  error: null,
                  preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyNkM4LjU0IDI2IDggMjAuNTQgOCAyMEM4IDE5LjQ2IDguNTQgMTkgOSAxOUgzMUMzMS40NiAxOSAzMiAxOS40NiAzMiAyMEMzMiAyMC41NCAzMS40NiAyNiAyMCAyNloiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cg==",
                },
                {
                  id: `mock-2-${previewType}`,
                  file: new File([""], "document.pdf", { type: "application/pdf" }),
                  name: "document.pdf",
                  size: 512000,
                  type: "application/pdf",
                  status: "uploaded",
                  progress: 100,
                  error: null,
                  preview: null,
                }
              ];
              setFiles(mockFiles);
            }
          }, [files.length, previewType]);
          
          return (
            <div key={previewType}>
              <h4>{previewType.charAt(0).toUpperCase() + previewType.slice(1)} Preview:</h4>
              <FileUpload
                name={`preview-${previewType}`}
                label={`${previewType.charAt(0).toUpperCase() + previewType.slice(1)} File Upload`}
                value={files}
                onChange={setFiles}
                previewType={previewType as "list" | "grid" | "compact"}
                accept={["image/*", ".pdf", ".doc"]}
                description={`Files displayed in ${previewType} layout`}
              />
            </div>
          );
        })}
      </FlexLayout>
    );
  },
];

// Validation States
export const FileUpload_validation_states: any = Template.bind({});
FileUpload_validation_states.decorators = [
  () => {
    const [defaultFiles, setDefaultFiles] = useState<FileUploadFile[]>([]);
    const [successFiles, setSuccessFiles] = useState<FileUploadFile[]>([]);
    const [warningFiles, setWarningFiles] = useState<FileUploadFile[]>([]);
    const [errorFiles, setErrorFiles] = useState<FileUploadFile[]>([]);

    return (
      <FlexLayout gap={4}>
        <h3>Validation States</h3>
        
        <FileUpload
          name="validation-default"
          label="Default State"
          value={defaultFiles}
          onChange={setDefaultFiles}
          accept={["image/*", ".pdf"]}
          description="Upload your files here"
        />

        <FileUpload
          name="validation-success"
          label="Success State"
          value={successFiles}
          onChange={setSuccessFiles}
          accept={["image/*", ".pdf"]}
          success="Files uploaded successfully! All validations passed."
        />

        <FileUpload
          name="validation-warning"
          label="Warning State"
          value={warningFiles}
          onChange={setWarningFiles}
          accept={["image/*", ".pdf"]}
          warning="Some files may be too large. Please check file sizes."
          required
        />

        <FileUpload
          name="validation-error"
          label="Error State"
          value={errorFiles}
          onChange={setErrorFiles}
          accept={["image/*", ".pdf"]}
          error="Upload failed. Please check file types and try again."
          required
        />
      </FlexLayout>
    );
  },
];

// Different States
export const FileUpload_different_states: any = Template.bind({});
FileUpload_different_states.decorators = [
  () => {
    const [normalFiles, setNormalFiles] = useState<FileUploadFile[]>([]);
    const [requiredFiles, setRequiredFiles] = useState<FileUploadFile[]>([]);
    const [disabledFiles, setDisabledFiles] = useState<FileUploadFile[]>([]);
    const [noDragFiles, setNoDragFiles] = useState<FileUploadFile[]>([]);

    return (
      <FlexLayout gap={4}>
        <h3>Different States</h3>
        
        <FileUpload
          name="state-normal"
          label="Normal FileUpload"
          value={normalFiles}
          onChange={setNormalFiles}
          accept={["image/*", ".pdf"]}
          description="Standard file upload with all features enabled"
        />

        <FileUpload
          name="state-required"
          label="Required FileUpload"
          value={requiredFiles}
          onChange={setRequiredFiles}
          accept={["image/*", ".pdf"]}
          required
          description="You must upload at least one file"
        />

        <FileUpload
          name="state-disabled"
          label="Disabled FileUpload"
          value={disabledFiles}
          onChange={setDisabledFiles}
          accept={["image/*", ".pdf"]}
          disabled
          description="This file upload is currently disabled"
        />

        <FileUpload
          name="state-no-drag"
          label="Click-Only Upload"
          value={noDragFiles}
          onChange={setNoDragFiles}
          accept={["image/*", ".pdf"]}
          allowDragDrop={false}
          description="Drag and drop is disabled, click to browse files"
        />
      </FlexLayout>
    );
  },
];

// Advanced Features
export const FileUpload_advanced_features: any = Template.bind({});
FileUpload_advanced_features.decorators = [
  () => {
    const [autoUploadFiles, setAutoUploadFiles] = useState<FileUploadFile[]>([]);
    const [restrictedFiles, setRestrictedFiles] = useState<FileUploadFile[]>([]);
    const [layoutFiles, setLayoutFiles] = useState<FileUploadFile[]>([]);

    const handleAutoUpload = (file: FileUploadFile) => {
      console.log("Auto-uploading:", file.name);
      
      // Simulate upload
      setTimeout(() => {
        setAutoUploadFiles(prevFiles => 
          prevFiles.map(f => 
            f.id === file.id 
              ? { ...f, status: 'uploaded' as const, progress: 100 }
              : f
          )
        );
      }, 2000);
    };

    const handleError = (errors: string[]) => {
      alert("Upload errors:\n" + errors.join("\n"));
    };

    return (
      <FlexLayout gap={4}>
        <h3>Advanced Features</h3>
        
        <div>
          <h4>Auto-Upload on Drop:</h4>
          <FileUpload
            name="auto-upload"
            label="Auto-Upload Files"
            value={autoUploadFiles}
            onChange={setAutoUploadFiles}
            onUpload={handleAutoUpload}
            onError={handleError}
            accept={["image/*"]}
            uploadOnDrop={true}
            description="Files will be uploaded automatically when dropped"
          />
        </div>

        <div>
          <h4>Strict File Restrictions:</h4>
          <FileUpload
            name="restricted-upload"
            label="Image Upload Only"
            value={restrictedFiles}
            onChange={setRestrictedFiles}
            onError={handleError}
            accept={["image/jpeg", "image/png"]}
            maxFiles={2}
            maxSize={1024 * 1024} // 1MB
            minSize={10 * 1024} // 10KB
            description="Only JPEG/PNG images, 2 files max, 10KB-1MB each"
          />
        </div>

        <div>
          <h4>Horizontal Layout:</h4>
          <FileUpload
            name="horizontal-upload"
            label="Side-by-Side Upload"
            value={layoutFiles}
            onChange={setLayoutFiles}
            layout="horizontal"
            accept={["image/*", ".pdf"]}
            description="Upload area and file list displayed side by side"
          />
        </div>
      </FlexLayout>
    );
  },
];

// Upload Simulation
export const FileUpload_upload_simulation: any = Template.bind({});
FileUpload_upload_simulation.decorators = [
  () => {
    const [files, setFiles] = useState<FileUploadFile[]>([]);

    const handleUpload = (file: FileUploadFile) => {
      console.log("Starting upload for:", file.name);
      
      // Simulate realistic upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15 + 5; // 5-20% increments
        
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setFiles(prevFiles => 
            prevFiles.map(f => 
              f.id === file.id 
                ? { ...f, status: 'uploaded' as const, progress: 100 }
                : f
            )
          );
        } else {
          setFiles(prevFiles => 
            prevFiles.map(f => 
              f.id === file.id 
                ? { ...f, status: 'uploading' as const, progress }
                : f
            )
          );
        }
      }, 300);
    };

    const handleUploadAll = () => {
      const pendingFiles = files.filter(f => f.status === 'pending');
      pendingFiles.forEach(file => {
        setTimeout(() => handleUpload(file), Math.random() * 1000);
      });
    };

    const handleClearAll = () => {
      setFiles([]);
    };

    const handleError = (errors: string[]) => {
      console.error("Upload errors:", errors);
    };

    const simulateError = () => {
      const uploadingFile = files.find(f => f.status === 'uploading');
      if (uploadingFile) {
        setFiles(prevFiles => 
          prevFiles.map(f => 
            f.id === uploadingFile.id 
              ? { ...f, status: 'error' as const, error: 'Upload failed due to network error' }
              : f
          )
        );
      }
    };

    const pendingCount = files.filter(f => f.status === 'pending').length;
    const uploadingCount = files.filter(f => f.status === 'uploading').length;
    const uploadedCount = files.filter(f => f.status === 'uploaded').length;
    const errorCount = files.filter(f => f.status === 'error').length;

    return (
      <FlexLayout gap={4}>
        <h3>Upload Simulation & Management</h3>
        
        <FileUpload
          name="upload-simulation"
          label="Multi-File Upload Manager"
          value={files}
          onChange={setFiles}
          onUpload={handleUpload}
          onError={handleError}
          accept={["image/*", ".pdf", ".doc", ".docx"]}
          maxFiles={10}
          maxSize={5 * 1024 * 1024} // 5MB
          multiple={true}
          showProgress={true}
          description="Upload multiple files with progress tracking"
        />

        {files.length > 0 && (
          <>
            <div style={{ 
              padding: "1rem", 
              background: "#f9fafb", 
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb"
            }}>
              <h4 style={{ margin: "0 0 1rem 0" }}>Upload Status:</h4>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <div>
                  <strong>Pending:</strong> {pendingCount}
                </div>
                <div>
                  <strong>Uploading:</strong> {uploadingCount}
                </div>
                <div>
                  <strong>Uploaded:</strong> {uploadedCount}
                </div>
                <div>
                  <strong>Errors:</strong> {errorCount}
                </div>
              </div>
              
              <FlexLayout gap={2}>
                <Button
                  onClick={handleUploadAll}
                  isDisabled={pendingCount === 0}
                  size="Small"
                  variant="Primary"
                >
                  Upload All ({pendingCount})
                </Button>
                
                <Button
                  onClick={simulateError}
                  isDisabled={uploadingCount === 0}
                  size="Small"
                  variant="Secondary"
                >
                  Simulate Error
                </Button>
                
                <Button
                  onClick={handleClearAll}
                  isDisabled={files.length === 0}
                  size="Small"
                  variant="Danger"
                >
                  Clear All
                </Button>
              </FlexLayout>
            </div>
          </>
        )}
      </FlexLayout>
    );
  },
];

// Grid Layout Showcase
export const FileUpload_grid_showcase: any = Template.bind({});
FileUpload_grid_showcase.decorators = [
  () => {
    const [files, setFiles] = useState<FileUploadFile[]>([]);

    // Add sample files for demonstration
    React.useEffect(() => {
      if (files.length === 0) {
        const mockFiles: FileUploadFile[] = [
          {
            id: "mock-1",
            file: new File([""], "beach-sunset.jpg", { type: "image/jpeg" }),
            name: "beach-sunset.jpg",
            size: 1024000,
            type: "image/jpeg",
            status: "uploaded",
            progress: 100,
            error: null,
            preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkY3MDQzIi8+CjxjaXJjbGUgY3g9IjQ1IiBjeT0iMTUiIHI9IjUiIGZpbGw9IiNGRkRCNEQiLz4KPHBhdGggZD0iTTAgNDBMMjAgMjBMMzAgMzBMNDAgMjBMNjAgNDBWNjBIMFY0MFoiIGZpbGw9IiMzNEQ0MDciLz4KPC9zdmc+",
          },
          {
            id: "mock-2",
            file: new File([""], "mountain-view.png", { type: "image/png" }),
            name: "mountain-view.png",
            size: 2048000,
            type: "image/png",
            status: "uploaded",
            progress: 100,
            error: null,
            preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjOTNDNUZEIi8+Cjxwb2x5Z29uIHBvaW50cz0iMCw0MCAyMCwxMCA0MCwyMCA2MCw1IDYwLDYwIDAsMjAiIGZpbGw9IiM2QjdCODAiLz4KPC9zdmc+",
          },
          {
            id: "mock-3",
            file: new File([""], "report.pdf", { type: "application/pdf" }),
            name: "quarterly-report.pdf",
            size: 512000,
            type: "application/pdf",
            status: "uploaded",
            progress: 100,
            error: null,
            preview: null,
          },
          {
            id: "mock-4",
            file: new File([""], "uploading.jpg", { type: "image/jpeg" }),
            name: "uploading-image.jpg",
            size: 1536000,
            type: "image/jpeg",
            status: "uploading",
            progress: 65,
            error: null,
            preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRkJFRDNCIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjE1IiBzdHJva2U9IiNGMzc5MkYiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=",
          }
        ];
        setFiles(mockFiles);
      }
    }, [files.length]);

    return (
      <FlexLayout gap={4} style={{ maxWidth: "800px" }}>
        <h3>Grid Layout Showcase</h3>
        
        <FileUpload
          name="grid-showcase"
          label="Photo Gallery Upload"
          value={files}
          onChange={setFiles}
          previewType="grid"
          accept={["image/*", ".pdf"]}
          maxFiles={12}
          multiple={true}
          showProgress={true}
          showPreview={true}
          description="Upload images and documents - displays in a beautiful grid layout"
        />
        
        <div style={{ 
          padding: "1rem", 
          background: "#f3f4f6", 
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
          color: "#6b7280"
        }}>
          <strong>Grid Layout Benefits:</strong>
          <ul style={{ margin: "0.5rem 0", paddingLeft: "2rem" }}>
            <li>Visual preview for images</li>
            <li>Compact display for many files</li>
            <li>Hover actions for better UX</li>
            <li>Progress indicators overlay</li>
            <li>Responsive grid columns</li>
          </ul>
        </div>
      </FlexLayout>
    );
  },
];