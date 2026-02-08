import React from "react";
import FlexLayout, { FlexLayoutItem } from "./FlexLayout";

export default {
    title: "Components/FlexLayout",
    component: FlexLayout,
    tags: ["autodocs"],
    argTypes: {
        gap: {
            control: { type: 'select' },
            options: [0, 1, 2, 3, 4, 5],
            description: 'Spacing between flex items (0-5)',
        },
        wrap: {
            control: { type: 'boolean' },
            description: 'Whether items should wrap to the next line',
        },
        noGutters: {
            control: { type: 'boolean' },
            description: 'Remove gutters (padding) from flex items',
        },
        direction: {
            control: { type: 'select' },
            options: ['row', 'row-reverse', 'column', 'column-reverse'],
            description: 'Direction of flex items',
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: 'Whether the container should be full width',
        },
        centered: {
            control: { type: 'boolean' },
            description: 'Whether the container should be centered',
        },
        maxWidth: {
            control: { type: 'text' },
            description: 'Maximum width of the container',
        },
        justifyContent: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'around', 'between', 'evenly'],
            description: 'Horizontal alignment (shorthand)',
        },
        alignItems: {
            control: { type: 'select' },
            options: ['start', 'center', 'end', 'baseline', 'stretch'],
            description: 'Vertical alignment (shorthand)',
        },
    },
};

// Demo item component for stories
const DemoItem = ({ children, color = '#e3f2fd', height = '60px' }: { children: React.ReactNode; color?: string; height?: string }) => (
    <div style={{
        padding: '1rem',
        backgroundColor: color,
        border: '1px solid #ccc',
        borderRadius: '4px',
        textAlign: 'center',
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        width: '100%'
    }}>
        {children}
    </div>
);

// Basic template
export const Basic = {
    args: {
        gap: 3,
        wrap: true,
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "12", md: "6", lg: "4" }}>
                    <DemoItem>Item 1</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "12", md: "6", lg: "4" }}>
                    <DemoItem>Item 2</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "12", md: "12", lg: "4" }}>
                    <DemoItem>Item 3</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Centered alignment
export const Centered = {
    args: {
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "6", md: "4" }}>
                    <DemoItem>Centered</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6", md: "4" }}>
                    <DemoItem>Items</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
                    <DemoItem>Here</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Space between
