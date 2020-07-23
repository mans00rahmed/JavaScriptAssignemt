// ******* CHAPTER 1 *******

// Task 1
alert("Welcome to JS Assignment")

// Task 2
alert("Please Enter valid Password!")

// Task 3
alert("Welcome to JS land... \n Happy Coding!")

// Task 4
alert("welcome to JS land")
alert("Happy Coding")

// Task 5
in developers console 

// ******** CHAPTER 2 *********
// ====== Task 1 & 2 ========
var username;
var myName="";
var message;
message="Hello World";
alert(message);

// ====== TASK 3 ======

var name,age,course ;
name ="Mansoor";
age ="20";
course ="Certifed Web Mobile";
alert(name);
alert(age);
alert(course);

// ======= Task 4 ======
alert(name)
alert(age + "years old")
alert(course)

// ======= Task 5 ======
var a="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(a)

// ======= Task 6 ======
var email="example@example.com"
alert("my email is "+ email)

// ===== Task 7=====
var book ='A smarter way to learn JavaScript';
alert(book)

// ======= Task 8 ======
var a;
a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(a)


// ******* Chapter 3 ******
// ====== Task 1 ======
var age="20";
alert("I'am "+age+" years old")

// ====== Task 2 ======
var N="12"
alert("Site is visited "+N+" times")

// ====== Task 3 ======
var birthyear= 2000
document.write("Data type of my decalyred variable is "+ typeof(birthyear))

// ====== Task 4 ======
var visitorName="bashir"
var product="laptop"
var quantity="12"
document.write(visitorName+" ordered"+ quantity+ product+" from XYZ Store")


// ******* Chapter 4 ******
// ====== Task 1 ======
var a,b,c ;

// ====== Task 2 ======
var *a,@d,!js,^RT,#asdf; illegal variables

// ====== Task 3 ======
var a,b,c,d,e,f ; legal variables

// ====== Task 4 ======
document.write("<h1>Rules for dclayring JS variables</h1>")
document.write("  Variable names can only contain number, $, and _.For example $my_1stVariable Variables must begin with a ______, ______ or _____. For example $name, _name or name ")

// ******* Chapter 5 ******
// ======== Task 1 =======
var a,b,c;
a=+prompt("enter number")
b=+prompt("enter number")
c=a+b
document.write("Sum of "+a+" and "+b+" is "+ c)

// ======== Task 2 ======= 
var a,b,c;
a=+prompt("enter number")
b=+prompt("enter number")
c=a-b
document.write("Subtraction of "+a+" and "+b+" is "+ c)

var a,b,c;
a=+prompt("enter number")
b=+prompt("enter number")
c=a*b
document.write("Multiplication of "+a+" and "+b+" is "+ c)

var a,b,c;
a=+prompt("enter number")
b=+prompt("enter number")
c=a/b
document.write("Division of "+a+" and "+b+" is "+ c)

var a,b,c;
a=+prompt("enter number")
b=+prompt("enter number")
c=a%b
document.write("Modulus of "+a+" and "+b+" is "+ c)

// ======== Task 3 =======
var v ;
document.write("Value after variable declaration is " + v)
v=5
document.write("initial value"+v)
v++
document.write("incremented value"+v)
v=v+7
document.write("Value after addition is "+v)
v=v-1
document.write("Value after decrement is "+v)
v=v%3
document.write("Remainder is "+v)


// ======== Task 4 =======
ticket=600
ticket=ticket*5
document.write("Total cost of buying 5 tickets "+ticket+"PKR")

// ======== Task 5 =======
var i;
for (i = 1; i<=10; i++) {
    document.write("4 x "+i+"="+4*i,"<br>")
}

// ======== Task 6 =======
var c,f;
c=25;
f=77;
c= (f-32) * 5/9;
f= (c * 9/5) + 32
document.write(c+"℃ "+"is "+f+"℉"+"<br>");
document.write(f+"℉"+" is "+c+"℃ ");

