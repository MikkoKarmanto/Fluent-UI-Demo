import { NavLink, useLocation } from 'react-router-dom';
import {
  makeStyles,
  tokens,
  Text,
  mergeClasses,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  nav: {
    width: '220px',
    minWidth: '220px',
    height: '100%',
    backgroundColor: tokens.colorNeutralBackground3,
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    paddingTop: tokens.spacingVerticalM,
  },
  sectionTitle: {
    display: 'block',
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
    color: tokens.colorNeutralForeground3,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase200,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  navItem: {
    display: 'block',
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    textDecoration: 'none',
    color: tokens.colorNeutralForeground2,
    borderRadius: tokens.borderRadiusMedium,
    marginLeft: tokens.spacingHorizontalS,
    marginRight: tokens.spacingHorizontalS,
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1,
    },
  },
  navItemActive: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  divider: {
    height: '1px',
    backgroundColor: tokens.colorNeutralStroke2,
    margin: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
  },
});

interface NavSection {
  title: string;
  items: { label: string; path: string }[];
}

const navSections: NavSection[] = [
  {
    title: 'Inputs',
    items: [
      { label: 'Basic Inputs', path: '/basic-inputs' },
      { label: 'Selection', path: '/selection' },
    ],
  },
  {
    title: 'Navigation',
    items: [{ label: 'Navigation', path: '/navigation' }],
  },
  {
    title: 'Feedback',
    items: [{ label: 'Feedback', path: '/feedback' }],
  },
  {
    title: 'Layout',
    items: [
      { label: 'Layout', path: '/layout' },
      { label: 'Overlays', path: '/overlays' },
    ],
  },
  {
    title: 'Content',
    items: [
      { label: 'Typography', path: '/typography' },
      { label: 'Data Display', path: '/data-display' },
    ],
  },
  {
    title: 'Explore',
    items: [
      { label: 'Icons', path: '/icons' },
      { label: 'Playground', path: '/playground' },
    ],
  },
];

export function Sidebar() {
  const styles = useStyles();
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      {navSections.map((section, i) => (
        <div key={section.title} className={styles.section}>
          {i > 0 && <div className={styles.divider} />}
          <Text className={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={mergeClasses(
                styles.navItem,
                location.pathname === item.path ? styles.navItemActive : '',
              )}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  );
}
