var showedSymptomTutorial=0;
var showedTestingTutorial=0;
var quizCompleted=0;
var musicplay=false;
var musicStopByClick=false;

//Click the tab that has activePage id
document.getElementById('activePage').click();

//The three slideshows
//Pretesting slideshow
$('.slide-container').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slide-container-nav'
});

$('.slide-container-nav').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slide-container',
 dots: true,
 centerMode: true,
 focusOnSelect: true,
});

//During the test slide show
$('.slide-container1').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slide-container-nav1'
});

$('.slide-container-nav1').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slide-container1',
 dots: true,
 centerMode: true,
 focusOnSelect: true
});

//Post slide show
$('.slide-container2').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slide-container-nav2'
});

$('.slide-container-nav2').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slide-container2',
 dots: true,
 centerMode: true,
 focusOnSelect: true
});

//Function to identify the current tab and show the tab content
function currentPage(name,property){
  navigationTab=document.getElementsByClassName('navigationTab');

  //Rest all tab border bottom style
  for(resetCurrentTab=0; resetCurrentTab<navigationTab.length; resetCurrentTab++){
    navigationTab[resetCurrentTab].style.borderBottom="";
  }

  //Reset and make all the tabs unvisible
  content=document.getElementsByClassName('content');
  for(hideCurrentPage=0; hideCurrentPage<content.length; hideCurrentPage++ ){
    content[hideCurrentPage].style.display="none";
  }

  //Display the current tab content that the tab name is passed from the name
  document.getElementById(name).style.display="block";

  //To check whether it needs to show the tutorial
  showTheTutorial(name);

  //Do not show the top navigation bar if the user is in home page
  if (name!="Home"){
    $(".navigationTab").each(function(){
      this.style.display="block";
    })
  } else if (name=="Home"){
    $(".navigationTab").each(function(){
      this.style.display="none";
    })
  }

  //Click all the next button of the slideshow when enter the testing page (All text will be distorted without this)
  if (name=="Testing") {
    $(".slick-next").each(function(){
      this.click();
    })
  }

  //Underline the current tab
  property.style.borderBottom = "5px solid #3F779A";
  property.style.borderRadius= "3px";
}

//The home page navigation function (This function is similar to currentPage function but, this is use for home page navigation)
function homePageNavigation(name,property){
  button=document.getElementsByClassName('navigationTab');
  playButton=document.getElementById('playButton');

  for(resetCurrentTab=0; resetCurrentTab<button.length; resetCurrentTab++){
    button[resetCurrentTab].style.borderBottom="";
  }

  content=document.getElementsByClassName('content');
  for(hideCurrentPage=0; hideCurrentPage<content.length; hideCurrentPage++ ){
    content[hideCurrentPage].style.display="none";
  }

  document.getElementById(name).style.display="block";
  if (name!="Home"){
    $(".navigationTab").each(function(){
      this.style.display="block";
    })
  } else if (name=="Home"){
    $(".navigationTab").each(function(){
      this.style.display="none";
    })
  }

  showTheTutorial(name);

  //Start the background music
  if (musicplay==false){
    playButton.click();
    musicplay=true;
  }

  var navIdex=0;
    if (name=="Symptoms") {
      button[navIdex+2].style.borderBottom = "5px solid #3F779A";
    } else if (name=="Testing"){
      button[navIdex+1].style.borderBottom = "5px solid #3F779A";
      $(".slick-next").each(function(){
        this.click();
      })
    } else {
      button[navIdex].style.borderBottom = "5px solid #3F779A";
    }

}

//Show the tutorial
function showTheTutorial(pageTutorialName){
  symptomTutorial=document.getElementById("symptomTutorial");
  testingTutorial=document.getElementById("testingTutorial");

  //Check if it shows the tutorial once or not. Active the pop up totrial window if not.
  if (pageTutorialName=="Testing" && showedTestingTutorial==0){
    testingTutorial.click();
    showedTestingTutorial=showedTestingTutorial+1;
  }  else if (pageTutorialName=="Symptoms" && showedSymptomTutorial==0){
    symptomTutorial.click();
    showedSymptomTutorial=showedSymptomTutorial+1;
  }
}