// ======== Task 7 =======
var price_of_item_1,price_of_item_2,ordered_quantity_of_item_2,ordered_quantity_of_item_1,shipping_charges,total_cost;
price_of_item_1 = 650;
price_of_item_2 = 100;
ordered_quantity_of_item_1 = 3;
ordered_quantity_of_item_2 = 7;
shipping_charges = 100;
total_cost=(price_of_item_1*ordered_quantity_of_item_1+price_of_item_2*ordered_quantity_of_item_2+shipping_charges)
document.write("Total cost of order is " + total_cost)

// ======== Task 8 =======
var totalMarks, marksObtained, Precentage;
totalMarks = 850;
marksObtained = 680;
Precentage = (marksObtained * 100) / totalMarks
document.write("Total Marks = "+totalMarks+"<br>"+"Obtained Marks = "+marksObtained+"<br>"+"Precentage= " + Precentage)

// ======== Task 9 =======
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
var usd,sr,tot;
usd=10
sr=25
usd=104.80*usd
sr=28*sr
tot=usd+sr
document.write("Total currency is PKR:"+ tot)

// ======== Task 10 =======
var a=12;
a=a+5*10/2
document.write(a)

// ======== Task 11 =======
var cy,by,age;
cy=2020
by=2000
age=cy-by
document.write("The age is:"+age)

// ======== Task 12 =======
var radius=20;
// Circumference of a circle = 2 π r , π = 3.142
var circ=2*3.142*radius;
// Area of a circle = π r2, π = 3.142
var area=3.142*(radius*radius)
document.write("Radius:"+radius+'<br>'+"Circumference:"+circ+'<br>'+"Area:"+area)

// ======== Task 13 =======
var fs="lays"
var ca=15
var ea=65
var spd=3
var tot=ea-ca
var need=tot*spd
document.write("You will need " + need + " to last you until the ripe old age of " + ea)

// ******* Chapter 6-9 ******
======== Task 1 =======
var a=10
document.write("a = "+a+"<br>")
document.write("The value of ++a is "+ ++a +"<br>")
document.write("The value of a is "+a+"<br>")
document.write("The value of a++ is "+ a++ +"<br>")
document.write("The value of a is "+a+"<br>")
document.write("The value of --a is "+ --a +"<br>")
document.write("The value of a is "+a+"<br>")
document.write("The value of a-- is "+ a-- +"<br>")
document.write("The value of a is "+a+"<br>")

// ======== Task 2 =======
var a = 2
var b = 1
document.write("--a:"+ --a +"<br>"); 
document.write("--a - --b:"+ (--a - --b) +"<br>"); 
document.write("--a - --b + ++b :"+ (--a - --b + ++b) +"<br>"); 
document.write("--a - --b + ++b + b-- :"+ (--a - --b + ++b + b--) +"<br>"); 

// ======== Task 3 =======
var a = prompt("write your name")
document.write("welcome to show "+ a) 

// ======== Task 4 =======
var a = prompt("write your number");
if (a == ""){
    for (i = 1; i <= 10; i++) {
        document.write(5 + "x" + i + "=" + i * 5, '<br>')
    }

}
else {
    for (i = 1; i <= 10; i++) {
        document.write(a + "x" + i + "=" + i * a, '<br>')
    }

}

// ======== Task 5 =======
var english, maths, urdu, total
english = 70
maths = 50
urdu = 89
total = english+maths+urdu
urduPer= urdu*100/100
englishPer= english*100/100
mathsPer= maths*100/100
totalPer=total*100/300

document.write("<table>")
document.write (" <tr>");
document.write (" <th>Subject");
document.write (" <th>Marks obtained");
document.write (" <th>TotalMarks");
document.write (" <th>Percentage");
document.write (" </tr>");

document.write (" <tr>");
document.write (" <td>English</td>");
document.write (" <td>"+english+"</td>");
document.write (" <td> 100 </td>");
document.write (" <td>"+englishPer+"%"+"</td>");
document.write (" </tr>");

document.write (" <tr>");
document.write (" <td>Maths</td>");
document.write (" <td>"+maths+"</td>");
document.write (" <td> 100 </td>");
document.write (" <td>"+mathsPer+"%"+"</td>");
document.write (" </tr>");

