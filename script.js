const STORAGE_KEYS = {
  candidate: "apicet_candidate",
  exam: "apicet_exam_state",
  analysis: "apicet_analysis"
};

const STATE_CITY_MAP = {
  "Andhra Pradesh": ["Amaravati", "Visakhapatnam", "Vijayawada", "Guntur", "Kurnool", "Tirupati"],
  Arunachal_Pradesh: ["Itanagar", "Tawang", "Ziro", "Pasighat"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala"],
  Himachal_Pradesh: ["Shimla", "Mandi", "Dharamshala", "Solan"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi", "Shivamogga"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
  Madhya_Pradesh: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  Tamil_Nadu: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  Uttar_Pradesh: ["Lucknow", "Kanpur", "Noida", "Varanasi", "Prayagraj"],
  Uttarakhand: ["Dehradun", "Haridwar", "Haldwani", "Roorkee"],
  West_Bengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"]
};

const EXAM_DURATION_SECONDS = 150 * 60;

const SECTION_BLUEPRINTS = [
  {
    section: "Analytical Ability",
    total: 75,
    templates:[

{
text:(n)=>`What is the value of the integer x? (I) x is a prime number between 20 and 30. (II) When x is divided by 3, the remainder is 2.`,
options:()=>[
"Statements (I) and (II) together are sufficient, but neither statement alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statement (I) alone is sufficient.",
"Statement (II) alone is sufficient."
],
answer:1
},

{
text:(n)=>`Is the average of a, b, and c equal to b? (I) c-b = b-a (II) b is the arithmetic mean of a and c.`,
options:()=>[
"Each statement alone is sufficient.",
"Statement (I) alone is sufficient, but (II) is not.",
"Statement (II) alone is sufficient, but (I) is not.",
"Statements (I) and (II) together are not sufficient."
],
answer:0
},

{
text:(n)=>`What is the area of the rectangle ABCD? (I) The diagonal AC is 10 cm. (II) The perimeter of the rectangle is 28 cm.`,
options:()=>[
"Statements (I) and (II) together are not sufficient.",
"Statement (I) alone is sufficient.",
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are not sufficient."
],
answer:3
},

{
text:(n)=>`Is xy > 0? (I) x + y > 0 (II) x − y < 0`,
options:()=>[
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statement (I) alone is sufficient."
],
answer:2
},

{
text:(n)=>`How many students passed the exam? (I) 60% of the students who took the exam passed. (II) 40 students failed the exam.`,
options:()=>[
"Statement (II) alone is sufficient.",
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are sufficient.",
"Each statement alone is sufficient."
],
answer:2
},

{
text:(n)=>`Is n an even integer? (I) n² − 1 is an odd integer. (II) √n is an even integer.`,
options:()=>[
"Statement (I) alone is sufficient, but (II) is not.",
"Each statement alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statement (II) alone is sufficient, but (I) is not."
],
answer:1
},

{
text:(n)=>`What is the ratio of the salaries of A and B? (I) A's salary is 80% of C's salary. (II) B's salary is 120% of C's salary.`,
options:()=>[
"Statements (I) and (II) together are not sufficient.",
"Statement (I) alone is sufficient.",
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are sufficient."
],
answer:3
},

{
text:(n)=>`What is the age of Ravi? (I) Ravi is 5 years older than his sister. (II) The sum of the ages of Ravi and his sister is 25 years.`,
options:()=>[
"Statement (I) alone is sufficient.",
"Each statement alone is sufficient.",
"Statements (I) and (II) together are sufficient.",
"Statement (II) alone is sufficient."
],
answer:2
},

{
text:(n)=>`Is the triangle PQR equilateral? (I) PQ = QR (II) ∠P = 60°`,
options:()=>[
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are sufficient.",
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are not sufficient."
],
answer:1
},

{
text:(n)=>`What is the speed of the boat in still water? (I) The speed of the boat downstream is 15 km/h. (II) The speed of the boat upstream is 9 km/h.`,
options:()=>[
"Each statement alone is sufficient.",
"Statement (I) alone is sufficient.",
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are sufficient."
],
answer:3
},

{
text:(n)=>`Is z a multiple of 8? (I) z is a multiple of 4. (II) z is a multiple of 2.`,
options:()=>[
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are sufficient."
],
answer:1
},

{
text:(n)=>`What is the value of a² − b²? (I) a + b = 10 (II) a − b = 4`,
options:()=>[
"Statements (I) and (II) together are sufficient.",
"Statement (II) alone is sufficient.",
"Statement (I) alone is sufficient.",
"Each statement alone is sufficient."
],
answer:0
},

{
text:(n)=>`In a class of 50 students, how many students play both cricket and football? (I) 30 students play cricket. (II) 25 students play football.`,
options:()=>[
"Statements (I) and (II) together are sufficient.",
"Statement (II) alone is sufficient.",
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are not sufficient."
],
answer:3
},

{
text:(n)=>`Is k a positive integer? (I) k³ > 0 (II) k² > 0`,
options:()=>[
"Statements (I) and (II) together are not sufficient.",
"Each statement alone is sufficient.",
"Statement (II) alone is sufficient, but (I) is not.",
"Statement (I) alone is sufficient, but (II) is not."
],
answer:3
},

{
text:(n)=>`What is the price of one apple? (I) The price of 3 apples and 2 oranges is Rs.50. (II) The price of 6 apples and 4 oranges is Rs.100.`,
options:()=>[
"Statement (II) alone is sufficient.",
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statements (I) and (II) together are sufficient."
],
answer:2
},
{
text:(n)=>`Is x+y an even integer? (I) x and y are both prime numbers greater than 2. (II) x and y are both odd integers.`,
options:()=>[
"Each statement alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statement (II) alone is sufficient, but (I) is not.",
"Statement (I) alone is sufficient, but (II) is not."
],
answer:0
},

{
text:(n)=>`What is the volume of the cylinder? (I) The height of the cylinder is 10 cm. (II) The radius of the base is 5 cm.`,
options:()=>[
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statements (I) and (II) together are sufficient.",
"Statement (II) alone is sufficient."
],
answer:2
},

{
text:(n)=>`Is m > n? (I) m/n > 1 (II) n > 0`,
options:()=>[
"Statement (II) alone is sufficient.",
"Statement (I) alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statements (I) and (II) together are sufficient."
],
answer:3
},

{
text:(n)=>`How many integers are in the set S? (I) The smallest integer in S is 10 and the largest is 20. (II) All integers in S are consecutive.`,
options:()=>[
"Statement (I) alone is sufficient.",
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are sufficient.",
"Each statement alone is sufficient."
],
answer:2
},

{
text:(n)=>`Is the number N divisible by 6? (I) N is divisible by 3. (II) N is divisible by 2.`,
options:()=>[
"Statement (I) alone is sufficient.",
"Statement (II) alone is sufficient.",
"Statements (I) and (II) together are not sufficient.",
"Statements (I) and (II) together are sufficient."
],
answer:3
},

{
text:(n)=>`Find the missing number in the series: 4, 9, 16, 25, 36, ?`,
options:()=>["64","50","48","49"],
answer:3
},

{
text:(n)=>`What is the next term in the series: 10, 18, 28, 40, 54, ?`,
options:()=>["70","64","72","68"],
answer:0
},

{
text:(n)=>`Complete the letter series: BDF, HJL, NPR, ?`,
options:()=>["TUV","UWZ","TVX","TVW"],
answer:2
},

{
text:(n)=>`Find the missing term: 1, 8, 27, 64, 125, ?`,
options:()=>["196","343","216","225"],
answer:2
},

{
text:(n)=>`Find the next term: 2, 5, 11, 23, 47, ?`,
options:()=>["93","95","94","91"],
answer:1
},

{
text:(n)=>`In the series 3, 6, 11, 18, 27, ..., which term is 66?`,
options:()=>["8th term","9th term","7th term","10th term"],
answer:0
},

{
text:(n)=>`What is the next number in the series: 1, 3, 7, 15, 31, 63, ?`,
options:()=>["127","126","129","125"],
answer:0
},

{
text:(n)=>`Find the missing term: AZ, CX, EV, GT, ?`,
options:()=>["JQ","IR","HS","KP"],
answer:1
},

{
text:(n)=>`Which number is the odd one out in this series: 10, 25, 45, 54, 60, 75, 80?`,
options:()=>["54","45","10","60"],
answer:0
},

{
text:(n)=>`Find the next term in the series: 80, 10, 70, 15, 60, ?`,
options:()=>["50","45","20","25"],
answer:2
},

{
text:(n)=>`Complete the series: 0.5, 1.5, 4.5, 13.5, ?`,
options:()=>["41.5","39.5","40.5","27.0"],
answer:2
},

{
text:(n)=>`Find the missing term: 120, 99, 80, 63, 48, ?`,
options:()=>["36","34","35","40"],
answer:2
},

{
text:(n)=>`What comes next in the sequence: 5, 16, 49, 148, ?`,
options:()=>["444","441","445","450"],
answer:2
},

{
text:(n)=>`Complete the letter series: SCD, TEF, UGH, __, WKL`,
options:()=>["VIJ","VJI","UJI","IJV"],
answer:0
},

{
text:(n)=>`Find the missing number: 2, 3, 5, 7, 11, ?, 17`,
options:()=>["13","14","15","12"],
answer:0
},

{
text:(n)=>`What is the next term: 4, 12, 36, 108, ?`,
options:()=>["324","216","432","312"],
answer:0
},

{
text:(n)=>`Find the missing term: 1, 4, 10, 22, 46, ?`,
options:()=>["90","94","92","96"],
answer:1
},

{
text:(n)=>`Identify the next term: 7, 26, 63, 124, 215, ?`,
options:()=>["344","342","343","511"],
answer:1
},

{
text:(n)=>`Complete the series: FAG, GAF, HAI, IAH, __`,
options:()=>["KAJ","HAL","JAK","JAI"],
answer:2
},

{
text:(n)=>`Find the missing term: 2, 6, 12, 20, 30, 42, ?`,
options:()=>["54","52","56","60"],
answer:2
},

{
text:(n)=>`What is the next number in the series: 1, 2, 6, 24, 120, ?`,
options:()=>["840","600","720","240"],
answer:2
},

{
text:(n)=>`Find the odd one out: 3, 5, 11, 14, 17, 21`,
options:()=>["21","11","3","14"],
answer:3
},

{
text:(n)=>`Find the missing term: 10, 14, 26, 42, 70, ?`,
options:()=>["114","110","112","120"],
answer:0
},

{
text:(n)=>`Complete the letter series: Y, W, U, S, Q, ?`,
options:()=>["M","N","O","P"],
answer:2
},

{
text:(n)=>`What is the next term: 6, 13, 28, 59, ?`,
options:()=>["125","118","121","122"],
answer:3
},

{
text:(n)=>`Table Analysis: A company's profits (in millions) for 5 years are as shown below:
<table border="1">
<tr><th>Year</th><th>Profits (in millions)</th></tr>
<tr><td>2021</td><td>40</td></tr>
<tr><td>2022</td><td>60</td></tr>
<tr><td>2023</td><td>45</td></tr>
<tr><td>2024</td><td>75</td></tr>
<tr><td>2025</td><td>90</td></tr>
</table>
What is the average profit over these 5 years?`,
options:()=>["55 million","60 million","65 million","62 million"],
answer:3
},

{
text:(n)=>`In a school, the ratio of boys to girls is 5:3. If there are 240 girls, how many total students are in the school?`,
options:()=>["480","800","640","400"],
answer:2
},

{
text:(n)=>`Company X sells 200 units at Rs.50 each. Company Y sells 150 units at Rs.70 each. Which company has higher total revenue?`,
options:()=>["Cannot be determined","Both are equal","Company Y","Company X"],
answer:2
},

{
text:(n)=>`A car travels 100 km at 50 km/h and another 100 km at 25 km/h. What is the average speed for the entire journey?`,
options:()=>["37.5 km/h","33.33 km/h","40 km/h","30 km/h"],
answer:1
},

{
text:(n)=>`Table Interpretation: Marks of a student are as given below:
<table border="1">
<tr><th>Subject</th><th>Marks</th><th>Weightage</th></tr>
<tr><td>Math</td><td>80</td><td>2</td></tr>
<tr><td>Science</td><td>70</td><td>1</td></tr>
<tr><td>English</td><td>90</td><td>1</td></tr>
</table>
What is the weighted average?`,
options:()=>["80","78","85","75"],
answer:0
},

{
text:(n)=>`A population grows from 10,000 to 12,100 in two years. What is the annual compound growth rate?`,
options:()=>["5%","21%","10%","10.5%"],
answer:2
},

{
text:(n)=>`Sales of a product were 20, 30, 25, 40 units over 4 months. What is the range of the sales data?`,
options:()=>["20","40","15","25"],
answer:0
},

{
text:(n)=>`If the price of an item increases by 25% and then decreases by 20%, what is the net change in price?`,
options:()=>["5% increase","0% (No change)","5% decrease","4% decrease"],
answer:1
},

{
text:(n)=>`A student scores 60, 70, 80, 90, and x in five subjects. If the average score is 75, what is the value of x?`,
options:()=>["80","70","85","75"],
answer:3
},

{
text:(n)=>`If the ratio of Expenditure to Savings for a person is 7:3 and their monthly income is Rs. 60,000, what is their annual savings?`,
options:()=>["Rs. 5,04,000","Rs. 18,000","Rs. 1,80,000","Rs. 2,16,000"],
answer:3
},

{
text:(n)=>`In a certain code language, 'TRAIN' is coded as 'WUDLQ'. How will 'BUSES' be coded in that same language?`,
options:()=>["EXVGU","EXVHV","FYWJW","DWUHT"],
answer:1
},

{
text:(n)=>`If 'TABLE' is written as 'GZYOV' in a specific code, how is 'CHAIR' written in that code?`,
options:()=>["XSZRI","WSZRI","XSZRG","XSAQH"],
answer:0
},

{
text:(n)=>`In a certain code, 'DREAM' is coded as '78026' and 'ROAST' is coded as '84213'. What is the code for 'STREAM'?`,
options:()=>["138026","137026","138022","148026"],
answer:0
},

{
text:(n)=>`If 'ORANGE' is coded as 'PQSOHJ', how is 'APPLE' coded?`,
options:()=>["BQRNI","BQQMF","BRSPJ","ZQOKD"],
answer:1
},

{
text:(n)=>`In a fictitious language:
'ka la ho' means 'food is good'
'ho ta' means 'good weather'
'la pa' means 'is hot'
What is the code for 'food'?`,
options:()=>["la","ho","ka","ta"],
answer:2
},

{
text:(n)=>`If 'A' = 1, 'FAT' = 27, then what is the value of 'FAITH'?`,
options:()=>["44","45","40","42"],
answer:0
},

{
text:(n)=>`In a certain code language, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that same code?`,
options:()=>["EOJDJEFM","EOJDEJFM","MFEDJCOE","MFEJDCOE"],
answer:0
},

{
text:(n)=>`If 'LEMON' is coded as '125131514', what is the code for 'GRAPE'?`,
options:()=>["7182165","7181161","8192176","7181165"],
answer:3
},

{
text:(n)=>`If 'SQUARE' is coded as 'TSVBSF', how is 'CIRCLE' coded?`,
options:()=>["DKTFMG","BHKBKD","DJSDMF","DJSDMF"],
answer:3
},

{
text:(n)=>`In a certain code, 'ROAD' is written as 'URDG'. How is 'SWAN' written in that code?`,
options:()=>["VZDR","VZDQ","WACR","UXCP"],
answer:1
},

{
text:(n)=>`If 15th August 2026 is a Saturday, what day will it fall on 15th August 2027?`,
options:()=>["Sunday","Monday","Friday","Saturday"],
answer:0
},

{
text:(n)=>`How many times do the hands of a clock overlap (coincide) in 1 day?`,
options:()=>["11","12","22","24"],
answer:2
},

{
text:(n)=>`If today is Wednesday, what day will it be after 63 days?`,
options:()=>["Thursday","Friday","Wednesday","Tuesday"],
answer:2
},

{
text:(n)=>`A clock shows 4:00. What is the angle between the hour and minute hands?`,
options:()=>["120°","130°","135°","150°"],
answer:0
},

{
text:(n)=>`If Jan 1, 2026, is a Thursday, what day of the week will be Jan 1, 2027?`,
options:()=>["Friday","Saturday","Thursday","Wednesday"],
answer:0
},

{
text:(n)=>`Five people (A, B, C, D, E) are sitting in a row facing North. C is sitting immediately to the left of B. A is at one end. E is sitting between D and F. D is not at any end. Who is sitting in the exact middle?`,
options:()=>["B","C","D","E"],
answer:3
},

{
text:(n)=>`P, Q, R, S, T, and U are sitting at a circular table facing the centre. P is immediately to the left of Q. S is directly opposite to P. T is halfway between S and Q. Who is immediately to the right of T?`,
options:()=>["S","Q","P","U"],
answer:1
},

{
text:(n)=>`The average weight of 10 students is 40 kg. If a new student with a weight of 51 kg joins the group, what is the new average weight?`,
options:()=>["40","49","41","51"],
answer:2
},

{
text:(n)=>`A's salary is 20% lower than B's salary. By what percentage is B's salary higher than A's salary?`,
options:()=>["40%","25%","20%","30%"],
answer:1
},

{
text:(n)=>`A can complete a job in 15 days. B can complete the same job in 10 days. If they work together, how many days will it take them to complete the job?`,
options:()=>["7 days","6 days","9 days","8 days"],
answer:1
}

]

  },
  {
    section: "Mathematical Ability",
    total: 55,
    templates: [
      {
text:(n)=>`The difference between the place value and face value of 7 in the number 285731 is:`,
options:()=>["700","693","707","630"],
answer:1
},

{
text:(n)=>`What is the smallest number that must be added to 1056 so that the sum is completely divisible by 23?`,
options:()=>["2","3","18","21"],
answer:0
},

{
text:(n)=>`The sum of two numbers is 216 and their HCF is 27. The numbers are:`,
options:()=>["27, 189","81, 135","108, 108","154, 62"],
answer:0
},

{
text:(n)=>`Find the unit digit in the product (2467)153*(341)72:`,
options:()=>["1","3","7","9"],
answer:2
},

{
text:(n)=>`Which of the following fractions is the largest?`,
options:()=>["7/9","11/13","16/19","19/21"],
answer:3
},

{
text:(n)=>`If A: B = 2:3, B:C = 4:5 and C:D = 6:7, then A:D is:`,
options:()=>["2:7","16:35","4:15","8:15"],
answer:1
},

{
text:(n)=>`A sum of money is divided among A, B, C, and D in the ratio 3:4:9:10. If the share of C is ₹2580 more than the share of B, what is the total amount of money?`,
options:()=>["₹5676","₹6192","₹13416","₹12384"],
answer:2
},

{
text:(n)=>`A, B, and C start a business. A invests three times as much as B and B invests two-third of what C invests. Find the ratio of their capitals:`,
options:()=>["3:9:2","6:10:15","5:3:2","6:2:3"],
answer:3
},

{
text:(n)=>`A shopkeeper cheats to the extent of 10% while buying and also 10% while selling by using false weights. His total gain is:`,
options:()=>["20%","21%","22%","11%"],
answer:1
},

{
text:(n)=>`If 15% of (A + B) = 25% of (A - B), then what per cent of B is equal to A?`,
options:()=>["100%","400%","150%","200%"],
answer:1
},

{
text:(n)=>`A man buys a cycle for ₹1400 and sells it at a loss of 15%. What is the selling price of the cycle?`,
options:()=>["₹1202","₹1190","₹1160","₹1000"],
answer:1
},

{
text:(n)=>`A can do a piece of work in 10 days and B in 15 days. They work together for 5 days and then B leaves. In how many days will A finish the remaining work?`,
options:()=>["1 day","2 days","3 days","1.6 days"],
answer:3
},

{
text:(n)=>`Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is:`,
options:()=>["50 min","12 min","25 min","15 min"],
answer:1
},

{
text:(n)=>`If 12 men or 18 women can reap a field in 14 days, then working at the same rate, 8 men and 16 women can reap the same field in:`,
options:()=>["9 days","5 days","7 days","8 days"],
answer:0
},

{
text:(n)=>`A train 120 m long passes a telegraph post in 6 seconds. Find the speed of the train:`,
options:()=>["60 km/hr","72 km/hr","64 km/hr","80 km/hr"],
answer:1
},

{
text:(n)=>`A man covers a certain distance between house and office on scooter. Having an average speed of 30 km/hr, he is late by 10 min. However, with a speed of 40 km/hr, he reaches his office 5 min earlier. Find the distance between his house and office:`,
options:()=>["30 km","40 km","15 km","20 km"],
answer:3
},

{
text:(n)=>`A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream:`,
options:()=>["2 hours","3 hours","4 hours","5 hours"],
answer:2
},

{
text:(n)=>`The length of a rectangle is increased by 60%. By what percent would the width have to be decreased to maintain the same area?`,
options:()=>["37.5%","60%","75%","120%"],
answer:0
},

{
text:(n)=>`The area of a circular garden is 15400 sq. m. Find the cost of fencing it at ₹5 per meter:`,
options:()=>["₹2200","₹1100","₹4400","₹3300"],
answer:0
},

{
text:(n)=>`The volume of a right circular cone of height 9 cm is . Find the diameter of its base:`,
options:()=>["4 cm","8 cm","12 cm","6 cm"],
answer:1
},
{
text:(n)=>`If the side of a cube is doubled, its volume becomes:`,
options:()=>["2 times","4 times","8 times","12 times"],
answer:2
},

{
text:(n)=>`What is 15 (mod 7)?`,
options:()=>["1","2","0","8"],
answer:0
},

{
text:(n)=>`In an Arithmetic Progression (AP), if the 5th term is 30 and the 12th term is 65, what is the common difference?`,
options:()=>["5","7","4","6"],
answer:0
},

{
text:(n)=>`Find the sum of the first 20 even natural numbers:`,
options:()=>["420","400","210","380"],
answer:0
},

{
text:(n)=>`The average of 5 consecutive numbers is 27. The largest of these numbers is:`,
options:()=>["27","28","29","30"],
answer:2
},

{
text:(n)=>`A person incurs a loss of 5% by selling a watch for ₹1140. At what price should the watch be sold to earn a 5% profit?`,
options:()=>["₹1200","₹1230","₹1260","₹1290"],
answer:2
},

{
text:(n)=>`If 40% of a number is equal to two-third of another number, what is the ratio of first number to the second number?`,
options:()=>["2:5","3:7","5:3","7:3"],
answer:2
},

{
text:(n)=>`1/0.04 is equal to:`,
options:()=>["2.5","25","250","0.25"],
answer:1
},

{
text:(n)=>`The ratio of two numbers is 3:4 and their LCM is 120. The sum of the numbers is:`,
options:()=>["70","140","35","105"],
answer:0
},

{
text:(n)=>`A sum of money doubles itself at compound interest in 15 years. In how many years will it become eight times itself at the same rate?`,
options:()=>["45 years","30 years","60 years","120 years"],
answer:0
},

{
text:(n)=>`If 15% of A is equal to 20% of B, then A: B is:`,
options:()=>["5:4","3:4","4:3","1:2"],
answer:2
},

{
text:(n)=>`A trader marks his goods above the cost price but allows a discount of on the marked price. What is his net profit percentage?`,
options:()=>["8%","10%","5%","12%"],
answer:0
},

{
text:(n)=>`A can do a piece of work in 12 days and B can do it in 18 days. They work together for 4 days and then A leaves. How many days will B take to finish the remaining work?`,
options:()=>["12 days","6 days","10 days","8 days"],
answer:3
},

{
text:(n)=>`The ratio of the ages of a father and his son is 7:3. If the sum of their ages is 60 years, what is the difference between their ages?`,
options:()=>["24 years","30 years","18 years","42 years"],
answer:0
},

{
text:(n)=>`The average of 5 consecutive odd numbers is 25. What is the smallest of these numbers?`,
options:()=>["25","19","21","23"],
answer:2
},

{
text:(n)=>`If A and B are two sets such that n(A)=30, n(B)=25, and n(A∪B)=45, find n(A∩B).`,
options:()=>["5","20","15","10"],
answer:3
},

{
text:(n)=>`The 5th term of an Arithmetic Progression (A.P.) is 16 and the 9th term is 28. What is the 12th term of this progression?`,
options:()=>["40","37","34","39"],
answer:1
},

{
text:(n)=>`What is the distance between the points (a cos θ, a sin θ) and (a sin θ, −a cos θ)?`,
options:()=>["2a","2a","a","a2"],
answer:1
},
{
text:(n)=>`If tan θ + cot θ = 2, then what is the value of tan2θ + cot2θ?`,
options:()=>["4","2","1","0"],
answer:1
},

{
text:(n)=>`What is the remainder when the polynomial P(x)= x3−4x2+2x+1 is divided by (x−2)?`,
options:()=>["-3","0","-1","3"],
answer:0
},

{
text:(n)=>`What is the equation of the straight line passing through the points (2,3) and (4,7)?`,
options:()=>["y=2x−1","y=2x+1","y=−2x+1","y=0.5x+2"],
answer:0
},

{
text:(n)=>`If the 2×2 matrix with first row (2, k) and second row (4,8) is a singular matrix, what is the value of k?`,
options:()=>["8","2","4","-4"],
answer:2
},

{
text:(n)=>`The angle of elevation of the top of a tower from a point on the ground, which is 30 meters away from the foot of the tower, is 30°. Find the height of the tower.`,
options:()=>["10 meters","15 meters","10√3 meters","30√3 meters"],
answer:2
},

{
text:(n)=>`Evaluate the limit: lim x→2 (x²−4)/(x−2)`,
options:()=>["4","2","0","Undefined"],
answer:0
},
{
text:(n)=>`The radius of a circle is 13 cm and the length of one of its chords is 10 cm. What is the perpendicular distance of the chord from the centre?`,
options:()=>["14 cm","8 cm","10 cm","12 cm"],
answer:3
},

{
text:(n)=>`The arithmetic mean of 40, 50, 55, 58, and 78 is:`,
options:()=>["55.4","56.5","57.0","56.2"],
answer:3
},

{
text:(n)=>`If the average of 3, 5, 15, 18, x, and 25 is 12, then find the value of x.`,
options:()=>["8","6","7","5"],
answer:1
},

{
text:(n)=>`The arithmetic mean of 10 numbers is 20. If each number in this set is multiplied by 2 and then decreased by 5, what is the arithmetic mean of the new numbers?`,
options:()=>["35","40","45","20"],
answer:0
},

{
text:(n)=>`What is the median of the following dataset: 12, 14, 10, 16, 8, 6, 18, 15, 11?`,
options:()=>["11","15","12","14"],
answer:2
},

{
text:(n)=>`The harmonic mean of 2, 3, 4, and 5 is:`,
options:()=>["77/240","160/77","240/77","190/6"],
answer:2
},

{
text:(n)=>`In statistics, the standard deviation is simply the ____ of the variance.`,
options:()=>["Cube","Square root","Reciprocal","Square"],
answer:1
},

{
text:(n)=>`Three unbiased coins are tossed simultaneously. What is the probability of getting exactly two heads?`,
options:()=>["5/8","1/2","3/8","1/8"],
answer:2
},

{
text:(n)=>`When a fair six-sided die is rolled, what is the probability of getting a prime number?`,
options:()=>["1/2","2/3","1/6","1/3"],
answer:0
},

{
text:(n)=>`Two cards are drawn randomly from a standard deck of 52 well-shuffled cards (without replacement). What is the probability that both cards are Kings?`,
options:()=>["1/221","1/169","4/52","3/51"],
answer:0
},

{
text:(n)=>`The geometric mean of 4, 8, 16, and 8 is:`,
options:()=>["32","16","8","4"],
answer:2
}
    ]
  },
  {
    section: "Communication Ability",
    total: 70,
    templates: [

{
text:(n)=>`Choose the word closest in meaning (synonym) to: ABDICATE`,
options:()=>[
"Relinquish",
"Seize",
"Advise",
"Participate"
],
answer:0
},

{
text:(n)=>`Choose the word opposite in meaning (antonym) to: PROFOUND`,
options:()=>[
"Deep",
"Scholarly",
"Shallow",
"Insightful"
],
answer:2
},

{
text:(n)=>`Fill in the blank: "Buying a home is one of the most _____________ financial decisions we need to take."`,
options:()=>[
"Impatient",
"Important",
"Honest",
"Drastic"
],
answer:1
},

{
text:(n)=>`Choose the correctly used word: "I _________ swimming every Saturday morning."`,
options:()=>[
"Play",
"Do",
"Go",
"Run"
],
answer:2
},

{
text:(n)=>`What is the antonym of "Happy"?`,
options:()=>[
"Joyful",
"Sad",
"Cheerful",
"Content"
],
answer:1
},

{
text:(n)=>`Select the best compound word for: "A main road"`,
options:()=>[
"Highroad",
"Thoroughfare",
"Walkthrough",
"Expressway"
],
answer:0
},

{
text:(n)=>`Identify the synonym of: AKIN`,
options:()=>[
"Different",
"Similar",
"Distant",
"Opposed"
],
answer:1
},

{
text:(n)=>`Choose the correct word for: "One who does not disclose information"`,
options:()=>[
"Secretive",
"Repugnant",
"Dreadful",
"Passive"
],
answer:0
},

{
text:(n)=>`Identify the meaning of "Amble"`,
options:()=>[
"Walk fast",
"Run",
"Walk slowly",
"Jump"
],
answer:2
},
{
text:(n)=>`Your father's brother's daughter is your __________.`,
options:()=>[
"Cousin",
"Niece",
"Sister",
"Aunt"
],
answer:0
},

{
text:(n)=>`Select the antonym of ambushed`,
options:()=>[
"Lurk",
"Waylay",
"Camouflage",
"Exposed"
],
answer:3
},

{
text:(n)=>`Select the synonym of discerning`,
options:()=>[
"Naïve",
"Asinine",
"Inept",
"Astute"
],
answer:3
},

{
text:(n)=>`Select the antonym of violation`,
options:()=>[
"Abuse",
"Obedience",
"Felony",
"Crime"
],
answer:1
},

{
text:(n)=>`Select the antonym of cosset`,
options:()=>[
"Ignore",
"Close",
"Caress",
"Fondle"
],
answer:0
},

{
text:(n)=>`Select the antonym of conception`,
options:()=>[
"Clue",
"Cognition",
"Fact",
"Notion"
],
answer:3
},
{
text:(n)=>`In a Decision Support System (DSS), "What-if" analysis is primarily used to:`,
options:()=>[
"Record daily transactions",
"Observe how changes in one variable affect other variables",
"Generate automated monthly payroll",
"Provide physical security to the data center"
],
answer:1
},

{
text:(n)=>`Which of the following best describes an Enterprise Resource Planning (ERP) system?`,
options:()=>[
"A standalone software for HR management only",
"A suite of integrated applications used to manage core business processes",
"A hardware device used for high-speed internet",
"A system used exclusively by top-level CEOs for news updates"
],
answer:1
},

{
text:(n)=>`In the context of E-Business, the "C2C" model refers to:`,
options:()=>[
"Company to Company",
"Consumer to Company",
"Consumer to Consumer",
"Cloud to Consumer"
],
answer:2
},

{
text:(n)=>`Data Mining in a business context refers to:`,
options:()=>[
"The physical extraction of minerals for computer hardware",
"Backing up data on an external hard drive",
"The process of discovering patterns and knowledge from large amounts of data",
"Deleting old files to save disk space"
],
answer:2
},

{
text:(n)=>`Which protocol is the standard for transferring files between a business server and a client over the internet?`,
options:()=>[
"SMTP",
"FTP",
"VOIP",
"SNMP"
],
answer:1
},
{
text:(n)=>`What is the main objective of a Customer Relationship Management (CRM) system?`,
options:()=>[
"To manage internal employee salaries",
"To reduce the cost of raw materials",
"To synchronize customer-facing business processes to build loyalty",
"To design the physical layout of a retail store"
],
answer:2
},

{
text:(n)=>`A "Digital Signature" is used in business transactions for:`,
options:()=>[
"Scanning a physical signature into a computer",
"Authentication and ensuring the integrity of a document",
"Adding a decorative logo to an email",
"Reducing the file size of a contract"
],
answer:1
},

{
text:(n)=>`In an E-commerce architecture, which layer is responsible for translating the customer’s request into a format the database can understand?`,
options:()=>[
"Presentation Layer",
"Application/Business Logic Layer",
"Data Link Layer",
"Session Layer"
],
answer:1
},

{
text:(n)=>`A business uses "Predictive Analytics" to forecast future sales based on historical data. This is an application of which technology?`,
options:()=>[
"Transaction Processing Systems (TPS)",
"Machine Learning (ML)",
"Virtual Private Network (VPN)",
"Blockchain"
],
answer:1
},

{
text:(n)=>`What is the primary purpose of a "Firewall" in a corporate network?`,
options:()=>[
"To increase the internet speed of the office",
"To prevent unauthorized access to or from a private network",
"To store large backups of financial records",
"To host the company's public website"
],
answer:1
},

{
text:(n)=>`In Digital Marketing, "SEO" stands for:`,
options:()=>[
"Social Engagement Optimization",
"Search Engine Optimization",
"Sales Electronic Organization",
"Secure Electronic Order"
],
answer:1
},
{
text:(n)=>`Which of the following is a "Cloud Computing" service model where the provider offers a complete software application (like Google Workspace or Salesforce) over the internet?`,
options:()=>[
"IaaS (Infrastructure as a Service)",
"PaaS (Platform as a Service)",
"SaaS (Software as a Service)",
"DaaS (Database as a Service)"
],
answer:2
},

{
text:(n)=>`When a company like Amazon suggests products based on your past browsing history, it is using:`,
options:()=>[
"Expert Systems",
"Recommendation Engines",
"Decision Trees",
"Batch Processing"
],
answer:1
},

{
text:(n)=>`Which type of information system is designed specifically for top-level executives to monitor organizational performance through a dashboard?`,
options:()=>[
"Management Information System (MIS)",
"Executive Support System (ESS)",
"Office Automation System (OAS)",
"Transaction Processing System (TPS)"
],
answer:1
},

{
text:(n)=>`In professional business communication, what is the primary purpose of an "Executive Summary" at the beginning of a long formal report?`,
options:()=>[
"To list the contact details of all the executives in the company.",
"To provide a detailed table of contents for every section of the report.",
"To provide a concise overview of the main points, conclusions, and recommendations for busy decision-makers.",
"To serve as a legal disclaimer protecting the company from financial liability."
],
answer:2
},

{
text:(n)=>`Choose the correct form of the verb: 
Neither the students nor the teacher _______ aware of the rescheduled exam time.`,
options:()=>[
"was",
"were",
"have been",
"are"
],
answer:0
},
{
text:(n)=>`Fill in the blank with the appropriate article: 
Copper is _______ useful metal.`,
options:()=>[
"No article needed",
"the",
"an",
"a"
],
answer:3
},

{
text:(n)=>`Identify the correct preposition: 
The committee will meet _______ Friday to discuss the proposal.`,
options:()=>[
"for",
"in",
"on",
"at"
],
answer:2
},

{
text:(n)=>`Select the correct tense: 
By the time the movie ends, we _______ for three hours.`,
options:()=>[
"will wait",
"have waited",
"are waiting",
"will have been waiting"
],
answer:3
},

{
text:(n)=>`Choose the correct word: 
The manager was unhappy with the _______ of the project.`,
options:()=>[
"income",
"outlay",
"outcast",
"outcome"
],
answer:3
},

{
text:(n)=>`Fill in the blank: 
If I _______ you, I would accept the job offer immediately.`,
options:()=>[
"had been",
"were",
"am",
"was"
],
answer:1
},
{
text:(n)=>`Pick the correct pronoun: Every student must bring _______ own laptop to the workshop.`,
options:()=>[
"their",
"they",
"his",
"its"
],
answer:0
},

{
text:(n)=>`Choose the correct phrase: He is very fond _______ classical music.`,
options:()=>[
"about",
"for",
"of",
"with"
],
answer:2
},

{
text:(n)=>`Select the correct option: She has been living in this city _______ 2010.`,
options:()=>[
"during",
"since",
"from",
"for"
],
answer:1
},

{
text:(n)=>`Complete the sentence: Hardly _______ the station when the train pulled out.`,
options:()=>[
"he had reached",
"he reached",
"had he reached",
"did he reached"
],
answer:2
},

{
text:(n)=>`Choose the correct word: The weather _______ today is much better than yesterday.`,
options:()=>[
"forecast",
"climate",
"broadcasting",
"foretell"
],
answer:0
},

{
text:(n)=>`Select the correctly punctuated sentence:`,
options:()=>[
"The CEO; however, decided to postpone the meeting.",
"The CEO, however, decided to postpone the meeting.",
"The CEO however, decided to postpone the meeting.",
"The CEO however decided to postpone the meeting."
],
answer:1
},

{
text:(n)=>`Identify the error: 'One of the reason why he failed is his lack of preparation.'`,
options:()=>[
"why",
"failed",
"reason",
"is"
],
answer:2
},

{
text:(n)=>` Fill in the blank: The police _______ investigating the robbery that took place last night.`,
options:()=>[
"was",
"are",
"has been",
"is"
],
answer:1
},

{
text:(n)=>` Choose the correct conjunction: _______ he was tired, he finished his homework.`,
options:()=>[
"Because",
"Unless",
"Although",
"Since"
],
answer:2
},

{
text:(n)=>` Identify the passive voice sentence:`,
options:()=>[
"They built the bridge in 1990.",
"The bridge stands firm.",
"The bridge was built in 1990.",
"The engineers completed the bridge."
],
answer:2
},

{
text:(n)=>` Fill in the blank: She doesn't like coffee, _______?`,
options:()=>[
"did she",
"does she",
"is she",
"doesn't she"
],
answer:1
},

{
text:(n)=>` Select the correct word: The news _______ very distressing.`,
options:()=>[
"have been",
"is",
"were",
"are"
],
answer:1
},

{
text:(n)=>` Choose the correct preposition: He graduated _______ Harvard University.`,
options:()=>[
"from",
"by",
"at",
"in"
],
answer:0
},

{
text:(n)=>` Select the correct adjective form: This is the _______ of the two options.`,
options:()=>[
"best",
"most good",
"more good",
"better"
],
answer:3
},

{
text:(n)=>`
Passage 1:
"The concept of 'Brand Loyalty' has undergone a seismic shift in the digital age. In the past, consumers often stuck with a single brand for decades, driven by limited choices and the comfort of familiarity. However, the rise of e-commerce and social media has democratized information. Today's consumer is 'hyper-informed' and significantly more price-sensitive. With the ability to compare dozens of competitors in seconds, loyalty is no longer a default setting; it is a hard-earned reward. Companies that fail to prioritize personalized customer experiences and ethical transparency are finding that their once-loyal base is quick to migrate to 'disruptor' brands that align more closely with modern values."

Question: According to the passage, what was a primary driver of brand loyalty in the past?
`,
options:()=>[
"Ethical transparency",
"Social media influence",
"Limited choices and familiarity",
"High prices"
],
answer:2
},


{
text:(n)=>`What does the term 'hyper-informed' suggest about modern consumers?`,
options:()=>[
"They no longer care about brand quality.",
"They have access to extensive information and comparisons.",
"They prefer shopping in physical stores.",
"They are overwhelmed by too much data."
],
answer:1
},

{
text:(n)=>`The author uses the phrase 'seismic shift' to indicate that the change in brand loyalty is:`,
options:()=>[
"Temporary",
"Predictable and slow",
"Massive and fundamental",
"Minor and unnoticeable"
],
answer:2
},

{
text:(n)=>`Which of the following would a 'disruptor' brand likely prioritize to win over consumers?`,
options:()=>[
"Increasing prices significantly",
"Limiting the amount of information available",
"Ethical transparency and personalized experiences",
"Maintaining the status quo"
],
answer:2
},

{
text:(n)=>`Based on the passage, brand loyalty today is described as:`,
options:()=>[
"A default setting for most shoppers",
"Something that is harder to earn than in the past",
"Non-existent in the digital age",
"Driven solely by advertising budgets"
],
answer:1
},
{
text:(n)=>`
Passage 2:
"The concept of 'Circular Economy' is rapidly replacing the traditional linear 'take-make-dispose' industrial model. In a linear system, raw materials are extracted, transformed into products, and eventually discarded as waste—a process that is increasingly unsustainable given the planet's finite resources. In contrast, a circular economy aims to decouple economic growth from the consumption of virgin resources. This is achieved through long-lasting design, maintenance, repair, reuse, remanufacturing, and recycling. By 'closing the loop,' businesses can reduce environmental impact while simultaneously discovering new avenues for profit. However, the transition requires more than just better recycling habits; it demands a fundamental redesign of supply chains and a shift in consumer behavior from 'ownership' to 'usership,' where access to a service is valued over the possession of a physical product."

Question: According to the passage, what is the primary flaw of the 'traditional linear model'?
`,
options:()=>[
"It prevents the extraction of raw materials.",
"It relies on finite resources and creates excessive waste.",
"It focuses too much on recycling.",
"It is too expensive for small businesses."
],
answer:1
},


{
text:(n)=>`What does the author mean by the phrase 'decouple economic growth from the consumption of virgin resources'?`,
options:()=>[
"Increasing the price of raw materials significantly.",
"Stopping all economic growth to save the planet.",
"Growing the economy without relying on the extraction of new materials.",
"Relying solely on imports for manufacturing."
],
answer:2
},

{
text:(n)=>`According to the passage, a circular economy is achieved through all of the following EXCEPT:`,
options:()=>[
"Increased extraction of raw materials",
"Long-lasting design",
"Recycling",
"Remanufacturing and repair"
],
answer:0
},

{
text:(n)=>`What does the shift from 'ownership' to 'usership' imply for consumers?`,
options:()=>[
"They will no longer have access to modern technology.",
"They will have to share everything with their neighbours.",
"They will save money by not using any services.",
"They would value access to a service over actually owning the product."
],
answer:3
},

{
text:(n)=>`The tone of the passage can best be described as:`,
options:()=>[
"Skeptical and doubtful",
"Nostalgic for old methods",
"Aggressive and demanding",
"Informative and advocating"
],
answer:3
},
{
text:(n)=>`
Passage 3:
The 'paradox of choice' is a psychological phenomenon that suggests that while having options is generally considered a hallmark of freedom, an overabundance of them can lead to significant anxiety and 'decision paralysis.' When faced with a vast array of possibilities—whether in a supermarket aisle or a digital streaming service—the human brain often becomes overwhelmed. Instead of feeling empowered, the individual begins to fear making a sub-optimal choice, leading to a state of 'analysis paralysis' where no decision is made at all. Furthermore, even after a choice is eventually settled upon, the existence of so many alternative paths often leads to decreased satisfaction and 'buyer’s remorse.' The individual tends to imagine the hypothetical benefits of the paths not taken, making the chosen reality feel less fulfilling than it otherwise would have been in a simpler environment.

Question: What is the 'paradox' referred to in the title and the passage?
`,
options:()=>[
"That digital services offer fewer choices than physical supermarkets.",
"That freedom of choice actually limits the number of products available.",
"That more options can lead to less freedom and more anxiety.",
"That people prefer having no choices at all."
],
answer:2
},

{
text:(n)=>`According to the passage, 'analysis paralysis' occurs when:`,
options:()=>[
"The individual is forced to make a choice by a third party.",
"An individual makes a decision too quickly.",
"There are no alternatives available.",
"The brain is unable to choose due to a fear of making the wrong choice."
],
answer:3
},

{
text:(n)=>` What happens to an individual's satisfaction after they finally make a choice in a high-option environment?`,
options:()=>[
"It remains constant regardless of the number of options.",
"It decreases as they imagine the benefits of the options they rejected.",
"It increases because they are proud of their decision.",
"It leads to a total lack of interest in future shopping."
],
answer:1
},

{
text:(n)=>`The word 'sub-optimal' in the passage most nearly means:`,
options:()=>[
"A choice that everyone else is making.",
"The most expensive choice.",
"Less than the best possible choice.",
"A choice made in a supermarket."
],
answer:2
},

{
text:(n)=>`Which of the following would the author likely suggest as a solution to 'decision paralysis'?`,
options:()=>[
"Providing even more choices to ensure everyone is happy.",
"Removing the ability to choose entirely.",
"Limiting choices to a manageable number.",
"Encouraging people to spend more time on analysis."
],
answer:2
},
{
text:(n)=>`
Passage 4:
"The 'Urban Heat Island' (UHI) effect is a phenomenon where metropolitan areas experience significantly higher temperatures than their surrounding rural counterparts. This temperature disparity is primarily driven by the replacement of natural vegetation with 'impervious surfaces' like asphalt, concrete, and brick. These materials possess high thermal mass, meaning they absorb and retain solar radiation throughout the day and slowly release it at night. Furthermore, the geometric arrangement of tall buildings creates 'urban canyons' that trap heat and reduce wind flow, preventing the natural cooling processes of the atmosphere. To mitigate these effects, urban planners are increasingly turning to 'Green Infrastructure.' By integrating rooftop gardens, permeable pavements, and urban forests, cities can utilize evapotranspiration—the process by which plants release water vapor—to naturally lower ambient temperatures and improve the overall quality of urban life."

Question: What is the primary cause of the 'Urban Heat Island' effect according to the passage?
`,
options:()=>[
"Increased rainfall in metropolitan areas.",
"The replacement of vegetation with materials like concrete and asphalt.",
"The natural climate changes of the planet.",
"The migration of people from rural to urban areas."
],
answer:1
},


{
text:(n)=>`The term 'impervious surfaces' refers to materials that:`,
options:()=>[
"Do not allow water or air to penetrate and instead absorb heat.",
"Are only found in rural environments.",
"Reflect all solar radiation back into space.",
"Allow water and heat to pass through easily."
],
answer:0
},

{
text:(n)=>`How do 'urban canyons' contribute to higher temperatures?`,
options:()=>[
"They trap heat and block the natural flow of wind.",
"They increase the humidity of the city.",
"They reflect sunlight away from the city center.",
"They encourage the growth of heat-trapping plants."
],
answer:0
},

{
text:(n)=>`Which process do plants use to help cool the air?`,
options:()=>[
"Thermal massing",
"Evapotranspiration",
"Solar radiation",
"Impervious cooling"
],
answer:1
},

{
text:(n)=>`What is the author's suggested solution for the UHI effect?`,
options:()=>[
"Moving all metropolitan residents to rural areas.",
"Integrating 'Green Infrastructure' into city planning.",
"Building taller skyscrapers to create more shade.",
"Increasing the use of asphalt and concrete."
],
answer:1
}

    ]
  }
];

function buildQuestionBank() {
  const questions = [];
  let id = 1;

  SECTION_BLUEPRINTS.forEach((blueprint) => {
    for (let i = 0; i < blueprint.total; i += 1) {
      const template = blueprint.templates[i % blueprint.templates.length];

      questions.push({
        id,
        section: blueprint.section,
        text: template.text(id, i + 1),
        options: template.options(id, i + 1),
        answer: template.answer
      });
      id += 1;
    }
  });

  return questions;
}

const QUESTION_BANK = buildQuestionBank();

const SECTIONS = [...new Set(QUESTION_BANK.map((question) => question.section))];

function $(selector) {
  return document.querySelector(selector);
}

const API_BASE =
  window.location.protocol === "file:"
    ? "http://127.0.0.1:3000"
    : "";

async function apiFetch(url, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE}${url}`, {
      credentials: API_BASE ? "include" : "same-origin",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });
  } catch (_error) {
    throw new Error("Unable to connect to the backend. Start the server and open the project from http://127.0.0.1:3000.");
  }

  let data = null;
  try {
    data = await response.json();
  } catch (_error) {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "Request failed.");
  }

  return data;
}

function getCandidate() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.candidate) || "null");
}

function setCandidate(candidate) {
  localStorage.setItem(STORAGE_KEYS.candidate, JSON.stringify(candidate));
}

function getDefaultExamState() {
  return {
    currentQuestionId: QUESTION_BANK[0].id,
    currentSection: SECTIONS[0],
    remainingSeconds: EXAM_DURATION_SECONDS,
    startedAt: Date.now(),
    answers: QUESTION_BANK.reduce((acc, question) => {
      acc[question.id] = {
        selectedOption: null,
        status: "not-visited",
        visited: false
      };
      return acc;
    }, {})
  };
}

function getExamState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.exam) || "null");
}

function setExamState(state) {
  localStorage.setItem(STORAGE_KEYS.exam, JSON.stringify(state));
}

function getAnalysis() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.analysis) || "null");
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function populateStates() {
  const stateSelect = $("#state");
  const citySelect = $("#city");
  if (!stateSelect || !citySelect) return;

  citySelect.disabled = true;

  Object.keys(STATE_CITY_MAP).forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state.replaceAll("_", " ");
    stateSelect.appendChild(option);
  });

  stateSelect.addEventListener("change", () => {
    citySelect.innerHTML = '<option value="">Select City</option>';
    const cities = STATE_CITY_MAP[stateSelect.value] || [];
    citySelect.disabled = cities.length === 0;
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  });
}

function setAuthMode(mode) {
  const subtitle = $("#authSubtitle");
  const submitButton = $("#submitAuthBtn");
  const registerOnlyFields = document.querySelectorAll(".register-only");
  const authTabs = document.querySelectorAll(".auth-tab");

  document.body.dataset.authMode = mode;

  authTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authMode === mode);
  });

  registerOnlyFields.forEach((field) => {
    field.classList.toggle("hidden", mode === "login");
    field.querySelectorAll("input, select").forEach((input) => {
      if (mode === "login") {
        input.dataset.wasRequired = input.required ? "true" : "false";
        input.required = false;
      } else if (input.dataset.wasRequired === "true" || input.hasAttribute("required")) {
        input.required = true;
      }
    });
  });

  if (subtitle) {
    subtitle.textContent =
      mode === "login"
        ? "Login with your registered email and password."
        : "Create your account to start the mock test.";
  }

  if (submitButton) {
    submitButton.textContent = mode === "login" ? "Login to Continue" : "Start Test Now";
  }
}

function showFormMessage(message, type = "error") {
  const formMessage = $("#formMessage");
  if (!formMessage) return;
  formMessage.textContent = message;
  formMessage.classList.toggle("success", type === "success");
}

async function syncSessionCandidate() {
  try {
    const data = await apiFetch("/api/auth/session", { method: "GET" });
    setCandidate(data.user);
    return data.user;
  } catch (_error) {
    return null;
  }
}

function handleLoginPage() {
  const form = $("#loginForm");
  if (!form) return;

  populateStates();
  setAuthMode("register");

  if (window.location.protocol === "file:") {
    showFormMessage("Open this project from http://127.0.0.1:3000 after starting the server, otherwise registration will not work.");
  }

  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      showFormMessage("");
      setAuthMode(tab.dataset.authMode);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const mode = document.body.dataset.authMode || "register";

    showFormMessage("");

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const requestBody =
        mode === "login"
          ? { email: payload.email, password: payload.password }
          : payload;
      const data = await apiFetch(endpoint, {
        method: "POST",
        body: JSON.stringify(requestBody)
      });

      setCandidate(data.user);
      setExamState(getDefaultExamState());
      localStorage.removeItem(STORAGE_KEYS.analysis);
      window.location.href = "instructions.html";
    } catch (error) {
      showFormMessage(error.message);
    }
  });
}

function handleInstructionsPage() {
  const button = $("#proceedToTest");
  if (!button) return;

  button.addEventListener("click", async () => {
    const candidate = (await syncSessionCandidate()) || getCandidate();
    if (!candidate) {
      window.location.href = "index.html";
      return;
    }
    window.location.href = "test.html";
  });
}

function getQuestionsBySection(section) {
  return QUESTION_BANK.filter((question) => question.section === section);
}

function updateQuestionStatus(answerState) {
  if (!answerState.visited) return "not-visited";

  if (answerState.status === "review") {
    return answerState.selectedOption !== null
      ? "reviewed-answered"
      : "review";
  }

  if (answerState.selectedOption !== null) return "answered";

  return "not-answered";
}

function goToQuestion(questionId, forceSectionSync = true) {
  const examState = getExamState();
  if (!examState) return;
  const question = QUESTION_BANK.find((item) => item.id === questionId);
  if (!question) return;

  examState.currentQuestionId = questionId;
  if (forceSectionSync) {
    examState.currentSection = question.section;
  }
  examState.answers[questionId].visited = true;
  examState.answers[questionId].status = updateQuestionStatus(examState.answers[questionId]);
  setExamState(examState);
  renderExam();
}

function renderSectionTabs(examState) {
  const tabs = $("#sectionTabs");
  tabs.innerHTML = "";

  SECTIONS.forEach((section) => {
    const button = document.createElement("button");
    button.className = `tab-btn ${section === examState.currentSection ? "active" : ""}`;
    button.textContent = section;
    button.addEventListener("click", () => {
      examState.currentSection = section;
      const firstQuestion = getQuestionsBySection(section)[0];
      examState.currentQuestionId = firstQuestion.id;
      examState.answers[firstQuestion.id].visited = true;
      examState.answers[firstQuestion.id].status = updateQuestionStatus(examState.answers[firstQuestion.id]);
      setExamState(examState);
      renderExam();
    });
    tabs.appendChild(button);
  });
}

function renderQuestion(examState) {
  const question = QUESTION_BANK.find((item) => item.id === examState.currentQuestionId);
  const answerState = examState.answers[question.id];
 const sectionQuestions = getQuestionsBySection(question.section);
 const questionNumber =
  sectionQuestions.findIndex((q) => q.id === question.id) + 1;


  $("#questionHeading").textContent = `Question ${questionNumber}`;
  $("#questionSectionName").textContent = question.section;
  $("#questionText").innerHTML = question.text;


  const optionsList = $("#optionsList");
  optionsList.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `option-card ${answerState.selectedOption === index ? "selected" : ""}`;
    option.innerHTML = `
      <span class="option-index">${index + 1}</span>
      <span>${optionText}</span>
    `;
    option.addEventListener("click", () => {
  const latestState = getExamState();

  latestState.answers[question.id].visited = true;
  latestState.answers[question.id].selectedOption = index;
  latestState.answers[question.id].status = updateQuestionStatus(
    latestState.answers[question.id]
  );

  setExamState(latestState);
  renderExam();
});
    optionsList.appendChild(option);
  });
}

function renderPalette(examState) {
  $("#paletteSectionTitle").textContent = `Section : ${examState.currentSection.toUpperCase()}`;
  const palette = $("#questionPalette");
  palette.innerHTML = "";

  const currentSectionQuestions = getQuestionsBySection(examState.currentSection);
  currentSectionQuestions.forEach((question, index) => {
    const answerState = examState.answers[question.id];
    const statusClass = updateQuestionStatus(answerState);
    const button = document.createElement("button");
    button.className = `palette-btn ${statusClass} ${question.id === examState.currentQuestionId ? "current" : ""}`;
    button.textContent = index + 1;
    button.addEventListener("click", () => goToQuestion(question.id));
    palette.appendChild(button);
  });
}

function renderCounts(examState) {
  const counts = {
    answered: 0,
    review: 0,
    "not-visited": 0,
    "not-answered": 0,
    "reviewed-answered": 0
  };

  QUESTION_BANK.forEach((question) => {
    const status = updateQuestionStatus(examState.answers[question.id]);
    counts[status] += 1;
  });

  $("#answeredCount").textContent = counts.answered;
  $("#reviewCount").textContent = counts.review;
  $("#notVisitedCount").textContent = counts["not-visited"];
  $("#notAnsweredCount").textContent = counts["not-answered"];
  $("#reviewedAnsweredCount").textContent = counts["reviewed-answered"];
}

function syncCandidateInfo() {
  const candidate = getCandidate();
  if (!candidate) return;

  const initials = candidate.name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const nameNode = $("#candidateName");
  const emailNode = $("#candidateEmail");
  const initialsNode = $("#profileInitials");

  if (nameNode) nameNode.textContent = candidate.name;
  if (emailNode) emailNode.textContent = candidate.email;
  if (initialsNode) initialsNode.textContent = initials || "A";
}

function getCurrentQuestionIndex() {
  const examState = getExamState();
  return QUESTION_BANK.findIndex((question) => question.id === examState.currentQuestionId);
}

function moveToNextQuestion() {
  const examState = getExamState();
  const currentIndex = getCurrentQuestionIndex();
  const nextQuestion = QUESTION_BANK[currentIndex + 1];

  if (nextQuestion) {
    examState.currentQuestionId = nextQuestion.id;
    examState.currentSection = nextQuestion.section;
    examState.answers[nextQuestion.id].visited = true;
    examState.answers[nextQuestion.id].status = updateQuestionStatus(examState.answers[nextQuestion.id]);
    setExamState(examState);
    renderExam();
  } else {
    openSubmitModal();
  }
}

function updateCurrentQuestionState(mode) {
  const examState = getExamState();
  const q = examState.answers[examState.currentQuestionId];

  q.visited = true;

  if (mode === "save-next") {
    q.status = q.selectedOption !== null ? "answered" : "not-answered";
  }

  if (mode === "review-next") {
    q.status = "review";
  }



  if (mode === "clear") {
    q.selectedOption = null;
    q.status = "not-answered";
  }


  setExamState(examState);
  renderExam();
}

function attachExamActions() {
  $("#saveNextBtn")?.addEventListener("click", () => {
    updateCurrentQuestionState("save-next");
    moveToNextQuestion();
  });

  $("#markReviewBtn")?.addEventListener("click", () => {
    updateCurrentQuestionState("review-next");
    moveToNextQuestion();
  });


  $("#clearBtn")?.addEventListener("click", () => {
    updateCurrentQuestionState("clear");
    renderExam();
  });

  $("#jumpTopBtn")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  $("#submitTestBtn")?.addEventListener("click", openSubmitModal);
  $("#closeModalBtn")?.addEventListener("click", closeSubmitModal);
  $("#cancelSubmitBtn")?.addEventListener("click", closeSubmitModal);
  $("#confirmSubmitBtn")?.addEventListener("click", finishExam);
}

function openSubmitModal() {
  buildSummaryTable();
  $("#submitModal").classList.remove("hidden");
}

function closeSubmitModal() {
  $("#submitModal").classList.add("hidden");
}

function buildSummaryTable() {
  const examState = getExamState();
  const tbody = $("#summaryTableBody");
  tbody.innerHTML = "";
  const overallCounts = {
    answered: 0,
    "not-answered": 0,
    review: 0,
    "reviewed-answered": 0,
    "not-visited": 0
  };

  QUESTION_BANK.forEach((question) => {
    const status = updateQuestionStatus(examState.answers[question.id]);
    overallCounts[status] += 1;
  });

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>Paper I</td>
    <td>${QUESTION_BANK.length}</td>
    <td>${overallCounts.answered}</td>
    <td>${overallCounts["not-answered"]}</td>
    <td>${overallCounts.review}</td>
    <td>${overallCounts["reviewed-answered"]}</td>
    <td>${overallCounts["not-visited"]}</td>
  `;
  tbody.appendChild(row);
}

function calculateAnalysis() {
  const examState = getExamState();
  const timeTaken = EXAM_DURATION_SECONDS - examState.remainingSeconds;
  const sectionStats = {};
  let correct = 0;
  let incorrect = 0;
  let unattempted = 0;
  let marksScored = 0;

  SECTIONS.forEach((section) => {
    sectionStats[section] = {
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      total: getQuestionsBySection(section).length
    };
  });

  QUESTION_BANK.forEach((question) => {
    const answerState = examState.answers[question.id];
    const section = sectionStats[question.section];

    if (answerState.selectedOption === null) {
      unattempted += 1;
      section.unattempted += 1;
      return;
    }

    if (answerState.selectedOption === question.answer) {
      correct += 1;
      marksScored += 1;
      section.correct += 1;
    } else {
      incorrect += 1;
      section.incorrect += 1;
    }
  });

  const attempted = correct + incorrect;
  const accuracy = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);
  const pace = attempted === 0 ? 0 : Math.round(timeTaken / attempted);

  return {
    candidate: getCandidate(),
    marksScored,
    totalMarks: QUESTION_BANK.length,
    attempted,
    unattempted,
    correct,
    incorrect,
    accuracy,
    pace,
    timeTaken,
    sectionStats
  };
}

