        // Example usage:
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

        class FMPlayer {
            constructor(position, name, numbers) {
              this.position = position;
              this.name = name;
              this.age = numbers[0];
              this.corners = numbers[1];
              this.crossing = numbers[2];
              this.dribbling = numbers[3];
              this.finishing = numbers[4];
              this.first_touch = numbers[5];
              this.free_kick_taking = numbers[6];
              this.heading = numbers[7];
              this.long_shots = numbers[8];
              this.long_throws = numbers[9];
              this.marking = numbers[10];
              this.passing = numbers[11];
              this.penalty_taking = numbers[12];
              this.tackling = numbers[13];
              this.technique = numbers[14];
              this.aggression = numbers[15];
              this.antecipation = numbers[16];
              this.bravery = numbers[17];
              this.composure = numbers[18];
              this.concentration = numbers[19];
              this.decisions = numbers[20];
              this.determination = numbers[21];
              this.flair = numbers[22];
              this.leadership = numbers[23];
              this.off_the_ball = numbers[24];
              this.positioning = numbers[25];
              this.teamwork = numbers[26];
              this.vision = numbers[27];
              this.workrate= numbers[28];
              this.acceleration = numbers[29];
              this.agility = numbers[30];
              this.balance = numbers[31];
              this.jumping_reach = numbers[32];
              this.natural_fitness = numbers[33];
              this.pace = numbers[34];
              this.stamina = numbers[35];
              this.strength = numbers[36];
            }
            static fromObject(obj) {
                return new FMPlayer(obj.position, obj.name, [obj.age, obj.corners, obj.crossing, obj.dribbling, obj.finishing, obj.first_touch,
                obj.free_kick_taking, obj.heading, obj.long_shots, obj.long_throws, obj.marking, obj.passing, obj.penalty_taking, obj.tackling, obj.technique, obj.aggression,
                obj.antecipation, obj.bravery, obj.composure, obj.concentration, obj.decisions, obj.determination, obj.flair, obj.leadership, obj.off_the_ball,
                obj.positioning, obj.teamwork, obj.vision, obj.workrate, obj.acceleration, obj.agility, obj.balance, obj.jumping_reach, obj.natural_fitness,
                obj.pace, obj.stamina, obj.strength
                
                
                ]);
            }
          }

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBBvtVnKeMe2u6DP_0wkRwdDc9IqFklPj4",
          authDomain: "zealand-fm-log.firebaseapp.com",
          projectId: "zealand-fm-log",
          storageBucket: "zealand-fm-log.appspot.com",
          messagingSenderId: "128791711304",
          appId: "1:128791711304:web:a61aea1054f4b6999a527d",
          measurementId: "G-NTQZFZGJDQ"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
    
    
        // Reference to the "players" collection
        const playersCollection = collection(db, "players");
        const playerData = [];
        // Fetch data from Firebase
        getDocs(playersCollection).then((querySnapshot) => {
            
    
            querySnapshot.forEach((doc) => {
                // Assume each document has a "json" field containing a JSON string
                const jsonString = doc.data().json;
                // Parse the JSON string into a JavaScript object
                const jsonData = JSON.parse(jsonString);
                for (const player of jsonData) {
                    // Access properties of each player
                    playerData.push(FMPlayer.fromObject(player))
                }
                // Push the object into the array
            });
    
            const tableBody = document.querySelector('#playersTable tbody');

        console.log(playerData.length)

        playerData.forEach(player => {
            
            const row = tableBody.insertRow();  
            const cellPosition = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellAge = row.insertCell(2);
            const cellCorners = row.insertCell(3);
            const cellCrossing = row.insertCell(4);
            const cellDribbling = row.insertCell(5);
            const cellFinishing = row.insertCell(6);
            const cellFirstTouch = row.insertCell(7);
            const cellFreeKickTaking = row.insertCell(8);
            const cellHeading = row.insertCell(9);
            const cellLongShots = row.insertCell(10);
            const cellLongThrows = row.insertCell(11);
            const cellMarking = row.insertCell(12);
            const cellPassing = row.insertCell(13);
            const cellPenaltyTaking = row.insertCell(14);
            const cellTackling = row.insertCell(15);
            const cellTechnique = row.insertCell(16);
            const cellAggression = row.insertCell(17);
            const cellAnticipation = row.insertCell(18);
            const cellBravery = row.insertCell(19);
            const cellComposure = row.insertCell(20);
            const cellConcentration = row.insertCell(21);
            const cellDecisions = row.insertCell(22);
            const cellDetermination = row.insertCell(23);
            const cellFlair = row.insertCell(24);
            const cellLeadership = row.insertCell(25);
            const cellOffTheBall = row.insertCell(26);
            const cellPositioning = row.insertCell(27);
            const cellTeamwork = row.insertCell(28);
            const cellVision = row.insertCell(29);
            const cellWorkrate = row.insertCell(30);
            const cellAcceleration = row.insertCell(31);
            const cellAgility = row.insertCell(32);
            const cellBalance = row.insertCell(33);
            const cellJumpingReach = row.insertCell(34);
            const cellNaturalFitness = row.insertCell(35);
            const cellPace = row.insertCell(36);
            const cellStamina = row.insertCell(37);
            const cellStrength = row.insertCell(38);
            cellPosition.textContent = player.position
            cellName.textContent = player.name
            cellAge.textContent = player.age
            cellCorners.textContent = player.corners
            cellCrossing.textContent = player.crossing;
            cellDribbling.textContent = player.dribbling;
            cellFinishing.textContent = player.finishing;
            cellFirstTouch.textContent = player.first_touch;
            cellFreeKickTaking.textContent = player.free_kick_taking;
            cellHeading.textContent = player.heading;
            cellLongShots.textContent = player.long_shots;
            cellLongThrows.textContent = player.long_throws;
            cellMarking.textContent = player.marking;
            cellPassing.textContent = player.passing;
            cellPenaltyTaking.textContent = player.penalty_taking;
            cellTackling.textContent = player.tackling;
            cellTechnique.textContent = player.technique;
            cellAggression.textContent = player.aggression;
            cellAnticipation.textContent = player.anticipation;
            cellBravery.textContent = player.bravery;
            cellComposure.textContent = player.composure;
            cellConcentration.textContent = player.concentration;
            cellDecisions.textContent = player.decisions;
            cellDetermination.textContent = player.determination;
            cellFlair.textContent = player.flair;
            cellLeadership.textContent = player.leadership;
            cellOffTheBall.textContent = player.off_the_ball;
            cellPositioning.textContent = player.positioning;
            cellTeamwork.textContent = player.teamwork;
            cellVision.textContent = player.vision;
            cellWorkrate.textContent = player.workrate;
            cellAcceleration.textContent = player.acceleration;
            cellAgility.textContent = player.agility;
            cellBalance.textContent = player.balance;
            cellJumpingReach.textContent = player.jumping_reach;
            cellNaturalFitness.textContent = player.natural_fitness;
            cellPace.textContent = player.pace;
            cellStamina.textContent = player.stamina;
            cellStrength.textContent = player.strength;
        });

        }).catch((error) => {
            console.error("Error getting documents: ", error);
        });

        