document.write (" <tr>");
document.write (" <td>urdu</td>");
document.write (" <td>"+urdu+"</td>");
document.write (" <td> 100 </td>");
document.write (" <td>"+urduPer+"%"+"</td>");
document.write (" </tr>");

document.write (" <tr>");
document.write (" <td>Total</td>");
document.write (" <td>"+total+"</td>");
document.write (" <td> 300 </td>");
document.write (" <td>"+totalPer.toFixed(2) +"%"+"</td>");
document.write (" </tr>");
document.write("</table>")

// ************** Chapter 9-11 ***********
// ====== Task 1 =====
var city=prompt("enter city name")
if (city=="karachi"){
    document.write("Welcome to city of lights")
}
else{
    // pass
}

// ====== Task 2 =====
var gender=prompt("Enter Gender");
if (gender=="male"){
    document.write("Good Morning Sir")
}

else if (gender=="female"){
    document.write("Good Morning Ma'am")
}

// ====== Task 3 =====
var color=prompt("enter color")
if (color=="red"){
    document.write("Must Stop!!")
}
else if(color=="yellow"){
    document.write("ready to move")
}
else{
    document.write("go !!")
}

// ====== Task 3 =====
var fuel=prompt("fuel remaining")
if (fuel<=0.25){
    document.write("Please refill the fuel !")
}

// ====== Task 4 =====
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ====== Task 4 =====
var sub1,sub2,sub3,total,percentage,remarks,grade
sub1=+prompt("enter marks of subject 1")
sub2=+prompt("enter marks of subject 2")
sub3=+prompt("enter marks of subject 3")
total=+prompt("enter total marks of all subjects")
tot=(sub1+sub2+sub3)
percentage=tot*100/total
if (percentage>=80){
    grade="A+"
    remarks="Excellent"
}
else if(percentage>=70){
    grade="A"
    remarks="Satisfactory"
}
else if(percentage>=60){
    grade="B"
    remarks="need to improve"
}
else if(percentage<60){
    grade="Fail"
    remarks="Failed"
}
document.write("Total Marks :"+total+'<br>')
document.write("Obtained Marks :"+tot+'<br>')
document.write("Percentage :"+percentage+"%"+'<br>')
document.write("Grade :"+grade+'<br>')
document.write("Remarks :"+remarks+'<br>')

// ====== Task 5 =====
number=5
while (true){
    var guess = +prompt("enter number")
    if(guess==number){
        document.write("Bingo! correct")
        break
    }
    else if(guess<number){
        alert("increase number")
    }
    else{
        alert("decrese number")
    }

}

// ====== Task 6 =====
var num=+prompt("enter number")
if (num%3==0){
    document.write("Number is Divisible by 3")
}
else{
    document.write("number is not divisible by 3")
}

// ====== Task 8 =====
var num=+prompt("enter number")
if (num%2==0){
    document.write("Number is even")
}
else{
    document.write("number is odd")
}

// ====== Task 10 =====
var t=+prompt("enter temprature")

if (t>40){
    document.write("It is too hot outside.")
}
else if(t>30){
    document.write("The Weather today is Normal.")
}
else if(t>20){
    document.write("Today’s Weather is cool.")
}
else if(t>10){
    document.write("OMG! Today’s weather is so Cool.")
}

// ====== Task 11 =====
var num1=+prompt("enter number")
var num2=+prompt("enter number")
var op=prompt("enter operator")
if (op=="+"){
    document.write(num1+num2)
}
else if(op=="-"){
    document.write(num1-num2)
}
else if(op=="*"){
    document.write(num1*num2)
}
else if(op=="/"){
    document.write(num1/num2)
}
else if(op=="%"){
    document.write(num1%num2)
}

// ********* Chapter 12-13 *********
// ========= Task 1 ========
var charCode = prompt("enter alphabet to check").charCodeAt(0);
if (charCode>=65 && charCode<=90){
    document.write("Capital Alphabet");
}
else{
    document.write("Small alphabet")
}

// ========= Task 2 ========
var a=+prompt("integer 1")
var b=+prompt("integer 2")
if (a<b){
    document.write("Second integer is greater")
}
else if(a>b){
    document.write("First integer is greater")
}
else{
    document.write("Same numbers")
}

