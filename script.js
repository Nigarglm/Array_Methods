const athletes = [  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];

////////// TASK-1

const worldRecordHolders = []

for(i=0; i<athletes.length; i++){
    if(athletes[i].hasWorldRecord){
        worldRecordHolders.push(athletes[i]);
    }
}
console.log(worldRecordHolders);


////////// TASK-2

const femaleAthletes = []

for(i=0; i<athletes.length; i++){
    if(athletes[i].totalMedals>=10 && athletes[i].gender=="Female"){
        femaleAthletes.push(athletes[i]);
    }
}
console.log(femaleAthletes);


////////// TASK-3

const atleteNames = []

for(i=0; i<athletes.length; i++){
    atleteNames.push(athletes[i].name);
}
console.log(atleteNames);


////////// TASK-4

const atleteNamesAndCountries = []

for(i=0; i<athletes.length; i++){
    atleteNamesAndCountries.push(athletes[i].name, athletes[i].country);
}
console.log(atleteNamesAndCountries);


///////// TASK-5

let sum =0;

for(i=0; i<athletes.length; i++){
   sum += athletes[i].totalMedals;
}
console.log(sum);


////////// TASK-6

const athleteName = prompt("Atletin adini daxil edin");

for(i=0; i<athletes.length; i++){
    if(athleteName==athletes[i].name){
        console.log(athletes[i]);
    }
}
