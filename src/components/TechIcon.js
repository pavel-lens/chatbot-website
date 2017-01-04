import React from 'react';
import { Button, Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

export const TechIcon = (props) => (
  <div style={{display: "inline-block"}}>
    <div className="technology">
      <img className="icon" src={props.icon}/>
      <div className="title">{props.title}</div>
    </div>
  </div>
);
