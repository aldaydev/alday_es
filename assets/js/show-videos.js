
const data = [
    ["https://www.youtube.com/embed/q35yw5k8JqA?si=DSLljExUqNcBJILA",
    "https://www.youtube.com/embed/a4GZnXQbZbI?si=cfGcHAVLlgHOfQm7",
    "https://www.youtube.com/embed/lcOeyKjCt8A?si=IMxuXQImxpm1DhUW",
    "https://www.youtube.com/embed/ImCJBbfbB88?si=Ue-fksaMDKowyx2T",
    "https://www.youtube.com/embed/0RnIXY-GT6Q?si=nPUiIEosRHDesarx"],

    ["https://www.youtube.com/embed/5v-F83f77gA?si=SwIyJGVIdpS5-hFY",
    "https://www.youtube.com/embed/v9vCKl7JKiI?si=W8jU_Uky2MdqUt6e",
    "https://www.youtube.com/embed/KJiWp65jiuo?si=o5YnMdBRUd5mJmWl",
    "https://www.youtube.com/embed/b6SthSjKiFo?si=nMWsrJw7DXohuHvS",
    "https://www.youtube.com/embed/2b5uJR6eJGU?si=yEW2bCSrNX1TYNWr",
    "https://www.youtube.com/embed/7QuH5fp-ouY?si=ASa1is7popXPLMKo",
    "https://www.youtube.com/embed/0dWH3x4Rzo4?si=F4uGnyt3Iw63z5Uc",
    "https://www.youtube.com/embed/iSOyjFzQGEo?si=X2u7cK2D-SzEBWnz",
    "https://www.youtube.com/embed/Sl-mSid92Mk?si=b3YwsRlEUDn0SXKf",
    "https://www.youtube.com/embed/mMURYe94-yI?si=dGy3m9h5Iev2tf8t",
    
    ],

    ["https://www.youtube.com/embed/NqHl6cKPdKY?si=9Oafv4ywFBOLsISu", 
    "https://www.youtube.com/embed/LpeRvMRK0aY?si=3lxiaE9rxAfHW2sS",
    "https://www.youtube.com/embed/imQJt5tC5xQ?si=wSaJWsSve9WFScOd",
    "https://www.youtube.com/embed/3NdYxwl_T0w?si=KaAkt9qxdU3qjcmm",
    "https://www.youtube.com/embed/kEygWXVdWOE?si=I753ivurwIUUO78w"],

    ["https://www.youtube.com/embed/J5Da3145TI8?si=3QIt1PIwQRyTBWK9",
    'https://www.youtube.com/embed/sgL1AP0-7zM?si=daz6cu4kVTGPYPC8',
    'https://www.youtube.com/embed/-mX0VwsLZcQ?si=WrMG3fFSqKd1AFCE',
    'https://www.youtube.com/embed/kh2R4LE8U80?si=ZkBvZevDVvDCSqwH',
    'https://www.youtube.com/embed/aW_rky9sNXc?si=0-sbatr658fyQ6gH']
];

function createVideos(iframe){
    let video = document.createElement('iframe');
    video.setAttribute('class', 'video');
    video.setAttribute('src', iframe);
    video.setAttribute('title', 'YouTube video player');
    video.setAttribute('frameborder', '0');
    video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    video.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    video.setAttribute('allowfullscreen', ' ');

    return video;
}

let container = document.getElementById('videclips');
let title = document.createElement('h2');
let videoGrid = document.createElement('div');
videoGrid.setAttribute('class', 'videoGrid');
let main = document.getElementsByTagName('main');

function elegirTrabajo(value){

    container.setAttribute('class', 'visible');

    reset();

    if(value == '1'){
        let titleText = document.createTextNode('STREAM SESSIONS');
        title.appendChild(titleText);
        container.appendChild(title);
        for(i=0; i<data[0].length; i++){
            videoGrid.appendChild(createVideos(data[0][i]));
        }
    }else if(value == '2'){
        let titleText = document.createTextNode('UNA VICTORIA, MIL DERROTAS');
        title.appendChild(titleText);
        container.appendChild(title);
        for(i=0; i<data[1].length; i++){
            videoGrid.appendChild(createVideos(data[1][i]));
        }
    }else if(value == '3'){
        let titleText = document.createTextNode('ELUCUBRACIONES');
        title.appendChild(titleText);
        container.appendChild(title);
        for(i=0; i<data[2].length; i++){
            videoGrid.appendChild(createVideos(data[2][i]));
        }
    }else if(value == '4'){
        let titleText = document.createTextNode('LA JUNGLA (O MIRAR ATRÁS)');
        title.appendChild(titleText);
        container.appendChild(title);
        for(i=0; i<data[3].length; i++){
            videoGrid.appendChild(createVideos(data[3][i]));
        }
    }
    container.appendChild(videoGrid);
    main.appendChild(container);
}

function reset (){
    container.innerHTML = '';
    videoGrid.innerHTML = '';
    title.innerHTML = '';
}





