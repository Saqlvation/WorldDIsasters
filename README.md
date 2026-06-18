# WorldDIsasters
A website that shows you the map of all the ongoing natural disasters like wildfires, storms, volcanoes ecc..


### NASA's API
for this project i used NASA' seonet API fetched from [eonet](https://eonet.gsfc.nasa.gov/), you can look it up yourself and find all the documentation and your free API, EONET uses GeoJSON format so when we are gonna look at the coordinates( once fetched, which is how i made it find all the events ) it will be LONGITUDE,LATITUDE in that order, the "strange" thing is i used leaflet for this project, a known open-source interactive map library, that however uses a flipped version of geoJSON, so LATITUDE then LONGITUDE, to make it all work i am gonna need to switch them.