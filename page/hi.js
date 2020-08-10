
let fileList = document.getElementById('testFileList');
let fileUploader = document.getElementById('testFile');

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