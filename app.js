const myInfo =  [
    {name: 'Overhead Door Company of The Southland™', street: '124 N. Madison Ave', city: 'Monrovia,', state: 'CA', loczip: '91016', phone: "212-999-5555", zips: [90210, 91016, 75338, 70210]},
    {name: 'Overhead Door Company of Denver™', street: '3291 Peoria Street', city: 'Aurora, ', state: 'CO', loczip: '80010',  phone: "303-366-4300", zips: [85111, 80010, 85338, 80210]},
    {name: 'Overhead Door Company of La Basin™', street: '8768 Hellman Ave', city: 'Rancho Cucamonga ', state: 'CA', loczip: '91730',  phone: "469-999-5555", zips: [95111, 91730, 95338, 90210]},
    {name: 'Overhead Door Company of Central Missouri™', street: '1313 Grand Ave', city: 'Columbia, ', state: 'MO', loczip: '65201',  phone: "505-999-5555", zips: [65111, 65222, 65338, 60210]},
    {name: 'Overhead Door Company of Louisville™', street: '1328 West Jefferson Street', city: 'Louisville, ', state: 'KY', loczip: '40203',  phone: "602-999-5555", zips: [90215, 45222, 45338, 40210]}  
   ]
 
 var input = document.getElementById("myZipCode");
 input.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
     event.preventDefault();
     document.getElementById("myBtn").click();
   }
 });
 
 
 function searchForDealer(findZipCode){
   findZipCode = parseInt(findZipCode)  //must convert string to integer
   
   let thisZipCode = myInfo.filter((item) => {
      if (item.zips.includes(findZipCode))
           { return true  } 
      else { return false }
    });
  
   
 var results = thisZipCode.map(function (item) {
    return  "<strong>" + item.name  + "</strong>"  +   "<br />" + 
      item.street + "<br />" +
      item.city  + " " + item.state + " " + item.loczip +  "<br />" + 
      "<a href='tel:'" + item.phone + ">" + item.phone +   "</a>" + "<br />";
   });
     console.log(results.length);
    if (results.length < 1) {
      console.log("sorry - nothing returned");
      document.getElementById("nothing").innerHTML = "Sorry, we cannot help you"
    }
   else{
     var showResults = results.length;
     console.log(showResults);
      document.getElementById("nothing").innerHTML = showResults + " records found"
   }
   
   
   document.getElementById("searchResults").innerHTML = results.join("<br />");
 
 }
 
 