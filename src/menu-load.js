//This file will contain the menu-page load function
export function menuLoad(){
    const contentDiv = document.getElementById("content");
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    contentDiv.appendChild(menuDiv);
    
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    menuDiv.appendChild(menuTitle);


    //Drinks menu:
    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "Drinks";
    menuDiv.appendChild(drinksTitle);

    const drink1 = document.createElement("div");
    const drink1title = document.createElement("h2");
    const drink1desc = document.createElement("p");
    const drink1price = document.createElement("h4");
    const drink1picture = document.createElement("div");
    drink1title.textContent = "Water";
    drink1desc.textContent = "...It's water...";
    drink1price.textContent = "Free";
    //insert image here too
    drink1.append(drink1title, drink1desc, drink1price, drink1picture);
    drink1picture.classList.add("itemPicture");
    drink1.classList.add("menuItems");
    menuDiv.appendChild(drink1);

    const drink2 = document.createElement("div");
    const drink2title = document.createElement("h2");
    const drink2desc = document.createElement("p");
    const drink2price = document.createElement("h4");
    const drink2picture = document.createElement("div");
    drink2title.textContent = "Milk";
    drink2desc.textContent = "An essential drink for any feline. High in calcium and a smooth, creamy texture. Very refreshing on a hot summer day or with spicy food.";
    drink2price.textContent = "$3";
    //insert image here too
    drink2.append(drink2title, drink2desc, drink2price, drink2picture);
    drink2picture.classList.add("itemPicture");
    drink2.classList.add("menuItems");
    menuDiv.appendChild(drink2);

    const drink3 = document.createElement("div");
    const drink3title = document.createElement("h2");
    const drink3desc = document.createElement("p");
    const drink3price = document.createElement("h4");
    const drink3picture = document.createElement("div");
    drink3title.textContent = "Baobab Juice";
    drink3desc.textContent = "Hand-squeezed by Rafiki himself, and directly applied to your face, usually smeared across your forehead as part of one of his weird rituals. Not sure why he does that...";
    drink3price.textContent = "$300";
    //insert image here too
    drink3.append(drink3title, drink3desc, drink3price, drink3picture);
    drink3picture.classList.add("itemPicture");
    drink3.classList.add("menuItems");
    menuDiv.appendChild(drink3);

    const drink4 = document.createElement("div");
    const drink4title = document.createElement("h2");
    const drink4desc = document.createElement("p");
    const drink4price = document.createElement("h4");
    const drink4picture = document.createElement("div");
    drink4title.textContent = "Whiskey";
    drink4desc.textContent = "Aged 20 years, top of the line.";
    drink4price.textContent = "$9";
    //insert image here too
    drink4.append(drink4title, drink4desc, drink4price, drink4picture);
    drink4picture.classList.add("itemPicture");
    drink4.classList.add("menuItems");
    menuDiv.appendChild(drink4);



    //Appetizers Menu:
    const appsTitle = document.createElement("h2");
    appsTitle.textContent = "Appetizers";
    menuDiv.appendChild(appsTitle);

    const apps1 = document.createElement("div");
    const apps1title = document.createElement("h2");
    const apps1desc = document.createElement("p");
    const apps1price = document.createElement("h4");
    const apps1picture = document.createElement("div");
    apps1title.textContent = "Zebra Tartare";
    apps1desc.textContent = "A bistro classic. Composed of finely chopped or minced raw, high-quality Zebra meat mixed with capers, shallots, Worcestershire sauce, and Dijon mustard.";
    apps1price.textContent = "$12";
    //insert image here too
    apps1.append(apps1title, apps1desc, apps1price, apps1picture);
    apps1picture.classList.add("itemPicture");
    apps1.classList.add("menuItems");
    menuDiv.appendChild(apps1);

    const apps2 = document.createElement("div");
    const apps2title = document.createElement("h2");
    const apps2desc = document.createElement("p");
    const apps2price = document.createElement("h4");
    const apps2picture = document.createElement("div");
    apps2title.textContent = "Deviled Echinda Eggs";
    apps2desc.textContent = "A classic, cold appetizer made from hard-boiled eggs that are peeled, halved, and stuffed with a creamy, savory yolk mixture made from Echinda eggs, mayonnaise, mustard, vinegar, and smoked paprika.";
    apps2price.textContent = "$8";
    //insert image here too
    apps2.append(apps2title, apps2desc, apps2price, apps2picture);
    apps2picture.classList.add("itemPicture");
    apps2.classList.add("menuItems");
    menuDiv.appendChild(apps2);

    const apps3 = document.createElement("div");
    const apps3title = document.createElement("h2");
    const apps3desc = document.createElement("p");
    const apps3price = document.createElement("h4");
    const apps3picture = document.createElement("div");
    apps3title.textContent = "Camel Cheese Sticks";        
    apps3desc.textContent = "Our version of Mozzarella sticks, except with Camels cheese. Breaded and fried to perfection.";
    apps3price.textContent = "$9";
    //insert image here too
    apps3.append(apps3title, apps3desc, apps3price, apps3picture);
    apps3picture.classList.add("itemPicture");
    apps3.classList.add("menuItems");
    menuDiv.appendChild(apps3);



    //Main Courses Menu:
    

}