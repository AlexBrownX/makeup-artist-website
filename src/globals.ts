/** Global variable definitions */
'use strict';

interface Scripts {
    name: string;
    src: string;
}

export const ScriptStore: Scripts[] = [
    {name: 'instagram', src: 'https://platform.instagram.com/en_US/embeds.js'}
];

export const galleryDefinition = [
    {
        src: './assets/images//wedding/1a.jpg',
        msrc: './assets/images//wedding/1b.jpg',
        title: 'Caroline\'s Wedding',
        author: 'Jana Jurakova',
        w: 1024,
        h: 681
    },
    {
      src: './assets/images//wedding/2a.jpg',
      msrc: './assets/images//wedding/2b.jpg',
      title: 'Caroline\'s Wedding',
      author: 'Jana Jurakova',
      w: 1024,
      h: 681
  }
];
