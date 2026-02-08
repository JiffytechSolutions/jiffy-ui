import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import VerticalStack from "../VerticalStack/VerticalStack";
import InlineStack from "../InlineStack/InlineStack";
import Card from "../Card/Card";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import { 
  Play, 
  Download, 
  Heart, 
  Star, 
  Edit, 
  Share, 
  Eye,
  Calendar,
  Clock,
  MapPin,
  Award,
  Check
} from "react-feather";
import TextStyle from "../TextStyle/TextStyle";

const sizes = ["ExtraSmall", "Small", "Medium", "Large", "ExtraLarge"];
const variants = ["Default", "Detailed", "Minimal", "Card"];
const shapes = ["Rounded", "Circular", "Square"];
const objectFits = ["Cover", "Contain", "Fill", "ScaleDown", "None"];

// Sample images
const sampleImages = {
  landscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  square: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop",
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
  food: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
  avatar1: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
  avatar2: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=200&h=200&fit=crop&crop=face",
  avatar3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
};

export default {
  title: "Components/Thumbnail",
  component: Thumbnail,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A modern, flexible Thumbnail component supporting multiple variants, shapes, loading states, fallbacks, and interactive features. Perfect for images, avatars, media previews, and file representations.",
      },
    },
  },
  argTypes: {
    source: {
      description: "Image source URL",
      control: { type: "text" },
    },
    alt: {
      description: "Alt text for accessibility",
      control: { type: "text" },
    },
    size: {
      description: "Size of the thumbnail",
      control: { type: "radio", options: sizes },
    },
    variant: {
      description: "Visual variant",
      control: { type: "radio", options: variants },
    },
    shape: {
      description: "Shape of the thumbnail",
      control: { type: "radio", options: shapes },
    },
    objectFit: {
      description: "How image fits within container",
      control: { type: "radio", options: objectFits },
    },
    disabled: {
      description: "Whether thumbnail is disabled",
      control: { type: "boolean" },
    },
    loading: {
      description: "Image loading strategy",
      control: { type: "radio", options: ["lazy", "eager"] },
    },
  },
  args: {
    source: sampleImages.landscape,
    alt: "Sample thumbnail",
    size: "Medium",
    variant: "Default",
    shape: "Rounded",
    objectFit: "Cover",
    disabled: false,
    loading: "lazy",
  }
};

// Primary Template
const Template = (args: any) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Thumbnail {...args} />
    </div>
  );
};

export const Primary: any = Template.bind({});
Primary.args = {
  source: sampleImages.landscape,
  alt: "Beautiful landscape",
};
Primary.parameters = {
  docs: {
    description: {
      story: "The default Thumbnail component. Use the controls panel to experiment with different configurations.",
    },
  },
};

// Size Variants
export const SizeVariants: any = Template.bind({});
SizeVariants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Size Variants</h3>
        <InlineStack gap={3} style={{ alignItems: "center" }}>
          {sizes.map((size) => (
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source={sampleImages.avatar1}
                alt={`${size} thumbnail`}
                size={size as any}
                shape="Circular"
              />
              <TextStyle as="label" size="md" color="Neutral">
                {size}
                </TextStyle>
            </VerticalStack>
          ))}
        </InlineStack>
      </VerticalStack>
    );
  },
];
SizeVariants.parameters = {
  docs: {
    description: {
      story: "Different size options from ExtraSmall (32px) to ExtraLarge (80px).",
    },
  },
  controls: { disable: true },
};

// Shape Variants
export const ShapeVariants: any = Template.bind({});
ShapeVariants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Shape Variants</h3>
        <InlineStack gap={4} style={{ alignItems: "center" }}>
          {shapes.map((shape) => (
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source={sampleImages.avatar1}
                alt={`${shape} thumbnail`}
                size="Large"
                shape={shape as any}
              />
               <TextStyle as="label" size="md" color="Neutral">
                {shape}
              </TextStyle>
              </VerticalStack>
          ))}
        </InlineStack>
      </VerticalStack>
    );
  },
];
ShapeVariants.parameters = {
  docs: {
    description: {
      story: "Different shape options: Rounded (default), Circular (perfect for avatars), and Square.",
    },
  },
  controls: { disable: true },
};

