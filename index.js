let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");
let bookmarkList = document.getElementById("bookmarkList");
let nameError=document.getElementById("nameError")
let urlError =document.getElementById("urlError")

let contener = [];


let siteUrlValed2=siteUrl.value
function submit() {
    if (siteNameValed()==true && siteUrlValed()==true) {
        let siteNameValue = siteName.value;
        let siteUrlValue = siteUrl.value;
        let progect = {
          name: siteNameValue,
          viste: siteUrlValue,
        };  
      contener.push(progect)
        show(contener)
        clerpro()
        cleer() 
    }else{
        console.log(siteNameValed,siteUrlValed);
    }
  
}
function show(arr) {
    let conter = "";
    for (let i = 0; i < arr.length; i++) {
      conter += `<div class="d-flex justify-content-between" style="background-image: linear-gradient(#EEE,#FFF);margin: 10px 0;padding: 20px">
          <h2>${arr[i].name}</h2>
              <div>
                  <a class="btn btn-primary" href="https://${arr[i].viste}" target="_blank">visit</a>
                  <button class="btn btn-danger btndelete" onclick="Delete(${i})">Delete</button>
              </div>        
          </div>`;
    }
    bookmarkList.innerHTML=conter
    localStorage.setItem("prdacte2",JSON.stringify(contener))
    
}
function Delete(e){
   contener.splice(e,1)
    show(contener)
}
if (localStorage.getItem("prdacte2") != null) {
   contener=JSON.parse(localStorage.getItem("prdacte2"))
   show(contener)
}
function clerpro() {
    siteName.value=""
    siteUrl.value=""
    
}

let regexName=/^[\w]{4,15}$/
let regexUrl =/^www\.[\w]{4,10}\.com$/
let siteNameValed=
siteName.oninput=function siteNameValed() {
    if (regexName.test(siteName.value)) {
        nameError.classList.replace("alert-dismissible","alert-info")
        nameError.textContent="Completed"
        return true
    }
    else{
        nameError.classList.remove("alert-info")
         nameError.classList.replace("d-none","d-block")
            nameError.classList.add("alert-dismissible")
            nameError.textContent="Pless Enter 4 Letters or More "
            return false
    }
    
}
let siteUrlValed=
siteUrl.oninput=function siteUrlValed() {
    if (regexUrl.test(siteUrl.value)) {
        urlError.classList.replace("alert-dismissible","alert-info")
        urlError.textContent="Completed"
        return true
    }
    else{
         urlError.classList.replace("d-none","d-block")
            urlError.classList.remove("alert-info")
            urlError.classList.remove("alert-danger")
            urlError.classList.add("alert-dismissible")
            urlError.textContent="Pless Enter www.site.com"
            return false
            
    }
}
function cleer() {
    urlError.classList.replace("d-block","d-none")
    nameError.classList.replace("d-block","d-none")
    
}