// ========= Task 3 ========
var num=+prompt("enter number")
if (num<0){
    document.write("negative number")
}
else if(num>0){
    document.write("positive number")
}
else{
    document.write("niether negative nor positive")
}

// ========= Task 4 ========
var a='u'
var v=['a','e','i','o','u']
if (a in v){
    document.write("a vowel")
}
else{
    document.write("not a vowel")
}

// ========== Task 5 =========
var password="mansoor"
var try1=prompt("Enter Password")
if (password==try1){
    document.write("Correct! The password you entered matches the original password")
}
else{
    document.write("Incorrect password")
}

// ========== Task 6 =========
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

// ========== Task 7 =========
time = 1900
if (time>=0000 && time<1200){
    document.write("good morning !")
}
else if(time>=1200 && time<1700){
    document.write("good afternoon")
}
else if(time >=1700 && time<2100){
    document.write("good evening")
}
else if (time>=2100 && time<=2359){
    document.write("good night")
}
else{
    // pass
}

// ************ CHpater 14-16 **********
// ============ Task1 ===========
var arrayA = []
var arrayB = new Array()

// ============ Task2 ===========
var objectA = {}
var objectB = new Object()

// ============ Task3 ===========
var arr=[]
arr.push('there','is','a','cat')
console.log(arr)

// ============ Task4 ===========
var arr=[]
arr.push(1,2,3,4,5)
console.log(arr)

// ============ Task5 ===========
var arr=[]
arr.push(true,false)
console.log(arr)

// ============ Task6 ===========
var arr=[]
arr.push("i",1,true)
console.log(arr)