// Visual Variants
export const VisualVariants: any = Template.bind({});
VisualVariants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Visual Variants</h3>
        <InlineStack gap={5} style={{ alignItems: "center" }}>
          {variants.map((variant) => (
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source={sampleImages.nature}
                alt={`${variant} variant`}
                size="Large"
                variant={variant as any}
              />
              <TextStyle as="label" size="md" color="Neutral">
                {variant}
              </TextStyle>
            </VerticalStack>
          ))}
        </InlineStack>
        
        <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#6b7280" }}>
          <p><strong>Default:</strong> Clean border and background</p>
          <p><strong>Detailed:</strong> Enhanced border and shadow</p>
          <p><strong>Minimal:</strong> No border or background</p>
          <p><strong>Card:</strong> Card-like appearance with shadow</p>
        </div>
      </VerticalStack>
    );
  },
];
VisualVariants.parameters = {
  docs: {
    description: {
      story: "Different visual styles for various use cases and design systems.",
    },
  },
  controls: { disable: true },
};

// Object Fit Examples
export const ObjectFitExamples: any = Template.bind({});
ObjectFitExamples.decorators = [
  () => {
    const wideImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop";
    
    return (
      <VerticalStack gap={4}>
        <h3>Object Fit Behaviors</h3>
        <InlineStack gap={4} style={{ alignItems: "flex-start" }}>
          {objectFits.map((fit) => (
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source={wideImage}
                alt={`${fit} example`}
                size="Large"
                objectFit={fit as any}
                variant="Detailed"
              />
              <TextStyle as="label" size="md" color="Neutral">
                {fit}
              </TextStyle>
            </VerticalStack>
          ))}
        </InlineStack>
        
        <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#6b7280" }}>
          <p><strong>Cover:</strong> Crops to fill container (recommended)</p>
          <p><strong>Contain:</strong> Scales to fit entirely within container</p>
          <p><strong>Fill:</strong> Stretches to fill container exactly</p>
          <p><strong>ScaleDown:</strong> Like contain but won't upscale</p>
          <p><strong>None:</strong> Uses original size</p>
        </div>
      </VerticalStack>
    );
  },
];
ObjectFitExamples.parameters = {
  docs: {
    description: {
      story: "Different object-fit behaviors demonstrating how images are sized within the thumbnail container.",
    },
  },
  controls: { disable: true },
};

// Fallback States
export const FallbackStates: any = Template.bind({});
FallbackStates.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Fallback and Error States</h3>
        
        <div>
          <h4>Custom Fallbacks</h4>
          <InlineStack gap={3}>
          <VerticalStack gap={2} align="center">
              <Thumbnail
                fallback="JD"
                alt="John Doe"
                size="Large"
                shape="Circular"
                variant="Detailed"
              />
              <TextStyle as="label" size="md" color="Neutral">
                Initials
              </TextStyle>
            </VerticalStack>
            
            <VerticalStack gap={2} align="center">
              <Thumbnail
                fallback={<Star size={24} />}
                alt="Star icon"
                size="Large"
                variant="Card"
              />
              <TextStyle as="label" size="md" color="Neutral">
                Custom Icon
              </TextStyle>
            </VerticalStack>
            
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source="invalid-url"
                alt="Broken image"
                size="Large"
                variant="Detailed"
              />
              <TextStyle as="label" size="md" color="Neutral">
                Error State
              </TextStyle>
            </VerticalStack>
          </InlineStack>
        </div>

        <div>
          <h4>File Type Detection</h4>
          <InlineStack gap={3}>
          <VerticalStack gap={2} align="center">
              <Thumbnail
                source="document.pdf"
                alt="PDF document"
                size="Medium"
                variant="Card"
              />
              <TextStyle as="label" size="md" color="Neutral">
                PDF
              </TextStyle>
            </VerticalStack>
            
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source="video.mp4"
                alt="Video file"
                size="Medium"
                variant="Card"
              />
              <TextStyle as="label" size="md" color="Neutral">
                Video
              </TextStyle>
            </VerticalStack>
            
            <VerticalStack gap={2} align="center">
              <Thumbnail
                source="audio.mp3"
                alt="Audio file"
                size="Medium"
                variant="Card"
              />
              <TextStyle as="label" size="md" color="Neutral">
                Audio
              </TextStyle>
            </VerticalStack>
          </InlineStack>
        </div>
      </VerticalStack>
    );
  },
];
FallbackStates.parameters = {
  docs: {
    description: {
      story: "Fallback content for when images fail to load, custom initials, icons, and automatic file type detection.",
    },
  },
  controls: { disable: true },
};

