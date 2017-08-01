function personal() {
    var regperso = {
        name: " ",
        lastname: " ",
        id: " ",
        phone: " ",
        email: " "
    };
    regperso.name = prompt("Enter your name");
    regperso.lastname = prompt("Enter your lastname");
    regperso.id = prompt("Enter your id number");
    regperso.phone = prompt("Enter number of phone");
    regperso.email = prompt("Enter your mail");
    return regperso;
}

function family() {
    var regfamily = {
        name: " ",
        lastname: " ",
        id: " ",
        phone: " ",
        email: " "
    };
    regfamily.name = prompt("Enter nomber");
    regfamily.lastname = prompt("Enter lastname");
    regfamily.id = prompt("Enter id number");
    regfamily.phone = prompt("Enter number of phone");
    regfamily.email = proompt("Enter mail");
    return regfamily;
}

function refe_job() {
    var regjob = {
        name: " ",
        lastname: " ",
        id: " ",
        phone: " ",
        campany: " "
    };
    regjob.name = prompt("Enter nomber");
    regjob.lastname = prompt("Enter lastname");
    regjob.id = prompt("Enter id number");
    regjob.phone = prompt("Enter number of phone");
    regjob.email = proompt("Where do you work");
    return regjob;
}

function profile() {
    var regprofile = {
        ocupation: " ",
        titles: " ",
        experience: " "
    };
    regprofile.ocupation = prompt("prophecyor ocupation");
    regprofile.titles = prompt("obtained titles");
    regprofile.experience = prompt("years of work experience");
    return regprofile;
}

function print(regperso, regfamily, regjob, regprofile) {
    console.log(regperso);
    console.log("CV");
    console.log(" ");
    console.log("personal information");
    console.log("name: " + regperso.name);
    console.log("lastname: " + regperso.lastname);
    console.log("id number: " + regperso.id);
    console.log("number phone: " + regperso.phone);
}

//var prue;
function menu() {
    var op = parseInt(prompt("Menu:\n 1. Personal information\n 2. Family Reference\n 3. Reference job\n 4. professional profile\n 5. Print resume\n 0. Exit the program"));
    return op;
}