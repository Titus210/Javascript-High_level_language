var john_team = [89, 120, 103];
var mike_team = [116, 94, 123];
var mary_team = [97, 134, 105];


// calculate sum of points
var john_team_sum = 0;
var mike_team_sum = 0;
for (i = 0; i <= 3; i++) {
    john_team_sum += john_team[i];
    mike_team_sum = mike_team[i];
    mary_team_sum = mary_team[i];
}

// average
var john_team_avg = john_team_sum / john_team.length;
var mike_team_avg = mike_team_sum / mike_team.length;
var mary_team_avg = mary_team_sum / mike_team.length;

if (mike_team_avg > john_team_avg && mike_team_avg > mary_team_avg) {
    console.log("Mike Team has won with " + mike_team_avg + "points");
}
else if (john_team_avg > mike_team_avg && john_team_avg > mary_team_avg) {
    console.log("John Team has won with " + john_team_avg + "points");
}
else if (mary_team_avg > mike_team_avg && mary_team_avg > john_team_avg) {
    console.log("Mary Team has won with " + mary_team_avg + "points");
}
else {
    console.log("There is a draw");
}