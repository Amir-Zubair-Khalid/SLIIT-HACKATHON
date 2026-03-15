
var TR1C1 = ""
var TR1C2 = ""
var TR1C3 = ""
var TR1C4 = ""

var TR2C1 = ""
var TR2C2 = ""
var TR2C3 = ""
var TR2C4 = ""

var TR3C1 = ""
var TR3C2 = ""
var TR3C3 = ""
var TR3C4 = ""

var TR4C1 = ""
var TR4C2 = ""
var TR4C3 = ""
var TR4C4 = ""


function Compare() {
    console.log("submition recived");

    document.getElementById("1.1").textContent = "--"
    document.getElementById("1.2").textContent = "--"
    document.getElementById("1.3").textContent = "--"
    document.getElementById("1.4").textContent = "--"

    document.getElementById("2.1").textContent = "--"
    document.getElementById("2.2").textContent = "--"
    document.getElementById("2.3").textContent = "--"
    document.getElementById("2.4").textContent = "--"

    document.getElementById("3.1").textContent = "--"
    document.getElementById("3.2").textContent = "--"
    document.getElementById("3.3").textContent = "--"
    document.getElementById("3.4").textContent = "--"

    document.getElementById("4.1").textContent = "--"
    document.getElementById("4.2").textContent = "--"
    document.getElementById("4.3").textContent = "--"
    document.getElementById("4.4").textContent = "--"

    const TableV1 = document.getElementById("TimeComparerV1").value
    const TableV2 = document.getElementById("TimeComparerV2").value

    if (TableV1 == "1.1" && TableV2 == "1.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Foundation of Fluency: A503"
        document.getElementById("3.1").textContent = "Foundation of Fluency: F503"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "AI Foundation: A412"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        document.getElementById("4.3").textContent = "Free Period"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("2.4").textContent = "Future Stack"
        document.getElementById("3.4").textContent = "Free period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"
    }
    else if (TableV1 == "1.1" && TableV2 == "1.2") {
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Foundation of Fluency: A503"
        document.getElementById("3.1").textContent = "Foundation of Fluency: F503"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("2.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("3.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        document.getElementById("4.3").textContent = "Free Period"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"
    }
    else if (TableV1 == "1.1" && TableV2 == "2.1") {
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
    
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"
   
    }
    else if (TableV1 == "1.1" && TableV2 == "2.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
    
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"

    }
    else if (TableV1 == "1.1" && TableV2 == "3.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"

    }
    else if (TableV1 == "1.1" && TableV2 == "3.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"        

    }
    else if (TableV1 == "1.2" && TableV2 == "1.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Foundation of Fluency: A503"
        document.getElementById("3.1").textContent = "Foundation of Fluency: F503"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
        
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        document.getElementById("4.2").textContent = "Free Period"
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"        

    }
    else if (TableV1 == "1.2" && TableV2 == "1.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Foundation of Fluency: A503"
        document.getElementById("3.1").textContent = "Foundation of Fluency: F503"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
        
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("4.2").textContent = "AI Foundation: A412"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        document.getElementById("4.2").textContent = "Free Period"
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("3.4").textContent = "Future Stack: G1304"
        document.getElementById("4.4").textContent = "Essential Maths: G1402" 
        
    }
    else if (TableV1 == "1.2" && TableV2 == "2.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: F503"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
        
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402" 

    }
    else if (TableV1 == "1.2" && TableV2 == "2.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "1.2" && TableV2 == "2.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "1.2" && TableV2 == "3.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401"        

        document.getElementById("4.4").textContent = "Essential Maths: G1402" 
    }
    else if (TableV1 == "2.1" && TableV2 == "1.1"){
        
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"  

    }
    else if (TableV1 == "2.1" && TableV2 == "1.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"  

    }
    else if (TableV1 == "2.1" && TableV2 == "2.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
        
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "AI Foundation: G1303"
        document.getElementById("4.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("2.4").textContent = "Future Stack: B402"
        document.getElementById("3.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"          

    }
    else if (TableV1 == "2.1" && TableV2 == "2.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"          

    }
    else if (TableV1 == "2.1" && TableV2 == "3.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
        
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"          
        
    }
    else if (TableV1 == "2.1" && TableV2 == "3.2"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"
        
        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"   

    }
    else if (TableV1 == "2.2" && TableV2 == "1.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"   

    }
    else if (TableV1 == "2.2" && TableV2 == "1.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"   

    }
    else if (TableV1 == "2.2" && TableV2 == "2.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"
        
        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("4.4").textContent = "Essential Maths: G1402" 

    }
    else if (TableV1 == "2.2" && TableV2 == "2.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundation of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"
        document.getElementById("4.2").textContent = "AI Foundation: B402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"

        document.getElementById("1.4").textContent = "Free Period"
        document.getElementById("2.4").textContent = "Free Period"
        document.getElementById("3.4").textContent = "Future Stack: F304"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"         
    }
    else if (TableV1 == "2.2" && TableV2 == "3.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"         
        
    }
    else if (TableV1 == "2.2" && TableV2 == "3.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period" 
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundation of Fluency: G1401"

        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "3.1" && TableV2 == "1.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 

        document.getElementById("4.4").textContent = "Essential Maths: G1402"         


    }
    else if (TableV1 == "3.1" && TableV2 == "1.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("4.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 

        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "3.1" && TableV2 == "2.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("4.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"        

        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "3.1" && TableV2 == "2.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"        

        document.getElementById("4.4").textContent = "Essential Maths: G1402" 

    }
    else if (TableV1 == "3.1" && TableV2 == "3.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundations of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"
        document.getElementById("4.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"

        document.getElementById("1.4").textContent = "AI Foundations: F304"
        document.getElementById("2.4").textContent = "Free Period"
        document.getElementById("3.4").textContent = "Future Stack: G1302"
        document.getElementById("4.4").textContent = "Essential Maths: G1402" 

    }
    else if (TableV1 == "3.1" && TableV2 == "3.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundations of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"
        document.getElementById("4.2").textContent = "Free Period"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"         


    }
    else if (TableV1 == "3.2" && TableV2 == "1.1"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 

        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "3.2" && TableV2 == "1.2"){
        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 

        document.getElementById("4.4").textContent = "Essential Maths: G1402"         

    }
    else if (TableV1 == "3.2" && TableV2 == "2.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundations of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402"                 

    }
    else if (TableV1 == "3.2" && TableV2 == "2.2"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundations of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        
        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"
        
        document.getElementById("4.4").textContent = "Essential Maths: G1402" 

    }
    else if (TableV1 == "3.2" && TableV2 == "3.1"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundations of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"
        document.getElementById("4.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"

        document.getElementById("4.4").textContent = "Essential Maths: G1402" 

    }
    else if (TableV1 == "3.2" && TableV2 == "3.2"){

        document.getElementById("1.1").textContent = "Free Period"
        document.getElementById("2.1").textContent = "Free Period"
        document.getElementById("3.1").textContent = "Foundations of Fluency: B502"
        document.getElementById("4.1").textContent = "Future Stack: G1402"

        document.getElementById("1.2").textContent = "Industry Guest Lecture: G1402"
        document.getElementById("2.2").textContent = "AI Foundation: G1402"
        document.getElementById("3.2").textContent = "Free Period"
        document.getElementById("4.2").textContent = "Free Period"

        document.getElementById("1.3").textContent = "Essential Maths: G1401"
        document.getElementById("2.3").textContent = "Essential Maths: G1401"
        document.getElementById("3.3").textContent = "Essential Maths: G1401" 
        document.getElementById("4.3").textContent = "Foundations of Fluency: G1401"

        document.getElementById("1.4").textContent = "Future Stack: G1302"
        document.getElementById("2.4").textContent = "AI Foundation: A412"
        document.getElementById("4.4").textContent = "Essential Maths: G1402"


    }

}  

