/** Global variable definitions */
'use strict';

interface Scripts {
  name: string;
  src: string;
}

export const contact = {
  emailAddress: 'jana.jurakova.makeup@gmail.com',
  facebook: 'https://www.facebook.com/jana.jurakova',
  twitter: 'https://twitter.com/JurakovaJana',
  instagram: 'https://www.instagram.com/janajurakova11mua/'
};

export const ScriptStore: Scripts[] = [
  {name: 'instagram', src: 'https://platform.instagram.com/en_US/embeds.js'}
];

export interface GalleryDefinition {
  mainImage: String;
  thumbnailImage: String;
  caption: String;
  size: String;
}

export const weddingGalleryDefinitions = [
  {
    mainImage: '43a.jpg',
    thumbnailImage: '43c.jpg',
    caption: 'C & V Wedding Photo 2017 1',
    size: '681x1024'
  }, {
    mainImage: '44a.jpg',
    thumbnailImage: '44c.jpg',
    caption: 'C & V Wedding Photo 2017 2',
    size: '681x1024'
  }, {
    mainImage: '45a.jpg',
    thumbnailImage: '45c.jpg',
    caption: 'C & V Wedding Photo 2017 3',
    size: '681x1024'
  }, {
    mainImage: '46a.jpg',
    thumbnailImage: '46c.jpg',
    caption: 'C & V Wedding Photo 2017 4',
    size: '681x1024'
  }, {
    mainImage: '53a.jpg',
    thumbnailImage: '53c.jpg',
    caption: 'S & T Wedding Photo 2018 1',
    size: '681x1024'
  }, {
    mainImage: '54a.jpg',
    thumbnailImage: '54c.jpg',
    caption: 'S & T Wedding Photo 2018 2',
    size: '681x1024'
  }, {
    mainImage: '56a.jpg',
    thumbnailImage: '56c.jpg',
    caption: 'S & T Wedding Photo 2018 3',
    size: '681x1024'
  }, {
    mainImage: '57a.jpg',
    thumbnailImage: '57c.jpg',
    caption: 'S & T Wedding Photo 2018 4',
    size: '681x1024'
  }, {
    mainImage: '1a.jpg',
    thumbnailImage: '1c.jpg',
    caption: 'S & J Wedding Photo 2019 1',
    size: '1024x1534'
  }, {
    mainImage: '2a.jpg',
    thumbnailImage: '2c.jpg',
    caption: 'S & J Wedding Photo 2019 2',
    size: '1024x1536'
  }, {
    mainImage: '3a.jpg',
    thumbnailImage: '3c.jpg',
    caption: 'S & J Wedding Photo 2019 3',
    size: '1024x1536'
  }, {
    mainImage: '4a.jpg',
    thumbnailImage: '4c.jpg',
    caption: 'S & J Wedding Photo 2019 4',
    size: '1024x1536'
  }, {
    mainImage: '5a.jpg',
    thumbnailImage: '5c.jpg',
    caption: 'S & J Wedding Photo 2019 5',
    size: '1024x1536'
  }, {
    mainImage: '6a.jpg',
    thumbnailImage: '6c.jpg',
    caption: 'S & J Wedding Photo 2019 6',
    size: '1024x1536'
  }

];

