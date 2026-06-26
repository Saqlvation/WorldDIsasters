# WorldDIsasters
A website that shows you the map of all the ongoing and latest natural disasters like wildfires, storms, volcanoes ecc..  (Web Based)
![example2](assets/example2.gif)
# how does it work? 

### NASA's API
for this project i used NASA' seonet API fetched from [eonet](https://eonet.gsfc.nasa.gov/), you can look it up yourself and find all the documentation and your free API, EONET uses GeoJSON format so when we are gonna look at the coordinates( once fetched, which is how i made it find all the events ) it will be LONGITUDE,LATITUDE in that order, the "strange" thing is i used leaflet for this project, a known open-source interactive map library, that however uses a flipped version of geoJSON, so LATITUDE then LONGITUDE, to make it all work i am gonna need to switch them.

### how does the map work?
the map was built using leaflet.js [Leaflet](https://leafletjs.com/) its a open source mapping library that gives us the map easily and it has it's own methods, the images were uploaded by me and to make everything happen i used leaflet methods

### how do i try it?
to run this locally simply download the file from github or clone it using "git clone (link)" if you have git bash installed . then once everything is installed on your computer simply open the "index.html" file, you do not need to install anything as this can simply run on ur browser.(remember to extract the zip if you downloaded by zip)
otherwise you can try it here
[TRY HERE](https://world-d-isasters.vercel.app/)


### features

- updated disaster data from NASA's API
- custom icons for most common disasters (wildfires, volcanoes, storms, ice)
- clickable sidebar that contains all events
- dark UI
- a loading gif that only stops once it fetches the data
- when you click a event from the sidebar it brings you to the place smoothly

### What did i learn from this? 

1) how to work with API's it was my first time ever using a API 
2) how to understand JSON data structures
3) how to bug fix API fetches with the browser console
4) how leaflet works
5) how promises work with .then

### conclusion
i had a lot of fun with this project, i learned a lot of important things and it's one of my more serious project as of 21/06/2026, since my latest ones were interactive web "games"! hope you find it intresting and you learn something new ! 
