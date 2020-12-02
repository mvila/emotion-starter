import {useCallback, useState} from 'react';
import {jsx, useTheme} from '@emotion/react';
import {Input, TextArea, Select, Button} from '@emotion-starter/react';

export function Playground() {
  const theme = useTheme();

  const mode = window.localStorage.getItem('mode') || 'light';

  const setMode = useCallback((mode: string) => {
    window.localStorage.setItem('mode', mode);
  }, []);

  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const sectionStyle = {marginTop: 0};
  const controlStyle = {width: 300, display: 'flex', flexDirection: 'column'} as const;

  return (
    <div style={{maxWidth: '700px', margin: '40px auto'}}>
      <h2>Emotion Starter Playground</h2>

      <div css={{marginBottom: '3rem'}}>
        <a
          href="/"
          onClick={() => {
            setMode('light');
          }}
          css={
            mode === 'light'
              ? {color: theme.colors.text.normal, fontWeight: theme.fontWeights.bold}
              : undefined
          }
        >
          Light mode
        </a>
        <span css={{padding: '0 .75rem', color: theme.colors.border.normal}}>|</span>
        <a
          href="/"
          onClick={() => {
            setMode('dark');
          }}
          css={
            mode === 'dark'
              ? {color: theme.colors.text.normal, fontWeight: theme.fontWeights.bold}
              : undefined
          }
        >
          Dark mode
        </a>
      </div>

      <h3 css={sectionStyle}>Text</h3>

      <h4>Normal Size</h4>

      <h5>Normal Style</h5>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h5>Muted Style</h5>

      <p css={{color: theme.colors.text.muted}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h5>More Muted Style</h5>

      <p css={{color: theme.colors.text.moreMuted}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h5>Highlighted Background</h5>

      <p css={{backgroundColor: theme.colors.background.highlighted, padding: '.25rem .5rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h4>Small Size</h4>

      <p css={{fontSize: theme.fontSizes.small}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h4>Large Size</h4>

      <p css={{fontSize: theme.fontSizes.large}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <hr />

      <h3 css={sectionStyle}>Input</h3>

      <h4>Text Type</h4>

      <h5>Normal Size</h5>

      <div css={controlStyle}>
        <Input placeholder="Placeholder" disabled={false} />
      </div>

      <h5>Small Size</h5>

      <div css={controlStyle}>
        <Input size="small" placeholder="Placeholder" disabled={false} />
      </div>

      <h5>Large Size</h5>

      <div css={controlStyle}>
        <Input size="large" placeholder="Placeholder" disabled={false} />
      </div>

      <h4>Checkbox Type</h4>

      <h5>Normal Size</h5>

      <div css={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Input
          id="checkbox"
          type="checkbox"
          checked={checkboxValue}
          onChange={(event) => {
            setCheckboxValue(event.target.checked);
          }}
          disabled={false}
        />
        <label htmlFor="checkbox">Option</label>
      </div>

      <h4>Radio Type</h4>

      <h5>Normal Size</h5>

      <div css={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Input
          id="radio1"
          type="radio"
          value="radio1"
          checked={radioValue === 'radio1'}
          onChange={(event) => {
            setRadioValue(event.target.value);
          }}
          disabled={false}
        />
        <label htmlFor="radio1">Option 1</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Input
          id="radio2"
          type="radio"
          value="radio2"
          checked={radioValue === 'radio2'}
          onChange={(event) => {
            setRadioValue(event.target.value);
          }}
          disabled={false}
        />
        <label htmlFor="radio2">Option 2</label>
      </div>

      <hr />

      <h3 css={sectionStyle}>TextArea</h3>

      <h4>Normal Size</h4>

      <div css={controlStyle}>
        <TextArea placeholder="Placeholder" disabled={false} />
      </div>

      <h4>Small Size</h4>

      <div css={controlStyle}>
        <TextArea size="small" placeholder="Placeholder" disabled={false} />
      </div>

      <h4>Large Size</h4>

      <div css={controlStyle}>
        <TextArea size="large" placeholder="Placeholder" disabled={false} />
      </div>

      <hr />

      <h3 css={sectionStyle}>Select</h3>

      <h4>Normal Size</h4>

      <div css={controlStyle}>
        <Select disabled={false}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <h4>Small Size</h4>

      <div css={controlStyle}>
        <Select size="small" disabled={false}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <h4>Large Size</h4>

      <div css={controlStyle}>
        <Select size="large" disabled={false}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <hr />

      <h3 css={sectionStyle}>Button</h3>

      <h4>Normal Size</h4>

      <h5>Normal Variant</h5>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Button>Neutral</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="primary">Primary</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="secondary">Secondary</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="positive">Positive</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="negative">Negative</Button>
        </div>
      </div>

      <h5>Outline Variant</h5>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Button variant="outline">Neutral</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="primary" variant="outline">
            Primary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="secondary" variant="outline">
            Secondary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="positive" variant="outline">
            Positive
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button color="negative" variant="outline">
            Negative
          </Button>
        </div>
      </div>

      <h4>Small Size</h4>

      <h5>Normal Variant</h5>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small">Neutral</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="primary">
            Primary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="secondary">
            Secondary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="positive">
            Positive
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="negative">
            Negative
          </Button>
        </div>
      </div>

      <h5>Outline Variant</h5>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" variant="outline">
            Neutral
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="primary" variant="outline">
            Primary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="secondary" variant="outline">
            Secondary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="positive" variant="outline">
            Positive
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="small" color="negative" variant="outline">
            Negative
          </Button>
        </div>
      </div>

      <h4>Large Size</h4>

      <h5>Normal Variant</h5>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large">Neutral</Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="primary">
            Primary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="secondary">
            Secondary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="positive">
            Positive
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="negative">
            Negative
          </Button>
        </div>
      </div>

      <h5>Outline Variant</h5>

      <div css={{display: 'flex'}}>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" variant="outline">
            Neutral
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="primary" variant="outline">
            Primary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="secondary" variant="outline">
            Secondary
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="positive" variant="outline">
            Positive
          </Button>
        </div>
        <div css={{marginRight: '.5rem'}}>
          <Button size="large" color="negative" variant="outline">
            Negative
          </Button>
        </div>
      </div>
    </div>
  );
}
