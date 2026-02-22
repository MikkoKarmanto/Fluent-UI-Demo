import type { JSX } from 'react';
import { useState } from 'react';
import {
  Button,
  CompoundButton,
  Field,
  Input,
  Select,
  Switch,
  Text,
  Divider,
  Badge,
  makeStyles,
  tokens,
  Card,
  Avatar,
  Checkbox,
  Slider,
  Caption1,
} from '@fluentui/react-components';
import {
  Home20Regular,
  Document20Regular,
  Settings20Regular,
  Search20Regular,
  Add20Regular,
  Delete20Regular,
  Edit20Regular,
  Save20Regular,
  Send20Regular,
  Share20Regular,
  Mail20Regular,
  Star20Regular,
  Heart20Regular,
  ArrowDownload20Regular,
  Folder20Regular,
  Alert20Regular,
  LockClosed20Regular,
  Checkmark20Regular,
  ArrowRight20Regular,
  Flash20Regular,
  Rocket20Regular,
  Sparkle20Regular,
  Cart20Regular,
  Trophy20Regular,
  ThumbLike20Regular,
  Code20Regular,
  Globe20Regular,
  Camera20Regular,
  Key20Regular,
} from '@fluentui/react-icons';
import { SectionCard } from '../components/SectionCard';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXL,
  },
  playgroundLayout: {
    display: 'flex',
    gap: tokens.spacingHorizontalXL,
    flexWrap: 'wrap',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    minWidth: '260px',
    flex: '0 0 260px',
  },
  preview: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewLabel: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: tokens.spacingVerticalS,
  },
  divider: {
    marginTop: tokens.spacingVerticalS,
    marginBottom: tokens.spacingVerticalS,
  },
  subheading: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
    marginBottom: tokens.spacingVerticalXS,
  },
  iconGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: tokens.spacingHorizontalXS,
  },
  iconOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacingVerticalXS,
    borderRadius: tokens.borderRadiusMedium,
    cursor: 'pointer',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
    fontSize: '18px',
  },
  iconOptionActive: {
    backgroundColor: tokens.colorBrandBackground2,
    border: `1px solid ${tokens.colorBrandStroke1}`,
  },
  codeBlock: {
    fontFamily: 'monospace',
    fontSize: tokens.fontSizeBase200,
    backgroundColor: tokens.colorNeutralBackground3,
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflowX: 'auto',
    whiteSpace: 'pre',
    width: '100%',
  },
  avatarPlayground: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  settingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

// Icon options for the playground
const iconOptions: { name: string; icon: JSX.Element | null }[] = [
  { name: 'None', icon: null },
  { name: 'Home', icon: <Home20Regular /> },
  { name: 'Document', icon: <Document20Regular /> },
  { name: 'Settings', icon: <Settings20Regular /> },
  { name: 'Search', icon: <Search20Regular /> },
  { name: 'Add', icon: <Add20Regular /> },
  { name: 'Delete', icon: <Delete20Regular /> },
  { name: 'Edit', icon: <Edit20Regular /> },
  { name: 'Save', icon: <Save20Regular /> },
  { name: 'Send', icon: <Send20Regular /> },
  { name: 'Share', icon: <Share20Regular /> },
  { name: 'Mail', icon: <Mail20Regular /> },
  { name: 'Star', icon: <Star20Regular /> },
  { name: 'Heart', icon: <Heart20Regular /> },
  { name: 'Download', icon: <ArrowDownload20Regular /> },
  { name: 'Folder', icon: <Folder20Regular /> },
  { name: 'Bell', icon: <Alert20Regular /> },
  { name: 'Lock', icon: <LockClosed20Regular /> },
  { name: 'Check', icon: <Checkmark20Regular /> },
  { name: 'Arrow →', icon: <ArrowRight20Regular /> },
  { name: 'Flash', icon: <Flash20Regular /> },
  { name: 'Rocket', icon: <Rocket20Regular /> },
  { name: 'Sparkle', icon: <Sparkle20Regular /> },
  { name: 'Cart', icon: <Cart20Regular /> },
  { name: 'Trophy', icon: <Trophy20Regular /> },
  { name: 'ThumbUp', icon: <ThumbLike20Regular /> },
  { name: 'Code', icon: <Code20Regular /> },
  { name: 'Globe', icon: <Globe20Regular /> },
  { name: 'Camera', icon: <Camera20Regular /> },
  { name: 'Key', icon: <Key20Regular /> },
];