//Quiz function for symptoms
function quiz(name,property){
  smallQuiz=document.getElementsByClassName('smallQuiz');
  quizResult=document.querySelector("#quizContent #quizResult");
  quizContent=document.querySelector("#quizContent #QuizContent");
  quizContentSource=document.querySelector("#quizContent #quizContentSource");
  sourceHref=document.querySelector("#quizContent #sourceHref");
  buttonName1=document.querySelector('.yes');
  buttonName2=document.querySelector('.no');

  //Check to see which quiz content should be displayed
  for(quizIndex=0;quizIndex<smallQuiz.length;quizIndex++){

    //Head quiz
    if(name=="head"){
      smallQuiz[quizIndex].style.display="block";
      document.querySelector('#headimg').style.display="inline";
      smallQuiz.id="headQuizContent";
      quizResult.innerHTML="";
      quizContent.innerHTML="<center><font size=5><u><strong>Fever</u></font></center>"+"You can have COVID-19 symptoms without the fever";
      quizContentSource.innerHTML="";
      sourceHref.innerHTML="";
      sourceHref.href="";
      buttonName1.innerHTML='Yes';
      buttonName2.innerHTML='No';
    }

    //nose quiz
    else if(name== "nose"){
      smallQuiz[quizIndex].style.display="block";
      document.querySelector('#noseimg').style.display="inline";
      smallQuiz.id="noseQuizContent";
      quizResult.innerHTML="";
      quizContent.innerHTML="<center><font size=5><u><strong>Sensory issue</u></font></center>"+"People with smell and taste loss in the absence of other symptoms do not have to be concerned about COVID-19";
      quizContentSource.innerHTML="";
      sourceHref.innerHTML="";
      sourceHref.href="";
      buttonName1.innerHTML='Yes';
      buttonName2.innerHTML='No';
    }

    //mouth quiz
    else if (name=="mouth") {
      smallQuiz[quizIndex].style.display="block";
      document.querySelector('#mouthimg').style.display="inline";
      smallQuiz.id="mouthQuizContent";
      quizResult.innerHTML="";
      quizContent.innerHTML="<center><font size=5><u><strong>Lung inflammation</u></font></center>"+"You are safe from COVID-19 if you have a cough with mucus";
      quizContentSource.innerHTML="";
      sourceHref.innerHTML="";
      sourceHref.href="";
      buttonName1.innerHTML='Yes';
      buttonName2.innerHTML='No';
    }

    //arm quiz
    else if (name=="arm") {
      smallQuiz[quizIndex].style.display="block";
      document.querySelector('#armimg').style.display="inline";
      smallQuiz.id="armQuizContent";
      quizResult.innerHTML="";
      quizContent.innerHTML="<center><font size=5><u><strong>Body pain</u></font></center>"+"You should seek emergency medical care immediately if you show persistent pain or pressure in the chest"
      quizContentSource.innerHTML="";
      sourceHref.innerHTML="";
      sourceHref.href="";
      buttonName1.innerHTML='Yes';
      buttonName2.innerHTML='No';
    }

    //stomach quiz
    else {
      smallQuiz[quizIndex].style.display="block";
      document.querySelector('#stomachimg').style.display="inline";
      smallQuiz.id="stomachQuizContent";
      quizResult.innerHTML="";
      quizContent.innerHTML="<center><font size=5><u><strong>Gastrointestinal</u></font></center>"+"COVID-19 might cause mild gastrointestinal symptoms, including nausea, vomiting and diarrhea"
      quizContentSource.innerHTML="";
      sourceHref.innerHTML="";
      sourceHref.href="";
      buttonName1.innerHTML='Yes';
      buttonName2.innerHTML='No';
    }
  }



}

