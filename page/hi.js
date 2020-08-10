let fileList = document.getElementById('testFileList');
let fileUploader = document.getElementById('testFile');

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