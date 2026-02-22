import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Card,
  CardHeader,
  CardPreview,
  CardFooter,
  Divider,
  Button,
  Badge,
  Text,
  Avatar,
  Switch,
  Slider,
  Field,
  Input,
  makeStyles,
  tokens,
  Body1,
  Caption1,
  Link,
  PresenceBadge,
} from '@fluentui/react-components';
import {
  MoreHorizontal20Regular,
  Open20Regular,
  Share20Regular,
  Heart20Regular,
  HeartFilled,
  Bookmark20Regular,
  BookmarkFilled,
  ArrowDownload20Regular,
  Cart20Regular,
  PersonAdd20Regular,
  Mail20Regular,
  Call20Regular,
  Star20Filled,
  Star20Regular,
  Document20Regular,
  Image20Regular,
  VideoClip20Regular,
  Calendar20Regular,
  Tag20Regular,
  Eye20Regular,
  ThumbLike20Regular,
  Comment20Regular,
  Settings20Regular,
  Alert20Regular,
  Shield20Regular,
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
    gap: tokens.spacingHorizontalM,
    alignItems: 'flex-start',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalL,
  },
  // Blog post card
  blogCard: {
    width: '280px',
  },
  blogPreview: {
    height: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '48px',
  },
  blogMeta: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    alignItems: 'center',
    marginBottom: tokens.spacingVerticalXS,
  },
  blogTags: {
    display: 'flex',
    gap: tokens.spacingHorizontalXS,
    flexWrap: 'wrap',
    marginTop: tokens.spacingVerticalXS,
  },
  blogStats: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    alignItems: 'center',
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    marginTop: tokens.spacingVerticalXS,
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
  },
  // Product card
  productCard: {
    width: '220px',
  },
  productPreview: {
    height: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colorNeutralBackground2,
    fontSize: '64px',
  },
  productPrice: {
    display: 'flex',
    alignItems: 'baseline',
    gap: tokens.spacingHorizontalXS,
  },
  productRating: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorPaletteGoldForeground2,
  },
  // Profile card
  profileCard: {
    width: '240px',
  },
  profileBanner: {
    height: '70px',
    borderRadius: `${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0`,
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: tokens.spacingVerticalXS,
    padding: `0 ${tokens.spacingHorizontalM} ${tokens.spacingVerticalM}`,
    textAlign: 'center',
  },
  profileAvatar: {
    marginTop: '-24px',
    border: `3px solid ${tokens.colorNeutralBackground1}`,
    borderRadius: '50%',
  },
  profileActions: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    justifyContent: 'center',
    marginTop: tokens.spacingVerticalS,
  },
  profileStats: {
    display: 'flex',
    gap: tokens.spacingHorizontalL,
    marginTop: tokens.spacingVerticalS,
  },
  profileStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // File card
  fileCard: {
    width: '220px',
  },
  fileIcon: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borderRadiusMedium,
    fontSize: '24px',
    flexShrink: 0,
  },
  fileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
  },
  // Notification card
  notifCard: {
    width: '100%',
    maxWidth: '500px',
  },
  notifRow: {
    display: 'flex',
    gap: tokens.spacingHorizontalM,
    alignItems: 'flex-start',
    padding: `${tokens.spacingVerticalS} 0`,
  },
  notifIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  notifContent: {
    flex: 1,
  },
  notifTime: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase100,
    whiteSpace: 'nowrap',
  },
  divider: {
    marginTop: tokens.spacingVerticalS,
    marginBottom: tokens.spacingVerticalS,
  },
  subheading: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  // Accordion settings
  settingRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${tokens.spacingVerticalXS} 0`,
  },
  settingInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
});

// Star rating helper
function StarRating({ value }: { value: number }) {
  const styles = useStyles();
  return (
    <div className={styles.productRating}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= value ? (
          <Star20Filled key={i} style={{ fontSize: '14px' }} />
        ) : (
          <Star20Regular key={i} style={{ fontSize: '14px', color: tokens.colorNeutralForeground3 }} />
        ),
      )}
      <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>({value}.0)</Caption1>
    </div>
  );
}

// Blog Post Card
function BlogPostCard({
  emoji,
  title,
  author,
  date,
  excerpt,
  tags,
  views,
  likes,
  comments,
  bgColor,
}: {
  emoji: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  bgColor: string;
}) {
  const styles = useStyles();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <Card className={styles.blogCard}>
      <CardPreview>
        <div className={styles.blogPreview} style={{ backgroundColor: bgColor }}>
          {emoji}
        </div>
      </CardPreview>
      <div style={{ padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM} 0` }}>
        <div className={styles.blogTags}>
          {tags.map((tag) => (
            <Badge key={tag} appearance="tint" color="brand" size="small" icon={<Tag20Regular />}>
              {tag}
            </Badge>
          ))}
        </div>
        <Text weight="semibold" size={400} block style={{ marginTop: tokens.spacingVerticalXS }}>
          {title}
        </Text>
        <div className={styles.blogMeta} style={{ marginTop: tokens.spacingVerticalXS }}>
          <Avatar name={author} size={20} />
          <Caption1>{author}</Caption1>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>·</Caption1>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{date}</Caption1>
        </div>
        <Body1 style={{ color: tokens.colorNeutralForeground2, fontSize: tokens.fontSizeBase200 }}>
          {excerpt}
        </Body1>
        <div className={styles.blogStats}>
          <span className={styles.statItem}>
            <Eye20Regular style={{ fontSize: '14px' }} />
            {views}
          </span>
          <span className={styles.statItem}>
            <ThumbLike20Regular style={{ fontSize: '14px' }} />
            {likes + (liked ? 1 : 0)}
          </span>
          <span className={styles.statItem}>
            <Comment20Regular style={{ fontSize: '14px' }} />
            {comments}
          </span>
        </div>
      </div>
      <CardFooter style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: tokens.spacingHorizontalXS }}>
          <Button
            appearance="subtle"
            size="small"
            icon={liked ? <HeartFilled style={{ color: tokens.colorPaletteRedForeground3 }} /> : <Heart20Regular />}
            onClick={() => setLiked(!liked)}
          >
            Like
          </Button>
          <Button
            appearance="subtle"
            size="small"
            icon={saved ? <BookmarkFilled style={{ color: tokens.colorBrandForeground1 }} /> : <Bookmark20Regular />}
            onClick={() => setSaved(!saved)}
          >
            Save
          </Button>
        </div>
        <Button appearance="primary" size="small" icon={<Open20Regular />}>
          Read
        </Button>
      </CardFooter>
    </Card>
  );
}

