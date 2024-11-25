export const survey = {
  id: 'survey1',
  title: 'Test Survey',
  questions: [
    {
      id: 'q1',
      type: 'singleChoice',
      question: 'Select your gender:',
      component: {
        type: 'basicCard',
        options: ['Male', 'Female'],
      },
      next: 'q2',
    },
    {
      id: 'q2',
      type: 'singleChoice',
      question: 'So we can get to know you better, tell us about your relationship status.',
      component: {
        type: 'basicCard',
        options: ['Single', 'In a relationship'],
      },
      next: {
        Single: 'w1-q3',
        'In a relationship': 'w2-q3',
      },
    },
    {
      id: 'w1-q3',
      type: 'singleChoice',
      question: 'Are you a single parent?',
      component: {
        type: 'basicCard',
        options: ['Yes', 'No'],
      },
      next: 'w1-q4',
    },
    {
      id: 'w1-q4',
      type: 'singleChoice',
      question: '{q1} need a slightly different approach to improve their relationship. Which statement best describes you?',
      component: {
        type: 'basicCard',
        options: [
          'I’m very unhappy with how things are going in my relationship',
          'I’m unhappy with parts of my relationship, but some things are working well',
          'I’m generally happy in my relationship',
        ],
      },
      next: 'w1-q5',
    },
    {
      id: 'w1-q5',
      type: 'singleChoice',
      question: 'Do you tend to overthink?',
      component: {
        type: 'basicCard',
        options: ['Yes', 'No'],
      },
      next: 'w1-q6',
    },
    {
      id: 'w1-q6',
      type: 'singleChoice',
      question: 'So how does it work?',
      quote: 'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
      component: {
        type: 'basicCard',
        options: ['Next'],
      },
      dependsOn: 'w1-q5',
      next: {
        Yes: 'w1-b1-q6',
        No: 'w1-b2-q6',
      },
    },
    {
      id: 'w1-b1-q6',
      type: 'singleChoice',
      question: 'What is most important to you?',
      component: {
        type: 'basicCard',
        options: ['Success', 'Romance', 'Stability', 'Freedom'],
      },
      next: 'finish',
    },
    {
      id: 'w1-b2-q6',
      type: 'singleChoice',
      question: 'Is emotional control tricky for you?',
      component: {
        type: 'basicCard',
        options: ['Yes', 'Sometimes', 'Rarely', 'Not at all'],
      },
      next: 'finish',
    },
    {
      id: 'w2-q3',
      type: 'singleChoice',
      question: 'Are you a parent?',
      component: {
        type: 'basicCard',
        options: ['Yes', 'No'],
      },
      next: 'w2-q4',
    },
    {
      id: 'w2-q4',
      type: 'singleChoice',
      question: '{q1} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
      component: {
        type: 'basicCard',
        options: [
          'I was unhappy with low things were going in my relationship',
          'I was unhappy with parts of my relationship, but some thing were working',
          'I was generally happy with my relationship',
          'I’ve never been in a relationship',
        ],
      },
      next: 'w2-q5',
    },
    {
      id: 'w2-q5',
      type: 'singleChoice',
      question: 'Is your partner an introvert or extrovert?',
      component: {
        type: 'basicCard',
        options: ['Introvert', 'Extrovert', 'A bit of both'],
      },
      next: 'w2-q6',
    },
    {
      id: 'w2-q6',
      type: 'singleChoice',
      question: 'What is your partner’s gender?',
      component: {
        type: 'basicCard',
        options: ['Male', 'Female'],
      },
      next: 'w2-q7',
    },
    {
      id: 'w2-q7',
      type: 'singleChoice',
      question: 'Do you agree with the statement below?',
      quote: 'My partner and I make sex a priority in our relationship',
      component: {
        type: 'basicCard',
        options: ['Strongly agree', 'Agree', 'Neutral', 'Disagree', 'Strongly disagree'],
      },
      next: 'w2-q8',
    },
    {
      id: 'w2-q8',
      type: 'singleChoice',
      question: 'When you think about your relationship goals, you feel...?',
      component: {
        type: 'basicCard',
        options: [
          'Optimistic! They are totally doable, with some guidance.',
          'Cautious. I’ve struggled before, but I’m hopeful.',
          'I’m feeling a little anxious, honestly.',
        ],
      },
      next: 'finish',
    },
    {
      id: 'finish',
      type: 'multiChoice',
      question: 'Where did you hear about us?',
      component: {
        type: 'basicCard',
        options: [
          'Poster or Billboard',
          'Friend or Family',
          'Instagram',
          'Direct Mail or Package Insert',
          'Online TV or Streaming TV',
          'TV',
          'Radio',
          'Search Engine (Google, Bing, etc.)',
          'Newspaper or Magazine',
          'Facebook',
          'Blog Post or Website Review',
          'Podcast',
          'Influencer',
          'Youtube',
          'Pinterest',
          'Other',
        ],
      },
      next: '/results',
    },
  ],
};
