function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const box = document.querySelector(".box");

    // Creating and appending elements
    box.querySelector(".title").textContent = title;
    box.querySelector(".cName").textContent = cName;
    box.querySelector(".views").textContent = views;
    box.querySelector(".monthsOld").textContent = monthsOld;
    box.querySelector(".duration").textContent = duration;
    box.querySelector(".thumbnail").style.backgroundImage = `url(${thumbnail})`;
}

// Calling the function with dummy data
createCard(
    "Learn JavaScript in 10 Minutes",
    "Code Academy",
    "1.2M views",
    "3 months ago",
    "10:15",
    "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg"
);
