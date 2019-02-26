var buddies = require("../data/buddies.js");

// Routing 

module.exports = function (app) {
    
    // API GET Requests

    app.get("/api/buddies", function (req, res) {
        res.json(buddies);
    });

    // API POST Requests

    app.post("/api/buddies", function (req, res) {

        function buddyCompare() {

            // Your matched buddy
            var yourNewBuddy;

            // Your matched buddy's score
            var yourBuddyScore = 50;
            
            // Check all the elements in the array
            for (let i = 0; i < buddies.length; i++) {

                // This variable will keep the compatibility count
                var total = 0;

                for (let s = 0; s < buddies[i].scores.length; s++) {

                    // Calculate compatibiliy based on score difference
                    total += Math.abs(buddies[i].scores[s] - req.body.scores[s]);
                }

                if (total < yourBuddyScore) {

                    // A better match is found
                    yourBuddyScore = total;

                    // Best match is chosen
                    yourNewBuddy = buddies[i]
                }
            }

            // Return JSON for new buddy
            return yourNewBuddy;
        }

        res.json(buddyCompare());

        // Add matched buddy to the buddiesArray 
        buddies.push(req.body);

    });
};