// Product Card
function ProductCard({
  emoji,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
}: {
  emoji: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  badge?: string;
}) {
  const styles = useStyles();
  const [inCart, setInCart] = useState(false);

  return (
    <Card className={styles.productCard}>
      <CardPreview>
        <div className={styles.productPreview}>{emoji}</div>
        {badge && (
          <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
            <Badge color="danger" appearance="filled">
              {badge}
            </Badge>
          </div>
        )}
      </CardPreview>
      <div style={{ padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}` }}>
        <Text weight="semibold" block>
          {name}
        </Text>
        <StarRating value={rating} />
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{reviews} reviews</Caption1>
        <div className={styles.productPrice} style={{ marginTop: tokens.spacingVerticalXS }}>
          <Text weight="bold" size={500} style={{ color: tokens.colorBrandForeground1 }}>
            {price}
          </Text>
          {originalPrice && (
            <Caption1
              style={{
                textDecoration: 'line-through',
                color: tokens.colorNeutralForeground3,
              }}
            >
              {originalPrice}
            </Caption1>
          )}
        </div>
      </div>
      <CardFooter>
        <Button
          appearance={inCart ? 'secondary' : 'primary'}
          size="small"
          icon={<Cart20Regular />}
          onClick={() => setInCart(!inCart)}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}

// Profile Card
function ProfileCard({
  name,
  role,
  company,
  followers,
  following,
  posts,
  bannerColor,
  status,
}: {
  name: string;
  role: string;
  company: string;
  followers: number;
  following: number;
  posts: number;
  bannerColor: string;
  status: 'available' | 'away' | 'busy' | 'offline';
}) {
  const styles = useStyles();
  const [isFollowing, setFollowing] = useState(false);

  return (
    <Card className={styles.profileCard}>
      <div
        className={styles.profileBanner}
        style={{ background: bannerColor }}
      />
      <div className={styles.profileInfo}>
        <Avatar
          name={name}
          size={48}
          className={styles.profileAvatar}
          badge={{ status }}
        />
        <Text weight="semibold" size={400}>
          {name}
        </Text>
        <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
          {role} · {company}
        </Caption1>
        <div className={styles.profileStats}>
          <div className={styles.profileStat}>
            <Text weight="semibold">{posts}</Text>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Posts</Caption1>
          </div>
          <div className={styles.profileStat}>
            <Text weight="semibold">{followers + (isFollowing ? 1 : 0)}</Text>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Followers</Caption1>
          </div>
          <div className={styles.profileStat}>
            <Text weight="semibold">{following}</Text>
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>Following</Caption1>
          </div>
        </div>
        <div className={styles.profileActions}>
          <Button
            appearance={isFollowing ? 'secondary' : 'primary'}
            size="small"
            icon={<PersonAdd20Regular />}
            onClick={() => setFollowing(!isFollowing)}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
          <Button size="small" icon={<Mail20Regular />} />
          <Button size="small" icon={<Call20Regular />} />
        </div>
      </div>
    </Card>
  );
}

// File Card
type FileType = 'document' | 'image' | 'video';

function FileCard({
  name,
  size,
  modified,
  type,
  sharedWith,
}: {
  name: string;
  size: string;
  modified: string;
  type: FileType;
  sharedWith?: number;
}) {
  const styles = useStyles();
  const fileConfig: Record<FileType, { icon: React.ReactNode; bg: string; color: string }> = {
    document: {
      icon: <Document20Regular />,
      bg: tokens.colorPaletteBlueBorderActive,
      color: '#fff',
    },
    image: {
      icon: <Image20Regular />,
      bg: tokens.colorPaletteGreenBorderActive,
      color: '#fff',
    },
    video: {
      icon: <VideoClip20Regular />,
      bg: tokens.colorPaletteMarigoldBorderActive,
      color: '#fff',
    },
  };
  const cfg = fileConfig[type];

  return (
    <Card className={styles.fileCard}>
      <div className={styles.fileInfo}>
        <div className={styles.fileIcon} style={{ backgroundColor: cfg.bg, color: cfg.color }}>
          {cfg.icon}
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Text
            weight="semibold"
            block
            truncate
            style={{ fontSize: tokens.fontSizeBase300 }}
            title={name}
          >
            {name}
          </Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            {size} · {modified}
          </Caption1>
          {sharedWith !== undefined && (
            <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
              Shared with {sharedWith} people
            </Caption1>
          )}
        </div>
        <Button appearance="transparent" icon={<MoreHorizontal20Regular />} size="small" />
      </div>
      <Divider />
      <CardFooter style={{ padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}` }}>
        <Button size="small" icon={<ArrowDownload20Regular />}>Download</Button>
        <Button size="small" icon={<Share20Regular />} appearance="subtle">Share</Button>
      </CardFooter>
    </Card>
  );
}

