import React from "react";
import {
    Copy,
    FullScreenExit,
    MicOff,
    Minus,
    MoreHorizontal,
    Plus,
    File,
    FileText,
    MunusSquire,
    Eye,
    AlertTrianle,
    EyeOff,
    Filter,
    Menu,
    AlertOctagon,
    AlertCircle,
    Bookmark,
    MinusCircle,
    PlusSquire,
    FullScreenEnter,
    Maximize,
    Bell,
    Move,
    Crop,
    BellOff,
    PlusCircle,
    PlayCircle,
    Check,
    RotageCW,
    CheckSquire,
    Play,
    Search,
    Repeat,
    DownloadCloude,
    Setting,
    Download,
    Globe,
    Login,
    QrCode,
    RotateCcw,
    Close,
    Refresh,
    ExternalLink,
    CheckCircle,
    Clipboard,
    Logout,
    HelpCircle,
    ShoppingCart,
    Save,
    Info,
    Home,
    Share,
    Heart,
    Trash,
    Export,
    Hash,
    Edit,
    ThumbsDown,
    ThumbsUp,
    Tag,
    Unlock,
    Traget,
    TrendingUp,
    TrendingDown,
    UploadCloud,
    Pause,
    Slider,
    Slash,
    Star,
    StopCircle,
    PauseCircle,
    Link,
    List,
    Zap,
    Shuffle,
    Lock,
    AlignJustify,
    AlertOnly,
    ZoomIn,
    ZoomOut,
    XCircle,
    XSquire,
    Upload,
    AlignRight,
    AlignLeft,
    AlignCenter,
    Anchor,
    Attachment,
    Bold,
    Delete,
    EditInline,
    EditCompose,
    FilePlus,
    // Zap,
    // ZapOff,
    // ZoomIn,
    // ZoomOut,
} from "./Icons";

