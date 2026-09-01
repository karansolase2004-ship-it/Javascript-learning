let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    // when we click on our button it will internally click input type=file which we have done display : none and shows us the file explorer to select file
    fileinp.click();
})

fileinp.addEventListener("change",function(dets){
    // u will get file name in the properties of event in below mentioned path 
    // console.log(dets.target.files[0].name);

    // now we will change upload files text with selected file name 
    const file = dets.target.files[0];
    if(file)
    {
        btn.textContent = file.name;
    }
});