export const bridesGalleryDefinitions = [
  {
    mainImage: '1a.jpg',
    thumbnailImage: '1c.jpg',
    caption: 'Viera 2010 1',
    size: '1024x683'
  }, {
    mainImage: '2a.jpg',
    thumbnailImage: '2c.jpg',
    caption: 'Viera 2010 2',
    size: '1024x683'
  }, {
    mainImage: '3a.jpg',
    thumbnailImage: '3c.jpg',
    caption: 'Luisa 2017 1',
    size: '1024x683'
  }, {
    mainImage: '4a.jpg',
    thumbnailImage: '4c.jpg',
    caption: 'Luisa 2017 2',
    size: '1024x683'
  }, {
    mainImage: '5a.jpg',
    thumbnailImage: '5c.jpg',
    caption: 'Ines 2018 1',
    size: '681x1021'
  }, {
    mainImage: '6a.jpg',
    thumbnailImage: '6c.jpg',
    caption: 'Ines 2018 1',
    size: '681x1021'
  }, {
    mainImage: '7a.jpg',
    thumbnailImage: '7c.jpg',
    caption: 'Charlotte 2018 1',
    size: '681x1021'
  }, {
    mainImage: '8a.jpg',
    thumbnailImage: '8c.jpg',
    caption: 'Charlotte 2018 2',
    size: '681x1021'
  }, {
    mainImage: '9a.jpg',
    thumbnailImage: '9c.jpg',
    caption: 'Veronika 2018 1',
    size: '681x1021'
  }, {
    mainImage: '10a.jpg',
    thumbnailImage: '10c.jpg',
    caption: 'Veronika 2018 2',
    size: '681x1021'
  }, {
    mainImage: '11a.jpg',
    thumbnailImage: '11c.jpg',
    caption: 'Kate 2018 1',
    size: '681x1021'
  }, {
    mainImage: '12a.jpg',
    thumbnailImage: '12c.jpg',
    caption: 'Kate 2018 2',
    size: '1024x683'
  }, {
    mainImage: '13a.jpg',
    thumbnailImage: '13c.jpg',
    caption: 'Kate 2018 3',
    size: '681x1021'
  }, {
    mainImage: '14a.jpg',
    thumbnailImage: '14c.jpg',
    caption: 'Kate 2018 4',
    size: '1024x683'
  }, {
    mainImage: '15a.jpg',
    thumbnailImage: '15c.jpg',
    caption: 'Luisa 2018 3',
    size: '1024x683'
  }, {
    mainImage: '16a.jpg',
    thumbnailImage: '16c.jpg',
    caption: 'Luisa 2018 4',
    size: '1024x683'
  }, {
    mainImage: '17a.jpg',
    thumbnailImage: '17c.jpg',
    caption: 'Lenka 2018 1',
    size: '681x1021'
  }, {
    mainImage: '18a.jpg',
    thumbnailImage: '18c.jpg',
    caption: 'Lenka 2018 2',
    size: '1024x683'
  }, {
    mainImage: '19a.jpg',
    thumbnailImage: '19c.jpg',
    caption: 'Dora 2018 1',
    size: '681x1021'
  }, {
    mainImage: '20a.jpg',
    thumbnailImage: '20c.jpg',
    caption: 'Dora 2018 2',
    size: '681x1021'
  }, {
    mainImage: '21a.jpg',
    thumbnailImage: '21c.jpg',
    caption: 'Dora 2018 3',
    size: '681x1021'
  }, {
    mainImage: '22a.jpg',
    thumbnailImage: '22c.jpg',
    caption: 'Dora 2018 4',
    size: '681x1021'
  }, {
    mainImage: '23a.jpg',
    thumbnailImage: '23c.jpg',
    caption: 'Simona 2018 1',
    size: '908x1021'
  }, {
    mainImage: '24a.jpg',
    thumbnailImage: '24c.jpg',
    caption: 'Simona 2018 2',
    size: '681x1021'
  }, {
    mainImage: '25a.jpg',
    thumbnailImage: '25c.jpg',
    caption: 'Yaasmin 2019 1',
    size: '683x1024'
  }, {
    mainImage: '26a.jpg',
    thumbnailImage: '26c.jpg',
    caption: 'Paulina 2019 1',
    size: '683x1024'
  }
];

