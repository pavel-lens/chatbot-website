import React from 'react';
import { Button, Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

import assetPhoto from './pavel-svitek-photo.jpg';

export const PersonalCard = () => (
  <Card>
    <Image src={assetPhoto} />
    <Card.Content>
      <Card.Header>
        Pavel Svitek
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Javascript/ReactJS, Python developer
        </span>
      </Card.Meta>
      <Card.Description>
        I am a young entrepreneur-minded fullstack developer, who had come
        a way from python developer to managing teams and building projects
        for international markets. Currently, I focus to further develop
        my Javascript/ReactJS skills.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="https://www.linkedin.com/in/pavelsvitek"><Icon name='linkedin'/></a>
      <a href="https://twitter.com/svitekpavel"><Icon name='twitter'/></a>
    </Card.Content>
  </Card>
);
