let fileList = document.getElementById('testFileList');
let fileUploader = document.getElementById('testFile');


console.log(
`
  _  _________  __      __   __      __
 | | |__   __| |  \\    /  | |  \\    /  |
 | |    | |    |   \\  /   | |   \\  /   |
 | |    | |    | |\\ \\/ /| | | |\\ \\/ /| | 
 |_|    |_|    |_| \\__/ |_| |_| \\__/ |_|
 
 `
);

console.log('Привет! Как те сайт и апи?')
console.log('Норм? Хочешь поучаствовать в разработке?')
console.log('Пиши Владу https://vk.com/vlavilon');

if(fileUploader)
{

fileUploader.onchange = (e) => {

    fileList.innerHTML = "";

    for(let file of fileUploader.files)
    {
        
        addFile(file);
    }
    
};


function addFile(file) {

    let types = file.type.split('/')
    let type = types[1] || types[0] || 'file';
    let name =  file.name

    let brick = document.createElement('div');
    brick.className = "loader-list-item";
    brick.title = name;
    brick.innerHTML = type;

    let box = document.createElement('div');
    box.className = "loader-pregress-box";
   
    let progress = document.createElement('div');
    progress.className = "loader-progress";

    box.append(progress);    
    brick.append(box);
    fileList.append(brick);

    uploadFile(file,brick,progress);
}


function uploadFile(file,element,progress)
{
    let data = new FormData();
    data.append('file',file);

    let request = new XMLHttpRequest();
    request.open('post','/conversation/upload');

    request.upload.addEventListener('progress', function(e) {
        
        let percent_complete = (e.loaded / e.total)*100;
        progress.style.width = percent_complete + "%";
        
    });

    request.addEventListener('load', function(e) {
        
        console.log(request.status);    
        console.log(request.response);

        let answer = JSON.parse(request.response);
        if(answer.error)
        {
            element.classList.add("loader-list-item-error");
            element.innerText = ">50MB";
        }
        else
        {
            element.classList.add("loader-list-item-done");
            element.onclick = (e) => { getFile(answer[0]) }; 
        }

    });

    request.send(data);
}

function getFile(fileId)
{
    let a = document.createElement('a');
    a.href = "/file/"+fileId;
    a.click();
}

function run(tag)
{
    let elems = document.getElementsByClassName('params-input');
    let panel = document.getElementById(tag);

    let data = {};
    for(let e of elems)
    {
        if(e.id.indexOf(tag) != -1)
        {
            data[e.id.split('-')[1]] = e.value;
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", tag.replace(/_/gi,'/'),true);
    xhr.setRequestHeader('Content-Type','application/json');

    xhr.addEventListener('loadend', function(e) {
        
        console.log(xhr.status);    
        console.log(xhr.response);

        let resp = {};
        try {
            resp = JSON.parse(xhr.response);
            if(resp.token)
            {
                document.cookie = `token=${resp.token}; expires=Thu, 18 Dec 2033 12:00:00 UTC`;
            }
        }
        catch (ex) {
            resp = xhr.response;
         }

        panel.innerHTML = '<b>Status:</b>' + xhr.status + "<br>" + JSON.stringify(resp,null,4);

    });

    xhr.send(JSON.stringify(data));

}
}

let scrollAmination = false;
let scrollPage = 0;
let pages = document.getElementsByClassName('sheet');
let scrollPageNumber = pages.length;
let marks = document.getElementsByClassName('mark');

let mode = () => document.body.clientWidth < 1100;

for(let i = 0; i < marks.length; ++i)
{
    marks[i].onclick = (e) => { movePage(i - scrollPage);  }
}

document.body.onwheel = function(e) {

    movePage(Math.sign(e.deltaY),e);
}

function movePage(move,e)
{

    if(scrollAmination)
        return;

    let content = pages[scrollPage].querySelector('.sheet-content');   

    if(move === 0)
    {
        content.scroll({
            top: 0,
            left: 0,
            behavior : 'smooth'
        })
        return;
    }

    if(e)
    {
        if(content.scrollTop !== (content.scrollHeight - content.clientHeight) && e.deltaY > 0)
            return;

        if(content.scrollTop !== 0 && e.deltaY < 0)
            return; 
    }

    scrollAmination = true;


    let height = document.getElementById('s0').clientHeight;
    let width = document.getElementById('s0').clientWidth;

    marks[scrollPage].removeAttribute('selected');
    scrollPage += move;
    scrollPage = Math.min(scrollPageNumber-1,Math.max(0,scrollPage));
    marks[scrollPage].setAttribute('selected','selected');

    let topOffset = 0;
    let leftOffset = 0;

    if(mode())
    {
        leftOffset = scrollPage * width;
    }
    else
    {
        topOffset = scrollPage * height;
    }

    document.getElementById('win').scroll({
        top : topOffset ,
        left : leftOffset,
        behavior : 'smooth'
    })

    if(scrollPage === 0)
        document.getElementById('control').classList.add('hidden-control');
    else
        document.getElementById('control').classList.remove('hidden-control');

    isScrolling(document.getElementById('win'),topOffset,leftOffset).then(() => { scrollAmination = false; });
}

function isScrolling(element, top, left)
{
    return new Promise((resolve,reject) => {

        let interval = setInterval(() => {

            if(element.scrollTop == top && element.scrollLeft == left)
            {
                clearInterval(interval);
                resolve();
            }

        },25);

    });
}

window.onresize = () => {

    let height = document.getElementById('s0').clientHeight;
    let width = document.getElementById('s0').clientWidth;

    document.getElementById('win').scroll(
        scrollPage * width,
        scrollPage * height,
    );
}

let start = null;
window.ontouchstart = function(e){
    if(e.touches.length === 1){
        start = e.touches.item(0).clientX;
    } else {
        start = null;
    }
}

window.ontouchend = function(e){
    let  offset = 70;
    if(start){
        let end = e.changedTouches.item(0).clientX;

        if(end > start + offset){
            movePage(-1);
        }
        if(end < start - offset ){
            movePage(1);
        }
    }
}

document.getElementById('mvdir').onclick = () => { movePage(1); }