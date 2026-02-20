import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Spinner,
  ProgressBar,
  Field,
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  MessageBarActions,
  Link,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
  Toaster,
  useToastController,
  useId,
  makeStyles,
  tokens,
  Text,
  Divider,
  Badge,
  PresenceBadge,
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
    alignItems: 'flex-start',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
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

function ToastDemo() {
  const styles = useStyles();
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);

  const showToast = (intent: 'info' | 'success' | 'warning' | 'error') => {
    dispatchToast(
      <Toast>
        <ToastTitle>{intent.charAt(0).toUpperCase() + intent.slice(1)} Toast</ToastTitle>
        <ToastBody>This is a {intent} toast message.</ToastBody>
        <ToastFooter>
          <Link>Action</Link>
        </ToastFooter>
      </Toast>,
      { intent, timeout: 3000 },
    );
  };

  return (
    <div className={styles.column}>
      <Toaster toasterId={toasterId} position="top-end" />
      <div className={styles.row}>
        <Button appearance="primary" onClick={() => showToast('info')}>Info Toast</Button>
        <Button appearance="primary" style={{ background: tokens.colorPaletteGreenForeground1 }} onClick={() => showToast('success')}>Success Toast</Button>
        <Button appearance="primary" style={{ background: tokens.colorPaletteYellowForeground2 }} onClick={() => showToast('warning')}>Warning Toast</Button>
        <Button appearance="primary" style={{ background: tokens.colorPaletteRedForeground1 }} onClick={() => showToast('error')}>Error Toast</Button>
      </div>
    </div>
  );
}