// ============ Task7 ===========
var arr=['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
for (i=0;i<=arr.length;i++){
    document.write(arr[i]+'<br>')
}

// ============ Task8 ===========
var std = ['michel', 'john', 'tony']
var marks = [320, 230, 480]
for (i = 0; i <= std.length-1; i++) {
    var precentage = marks[i] * 100 / 500
    document.write("score of " + std[i] + " is " + marks[i] + " & precentage is :" + precentage + "%" + '<br>')
}

// ============ Task 9 ===========
var color=['red','yellow','blue','green']
var add = prompt("what color you want to add in beginning of array")
color.unshift(add)
document.write(color+'<br>')
var add = prompt("what color you want to add in end of array")
color.push(add)
document.write(color+'<br>')
color.unshift("orange")
color.unshift("indigo")
document.write(color+'<br>')
color.shift()
document.write(color+'<br>')
color.pop()
document.write(color+'<br>')
var col=prompt("color you want to add")
var pos=prompt("desired position")
color.splice(pos,col)
document.write(color+'<br>')

// ============ Task 10 ===========
var points=[9,8,7,6,5,4,3]
document.write(points.sort())

// ============ Task 11 ===========
var cities=['karchi','lahore','quetta','islamabad','peshawar']
var selectedCity=cities.slice(2,4)
document.write(selectedCity)

// ============ Task 12 ===========
var arr = ["This","is","my","cat"]
document.write(arr.join(' '))

// ============ Task 13 ===========
var arr=['keyboard','mouse','printer','monitor']
for (i=0; i<=arr.length-1 ; i++){
    document.write(arr[i]+'<br>')
}

// // ============ Task 14 ===========
var arr=['keyboard','mouse','printer','monitor']
arr = arr.reverse()
for (i=0; i<=arr.length-1 ; i++){
    document.write(arr[i]+'<br>')
}
// ============ Task 15 ===========
var brands = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']

document.write("<select> ")
for (i = 0; i <= brands.length; i++) {
    document.write("<option>" + brands[i] + "</option>")
}
document.write("</select>")

// ********** Chapter 17-20 **********
// ========== Task 1 ============
console.log([[], [], []])

// ========== Task 2 ============
console.log([[1,2,3], [4,5,6], [7,8,9]])

// ========== Task 3 =========
for (i = 1; i <= 10; i++){
    document.write(i+"<br>")
}

// ========== Task 4 =========
var no=+prompt("enter table number")
var len=+prompt("enter length")
for(i=1;i<=len;i++){
    document.write(no+"x"+i+"="+i*no+"<br>")
}

// ========== Task 5=========
fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
for (i=0;i<=fruits.length-1;i++){
    document.write("Elemnet at index "+i+" is "+fruits[i]+'<br>')
}

// ========== Task 6 =========
for (i = 0; i <= 10; i++) {
    document.write(i+" ")
}
document.write('<br>')
for (i=10 ; i>=0; i--) {
    document.write(i+" ")
}
document.write('<br>')
for (i = 0; i <= 20; i=i+2) {
    document.write(i+" ")
}
document.write('<br>')
for (i = 1; i <= 19; i=i+3) {
    document.write(i+" ")
}
document.write('<br>')
for (i = 2; i <= 20; i=i+2) {
    document.write(i+"k ")
}

// ========== Task 7 =========
var inp=prompt("enter item to be searched")
var A=['cake', 'apple pie', 'cookie', 'chips', 'patties']
var cond=false
for (i=0;i<=A.length;i++){
    if (inp===A[i]){
        cond=true
    }
}
if (cond===true){
    alert("item matched")
}
else{
    alert("item not matched")
}

// ========== Task 8 =========
var A = [24, 53, 78, 91, 12]
flag=A[0]
for (i=0; i<=A.length; i++){
    if (A[i] < A[i+1]) {
        flag=A[i+1]        
    }
    else{
        alert(flag +" is maximum number")
        break
    }
} 

// ========== Task 9 =========
for (i = 5; i <= 100; i=i+5){
    document.write(i+" ")
}
// ========== Chapter 21-25 ========
// ========== task1 =============
var firstname=prompt("enter first name")
var lastname=prompt("enter last name")
var fullName=firstname+lastname
alert(fullName)

// ========== Task 2 =============
var phone=prompt("enter phone")
alert("Length of string :"+phone.length)

// ========== Task 3 =============
var str=prompt("enter string")
for (i = 0; i <= str.length; i++){
       if (str[i]==='n') {
           alert('index of n is :' + i)           
       }
}


string reverse-->// //var split = str.split("").reverse().join("")

// ========== Task 4 =============
var str = "Hello World"
var str = str.split("").reverse().join("")
for (i = 0; i <= str.length; i++) {
    if (str[i] == 'l') {
        var total=str.length-i-1
        alert('index of last l is :' + total)
        break
    }
}

// ========== Task 5 ============
var str='Pakistani';
alert(str[3]);

//========== TAsk 6 ============
var firstname=prompt("enter first name")
var lastname=prompt("enter last name")
alert(firstname.concat(lastname))

// =========== Task 7 ===========
var city ="Hyderabad"
alert(city.replace('Hyder','Islam'))

// =======  Task 8 ==========
var text = "Ali and Sami are best friends. They play cricket and football together."
var text=text.split(" ")

for (var i = 0; i < text.length; i++) {
    if (text[i] == "and"){
        text[i]="&"
    }
}
console.log(text)

// =============Task 9===============
var value='472'
document.write("value :"+value+"<br>")
document.write("type :"+typeof(value)+"<br>")
value=Number(value)
document.write("value :"+value+"<br>")
document.write("type :"+typeof(value)+"<br>")

//========== Task 10 ============
var inp=prompt("input")
alert(inp.toUpperCase())

// =========== Task 11 ===========
var inp=prompt("input")
var f=inp.slice(0,1)
f=(f.toUpperCase())
alert(inp.replace('j',f))

// ========= Task 12 ==========
var num=35.36
num=String(num)
alert(num.replace(".",""))

//======== Task 13 ==========
var userName = prompt("entere username");
var userName = userName.split("")
for (let i = 0; i < userName.length; i++) {
    if (userName[i]=="@" || userName[i]=="!" || userName[i]=="." || userName[i]==",") {
        var flag=false
    }
}
if (flag===false){
    alert("enter valid username")
}
else{
    alert("ok fine")
}

========== Task 14 ============
var input = prompt("enter item name");
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
input = input.toLocaleLowerCase()
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
        var flag=false
    }
}
if (flag === false) {
    alert(input + " found in bakery")
}
else {
    alert(input + " not found in bakery")
}  

