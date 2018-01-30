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

export const galleryDefinitions = [
    {
        mainImage: '1a.jpg',
        thumbnailImage: '1c.jpg',
        caption: 'Wedding Photo 2017 1',
        size: '1024x681'
    }, {
        mainImage: '2a.jpg',
        thumbnailImage: '2c.jpg',
        caption: 'Wedding Photo 2017 2',
        size: '1024x681'
    }, {
        mainImage: '3a.jpg',
        thumbnailImage: '3c.jpg',
        caption: 'Wedding Photo 2017 3',
        size: '1024x681'
    }, {
        mainImage: '4a.jpg',
        thumbnailImage: '4c.jpg',
        caption: 'Wedding Photo 2017 4',
        size: '1024x681'
    }, {
        mainImage: '5a.jpg',
        thumbnailImage: '5c.jpg',
        caption: 'Wedding Photo 2017 5',
        size: '1024x681'
    }, {
        mainImage: '6a.jpg',
        thumbnailImage: '6c.jpg',
        caption: 'Wedding Photo 2017 6',
        size: '1024x681'
    }, {
        mainImage: '7a.jpg',
        thumbnailImage: '7c.jpg',
        caption: 'Wedding Photo 2017 7',
        size: '1024x681'
    }, {
        mainImage: '8a.jpg',
        thumbnailImage: '8c.jpg',
        caption: 'Wedding Photo 2017 8',
        size: '1024x681'
    }, {
        mainImage: '9a.jpg',
        thumbnailImage: '9c.jpg',
        caption: 'Luisa Wedding Photo 2017 1',
        size: '1024x683'
    }, {
        mainImage: '10a.jpg',
        thumbnailImage: '10c.jpg',
        caption: 'Luisa Wedding Photo 2017 2',
        size: '1024x683'
    }, {
        mainImage: '11a.jpg',
        thumbnailImage: '11c.jpg',
        caption: 'Luisa Wedding Photo 2017 3',
        size: '1024x683'
    }, {
        mainImage: '12a.jpg',
        thumbnailImage: '12c.jpg',
        caption: 'Luisa Wedding Photo 2017 4',
        size: '681x1021'
    }, {
        mainImage: '13a.jpg',
        thumbnailImage: '13c.jpg',
        caption: 'Luisa Wedding Photo 2017 5',
        size: '681x957'
    }, {
        mainImage: '14a.jpg',
        thumbnailImage: '14c.jpg',
        caption: 'Luisa Wedding Photo 2017 6',
        size: '681x946'
    }, {
        mainImage: '15a.jpg',
        thumbnailImage: '15c.jpg',
        caption: 'Viera Wedding Photo 2017 1',
        size: '681x1021'
    }
];
