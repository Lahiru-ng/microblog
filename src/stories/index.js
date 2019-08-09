import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from "../Components/shared/Button";
import Editor from "../Components/shared/Editor";
import TextBox from "../Components/shared/TextBox";

storiesOf("shared - Button", module)
  .add("submit", () => (
    <Button text="post" type="submit" onClick={action("trigered.onClick()")} />
  ))
  .add('action-button', () => (
    <Button text="delete" type="action" onClick={action("trigered.onClick()")} />));

storiesOf("shared - Editor", module)
  .add('mini', () => (
    <Editor type='mini' onChange={action("trigered.onChange()")} />
  ))
  .add('full', () => (
    <Editor type='full' onChange={action("trigered.onChange()")} />
  ));


storiesOf("shared - TextBox", module).add("default", () => (
  <TextBox name="name" text="" label="TextLabel" onChange={action("onChange()")} />
));
// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   )).add('some another story', () => <Button onClick={action('clicked')}>Hello Button</Button>);
