import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FluentProvider, makeStyles, tokens } from '@fluentui/react-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { BasicInputsPage } from './pages/BasicInputsPage';
import { SelectionPage } from './pages/SelectionPage';
import { NavigationPage } from './pages/NavigationPage';
import { FeedbackPage } from './pages/FeedbackPage';
import { LayoutPage } from './pages/LayoutPage';
import { OverlaysPage } from './pages/OverlaysPage';
import { TypographyPage } from './pages/TypographyPage';
import { DataDisplayPage } from './pages/DataDisplayPage';

const useStyles = makeStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorBrandBackground,
    boxShadow: tokens.shadow4,
    zIndex: 100,
    flexShrink: 0,
  },
  topBarTitle: {
    color: tokens.colorNeutralForegroundInverted,
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase500,
  },
  body: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  main: {
    flex: 1,
    overflowY: 'auto',
    padding: tokens.spacingHorizontalL,
  },
  pageTitle: {
    marginBottom: tokens.spacingVerticalL,
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
});

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

function PageWrapper({ title, children }: PageWrapperProps) {
  const styles = useStyles();
  return (
    <div>
      <h1 className={styles.pageTitle}>{title}</h1>
      {children}
    </div>
  );
}

function AppLayout() {
  const styles = useStyles();
  const { currentTheme } = useTheme();

  return (
    <FluentProvider theme={currentTheme}>
      <BrowserRouter>
        <div className={styles.app}>
          <header className={styles.topBar}>
            <span className={styles.topBarTitle}>Fluent UI Demo</span>
            <ThemeSwitcher />
          </header>
          <div className={styles.body}>
            <Sidebar />
            <main className={styles.main}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/basic-inputs"
                  element={
                    <PageWrapper title="Basic Inputs">
                      <BasicInputsPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/selection"
                  element={
                    <PageWrapper title="Selection">
                      <SelectionPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/navigation"
                  element={
                    <PageWrapper title="Navigation">
                      <NavigationPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/feedback"
                  element={
                    <PageWrapper title="Feedback">
                      <FeedbackPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/layout"
                  element={
                    <PageWrapper title="Layout">
                      <LayoutPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/overlays"
                  element={
                    <PageWrapper title="Overlays">
                      <OverlaysPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/typography"
                  element={
                    <PageWrapper title="Typography">
                      <TypographyPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/data-display"
                  element={
                    <PageWrapper title="Data Display">
                      <DataDisplayPage />
                    </PageWrapper>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </FluentProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
