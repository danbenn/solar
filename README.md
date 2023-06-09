# Solar Challenge

How I spent my time:
* Sketching out data model and dashboard mockups in Figma (1 hour)
* Writing a design doc with API definitions (30 min)
* Writing backend and frontend code (2.5 hours)

These would be my next steps:
* Implement remaining backend API endpoints
* Connect them to frontend graphs in operator dashboard
* Setup some kind of noise filtering
* Lastly, build out scientist dashboard

Check out [Solar Panel System Design Doc](https://docs.google.com/document/d/1dm9USBD47tFseA5p5HaR3orxeIfZgmg98Oeq-E46tYY/edit#heading=h.bfyzaddtavvu)!

And the Figma designs here: https://www.figma.com/file/DhWRr7BLbGT2HdtWEX1lg4/Aware-Solar-Panel-Project?type=whiteboard&node-id=0-1&t=VP1DtxoJukCH6Ngj-0

# Setup

Frontend: http://localhost:3000/farms/1

Example working backend curl request:

```
curl --request POST \
  --url http://localhost:3001/api/readings \
  --header 'Content-Type: application/json' \
  --data '    [{
      "panelId": 1,
      "output": 1.121,
      "latitude": 90.11,
      "longitude": 30.11,
      "irradiance": 1361,
      "orientation": 45,
      "temperature": 30,
      "timestamp": "2020-10-15T00:00:00.000Z"
    }]'
```