export const maternityGalleryDefinitions = [
  {
    mainImage: '38a.jpg',
    thumbnailImage: '38c.jpg',
    caption: 'Caroline Pretty & Pregnant Photo 2018 1',
    size: '681x1021'
  }, {
    mainImage: '39a.jpg',
    thumbnailImage: '39c.jpg',
    caption: 'Caroline Pretty & Pregnant Photo 2018 2',
    size: '681x1021'
  }, {
    mainImage: '40a.jpg',
    thumbnailImage: '40c.jpg',
    caption: 'Caroline Pretty & Pregnant Photo 2018 3',
    size: '681x1021'
  }, {
    mainImage: '41a.jpg',
    thumbnailImage: '41c.jpg',
    caption: 'Caroline Pretty & Pregnant Photo 2018 4',
    size: '681x1021'
  }, {
    mainImage: '42a.jpg',
    thumbnailImage: '42c.jpg',
    caption: 'Caroline Pretty & Pregnant Photo 2018 5',
    size: '681x1021'
  }
];

export const henpartyGalleryDefinitions = [
  {
    mainImage: '1a.jpg',
    thumbnailImage: '1b.jpg',
    caption: 'Hen Party Preparation 1',
    size: '1024x768'
  }, {
    mainImage: '2a.jpg',
    thumbnailImage: '2b.jpg',
    caption: 'Hen Party Preparation 2',
    size: '1024x768'
  }, {
    mainImage: '3a.jpg',
    thumbnailImage: '3b.jpg',
    caption: 'Hen Party Preparation 3',
    size: '1024x768'
  }, {
    mainImage: '4a.jpg',
    thumbnailImage: '4b.jpg',
    caption: 'Hen Party Makeup 1',
    size: '1024x768'
  }, {
    mainImage: '5a.jpg',
    thumbnailImage: '5b.jpg',
    caption: 'Hen Party Makeup 2',
    size: '1024x768'
  }, {
    mainImage: '6a.jpg',
    thumbnailImage: '6b.jpg',
    caption: 'Hen Party Makeup 3',
    size: '1024x768'
  }, {
    mainImage: '7a.jpg',
    thumbnailImage: '7b.jpg',
    caption: 'Hen Party Makeup 4',
    size: '1024x768'
  }, {
    mainImage: '8a.jpg',
    thumbnailImage: '8b.jpg',
    caption: 'Hen Party Makeup 5',
    size: '1024x768'
  }, {
    mainImage: '9a.jpg',
    thumbnailImage: '9b.jpg',
    caption: 'Hen Party Makeup 6',
    size: '1024x814'
  }, {
    mainImage: '10a.jpg',
    thumbnailImage: '10b.jpg',
    caption: 'Hen Party Makeup 7',
    size: '1024x761'
  }, {
    mainImage: '11a.jpg',
    thumbnailImage: '11b.jpg',
    caption: 'Hen Party Makeup 8',
    size: '1024x768'
  }
];


export const royalAscotGalleryDefinitions = [
  {
    mainImage: '1a.jpg',
    thumbnailImage: '1b.jpg',
    caption: 'Royal Ascot 1',
    size: '682x1024'
  }, {
    mainImage: '2a.jpg',
    thumbnailImage: '2b.jpg',
    caption: 'Royal Ascot 2',
    size: '682x1024'
  }, {
    mainImage: '3a.jpg',
    thumbnailImage: '3b.jpg',
    caption: 'Royal Ascot 3',
    size: '684x1024'
  }, {
    mainImage: '4a.jpg',
    thumbnailImage: '4b.jpg',
    caption: 'Royal Ascot 4',
    size: '684x1024'
  }, {
    mainImage: '5a.jpg',
    thumbnailImage: '5b.jpg',
    caption: 'Royal Ascot 5',
    size: '1024x1024'
  }, {
    mainImage: '6a.jpg',
    thumbnailImage: '6b.jpg',
    caption: 'Royal Ascot 6',
    size: '1024x683'
  }, {
    mainImage: '7a.jpg',
    thumbnailImage: '7b.jpg',
    caption: 'Royal Ascot 7',
    size: '1024x709'
  }, {
    mainImage: '8a.jpg',
    thumbnailImage: '8b.jpg',
    caption: 'Jana Jurakova Makeup and Hair by Dar',
    size: '1024x683'
  }
];