// Interactive Features
export const InteractiveFeatures: any = Template.bind({});
InteractiveFeatures.decorators = [
  () => {
    const [clicked, setClicked] = useState<string | null>(null);
    
    return (
      <VerticalStack gap={4}>
        <h3>Interactive Features</h3>
        
        <div>
          <h4>Clickable Thumbnails</h4>
          <InlineStack gap={3}>
            <Thumbnail
              source={sampleImages.food}
              alt="Clickable food image"
              size="Large"
              onClick={() => setClicked("food")}
              variant="Card"
            />
            
            <Thumbnail
              source={sampleImages.city}
              alt="Clickable city image"
              size="Large"
              onClick={() => setClicked("city")}
              variant="Card"
            />
            
            <Thumbnail
              source={sampleImages.nature}
              alt="Disabled thumbnail"
              size="Large"
              onClick={() => setClicked("disabled")}
              disabled
              variant="Card"
            />
          </InlineStack>
          
          {clicked && (
            <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f9ff", borderRadius: "0.5rem", border: "1px solid #0ea5e9" }}>
              <p style={{ margin: 0, color: "#0369a1" }}>
                Clicked: {clicked} thumbnail
              </p>
            </div>
          )}
        </div>

        <div>
          <h4>With Badges and Overlays</h4>
          <InlineStack gap={3}>
            <Thumbnail
              source={sampleImages.avatar1}
              alt="User with notification"
              size="Large"
              shape="Circular"
              badge={<Badge color="Primary">3</Badge>}
              onClick={() => alert("Profile clicked")}
            />
            
            <Thumbnail
              source={sampleImages.landscape}
              alt="Image with play overlay"
              size="Large"
              overlay={<Play size={24} />}
              onClick={() => alert("Play video")}
            />
            
            <Thumbnail
              source={sampleImages.city}
              alt="Image with favorite"
              size="Large"
              badge={<Heart size={16} fill="red" color="red" />}
              onClick={() => alert("Favorite clicked")}
            />
          </InlineStack>
        </div>
      </VerticalStack>
    );
  },
];
InteractiveFeatures.parameters = {
  docs: {
    description: {
      story: "Interactive thumbnails with click handlers, badges, overlays, and disabled states.",
    },
  },
  controls: { disable: true },
};

// Aspect Ratio Examples
export const AspectRatioExamples: any = Template.bind({});
AspectRatioExamples.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Aspect Ratio Support</h3>
        
        <InlineStack gap={4} style={{ alignItems: "flex-start" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "120px" }}>
              <Thumbnail
                source={sampleImages.square}
                alt="Square aspect ratio"
                aspectRatio="1:1"
                variant="Card"
              />
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
              1:1 Square
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "120px" }}>
              <Thumbnail
                source={sampleImages.landscape}
                alt="4:3 aspect ratio"
                aspectRatio="4:3"
                variant="Card"
              />
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
              4:3 Standard
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "120px" }}>
              <Thumbnail
                source={sampleImages.landscape}
                alt="16:9 aspect ratio"
                aspectRatio="16:9"
                variant="Card"
              />
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
              16:9 Widescreen
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "120px" }}>
              <Thumbnail
                source={sampleImages.portrait}
                alt="3:2 aspect ratio"
                aspectRatio="3:2"
                variant="Card"
              />
            </div>
            <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
              3:2 Photo
            </div>
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];
AspectRatioExamples.parameters = {
  docs: {
    description: {
      story: "Responsive aspect ratio support for consistent layouts across different content types.",
    },
  },
  controls: { disable: true },
};

