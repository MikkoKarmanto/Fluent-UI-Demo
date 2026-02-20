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
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  MoreHorizontal20Regular,
  Open20Regular,
  Share20Regular,
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
  card: {
    width: '240px',
  },
  cardPreview: {
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightBold,
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

export function LayoutPage() {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      {/* Accordion */}
      <SectionCard title="Accordion">
        <div className={styles.column}>
          <Text className={styles.subheading}>Single Expand</Text>
          <Accordion>
            <AccordionItem value="1">
              <AccordionHeader>Section 1</AccordionHeader>
              <AccordionPanel>
                <Text>Content for Section 1. Accordions are used to collapse and expand content sections.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionHeader>Section 2</AccordionHeader>
              <AccordionPanel>
                <Text>Content for Section 2. You can have any content here.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionHeader>Section 3</AccordionHeader>
              <AccordionPanel>
                <Text>Content for Section 3. This section demonstrates the accordion pattern.</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Multiple Expand</Text>
          <Accordion multiple collapsible>
            <AccordionItem value="a">
              <AccordionHeader expandIconPosition="end">Features</AccordionHeader>
              <AccordionPanel>
                <Text>Multiple sections can be open at the same time.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionHeader expandIconPosition="end">Customization</AccordionHeader>
              <AccordionPanel>
                <Text>The expand icon can be placed at the start or end.</Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionHeader expandIconPosition="end">Accessibility</AccordionHeader>
              <AccordionPanel>
                <Text>Accordions are fully accessible with keyboard navigation.</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
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

      {/* Card */}
      <SectionCard title="Card">
        <div className={styles.cardContainer}>
          {/* Basic Card */}
          <Card className={styles.card}>
            <CardHeader
              image={<Avatar />}
              header={<Text weight="semibold">Basic Card</Text>}
              description="Card description"
              action={<Button icon={<MoreHorizontal20Regular />} appearance="transparent" />}
            />
            <Text>This is a simple card with a header and content.</Text>
          </Card>

          {/* Card with Preview */}
          <Card className={styles.card}>
            <CardPreview>
              <div className={styles.cardPreview}>Preview</div>
            </CardPreview>
            <CardHeader
              header={<Text weight="semibold">Card with Preview</Text>}
              description="With image preview"
            />
            <CardFooter>
              <Button icon={<Open20Regular />} size="small">Open</Button>
              <Button icon={<Share20Regular />} size="small">Share</Button>
            </CardFooter>
          </Card>

          {/* Clickable Card */}
          <Card className={styles.card} onClick={() => alert('Card clicked!')}>
            <CardHeader
              header={<Text weight="semibold">Interactive Card</Text>}
              description="Click me!"
              action={
                <Badge appearance="tint" color="success">
                  Active
                </Badge>
              }
            />
            <Text>Cards can be made interactive with onClick handlers.</Text>
          </Card>

          {/* Card Appearances */}
          <Card className={styles.card} appearance="filled-alternative">
            <CardHeader header={<Text weight="semibold">Filled Alt</Text>} />
            <Text>appearance="filled-alternative"</Text>
          </Card>

          <Card className={styles.card} appearance="outline">
            <CardHeader header={<Text weight="semibold">Outline Card</Text>} />
            <Text>appearance="outline"</Text>
          </Card>

          <Card className={styles.card} appearance="subtle">
            <CardHeader header={<Text weight="semibold">Subtle Card</Text>} />
            <Text>appearance="subtle"</Text>
          </Card>
        </div>
        <Divider className={styles.divider} />
        <div className={styles.column}>
          <Text className={styles.subheading}>Clickable Card (styled link)</Text>
          <Card className={styles.card} onClick={() => {}}>
            <CardHeader
              header={<Text weight="semibold">Clickable Card</Text>}
              description="Navigates on click"
            />
            <Text>Cards can be used as navigable items using onClick.</Text>
          </Card>
        </div>
      </SectionCard>
    </div>
  );
}
