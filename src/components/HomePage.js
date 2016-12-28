import React from 'react';
import {Link} from 'react-router';
import { Button, Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

import { PersonalCard } from './PersonalCard'
import { InteractiveChat } from './InteractiveChat'

const HomePage = (props) => {
  return (
    <div>
      <h1>Pavel Svitek | Javascript/ReactJS, Python developer</h1>

      <Grid columns={2}>
        <Grid.Column width={4}>
          <PersonalCard/>
        </Grid.Column>
        <Grid.Column width={12}>
          <InteractiveChat
            messages={props.chat.messages}
            options={props.chat.options}
            onSubmit={props.onChatSubmit}
          />
        </Grid.Column>
      </Grid>

      <h2>My story</h2>
      <p>
        I began my personal transformation at the time I turned 25. Firstly,
        I read a book Multiple streams of Income, which inspired me to think
        about personal projects besides my job. After one month of hesitating,
        there were many projects ideas and it was time to start my first project.
      </p>
      <p>
        Afterwards, I found next great book. The 4-hour work week gave me many
        ideas of sales automatization and time outsourcing, and was even
        more-inspiring than the first one. This book showed me also how to gain
        more freedom in job and how to negotiate work time that suits my needs.
      </p>
      <p>
        Today, almost 3 years later, I have completed many personal or work
        projects, went through dozens of personal development books and workshops
        of soft, sales and presentation skills. More importantly, I’ve started
        my own company, travel abroad multiple times a year and have multiple
        streams of income and pasive income.
      </p>
      <p>
        Therefore I know, that if you open your eyes, you will find amazing
        world of opportunities that are awaiting you.
      </p>
    </div>
  );
};

export default HomePage;
