import { useState } from 'react';
import {
  Button,
  CompoundButton,
  ToggleButton,
  Checkbox,
  Input,
  Label,
  Slider,
  RadioGroup,
  Radio,
  Switch,
  SpinButton,
  Field,
  makeStyles,
  tokens,
  Text,
  Divider,
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
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  divider: {
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalM,
  },
  subheading: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
});

export function BasicInputsPage() {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [sliderValue, setSliderValue] = useState(50);
  const [spinValue, setSpinValue] = useState(0);

  return (
    <div className={styles.page}>
      {/* Buttons */}
      <SectionCard title="Button">
        <div className={styles.column}>
          <Text className={styles.subheading}>Appearance</Text>
          <div className={styles.row}>
            <Button appearance="primary">Primary</Button>
            <Button appearance="secondary">Secondary</Button>
            <Button appearance="outline">Outline</Button>
            <Button appearance="subtle">Subtle</Button>
            <Button appearance="transparent">Transparent</Button>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Sizes</Text>
          <div className={styles.row}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>States</Text>
          <div className={styles.row}>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button appearance="primary" disabledFocusable>
              Disabled Focusable
            </Button>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Toggle Button</Text>
          <div className={styles.row}>
            <ToggleButton
              checked={toggle}
              onClick={() => setToggle(!toggle)}
              appearance={toggle ? 'primary' : 'secondary'}
            >
              {toggle ? 'Toggled On' : 'Toggle Me'}
            </ToggleButton>
          </div>
          <Divider className={styles.divider} />
          <Text className={styles.subheading}>Compound Button</Text>
          <div className={styles.row}>
            <CompoundButton secondaryContent="Secondary text">
              Primary text
            </CompoundButton>
            <CompoundButton
              appearance="primary"
              secondaryContent="Secondary text"
            >
              Primary text
            </CompoundButton>
          </div>
        </div>
      </SectionCard>

      {/* Checkbox */}
      <SectionCard title="Checkbox">
        <div className={styles.column}>
          <div className={styles.row}>
            <Checkbox
              label="Unchecked"
              checked={false}
              onChange={() => {}}
            />
            <Checkbox
              label="Checked"
              checked={true}
              onChange={() => {}}
            />
            <Checkbox
              label="Mixed"
              checked="mixed"
              onChange={() => {}}
            />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Controlled" checked={checked} onChange={(_, d) => setChecked(!!d.checked)} />
          </div>
          <div className={styles.row}>
            <Checkbox label="Large Checkbox" shape="circular" size="large" />
          </div>
        </div>
      </SectionCard>

      {/* Input */}
      <SectionCard title="Input">
        <div className={styles.column}>
          <div className={styles.row}>
            <Field label="Default input">
              <Input placeholder="Enter text..." />
            </Field>
            <Field label="Required input" required>
              <Input placeholder="Required field" />
            </Field>
            <Field label="Disabled input">
              <Input placeholder="Disabled" disabled />
            </Field>
          </div>
          <div className={styles.row}>
            <Field label="Underline">
              <Input appearance="underline" placeholder="Underline style" />
            </Field>
            <Field label="Filled Darker">
              <Input appearance="filled-darker" placeholder="Filled darker" />
            </Field>
            <Field label="Filled Lighter">
              <Input appearance="filled-lighter" placeholder="Filled lighter" />
            </Field>
          </div>
          <div className={styles.row}>
            <Field label="Error state" validationState="error" validationMessage="This field has an error">
              <Input placeholder="Error input" />
            </Field>
            <Field label="Warning state" validationState="warning" validationMessage="This is a warning">
              <Input placeholder="Warning input" />
            </Field>
            <Field label="Success state" validationState="success" validationMessage="Looks good!">
              <Input placeholder="Success input" />
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* Slider */}
      <SectionCard title="Slider">
        <div className={styles.column}>
          <Field label={`Slider: ${sliderValue}`}>
            <Slider
              value={sliderValue}
              min={0}
              max={100}
              onChange={(_, d) => setSliderValue(d.value)}
            />
          </Field>
          <Field label="Vertical Slider">
            <Slider vertical min={0} max={100} defaultValue={30} />
          </Field>
          <Field label="Disabled Slider">
            <Slider disabled defaultValue={60} />
          </Field>
        </div>
      </SectionCard>

      {/* RadioGroup */}
      <SectionCard title="RadioGroup">
        <div className={styles.row}>
          <div className={styles.column}>
            <Label>Vertical (default)</Label>
            <RadioGroup
              value={radioValue}
              onChange={(_, d) => setRadioValue(d.value)}
            >
              <Radio value="option1" label="Option 1" />
              <Radio value="option2" label="Option 2" />
              <Radio value="option3" label="Option 3" />
              <Radio value="option4" label="Disabled" disabled />
            </RadioGroup>
          </div>
          <div className={styles.column}>
            <Label>Horizontal</Label>
            <RadioGroup layout="horizontal">
              <Radio value="a" label="A" />
              <Radio value="b" label="B" />
              <Radio value="c" label="C" />
            </RadioGroup>
          </div>
        </div>
      </SectionCard>

      {/* Switch */}
      <SectionCard title="Switch">
        <div className={styles.row}>
          <Switch
            label="Off"
            checked={false}
            onChange={() => {}}
          />
          <Switch
            label="On"
            checked={true}
            onChange={() => {}}
          />
          <Switch
            label="Controlled"
            checked={switchValue}
            onChange={(_, d) => setSwitchValue(d.checked)}
          />
          <Switch label="Disabled" disabled />
          <Switch label="Disabled Checked" disabled checked />
        </div>
      </SectionCard>

      {/* SpinButton */}
      <SectionCard title="SpinButton">
        <div className={styles.row}>
          <Field label="Quantity">
            <SpinButton
              value={spinValue}
              onChange={(_, d) =>
                setSpinValue(d.value ?? spinValue)
              }
              min={0}
              max={100}
            />
          </Field>
          <Field label="Disabled">
            <SpinButton defaultValue={5} disabled />
          </Field>
          <Field label="Step 5">
            <SpinButton defaultValue={0} step={5} min={0} max={50} />
          </Field>
        </div>
      </SectionCard>
    </div>
  );
}
