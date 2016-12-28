// import React so we can use JXS in this file
import React from 'react'
import { Button, Card, Container, Grid, Icon, Image } from 'semantic-ui-react';

export default [
  {
    pattern: null,
    messages: [
      {
        author: 'Pavel',
        message: <div>Hi! <Icon name='smile'/></div>,
      },
      {
        author: 'Pavel',
        message: "I\'m Pavel, a developer living in Bratislava, Slovakia.",
      },
      {
        author: 'Pavel',
        message: '.. what brought you here?',
      },
    ],
    options: [
      {
        title: 'Programming generally..',
        goto: 'programming-generally',
      },
      {
        title: 'I want to learn more about you..',
        goto: 'more-about-pavel',
      },
    ],
  },
  {
    pattern: 'programming-generally',
    messages: [
      {
        author: 'Pavel',
        message: [
          "Well .. there's a lot to say here!",
          "Let me start with the fact that I enjoy programming in Python",
          "and Javascript.. ",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: [
          "Do you want to learn more about one of them?",
        ].join(' '),
      },
    ],
    options: [
      {
        title: 'Javascript/ReactJS development',
        goto: 'javascript-development'
      },
      {
        title: 'Python development',
        goto: 'python-development',
      },
      {
        title: 'Not really..',
        goto: 'more-about-pavel',
      }
    ],
  },
  {
    pattern: 'python-development',
    messages: [
      {
        author: 'Pavel',
        message: 'Great! I\'ve been programming in Python for years!',
      },
      // {
      //   author: 'Pavel',
      //   message: [
      //     'Checkout at my favorite Python wallpaper..'
      //   ],
      // },
      // {
      //   author: 'Pavel',
      //   message: <div><img src='http://www.latoro.com/wallpapers/black-and-white/18195-desktop-wallpapers-python.jpg' height='150px' alt='python-django-image'/></div>
      // },
      {
        author: 'Pavel',
        message: '..what specifically interest you?',
      },
    ],
    options: [
      {
        title: 'Learning Python language',
      },
      {
        title: 'I want to hire Python developer',
      },
      {
        title: 'Nothing really..',
      },
    ],
  },
  {
    pattern: 'I want to hire Python developer',
    messages: [
      {
        author: 'Pavel',
        message:  <div>Awesome! Drop me a message to
                    <a href="mailto:pavel@pavelsvitek.com?subject=Python+project">pavel@pavelsvitek.com</a>
                    and I will get back to you..
                  </div>,
      },
      {
        author: 'Pavel',
        message: '..what specifically interest you?',
      },
    ],
  },
  {
    pattern: 'javascript-development',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Javascript is on its rise for the last couple of years! ",
          "I'm sure you've heard of ReactJS, AngularJS and other ",
          "cool libraries for frontend development..",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message:  [
          "But there's also backend development with NodeJS..",
          "I've tried some coding in NodeJS and it's a great experience.. ",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: <img src='http://cdn1.gadgetify.com/wp-content/uploads/2013/11/code-deck.jpg' height="150px" alt="code-deck"/>
      },
      {
        author: 'Pavel',
        message: '..are you a coder too?',
      },
    ],
    options: [
      {
        title: <div>Yeah! <Icon name='smile'/></div>,
        goto: 'a-coder',
      },
      {
        title: 'Nope :-(',
        goto: 'not-a-coder',
      },
    ]
  },
  {
    pattern: 'more-about-pavel',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Well.. I started programming when I was 13. years old..",
          "From there, I've worked on different projects, I've learned",
          "PHP, C/C++, Python, Javascript, HTML(5), CSS(3) and others..",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: <div>
          {"I'm reading a lot on Medium. Checkout last articles I've "}
          <a href="https://medium.com/@svitekpavel/has-recommended" target="_blank">recommended </a>
          or read <a href="https://medium.com/@svitekpavel" target="_blank">my stories</a>..
        </div>
      },
    ],
    options: [
      {
        title: <a href="https://medium.com/@svitekpavel" target="_blank">Show me your blogs</a>,
        goto: 'a-coder',
      },
      {
        title: 'Ok, whatever..',
        goto: 'dummy-section',
      },
    ]
  },
  {
    pattern: 'dummy-section',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Listen, I will have to go to a meeting..",
          "is there anything else you want to ask?",
        ].join(' '),
      },
    ],
    options: [ // @TODO
      {
        title: 'Not really',
        goto: 'finish-conversation',
      },
    ]
  },
  {
    pattern: 'finish-conversation',
    messages: [
      {
        author: 'Pavel',
        message:  [
          "Ok ..it was great talking to you, but I will have to go now..",
        ].join(' '),
      },
      {
        author: 'Pavel',
        message: <div>
          {"Take care and don't hesitate to talk to me again.. "} <Icon name='smile'/>,
          </div>
      },
    ],
  },
];
