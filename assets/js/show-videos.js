const data = [
    ['<iframe width="560" height="315" src="https://www.youtube.com/embed/J5Da3145TI8?si=3QIt1PIwQRyTBWK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        'hola3'], 
    ["hola1", "hola2"], 
    []];

function createVideos(iframe){
    let video = document.createElement('iframe');
    video.outerHTML = iframe;

    return video;
}

function elegirTrabajo(value){
    let container = document.getElementById('videclips');
    let title = document.createElement('h2');
    let videoGrid = document.createElement('div');

    if(value == '1'){
        let titleText = document.createTextNode('LA JUNGLA (O MIRAR ATRÁS');
        title.appendChild(titleText);
        for(i=0; i<data[0].length; i++){
            videoGrid.appendChild(createVideos(data[1][i]));
        }
    }

    container.appendChild(videoGrid);
    document.body.appendChild(container);
}

console.log(elegirTrabajo(1));




