/* Workout list
 To import workout list use a tool that can make POST request. The below instruction are using POSTMAN addin for chrome browser. Other tools like CURL, that can make http requests can also be used instead of POSTMAN.
 1. Open POSTMAN and paste the url https://api.mongolab.com/api/1/databases/<yourdatabasename>/collections/workouts?apiKey=<yourapikey>
 2. Update url with your database name (<yourdatabasename>) and api key (<yourapikey>).
 3. Change option from action dropdown to POST.
 4. Change data format tab to "raw"
 5. Click on the "Headers" button or the top right next to "URL Params" button.
 6. Clicking on "Headers" shows up a key-value data entry section. Add key "Content-Type" and value "application/json".
 7. Copy and paste the below json array in the text area.
 8. Click the button "Send".
 9. Check for sucess response
 */
[{ "_id": "SmartphoneAuction", "productAuctions": [{ "name": "AppleiPhone6s", "duration": 10 }, { "name": "BlackberryDTEK50", "duration": 10 }, { "name": "SamsungGalaxyNote", "duration": 10 }, { "name": "HTCOneA9", "duration": 10 }, { "name": "HuaweiAscendMate7", "duration": 5 }, { "name": "AppleiPhone5s", "duration": 5 }, { "name": "AppleiPhoneSE", "duration": 5 }, { "name": "LeEcoLe1s", "duration": 5 }, { "name": "LenovoZukZ1", "duration": 5 }, { "name": "Nokia6", "duration": 5 }, { "name": "OppoF1s", "duration": 5 }, { "name": "SamsungGalaxyJ5", "duration": 5 }, { "name": "SamsungGalaxyA3", "duration": 5 }, { "name": "VivoY51L", "duration": 5 }, { "name": "ZTEBladeV7", "duration": 5 }, { "name": "ZTEZmax2", "duration": 5 }], "name": "7minworkout", "title": "Smartphone Auction" }]



    /* Exercise list
     To import exercise list use a tool that can make POST request. The below instruction are using POSTMAN addin for chrome browser. Other tools like CURL, that can make http requests can also be used instead of POSTMAN.
     1. Open POSTMAN and paste the url https://api.mongolab.com/api/1/databases/<yourdatabasename>/collections/exercises?apiKey=<yourapikey>
     2. Update url with your database name (<yourdatabasename>) and api key (<yourapikey>).
     3. Follow step 3 and 9 from above.
     */
    [
        { 
            "_id": "jumpingJacks",
            "name": "jumpingJacks", 
            "title": "Jumping Jacks", 
            "description": "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.", "image": "JumpingJacks.png", "nameSound": "content/jumpingjacks.wav"
        }
    ]