// Notification Feed Card
interface NotifItem {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

const notifications: NotifItem[] = [
  {
    id: 1,
    icon: <PersonAdd20Regular />,
    iconBg: tokens.colorPaletteBlueBorderActive,
    iconColor: '#fff',
    title: 'New follower',
    message: 'Jane Smith started following you.',
    time: '2m ago',
    unread: true,
  },
  {
    id: 2,
    icon: <ThumbLike20Regular />,
    iconBg: tokens.colorPaletteGreenBorderActive,
    iconColor: '#fff',
    title: 'Post liked',
    message: 'Your post "Building with Fluent UI" got 42 new likes.',
    time: '15m ago',
    unread: true,
  },
  {
    id: 3,
    icon: <Comment20Regular />,
    iconBg: tokens.colorPaletteMarigoldBorderActive,
    iconColor: '#fff',
    title: 'New comment',
    message: 'Alex commented: "Great article, very helpful!"',
    time: '1h ago',
    unread: false,
  },
  {
    id: 4,
    icon: <Calendar20Regular />,
    iconBg: tokens.colorPaletteLilacBorderActive,
    iconColor: '#fff',
    title: 'Meeting reminder',
    message: 'Team standup starts in 30 minutes.',
    time: '2h ago',
    unread: false,
  },
];

function NotificationFeedCard() {
  const styles = useStyles();
  const [items, setItems] = useState(notifications);
  const unreadCount = items.filter((n) => n.unread).length;

  const markAllRead = () => setItems(items.map((n) => ({ ...n, unread: false })));

  return (
    <Card className={styles.notifCard}>
      <CardHeader
        header={
          <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS }}>
            <Text weight="semibold">Notifications</Text>
            {unreadCount > 0 && (
              <Badge color="danger" size="small">
                {unreadCount}
              </Badge>
            )}
          </div>
        }
        action={
          <Button
            appearance="subtle"
            size="small"
            onClick={markAllRead}
            disabled={unreadCount === 0}
          >
            Mark all read
          </Button>
        }
      />
      <Divider />
      {items.map((notif, i) => (
        <div key={notif.id}>
          {i > 0 && <Divider />}
          <div
            className={styles.notifRow}
            style={{
              backgroundColor: notif.unread
                ? tokens.colorNeutralBackground2
                : 'transparent',
              padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
              cursor: 'pointer',
            }}
            onClick={() =>
              setItems(items.map((n) => (n.id === notif.id ? { ...n, unread: false } : n)))
            }
          >
            <div
              className={styles.notifIcon}
              style={{ backgroundColor: notif.iconBg, color: notif.iconColor }}
            >
              {notif.icon}
            </div>
            <div className={styles.notifContent}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Text weight={notif.unread ? 'semibold' : 'regular'} size={300}>
                  {notif.title}
                </Text>
                <Caption1 className={styles.notifTime}>{notif.time}</Caption1>
              </div>
              <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>{notif.message}</Caption1>
            </div>
            {notif.unread && (
              <PresenceBadge
                status="available"
                size="tiny"
                style={{ flexShrink: 0, alignSelf: 'center' }}
              />
            )}
          </div>
        </div>
      ))}
      <CardFooter style={{ justifyContent: 'center' }}>
        <Link>View all notifications</Link>
      </CardFooter>
    </Card>
  );
}

