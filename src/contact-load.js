//This file will contain the about-section page load function
export function contactLoad(){
    const contentDiv = document.getElementById("content");
    const contactDiv = document.createElement("div");
    contentDiv.appendChild(contactDiv);

    const contacth1 = document.createElement("h1");
    contacth1.textContent = "Contact Us!";
    contactDiv.appendChild(contacth1);


    //First contact creation, appending, and textContent
    const firstContact = document.createElement("div");
    contactDiv.appendChild(firstContact);

    const firstContacth3 = document.createElement("h3");
    firstContacth3.textContent = "Simba";
    firstContact.appendChild(firstContacth3);

    const firstContactp1 = document.createElement("p");
    firstContactp1.textContent = "Owner";
    firstContact.appendChild(firstContactp1);

    const firstContactp2 = document.createElement("p");
    firstContactp2.textContent = "902-424-8132";
    firstContact.appendChild(firstContactp2);

    const firstContactp3 = document.createElement("p");
    firstContactp3.textContent = "SimbaTheOwner@realemail.com";
    firstContact.appendChild(firstContactp3);


    //Second contact creation, appending, and textContact
    const secondContact = document.createElement("div");
    contactDiv.appendChild(secondContact);

    const secondContacth3 = document.createElement("h3");
    secondContacth3.textContent = "Rafiki";
    secondContact.appendChild(secondContacth3);

    const secondContactp1 = document.createElement("p");
    secondContactp1.textContent = "Customer Service Rep";
    secondContact.appendChild(secondContactp1);

    const secondContactp2 = document.createElement("p");
    secondContactp2.textContent = "17";
    secondContact.appendChild(secondContactp2);

    const secondContactp3 = document.createElement("p");
    secondContactp3.textContent = "What's an E-mail?";
    secondContact.appendChild(secondContactp3);


    //Third contact creation, appending, and textContact
    const thirdContact = document.createElement("div");
    contactDiv.appendChild(thirdContact);

    const thirdContacth3 = document.createElement("h3");
    thirdContacth3.textContent = "Pumbaa";
    thirdContact.appendChild(thirdContacth3);

    const thirdContactp1 = document.createElement("p");
    thirdContactp1.textContent = "Head Chef";
    thirdContact.appendChild(thirdContactp1);

    const thirdContactp2 = document.createElement("p");
    thirdContactp2.textContent = "1-800-EAT-HERE";
    thirdContact.appendChild(thirdContactp2);

    const thirdContactp3 = document.createElement("p");
    thirdContactp3.textContent = "warthoggsRawesome@epic.com";
    thirdContact.appendChild(thirdContactp3);


    //Apply ID's for all styling of DOM created contact elements
    contactDiv.id = "contact";
    firstContact.id = "firstContact";
    secondContact.id = "secondContact";
    thirdContact.id = "thirdContact";
}