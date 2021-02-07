// --------------------------------------------------------------- //

serverData = [24, "User", false, 85, -5, 0, 45, "google.com"];

let [userinfo, digits, url] = [serverData.filter((item, i)=>{return typeof item == "string" && !item.endsWith(".com")}), serverData.filter((item, i)=>{return typeof item == "number";}), serverData.filter((item, i)=>{return typeof item == "string" && item.endsWith(".com");})];
// console.log(...userinfo, ...digits, ...url);

// --------------------------------------------------------------- //
//НЕ РАБОТАЕТ//

users = [["Anna", "Bob", "Derrik", "Katya"], [14, 12, 15, 24], ["Moscow", "Cloverfield", "Kork", "Praha"]];

let [user1, user2, user3, user4] = [users.filter((item, i)=>{return i == (users[0][0]), (users[1][0]), (users[2][0])}), users.filter((item, i)=>{return i == (users[0][1]), (users[1][1]), (users[2][1])}), users.filter((item, i)=>{return i == (users[0][2]), (users[1][2]), (users[2][2])}), users.filter((item, i)=>{return i == (users[0][3]), (users[1][3]), (users[2][3])})];
console.log(user1, user2, user3, user4);

// --------------------------------------------------------------- //