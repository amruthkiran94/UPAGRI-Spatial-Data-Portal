# UPAGRI-Spatial-Data-Portal
Spatial Data Portal for the study of Urban and peri-urban agriculture as green infrastructure and its implications on well-being and sustainability in the Global South.<br>

Built using TerriaMap with geospatial data hosted on Geoserver + AWS.

To build:<br>
Clone into the directory and run `npm install && npm run gulp && npm start`. The portal will be available on your localhost(3001)

To Deploy:<br>
-Run<br>
`npm run gulp release` to create a minified package.<br>

-Copy the following file to the production server:<br>
`wwwroot` <br>
`node_modules`<br>
`devserverconfig.json`<br>
`ecosystem.config.json`<br>
`ecosystem-production.config.json`<br>

-Run <br>
`./node_modules/.bin/pm2 start ecosystem-production.config.js --update-env --env production`




Head on over to [TerriaMap](https://github.com/TerriaJS/TerriaMap).