//Change the button when the user interacts with the quiz content
function buttonChange(currentAnswer){
  buttonName1=document.querySelector('.yes');
  buttonName2=document.querySelector('.no');
  contentTitle=document.getElementsByClassName('smallQuiz');
  quizContent=document.querySelector("#quizContent #QuizContent");
  quizResult=document.querySelector("#quizContent #quizResult");
  quizContentSource=document.querySelector("#quizContent #quizContentSource");
  sourceHref=document.querySelector("#quizContent #sourceHref");
  link=document.querySelector("#quizContent #link");
  head=document.querySelector('.head');
  nose=document.querySelector('.nose');
  mouth=document.querySelector('.mouth');
  arm=document.querySelector('.arm');
  stomach=document.querySelector('.stomach');
  noSavedSymptomCards=document.querySelector('.symptomsSaved #noSavedSymptomCards');
  symptomCards=document.querySelector('.symptomsSaved .symptomCards');
  symptomSaveSucess=document.getElementById("symptomSaveSucess");

  //Check the answer of the input from the unser

  //If the user's answer is yes
  if (currentAnswer=="yes"){
    //then Check which stage the user is.
    //In knowing the result stage
    if(buttonName1.innerHTML=="Yes"){
      //Check which quiz content should be displayed
      if (contentTitle.id=="headQuizContent"){
        disabledButton(head);
        quizCompleted=quizCompleted+1;
        console.log(quizCompleted);
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="<img src=pictures/right.png height=100px></img>";
        quizContent.innerHTML="You can be infected with the coronavirus and have a cough or other symptoms with no fever, or a very low-grade one, especially in the first few days. Keep in mind that it is also possible to have COVID-19 with minimal or even no symptoms at all";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-symptoms-frequently-asked-questions";
        sourceHref.href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-symptoms-frequently-asked-questions";
      } else if (contentTitle.id=="noseQuizContent"){
        buttonName1.innerHTML="Check the answer";
        buttonName2.innerHTML="Try again";
        quizResult.innerHTML="<img src=pictures/wrong.png height=100px></img>"
        quizContent.innerHTML="";
      } else if (contentTitle.id=="mouthQuizContent"){
        buttonName1.innerHTML="Check the answer";
        buttonName2.innerHTML="Try again";
        quizResult.innerHTML="<img src=pictures/wrong.png height=100px></img>"
        quizContent.innerHTML="";
      } else if (contentTitle.id=="armQuizContent"){
        disabledButton(arm);
        quizCompleted=quizCompleted+1;
        console.log(quizCompleted);
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="<img src=pictures/right.png height=100px></img>";
        quizContent.innerHTML="If someone is showing any of these signs, seek emergency medical care immediately: Trouble breathing, Persistent pain or pressure in the chest, New confusion, Inability to wake or stay awake";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html";
        sourceHref.href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html";
      } else if (contentTitle.id=="stomachQuizContent"){
        disabledButton(stomach);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="<img src=pictures/right.png height=100px></img>";
        quizContent.innerHTML="Some people with COVID-19 develop gastrointestinal symptoms either alone or with respiratory symptoms. Recently, researchers at Stanford University found that a third of patients they studied with a mild case of COVID-19 had symptoms affecting the digestive system such as nausea, vomiting and diarrhea";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.healthline.com/health/coronavirus-diarrhea#gastrointestinal-symptoms";
        sourceHref.href="https://www.healthline.com/health/coronavirus-diarrhea#gastrointestinal-symptoms";
      }
    }
    //In saving the symptoms stage
    else if(buttonName1.innerHTML=="Save"){
      //Create a div
      div=document.createElement("div");
      //The div name savedcard
      div.id="savedcard";
      //Wipe off the no saved card message in saved page
      noSavedSymptomCards.innerHTML="";
      //check which symptom content should be saved
      if(contentTitle.id=="headQuizContent"){
        div.innerHTML="<center><font size=5><u><strong>Fever</u></font></center>"+quizContent.innerHTML+"<br><br>"+quizContentSource.innerHTML+"<br>"+link.innerHTML;
        //Push the div to the symptom section in saved page
        ymptomCards.appendChild(div);
        symptomSaveSucess.click();
      } else if (contentTitle.id=="noseQuizContent"){
        div.innerHTML="<center><font size=5><u><strong>Sensory issue</u></font></center>"+quizContent.innerHTML+"<br><br>"+quizContentSource.innerHTML+"<br>"+link.innerHTML;
        symptomCards.appendChild(div);
        symptomSaveSucess.click();
      } else if (contentTitle.id=="mouthQuizContent"){
        div.innerHTML="<center><font size=5><u><strong>Lung infection</u></font></center>"+quizContent.innerHTML+"<br><br>"+quizContentSource.innerHTML+"<br>"+link.innerHTML;
        symptomCards.appendChild(div);
        symptomSaveSucess.click();
      } else if (contentTitle.id=="armQuizContent"){
        div.innerHTML="<center><font size=5><u><strong>Body pain</u></font></center>"+quizContent.innerHTML+"<br><br>"+quizContentSource.innerHTML+"<br>"+link.innerHTML;
        symptomCards.appendChild(div);
        symptomSaveSucess.click();
      } else if (contentTitle.id=="stomachQuizContent"){
        div.innerHTML="<center><font size=5><u><strong>Gastrointestinal</u></font></center>"+quizContent.innerHTML+"<br><br>"+quizContentSource.innerHTML+"<br>"+link.innerHTML;
        symptomCards.appendChild(div);
        symptomSaveSucess.click();
      }
      symptomCards.style.display="block";


    }
    //In check the answer stage
    else if(buttonName1.innerHTML=="Check the answer"){
      if (contentTitle.id=="noseQuizContent"){
        //Disable the button because in this stage, the quiz is been answer
        disabledButton(nose);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="";
        quizContent.innerHTML="While smell and taste loss can be caused by other conditions, it warrants a conversation with your physician to determine whether you should be tested for COVID-19. We know smell loss is one of the first — and sometimes only — symptoms in up to 25% of people diagnosed with COVID-19. It could be unrelated, but it’s important to seek care, especially if these symptoms are prolonged";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.vumc.org/coronavirus/latest-news/five-things-know-about-smell-and-taste-loss-covid-19";
        sourceHref.href="https://www.vumc.org/coronavirus/latest-news/five-things-know-about-smell-and-taste-loss-covid-19";
      }else if (contentTitle.id=="mouthQuizContent"){
        disabledButton(mouth);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="";
        quizContent.innerHTML="Early study has found that at least 60% of people with COVID-19 have a dry cough. About a third have a cough with mucus, called a “wet” or “productive” cough. Therefore, any kinds of cough could be a symptom of COVID-19";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.webmd.com/lung/covid-19-symptoms?fbclid=IwAR2rqF_m579_y_fbLa-TgjBMiin_pNZ8lynBdubtP0p0gAl8tybbBfJjkvk#1-2";
        sourceHref.href="https://www.webmd.com/lung/covid-19-symptoms?fbclid=IwAR2rqF_m579_y_fbLa-TgjBMiin_pNZ8lynBdubtP0p0gAl8tybbBfJjkvk#1-2";
      }else if (contentTitle.id=="headQuizContent"){
        disabledButton(head);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="";
        quizContent.innerHTML="You can be infected with the coronavirus and have a cough or other symptoms with no fever, or a very low-grade one, especially in the first few days. Keep in mind that it is also possible to have COVID-19 with minimal or even no symptoms at all";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-symptoms-frequently-asked-questions";
        sourceHref.href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-symptoms-frequently-asked-questions";
      }else if (contentTitle.id=="armQuizContent"){
        disabledButton(arm);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="";
        quizContent.innerHTML="If someone is showing any of these signs, seek emergency medical care immediately: Trouble breathing, Persistent pain or pressure in the chest, New confusion, Inability to wake or stay awake";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html";
        sourceHref.href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html";
      } else if (contentTitle.id=="stomachQuizContent"){
        disabledButton(stomach);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="";
        quizContent.innerHTML="Some people with COVID-19 develop gastrointestinal symptoms either alone or with respiratory symptoms. Recently, researchers at Stanford University found that a third of patients they studied with a mild case of COVID-19 had symptoms affecting the digestive system such as nausea, vomiting and diarrhea";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.healthline.com/health/coronavirus-diarrhea#gastrointestinal-symptoms"
        sourceHref.href="https://www.healthline.com/health/coronavirus-diarrhea#gastrointestinal-symptoms"

      }
    }
  }

  // if the user's answer is no
  else if(currentAnswer=="no"){
    //check what is the current stage
    //In continue stage
    if (buttonName2.innerHTML=="Continue"){

      if(contentTitle.id=="headQuizContent"){
        //check whether the quiz is finished. Go next symptom if not or show the conguration message if yes
        quizCompletedCheck(nose);
        //Display the next symptoms image
        document.querySelector('#noseimg').style.display="inline";
      } else if (contentTitle.id=="noseQuizContent"){
        quizCompletedCheck(mouth);
        document.querySelector('#mouthimg').style.display="inline";
      } else if (contentTitle.id=="mouthQuizContent"){
        quizCompletedCheck(arm);
        document.querySelector('#armimg').style.display="inline";
      } else if (contentTitle.id=="armQuizContent"){
        quizCompletedCheck(stomach);
        document.querySelector('#stomachimg').style.display="inline";
      } else if (contentTitle.id=="stomachQuizContent"){
        quizCompletedCheck(head);
        document.querySelector('#headimg').style.display="inline";
      }
    }
    //In no stage
    else if (buttonName2.innerHTML=="No") {
      if(contentTitle.id=="headQuizContent"){
        buttonName1.innerHTML="Check the answer";
        buttonName2.innerHTML="Try again";
        quizResult.innerHTML="<img src=pictures/wrong.png height=100px></img>"
        quizContent.innerHTML="";
      } else if (contentTitle.id=="noseQuizContent"){
        disabledButton(nose);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="<img src=pictures/right.png height=100px></img>";
        quizContent.innerHTML="While smell and taste loss can be caused by other conditions, it warrants a conversation with your physician to determine whether you should be tested for COVID-19. We know smell loss is one of the first — and sometimes only — symptoms in up to 25% of people diagnosed with COVID-19. It could be unrelated, but it’s important to seek care, especially if these symptoms are prolonged";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.vumc.org/coronavirus/latest-news/five-things-know-about-smell-and-taste-loss-covid-19";
        sourceHref.hred="https://www.vumc.org/coronavirus/latest-news/five-things-know-about-smell-and-taste-loss-covid-19";
      } else if (contentTitle.id=="mouthQuizContent"){
        disabledButton(mouth);
        quizCompleted=quizCompleted+1;
        buttonName1.innerHTML="Save";
        buttonName2.innerHTML="Continue";
        quizResult.innerHTML="<img src=pictures/right.png height=100px></img>";
        quizContent.innerHTML="Early study has found that at least 60% of people with COVID-19 have a dry cough. About a third have a cough with mucus, called a “wet” or “productive” cough. Therefore, any kinds of cough could be a symptom of COVID-19";
        quizContentSource.innerHTML="Source:";
        sourceHref.innerHTML="https://www.webmd.com/lung/covid-19-symptoms?fbclid=IwAR2rqF_m579_y_fbLa-TgjBMiin_pNZ8lynBdubtP0p0gAl8tybbBfJjkvk#1-2";
        sourceHref.hred="https://www.webmd.com/lung/covid-19-symptoms?fbclid=IwAR2rqF_m579_y_fbLa-TgjBMiin_pNZ8lynBdubtP0p0gAl8tybbBfJjkvk#1-2";
      } else if (contentTitle.id=="armQuizContent"){
        buttonName1.innerHTML="Check the answer";
        buttonName2.innerHTML="Try again";
        quizResult.innerHTML="<img src=pictures/wrong.png height=100px></img>"
        quizContent.innerHTML="";
      } else if (contentTitle.id=="stomachQuizContent"){
        buttonName1.innerHTML="Check the answer";
        buttonName2.innerHTML="Try again";
        quizResult.innerHTML="<img src=pictures/wrong.png height=100px></img>"
        quizContent.innerHTML="";
      }
    }
    //In try agian stage
    else if (buttonName2.innerHTML=="Try again"){
      if(contentTitle.id=="headQuizContent"){
        //click the current symptom point again
        head.click();
      } else if (contentTitle.id=="noseQuizContent"){
        nose.click();
      } else if (contentTitle.id=="mouthQuizContent"){
        mouth.click();
      } else if (contentTitle.id=="armQuizContent"){
        arm.click();
      } else if (contentTitle.id=="stomachQuizContent"){
        stomach.click();
      }
    }
  }

}

