import {
  Text,
  Title1,
  Title2,
  Body1,
  Card,
  CardHeader,
  Button,
  Badge,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { useNavigate } from 'react-router-dom';
import {
  GridDots20Regular,
  SlideText20Regular,
  Navigation20Regular,
  Alert20Regular,
  LayoutCellFour20Regular,
  Layer20Regular,
  TextCaseLowercase20Regular,
  Table20Regular,
  Emoji20Regular,
  Wand20Regular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXL,
    maxWidth: '900px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  card: {
    cursor: 'pointer',
    ':hover': {
      boxShadow: tokens.shadow16,
    },
  },
  cardBody: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    paddingBottom: tokens.spacingVerticalS,
  },
  icon: {
    color: tokens.colorBrandForeground1,
    fontSize: '20px',
  },
  badge: {
    marginLeft: 'auto',
  },
});

interface SectionInfo {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  count: number;
}

const sections: SectionInfo[] = [
  {
    title: 'Basic Inputs',
    description: 'Button, Checkbox, Input, Slider, RadioGroup, Switch, SpinButton',
    path: '/basic-inputs',
    icon: <GridDots20Regular />,
    count: 7,
  },
  {
    title: 'Selection',
    description: 'Combobox, Dropdown, Select, TagPicker',
    path: '/selection',
    icon: <SlideText20Regular />,
    count: 4,
  },
  {
    title: 'Navigation',
    description: 'TabList, Breadcrumb, Menu, Toolbar',
    path: '/navigation',
    icon: <Navigation20Regular />,
    count: 4,
  },
  {
    title: 'Feedback',
    description: 'Dialog, Spinner, ProgressBar, MessageBar, Toast, Badge',
    path: '/feedback',
    icon: <Alert20Regular />,
    count: 6,
  },
  {
    title: 'Layout',
    description: 'Accordion, Divider, Card',
    path: '/layout',
    icon: <LayoutCellFour20Regular />,
    count: 3,
  },
  {
    title: 'Overlays',
    description: 'Tooltip, Popover, Drawer',
    path: '/overlays',
    icon: <Layer20Regular />,
    count: 3,
  },
  {
    title: 'Typography',
    description: 'Text, Display, Title, Body, Caption, Link',
    path: '/typography',
    icon: <TextCaseLowercase20Regular />,
    count: 6,
  },
  {
    title: 'Data Display',
    description: 'Avatar, Persona, Table, DataGrid',
    path: '/data-display',
    icon: <Table20Regular />,
    count: 4,
  },
  {
    title: 'Icons',
    description: '130+ Fluent icons with search, size reference, Regular vs Filled',
    path: '/icons',
    icon: <Emoji20Regular />,
    count: 130,
  },
  {
    title: 'Playground',
    description: 'Interactively customize Button, Card, Avatar, Badge with live preview',
    path: '/playground',
    icon: <Wand20Regular />,
    count: 4,
  },
];

export function HomePage() {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Title1>Fluent UI React Components</Title1>
        <Body1>
          A comprehensive showcase of Microsoft Fluent UI React (v9) components.
          Use the sidebar to navigate between sections, and the theme switcher in
          the toolbar to change the visual theme.
        </Body1>
      </div>

      <Title2>Sections</Title2>
      <div className={styles.grid}>
        {sections.map((section) => (
          <Card
            key={section.path}
            className={styles.card}
            onClick={() => navigate(section.path)}
          >
            <CardHeader
              image={<span className={styles.icon}>{section.icon}</span>}
              header={<Text weight="semibold">{section.title}</Text>}
              action={
                <Badge appearance="tint" color="brand" className={styles.badge}>
                  {section.count}
                </Badge>
              }
            />
            <div className={styles.cardBody}>
              <Text size={200} style={{ color: tokens.colorNeutralForeground3 }}>
                {section.description}
              </Text>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader
          header={<Text weight="semibold">About this Demo</Text>}
        />
        <Body1>
          This application is built with{' '}
          <strong>Tauri 2</strong>,{' '}
          <strong>React 19</strong>, and{' '}
          <strong>Fluent UI React v9</strong>.
          It demonstrates the full component library with support for multiple
          themes: Web Light, Web Dark, Teams Light, Teams Dark, and High Contrast.
        </Body1>
        <br />
        <div style={{ display: 'flex', gap: tokens.spacingHorizontalS, flexWrap: 'wrap' }}>
          <Button
            appearance="primary"
            onClick={() => navigate('/basic-inputs')}
          >
            Get Started
          </Button>
          <Button
            appearance="outline"
            as="a"
            href="https://react.fluentui.dev"
          >
            Fluent UI Docs
          </Button>
        </div>
      </Card>
    </div>
  );
}
