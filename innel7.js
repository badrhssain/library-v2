    var inpTitre= document.getElementById("titre");
    var inpNom= document.getElementById("nom");
    var inpPrix= document.getElementById("prix");
    var inpDate = document.getElementById("date");
    var inpEmail =document.getElementById("email");
    var inpType =document.getElementsByClassName("type");
    //let inpType = document.querySelector('input[name="r"]:checked');
    var inpLangue =document.getElementById("select");
    var button=document.getElementById("button");


    button.addEventListener('click',()=>{
        var varo=[];
        function validation(elements,reg){
            var regEx=RegExp(reg,'g');
            if(!regEx.test(elements.value)){
                elements.style.border='3px solid red';
                varo.push('error');
            }
            else{
                elements.style.border='3px solid green';
            }
        }
        validation(inpTitre,'\\w');
        validation(inpNom,'\\w');
        validation(inpDate,'\\w');
        validation(inpPrix,'(^(\\d{1,5},\\d{1,2})$)|(^(\\d{1,5})$)');
        validation(inpEmail,'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
        ///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if(inpType == null){
            alert('select a type');
            varo.push('error');
        }
        
        if(varo.length !=0){
            document.getElementById('varo').innerText='chihaja';
        }
    })


 class ouvrage {
        
    constructor (titre, nom, prix, date, email, type, langue){
        this.titre = titre;
        this.nom = nom;
        this.prix= prix;
        this.date= date;
        this.email= email;
        this.type= type;
        this.langue= langue;
        }
        DetailOuvrage(){
            return "L'ouvrage " +this.titre+" est un "+this.type+" en langue "+this.langue+" écrit par "+this.nom+" et publié le "+this.date+".Le prix de "+this.titre+" est de "+this.prix+"Dhs.";
    }}

    function checked(elem){
        elem.className += ' fa-edit';
        elem.classList.remove('fa-check');
        elem.parentElement.parentElement.setAttribute('contenteditable','false');
        elem.removeAttribute('onclick');
        elem.setAttribute('onclick','edited(this)');
    }

    let lst =[] ;
    var table = document.getElementById("table");
    
function show(){
        let inpType =document.querySelector("input[name = 'r']:checked");
    
    var x = new ouvrage(inpTitre.value, inpNom.value, inpPrix.value, inpDate.value, inpEmail.value, inpType.value, inpLangue.value);
    lst.push(x);
    for(var i=0;i<lst.length;i++){
        var tr  = document.createElement("tr");
        tr.innerHTML = `<td>${lst[i].titre}</td>
        <td>${lst[i].nom}</td>
        <td>${lst[i].prix}</td>
        <td>${lst[i].date}</td>
        <td>${lst[i].email}</td>
        <td>${lst[i].langue}</td>
        <td>${lst[i].type}</td>
        `
        table.appendChild(tr);
    }
    }
    