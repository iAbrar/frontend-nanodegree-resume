/*
This is empty on purpose! Your code to build the resume will go here.
 */
// function to international name
function nameChanger(oldName) {
    var finalName = oldName;
    var name = oldName.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");
    return finalName;
}
//Bio information
var bio = {
    "name": "Abrar Nasser",
    "role": "Web Developer",
    "contacts": {
    "mobile": "9665000000000",
    "email": "Abrar.Nasser@an.com",
    "github": "iAbrar",
    "location": "Riyadh,SA"
    },
    "welcomeMessage": "Hello World!",
    "skills": ["Designing", "Programming", "Sleeping","Coding","Painting"],
    "biopic": "images/me.jpg"
}; //End bio

function displayHeader() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", nameChanger(bio.name)));
    $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) { //check if there any skils
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i <= bio.skills.length - 1; i++) {
            $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
        } //end for skills loop
    } // End if
} //End displayHeader function

displayHeader();

//Work Experience

var work= {
            'jobs':[
            {
                'employer': 'IT co',
                 'title': 'Web Developer',
                 'location': 'Jeddah,SA',
                 'dates': 'April 2016 - current',
                 'description': 'Develop company websites. '
            },
            {
                 'employer': 'SAP',
                 'title': 'intern',
                 'location': 'Khobar,SA',
                 'dates': 'April 2015 - May 2015',
                 'description': 'It is a 3 months interns program focused on up-skilling graduated across the MENA region. Contains component in order to up-skill graduates with SAP certifications and functional tracks.'
              }
               ]//end jobs
};//end work experience

function displayWorkExperience()
{

if (work.jobs.length > 0) { //check if there any jobs

        for (var i = 0; i <= work.jobs.length - 1; i++) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer)+HTMLworkTitle.replace('%data%', work.jobs[i].title));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));

        } //end for jobs loop
    } // End if
}// end displayWorkExperience

displayWorkExperience();

//Projects information
var projects= [
                {
                  'title': 'Website' ,
                  'dates': '2015',
                  'description': 'Web based Application for school.',
                  'images': ['images/fry.jpg','images/fry.jpg']

              }
            ];//end projects

function displayProjects(){

     $('#projects').append(HTMLprojectStart);

        for (var i = 0; i <= projects.length - 1; i++) {

            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects[i].title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects[i].dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects[i].description));

            for (var j = 0; j < projects[i].images.length; j++) {
               $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects[i].images[j]));
            }//end images loop

        } //end for projects loop

}// end displayProjects

displayProjects();

//Education information
var education ={
            'schools': [
            {
                 'name': 'MIT',
                 'location': 'MA, USA',
                 'degree': 'Master',
                 'majors': ['IT'],
                 'dates': '2017'
             },
            {
                 'name': 'King Saud University',
                 'location': 'Riyadh, SA',
                 'degree': 'BA',
                 'majors': ['CS','SWE'],
                 'dates': '2014'
             }
             ],//end schools

            'onlineCourses':[
            {
                 'title': 'Front-end development nano-degree',
                 'school': 'Udacity',
                 'dates': '2017',
                 'url': 'http://udacity.com'
             },
             {
                 'title': 'Learn how to Learn',
                 'school': 'Coursera',
                 'dates': '2016',
                 'url': 'http://coursera.com'
             }
             ]//end Online courses
};//end education

function displayEducation(){

//$('#education').append(HTMLschoolStart);
if (education.schools.length>0){
        for (var i = 0; i <= education.schools.length - 1; i++) {
            $("#education").append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[i].name)+HTMLschoolDegree.replace('%data%', education.schools[i].degree));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors));


        }//end schools loop
}//end if
 if (education.onlineCourses.length >0){
                $("#education").append(HTMLonlineClasses);
        for (var j = 0; j <= education.onlineCourses.length - 1; j++) {
            $("#education").append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title)+HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school));
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates));
            $('.education-entry:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[j].url));

        }//end online courses loop
    }//end if
}//end displayEducation

displayEducation();

//Adding map