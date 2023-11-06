fetch("https://northwind.vercel.app/api/categories")
.then(res=>res.json())
.then(data=>{
    data.forEach(myelement => {
        createCard(myelement.id,myelement.name,myelement.description)
        
    });
})
.catch(err=>console.log("error" , err.message))

function createCard(id,name,description,) {
    const card =document.createElement("div")
    const cardid =document.createElement("div")
    const cardname =document.createElement("a")
    const carddescription =document.createElement("div")

    // card.classList.add(card)
    cardname.setAttribute("href", "./newtab.html#" +id )


    card.style.border="1px solid black"
    card.style.margin="5px"
    card.style.width="250px"
    card.style.height="200px "
    card.style.borderRadius="10px"
    card.style.background="rgb(81, 81, 156)"
    card.style.color="#fff"
    

    cardid.textContent=id
    cardname.textContent=name   
    carddescription.textContent=description+"azn"

    // cardid.textContent=id
    // cardname.textContent=name
    // cardunitPrice=unitPrice
    // cardunitInstock=unitsInstock

    card.append(cardid,cardname,carddescription)

    document.body.appendChild(card)

}


console.log(createCard);








