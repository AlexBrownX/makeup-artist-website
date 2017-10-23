/** Global variable definitions */
'use strict';

export const animationsEnabled = '0';

interface Scripts {
    name: string;
    src: string;
}

export const ScriptStore: Scripts[] = [
    {name: 'instagram', src: 'https://platform.instagram.com/en_US/embeds.js'}
];
