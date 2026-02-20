import { useState } from 'react';
import {
  Combobox,
  Dropdown,
  Option,
  Select,
  Field,
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerOption,
  Tag,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import type { TagPickerProps } from '@fluentui/react-components';
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
    minWidth: '200px',
  },
});

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink'];

export function SelectionPage() {
  const styles = useStyles();
  const [selectedTags, setSelectedTags] = useState<string[]>(['Red', 'Blue']);

  const onTagPickerOptionSelect: TagPickerProps['onOptionSelect'] = (_, data) => {
    setSelectedTags(data.selectedOptions);
  };

  const tagOptions = colors.filter((c) => !selectedTags.includes(c));

  return (
    <div className={styles.page}>
      {/* Combobox */}
      <SectionCard title="Combobox">
        <div className={styles.row}>
          <div className={styles.column}>
            <Field label="Fruit (single select)">
              <Combobox placeholder="Select a fruit">
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Combobox>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Fruit (multiselect)">
              <Combobox placeholder="Select fruits" multiselect>
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Combobox>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Disabled">
              <Combobox placeholder="Disabled" disabled>
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Combobox>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Autocomplete">
              <Combobox placeholder="Type to search" freeform>
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Combobox>
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* Dropdown */}
      <SectionCard title="Dropdown">
        <div className={styles.row}>
          <div className={styles.column}>
            <Field label="Single Select">
              <Dropdown placeholder="Select an option">
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Dropdown>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Multi Select">
              <Dropdown placeholder="Select options" multiselect>
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Dropdown>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Disabled">
              <Dropdown placeholder="Disabled" disabled>
                {fruits.map((fruit) => (
                  <Option key={fruit}>{fruit}</Option>
                ))}
              </Dropdown>
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* Select */}
      <SectionCard title="Select (Native)">
        <div className={styles.row}>
          <div className={styles.column}>
            <Field label="Default">
              <Select>
                <option value="">Select...</option>
                {fruits.map((fruit) => (
                  <option key={fruit} value={fruit}>
                    {fruit}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Underline">
              <Select appearance="underline">
                <option value="">Select...</option>
                {fruits.map((fruit) => (
                  <option key={fruit} value={fruit}>
                    {fruit}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Filled Darker">
              <Select appearance="filled-darker">
                <option value="">Select...</option>
                {fruits.map((fruit) => (
                  <option key={fruit} value={fruit}>
                    {fruit}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <div className={styles.column}>
            <Field label="Disabled">
              <Select disabled>
                <option>Disabled</option>
              </Select>
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* TagPicker */}
      <SectionCard title="TagPicker">
        <div className={styles.row}>
          <div className={styles.column} style={{ minWidth: '300px' }}>
            <Field label="Select colors">
              <TagPicker
                onOptionSelect={onTagPickerOptionSelect}
                selectedOptions={selectedTags}
              >
                <TagPickerControl>
                  {selectedTags.map((color) => (
                    <Tag key={color} shape="rounded" value={color}>
                      {color}
                    </Tag>
                  ))}
                  <TagPickerInput placeholder="Add color..." />
                </TagPickerControl>
                <TagPickerList>
                  {tagOptions.length > 0 ? (
                    tagOptions.map((color) => (
                      <TagPickerOption value={color} key={color}>
                        {color}
                      </TagPickerOption>
                    ))
                  ) : (
                    <TagPickerOption value="no-options">
                      No options available
                    </TagPickerOption>
                  )}
                </TagPickerList>
              </TagPicker>
            </Field>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