========== Task 15 ============
var pass = prompt("enter password")
pass = pass.split("")
if (pass.length < 6) {
    alert("enter valid password")
}
else if (pass[0] == Number) {
    alert("enter valid password")
}
for (let i = 0; i < pass.length; i++) {
    if (pass[i] == '!' || pass[i] == '@' || pass[i] == '#' || pass[i] == '$' || pass[i] == '%' || pass[i] == '^' || pass[i] == '&' || pass[i] == '*' || pass[i] == '(' || pass[i] == ')')
        alert("invalid password")
}

// ========== Task 16 ============
var university = "University of Karachi";
university=university.split("")
for (let i = 0; i < university.length; i++) {
    document.write(university[i]+"<br>")
}

// ========== Task 17 ============
var name="Paksitan"
var arr=[]
name=name.split("")
for (let i = 0; i < name.length; i++) {
    arr.push(name[i])
}
arr=arr.reverse()
alert("Last index value is "+arr[0])

// ========== Task 18 ============
var text = "The quick brown fox jumps over the lazy dog"
text=text.toLowerCase()
var text=text.split(" ")
var count=0
for (var i = 0; i < text.length; i++) {
    if (text[i] == "the"){
        count++
    }
}
document.write("There are "+count+" occurances of word 'the'")

// ========== Chapter 26-30 ============
//=========== Task 1 =========
var num=+prompt("enter number")
document.write(num+'<br>')
document.write(Math.round (num)+'<br>')
document.write(Math.floor(num)+'<br>')
document.write(Math.ceil(num)+'<br>')

// ============ Task 2 ===========
var num=+prompt("enter number")
document.write(num+'<br>')
document.write(Math.round (num)+'<br>')
document.write(Math.floor(num)+'<br>')
document.write(Math.ceil(num)+'<br>')

// ============ Task 3 ===========
var num = +prompt("enter number")
alert(Math.abs(num))

// ============ Task 4 ===========
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random Dice Values: "+numberOfStars)

// ============ Task 5 ===========
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
if (numberOfStars == 1) {
    alert("Head")    
}
else{
    alert("Tail")
}

// ============ Task 6 ============
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);
alert("random number between "+numberOfStars)

// ============ Task 7 ============
var input=prompt("enter weight")
document.write(JSON.parse(input))

// ============ Task 8 ============
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var secret = Math.floor(improvedNum);
var inp=+prompt("enter number");
if (inp==secret){
    alert("Congratulations !")
}
else{
    alert("Better Luck next time")
}

// ========== Chapter 26-30 ============
//=========== Task 1 =========
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
alert(n)

//=========== Task 2 =========
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
alert(n)

//=========== Task 3 =========
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
if(n=="Saturday"||n=="Sunday"){
    alert("it's Fun Day!")
}

//=========== Task 5 =========
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd
if (today<16){
    alert("First fifteen days")
}
else{
    alert("Last fifteen days")
}

//=========== Task 6 =========
var today = new Date();
var miliseconds = new Date().getTime();
var minute = new Date().getTime() / 60000;
document.write("Current Date :"+today+'<br>')
document.write("MiliSeconds :"+miliseconds+'<br>')
document.write("Minutes :"+minute+'<br>')

// ========== Task 7 ==========
var hours = new Date().getHours();
if (hours<=12) {
    alert("it is am")
}
else{
    alert("it is pm")
}

// =========== Task 8 ===========
var d = new Date('Dec 31, 2020 00:00:00');
d.setDate(31);
alert(d)

// ============ Task 9 ==============
var dateFirst = new Date("11/25/2019"); //suppose ramazan ths year
var dateSecond = new Date("6/20/2020"); //current date
var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
document.write(diffDays);

=============== Task 10 ============
var date1=new Date("Jan 01 2015 11:12:15")
var date2=new Date()
var timeDiff=date2.getTime()-date1.getTime()
console.log(timeDiff/1000+" seconds")

================= Task 11 ================
============ Task1 12 =============
var date=new Date('1920');
alert(date)

=========== Task 13 ================
var age=prompt("enter age")
var date=new Date();
alert(date.getFullYear()-age)

