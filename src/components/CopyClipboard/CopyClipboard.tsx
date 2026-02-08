import React, { useEffect, useState, useCallback } from "react";
import { FC } from "react";

import TextStyle from "../TextStyle/TextStyle";
import { Check, Copy, Eye, EyeOff } from "react-feather";
import "./CopyClipboard.css";

export interface CopyClipboardI {
  /** The text value to copy to clipboard */
  value: string;
  /** Optional label to display alongside the copy button */
  label?: string;
  /** Visual variant of the component */
  variant?: "inline" | "outlined" | "filled" | "minimal";
  /** Size of the component */
  size?: "small" | "medium" | "large";
  /** Position of the copy icon relative to the text */
  iconPosition?: "left" | "right";
  /** Duration in milliseconds to show success state */
  successTimeout?: number;
  /** Whether to show a preview of the value */
  showPreview?: boolean;
  /** Whether the value should be masked (useful for passwords/tokens) */
  masked?: boolean;
  /** Maximum length of preview text before truncation */
  previewLength?: number;
  /** Custom CSS class */
  className?: string;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Callback fired when copy is successful */
  onCopySuccess?: (value: string) => void;
  /** Callback fired when copy fails */
  onCopyError?: (error: Error) => void;
  /** Custom success message */
  successMessage?: string;
  /** Whether to show toast notification */
  showToast?: boolean;
  /** Action-only mode - shows only the copy button without preview or label */
  actionOnly?: boolean;
  /** Action button style when in actionOnly mode */
  actionStyle?: "icon" | "text" | "icon-text";
  /** Custom text for action button (when actionStyle is 'text' or 'icon-text') */
  actionText?: string;
}

const CopyClipboard: FC<CopyClipboardI> = ({
  value,
  label,
  variant = "inline",
  size = "medium",
  iconPosition = "right",
  successTimeout = 2000,
  showPreview = true,
  masked = false,
  previewLength = 40,
  className = "",
  disabled = false,
  onCopySuccess,
  onCopyError,
  successMessage = "Copied!",
  showToast = false,
  actionOnly = false,
  actionStyle = "icon",
  actionText = "Copy",
}: CopyClipboardI): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(!masked);
  const [showToastMessage, setShowToastMessage] = useState(false);

  const copyToClipboard = useCallback(async () => {
    if (disabled || !value) return;

    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      onCopySuccess?.(value);
      
      if (showToast) {
        setShowToastMessage(true);
        setTimeout(() => setShowToastMessage(false), successTimeout);
      }
    } catch (error) {
      console.error('Failed to copy text: ', error);
      onCopyError?.(error as Error);
    }
  }, [value, disabled, onCopySuccess, onCopyError, showToast, successTimeout]);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), successTimeout);
      return () => clearTimeout(timer);
    }
  }, [isCopied, successTimeout]);

  const toggleReveal = useCallback(() => {
    setIsRevealed(!isRevealed);
  }, [isRevealed]);

  const getPreviewText = () => {
    if (!showPreview) return null;
    
    let displayValue = value;
    
    if (masked && !isRevealed) {
      displayValue = '•'.repeat(Math.min(value.length, 12));
    } else if (value.length > previewLength) {
      displayValue = value.substring(0, previewLength) + '...';
    }
    
    return displayValue;
  };

  const copyIcon = isCopied ? (
    <Check size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
  ) : (
    <Copy size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
  );

  const revealIcon = isRevealed ? (
    <EyeOff size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
  ) : (
    <Eye size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
  );

  const componentClasses = [
    'jf-copy-clipboard',
    `jf-copy-clipboard--${variant}`,
    `jf-copy-clipboard--${size}`,
    disabled && 'jf-copy-clipboard--disabled',
    isCopied && 'jf-copy-clipboard--copied',
    actionOnly && 'jf-copy-clipboard--action-only',
    className
  ].filter(Boolean).join(' ');

  // Action-only mode - render just the button
  if (actionOnly) {
    return (
      <div className={componentClasses}>
        {/* Toast notification */}
        {showToastMessage && (
          <div className="jf-copy-clipboard-toast">
            <Check size={16} />
            <span>{successMessage}</span>
          </div>
        )}
        
        <button
          className={`jf-copy-clipboard-button jf-copy-clipboard-action-button jf-copy-clipboard-action-button--${actionStyle}`}
          onClick={copyToClipboard}
          disabled={disabled}
          aria-label={isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
          title={isCopied ? 'Copied!' : 'Copy to clipboard'}
        >
          {(actionStyle === 'icon' || actionStyle === 'icon-text') && copyIcon}
          {(actionStyle === 'text' || actionStyle === 'icon-text') && (
            <span className="jf-copy-clipboard-button-text">
              {isCopied ? successMessage : actionText}
            </span>
          )}
        </button>
      </div>
    );
  }

  // Regular mode with full functionality
  return (
    <div className={componentClasses}>
      {/* Toast notification */}
      {showToastMessage && (
        <div className="jf-copy-clipboard-toast">
          <Check size={16} />
          <span>{successMessage}</span>
        </div>
      )}
      
      {/* Label */}
      {label && (
        <div className="jf-copy-clipboard-label">
          <TextStyle as="span" className="jf-copy-clipboard-label-text">
            {label}
          </TextStyle>
        </div>
      )}
      
      {/* Main content */}
      <div className="jf-copy-clipboard-content">
        {/* Copy button - left position */}
        {iconPosition === 'left' && (
          <button
            className="jf-copy-clipboard-button jf-copy-clipboard-button--icon-only"
            onClick={copyToClipboard}
            disabled={disabled}
            aria-label={isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
            title={isCopied ? 'Copied!' : 'Copy to clipboard'}
          >
            {copyIcon}
          </button>
        )}
        
        {/* Preview text */}
        {showPreview && (
          <div className="jf-copy-clipboard-preview">
            <TextStyle as="span" className="jf-copy-clipboard-preview-text">
              {getPreviewText()}
            </TextStyle>
            
            {/* Reveal/hide button for masked content */}
            {masked && (
              <button
                className="jf-copy-clipboard-button jf-copy-clipboard-button--reveal"
                onClick={toggleReveal}
                disabled={disabled}
                aria-label={isRevealed ? 'Hide value' : 'Show value'}
                title={isRevealed ? 'Hide value' : 'Show value'}
              >
                {revealIcon}
              </button>
            )}
          </div>
        )}
        
        {/* Copy button - right position or standalone */}
        {(iconPosition === 'right' || !showPreview) && (
          <button
            className={`jf-copy-clipboard-button ${
              showPreview ? 'jf-copy-clipboard-button--icon-only' : 'jf-copy-clipboard-button--with-text'
            }`}
            onClick={copyToClipboard}
            disabled={disabled}
            aria-label={isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
            title={isCopied ? 'Copied!' : 'Copy to clipboard'}
          >
            {copyIcon}
            {!showPreview && (
              <span className="jf-copy-clipboard-button-text">
                {isCopied ? successMessage : 'Copy'}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CopyClipboard;
