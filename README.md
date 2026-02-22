# Fluent UI Demo

A Tauri desktop application built with React and Microsoft Fluent UI React v9. It showcases all major Fluent UI components organized in logical sections, with support for multiple themes.

## Features

- **Tauri 2** desktop app (cross-platform: Windows, macOS, Linux)
- **React 19** + **TypeScript** frontend
- **Fluent UI React v9** component library
- **5 themes**: Web Light, Web Dark, Teams Light, Teams Dark, High Contrast
- **Easy theme switching** via toolbar dropdown
- **8 component sections**: Basic Inputs, Selection, Navigation, Feedback, Layout, Overlays, Typography, Data Display

## Component Sections

| Section | Components |
|---------|-----------|
| **Basic Inputs** | Button, CompoundButton, ToggleButton, Checkbox, Input, Slider, RadioGroup, Switch, SpinButton |
| **Selection** | Combobox, Dropdown, Select, TagPicker |
| **Navigation** | TabList, Breadcrumb, Menu, Toolbar |
| **Feedback** | Dialog, Spinner, ProgressBar, MessageBar, Toast, Badge, PresenceBadge |
| **Layout** | Accordion, Divider, Card |
| **Overlays** | Tooltip, Popover, Drawer (Overlay & Inline) |
| **Typography** | Display, Title, Subtitle, Body, Caption, Text, Link |
| **Data Display** | Avatar, AvatarGroup, Persona, Table, DataGrid |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://www.rust-lang.org/tools/install) (for Tauri)
- Tauri system dependencies ([see docs](https://tauri.app/start/prerequisites/))

### Install

```bash
npm install
```

### Development (web only)

```bash
npm run dev
```

### Development (Tauri desktop app)

```bash
npm run tauri:dev
```

### Build

```bash
# Web only
npm run build

# Tauri desktop app
npm run tauri:build
```

## Themes

Switch themes using the dropdown in the top toolbar:

- **Web Light** – Default light theme
- **Web Dark** – Dark theme
- **Teams Light** – Microsoft Teams light theme
- **Teams Dark** – Microsoft Teams dark theme
- **High Contrast** – High contrast accessibility theme