// Settings panel component used inside accordion
function AppearanceSettings() {
  const styles = useStyles();
  const [compactMode, setCompactMode] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [fontSize, setFontSize] = useState(14);

  return (
    <div className={styles.column}>
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Compact mode</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Reduce spacing for a denser layout
          </Caption1>
        </div>
        <Switch checked={compactMode} onChange={(_, d) => setCompactMode(d.checked)} />
      </div>
      <Divider />
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Animations</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Enable UI transition animations
          </Caption1>
        </div>
        <Switch
          checked={animationsEnabled}
          onChange={(_, d) => setAnimationsEnabled(d.checked)}
        />
      </div>
      <Divider />
      <div className={styles.column}>
        <Field label={`Font size: ${fontSize}px`}>
          <Slider
            min={12}
            max={20}
            step={1}
            value={fontSize}
            onChange={(_, d) => setFontSize(d.value)}
          />
        </Field>
      </div>
    </div>
  );
}

function NotificationsSettings() {
  const styles = useStyles();
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [mentionNotif, setMentionNotif] = useState(true);
  const [digestFreq, setDigestFreq] = useState('daily');

  return (
    <div className={styles.column}>
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Email notifications</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Receive updates via email
          </Caption1>
        </div>
        <Switch checked={emailNotif} onChange={(_, d) => setEmailNotif(d.checked)} />
      </div>
      <Divider />
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Push notifications</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Browser push alerts
          </Caption1>
        </div>
        <Switch checked={pushNotif} onChange={(_, d) => setPushNotif(d.checked)} />
      </div>
      <Divider />
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Mentions only</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Only notify when @mentioned
          </Caption1>
        </div>
        <Switch checked={mentionNotif} onChange={(_, d) => setMentionNotif(d.checked)} />
      </div>
      <Divider />
      <div className={styles.column}>
        <Text>Digest frequency</Text>
        <div style={{ display: 'flex', gap: tokens.spacingHorizontalS }}>
          {['realtime', 'daily', 'weekly'].map((freq) => (
            <Button
              key={freq}
              size="small"
              appearance={digestFreq === freq ? 'primary' : 'outline'}
              onClick={() => setDigestFreq(freq)}
            >
              {freq.charAt(0).toUpperCase() + freq.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacySettings() {
  const styles = useStyles();
  const [profilePublic, setProfilePublic] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [allowTagging, setAllowTagging] = useState(true);

  return (
    <div className={styles.column}>
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Public profile</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Allow anyone to view your profile
          </Caption1>
        </div>
        <Switch checked={profilePublic} onChange={(_, d) => setProfilePublic(d.checked)} />
      </div>
      <Divider />
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Show activity status</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Let others see when you're online
          </Caption1>
        </div>
        <Switch checked={showActivity} onChange={(_, d) => setShowActivity(d.checked)} />
      </div>
      <Divider />
      <div className={styles.settingRow}>
        <div className={styles.settingInfo}>
          <Text>Allow tagging</Text>
          <Caption1 style={{ color: tokens.colorNeutralForeground3 }}>
            Others can tag you in posts
          </Caption1>
        </div>
        <Switch checked={allowTagging} onChange={(_, d) => setAllowTagging(d.checked)} />
      </div>
    </div>
  );
}

export function LayoutPage() {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    {
      value: 'faq1',
      question: 'What is Fluent UI React?',
      answer:
        'Fluent UI React is Microsoft\'s open-source React component library that implements the Fluent Design System. It provides accessible, themeable, and production-ready components for building modern web experiences.',
    },
    {
      value: 'faq2',
      question: 'How do I install Fluent UI React?',
      answer:
        'Run npm install @fluentui/react-components in your project. Then wrap your app with the FluentProvider component and pass a theme like webLightTheme. All components are exported from the single package.',
    },
    {
      value: 'faq3',
      question: 'Does it support dark mode?',
      answer:
        'Yes! Fluent UI ships with multiple built-in themes: webLightTheme, webDarkTheme, teamsLightTheme, teamsDarkTheme, and teamsHighContrastTheme. Simply swap the theme prop on FluentProvider to switch.',
    },
    {
      value: 'faq4',
      question: 'Is it accessible (ARIA)?',
      answer:
        'Accessibility is a first-class concern. All components implement WAI-ARIA patterns, support full keyboard navigation, and are tested with screen readers. Focus management and announcements are handled automatically.',
    },
    {
      value: 'faq5',
      question: 'Can I use it with Tauri?',
      answer:
        'Absolutely. Fluent UI React works in any React environment, including Tauri desktop apps. Since Tauri renders a web frontend in a native WebView, all standard web rendering applies.',
    },
  ];

  const filteredFaq = searchQuery
    ? faqItems.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqItems;

  return (
    <div className={styles.page}>
      {/* Accordion – FAQ */}
      <SectionCard title="Accordion – FAQ">
        <div className={styles.column}>
          <Field label="">
            <Input
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(_, d) => setSearchQuery(d.value)}
              contentBefore={<span style={{ color: tokens.colorNeutralForeground3 }}>🔍</span>}
            />
          </Field>
          {filteredFaq.length === 0 ? (
            <Text style={{ color: tokens.colorNeutralForeground3 }}>No results found.</Text>
          ) : (
            <Accordion collapsible>
              {filteredFaq.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionHeader>{item.question}</AccordionHeader>
                  <AccordionPanel>
                    <Text style={{ color: tokens.colorNeutralForeground2 }}>{item.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </SectionCard>

      {/* Accordion – App Settings Panel */}
      <SectionCard title="Accordion – Settings Panel">
        <Accordion multiple collapsible defaultOpenItems={['appearance']}>
          <AccordionItem value="appearance">
            <AccordionHeader
              icon={<Settings20Regular />}
              expandIconPosition="end"
            >
              Appearance
            </AccordionHeader>
            <AccordionPanel>
              <AppearanceSettings />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="notifications">
            <AccordionHeader
              icon={<Alert20Regular />}
              expandIconPosition="end"
            >
              Notifications
            </AccordionHeader>
            <AccordionPanel>
              <NotificationsSettings />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="privacy">
            <AccordionHeader
              icon={<Shield20Regular />}
              expandIconPosition="end"
            >
              Privacy & Security
            </AccordionHeader>
            <AccordionPanel>
              <PrivacySettings />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </SectionCard>

      {/* Card – Blog Posts */}
      <SectionCard title="Card – Blog Posts">
        <div className={styles.cardContainer}>
          <BlogPostCard
            emoji="⚛️"
            title="Getting Started with Fluent UI React v9"
            author="Alice Johnson"
            date="Feb 15"
            excerpt="Learn how to set up Fluent UI in your project and build your first accessible component."
            tags={['React', 'UI']}
            views={1420}
            likes={87}
            comments={14}
            bgColor={tokens.colorPaletteBlueBorderActive}
          />
          <BlogPostCard
            emoji="🦀"
            title="Building Desktop Apps with Tauri 2"
            author="Bob Smith"
            date="Feb 12"
            excerpt="Tauri 2 brings a new security model and multiwindow support. Let's explore what's new."
            tags={['Tauri', 'Rust']}
            views={3280}
            likes={215}
            comments={32}
            bgColor={tokens.colorPaletteMarigoldBorderActive}
          />
          <BlogPostCard
            emoji="🎨"
            title="Dark Mode Done Right"
            author="Carol White"
            date="Feb 8"
            excerpt="Implementing robust dark mode support with CSS tokens and the FluentProvider theme system."
            tags={['Design', 'CSS']}
            views={892}
            likes={44}
            comments={7}
            bgColor={tokens.colorPaletteLilacBorderActive}
          />
        </div>
      </SectionCard>

      {/* Card – Product Store */}
      <SectionCard title="Card – Product Store">
        <div className={styles.cardContainer}>
          <ProductCard
            emoji="🎧"
            name="Wireless Headphones Pro"
            price="$79.99"
            originalPrice="$99.99"
            rating={4}
            reviews={312}
            badge="Sale"
          />
          <ProductCard
            emoji="⌨️"
            name="Mechanical Keyboard TKL"
            price="$129.00"
            rating={5}
            reviews={87}
          />
          <ProductCard
            emoji="🖱️"
            name="Ergonomic Mouse"
            price="$49.95"
            originalPrice="$59.95"
            rating={4}
            reviews={56}
            badge="-17%"
          />
          <ProductCard
            emoji="💡"
            name="LED Desk Lamp"
            price="$34.00"
            rating={3}
            reviews={21}
          />
        </div>
      </SectionCard>

      {/* Card – Team Profiles */}
      <SectionCard title="Card – Team Profiles">
        <div className={styles.cardContainer}>
          <ProfileCard
            name="Alice Johnson"
            role="Senior Engineer"
            company="Contoso"
            followers={1240}
            following={310}
            posts={47}
            bannerColor={`linear-gradient(135deg, ${tokens.colorBrandBackground}, ${tokens.colorPaletteBlueBorderActive})`}
            status="available"
          />
          <ProfileCard
            name="Bob Smith"
            role="UX Designer"
            company="Fabrikam"
            followers={843}
            following={220}
            posts={31}
            bannerColor={`linear-gradient(135deg, ${tokens.colorPaletteGreenBorderActive}, ${tokens.colorPaletteTealBorderActive})`}
            status="busy"
          />
          <ProfileCard
            name="Carol White"
            role="Product Manager"
            company="Contoso"
            followers={2105}
            following={415}
            posts={89}
            bannerColor={`linear-gradient(135deg, ${tokens.colorPaletteMarigoldBorderActive}, ${tokens.colorPaletteGoldBorderActive})`}
            status="away"
          />
        </div>
      </SectionCard>

      {/* Card – File Explorer */}
      <SectionCard title="Card – File Explorer">
        <div className={styles.cardContainer}>
          <FileCard
            name="Q1 Financial Report.docx"
            size="2.4 MB"
            modified="Today"
            type="document"
            sharedWith={5}
          />
          <FileCard
            name="Product Mockups.png"
            size="8.1 MB"
            modified="Yesterday"
            type="image"
            sharedWith={3}
          />
          <FileCard
            name="Demo Recording.mp4"
            size="142 MB"
            modified="Feb 18"
            type="video"
          />
          <FileCard
            name="Meeting Notes.docx"
            size="156 KB"
            modified="Feb 17"
            type="document"
            sharedWith={12}
          />
        </div>
      </SectionCard>

      {/* Card – Notification Feed */}
      <SectionCard title="Card – Notification Feed">
        <NotificationFeedCard />
      </SectionCard>

      {/* Divider */}
      <SectionCard title="Divider">
        <div className={styles.column}>
          <Text className={styles.subheading}>Horizontal</Text>
          <Text>Content above</Text>
          <Divider />
          <Text>Content below</Text>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>With content</Text>
          <Divider>Section Title</Divider>
          <Text>Content after titled divider</Text>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Appearance variants</Text>
          <Divider appearance="strong">Strong</Divider>
          <Divider appearance="brand">Brand</Divider>
          <Divider appearance="subtle">Subtle</Divider>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Vertical</Text>
          <div style={{ display: 'flex', height: '60px', alignItems: 'center', gap: tokens.spacingHorizontalM }}>
            <Text>Left</Text>
            <Divider vertical />
            <Text>Middle</Text>
            <Divider vertical />
            <Text>Right</Text>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
