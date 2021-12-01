// (1) The global list
const contactList = [
    { 
	  name: "Raquel Ervin", 
	  phone: "+1 555 555-5555", 
	  address: "123 front st, Unit #1, Dakota City",    
	  email: "rocket@gmail.com",  
    },  
    {
      name: "Barry Allen",
      phone: "+1 444 555-5555", 
      address: "125 front st, Unit #6, Dakota City",    
      email: "alpine@gmail.com", 
    },
    {
      name: "Beverly Crusher",
      phone: "+1 333 555-5555", 
      address: "121 back st, Unit #9, Dakota City",    
      email: "tree@gmail.com", 
    },
    {
      name: "Diana Prince",
      phone: "+1 222 555-5555", 
      address: "123 west st, Unit #3, Dakota City",    
      email: "star@gmail.com"
    }
  ];


// First JavaScript function

function cleanUpIndex() {
    var contant_cleaner = document.getElementsByClassName("contact");
    for(var i = contant_cleaner.length - 1; 0 <= i; i--)
    if(contant_cleaner[i] && contant_cleaner[i].parentElement)
    contant_cleaner[i].parentElement.removeChild(contant_cleaner[i]);
}

// Second JavaScript function

function addEventListener(contactList) {

document.addEventListener("click",contactList );

}

// Third JavaScript function

function renderIndex(contactList) {
    const element1 = document.querySelector('div');

    element1.innerHTML =
        `<a href="page3.html"><div class="contact"><p>${contactList[1].name}</p></div></a>
        <a href="page3.html"><div class="contact"><p>${contactList[2].name}</p></div></a>
        <a href="page3.html"><div class="contact"><p>${contactList[3].name}</p></div></a>`
    
    document.body.appendChild(element1);

}




// Fourth JavaScript function

function createSingleIndex() {
    const contactList = []

    const element1 = document.querySelector('div');

    element1.innerHTML =
        '<a href="page3.html"><div class="contact"><p>' + indexList[0] + '</p></div></a>' 
       
    

}


// Fifth JavaScript function

function renderView(contactList) {

    const element1 = document.querySelector('div');
  
    element1.innerHTML =
        `<div class="contactinfo">
         <div class="contactname">
         ${contactList[0].name}
             <img src="./img/profile.jpg" class="profilepic" alt="Profile picture"> </img>
         </div>
         <div class="contactemail">email: ${contactList[0].email}</div>
         <div class="contactphone">cell: ${contactList[0].phone}</div>
         <div class="contactaddress">address: ${contactList[0].address}</div>
         <div class="buttons">
            <button class="button edit" value="Edit">Edit</button>
            <button class="button close" value="Close">Close</button>
        </div>
        </div>`
  
    document.body.appendChild(element1);
  
  }


// Sixth JavaScript function

function cleanUpCreate() {
    var contant_cleaner = document.getElementsByClassName("contactedit");
    for(var i = contant_cleaner.length - 1; 0 <= i; i--)
    if(contant_cleaner[i] && contant_cleaner[i].parentElement)
    contant_cleaner[i].parentElement.removeChild(contant_cleaner[i]);
}



// Seventh JavaScript function

function renderCreate() {

    const element1 = document.querySelector('div');
    const element1 = document.addEventListener('cancel');

    element1.innerHTML =
    '<div class="contactedit">' +
                '<div class="contactimg">' +
                    '<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">' +
                '</div>' +
                '<div class="form">' +
                    '<form>' +
                        '<div class="inputcontainer">' +
                            '<input type="text" id="contactname" name="contactname" placeholder="Contact Name">' +
                            '<button class="extrafield" id="extranamefield" name="extranamefield">+</button>' +
                        '</div>' +

                        '<div class="inputcontainer">' +
                            '<input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">' +
                            '<button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>' +
                        '</div>' +

                        '<div class="inputcontainer">' +
                            '<input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">' +
                            '<button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>' +
                        '</div>' +
                        
                        '<div class="inputcontainer">' +
                            '<input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">' +
                            '<button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>' +
                        '</div>' +

                        '<div class="buttons">' +
                            '<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>' +
                            '<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>' +
                        '</div>' +
                    '</form>' +
                '</div>' +
            '</div>'

    document.body.appendChild(element1);

}

// 10th requirement for A2P2
document.addEventListener("DOMContentLoaded", function() {
    cleanUpIndex()
    renderIndex(contactList)
});