export function FeedbackPage() {
  const styles = useStyles();
  const [progressValue, setProgressValue] = useState(0.6);

  return (
    <div className={styles.page}>
      {/* Dialog */}
      <SectionCard title="Dialog">
        <div className={styles.row}>
          <div className={styles.column}>
            <Text className={styles.subheading}>Default</Text>
            <Dialog>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="primary">Open Dialog</Button>
              </DialogTrigger>
              <DialogSurface>
                <DialogBody>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogContent>
                    This is a standard dialog. You can put any content here.
                  </DialogContent>
                  <DialogActions>
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="secondary">Cancel</Button>
                    </DialogTrigger>
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="primary">Confirm</Button>
                    </DialogTrigger>
                  </DialogActions>
                </DialogBody>
              </DialogSurface>
            </Dialog>
          </div>

          <div className={styles.column}>
            <Text className={styles.subheading}>Alert (no close)</Text>
            <Dialog modalType="alert">
              <DialogTrigger disableButtonEnhancement>
                <Button>Open Alert</Button>
              </DialogTrigger>
              <DialogSurface>
                <DialogBody>
                  <DialogTitle>Confirm Delete</DialogTitle>
                  <DialogContent>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </DialogContent>
                  <DialogActions>
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="secondary">Cancel</Button>
                    </DialogTrigger>
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="primary">Delete</Button>
                    </DialogTrigger>
                  </DialogActions>
                </DialogBody>
              </DialogSurface>
            </Dialog>
          </div>
        </div>
      </SectionCard>

      {/* Spinner */}
      <SectionCard title="Spinner">
        <div className={styles.column}>
          <div className={styles.row}>
            <Spinner size="tiny" label="Tiny" />
            <Spinner size="extra-small" label="Extra Small" />
            <Spinner size="small" label="Small" />
            <Spinner size="medium" label="Medium" />
            <Spinner size="large" label="Large" />
            <Spinner size="extra-large" label="Extra Large" />
            <Spinner size="huge" label="Huge" />
          </div>
          <Divider className={styles.divider} />
          <div className={styles.row}>
            <Spinner appearance="primary" label="Primary" />
            <Spinner appearance="inverted" label="Inverted"
              style={{ background: tokens.colorBrandBackground, padding: tokens.spacingHorizontalS, borderRadius: tokens.borderRadiusMedium }}
            />
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Label positions</Text>
          <div className={styles.row}>
            <Spinner label="Above" labelPosition="above" />
            <Spinner label="Below" labelPosition="below" />
            <Spinner label="Before" labelPosition="before" />
            <Spinner label="After" labelPosition="after" />
          </div>
        </div>
      </SectionCard>

      {/* ProgressBar */}
      <SectionCard title="ProgressBar">
        <div className={styles.column}>
          <Field label={`Value: ${Math.round(progressValue * 100)}%`}>
            <ProgressBar value={progressValue} />
          </Field>
          <div className={styles.row}>
            <Button size="small" onClick={() => setProgressValue(Math.max(0, progressValue - 0.1))}>-10%</Button>
            <Button size="small" onClick={() => setProgressValue(Math.min(1, progressValue + 0.1))}>+10%</Button>
          </div>
          <Divider className={styles.divider} />
          <Field label="Indeterminate">
            <ProgressBar />
          </Field>
          <Field label="Thickness: thick">
            <ProgressBar value={0.7} thickness="large" />
          </Field>
          <Field label="Success state" validationState="success">
            <ProgressBar value={1} color="success" />
          </Field>
          <Field label="Warning state" validationState="warning">
            <ProgressBar value={0.5} color="warning" />
          </Field>
          <Field label="Error state" validationState="error">
            <ProgressBar value={0.3} color="error" />
          </Field>
        </div>
      </SectionCard>

      {/* MessageBar */}
      <SectionCard title="MessageBar">
        <div className={styles.column}>
          <MessageBar intent="info">
            <MessageBarBody>
              <MessageBarTitle>Info</MessageBarTitle>
              This is an informational message bar.
            </MessageBarBody>
            <MessageBarActions>
              <Button size="small">Action</Button>
            </MessageBarActions>
          </MessageBar>
          <MessageBar intent="success">
            <MessageBarBody>
              <MessageBarTitle>Success</MessageBarTitle>
              Operation completed successfully.
            </MessageBarBody>
          </MessageBar>
          <MessageBar intent="warning">
            <MessageBarBody>
              <MessageBarTitle>Warning</MessageBarTitle>
              Please review the following issues.
            </MessageBarBody>
          </MessageBar>
          <MessageBar intent="error">
            <MessageBarBody>
              <MessageBarTitle>Error</MessageBarTitle>
              An error occurred. Please try again.
            </MessageBarBody>
            <MessageBarActions>
              <Button size="small">Retry</Button>
              <Button size="small" appearance="subtle">Dismiss</Button>
            </MessageBarActions>
          </MessageBar>
        </div>
      </SectionCard>

      {/* Toast */}
      <SectionCard title="Toast">
        <ToastDemo />
      </SectionCard>

      {/* Badge */}
      <SectionCard title="Badge">
        <div className={styles.column}>
          <Text className={styles.subheading}>Colors</Text>
          <div className={styles.row}>
            <Badge color="brand">Brand</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="important">Important</Badge>
            <Badge color="informative">Informative</Badge>
            <Badge color="severe">Severe</Badge>
            <Badge color="subtle">Subtle</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Appearances</Text>
          <div className={styles.row}>
            <Badge appearance="filled">Filled</Badge>
            <Badge appearance="ghost">Ghost</Badge>
            <Badge appearance="outline">Outline</Badge>
            <Badge appearance="tint">Tint</Badge>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Sizes</Text>
          <div className={styles.row}>
            <Badge size="tiny">Tiny</Badge>
            <Badge size="extra-small">XSmall</Badge>
            <Badge size="small">Small</Badge>
            <Badge size="medium">Medium</Badge>
            <Badge size="large">Large</Badge>
            <Badge size="extra-large">XLarge</Badge>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Presence Badge</Text>
          <div className={styles.row}>
            <PresenceBadge status="available" />
            <PresenceBadge status="away" />
            <PresenceBadge status="busy" />
            <PresenceBadge status="do-not-disturb" />
            <PresenceBadge status="offline" />
            <PresenceBadge status="out-of-office" />
            <PresenceBadge status="unknown" />
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