function finishExam() {
  const analysis = calculateAnalysis();
  localStorage.setItem(STORAGE_KEYS.analysis, JSON.stringify(analysis));
  apiFetch("/api/attempts", {
    method: "POST",
    body: JSON.stringify(analysis)
  }).catch(() => null).finally(() => {
    closeSubmitModal();
    window.location.href = "analysis.html";
  });
}

function renderExam() {
  const examState = getExamState();
  if (!examState) {
    window.location.href = "index.html";
    return;
  }

  renderSectionTabs(examState);
  renderQuestion(examState);
  renderPalette(examState);
  renderCounts(examState);
  $("#timer").textContent = formatTime(examState.remainingSeconds);
}

function startTimer() {
  const timerElement = $("#timer");
  if (!timerElement) return;

  setInterval(() => {
    const examState = getExamState();
    if (!examState) return;

    if (examState.remainingSeconds <= 0) {
      finishExam();
      return;
    }

    examState.remainingSeconds -= 1;
    setExamState(examState);
    timerElement.textContent = formatTime(examState.remainingSeconds);
  }, 1000);
}

function handleTestPage() {
  if (!$(".test-page")) return;
  syncSessionCandidate().then((candidate) => {
    if (!candidate || !getExamState()) {
      window.location.href = "index.html";
      return;
    }

    syncCandidateInfo();
    const examState = getExamState();
    examState.answers[examState.currentQuestionId].visited = true;
    examState.answers[examState.currentQuestionId].status = updateQuestionStatus(examState.answers[examState.currentQuestionId]);
    setExamState(examState);

    attachExamActions();
    renderExam();
    startTimer();
  });
}

