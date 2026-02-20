import { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverSurface,
  Tooltip,
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  OverlayDrawer,
  Text,
  makeStyles,
  tokens,
  Divider,
  Input,
  Field,
} from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';
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
  popoverContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalM,
    maxWidth: '300px',
  },
  divider: {
    marginTop: tokens.spacingVerticalS,
    marginBottom: tokens.spacingVerticalS,
  },
  subheading: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  inlineDrawerContainer: {
    display: 'flex',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    height: '300px',
    overflow: 'hidden',
  },
  drawerContent: {
    padding: tokens.spacingVerticalM,
    flex: 1,
  },
});

export function OverlaysPage() {
  const styles = useStyles();
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [inlineOpen, setInlineOpen] = useState(false);

  return (
    <div className={styles.page}>
      {/* Tooltip */}
      <SectionCard title="Tooltip">
        <div className={styles.column}>
          <div className={styles.row}>
            <Tooltip content="This is a tooltip" relationship="label">
              <Button>Hover me (label)</Button>
            </Tooltip>
            <Tooltip content="Descriptive tooltip with more info" relationship="description">
              <Button>Hover me (description)</Button>
            </Tooltip>
            <Tooltip content="Custom positioning" positioning="above-start" relationship="label">
              <Button>Above Start</Button>
            </Tooltip>
            <Tooltip content="Custom positioning" positioning="below-end" relationship="label">
              <Button>Below End</Button>
            </Tooltip>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>With delay</Text>
          <div className={styles.row}>
            <Tooltip content="Instant tooltip" showDelay={0} relationship="label">
              <Button>Instant (0ms)</Button>
            </Tooltip>
            <Tooltip content="Default delay tooltip" relationship="label">
              <Button>Default Delay</Button>
            </Tooltip>
            <Tooltip content="Slow tooltip" showDelay={1000} relationship="label">
              <Button>Slow (1000ms)</Button>
            </Tooltip>
          </div>
        </div>
      </SectionCard>

      {/* Popover */}
      <SectionCard title="Popover">
        <div className={styles.column}>
          <div className={styles.row}>
            <Popover>
              <PopoverTrigger>
                <Button>Simple Popover</Button>
              </PopoverTrigger>
              <PopoverSurface>
                <div className={styles.popoverContent}>
                  <Text weight="semibold">Popover Title</Text>
                  <Text>This is a simple popover with some content.</Text>
                </div>
              </PopoverSurface>
            </Popover>

            <Popover trapFocus>
              <PopoverTrigger>
                <Button appearance="primary">Trap Focus</Button>
              </PopoverTrigger>
              <PopoverSurface>
                <div className={styles.popoverContent}>
                  <Text weight="semibold">Focusable Popover</Text>
                  <Field label="Name">
                    <Input placeholder="Enter name..." />
                  </Field>
                  <Button appearance="primary" size="small">Submit</Button>
                </div>
              </PopoverSurface>
            </Popover>

            <Popover withArrow>
              <PopoverTrigger>
                <Button>With Arrow</Button>
              </PopoverTrigger>
              <PopoverSurface>
                <div className={styles.popoverContent}>
                  <Text>This popover has an arrow pointing to the trigger.</Text>
                </div>
              </PopoverSurface>
            </Popover>
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Positions</Text>
          <div className={styles.row}>
            {(['above', 'below', 'before', 'after'] as const).map((pos) => (
              <Popover key={pos} positioning={pos}>
                <PopoverTrigger>
                  <Button>{pos.charAt(0).toUpperCase() + pos.slice(1)}</Button>
                </PopoverTrigger>
                <PopoverSurface>
                  <div style={{ padding: tokens.spacingHorizontalM }}>
                    <Text>Position: {pos}</Text>
                  </div>
                </PopoverSurface>
              </Popover>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Drawer */}
      <SectionCard title="Drawer">
        <div className={styles.column}>
          {/* Overlay Drawer */}
          <Text className={styles.subheading}>Overlay Drawer</Text>
          <div className={styles.row}>
            <Button appearance="primary" onClick={() => setOverlayOpen(true)}>
              Open Overlay Drawer
            </Button>
          </div>
          <OverlayDrawer
            open={overlayOpen}
            onOpenChange={(_, { open }) => setOverlayOpen(open)}
          >
            <DrawerHeader>
              <DrawerHeaderTitle
                action={
                  <Button
                    appearance="subtle"
                    icon={<Dismiss24Regular />}
                    onClick={() => setOverlayOpen(false)}
                  />
                }
              >
                Overlay Drawer
              </DrawerHeaderTitle>
            </DrawerHeader>
            <DrawerBody>
              <Text>
                This is an overlay drawer. It slides in over the content,
                with a backdrop overlay.
              </Text>
              <br /><br />
              <Field label="Example field">
                <Input placeholder="Enter something..." />
              </Field>
              <br />
              <Button appearance="primary" onClick={() => setOverlayOpen(false)}>
                Close
              </Button>
            </DrawerBody>
          </OverlayDrawer>

          <Divider className={styles.divider} />

          {/* Inline Drawer */}
          <Text className={styles.subheading}>Inline Drawer</Text>
          <Button
            onClick={() => setInlineOpen(!inlineOpen)}
            style={{ width: 'fit-content' }}
          >
            {inlineOpen ? 'Hide' : 'Show'} Inline Drawer
          </Button>
          <div className={styles.inlineDrawerContainer}>
            <InlineDrawer open={inlineOpen} position="start">
              <DrawerHeader>
                <DrawerHeaderTitle>Navigation</DrawerHeaderTitle>
              </DrawerHeader>
              <DrawerBody>
                <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalS }}>
                  <Button appearance="subtle">Item 1</Button>
                  <Button appearance="subtle">Item 2</Button>
                  <Button appearance="subtle">Item 3</Button>
                </div>
              </DrawerBody>
            </InlineDrawer>
            <div className={styles.drawerContent}>
              <Text weight="semibold">Main Content</Text>
              <br />
              <Text>Toggle the drawer using the button above.</Text>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
