export interface Blog {
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  body: string;
  slug: string;
}

export const blogs: Blog[] = [
  {
    title: 'Welcome to the Retro Blog',
    subtitle: 'An introduction',
    category: 'General',
    author: 'Admin',
    date: '2024-01-01',
    body: 'This is the first post on our totally retro themed blog.',
    slug: 'welcome-to-the-retro-blog'
  },
  {
    title: 'Second Post',
    subtitle: 'More content',
    category: 'Updates',
    author: 'Admin',
    date: '2024-02-01',
    body: 'Here is another entry with more exciting news.',
    slug: 'second-post'
  },
  {
    title: 'Third Post',
    subtitle: 'Even more',
    category: 'Updates',
    author: 'Admin',
    date: '2024-03-01',
    body: 'The retro fun continues with yet another post.',
    slug: 'third-post'
  },
  {
    title: 'Fourth Post',
    subtitle: 'Still going',
    category: 'General',
    author: 'Admin',
    date: '2024-04-01',
    body: 'We just keep writing posts for the sake of it.',
    slug: 'fourth-post'
  },
  {
    title: 'Fifth Post',
    subtitle: 'Wrapping up',
    category: 'General',
    author: 'Admin',
    date: '2024-05-01',
    body: 'Our final post in this small demo list.',
    slug: 'fifth-post'
  }
];
