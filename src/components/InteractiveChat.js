import React from 'react';
import uuid from 'uuid';
import { Button, Card, Container, Divider, Grid, Icon, Image, Segment } from 'semantic-ui-react';

const getSegmentProps = (message) => ({
  floated: message.author === 'Pavel' ? 'left' : 'right',
  inverted: message.author === 'Pavel' ? false : true,
  color: message.author === 'Pavel' ? null : 'teal',
  loading: !!message.loading ? true : false,
  style: getSegmentStyle(message),
});

const getSegmentStyle = (message) => ({
  marginLeft: (message.author === 'Pavel' ? 'auto' : '20px'),
  marginRight: (message.author === 'Pavel' ? '20px' : 'auto'),
});

export const InteractiveChat = (props) => {
  const messageNodes = props.messages.map((message) => {
    const props = getSegmentProps(message);
    return (
      <Segment clearing key={uuid.v4()} {...props}>
        <p>{message.message}</p>
      </Segment>
    );
  });

  const optionNodes = props.options.map((option, idx) => {
    return (
      <a
        href='javascript: void(0)'
        onClick={() => {props.onSubmit(option.title)}}
        key={uuid.v4()}
      >
        <Segment color='teal'>{option.title}</Segment>
      </a>
    );
  });

  return (
    <div>
      {messageNodes}
      <div style={{clear: 'both'}}/>
      <Divider/>
      { !!props.options.length &&
        <Segment.Group horizontal>
          {optionNodes}
        </Segment.Group>
      }
    </div>
  );
};
