const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const statesWithoutVowels = statesInIndia.filter((state) => {
  const firstLetter = state[0].toLowerCase();
  return !["a", "e", "i", "o", "u"].includes(firstLetter);
});

console.log(statesWithoutVowels);

// Output:
// ['Chhattisgarh',  'Gujarat',  'Haryana',  'Karnataka',  'Madhya Pradesh',  'Maharashtra',  'Punjab',  'Rajasthan',  'Tamil Nadu',  'Telangana',  'Uttar Pradesh']