export const IconsData = ({ ...rest }) => {
    const Icons = [
        // {
        //     icon: <ZoomIn {...rest} />,
        //     name: "ZoomIn",
        //     data: ["zoomin", "lens", "in"],
        // },
        // {
        //     icon: <ZoomOut {...rest} />,
        //     name: "ZoomOut",
        //     data: ["zoomout", "out"],
        // },
        // {
        //     icon: <ZapOff {...rest} />,
        //     name: "ZapOff",
        //     data: ["zapoff"],
        // },
        // {
        //     icon: <Zap {...rest} />,
        //     name: "Zap",
        //     data: ["zap"],
        // },
        {
            icon: <Copy {...rest} />,
            name: "Copy",
            data: ["copy"],
        },
        {
            icon: <Plus {...rest} />,
            name: "Plus",
            data: ["plus"],
        },
        {
            icon: <FullScreenExit {...rest} />,
            name: "FullScreenExit",
            data: ["full scree"],
        },
        {
            icon: <MicOff {...rest} />,
            name: "MicOff",
            data: ["mic off"],
        },
        {
            icon: <MoreHorizontal {...rest} />,
            name: "MoreHorizontal",
            data: ["More Horizontal"],
        },
        {
            icon: <Minus {...rest} />,
            name: "Minus",
            data: ["minus"],
        },
        {
            icon: <File {...rest}/>,
            name: "File",
            data: ["file"],
        },
        {
            icon: <FileText {...rest} />,
            name: "FileText",
            data: ["plus"],
        },
        {
            icon: <MunusSquire {...rest} />,
            name: "MunusSquire",
            data: ["plus"],
        },
        {
            icon: <Eye {...rest} />,
            name: "Eye",
            data: ["plus"],
        },
        {
            icon: <AlertTrianle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <EyeOff {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Filter {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Menu {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlertOctagon {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlertCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Bookmark {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <MinusCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <PlusSquire {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <FullScreenEnter {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Maximize {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Bell {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Move {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Crop {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <BellOff {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <PlusCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <CheckSquire {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <RotageCW {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Check {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Play {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <PlayCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Repeat {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <DownloadCloude {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Setting {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Download {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Globe {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Login {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Search {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <QrCode {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <RotateCcw {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Clipboard {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        }, {
            icon: <Close {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Refresh {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <ExternalLink {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <CheckCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Edit {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Hash {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Export {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Trash {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Heart {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Share {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <CheckCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <CheckCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <CheckCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Home {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Info {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Save {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <ShoppingCart {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <HelpCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Logout {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Shuffle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Zap {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <List {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Link {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <PauseCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <StopCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Star {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Lock {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Slash {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Slider {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Pause {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <UploadCloud {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <TrendingDown {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <TrendingUp {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <TrendingUp {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Traget {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Unlock {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Tag {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <ThumbsUp {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <ThumbsDown {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Upload {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <XSquire {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <XCircle {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <ZoomOut {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <ZoomIn {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlertOnly {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlignJustify {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlignRight {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlignLeft {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <AlignCenter {...rest} />,
            name: "AlertTrianle",
            data: ["plus"],
        },
        {
            icon: <Anchor {...rest} />,
            name: "Anchor",
            data: ["plus"],
        },
        {
            icon: <Attachment {...rest} />,
            name: "Attachment",
            data: ["plus"],
        },
        {
            icon: <Bold {...rest} />,
            name: "Bold",
            data: ["plus"],
        },
        {
            icon: <Delete {...rest} />,
            name: "Delete",
            data: ["plus"],
        },
        {
            icon: <EditInline {...rest} />,
            name: "EditInline",
            data: ["plus"],
        },
        {
            icon: <EditCompose {...rest} />,
            name: "EditCompose",
            data: ["plus"],
        },
        {
            icon: <FilePlus {...rest} />,
            name: "FilePlus",
            data: ["plus"],
        },
    ]
    return Icons;
}
// FileMinus
// Flag
// Folder
// Grid
// Image
// Italic
// Minimize
// Type
// FileZip
// Underline
// Film
// AirPlay
// AtSign
// Blutooth
// Camera
// CameraOff
// Cast
// Inbox
// Mail
// MessageCircle
// MessageSquire
// Mic
// PhoneCall
// Phone
// PhoneOutgoing
// PhoneOff
// PhoneMissed
// PhoneIncoming
// PhoneForwarded
// Send
// MailOpen
// Video
// VideoOff
// VoiceMail
// Wifi
// WifiOff
// Book
// Box
// Briefcase
// Chrome
// Circle
// CrossShair
// Disc
// Droplet
// Layers
// Layout
// Sidebar
// Squire
// Triangle
// LifeBoy
// Loader
// Octagon
// Package
// Percent
// Sheild
// Announcement
// Appstore
// Coins
// Bill
// Stamp
// MenuDots
// Dot
// Ticket
// Wind
// ArrowUpLeft
// ArrowUpRight
// ArrowLeft
// ArrowUp
// ArrowDownRight
// ArrowDownLeft
// ArrowDown
// ArrowRight
// ChevronsRight
// ChevronsLeft
// ChevronsDown
// ChevronsUp
// ChevronRight
// ChevronLeft
// ChevronDown
// ChevronUp
// CornerUpRight
// CornerDownLeft
// CornerRightUp
// CornerRightDown
// CornerLeftUp
// CornerDownRight
// CornerUpLeft
// CornerLeftDown
// FastFroward
// Headphone
// Rewind
// Skipback
// SkipForward
// Volume
// VolumeMute
// VolumeLow
// VolumeHigh
// Calendar
// Clock
// Cloud
// CloudDrizzle
// CloudeSnow
// CloudeOff
// CloudLighting
// Moon
// Sunset
// Sunrise
// Sun
// Watch
// Cloudrain
// History
// UserCheck
// User
// UserX
// UserPlus
// UserMinus
// Users
// BetterCharging
// Battery
// Cpu
// Monitor
// Printer
// Radio
// Server
// Smartphone
// Speaker
// Tablet
// Thermometer
// Tv
// Codepen
// Facebook
// Gitlab
// Hithub
// Instagram
// Pocket
// Slack
// Twitter
// Activity
// BarChartAlt
// BarChart
// PaiChart
// Compass
// Map
// MapPin
// Navigation
// CreditCard
// CreditCard
// Dollar
// Ruppes
// Resizer



// command