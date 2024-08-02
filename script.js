
const names=document.querySelector(".incont select");


for(let select of names){
    for(code in countryList){
        let opt=document.createElement("option");
        opt.innerText=code;
        opt.value=code;
        select.append(opt);
    }
}