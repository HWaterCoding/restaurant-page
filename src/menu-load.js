//This file will contain the menu-page load function

//Import images into this file!
//Drinks:
import waterImg from "./images/drinks/drinking-water.jpg";
import milkImg from "./images/drinks/glass-of-milk.jpg";
import baobabImg from "./images/drinks/rafiki-berries.jpg";
import whiskeyImg from "./images/drinks/whiskey.jpg";

//Appetizers:
import zebraTartareImg from "./images/apps/classic-steak-tartare.jpg";
import deviledEggsImg from "./images/apps/deviled-eggs.jpg";
import cheeseSticksImg from "./images/apps/cheese-sticks.jpg";

//Main Courses:
import wildebeestParmImg from "./images/mains/wildebeest-parm.jpeg";
import antelopeAlfredoImg from "./images/mains/chicken-alfredo.jpg";
import buffaloTacosImg from "./images/mains/buffalo-tacos.jpg";
import hyenaFaceImg from "./images/mains/hyena-face.jpg";

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
    
    //Drink 1:
    const drink1 = document.createElement("div");
    const drink1title = document.createElement("h3");
    drink1title.textContent = "Water";
    const drink1desc = document.createElement("p");
    drink1desc.textContent = "...It's water...";
    const drink1price = document.createElement("h4");
    drink1price.textContent = "Free";
    const drink1picture = document.createElement("div");
    const drink1pic = document.createElement("img");
    drink1pic.src = waterImg;
    drink1picture.appendChild(drink1pic);

    drink1.append(drink1title, drink1desc, drink1price, drink1picture);
    drink1picture.classList.add("itemPicture");
    drink1.classList.add("menuItems");
    menuDiv.appendChild(drink1);

    //Drink2:
    const drink2 = document.createElement("div");
    const drink2title = document.createElement("h3");
    drink2title.textContent = "Milk";
    const drink2desc = document.createElement("p");
    drink2desc.textContent = "An essential drink for any feline. High in calcium and a smooth, creamy texture. Very refreshing on a hot summer day or with spicy food.";
    const drink2price = document.createElement("h4");
    drink2price.textContent = "$3";
    const drink2picture = document.createElement("div");
    const drink2pic = document.createElement("img");
    drink2pic.src = milkImg;
    drink2picture.appendChild(drink2pic);

    drink2.append(drink2title, drink2desc, drink2price, drink2picture);
    drink2picture.classList.add("itemPicture");
    drink2.classList.add("menuItems");
    menuDiv.appendChild(drink2);

    //Drink3:
    const drink3 = document.createElement("div");
    const drink3title = document.createElement("h3");
    drink3title.textContent = "Baobab Juice";
    const drink3desc = document.createElement("p");
    drink3desc.textContent = "Hand-squeezed by Rafiki himself, and directly applied to your face, usually smeared across your forehead as part of one of his weird rituals. Not sure why he does that...";
    const drink3price = document.createElement("h4");
    drink3price.textContent = "$300";
    const drink3picture = document.createElement("div");
    const drink3pic = document.createElement("img");
    drink3pic.src = baobabImg;
    drink3picture.appendChild(drink3pic);

    drink3.append(drink3title, drink3desc, drink3price, drink3picture);
    drink3picture.classList.add("itemPicture");
    drink3.classList.add("menuItems");
    menuDiv.appendChild(drink3);

    //Drink4:
    const drink4 = document.createElement("div");
    const drink4title = document.createElement("h3");
    drink4title.textContent = "Whiskey";
    const drink4desc = document.createElement("p");
    drink4desc.textContent = "Aged 20 years, top of the line.";
    const drink4price = document.createElement("h4");
    drink4price.textContent = "$9";
    const drink4picture = document.createElement("div");
    const drink4pic = document.createElement("img");
    drink4pic.src = whiskeyImg;
    drink4picture.appendChild(drink4pic);

    drink4.append(drink4title, drink4desc, drink4price, drink4picture);
    drink4picture.classList.add("itemPicture");
    drink4.classList.add("menuItems");
    menuDiv.appendChild(drink4);



    //Appetizers Menu:

    const appsTitle = document.createElement("h2");
    appsTitle.textContent = "Appetizers";
    menuDiv.appendChild(appsTitle);

    //Appetizer 1:
    const apps1 = document.createElement("div");
    const apps1title = document.createElement("h3");
    apps1title.textContent = "Zebra Tartare";
    const apps1desc = document.createElement("p");
    apps1desc.textContent = "A bistro classic. Composed of finely chopped or minced raw, high-quality Zebra meat mixed with capers, shallots, Worcestershire sauce, and Dijon mustard.";
    const apps1price = document.createElement("h4");
    apps1price.textContent = "$12";
    const apps1picture = document.createElement("div");
    const apps1pic = document.createElement("img");
    apps1pic.src = zebraTartareImg;
    apps1picture.appendChild(apps1pic);

    apps1.append(apps1title, apps1desc, apps1price, apps1picture);
    apps1picture.classList.add("itemPicture");
    apps1.classList.add("menuItems");
    menuDiv.appendChild(apps1);

    //Appetizer 2:
    const apps2 = document.createElement("div");
    const apps2title = document.createElement("h3");
    apps2title.textContent = "Deviled Echinda Eggs";
    const apps2desc = document.createElement("p");
    apps2desc.textContent = "A classic, cold appetizer made from hard-boiled eggs that are peeled, halved, and stuffed with a creamy, savory yolk mixture made from Echinda eggs, mayonnaise, mustard, vinegar, and smoked paprika.";
    const apps2price = document.createElement("h4");
    apps2price.textContent = "$8";
    const apps2picture = document.createElement("div");
    const apps2pic = document.createElement("img");
    apps2pic.src = deviledEggsImg;
    apps2picture.appendChild(apps2pic);

    apps2.append(apps2title, apps2desc, apps2price, apps2picture);
    apps2picture.classList.add("itemPicture");
    apps2.classList.add("menuItems");
    menuDiv.appendChild(apps2);

    //Appetizer 3:
    const apps3 = document.createElement("div");
    const apps3title = document.createElement("h3");
    apps3title.textContent = "Camel Cheese Sticks";        
    const apps3desc = document.createElement("p");
    apps3desc.textContent = "Our version of Mozzarella sticks, except with Camels cheese. Breaded and fried to perfection.";
    const apps3price = document.createElement("h4");
    apps3price.textContent = "$9";
    const apps3picture = document.createElement("div");
    const apps3pic = document.createElement("img");
    apps3pic.src = cheeseSticksImg;
    apps3picture.appendChild(apps3pic);

    apps3.append(apps3title, apps3desc, apps3price, apps3picture);
    apps3picture.classList.add("itemPicture");
    apps3.classList.add("menuItems");
    menuDiv.appendChild(apps3);



    //Main Courses Menu:

    const mainsTitle = document.createElement("h2");
    mainsTitle.textContent = "Main Courses";
    menuDiv.appendChild(mainsTitle);

    //Main Course 1:
    const mains1 = document.createElement("div");
    const mains1title = document.createElement("h3");
    mains1title.textContent = "Wildebeest Parmasean";     
    const mains1desc = document.createElement("p");
    mains1desc.textContent = "A delicious comfort dish featuring breaded, pan-fried Wildebeest breasts topped with marinara sauce and melted Camel's cheese and Parmesan cheese.";
    const mains1price = document.createElement("h4");
    mains1price.textContent = "$24";
    const mains1picture = document.createElement("div");
    const mains1pic = document.createElement("img");
    mains1pic.src = wildebeestParmImg;
    mains1picture.appendChild(mains1pic);

    mains1.append(mains1title, mains1desc, mains1price, mains1picture);
    mains1picture.classList.add("itemPicture");
    mains1.classList.add("menuItems");
    menuDiv.appendChild(mains1);

    //Main Course 2:
    const mains2 = document.createElement("div");
    const mains2title = document.createElement("h3");
    mains2title.textContent = "Antelope Alfredo";   
    const mains2desc = document.createElement("p");
    mains2desc.textContent = "Tender, pan-seared Antelope sliced over fettuccine pasta, tossed in a rich, velvety sauce made from butter, heavy cream, and Parmesan cheese.";
    const mains2price = document.createElement("h4");
    mains2price.textContent = "$22";
    const mains2picture = document.createElement("div");
    const mains2pic = document.createElement("img");
    mains2pic.src = antelopeAlfredoImg;
    mains2picture.appendChild(mains2pic);

    mains2.append(mains2title, mains2desc, mains2price, mains2picture);
    mains2picture.classList.add("itemPicture");
    mains2.classList.add("menuItems");
    menuDiv.appendChild(mains2);

    //Main Course 3:
    const mains3 = document.createElement("div");
    const mains3title = document.createElement("h3");
    mains3title.textContent = "Buffalo Tacos";   
    const mains3desc = document.createElement("p");
    mains3desc.textContent = "Mouth-watering seared Buffalo meat on a corn tortilla paired with vegetables of your choosing and cheese.";
    const mains3price = document.createElement("h4");
    mains3price.textContent = "$26";
    const mains3picture = document.createElement("div");
    const mains3pic = document.createElement("img");
    mains3pic.src = buffaloTacosImg;
    mains3picture.appendChild(mains3pic);

    mains3.append(mains3title, mains3desc, mains3price, mains3picture);
    mains3picture.classList.add("itemPicture");
    mains3.classList.add("menuItems");
    menuDiv.appendChild(mains3);

    //Main Course 4:
    const mains4 = document.createElement("div");
    const mains4title = document.createElement("h3");
    mains4title.textContent = "A whole hyena's face.";   
    const mains4desc = document.createElement("p");
    mains4desc.textContent = "They took my dad, I take their faces.";
    const mains4price = document.createElement("h4");
    mains4price.textContent = "Priceless.";
    const mains4picture = document.createElement("div");
    const mains4pic = document.createElement("img");
    mains4pic.src = hyenaFaceImg;
    mains4picture.appendChild(mains4pic);

    mains4.append(mains4title, mains4desc, mains4price, mains4picture);
    mains4picture.classList.add("itemPicture");
    mains4.classList.add("menuItems");
    menuDiv.appendChild(mains4);
}