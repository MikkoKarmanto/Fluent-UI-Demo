import type { ReactNode } from 'react';
import {
  Card,
  CardHeader,
  Text,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  card: {
    width: '100%',
  },
  content: {
    paddingTop: tokens.spacingVerticalS,
  },
});

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export function SectionCard({ title, children }: SectionCardProps) {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <Text weight="semibold" size={400}>
            {title}
          </Text>
        }
      />
      <div className={styles.content}>{children}</div>
    </Card>
  );
}