============= Task 14 ==============
var customerName = "ABC"
var currentMonth = 12
var numberOfUnits = 114
var charge = 16
var date = new Date()
var date = date.getDate()
var netAmount = numberOfUnits * charge
var lateCharge = 1000
var grossAmount = netAmount + lateCharge
if (date <= 15) {
    alert(netAmount)
}
else {
    alert(grossAmount)
}

============== Chapter 35-38 ===========
========== Task1 ==========
function date() {
    var d = new Date();
    alert(d)
}
date();
============ Task 2 ===========
function greet(fname,lname) {
    var fname=prompt("enter first name")
    var lname=prompt("enter last name")
    alert("Hello!"+fname+lname)    
}
greet()

// ============= Task 3 ===========
function sum() {

    var num1 = +prompt("enter 1st number")
    var num2 = +prompt("enter 2nd number")
    var total = num1+num2
    alert(total)
}
sum()

// ============= Task 4 ===========
function calculator(num1,num2,operator){
    if (operator=='+'){
        document.write(num1+num2)
    }        
    else if(operator=="-"){
        document.write(num1-num2)
    }
    else if(operator=="*"){
        document.write(num1*num2)
    }
    else if(operator=="/"){
        document.write(num1/num2)
    }
}
num1=prompt("enter number 1")
num2=prompt("enter number 1")
operator=prompt("enter operator")
calculator(num1,num2,operator)

// ============= Task 5 ===========
function square(n) {
    alert(n*n)    
}
n=+prompt("enter number")
square(n)

// ============= Task 6 ===========
function factorial(n) {
    var f = 1
    for (i = n; i >= 2; i--) {
        f=f*i
    }
    document.write(f)
}
factorial(4)

// ============= Task 7 ===========
var start = +prompt('enter start point')
var end = +prompt('enter ending point')
function count(start,end){
    for(i=start;i<=end;i++){
        document.write(i+'<br>')
    }
}
count(start,end)

// ============= Task 8 =============
function calculateHypotenuse(base,perp) {

    function square(n) {
        return (n * n)
    }
    hyp = Math.sqrt(square(base) + square(perp))
    alert(hyp)
}

calculateHypotenuse(2,2)

// ============= Task 9 ============
var a,w,h;
function area(w,h) {
    a=w*h
    return(a)
}
area(2,2)
w=+prompt("enter width")
h=+prompt("enter height")
area(w,h)
alert(a)

//=============== Task 10 ============
function pallindrome(word) {
    var w = word.split('')
    var wr = w.reverse()
    if (w == wr) {
        alert("word is pallindrome")
    }
    else {
        alert("word is not pallindrome")
    }
}
// Driver Code
var word = prompt("enter word")
pallindrome(word)

//================== Task 11 ==============
function caps(word) {
    var w = word.split(' ')
    for (let i = 0; i <= w.length - 1; i++) {
        var q = w[i]
        var e = q.split('')
        var r = (e[0].toUpperCase())
        document.write(r + q.slice(1) + " ")
    }
}
// // Driver Code
var word = prompt("enter sentence");
caps(word)

//================== Task 12 ==============
function longestWord() {
    var sent = prompt("Enter Sentence")
    var brkSent = sent.split(' ')
    for (let i = 0; i < brkSent.length - 1; i++) {
        if (brkSent[i].length < brkSent[i + 1].length) {
            var a = (brkSent[i + 1])
        }
        else {
            var a = brkSent[i]
        }
    }
    alert(a)
}
// Driver Code
longestWord()

//================== Task 13 ==============
function count(sent, word) {
    var count = 0
    for (let i = 0; i < sent.length; i++) {
        if (sent[i] == word) {
            count++
        }
    }
    document.write(count)
}
// //Driver Code
var sent = prompt("enter sentence")
var word = prompt("enter word to be searched")
count(sent,word)

//================== Task 14 ==============
// The Geometrizer
function calcCircumference(r) {
    var circ=2*3.142*r
    document.write(circ)
}

function calcArea(radius) {
    var area=3.142*radius*radius
    document.write(area)    
}
calcCircumference(1)
calcArea(1)

//====== chap 39-42======
// Task 1
function power(a,b){
    document.write(Math.pow(a,b))
}