export const SpaceBetween = {
    args: {
        gap: 3,
        justifyContent: 'between',
        children: (
            <>
                
                    <DemoItem>Left</DemoItem>
                
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>Center</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>Right</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// No wrap
export const NoWrap = {
    args: {
        gap: 3,
        wrap: false,
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "6" }}>
                    <DemoItem>Item 1</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6" }}>
                    <DemoItem>Item 2</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6" }}>
                    <DemoItem>Item 3</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6" }}>
                    <DemoItem>Item 4</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Column direction
export const ColumnDirection = {
    args: {
        gap: 3,
        direction: 'column',
        style: { maxWidth: '300px' },
        children: (
            <>
                <FlexLayoutItem>
                    <DemoItem>Column 1</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem>
                    <DemoItem>Column 2</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem>
                    <DemoItem>Column 3</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Row reverse
export const RowReverse = {
    args: {
        gap: 3,
        direction: 'row-reverse',
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>First</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>Second</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>Third</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Centered container
export const CenteredContainer = {
    args: {
        gap: 3,
        centered: true,
        maxWidth: 600,
        style: { backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' },
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "12", md: "6" }}>
                    <DemoItem>Centered</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "12", md: "6" }}>
                    <DemoItem>Container</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Full width
export const FullWidth = {
    args: {
        gap: 3,
        fullWidth: true,
        style: { backgroundColor: '#e8f5e8', padding: '1rem' },
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "6", md: "3" }}>
                    <DemoItem>Full</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6", md: "3" }}>
                    <DemoItem>Width</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6", md: "3" }}>
                    <DemoItem>Container</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "6", md: "3" }}>
                    <DemoItem>Layout</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// No gutters
export const NoGutters = {
    args: {
        gap: 0,
        noGutters: true,
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>No</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>Gutters</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: "4" }}>
                    <DemoItem>Here</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Column ordering
export const ColumnOrdering = {
    args: {
        gap: 3,
        children: (
            <>
                <FlexLayoutItem 
                    cols={{ sm: "6", md: "6" }} 
                    order={{ sm: "2", md: "1" }}
                >
                    <DemoItem color="#e3f2fd">Content Area (Order: 2 → 1)</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem 
                    cols={{ sm: "6", md: "6" }} 
                    order={{ sm: "1", md: "2" }}
                >
                    <DemoItem color="#f3e5f5">Sidebar (Order: 1 → 2)</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Auto columns
export const AutoColumns = {
    args: {
        gap: 3,
        children: (
            <>
                <FlexLayoutItem>
                    <DemoItem color="#e3f2fd">Auto Column 1</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem>
                    <DemoItem color="#f3e5f5">Auto Column 2</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem>
                    <DemoItem color="#e8f5e8">Auto Column 3</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Mixed fixed and auto columns
export const MixedColumns = {
    args: {
        gap: 3,
        children: (
            <>
                <FlexLayoutItem cols={{ sm: "6", md: "4" }}>
                    <DemoItem color="#e3f2fd">Fixed Width</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem>
                    <DemoItem color="#f3e5f5">Auto Width 1</DemoItem>
                </FlexLayoutItem>
                <FlexLayoutItem>
                    <DemoItem color="#e8f5e8">Auto Width 2</DemoItem>
                </FlexLayoutItem>
            </>
        ),
    },
};

// Card layout
// export const CardLayout = {
//     args: {
//         gap: 4,
//         justifyContent: 'evenly',
//         children: (
//             <>
//                 <FlexLayoutItem cols={{ sm: "12", md: "6", lg: "4" }}>
//                     <DemoItem color="#e3f2fd" height="120px">
//                         <div>
//                             <h4>Card 1</h4>
//                             <p>Responsive card layout</p>
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "6", lg: "4" }}>
//                     <DemoItem color="#f3e5f5" height="120px">
//                         <div>
//                             <h4>Card 2</h4>
//                             <p>With FlexLayout integration</p>
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "12", lg: "4" }}>
//                     <DemoItem color="#e8f5e8" height="120px">
//                         <div>
//                             <h4>Card 3</h4>
//                             <p>Full width on tablet</p>
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//             </>
//         ),
//     },
// };

// Navigation layout 
// export const NavigationLayout = {
//     args: {
//         gap: 3,
//         justifyContent: 'between',
//         alignItems: 'center',
//         style: { backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' },
//         children: (
//             <>
//                 <FlexLayoutItem cols={{ sm: "6", md: "4" }}>
//                     <DemoItem color="#e3f2fd">Logo</DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "6", md: "8" }}>
//                     <FlexLayout gap={2} justifyContent="end">
//                         <DemoItem color="#f3e5f5">Home</DemoItem>
//                         <DemoItem color="#f3e5f5">About</DemoItem>
//                         <DemoItem color="#f3e5f5">Contact</DemoItem>
//                     </FlexLayout>
//                 </FlexLayoutItem>
//             </>
//         ),
//     },
// };

// Form layout
// export const FormLayout = {
//     args: {
//         gap: 3,
//         children: (
//             <>
//                 <FlexLayoutItem cols={{ sm: "12", md: "6" }}>
//                     <DemoItem color="#e3f2fd" height="80px">
//                         <div>
//                             <label>First Name</label>
//                             <input type="text" placeholder="Enter first name" style={{ width: '100%', padding: '8px', marginTop: '8px' }} />
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "6" }}>
//                     <DemoItem color="#f3e5f5" height="80px">
//                         <div>
//                             <label>Last Name</label>
//                             <input type="text" placeholder="Enter last name" style={{ width: '100%', padding: '8px', marginTop: '8px' }} />
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12" }}>
//                     <DemoItem color="#e8f5e8" height="80px">
//                         <div>
//                             <label>Email Address</label>
//                             <input type="email" placeholder="Enter email" style={{ width: '100%', padding: '8px', marginTop: '8px' }} />
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//             </>
//         ),
//     },
// };

// Pricing table
// export const PricingTable = {
//     args: {
//         gap: 4,
//         justifyContent: 'center',
//         children: (
//             <>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem color="#e3f2fd" height="150px">
//                         <div>
//                             <h3>Basic</h3>
//                             <h2>$9.99</h2>
//                             <p>Essential features</p>
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem color="#f3e5f5" height="150px">
//                         <div>
//                             <h3>Pro</h3>
//                             <h2>$19.99</h2>
//                             <p>Advanced features</p>
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem color="#e8f5e8" height="150px">
//                         <div>
//                             <h3>Enterprise</h3>
//                             <h2>$49.99</h2>
//                             <p>Full features</p>
//                         </div>
//                     </DemoItem>
//                 </FlexLayoutItem>
//             </>
//         ),
//     },
// };

// Responsive alignment
// export const ResponsiveAlignment = {
//     args: {
//         gap: 3,
//         justify: {
//             sm: 'center',
//             md: 'between',
//             lg: 'evenly'
//         },
//         align: {
//             sm: 'start',
//             md: 'center',
//             lg: 'end'
//         },
//         children: (
//             <>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem>Responsive</DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem>Alignment</DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem>Test</DemoItem>
//                 </FlexLayoutItem>
//             </>
//         ),
//     },
// };

// Custom styling
// export const CustomStyling = {
//     args: {
//         gap: 4,
//         justifyContent: 'evenly',
//         alignItems: 'center',
//         centered: true,
//         maxWidth: 800,
//         className: 'custom-story',
//         style: {
//             backgroundColor: '#fff3cd',
//             padding: '1.5rem',
//             borderRadius: '12px',
//             border: '2px solid #ffc107'
//         },
//         children: (
//             <>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem color="#fff3cd">Custom</DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem color="#fff3cd">Styled</DemoItem>
//                 </FlexLayoutItem>
//                 <FlexLayoutItem cols={{ sm: "12", md: "4" }}>
//                     <DemoItem color="#fff3cd">Container</DemoItem>
//                 </FlexLayoutItem>
//             </>
//         ),
//     },
// }; 