/*
This is empty on purpose! Your code to build the resume will go here.
 */
// function to international name
function inName(oldName) {
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
    "welcomeMessage": "Hello There!",
    "skills": ["HTML5", "CSS3", "jQuery", "PHP", "MySQL", "AngularJS", "Ruby", "Java"],
    "biopic": "images/user-3.jpg",
    display: function() {
            $("#role").prepend(HTMLheaderRole.replace("%data%", bio.role));
            $("#name").prepend(HTMLheaderName.replace("%data%", bio.name));
            // adding button
            $('#button').append(internationalizeButton);
            $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
            $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
            $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
            $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
            $(".profile-thumb").attr("style", HTMLbioPic.replace("%data%", bio.biopic));
            $("#msg").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
            if (bio.skills.length > 0) { //check if there any skils
                $("#skills").append(HTMLskillsStart);
                for (var i = 0; i <= bio.skills.length - 1; i++) {
                    $(".skills-entry").append(HTMLskills.replace("%data%", bio.skills[i]));
                } //end for skills loop
            } // End if
        } //End display function
}; //End bio
//Work Experience
var work = {
    'jobs': [{
        'employer': 'IT co',
        'title': 'Senior Developer',
        'location': 'Jeddah,SA',
        'dates': 'April 2016 - current',
        'description': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. '
    }, {
        'employer': 'Company Name',
        'title': 'Junior Developer',
        'location': 'Jeddah,SA',
        'dates': 'April 2016 - October 2016',
        'description': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. '
    }, {
        'employer': 'SAP',
        'title': 'UI/UX Designer',
        'location': 'Khobar,SA',
        'dates': 'April 2013 - May 2016',
        'description': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }], //end jobs
    display: function() {
            if (work.jobs.length > 0) { //check if there any jobs
                for (var i = 0; i <= work.jobs.length - 1; i++) {
                    if ((i + 1) % 2 == 0) {
                        $('#workExperience').append('<li class="even animate-box timeline-unverted"><div class="timeline-badge"><i class="icon-suitcase"></i></div><li>');
                        $('.even:last').append(HTMLworkStart);
                        $('.work-head:last').append(HTMLworkTitle.replace('%data%', work.jobs[i].title));
                        $('.work-head:last').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer) + HTMLworkDates.replace('%data%', work.jobs[i].dates) + HTMLworkLocation.replace('%data%', work.jobs[i].location));
                        $('.timeline-body:last').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
                    } else {
                        $('#workExperience').append('<li class="odd timeline-inverted animate-box"><div class="timeline-badge"><i class="icon-suitcase"></i></div><li>');
                        $('.odd:last').append(HTMLworkStart);
                        $('.work-head:last').append(HTMLworkTitle.replace('%data%', work.jobs[i].title));
                        $('.work-head:last').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer) + HTMLworkDates.replace('%data%', work.jobs[i].dates) + HTMLworkLocation.replace('%data%', work.jobs[i].location));
                        $('.timeline-body:last').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
                    }
                } //end for jobs loop
            } // End if
        } // end displayWorkExperience
}; //end work experience
//Projects information
var projects = {
    'projects': [{
        'title': 'Illustration',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-1.jpg']
    }, {
        'title': 'Illustration',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-2.jpg']
    }, {
        'title': 'Illustration',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-3.jpg']
    }, {
        'title': 'Website',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-4.jpg']
    }, {
        'title': 'Illustration',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-5.jpg']
    }, {
        'title': 'Design',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-6.jpg']
    }, {
        'title': 'Website',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-7.jpg']
    }, {
        'title': 'Design',
        'dates': '2015',
        'description': 'Company website',
        'images': ['images/portfolio-8.jpg']
    }], //end projects array
    display: function() {
            $('#projects').append(HTMLprojectStart);
            for (var i = 0; i <= projects.projects.length - 1; i++) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                $('.projects-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[i].images[j]));
            }//end images loop
                $('.desc:last').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
                $('.desc:last').append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
                $('.desc:last').append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
            } //end for projects loop
        } // end displayProjects
}; //end projects
//Education information
var education = {
    'schools': [{
        'name': 'MIT',
        'location': 'MA, USA',
        'degree': 'Masters Degree',
        'majors': ['IT'],
        'dates': '2017'
    }, {
        'name': 'King Saud University',
        'location': 'Riyadh, SA',
        'degree': 'Bachelors Degree',
        'majors': ['CS', 'SWE'],
        'dates': '2014'
    }, {
        'name': 'King Saud University',
        'location': 'Riyadh, SA',
        'degree': 'Diploma Degree',
        'majors': ['Health', 'Design'],
        'dates': '2014'
    }], //end schools
    'onlineCourses': [{
        'title': 'Front-end development nano-degree',
        'school': 'Udacity',
        'dates': '2017',
        'url': 'http://udacity.com'
    }, {
        'title': 'Learn how to Learn',
        'school': 'Coursera',
        'dates': '2016',
        'url': 'http://coursera.com'
    }], //end Online courses
    display: function() {
            if (education.schools.length > 0) {
                for (var i = 0; i <= education.schools.length - 1; i++) {
                    if ((i + 1) % 2 == 0) {
                        $('#education').append('<li class="even-edu timeline-inverted animate-box"><div class="timeline-badge"><i class="icon-graduation-cap"></i></div><li>');
                        $('.even-edu:last').append(HTMLschoolStart);
                        $('.edu-head:last').append(HTMLschoolDegree.replace('%data%', education.schools[i].degree));
                        $('.edu-head:last').append(HTMLschoolName.replace('%data%', education.schools[i].name) + HTMLschoolDates.replace('%data%', education.schools[i].dates) + HTMLworkLocation.replace('%data%', work.jobs[i].location));
                        $('.timeline-body:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors));
                    } else {
                        $('#education').append('<li class="odd-edu animate-box timeline-unverted"><div class="timeline-badge"><i class="icon-graduation-cap"></i></div><li>');
                        $('.odd-edu:last').append(HTMLschoolStart);
                        $('.edu-head:last').append(HTMLschoolDegree.replace('%data%', education.schools[i].degree));
                        $('.edu-head:last').append(HTMLschoolName.replace('%data%', education.schools[i].name) + HTMLschoolDates.replace('%data%', education.schools[i].dates) + HTMLworkLocation.replace('%data%', work.jobs[i].location));
                        $('.timeline-body:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors));
                    }
                } //end schools loop
            } //end if
            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var j = 0; j <= education.onlineCourses.length - 1; j++) {
                    if ((j + 1) % 2 == 0) {
                        $('#online').append('<li class="even-online animate-box timeline-unverted"><div class="timeline-badge"><i class="icon-graduation-cap"></i></div><li>');
                        $(".even-online").append(HTMLonlineClasses);
                        $('.online-head:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school));
                        $('.online-head:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates));
                        $('.timeline-body:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[j].url));
                    } //end if even
                    else {
                        $('#online').append('<li class="odd-online timeline-inverted animate-box"><div class="timeline-badge"><i class="icon-graduation-cap"></i></div><li>');
                        $(".odd-online").append(HTMLonlineClasses);
                        $('.online-head:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school));
                        $('.online-head:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates));
                        $('.timeline-body:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[j].url));
                    }
                } //end online courses loop
            } //end if
        } //end displayEducation
}; //end education
//Adding map
$('#mapDiv').append(googleMap);
bio.display();
work.display();
projects.display();
education.display();