// Real-world Examples
export const RealWorldExamples: any = Template.bind({});
RealWorldExamples.decorators = [
  () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    return (
      <VerticalStack gap={5}>
        <div>
          <h3>👥 User Profiles</h3>
          <Card style={{ padding: "2rem" }}>
            <InlineStack gap={4}>
              <Thumbnail
                source={sampleImages.avatar1}
                alt="John Doe"
                size="ExtraLarge"
                shape="Circular"
                variant="Detailed"
                badge={<div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />}
              />
              
              <VerticalStack gap={2}>
                <div>
                  <h4 style={{ margin: 0, fontSize: "1.25rem" }}>John Doe</h4>
                  <p style={{ margin: 0, color: "#6b7280" }}>Senior Developer</p>
                </div>
                
                <InlineStack gap={2}>
                  <Button color="Primary">Message</Button>
                  <Button color="Neutral">View Profile</Button>
                </InlineStack>
              </VerticalStack>
            </InlineStack>
          </Card>
        </div>

        <div>
          <h3>📸 Image Gallery</h3>
          <Card style={{ padding: "2rem" }}>
            <VerticalStack gap={3}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "1rem" }}>
                {[sampleImages.landscape, sampleImages.nature, sampleImages.city, sampleImages.food].map((image, index) => (
                  <Thumbnail
                    key={index}
                    source={image}
                    alt={`Gallery image ${index + 1}`}
                    aspectRatio="1:1"
                    variant="Card"
                    onClick={() => setSelectedImage(image)}
                    overlay={<Eye size={20} />}
                  />
                ))}
              </div>
              
              {selectedImage && (
                <div style={{ marginTop: "1rem", padding: "1rem", background: "#f8fafc", borderRadius: "0.5rem", border: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, color: "#374151" }}>
                    Selected image for preview
                  </p>
                  <Button 
                    color="Neutral" 
                    onClick={() => setSelectedImage(null)}
                  
                  >
                    Close Preview
                  </Button>
                </div>
              )}
            </VerticalStack>
          </Card>
        </div>

        <div>
          <h3>📁 File Manager</h3>
          <Card style={{ padding: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "1.5rem" }}>
              <div style={{ textAlign: "center" }}>
                <Thumbnail
                  source="presentation.pdf"
                  alt="Presentation PDF"
                  size="Large"
                  variant="Card"
                  onClick={() => alert("Open PDF")}
                />
                <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
                  Presentation.pdf
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  2.4 MB
                </div>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <Thumbnail
                  source="demo-video.mp4"
                  alt="Demo video"
                  size="Large"
                  variant="Card"
                  badge={<Play size={14} />}
                  onClick={() => alert("Play video")}
                />
                <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
                  Demo.mp4
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  15.7 MB
                </div>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <Thumbnail
                  source={sampleImages.landscape}
                  alt="Photo thumbnail"
                  size="Large"
                  variant="Card"
                  badge={<Star size={14} fill="#f59e0b" color="#f59e0b" />}
                  onClick={() => alert("View photo")}
                />
                <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", fontWeight: "500" }}>
                  Vacation.jpg
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  3.2 MB
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h3>🏆 Achievement System</h3>
          <Card style={{ padding: "2rem" }}>
            <InlineStack gap={4}>
              <Thumbnail
                fallback={<Award size={32} />}
                alt="First Login Achievement"
                size="Large"
                shape="Circular"
                variant="Card"
                badge={<Check size={16} color="white" />}
                style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
              />
              
              <VerticalStack gap={1}>
                <h4 style={{ margin: 0, fontSize: "1.125rem" }}>First Login</h4>
                <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>
                  Welcome to the platform! You've earned your first achievement.
                </p>
                <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.5rem" }}>
                  <Calendar size={14} style={{ verticalAlign: "middle", marginRight: "0.25rem" }} />
                  Earned today
                </div>
              </VerticalStack>
            </InlineStack>
          </Card>
        </div>
      </VerticalStack>
    );
  },
];
RealWorldExamples.parameters = {
  docs: {
    description: {
      story: "Real-world usage examples including user profiles, image galleries, file managers, and achievement systems.",
    },
  },
  controls: { disable: true },
};