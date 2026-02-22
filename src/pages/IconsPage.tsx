import { useState, useMemo } from 'react';
import {
  Input,
  Field,
  Text,
  Caption1,
  Badge,
  Tooltip,
  makeStyles,
  tokens,
  Divider,
  Select,
} from '@fluentui/react-components';
import {
  Home20Regular,
  Home20Filled,
  Document20Regular,
  Document20Filled,
  Settings20Regular,
  Settings20Filled,
  Search20Regular,
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
  Save20Regular,
  Send20Regular,
  Share20Regular,
  Mail20Regular,
  Mail20Filled,
  Calendar20Regular,
  Person20Regular,
  Person20Filled,
  Star20Regular,
  Star20Filled,
  Heart20Regular,
  HeartFilled,
  ArrowDownload20Regular,
  Folder20Regular,
  Folder20Filled,
  Image20Regular,
  VideoClip20Regular,
  Alert20Regular,
  Alert20Filled,
  LockClosed20Regular,
  LockClosed20Filled,
  Warning20Regular,
  Warning20Filled,
  Checkmark20Regular,
  Dismiss20Regular,
  ArrowLeft20Regular,
  ArrowRight20Regular,
  ChevronDown20Regular,
  ChevronUp20Regular,
  Info20Regular,
  Info20Filled,
  Question20Regular,
  Filter20Regular,
  Copy20Regular,
  Cut20Regular,
  ClipboardPaste20Regular,
  ZoomIn20Regular,
  ZoomOut20Regular,
  ThumbLike20Regular,
  ThumbLike20Filled,
  Comment20Regular,
  Comment20Filled,
  Tag20Regular,
  Link20Regular,
  Globe20Regular,
  Cloud20Regular,
  Cloud20Filled,
  Wifi120Regular,
  Battery020Regular,
  Bluetooth20Regular,
  Phone20Regular,
  ChatBubblesQuestion20Regular,
  Map20Regular,
  Location20Regular,
  Location20Filled,
  Rocket20Regular,
  Sparkle20Regular,
  Cart20Regular,
  Cart20Filled,
  WalletCreditCard20Regular,
  Money20Regular,
  Gift20Regular,
  Trophy20Regular,
  Trophy20Filled,
  Flash20Regular,
  Flash20Filled,
  MusicNote120Regular,
  Headphones20Regular,
  Mic20Regular,
  Speaker120Regular,
  Camera20Regular,
  Camera20Filled,
  Eye20Regular,
  EyeOff20Regular,
  Key20Regular,
  ShieldCheckmark20Regular,
  Bug20Regular,
  Code20Regular,
  DataBarVertical20Regular,
  DatabaseSearch20Regular,
  Laptop20Regular,
  Desktop20Regular,
  Phone20Filled,
  TabletLaptop20Regular,
  Print20Regular,
  Accessibility20Regular,
  Color20Regular,
  PaintBrush20Regular,
  TextBold20Regular,
  TextItalic20Regular,
  TextUnderline20Regular,
  Apps20Regular,
  Grid20Regular,
  List20Regular,
  Table20Regular,
  PanelLeft20Regular,
  Navigation20Regular,
  MoreCircle20Regular,
  MoreHorizontal20Regular,
  Pin20Regular,
  Flag20Regular,
  Bookmark20Regular,
  Archive20Regular,
  Box20Regular,
  Wrench20Regular,
  NoteAdd20Regular,
  CalendarAdd20Regular,
  PersonAdd20Regular,
  PersonDelete20Regular,
  FolderAdd20Regular,
  DocumentAdd20Regular,
  ImageAdd20Regular,
  ArrowSync20Regular,
  ArrowClockwise20Regular,
  CheckmarkCircle20Regular,
  DismissCircle20Regular,
  ErrorCircle20Regular,
  Clock20Regular,
  Timer20Regular,
  History20Regular,
  StarAdd20Regular,
  Attach20Regular,
  DocumentPdf20Regular,
  SlideText20Regular,
  ChartMultiple20Regular,
} from '@fluentui/react-icons';
import { SectionCard } from '../components/SectionCard';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXL,
  },
  controls: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  searchField: {
    flex: 1,
    minWidth: '200px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: tokens.spacingHorizontalM,
  },
  iconTile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: tokens.spacingVerticalXS,
    padding: tokens.spacingVerticalM,
    borderRadius: tokens.borderRadiusMedium,
    cursor: 'pointer',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      border: `1px solid ${tokens.colorNeutralStroke1Hover}`,
      boxShadow: tokens.shadow4,
    },
  },
  iconTileActive: {
    backgroundColor: tokens.colorBrandBackground2,
    border: `1px solid ${tokens.colorBrandStroke1}`,
  },
  iconName: {
    textAlign: 'center',
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
    wordBreak: 'break-word',
    lineHeight: tokens.lineHeightBase100,
  },
  iconDisplay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyBanner: {
    backgroundColor: tokens.colorBrandBackground2,
    border: `1px solid ${tokens.colorBrandStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  divider: {
    marginTop: tokens.spacingVerticalS,
    marginBottom: tokens.spacingVerticalS,
  },
  subheading: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  sizeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalL,
    alignItems: 'center',
  },
  sizeItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: tokens.spacingVerticalXS,
  },
});

// All icons with their names (Regular and Filled variants)
const allIcons: { name: string; component: React.ReactNode; category: string }[] = [
  // Navigation
  { name: 'Home', component: <Home20Regular />, category: 'Navigation' },
  { name: 'HomeFilled', component: <Home20Filled />, category: 'Navigation' },
  { name: 'Navigation', component: <Navigation20Regular />, category: 'Navigation' },
  { name: 'PanelLeft', component: <PanelLeft20Regular />, category: 'Navigation' },
  { name: 'Apps', component: <Apps20Regular />, category: 'Navigation' },
  { name: 'Grid', component: <Grid20Regular />, category: 'Navigation' },
  { name: 'List', component: <List20Regular />, category: 'Navigation' },
  { name: 'ArrowLeft', component: <ArrowLeft20Regular />, category: 'Navigation' },
  { name: 'ArrowRight', component: <ArrowRight20Regular />, category: 'Navigation' },
  { name: 'ChevronDown', component: <ChevronDown20Regular />, category: 'Navigation' },
  { name: 'ChevronUp', component: <ChevronUp20Regular />, category: 'Navigation' },
  { name: 'MoreHorizontal', component: <MoreHorizontal20Regular />, category: 'Navigation' },
  { name: 'More', component: <MoreCircle20Regular />, category: 'Navigation' },
  // Files & Documents
  { name: 'Document', component: <Document20Regular />, category: 'Files' },
  { name: 'DocumentFilled', component: <Document20Filled />, category: 'Files' },
  { name: 'DocumentAdd', component: <DocumentAdd20Regular />, category: 'Files' },
  { name: 'DocumentPdf', component: <DocumentPdf20Regular />, category: 'Files' },
  { name: 'Folder', component: <Folder20Regular />, category: 'Files' },
  { name: 'FolderFilled', component: <Folder20Filled />, category: 'Files' },
  { name: 'FolderAdd', component: <FolderAdd20Regular />, category: 'Files' },
  { name: 'Image', component: <Image20Regular />, category: 'Files' },
  { name: 'ImageAdd', component: <ImageAdd20Regular />, category: 'Files' },
  { name: 'VideoClip', component: <VideoClip20Regular />, category: 'Files' },
  { name: 'SlideText', component: <SlideText20Regular />, category: 'Files' },
  { name: 'Archive', component: <Archive20Regular />, category: 'Files' },
  { name: 'Attach', component: <Attach20Regular />, category: 'Files' },
  { name: 'NoteAdd', component: <NoteAdd20Regular />, category: 'Files' },
  // Communication
  { name: 'Mail', component: <Mail20Regular />, category: 'Communication' },
  { name: 'MailFilled', component: <Mail20Filled />, category: 'Communication' },
  { name: 'Send', component: <Send20Regular />, category: 'Communication' },
  { name: 'Chat', component: <ChatBubblesQuestion20Regular />, category: 'Communication' },
  { name: 'Comment', component: <Comment20Regular />, category: 'Communication' },
  { name: 'CommentFilled', component: <Comment20Filled />, category: 'Communication' },
  { name: 'Share', component: <Share20Regular />, category: 'Communication' },
  { name: 'Link', component: <Link20Regular />, category: 'Communication' },
  { name: 'Phone', component: <Phone20Regular />, category: 'Communication' },
  { name: 'PhoneFilled', component: <Phone20Filled />, category: 'Communication' },
  { name: 'Bell', component: <Alert20Regular />, category: 'Communication' },
  { name: 'BellFilled', component: <Alert20Filled />, category: 'Communication' },
  // People
  { name: 'Person', component: <Person20Regular />, category: 'People' },
  { name: 'PersonFilled', component: <Person20Filled />, category: 'People' },
  { name: 'PersonAdd', component: <PersonAdd20Regular />, category: 'People' },
  { name: 'PersonDelete', component: <PersonDelete20Regular />, category: 'People' },
  // Actions
  { name: 'Add', component: <Add20Regular />, category: 'Actions' },
  { name: 'Delete', component: <Delete20Regular />, category: 'Actions' },
  { name: 'Edit', component: <Edit20Regular />, category: 'Actions' },
  { name: 'Save', component: <Save20Regular />, category: 'Actions' },
  { name: 'Copy', component: <Copy20Regular />, category: 'Actions' },
  { name: 'Cut', component: <Cut20Regular />, category: 'Actions' },
  { name: 'Paste', component: <ClipboardPaste20Regular />, category: 'Actions' },
  { name: 'Search', component: <Search20Regular />, category: 'Actions' },
  { name: 'Filter', component: <Filter20Regular />, category: 'Actions' },
  { name: 'ZoomIn', component: <ZoomIn20Regular />, category: 'Actions' },
  { name: 'ZoomOut', component: <ZoomOut20Regular />, category: 'Actions' },
  { name: 'Sync', component: <ArrowSync20Regular />, category: 'Actions' },
  { name: 'Refresh', component: <ArrowClockwise20Regular />, category: 'Actions' },
  { name: 'Pin', component: <Pin20Regular />, category: 'Actions' },
  { name: 'Bookmark', component: <Bookmark20Regular />, category: 'Actions' },
  { name: 'Flag', component: <Flag20Regular />, category: 'Actions' },
  { name: 'Print', component: <Print20Regular />, category: 'Actions' },
  { name: 'ArrowDownload', component: <ArrowDownload20Regular />, category: 'Actions' },
  // Status & Feedback
  { name: 'Checkmark', component: <Checkmark20Regular />, category: 'Status' },
  { name: 'CheckmarkCircle', component: <CheckmarkCircle20Regular />, category: 'Status' },
  { name: 'Dismiss', component: <Dismiss20Regular />, category: 'Status' },
  { name: 'DismissCircle', component: <DismissCircle20Regular />, category: 'Status' },
  { name: 'ErrorCircle', component: <ErrorCircle20Regular />, category: 'Status' },
  { name: 'Warning', component: <Warning20Regular />, category: 'Status' },
  { name: 'WarningFilled', component: <Warning20Filled />, category: 'Status' },
  { name: 'Info', component: <Info20Regular />, category: 'Status' },
  { name: 'InfoFilled', component: <Info20Filled />, category: 'Status' },
  { name: 'Question', component: <Question20Regular />, category: 'Status' },
  { name: 'ThumbLike', component: <ThumbLike20Regular />, category: 'Status' },
  { name: 'ThumbLikeFilled', component: <ThumbLike20Filled />, category: 'Status' },
  { name: 'Star', component: <Star20Regular />, category: 'Status' },
  { name: 'StarFilled', component: <Star20Filled />, category: 'Status' },
  { name: 'StarAdd', component: <StarAdd20Regular />, category: 'Status' },
  { name: 'Heart', component: <Heart20Regular />, category: 'Status' },
  { name: 'HeartFilled', component: <HeartFilled />, category: 'Status' },
  // Settings & System
  { name: 'Settings', component: <Settings20Regular />, category: 'System' },
  { name: 'SettingsFilled', component: <Settings20Filled />, category: 'System' },
  { name: 'Lock', component: <LockClosed20Regular />, category: 'System' },
  { name: 'LockFilled', component: <LockClosed20Filled />, category: 'System' },
  { name: 'ShieldCheckmark', component: <ShieldCheckmark20Regular />, category: 'System' },
  { name: 'Key', component: <Key20Regular />, category: 'System' },
  { name: 'Eye', component: <Eye20Regular />, category: 'System' },
  { name: 'EyeOff', component: <EyeOff20Regular />, category: 'System' },
  { name: 'Wrench', component: <Wrench20Regular />, category: 'System' },
  { name: 'Bug', component: <Bug20Regular />, category: 'System' },
  { name: 'Code', component: <Code20Regular />, category: 'System' },
  { name: 'Clock', component: <Clock20Regular />, category: 'System' },
  { name: 'Timer', component: <Timer20Regular />, category: 'System' },
  { name: 'History', component: <History20Regular />, category: 'System' },
  { name: 'Calendar', component: <Calendar20Regular />, category: 'System' },
  { name: 'CalendarAdd', component: <CalendarAdd20Regular />, category: 'System' },
  // Hardware
  { name: 'Laptop', component: <Laptop20Regular />, category: 'Hardware' },
  { name: 'Desktop', component: <Desktop20Regular />, category: 'Hardware' },
  { name: 'TabletLaptop', component: <TabletLaptop20Regular />, category: 'Hardware' },
  { name: 'Camera', component: <Camera20Regular />, category: 'Hardware' },
  { name: 'CameraFilled', component: <Camera20Filled />, category: 'Hardware' },
  { name: 'Headphones', component: <Headphones20Regular />, category: 'Hardware' },
  { name: 'Mic', component: <Mic20Regular />, category: 'Hardware' },
  { name: 'Speaker', component: <Speaker120Regular />, category: 'Hardware' },
  { name: 'Battery', component: <Battery020Regular />, category: 'Hardware' },
  { name: 'Bluetooth', component: <Bluetooth20Regular />, category: 'Hardware' },
  { name: 'Wifi', component: <Wifi120Regular />, category: 'Hardware' },
  { name: 'Print', component: <Print20Regular />, category: 'Hardware' },
  // Misc
  { name: 'Cloud', component: <Cloud20Regular />, category: 'Misc' },
  { name: 'CloudFilled', component: <Cloud20Filled />, category: 'Misc' },
  { name: 'Globe', component: <Globe20Regular />, category: 'Misc' },
  { name: 'Map', component: <Map20Regular />, category: 'Misc' },
  { name: 'Location', component: <Location20Regular />, category: 'Misc' },
  { name: 'LocationFilled', component: <Location20Filled />, category: 'Misc' },
  { name: 'Rocket', component: <Rocket20Regular />, category: 'Misc' },
  { name: 'Sparkle', component: <Sparkle20Regular />, category: 'Misc' },
  { name: 'Flash', component: <Flash20Regular />, category: 'Misc' },
  { name: 'FlashFilled', component: <Flash20Filled />, category: 'Misc' },
  { name: 'Trophy', component: <Trophy20Regular />, category: 'Misc' },
  { name: 'TrophyFilled', component: <Trophy20Filled />, category: 'Misc' },
  { name: 'Gift', component: <Gift20Regular />, category: 'Misc' },
  { name: 'Tag', component: <Tag20Regular />, category: 'Misc' },
  { name: 'Box', component: <Box20Regular />, category: 'Misc' },
  { name: 'ShoppingCart', component: <Cart20Regular />, category: 'Misc' },
  { name: 'ShoppingCartFilled', component: <Cart20Filled />, category: 'Misc' },
  { name: 'CreditCard', component: <WalletCreditCard20Regular />, category: 'Misc' },
  { name: 'Money', component: <Money20Regular />, category: 'Misc' },
  { name: 'MusicNote', component: <MusicNote120Regular />, category: 'Misc' },
  { name: 'Table', component: <Table20Regular />, category: 'Misc' },
  { name: 'DataBar', component: <DataBarVertical20Regular />, category: 'Misc' },
  { name: 'DatabaseSearch', component: <DatabaseSearch20Regular />, category: 'Misc' },
  { name: 'ChartMultiple', component: <ChartMultiple20Regular />, category: 'Misc' },
  { name: 'Accessibility', component: <Accessibility20Regular />, category: 'Misc' },
  { name: 'Color', component: <Color20Regular />, category: 'Misc' },
  { name: 'PaintBrush', component: <PaintBrush20Regular />, category: 'Misc' },
  { name: 'TextBold', component: <TextBold20Regular />, category: 'Misc' },
  { name: 'TextItalic', component: <TextItalic20Regular />, category: 'Misc' },
  { name: 'TextUnderline', component: <TextUnderline20Regular />, category: 'Misc' },
];

const categories = ['All', ...Array.from(new Set(allIcons.map((i) => i.category))).sort()];

const iconSizes: { label: string; style: React.CSSProperties }[] = [
  { label: '16px', style: { fontSize: '16px', width: '16px', height: '16px' } },
  { label: '20px', style: { fontSize: '20px', width: '20px', height: '20px' } },
  { label: '24px', style: { fontSize: '24px', width: '24px', height: '24px' } },
  { label: '32px', style: { fontSize: '32px', width: '32px', height: '32px' } },
  { label: '48px', style: { fontSize: '48px', width: '48px', height: '48px' } },
];

export function IconsPage() {
  const styles = useStyles();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return allIcons.filter((icon) => {
      const matchesSearch = icon.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || icon.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const [copyError, setCopyError] = useState(false);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`<${name}20Regular />`).then(
      () => { setCopied(name); setCopyError(false); },
      () => { setCopied(name); setCopyError(true); },
    );
    setTimeout(() => { setCopied(null); setCopyError(false); }, 2000);
  };

  return (
    <div className={styles.page}>
      {/* Size Reference */}
      <SectionCard title="Icon Sizes">
        <div className={styles.sizeRow}>
          {iconSizes.map(({ label, style }) => (
            <div key={label} className={styles.sizeItem}>
              <div className={styles.iconDisplay} style={style}>
                <Sparkle20Regular style={style} />
              </div>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{label}</Caption1>
            </div>
          ))}
        </div>
        <Divider className={styles.divider} />
        <Text className={styles.subheading}>Regular vs Filled variants</Text>
        <div style={{ display: 'flex', gap: tokens.spacingHorizontalL, marginTop: tokens.spacingVerticalS, flexWrap: 'wrap' }}>
          {[
            { regular: <Heart20Regular />, filled: <HeartFilled />, name: 'Heart' },
            { regular: <Star20Regular />, filled: <Star20Filled />, name: 'Star' },
            { regular: <Alert20Regular />, filled: <Alert20Filled />, name: 'Bell' },
            { regular: <Folder20Regular />, filled: <Folder20Filled />, name: 'Folder' },
            { regular: <Cloud20Regular />, filled: <Cloud20Filled />, name: 'Cloud' },
            { regular: <Person20Regular />, filled: <Person20Filled />, name: 'Person' },
            { regular: <Cart20Regular />, filled: <Cart20Filled />, name: 'ShoppingCart' },
            { regular: <ThumbLike20Regular />, filled: <ThumbLike20Filled />, name: 'ThumbLike' },
          ].map(({ regular, filled, name }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: tokens.spacingVerticalXS }}>
              <div style={{ display: 'flex', gap: tokens.spacingHorizontalS, fontSize: '24px' }}>
                <Tooltip content={`${name}20Regular`} relationship="label">
                  <span style={{ cursor: 'pointer', color: tokens.colorNeutralForeground2 }}>{regular}</span>
                </Tooltip>
                <Tooltip content={`${name}Filled`} relationship="label">
                  <span style={{ cursor: 'pointer', color: tokens.colorBrandForeground1 }}>{filled}</span>
                </Tooltip>
              </div>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{name}</Caption1>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Icon Gallery */}
      <SectionCard title="Icon Gallery">
        <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalM }}>
          <div className={styles.controls}>
            <Field label="Search icons" className={styles.searchField}>
              <Input
                value={search}
                onChange={(_, d) => setSearch(d.value)}
                placeholder="e.g. home, mail, star..."
                contentBefore={<Search20Regular />}
              />
            </Field>
            <Field label="Category">
              <Select
                value={category}
                onChange={(_, d) => setCategory(d.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Select>
            </Field>
            <Badge appearance="tint" color="informative" style={{ alignSelf: 'flex-end', marginBottom: '4px' }}>
              {filtered.length} icon{filtered.length !== 1 ? 's' : ''}
            </Badge>
          </div>

          {copied && (
            <div className={styles.copyBanner}>
              <Checkmark20Regular style={{ color: copyError ? tokens.colorPaletteRedForeground3 : tokens.colorBrandForeground1 }} />
              <Text size={200}>
                {copyError
                  ? <>Could not copy to clipboard. Icon name: <strong>{copied}20Regular</strong></>
                  : <>Copied <strong>&lt;{copied}20Regular /&gt;</strong> to clipboard</>
                }
              </Text>
            </div>
          )}

          {filtered.length === 0 ? (
            <Text style={{ color: tokens.colorNeutralForeground3 }}>No icons found for "{search}".</Text>
          ) : (
            <div className={styles.grid}>
              {filtered.map((icon) => (
                <Tooltip
                  key={icon.name}
                  content={`Click to copy: <${icon.name}20Regular />`}
                  relationship="label"
                >
                  <div
                    className={`${styles.iconTile} ${copied === icon.name ? styles.iconTileActive : ''}`}
                    onClick={() => handleCopy(icon.name)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCopy(icon.name)}
                  >
                    <div className={styles.iconDisplay} style={{ fontSize: '24px', color: tokens.colorNeutralForeground1 }}>
                      {icon.component}
                    </div>
                    <span className={styles.iconName}>{icon.name}</span>
                  </div>
                </Tooltip>
              ))}
            </div>
          )}
        </div>
      </SectionCard>
    </div>
  );
}