type ButtonAppearance = 'primary' | 'secondary' | 'outline' | 'subtle' | 'transparent';
type ButtonSize = 'small' | 'medium' | 'large';

// Generates pseudocode for the button config
function generateButtonCode(
  label: string,
  appearance: ButtonAppearance,
  size: ButtonSize,
  iconName: string,
  disabled: boolean,
  isCompound: boolean,
  secondaryText: string,
  iconPosition: 'before' | 'after',
) {
  const iconProp = iconName !== 'None' ? ` icon={<${iconName}20Regular />}` : '';
  const disabledProp = disabled ? ` disabled` : '';
  const secondaryProp = isCompound && secondaryText ? `\n  secondaryContent="${secondaryText}"` : '';
  const iconPosProp = iconName !== 'None' && iconPosition === 'after' ? ` iconPosition="after"` : '';
  const tag = isCompound ? 'CompoundButton' : 'Button';
  return `<${tag}
  appearance="${appearance}"
  size="${size}"${iconProp}${iconPosProp}${disabledProp}${secondaryProp}
>
  ${label}
</${tag}>`;
}

// Button Playground
function ButtonPlayground() {
  const styles = useStyles();
  const [label, setLabel] = useState('Click Me');
  const [appearance, setAppearance] = useState<ButtonAppearance>('primary');
  const [size, setSize] = useState<ButtonSize>('medium');
  const [selectedIcon, setSelectedIcon] = useState('Send');
  const [disabled, setDisabled] = useState(false);
  const [isCompound, setIsCompound] = useState(false);
  const [secondaryText, setSecondaryText] = useState('Secondary text');
  const [iconPosition, setIconPosition] = useState<'before' | 'after'>('before');

  const currentIcon = iconOptions.find((i) => i.name === selectedIcon)?.icon ?? null;
  // Map display names to component names for code generation
  const iconDisplayToComponentName: Record<string, string> = {
    'None': 'None', 'Arrow →': 'ArrowRight', 'ThumbUp': 'ThumbLike',
    'Check': 'Checkmark', 'Download': 'ArrowDownload', 'Cart': 'ShoppingBag',
    'Bell': 'Alert', 'Lock': 'LockClosed',
  };
  const iconName = iconDisplayToComponentName[selectedIcon] ?? selectedIcon;

  return (
    <div className={styles.playgroundLayout}>
      {/* Controls */}
      <div className={styles.controls}>
        <Text className={styles.subheading}>Configuration</Text>
        <Field label="Button label">
          <Input
            value={label}
            onChange={(_, d) => setLabel(d.value)}
            placeholder="Button text..."
          />
        </Field>
        <Field label="Appearance">
          <Select value={appearance} onChange={(_, d) => setAppearance(d.value as ButtonAppearance)}>
            {(['primary', 'secondary', 'outline', 'subtle', 'transparent'] as ButtonAppearance[]).map(
              (a) => (
                <option key={a} value={a}>
                  {a.charAt(0).toUpperCase() + a.slice(1)}
                </option>
              ),
            )}
          </Select>
        </Field>
        <Field label="Size">
          <Select value={size} onChange={(_, d) => setSize(d.value as ButtonSize)}>
            {(['small', 'medium', 'large'] as ButtonSize[]).map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Icon position">
          <Select
            value={iconPosition}
            onChange={(_, d) => setIconPosition(d.value as 'before' | 'after')}
            disabled={selectedIcon === 'None'}
          >
            <option value="before">Before</option>
            <option value="after">After</option>
          </Select>
        </Field>
        <div className={styles.settingRow}>
          <Text>Compound button</Text>
          <Switch checked={isCompound} onChange={(_, d) => setIsCompound(d.checked)} />
        </div>
        {isCompound && (
          <Field label="Secondary text">
            <Input
              value={secondaryText}
              onChange={(_, d) => setSecondaryText(d.value)}
              placeholder="Secondary description..."
            />
          </Field>
        )}
        <div className={styles.settingRow}>
          <Text>Disabled</Text>
          <Switch checked={disabled} onChange={(_, d) => setDisabled(d.checked)} />
        </div>
        <Divider className={styles.divider} />
        <Text className={styles.subheading}>Select Icon</Text>
        <div className={styles.iconGrid}>
          {iconOptions.map((opt) => (
            <div
              key={opt.name}
              className={`${styles.iconOption} ${selectedIcon === opt.name ? styles.iconOptionActive : ''}`}
              onClick={() => setSelectedIcon(opt.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedIcon(opt.name)}
              title={opt.name}
            >
              {opt.icon ?? <span style={{ fontSize: '12px', lineHeight: 1 }}>∅</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalL }}>
        <div className={styles.preview}>
          <Text className={styles.previewLabel}>Live Preview</Text>
          {isCompound ? (
            <CompoundButton
              appearance={appearance}
              size={size}
              icon={currentIcon ?? undefined}
              iconPosition={iconPosition}
              disabled={disabled}
              secondaryContent={secondaryText || undefined}
            >
              {label}
            </CompoundButton>
          ) : (
            <Button
              appearance={appearance}
              size={size}
              icon={currentIcon ?? undefined}
              iconPosition={iconPosition}
              disabled={disabled}
            >
              {label}
            </Button>
          )}
        </div>

        <div>
          <Text className={styles.subheading}>Generated Code</Text>
          <div className={styles.codeBlock}>
            {generateButtonCode(label, appearance, size, iconName, disabled, isCompound, secondaryText, iconPosition)}
          </div>
        </div>
      </div>
    </div>
  );
}

// Card Playground
function CardPlayground() {
  const styles = useStyles();
  const [cardTitle, setCardTitle] = useState('Project Alpha');
  const [cardDescription, setCardDescription] = useState('A cross-platform desktop app');
  const [cardBody, setCardBody] = useState('Building modern desktop applications with Tauri and Fluent UI React.');
  const [appearance, setAppearance] = useState<'filled' | 'filled-alternative' | 'outline' | 'subtle'>('filled');
  const [showPreview, setShowPreview] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showBadge, setShowBadge] = useState(true);
  const [badgeText, setBadgeText] = useState('Active');
  const [badgeColor, setBadgeColor] = useState<'brand' | 'success' | 'danger' | 'warning' | 'informative'>('success');
  const [footerAction1, setFooterAction1] = useState('Open');
  const [footerAction2, setFooterAction2] = useState('Share');
  const [selectedIcon, setSelectedIcon] = useState('Rocket');
  const currentIcon = iconOptions.find((i) => i.name === selectedIcon)?.icon ?? <Rocket20Regular />;

  return (
    <div className={styles.playgroundLayout}>
      <div className={styles.controls}>
        <Text className={styles.subheading}>Content</Text>
        <Field label="Title">
          <Input value={cardTitle} onChange={(_, d) => setCardTitle(d.value)} />
        </Field>
        <Field label="Description">
          <Input value={cardDescription} onChange={(_, d) => setCardDescription(d.value)} />
        </Field>
        <Field label="Body text">
          <Input value={cardBody} onChange={(_, d) => setCardBody(d.value)} />
        </Field>
        <Divider className={styles.divider} />
        <Text className={styles.subheading}>Style</Text>
        <Field label="Appearance">
          <Select
            value={appearance}
            onChange={(_, d) =>
              setAppearance(d.value as 'filled' | 'filled-alternative' | 'outline' | 'subtle')
            }
          >
            {['filled', 'filled-alternative', 'outline', 'subtle'].map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </Select>
        </Field>
        <div className={styles.settingRow}>
          <Text>Show preview</Text>
          <Switch checked={showPreview} onChange={(_, d) => setShowPreview(d.checked)} />
        </div>
        <div className={styles.settingRow}>
          <Text>Show footer</Text>
          <Switch checked={showFooter} onChange={(_, d) => setShowFooter(d.checked)} />
        </div>
        <Divider className={styles.divider} />
        <Text className={styles.subheading}>Badge</Text>
        <div className={styles.settingRow}>
          <Text>Show badge</Text>
          <Switch checked={showBadge} onChange={(_, d) => setShowBadge(d.checked)} />
        </div>
        {showBadge && (
          <>
            <Field label="Badge text">
              <Input value={badgeText} onChange={(_, d) => setBadgeText(d.value)} />
            </Field>
            <Field label="Badge color">
              <Select value={badgeColor} onChange={(_, d) => setBadgeColor(d.value as typeof badgeColor)}>
                {(['brand', 'success', 'danger', 'warning', 'informative'] as const).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </Field>
          </>
        )}
        {showFooter && (
          <>
            <Divider className={styles.divider} />
            <Text className={styles.subheading}>Footer buttons</Text>
            <Field label="Button 1 label">
              <Input value={footerAction1} onChange={(_, d) => setFooterAction1(d.value)} />
            </Field>
            <Field label="Button 2 label">
              <Input value={footerAction2} onChange={(_, d) => setFooterAction2(d.value)} />
            </Field>
          </>
        )}
        <Divider className={styles.divider} />
        <Text className={styles.subheading}>Preview Icon</Text>
        <div className={styles.iconGrid}>
          {iconOptions.slice(0, 20).map((opt) => (
            <div
              key={opt.name}
              className={`${styles.iconOption} ${selectedIcon === opt.name ? styles.iconOptionActive : ''}`}
              onClick={() => setSelectedIcon(opt.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedIcon(opt.name)}
              title={opt.name}
            >
              {opt.icon ?? <span style={{ fontSize: '12px', lineHeight: 1 }}>∅</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className={styles.preview}>
        <Text className={styles.previewLabel}>Live Preview</Text>
        <Card appearance={appearance} style={{ width: '260px' }}>
          {showPreview && (
            <div
              style={{
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: tokens.colorBrandBackground2,
                borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
                fontSize: '36px',
                color: tokens.colorBrandForeground1,
              }}
            >
              {currentIcon}
            </div>
          )}
          <div style={{ padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <Text weight="semibold" block>{cardTitle}</Text>
                <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{cardDescription}</Caption1>
              </div>
              {showBadge && badgeText && (
                <Badge appearance="tint" color={badgeColor}>{badgeText}</Badge>
              )}
            </div>
            <Text
              size={200}
              style={{ color: tokens.colorNeutralForeground2, marginTop: tokens.spacingVerticalXS, display: 'block' }}
            >
              {cardBody}
            </Text>
          </div>
          {showFooter && (
            <div
              style={{
                display: 'flex',
                gap: tokens.spacingHorizontalS,
                padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM} ${tokens.spacingVerticalM}`,
              }}
            >
              {footerAction1 && (
                <Button size="small" appearance="primary">{footerAction1}</Button>
              )}
              {footerAction2 && (
                <Button size="small" appearance="subtle">{footerAction2}</Button>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

// Avatar Playground
function AvatarPlayground() {
  const styles = useStyles();
  const [name, setName] = useState('Alice Johnson');
  const [shape, setShape] = useState<'circular' | 'square'>('circular');
  const [size, setSize] = useState(40);
  const [status, setStatus] = useState<'available' | 'away' | 'busy' | 'offline' | 'do-not-disturb' | 'out-of-office' | 'none'>('available');
  const [color, setColor] = useState<'colorful' | 'neutral' | 'brand' | 'dark-red' | 'cranberry' | 'red' | 'pumpkin' | 'peach' | 'marigold' | 'gold' | 'forest' | 'seafoam' | 'teal' | 'steel' | 'blue' | 'royal-blue' | 'cornflower' | 'navy' | 'lavender' | 'purple' | 'grape' | 'lilac' | 'pink' | 'magenta'>('colorful');
  const [showBadge, setShowBadge] = useState(true);

  const avatarSizes = [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128] as const;
  const colorOptions = ['colorful', 'neutral', 'brand', 'dark-red', 'cranberry', 'red', 'pumpkin', 'peach', 'marigold', 'gold', 'forest', 'seafoam', 'teal', 'steel', 'blue', 'royal-blue', 'cornflower', 'navy', 'lavender', 'purple', 'grape', 'lilac', 'pink', 'magenta'] as const;

  return (
    <div className={styles.playgroundLayout}>
      <div className={styles.controls}>
        <Text className={styles.subheading}>Configuration</Text>
        <Field label="Name">
          <Input value={name} onChange={(_, d) => setName(d.value)} placeholder="Full name..." />
        </Field>
        <Field label="Shape">
          <Select value={shape} onChange={(_, d) => setShape(d.value as 'circular' | 'square')}>
            <option value="circular">Circular</option>
            <option value="square">Square</option>
          </Select>
        </Field>
        <Field label={`Size: ${size}px`}>
          <Slider
            min={0}
            max={13}
            step={1}
            value={avatarSizes.indexOf(size as typeof avatarSizes[number])}
            onChange={(_, d) => setSize(avatarSizes[d.value])}
          />
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            {avatarSizes.join(' · ')}
          </Caption1>
        </Field>
        <Field label="Color">
          <Select value={color} onChange={(_, d) => setColor(d.value as typeof color)}>
            {colorOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </Field>
        <div className={styles.settingRow}>
          <Text>Show presence badge</Text>
          <Switch checked={showBadge} onChange={(_, d) => setShowBadge(d.checked)} />
        </div>
        {showBadge && (
          <Field label="Status">
            <Select
              value={status}
              onChange={(_, d) => setStatus(d.value as typeof status)}
            >
              {(['available', 'away', 'busy', 'offline', 'do-not-disturb', 'out-of-office', 'none'] as const).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </Field>
        )}
      </div>

      <div className={styles.preview} style={{ flexDirection: 'column', gap: tokens.spacingVerticalL }}>
        <Text className={styles.previewLabel}>Live Preview</Text>
        <Avatar
          name={name}
          size={size as 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128}
          shape={shape}
          color={color}
          badge={showBadge && status !== 'none' ? { status: status as 'available' | 'away' | 'busy' | 'offline' | 'do-not-disturb' | 'out-of-office' } : undefined}
        />
        <Divider />
        <div className={styles.avatarPlayground}>
          {avatarSizes.map((s) => (
            <Avatar
              key={s}
              name={name}
              size={s}
              shape={shape}
              color={color}
              badge={showBadge && status !== 'none' ? { status: status as 'available' | 'away' | 'busy' | 'offline' | 'do-not-disturb' | 'out-of-office' } : undefined}
            />
          ))}
        </div>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>All sizes: {avatarSizes.join(', ')}</Caption1>
      </div>
    </div>
  );
}

// Badge Playground
function BadgePlayground() {
  const styles = useStyles();
  const [text, setText] = useState('New');
  const [appearance, setAppearance] = useState<'filled' | 'ghost' | 'outline' | 'tint'>('filled');
  const [color, setColor] = useState<'brand' | 'danger' | 'important' | 'informative' | 'severe' | 'subtle' | 'success' | 'warning'>('brand');
  const [size, setSize] = useState<'tiny' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'>('medium');
  const [shape, setShape] = useState<'circular' | 'rounded' | 'square'>('circular');
  const [showIcon, setShowIcon] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('Star');
  const currentIcon = iconOptions.find((i) => i.name === selectedIcon)?.icon;

  return (
    <div className={styles.playgroundLayout}>
      <div className={styles.controls}>
        <Text className={styles.subheading}>Configuration</Text>
        <Field label="Badge text">
          <Input value={text} onChange={(_, d) => setText(d.value)} />
        </Field>
        <Field label="Appearance">
          <Select value={appearance} onChange={(_, d) => setAppearance(d.value as typeof appearance)}>
            {(['filled', 'ghost', 'outline', 'tint'] as const).map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </Select>
        </Field>
        <Field label="Color">
          <Select value={color} onChange={(_, d) => setColor(d.value as typeof color)}>
            {(['brand', 'danger', 'important', 'informative', 'severe', 'subtle', 'success', 'warning'] as const).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </Field>
        <Field label="Size">
          <Select value={size} onChange={(_, d) => setSize(d.value as typeof size)}>
            {(['tiny', 'extra-small', 'small', 'medium', 'large', 'extra-large'] as const).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <Field label="Shape">
          <Select value={shape} onChange={(_, d) => setShape(d.value as typeof shape)}>
            {(['circular', 'rounded', 'square'] as const).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </Select>
        </Field>
        <div className={styles.settingRow}>
          <Text>Show icon</Text>
          <Switch checked={showIcon} onChange={(_, d) => setShowIcon(d.checked)} />
        </div>
        {showIcon && (
          <>
            <Text size={200} className={styles.subheading}>Select Icon</Text>
            <div className={styles.iconGrid}>
              {iconOptions.slice(1, 21).map((opt) => (
                <div
                  key={opt.name}
                  className={`${styles.iconOption} ${selectedIcon === opt.name ? styles.iconOptionActive : ''}`}
                  onClick={() => setSelectedIcon(opt.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedIcon(opt.name)}
                  title={opt.name}
                >
                  {opt.icon}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.preview} style={{ flexDirection: 'column', gap: tokens.spacingVerticalL }}>
        <Text className={styles.previewLabel}>Live Preview</Text>
        <Badge
          appearance={appearance}
          color={color}
          size={size}
          shape={shape}
          icon={showIcon && currentIcon ? currentIcon : undefined}
        >
          {text}
        </Badge>
        <Divider />
        <Text className={styles.subheading} style={{ alignSelf: 'flex-start' }}>All colors preview</Text>
        <div className={styles.row}>
          {(['brand', 'danger', 'important', 'informative', 'severe', 'subtle', 'success', 'warning'] as const).map((c) => (
            <Badge key={c} appearance={appearance} color={c} size={size} shape={shape}>
              {c}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ComponentPlaygroundPage() {
  const styles = useStyles();
  const [activeCheckboxes, setActiveCheckboxes] = useState<string[]>(['button']);

  const sections = [
    { id: 'button', label: 'Button Playground' },
    { id: 'card', label: 'Card Playground' },
    { id: 'avatar', label: 'Avatar Playground' },
    { id: 'badge', label: 'Badge Playground' },
  ];

  return (
    <div className={styles.page}>
      <Card>
        <div style={{ padding: tokens.spacingVerticalM }}>
          <Text weight="semibold" size={300} block style={{ marginBottom: tokens.spacingVerticalS }}>
            Select playgrounds to show:
          </Text>
          <div className={styles.row}>
            {sections.map((s) => (
              <Checkbox
                key={s.id}
                label={s.label}
                checked={activeCheckboxes.includes(s.id)}
                onChange={(_, d) =>
                  setActiveCheckboxes((prev) =>
                    d.checked
                      ? [...prev, s.id]
                      : prev.filter((id) => id !== s.id),
                  )
                }
              />
            ))}
          </div>
        </div>
      </Card>

      {activeCheckboxes.includes('button') && (
        <SectionCard title="Button Playground">
          <ButtonPlayground />
        </SectionCard>
      )}
      {activeCheckboxes.includes('card') && (
        <SectionCard title="Card Playground">
          <CardPlayground />
        </SectionCard>
      )}
      {activeCheckboxes.includes('avatar') && (
        <SectionCard title="Avatar Playground">
          <AvatarPlayground />
        </SectionCard>
      )}
      {activeCheckboxes.includes('badge') && (
        <SectionCard title="Badge Playground">
          <BadgePlayground />
        </SectionCard>
      )}
    </div>
  );
}
