var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var modelBox = document.getElementById("test");
var warBox = document.getElementById("war");
var closeBtnwar = document.getElementById("closeElwar");
var closeBtn = document.getElementById("closeEl");
var siteGroup = [];

if (localStorage.getItem("siteList") != null) {
    siteGroup = JSON.parse(localStorage.getItem("siteList"));
    displaySiteTable();
}
// ################### ADDING SITE #################
function addSite() {
    var siteCollection = {
        name: siteName.value,
        url: siteUrl.value
    }

    if (siteNameRegex() == true && urlSiteRegex() == true) {
        if (searchName() != true) {
            siteGroup.push(siteCollection);
            localStorage.setItem("siteList", JSON.stringify(siteGroup));
            displaySiteTable()
            clearForm();
        }
        else{
            document.getElementById('war').style.display = "flex";
            clearForm();
        }

    }
    else {
        document.getElementById('test').style.display = "flex"
    }


}
// ################### DISPLAY IT INTO TABLE #################
function displaySiteTable() {
    var temp = ``
    for (var count = 0; count < siteGroup.length; count++) {

        temp += ` <tr>
        <td>`+ (count + 1) + `</td>
        <td>`+ siteGroup[count].name + `</td>
        <td> <button onclick="window.open('${siteGroup[count].url}')"   class="btn btn-warning">Visit</button></td>
        <td><button onclick="deleteSites(`+ count + `)" class="btn btn-danger">Delete</button></td></tr>`
    }
    document.getElementById('demo').innerHTML = temp
}
// ################### CLEAR FORM AFTER ADDING   #################
function clearForm() {
    siteName.value = ""
    siteUrl.value = ""

}
// ################### DELETE FROM TABLE SITE #################
function deleteSites(index) {
    siteGroup.splice(index, 1)
    localStorage.setItem("siteList", JSON.stringify(siteGroup));
    displaySiteTable();

}
// ################### REGULAR EXPIRATION FUNCTION  #################
siteName.addEventListener("blur", siteNameRegex)

function siteNameRegex() {
    var regex = /^[a-z A-Z 0-9]{3,}$/gm;
    if (regex.test(siteName.value) == true) {
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        return true;

    }
    else {
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        return false;

    }


}
siteUrl.addEventListener("blur", urlSiteRegex)
function urlSiteRegex() {
    var regex = /(https:\/\/)(?:www\.)?[a-z A-Z ]{0,}(.com)?/gm;
    if (regex.test(siteUrl.value) == true) {
        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")
        return true;

    }
    else {
        siteUrl.classList.add("is-invalid")
        siteUrl.classList.remove("is-valid")
        return false;

    }

}
// ################### CLOSE BUTTON  #################

closeBtn.addEventListener("click", closePhoto)
function closePhoto() {

    modelBox.style.display = "none";
  
}


closeBtnwar.addEventListener("click", closePhotoWar)
function closePhotoWar() {

    warBox.style.display = "none";
  
}

// ################### SEARCH THE SAME NAME   #################

function searchName() {

    var site = siteName.value;
    for (var count = 0; count < siteGroup.length; count++) {
        if (siteGroup[count].name.includes(site) == true) {
            console.log(siteGroup[count].name.includes(site))
           
            return true
        }
        else {
            return false
        }
    }

}