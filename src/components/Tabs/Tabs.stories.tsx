import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import Card from "../Card/Card";
import Button from "../Button/Button";
import VerticalStack from "../VerticalStack/VerticalStack";
import InlineStack from "../InlineStack/InlineStack";
import Badge from "../Badge/Badge";
import { 
  User, 
  Settings, 
  Bell, 
  Mail, 
  Calendar,
  FileText,
  BarChart,
  Shield,
  Globe,
  Star,
  Heart,
  Lock,
  CreditCard,
  Home
} from "react-feather";

const variants = ["default", "pills", "underlined"];
const orientations = ["horizontal", "vertical"];

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A modern, accessible tabs component inspired by shadcn/ui design. Built with composition pattern for maximum flexibility and clean API.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Visual style variant",
      control: {
        type: "radio",
        options: variants,
      },
    },

    orientation: {
      description: "Orientation of the tabs",
      control: {
        type: "radio",
        options: orientations,
      },
    },
    fullWidth: {
      description: "Whether tabs should stretch to full width",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Whether tabs are disabled",
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    variant: "default",
    orientation: "horizontal",
    fullWidth: false,
    disabled: false,
  }
};

const Template = (args: any) => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px" }}>
      <Tabs defaultValue="account" {...args}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card style={{ padding: "2rem" }}>
            <h3 style={{ margin: "0 0 1rem 0" }}>Account Information</h3>
            <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
              Make changes to your account here. Click save when you're done.
            </p>
            <VerticalStack gap={4}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Name</label>
                <input 
                  type="text" 
                  defaultValue="Pedro Duarte" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid #d1d5db", 
                    borderRadius: "0.375rem",
                    fontSize: "1rem"
                  }} 
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Username</label>
                <input 
                  type="text" 
                  defaultValue="@peduarte" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid #d1d5db", 
                    borderRadius: "0.375rem",
                    fontSize: "1rem"
                  }} 
                />
              </div>
              <div style={{ alignSelf: "flex-start" }}>
                <Button color="Primary">
                  Save changes
                </Button>
              </div>
            </VerticalStack>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card style={{ padding: "2rem" }}>
            <h3 style={{ margin: "0 0 1rem 0" }}>Password</h3>
            <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
              Change your password here. After saving, you'll be logged out.
            </p>
            <VerticalStack gap={4}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Current password</label>
                <input 
                  type="password" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid #d1d5db", 
                    borderRadius: "0.375rem",
                    fontSize: "1rem"
                  }} 
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>New password</label>
                <input 
                  type="password" 
                  style={{ 
                    width: "100%", 
                    padding: "0.75rem", 
                    border: "1px solid #d1d5db", 
                    borderRadius: "0.375rem",
                    fontSize: "1rem"
                  }} 
                />
              </div>
              <div style={{ alignSelf: "flex-start" }}>
                <Button color="Primary">
                  Save password
                </Button>
              </div>
            </VerticalStack>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card style={{ padding: "2rem" }}>
            <h3 style={{ margin: "0 0 1rem 0" }}>Settings</h3>
            <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
              Configure your application settings and preferences.
            </p>
            <VerticalStack gap={4}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                <div>
                  <h4 style={{ margin: "0 0 0.25rem 0" }}>Email Notifications</h4>
                  <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Receive email updates</p>
                </div>
                <input type="checkbox" defaultChecked style={{ transform: "scale(1.2)" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                <div>
                  <h4 style={{ margin: "0 0 0.25rem 0" }}>Push Notifications</h4>
                  <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Get push notifications</p>
                </div>
                <input type="checkbox" style={{ transform: "scale(1.2)" }} />
              </div>
            </VerticalStack>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const Primary: any = Template.bind({});
Primary.args = {
  variant: "default",
  orientation: "horizontal",
};
Primary.parameters = {
  docs: {
    description: {
      story: "The default tabs component with account and password forms, inspired by shadcn/ui design. Clean, modern, and accessible.",
    },
  },
};

// Different Variants
export const VariantShowcase: any = Template.bind({});
VariantShowcase.decorators = [
  () => {
    return (
      <VerticalStack gap={5}>
        <div>
          <h3>Default Variant</h3>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Clean underline style with minimal design</p>
          <Tabs defaultValue="home" variant="default">
            <TabsList>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Home Content</h4>
                <p>Welcome to your dashboard. Here you can see an overview of your account.</p>
              </div>
            </TabsContent>
            <TabsContent value="profile">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Profile Content</h4>
                <p>Manage your profile information and settings.</p>
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Settings Content</h4>
                <p>Configure your application preferences.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3>Pills Variant</h3>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Contained button style with rounded corners</p>
          <Tabs defaultValue="home" variant="pills">
            <TabsList>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Home Content</h4>
                <p>This demonstrates the pills variant with contained styling.</p>
              </div>
            </TabsContent>
            <TabsContent value="profile">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Profile Content</h4>
                <p>Profile management with pills styling.</p>
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Settings Content</h4>
                <p>Settings panel with modern design.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3>Underlined Variant</h3>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Minimal design with subtle underlines</p>
          <Tabs defaultValue="home" variant="underlined">
            <TabsList>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Home Content</h4>
                <p>Minimal underlined style for clean interfaces.</p>
              </div>
            </TabsContent>
            <TabsContent value="profile">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Profile Content</h4>
                <p>Clean profile section with underlined tabs.</p>
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Settings Content</h4>
                <p>Settings with minimal visual design.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </VerticalStack>
    );
  },
];
VariantShowcase.parameters = {
  docs: {
    description: {
      story: "Comparison of all three visual variants: default (underline), pills (contained), and underlined (minimal).",
    },
  },
  controls: { disable: true },
};



// Vertical Orientation
export const VerticalOrientation: any = Template.bind({});
VerticalOrientation.decorators = [
  () => {
    return (
      <div style={{ height: "400px" }}>
        <Tabs defaultValue="account" orientation="vertical">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card style={{ padding: "2rem", height: "100%" }}>
              <h3 style={{ margin: "0 0 1rem 0" }}>Account Settings</h3>
              <p>Manage your account information and preferences.</p>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Display Name</label>
                  <input 
                    type="text" 
                    defaultValue="John Doe" 
                    style={{ 
                      width: "100%", 
                      padding: "0.75rem", 
                      border: "1px solid #d1d5db", 
                      borderRadius: "0.375rem" 
                    }} 
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email</label>
                  <input 
                    type="email" 
                    defaultValue="john@example.com" 
                    style={{ 
                      width: "100%", 
                      padding: "0.75rem", 
                      border: "1px solid #d1d5db", 
                      borderRadius: "0.375rem" 
                    }} 
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card style={{ padding: "2rem", height: "100%" }}>
              <h3 style={{ margin: "0 0 1rem 0" }}>Change Password</h3>
              <p>Update your password to keep your account secure.</p>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Current Password</label>
                  <input 
                    type="password" 
                    style={{ 
                      width: "100%", 
                      padding: "0.75rem", 
                      border: "1px solid #d1d5db", 
                      borderRadius: "0.375rem" 
                    }} 
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>New Password</label>
                  <input 
                    type="password" 
                    style={{ 
                      width: "100%", 
                      padding: "0.75rem", 
                      border: "1px solid #d1d5db", 
                      borderRadius: "0.375rem" 
                    }} 
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card style={{ padding: "2rem", height: "100%" }}>
              <h3 style={{ margin: "0 0 1rem 0" }}>Security Settings</h3>
              <p>Configure security options for your account.</p>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Two-Factor Authentication</h4>
                    <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Add extra security to your account</p>
                  </div>
                  <Button color="Primary">Enable</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card style={{ padding: "2rem", height: "100%" }}>
              <h3 style={{ margin: "0 0 1rem 0" }}>Notification Preferences</h3>
              <p>Choose how you want to be notified.</p>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Email Notifications</h4>
                    <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Receive updates via email</p>
                  </div>
                  <input type="checkbox" defaultChecked style={{ transform: "scale(1.2)" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0" }}>
                  <div>
                    <h4 style={{ margin: "0 0 0.25rem 0" }}>Push Notifications</h4>
                    <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Get push notifications</p>
                  </div>
                  <input type="checkbox" style={{ transform: "scale(1.2)" }} />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
];
VerticalOrientation.parameters = {
  docs: {
    description: {
      story: "Vertical orientation for sidebar-style navigation. Perfect for settings pages and admin panels.",
    },
  },
  controls: { disable: true },
};

// Advanced Features
export const AdvancedFeatures: any = Template.bind({});
AdvancedFeatures.decorators = [
  () => {
    return (
      <VerticalStack gap={5}>
        <div>
          <h3>Full Width Tabs</h3>
          <Tabs defaultValue="overview" fullWidth variant="pills">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Overview Dashboard</h4>
                <p>Full width tabs stretch across the entire container.</p>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Analytics</h4>
                <p>View detailed analytics and metrics.</p>
              </div>
            </TabsContent>
            <TabsContent value="reports">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Reports</h4>
                <p>Generate and export reports.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3>Disabled State</h3>
          <Tabs defaultValue="available" disabled>
            <TabsList>
              <TabsTrigger value="available">Available</TabsTrigger>
              <TabsTrigger value="disabled">Disabled</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
            <TabsContent value="available">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <p>All tabs are disabled for demonstration.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h3>Individual Disabled Tabs</h3>
          <Tabs defaultValue="public">
            <TabsList>
              <TabsTrigger value="public">Public</TabsTrigger>
              <TabsTrigger value="private" disabled>Private</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="public">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Public Content</h4>
                <p>This tab is accessible. The Private tab is disabled.</p>
              </div>
            </TabsContent>
            <TabsContent value="archived">
              <div style={{ padding: "2rem", background: "#f9fafb", borderRadius: "0.5rem" }}>
                <h4>Archived Content</h4>
                <p>This content is archived but still accessible.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </VerticalStack>
    );
  },
];
AdvancedFeatures.parameters = {
  docs: {
    description: {
      story: "Advanced features including full width layout, disabled states, and individual tab disabling.",
    },
  },
  controls: { disable: true },
};

// Real-world Examples
export const RealWorldExamples: any = Template.bind({});
RealWorldExamples.decorators = [
  () => {
    return (
      <VerticalStack gap={5}>
        <div>
          <h3>E-commerce Dashboard</h3>
          <Card>
            <Tabs defaultValue="overview" variant="default">
              <TabsList>
                <TabsTrigger value="overview">
                  <Home size={16} style={{ marginRight: "0.5rem" }} />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="orders">
                  <FileText size={16} style={{ marginRight: "0.5rem" }} />
                  Orders
                  <span style={{ marginLeft: "0.5rem" }}>
                    <Badge color="Primary">12</Badge>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="analytics">
                  <BarChart size={16} style={{ marginRight: "0.5rem" }} />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="customers">
                  <User size={16} style={{ marginRight: "0.5rem" }} />
                  Customers
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div style={{ padding: "2rem" }}>
                  <h3>Sales Overview</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
                    <div style={{ padding: "1.5rem", background: "#f0fdf4", borderRadius: "0.5rem", border: "1px solid #bbf7d0" }}>
                      <h4 style={{ margin: "0 0 0.5rem 0", color: "#166534" }}>Total Revenue</h4>
                      <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a", margin: 0 }}>$45,231.89</p>
                      <p style={{ color: "#16a34a", fontSize: "0.875rem", margin: "0.5rem 0 0" }}>+20.1% from last month</p>
                    </div>
                    <div style={{ padding: "1.5rem", background: "#fef3c7", borderRadius: "0.5rem", border: "1px solid #fcd34d" }}>
                      <h4 style={{ margin: "0 0 0.5rem 0", color: "#92400e" }}>Sales</h4>
                      <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#d97706", margin: 0 }}>+12,234</p>
                      <p style={{ color: "#d97706", fontSize: "0.875rem", margin: "0.5rem 0 0" }}>+19% from last month</p>
                    </div>
                    <div style={{ padding: "1.5rem", background: "#dbeafe", borderRadius: "0.5rem", border: "1px solid #93c5fd" }}>
                      <h4 style={{ margin: "0 0 0.5rem 0", color: "#1e40af" }}>Active Users</h4>
                      <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb", margin: 0 }}>+573</p>
                      <p style={{ color: "#2563eb", fontSize: "0.875rem", margin: "0.5rem 0 0" }}>+201 since last hour</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="orders">
                <div style={{ padding: "2rem" }}>
                  <h3>Recent Orders</h3>
                  <div style={{ marginTop: "1rem", border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
                          <th style={{ padding: "1rem", textAlign: "left" }}>Order</th>
                          <th style={{ padding: "1rem", textAlign: "left" }}>Customer</th>
                          <th style={{ padding: "1rem", textAlign: "left" }}>Status</th>
                          <th style={{ padding: "1rem", textAlign: "left" }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                          <td style={{ padding: "1rem" }}>#3210</td>
                          <td style={{ padding: "1rem" }}>John Doe</td>
                          <td style={{ padding: "1rem" }}>
                            <Badge color="Positive">Completed</Badge>
                          </td>
                          <td style={{ padding: "1rem" }}>$250.00</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
                          <td style={{ padding: "1rem" }}>#3209</td>
                          <td style={{ padding: "1rem" }}>Jane Smith</td>
                          <td style={{ padding: "1rem" }}>
                            <Badge color="Notice">Processing</Badge>
                          </td>
                          <td style={{ padding: "1rem" }}>$150.00</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "1rem" }}>#3208</td>
                          <td style={{ padding: "1rem" }}>Bob Johnson</td>
                          <td style={{ padding: "1rem" }}>
                            <Badge color="Negative">Cancelled</Badge>
                          </td>
                          <td style={{ padding: "1rem" }}>$75.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div style={{ padding: "2rem" }}>
                  <h3>Analytics</h3>
                  <div style={{ marginTop: "1rem", height: "200px", background: "#f3f4f6", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                      <BarChart size={48} color="#6b7280" />
                      <p style={{ color: "#6b7280", margin: "1rem 0 0" }}>Analytics charts would be displayed here</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="customers">
                <div style={{ padding: "2rem" }}>
                  <h3>Customer Management</h3>
                  <p>Manage your customer base and relationships.</p>
                  <InlineStack gap={2} style={{ marginTop: "1rem" }}>
                    <Button color="Primary">Add Customer</Button>
                    <Button color="Neutral">Export List</Button>
                  </InlineStack>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div>
          <h3>User Profile Settings</h3>
          <Card>
            <Tabs defaultValue="profile" variant="pills">
              <TabsList>
                <TabsTrigger value="profile">
                  <User size={16} style={{ marginRight: "0.5rem" }} />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Shield size={16} style={{ marginRight: "0.5rem" }} />
                  Security
                </TabsTrigger>
                <TabsTrigger value="billing">
                  <CreditCard size={16} style={{ marginRight: "0.5rem" }} />
                  Billing
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell size={16} style={{ marginRight: "0.5rem" }} />
                  Notifications
                  <span style={{ marginLeft: "0.5rem" }}>
                    <Badge color="Notice">3</Badge>
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <div style={{ padding: "2rem" }}>
                  <h3>Profile Information</h3>
                  <VerticalStack gap={4}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>First Name</label>
                        <input type="text" defaultValue="John" style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Last Name</label>
                        <input type="text" defaultValue="Doe" style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email</label>
                      <input type="email" defaultValue="john.doe@example.com" style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Bio</label>
                      <textarea 
                        rows={3} 
                        defaultValue="Software developer passionate about creating amazing user experiences."
                        style={{ width: "100%", padding: "0.75rem", border: "1px solid #d1d5db", borderRadius: "0.375rem", resize: "vertical" }} 
                      />
                    </div>
                    <InlineStack gap={2}>
                      <Button color="Primary">Save Changes</Button>
                      <Button color="Neutral">Cancel</Button>
                    </InlineStack>
                  </VerticalStack>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div style={{ padding: "2rem" }}>
                  <h3>Security Settings</h3>
                  <VerticalStack gap={4}>
                    <div style={{ padding: "1.5rem", border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
                      <h4 style={{ margin: "0 0 0.5rem 0" }}>Change Password</h4>
                      <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Ensure your account is secure with a strong password</p>
                      <Button color="Primary">Change Password</Button>
                    </div>
                    <div style={{ padding: "1.5rem", border: "1px solid #e5e7eb", borderRadius: "0.5rem" }}>
                      <h4 style={{ margin: "0 0 0.5rem 0" }}>Two-Factor Authentication</h4>
                      <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Add an extra layer of security to your account</p>
                      <Button color="Primary">Enable 2FA</Button>
                    </div>
                  </VerticalStack>
                </div>
              </TabsContent>
              <TabsContent value="billing">
                <div style={{ padding: "2rem" }}>
                  <h3>Billing Information</h3>
                  <p>Manage your subscription and billing details.</p>
                  <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "0.5rem" }}>
                    <h4 style={{ margin: "0 0 0.5rem 0", color: "#166534" }}>Current Plan: Pro</h4>
                    <p style={{ color: "#16a34a", margin: "0 0 1rem 0" }}>$29/month • Next billing: June 1, 2024</p>
                    <InlineStack gap={2}>
                      <Button color="Primary">Upgrade</Button>
                      <Button color="Neutral">Manage</Button>
                    </InlineStack>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div style={{ padding: "2rem" }}>
                  <h3>Notification Preferences</h3>
                  <VerticalStack gap={4}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                      <div>
                        <h4 style={{ margin: "0 0 0.25rem 0" }}>Email Notifications</h4>
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Receive email updates about your account</p>
                      </div>
                      <input type="checkbox" defaultChecked style={{ transform: "scale(1.2)" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", borderBottom: "1px solid #f3f4f6" }}>
                      <div>
                        <h4 style={{ margin: "0 0 0.25rem 0" }}>Push Notifications</h4>
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Get push notifications on your devices</p>
                      </div>
                      <input type="checkbox" style={{ transform: "scale(1.2)" }} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0" }}>
                      <div>
                        <h4 style={{ margin: "0 0 0.25rem 0" }}>Marketing Communications</h4>
                        <p style={{ margin: 0, color: "#6b7280", fontSize: "0.875rem" }}>Receive updates about new features and promotions</p>
                      </div>
                      <input type="checkbox" defaultChecked style={{ transform: "scale(1.2)" }} />
                    </div>
                  </VerticalStack>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </VerticalStack>
    );
  },
];
RealWorldExamples.parameters = {
  docs: {
    description: {
      story: "Real-world examples including e-commerce dashboard and user profile settings with icons, badges, and rich content.",
    },
  },
  controls: { disable: true },
};
