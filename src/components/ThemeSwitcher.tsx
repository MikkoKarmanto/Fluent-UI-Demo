import {
  Select,
  Label,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { useTheme, themes } from '../context/ThemeContext';
import type { ThemeName } from '../context/ThemeContext';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  label: {
    whiteSpace: 'nowrap',
    color: tokens.colorNeutralForegroundInverted,
    fontWeight: tokens.fontWeightSemibold,
  },
});

export function ThemeSwitcher() {
  const { themeName, setThemeName } = useTheme();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Label htmlFor="theme-select" className={styles.label}>
        Theme:
      </Label>
      <Select
        id="theme-select"
        value={themeName}
        onChange={(_, data) => setThemeName(data.value as ThemeName)}
        size="small"
      >
        {Object.entries(themes).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  );
}
