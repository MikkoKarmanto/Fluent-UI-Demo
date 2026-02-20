import {
  Avatar,
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableCellLayout,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridBody,
  DataGridRow,
  DataGridCell,
  createTableColumn,
  Text,
  Persona,
  Divider,
  makeStyles,
  tokens,
  Badge,
} from '@fluentui/react-components';
import type { TableColumnDefinition } from '@fluentui/react-components';
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
    alignItems: 'center',
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

interface Person {
  id: number;
  name: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joined: string;
}

const people: Person[] = [
  { id: 1, name: 'Alice Johnson', role: 'Engineer', status: 'active', joined: '2022-01-15' },
  { id: 2, name: 'Bob Smith', role: 'Designer', status: 'active', joined: '2021-06-20' },
  { id: 3, name: 'Carol White', role: 'Manager', status: 'inactive', joined: '2020-03-10' },
  { id: 4, name: 'David Brown', role: 'Engineer', status: 'pending', joined: '2023-09-05' },
  { id: 5, name: 'Eve Davis', role: 'Analyst', status: 'active', joined: '2022-11-18' },
];

const statusBadgeColor: Record<string, 'success' | 'danger' | 'warning'> = {
  active: 'success',
  inactive: 'danger',
  pending: 'warning',
};

const columns: TableColumnDefinition<Person>[] = [
  createTableColumn<Person>({
    columnId: 'name',
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => 'Name',
    renderCell: (item) => (
      <TableCellLayout
        media={<Avatar name={item.name} />}
      >
        {item.name}
      </TableCellLayout>
    ),
  }),
  createTableColumn<Person>({
    columnId: 'role',
    compare: (a, b) => a.role.localeCompare(b.role),
    renderHeaderCell: () => 'Role',
    renderCell: (item) => item.role,
  }),
  createTableColumn<Person>({
    columnId: 'status',
    compare: (a, b) => a.status.localeCompare(b.status),
    renderHeaderCell: () => 'Status',
    renderCell: (item) => (
      <Badge color={statusBadgeColor[item.status]} appearance="tint">
        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </Badge>
    ),
  }),
  createTableColumn<Person>({
    columnId: 'joined',
    compare: (a, b) => a.joined.localeCompare(b.joined),
    renderHeaderCell: () => 'Joined',
    renderCell: (item) => item.joined,
  }),
];

export function DataDisplayPage() {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      {/* Avatar */}
      <SectionCard title="Avatar">
        <div className={styles.column}>
          <Text className={styles.subheading}>Sizes</Text>
          <div className={styles.row}>
            {([16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128] as const).map((size) => (
              <Avatar key={size} size={size} name="John Doe" />
            ))}
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Shapes</Text>
          <div className={styles.row}>
            <Avatar shape="circular" name="Alice" />
            <Avatar shape="square" name="Bob" />
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>With Badge</Text>
          <div className={styles.row}>
            <Avatar name="Alice" badge={{ status: 'available' }} />
            <Avatar name="Bob" badge={{ status: 'away' }} />
            <Avatar name="Carol" badge={{ status: 'busy' }} />
            <Avatar name="David" badge={{ status: 'do-not-disturb' }} />
            <Avatar name="Eve" badge={{ status: 'offline' }} />
            <Avatar name="Frank" badge={{ status: 'out-of-office' }} />
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Colors</Text>
          <div className={styles.row}>
            {(['dark-red', 'cranberry', 'red', 'pumpkin', 'peach', 'marigold', 'gold', 'brass', 'brown', 'forest', 'seafoam', 'dark-green', 'light-teal', 'teal', 'steel', 'blue', 'royal-blue', 'cornflower', 'navy', 'lavender', 'purple', 'grape', 'lilac', 'pink', 'magenta', 'plum', 'beige', 'mink', 'platinum', 'anchor'] as const).map((color) => (
              <Avatar key={color} color={color} name={color} />
            ))}
          </div>

          <Divider className={styles.divider} />
          <Text className={styles.subheading}>AvatarGroup</Text>
          <div className={styles.row}>
            <AvatarGroup layout="stack">
              <AvatarGroupItem name="Alice Johnson" />
              <AvatarGroupItem name="Bob Smith" />
              <AvatarGroupItem name="Carol White" />
              <AvatarGroupItem name="David Brown" />
              <AvatarGroupPopover>
                <AvatarGroupItem name="Eve Davis" />
                <AvatarGroupItem name="Frank Wilson" />
                <AvatarGroupItem name="Grace Lee" />
              </AvatarGroupPopover>
            </AvatarGroup>
            <AvatarGroup layout="pie">
              <AvatarGroupItem name="Alice Johnson" />
              <AvatarGroupItem name="Bob Smith" />
              <AvatarGroupItem name="Carol White" />
            </AvatarGroup>
            <AvatarGroup layout="spread">
              <AvatarGroupItem name="Alice Johnson" />
              <AvatarGroupItem name="Bob Smith" />
              <AvatarGroupItem name="Carol White" />
            </AvatarGroup>
          </div>
        </div>
      </SectionCard>

      {/* Persona */}
      <SectionCard title="Persona">
        <div className={styles.column}>
          <div className={styles.row}>
            <Persona
              name="Alice Johnson"
              secondaryText="Engineer"
              presence={{ status: 'available' }}
            />
            <Persona
              name="Bob Smith"
              secondaryText="Designer"
              tertiaryText="Online"
              presence={{ status: 'away' }}
              size="large"
            />
            <Persona
              name="Carol White"
              secondaryText="Manager"
              tertiaryText="Busy"
              presence={{ status: 'busy' }}
              size="huge"
            />
          </div>
        </div>
      </SectionCard>

      {/* Table */}
      <SectionCard title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Joined</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell>
                  <TableCellLayout media={<Avatar name={person.name} size={24} />}>
                    {person.name}
                  </TableCellLayout>
                </TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>
                  <Badge color={statusBadgeColor[person.status]} appearance="tint">
                    {person.status.charAt(0).toUpperCase() + person.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{person.joined}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SectionCard>

      {/* DataGrid */}
      <SectionCard title="DataGrid (sortable)">
        <DataGrid
          items={people}
          columns={columns}
          sortable
          getRowId={(item) => String(item.id)}
        >
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Person>>
            {({ item, rowId }) => (
              <DataGridRow<Person> key={rowId}>
                {({ renderCell }) => (
                  <DataGridCell>{renderCell(item)}</DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </SectionCard>
    </div>
  );
}