// Task 2
function leap(year){
    if ((year+4)%4 == 0){
        alert("year is leap")
    }
    else{
        alert("year is not leap year")
    }
}
leap(2020)

// Task 3
function areaOfTriangle(a,b,c){
    var s = (a+b+c)/2
    var area = s*(s-a)*(s-b)*(s-c)
    alert(area)
}
areaOfTriangle(2,2,2)

// Task 4
var average,p
function main(mark1,mark2,mark3){
    avg(mark1,mark2,mark3)
    per(average)
    console.log(average)
    console.log(p)

}

function avg(mark1,mark2,mark3){
    average = (mark1+mark2+mark3)/3
    return(average)
}

function per(average){
    p = average*100
    return(p)
}

main(50,50,50)

// Task 5
function indexof(n,str){
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == n){
            alert(i)
        }

    }
}
indexof('s',"mansoor")

// Task 6
function delVow(str){
    alert(str.replace(/[aeiou]/gi, ''));
}
delVow("qwerty")

// Task 7
var str = "Pleases read this application and give me gratuity";
var count = 0;

for (let i = 0; i < str.length; i++) {
    var a = str[i]
    var b = str[i + 1]
    switch (a + b) {
        case "ea":
            count++
            break;
        case "ui":
            count++
            break;
    }
}
alert(count)

// task 8
var dist = +prompt("enter distance in KM")
function meter(dist){
    alert(dist*1000)
}
function cmeter(dist){
    alert(dist*100000)
}
function feet(dist){
    alert(dist*3281)
}
function inches(dist){
    alert(dist*39370)
}
inches(dist)

// Task 9
var cash = +prompt("enter cash amount");
var h = Math.floor(cash/100)
document.write("you need "+h+" hundered rupee notes")
h=h*100
cash=cash-h
var t = Math.floor(cash/50)
document.write(" "+t+" fifty rupee notes")
t=t*50
cash=cash-t
var u = Math.floor(cash/10)
document.write(" "+u+" ten rupee notes")

// ******* Chap 43 - 48 *******
// Task 2
function fun() {
    alert("Thanks for purchasing this phone from us")
}
// Task 3
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
function mouseaway(my_image){

    my_image.src = "C:\Users\Mansoor\Desktop\Chapter 1 to 67 (JS)\Chapter 1 to 67 (JS)\chapter52-57\images\others\1.jpg";

}
function rollover(my_image){

    my_image.src = 'C:\Users\Mansoor\Desktop\Chapter 1 to 67 (JS)\Chapter 1 to 67 (JS)\chapter52-57\images\others\2.jpg';

}
// Chapter 49-52
// Task 1
function signup(){
    var name= document.getElementById("name")
    var lname=document.getElementById("lname")
    var address=document.getElementById("add")
    var pn=document.getElementById("pn")
    document.write(name.value + "<br>" + lname.value + "<br>" + address.value + "<br>" + pn.value)
}
// Task 2
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// // Task 3
function submit() {
    var name = document.getElementById("name")
    var result = document.getElementById("result")
    var para = document.getElementById("para")
    result.value = name.value
    // document.write(name.value+"<button onclick='edit()'>edit</button><button onclick='del()'>Delete</button>")
}
function del() {
    var val = document.getElementById("result")
    result.value = " "

}
function addRow(tableID) {
    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name = "chkbox[]";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.innerHTML = rowCount + 1;

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    cell3.appendChild(element2);


}

function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    } catch (e) {
        alert(e);
    }
}

// Chapter 58-67
// // Task1 (all of tasks are done)

var a= document.getElementById('main-content')
console.log(a)
var b = document.getElementsByClassName('render')
console.log(b)
var fn = document.getElementById('first-name')
var ln = document.getElementById('last-name')
var em = document.getElementById('email')
fn.value="mansoor"
ln.value="ahmed"
em.value="mansoorahmedy2k@gmail.com"
var x = document.getElementById("form-content").nodeType;
console.log(x)
var your_div = document.getElementById('lastName');
var text_to_change = your_div.childNodes[0];
text_to_change.nodeValue = 'new text';
var cn = document.childNodes
console.log(cn[1])
