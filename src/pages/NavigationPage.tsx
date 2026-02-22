import { useState } from 'react';
import {
  TabList,
  Tab,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  MenuDivider,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuGroup,
  MenuGroupHeader,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Button,
  makeStyles,
  tokens,
  Text,
  Divider,
} from '@fluentui/react-components';
import type { TabValue } from '@fluentui/react-components';
import {
  Home20Regular,
  Document20Regular,
  Settings20Regular,
  ChevronRight20Regular,
  Cut20Regular,
  Copy20Regular,
  ClipboardPaste20Regular,
  TextBold20Regular,
  TextItalic20Regular,
  TextUnderline20Regular,
} from '@fluentui/react-icons';
import { SectionCard } from '../components/SectionCard';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXL,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalL,
    alignItems: 'flex-start',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  tabContent: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusMedium,
  },
  divider: {
    marginTop: tokens.spacingVerticalS,
    marginBottom: tokens.spacingVerticalS,
  },
  subheading: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
});

export function NavigationPage() {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState<TabValue>('home');
  const [selectedTabVertical, setSelectedTabVertical] = useState<TabValue>('files');

  return (
    <div className={styles.page}>
      {/* TabList */}
      <SectionCard title="TabList">
        <div className={styles.column}>
          <Text className={styles.subheading}>Horizontal</Text>
          <TabList
            selectedValue={selectedTab}
            onTabSelect={(_, d) => setSelectedTab(d.value)}
          >
            <Tab value="home" icon={<Home20Regular />}>Home</Tab>
            <Tab value="documents" icon={<Document20Regular />}>Documents</Tab>
            <Tab value="settings" icon={<Settings20Regular />}>Settings</Tab>
            <Tab value="disabled" disabled>Disabled</Tab>
          </TabList>
          <div className={styles.tabContent}>
            <Text>Active tab: <strong>{String(selectedTab)}</strong></Text>
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Vertical</Text>
          <div style={{ display: 'flex', gap: tokens.spacingHorizontalM }}>
            <TabList
              vertical
              selectedValue={selectedTabVertical}
              onTabSelect={(_, d) => setSelectedTabVertical(d.value)}
            >
              <Tab value="files">Files</Tab>
              <Tab value="recent">Recent</Tab>
              <Tab value="shared">Shared</Tab>
            </TabList>
            <div className={styles.tabContent} style={{ flex: 1 }}>
              <Text>Active tab: <strong>{String(selectedTabVertical)}</strong></Text>
            </div>
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Sizes</Text>
          <TabList size="small">
            <Tab value="a">Small A</Tab>
            <Tab value="b">Small B</Tab>
          </TabList>
          <TabList size="medium">
            <Tab value="a">Medium A</Tab>
            <Tab value="b">Medium B</Tab>
          </TabList>
          <TabList size="large">
            <Tab value="a">Large A</Tab>
            <Tab value="b">Large B</Tab>
          </TabList>
        </div>
      </SectionCard>

      {/* Breadcrumb */}
      <SectionCard title="Breadcrumb">
        <div className={styles.column}>
          <Text className={styles.subheading}>Default</Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbButton icon={<Home20Regular />}>Home</BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider>
              <ChevronRight20Regular />
            </BreadcrumbDivider>
            <BreadcrumbItem>
              <BreadcrumbButton>Documents</BreadcrumbButton>
            </BreadcrumbItem>
            <BreadcrumbDivider>
              <ChevronRight20Regular />
            </BreadcrumbDivider>
            <BreadcrumbItem>
              <BreadcrumbButton current>Report.docx</BreadcrumbButton>
            </BreadcrumbItem>
          </Breadcrumb>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Sizes</Text>
          <Breadcrumb size="small">
            <BreadcrumbItem><BreadcrumbButton>Home</BreadcrumbButton></BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem><BreadcrumbButton current>Page</BreadcrumbButton></BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb size="medium">
            <BreadcrumbItem><BreadcrumbButton>Home</BreadcrumbButton></BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem><BreadcrumbButton current>Page</BreadcrumbButton></BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb size="large">
            <BreadcrumbItem><BreadcrumbButton>Home</BreadcrumbButton></BreadcrumbItem>
            <BreadcrumbDivider />
            <BreadcrumbItem><BreadcrumbButton current>Page</BreadcrumbButton></BreadcrumbItem>
          </Breadcrumb>
        </div>
      </SectionCard>

      {/* Menu */}
      <SectionCard title="Menu">
        <div className={styles.row}>
          <div className={styles.column}>
            <Text className={styles.subheading}>Basic Menu</Text>
            <Menu>
              <MenuTrigger>
                <Button>Open Menu</Button>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>Cut</MenuItem>
                  <MenuItem>Copy</MenuItem>
                  <MenuItem>Paste</MenuItem>
                  <MenuDivider />
                  <MenuItem disabled>Delete</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>

          <div className={styles.column}>
            <Text className={styles.subheading}>Menu with Icons</Text>
            <Menu>
              <MenuTrigger>
                <Button>Edit Menu</Button>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem icon={<Cut20Regular />}>Cut</MenuItem>
                  <MenuItem icon={<Copy20Regular />}>Copy</MenuItem>
                  <MenuItem icon={<ClipboardPaste20Regular />}>Paste</MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>

          <div className={styles.column}>
            <Text className={styles.subheading}>Checkbox & Radio Groups</Text>
            <Menu>
              <MenuTrigger>
                <Button>Format Menu</Button>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuGroup>
                    <MenuGroupHeader>Text Format</MenuGroupHeader>
                    <MenuItemCheckbox icon={<TextBold20Regular />} name="format" value="bold">
                      Bold
                    </MenuItemCheckbox>
                    <MenuItemCheckbox icon={<TextItalic20Regular />} name="format" value="italic">
                      Italic
                    </MenuItemCheckbox>
                    <MenuItemCheckbox icon={<TextUnderline20Regular />} name="format" value="underline">
                      Underline
                    </MenuItemCheckbox>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuGroupHeader>Alignment</MenuGroupHeader>
                    <MenuItemRadio name="align" value="left">Left</MenuItemRadio>
                    <MenuItemRadio name="align" value="center">Center</MenuItemRadio>
                    <MenuItemRadio name="align" value="right">Right</MenuItemRadio>
                  </MenuGroup>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </div>
      </SectionCard>

      {/* Toolbar */}
      <SectionCard title="Toolbar">
        <div className={styles.column}>
          <Text className={styles.subheading}>Default</Text>
          <Toolbar>
            <ToolbarButton icon={<Cut20Regular />} />
            <ToolbarButton icon={<Copy20Regular />} />
            <ToolbarButton icon={<ClipboardPaste20Regular />} />
            <ToolbarDivider />
            <ToolbarButton icon={<TextBold20Regular />} />
            <ToolbarButton icon={<TextItalic20Regular />} />
            <ToolbarButton icon={<TextUnderline20Regular />} />
          </Toolbar>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>With Text</Text>
          <Toolbar>
            <ToolbarButton icon={<Cut20Regular />}>Cut</ToolbarButton>
            <ToolbarButton icon={<Copy20Regular />}>Copy</ToolbarButton>
            <ToolbarButton icon={<ClipboardPaste20Regular />}>Paste</ToolbarButton>
          </Toolbar>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Small</Text>
          <Toolbar size="small">
            <ToolbarButton icon={<TextBold20Regular />} />
            <ToolbarButton icon={<TextItalic20Regular />} />
            <ToolbarButton icon={<TextUnderline20Regular />} />
          </Toolbar>
        </div>
      </SectionCard>
    </div>
  );
}