function createStatCard(label, value, icon, accentClass = "") {
  const card = document.createElement("article");
  card.className = `stat-card ${accentClass}`;
  card.innerHTML = `
    <div>
      <strong>${value}</strong>
      <p>${label}</p>
    </div>
    <div class="card-icon">${icon}</div>
  `;
  return card;
}

function createMiniCard(label, value, colorClass) {
  const card = document.createElement("article");
  card.className = `mini-card ${colorClass}`;
  card.innerHTML = `
    <h3>${label}</h3>
    <strong>${value}</strong>
  `;
  return card;
}

function renderAnalysisPage() {
  if (!$(".analysis-page")) return;
  const analysis = getAnalysis();
  if (!analysis) {
    window.location.href = "index.html";
    return;
  }

  $("#analysisCandidate").textContent = `Performance report for ${analysis.candidate.name} (${analysis.candidate.email})`;

  const statsCards = $("#statsCards");
  statsCards.appendChild(createStatCard("Marks Scored", analysis.marksScored, "🎯"));
  statsCards.appendChild(createStatCard("Total Marks", analysis.totalMarks, "◎"));
  statsCards.appendChild(createStatCard("My Pace (Per Question)", `${analysis.pace || 0}s`, "⏱"));

  $("#timeTakenLabel").textContent = formatTime(analysis.timeTaken);
  $("#accuracyLabel").textContent = `${analysis.accuracy}%`;

  const miniCards = $("#miniCards");
  miniCards.appendChild(createMiniCard("Questions Attempted", analysis.attempted, "blue"));
  miniCards.appendChild(createMiniCard("Questions Skipped", analysis.unattempted, "orange"));
  miniCards.appendChild(createMiniCard("Correct Marked", analysis.correct, "green"));
  miniCards.appendChild(createMiniCard("Incorrect Marked", analysis.incorrect, "red"));

  const tbody = $("#subjectTableBody");
  Object.entries(analysis.sectionStats).forEach(([section, stats]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${section}</td>
      <td>${stats.correct}</td>
      <td>${stats.incorrect}</td>
      <td>${stats.unattempted}</td>
      <td>${stats.total}</td>
    `;
    tbody.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${analysis.correct}</td>
    <td>${analysis.incorrect}</td>
    <td>${analysis.unattempted}</td>
    <td>${analysis.totalMarks}</td>
  `;
  tbody.appendChild(totalRow);

  drawScoreChart(analysis.sectionStats);
}

function drawScoreChart(sectionStats) {
  const canvas = $("#scoreChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 60;
  const barWidth = 38;
  const groupGap = 90;
  const chartHeight = height - padding * 2;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9e2ef";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 5; i += 1) {
    const y = padding + (chartHeight / 5) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  const sections = Object.entries(sectionStats);
  const maxValue = Math.max(...sections.map(([, stats]) => stats.total), 1);
  let x = padding + 40;

  sections.forEach(([label, stats]) => {
    const values = [
      { key: "correct", color: "#4a86e8", value: stats.correct },
      { key: "incorrect", color: "#e85c4a", value: stats.incorrect },
      { key: "unattempted", color: "#f5b400", value: stats.unattempted }
    ];

    values.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * (chartHeight - 20);
      const barX = x + index * (barWidth + 12);
      const barY = height - padding - barHeight;

      ctx.fillStyle = item.color;
      ctx.fillRect(barX, barY, barWidth, barHeight);
    });

    ctx.fillStyle = "#3e4452";
    ctx.font = "16px Poppins";
    ctx.fillText(label, x - 6, height - padding + 28);
    x += groupGap + barWidth * 3;
  });

  const legend = [
    { label: "Correct", color: "#4a86e8" },
    { label: "Incorrect", color: "#e85c4a" },
    { label: "Unattempted", color: "#f5b400" }
  ];

  legend.forEach((item, index) => {
    const legendX = padding + index * 180;
    const legendY = 26;
    ctx.fillStyle = item.color;
    ctx.fillRect(legendX, legendY, 18, 18);
    ctx.fillStyle = "#2d3340";
    ctx.fillText(item.label, legendX + 28, legendY + 14);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  handleLoginPage();
  handleInstructionsPage();
  handleTestPage();
  renderAnalysisPage();
  syncSessionCandidate();
});
