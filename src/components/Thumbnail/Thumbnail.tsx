import React, { forwardRef, useState, useCallback, useMemo } from "react";
import { User, FileText, Image, Video, Music, File, AlertCircle } from "react-feather";
import "./Thumbnail.css";

const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(({
  source,
  alt = "Thumbnail",
  size = "Medium",
  variant = "Default",
  shape = "Rounded",
  objectFit = "Cover",
  fallback,
  placeholder,
  loading = "lazy",
  onClick,
  onLoad,
  onError,
  disabled = false,
  badge,
  overlay,
  aspectRatio,
  className,
  style,
  id,
  testId,
  ...props
}, ref) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [isHovered, setIsHovered] = useState(false);

  // Handle image load
  const handleImageLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    setImageState('loaded');
    onLoad?.(event);
  }, [onLoad]);

  // Handle image error
  const handleImageError = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    setImageState('error');
    onError?.(event);
  }, [onError]);

  // Handle click
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  }, [disabled, onClick]);

  // Generate CSS classes
  const thumbnailClasses = useMemo(() => [
    "jf-thumbnail",
    `jf-thumbnail--${size.toLowerCase()}`,
    `jf-thumbnail--${variant.toLowerCase()}`,
    `jf-thumbnail--${shape.toLowerCase()}`,
    `jf-thumbnail--${objectFit.toLowerCase()}`,
    aspectRatio ? `jf-thumbnail--aspect-${aspectRatio.replace(":", "-")}` : "",
    onClick && !disabled ? "jf-thumbnail--clickable" : "",
    disabled ? "jf-thumbnail--disabled" : "",
    imageState === 'loading' ? "jf-thumbnail--loading" : "",
    imageState === 'error' ? "jf-thumbnail--error" : "",
    isHovered ? "jf-thumbnail--hovered" : "",
    className || "",
  ].filter(Boolean).join(" "), [size, variant, shape, objectFit, aspectRatio, onClick, disabled, imageState, isHovered, className]);

  // Get fallback content
  const getFallbackContent = useCallback(() => {
    if (fallback) {
      if (typeof fallback === 'string') {
        // If fallback is a string, show as initials
        return <span className="jf-thumbnail-initials">{fallback.substring(0, 2).toUpperCase()}</span>;
      }
      return fallback;
    }

    // Default fallback based on content type
    const extension = source?.split('.').pop()?.toLowerCase();
    if (extension) {
      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) {
        return <Image size="50%" className="jf-thumbnail-fallback-icon" />;
      }
      if (['mp4', 'avi', 'mov', 'webm'].includes(extension)) {
        return <Video size="50%" className="jf-thumbnail-fallback-icon" />;
      }
      if (['mp3', 'wav', 'ogg', 'flac'].includes(extension)) {
        return <Music size="50%" className="jf-thumbnail-fallback-icon" />;
      }
      if (['pdf', 'doc', 'docx', 'txt'].includes(extension)) {
        return <FileText size="50%" className="jf-thumbnail-fallback-icon" />;
      }
    }

    return <User size="50%" className="jf-thumbnail-fallback-icon" />;
  }, [fallback, source]);

  // Get placeholder content
  const getPlaceholderContent = () => {
    if (placeholder) {
      return placeholder;
    }
    return (
      <div className="jf-thumbnail-skeleton">
        <div className="jf-thumbnail-skeleton-shimmer"></div>
      </div>
    );
  };

  return (
    <>
     {badge ? (
      <div className="jf-thumb-with-badge">
        {badge && (
              <div className="jf-thumbnail-badge">
                {badge}
              </div>
            )}
        <div
          ref={ref}
          id={id}
          data-testid={testId}
          className={thumbnailClasses}
          style={style}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role={onClick ? "button" : undefined}
          tabIndex={onClick && !disabled ? 0 : undefined}
          aria-label={onClick ? `${alt} (clickable)` : alt}
          aria-disabled={disabled}
          onKeyDown={(e) => {
            if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handleClick(e as any);
            }
          }}
          {...props}
        >
          {/* Main content container */}
          <div className="jf-thumbnail-content">
            {/* Image or fallback */}
            {source && imageState !== 'error' ? (
              <>
                {imageState === 'loading' && (
                  <div className="jf-thumbnail-placeholder">
                    {getPlaceholderContent()}
                  </div>
                )}
                <img
                  className="jf-thumbnail-image"
                  src={source}
                  alt={alt}
                  loading={loading}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{
                    opacity: imageState === 'loaded' ? 1 : 0,
                    transition: 'opacity 0.2s ease-in-out'
                  }}
                />
              </>
            ) : (
              <div className="jf-thumbnail-fallback">
                {imageState === 'error' ? (
                  
                    <AlertCircle size="50%" className="jf-thumbnail-error-icon" />
                  
                  
                ) : (
                  getFallbackContent()
                )}
              </div>
            )}

            {/* Overlay */}
            {overlay && (
              <div className="jf-thumbnail-overlay">
                {overlay}
              </div>
            )}

            {/* Badge */}
            
          </div>

          {/* Focus ring for accessibility */}
          {onClick && <div className="jf-thumbnail-focus-ring" />}
        </div>
      </div>
     ):(
    <div
      ref={ref}
      id={id}
      data-testid={testId}
      className={thumbnailClasses}
      style={style}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-label={onClick ? `${alt} (clickable)` : alt}
      aria-disabled={disabled}
      onKeyDown={(e) => {
        if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
      {...props}
    >
      {/* Main content container */}
      <div className="jf-thumbnail-content">
        {/* Image or fallback */}
        {source && imageState !== 'error' ? (
          <>
            {imageState === 'loading' && (
              <div className="jf-thumbnail-placeholder">
                {getPlaceholderContent()}
              </div>
            )}
            <img
              className="jf-thumbnail-image"
              src={source}
              alt={alt}
              loading={loading}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{
                opacity: imageState === 'loaded' ? 1 : 0,
                transition: 'opacity 0.2s ease-in-out'
              }}
            />
          </>
        ) : (
          <div className="jf-thumbnail-fallback">
            {imageState === 'error' ? (
              
                <AlertCircle size="50%" className="jf-thumbnail-error-icon" />
               
              
            ) : (
              getFallbackContent()
            )}
          </div>
        )}

        {/* Overlay */}
        {overlay && (
          <div className="jf-thumbnail-overlay">
            {overlay}
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="jf-thumbnail-badge">
            {badge}
          </div>
        )}
      </div>

      {/* Focus ring for accessibility */}
      {onClick && <div className="jf-thumbnail-focus-ring" />}
    </div>
    )}
    </>
  );
});