//Disabled the symptom button after the user answer the question
function disabledButton(buttonName){
  buttonName.disabled = true;
  buttonName.style.backgroundImage='url(./pictures/dispoint.png)';
  buttonName.style.cursor="auto";
}

//Check whether the user finishes all the quizzes
function quizCompletedCheck(next){
  finishQuiz=document.getElementById("finishQuiz");
  if (quizCompleted==5){
    console.log("completed");
    finishQuiz.click();
  }else{
    next.click();
  }
}

//Jump to the testing page if the user finished all the quizzes
function jumpToTesting(){
  document.getElementById("testingPage").click();
}

//Add current slide content to the saved page
function slideContentSave(currentSlide){
  noSavedTestingCards=document.querySelector('.testingSaved #noSavedTestingCards');
  div=document.createElement("div");
  div.id="savedcard";
  noSavedTestingCards.innerHTML="";
  preTestingSlideIndex=document.getElementsByClassName("preTestingSlide").length;
  pretestingButton=document.querySelector("#testingSaveButton #pretesting");
  duringTheTestButton=document.querySelector("#testingSaveButton #duringTheTest");
  postButton=document.querySelector("#testingSaveButton #post-test");

  //check the current slideshow name
  //pretesting slideshow
  if (currentSlide=="pretesting"){
    //get current slide index
    currentSlideIndex= $('.slide-container').slick('slickCurrentSlide');
    i=0;
    //To find out which slide content is showing at moment by check thier id number
    for(a=0; a<=preTestingSlideIndex; a++){
      //append the inner text if the index is matching the slide id number
      if (i==currentSlideIndex){
        slideContent=document.getElementById(currentSlideIndex).innerHTML;
        div.innerHTML=slideContent;
        //append it to testing section in saved page
        $(div).appendTo('.testingCards');
      }
      i++;
    }
    addCard(pretestingButton);
    //same as able
  } else if (currentSlide=="duringTheTest") {
    currentSlideIndex= $('.slide-container1').slick('slickCurrentSlide');
    i=4;
    currentSlideIndex=currentSlideIndex+4
    for(a=4; a<=6; a++){
      if (i==currentSlideIndex){
        slideContent=document.getElementById(currentSlideIndex).innerHTML;
        div.innerHTML=slideContent;
        $(div).appendTo('.testingCards');
      }
      i++;
    }
    addCard(duringTheTestButton);
    //same as able
  } else if (currentSlide=="post-test"){
    currentSlideIndex= $('.slide-container2').slick('slickCurrentSlide');
    i=8;
    currentSlideIndex=currentSlideIndex+8
    for(a=8; a<=11; a++){
      if (i==currentSlideIndex){
        slideContent=document.getElementById(currentSlideIndex).innerHTML;
        div.innerHTML=slideContent;
        $(div).appendTo('.testingCards');
      }
      i++;
    }
    addCard(postButton);
  }
}

//Save button animation in testing page
function addCard(currentSlideButton){
  //add the click class name
  $(currentSlideButton).addClass("clicked");
  currentSlideButton.style.borderRadius="40px";
  //time delay for the animation
  setTimeout(function() {
    $( currentSlideButton).removeClass( "clicked" );
    $( currentSlideButton).addClass( "saving");
    currentSlideButton.style.borderRadius="0px 0px 10px 10px";;
    setTimeout(function() {
      currentSlideButton.style.borderRadius="40px";
      $(currentSlideButton).removeClass( "saving" );
      currentSlideButton.style.borderRadius="0px 0px 10px 10px";
    }, 2000 );
  }, 1000 );
}

//Back to the top in testing page
function backToTop(){
  console.log("hi");
  back=document.getElementById("back");
  back.click();
}

//Play the background music
function play(){
  backgroundmusic=document.getElementById('backgroundmusic');
  playButton=document.getElementById('playButton');
  if (musicStopByClick==false){
    playButton.innerHTML="<strong>II</strong>";
    backgroundmusic.play();
    musicStopByClick=true;
  } else {
    playButton.innerHTML="▶";
    backgroundmusic.pause();
    musicStopByClick=false;
  }
}
