// Toggle language function
function toggleLanguage() {
    const isThai = document.getElementById("skillThai").style.display !== "none";
   
    // Toggle hero description
    document.getElementById("heroDescThai").style.display = isThai ? "none" : "block";
    document.getElementById("heroDescEn").style.display = isThai ? "block" : "none";
    
    // Toggle About section
    document.getElementById("aboutDescThai").style.display = isThai ? "none" : "block";
    document.getElementById("aboutDescEn").style.display = isThai ? "block" : "none";
    
    // Toggle Education section
    document.getElementById("VocEducationThai").style.display = isThai ? "none" : "block";
    document.getElementById("VocEducationEn").style.display = isThai ? "block" : "none";
    document.getElementById("HighEducationThai").style.display = isThai ? "none" : "block";
    document.getElementById("HighEducationEn").style.display = isThai ? "block" : "none";
    
    // Toggle Work section
    document.getElementById("workThai").style.display = isThai ? "none" : "block";
    document.getElementById("workEn").style.display = isThai ? "block" : "none";

    // Toggle Skill section
    document.getElementById("skillThai").style.display = isThai ? "none" : "flex";
    document.getElementById("skillEn").style.display = isThai ? "flex" : "none";
}
