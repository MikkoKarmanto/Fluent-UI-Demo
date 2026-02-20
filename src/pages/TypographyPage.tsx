import {
  Text,
  Link,
  Display,
  LargeTitle,
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption1,
  Caption2,
  Divider,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
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
    alignItems: 'baseline',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
  },
  tableRow: {
    display: 'flex',
    gap: tokens.spacingHorizontalL,
    alignItems: 'baseline',
    padding: `${tokens.spacingVerticalXS} 0`,
  },
  nameCell: {
    width: '120px',
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    fontFamily: 'monospace',
    flexShrink: 0,
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

export function TypographyPage() {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      {/* Type Ramp */}
      <SectionCard title="Type Ramp">
        <div className={styles.column}>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Display</span>
            <Display>Display</Display>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>LargeTitle</span>
            <LargeTitle>Large Title</LargeTitle>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Title1</span>
            <Title1>Title 1</Title1>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Title2</span>
            <Title2>Title 2</Title2>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Title3</span>
            <Title3>Title 3</Title3>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Subtitle1</span>
            <Subtitle1>Subtitle 1</Subtitle1>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Subtitle2</span>
            <Subtitle2>Subtitle 2</Subtitle2>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Body1</span>
            <Body1>Body 1 - The quick brown fox jumps over the lazy dog</Body1>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Body2</span>
            <Body2>Body 2 - The quick brown fox jumps over the lazy dog</Body2>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Caption1</span>
            <Caption1>Caption 1 - The quick brown fox jumps over the lazy dog</Caption1>
          </div>
          <div className={styles.tableRow}>
            <span className={styles.nameCell}>Caption2</span>
            <Caption2>Caption 2 - The quick brown fox jumps over the lazy dog</Caption2>
          </div>
        </div>
      </SectionCard>

      {/* Text Weights */}
      <SectionCard title="Text Weights">
        <div className={styles.column}>
          <div className={styles.row}>
            <Text weight="regular">Regular weight</Text>
            <Text weight="medium">Medium weight</Text>
            <Text weight="semibold">Semibold weight</Text>
            <Text weight="bold">Bold weight</Text>
          </div>
        </div>
      </SectionCard>

      {/* Text Sizes */}
      <SectionCard title="Text Sizes">
        <div className={styles.column}>
          <div className={styles.row}>
            <Text size={100}>Size 100</Text>
            <Text size={200}>Size 200</Text>
            <Text size={300}>Size 300</Text>
            <Text size={400}>Size 400</Text>
            <Text size={500}>Size 500</Text>
            <Text size={600}>Size 600</Text>
            <Text size={700}>Size 700</Text>
            <Text size={800}>Size 800</Text>
            <Text size={900}>Size 900</Text>
            <Text size={1000}>Size 1000</Text>
          </div>
        </div>
      </SectionCard>

      {/* Text Modifiers */}
      <SectionCard title="Text Modifiers">
        <div className={styles.column}>
          <div className={styles.row}>
            <Text italic>Italic text</Text>
            <Text underline>Underline text</Text>
            <Text strikethrough>Strikethrough text</Text>
            <Text truncate style={{ maxWidth: '150px', display: 'block' }}>
              This text is truncated when it exceeds the width
            </Text>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Alignment</Text>
          <div style={{ width: '300px', border: `1px solid ${tokens.colorNeutralStroke1}`, borderRadius: tokens.borderRadiusMedium, padding: tokens.spacingHorizontalM }}>
            <Text align="start" block>Start aligned</Text>
            <Text align="center" block>Center aligned</Text>
            <Text align="end" block>End aligned</Text>
            <Text align="justify" block>
              Justified alignment: The quick brown fox jumps over the lazy dog.
            </Text>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Font</Text>
          <div className={styles.row}>
            <Text font="base">Base font (default)</Text>
            <Text font="monospace">Monospace font</Text>
            <Text font="numeric">Numeric font: 0123456789</Text>
          </div>
        </div>
      </SectionCard>

      {/* Link */}
      <SectionCard title="Link">
        <div className={styles.column}>
          <div className={styles.row}>
            <Link href="#">Default Link</Link>
            <Link href="#" appearance="subtle">Subtle Link</Link>
            <Link href="#" inline>Inline Link (in text context)</Link>
            <Link href="#" disabled>Disabled Link</Link>
          </div>
          <Divider className={styles.divider} />
          <Text>
            Text with an <Link href="#" inline>inline link</Link> inside a paragraph.
            Links can be embedded naturally within <Link href="#" inline>body text</Link>.
          </Text>
        </div>
      </SectionCard>
    </div>
  );
}
