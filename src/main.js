import './style.css';

import { Capacitor } from '@capacitor/core';
import { Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

document.querySelector('#app').innerHTML = `
    <iframe
        id="forestFrame"
        src="/forest.html"
        style="
            width:100%;
            height:100vh;
            border:none;
            display:block;
        ">
    </iframe>
`;

const frame = document.getElementById('forestFrame');

frame.addEventListener('load', () => {

    frame.contentWindow.Capacitor = Capacitor;
    frame.contentWindow.Filesystem = Filesystem;
    frame.contentWindow.Share = Share;

});