// Type definitions
export interface ThumbnailProps {
  /** Image source URL */
  source?: string;
  
  /** Alt text for the image */
  alt?: string;
  
  /** Size of the thumbnail */
  size?: "ExtraSmall" | "Small" | "Medium" | "Large" | "ExtraLarge";
  
  /** Visual variant */
  variant?: "Default" | "Detailed" | "Minimal" | "Card";
  
  /** Shape of the thumbnail */
  shape?: "Rounded" | "Circular" | "Square";
  
  /** How the image should fit within the container */
  objectFit?: "Cover" | "Contain" | "Fill" | "ScaleDown" | "None";
  
  /** Fallback content when image fails to load or no source provided */
  fallback?: React.ReactNode | string;
  
  /** Placeholder content while image is loading */
  placeholder?: React.ReactNode;
  
  /** Image loading strategy */
  loading?: "lazy" | "eager";
  
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  /** Image load handler */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  
  /** Image error handler */
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  
  /** Whether thumbnail is disabled */
  disabled?: boolean;
  
  /** Badge element to display on thumbnail */
  badge?: React.ReactNode;
  
  /** Overlay content */
  overlay?: React.ReactNode;
  
  /** Aspect ratio (e.g., "16:9", "4:3", "1:1") */
  aspectRatio?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Inline styles */
  style?: React.CSSProperties;
  
  /** Element ID */
  id?: string;
  
  /** Test ID for testing */
  testId?: string;
  
  /** Additional HTML attributes */
  [key: string]: any;
}

// Legacy interface for backward compatibility
export interface ThumbnailI extends Omit<ThumbnailProps, 'objectFit' | 'size'> {
  /** @deprecated Use objectFit instead */
  objectFit?: "Fill" | "Contain" | "Cover" | "Default";
  /** @deprecated Use size instead */
  size?: "ExtraSmall" | "Small" | "Medium" | "Large";
}

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;