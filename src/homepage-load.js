//This file will contain the initial page-load function of the homepage
export function pageLoad(){
    const contentDiv = document.getElementById("content");
    const homepageDiv = document.createElement("div");

    contentDiv.appendChild(homepageDiv);

    const titleDiv = document.createElement("div");
    const titleh1 = document.createElement("h1");

    homepageDiv.appendChild(titleDiv);
    titleDiv.appendChild(titleh1);

    //Create and append introduction DOM
    const introductionDiv = document.createElement("div");
    const introductionh2 = document.createElement("h2");
    const introductionP = document.createElement("p");

    homepageDiv.appendChild(introductionDiv);
    introductionDiv.appendChild(introductionh2);
    introductionDiv.appendChild(introductionP);

    //Create and append hours DOM
    const hoursDiv = document.createElement("div");
    const hoursh2 = document.createElement("h2");
    const hoursul = document.createElement("ul");
    const sundayHours = document.createElement("li");
    const mondayHours = document.createElement("li");
    const tuesdayHours = document.createElement("li");
    const wednesdayHours = document.createElement("li");
    const thursdayHours = document.createElement("li");
    const fridayHours = document.createElement("li");
    const saturdayHours = document.createElement("li");

    homepageDiv.appendChild(hoursDiv);
    hoursDiv.appendChild(hoursh2);
    hoursDiv.appendChild(hoursul);
    hoursul.appendChild(sundayHours);
    hoursul.appendChild(mondayHours);
    hoursul.appendChild(tuesdayHours);
    hoursul.appendChild(wednesdayHours);
    hoursul.appendChild(thursdayHours);
    hoursul.appendChild(fridayHours);
    hoursul.appendChild(saturdayHours);

    //Create and append location DOM
    const locationDiv = document.createElement("div");
    const locationh2 = document.createElement("h2");
    const locationP = document.createElement("p");

    homepageDiv.appendChild(locationDiv);
    locationDiv.appendChild(locationh2);
    locationDiv.appendChild(locationP);

    //Create text-content for generated elements
    titleh1.textContent = "Simba's Supper Saloon";
    introductionh2.textContent = "What do we do?";
    introductionP.textContent = "Have you ever wanted to eat your lunch in a restaurant next to hungry lion's roaming free, scared for your life, and not sure if you'll be their next meal? Then come on down to Leo's Lunch Lounge! We have that for some reason!";
    hoursh2.textContent = "Hours of pawperation:";
    sundayHours.textContent = "Sunday: 4pm - 10pm";
    mondayHours.textContent = "Monday: 5pm - 9pm";
    tuesdayHours.textContent = "Tuesday: 5pm - 9pm";
    wednesdayHours.textContent = "Wednesday: 5pm - 9pm";
    thursdayHours.textContent = "Thursday: 5pm - 9pm";
    fridayHours.textContent = "Friday: 4pm - 12pm";
    saturdayHours.textContent = "Saturday: 3pm - 12pm";
    locationh2.textContent = "LoCATion:";
    locationP.textContent = "69420 Simba Street, Mufasa City, Tanzania";

    //Apply ID's for styling
    homepageDiv.id = "homepage";
    titleDiv.id = "title";
    introductionDiv.id = "introduction";
    hoursDiv.id = "hours";
    locationDiv.id = "location";
}