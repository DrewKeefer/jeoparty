/* LOAD DATA */

const catFile = document.getElementById('categoryFile')
const questFile = document.getElementById('questionFile')
const answerFile = document.getElementById('answerFile')
const continueButton = document.getElementById('continue-btn')
const fileInterface = document.getElementById('file-load')
continueButton.addEventListener('click', loadData, false)

/* LOAD CATEGORIES */

catFile.addEventListener('change', () => { 
    let files = catFile.files; 
  
    if (files.length == 0) return; 

    const file = files[0]; 
  
    let reader = new FileReader(); 
  
    reader.onload = (e) => { 
        const file = e.target.result; 
        
        categories = file.split("\r");
    }; 
  
    reader.onerror = (e) => alert(e.target.error.name); 
  
    reader.readAsText(file); 
}); 

/* LOAD QUESTIONS */

questFile.addEventListener('change', () => { 
    let files = questFile.files; 
  
    if (files.length == 0) return; 

    const file = files[0]; 
  
    let reader = new FileReader(); 
  
    reader.onload = (e) => { 
        const file = e.target.result; 
        
        questions = file.split("\r");
    }; 
  
    reader.onerror = (e) => alert(e.target.error.name); 
  
    reader.readAsText(file); 
}); 

/* LOAD ANSWERS */

answerFile.addEventListener('change', () => { 
    let files = answerFile.files; 
  
    if (files.length == 0) return; 

    const file = files[0]; 
  
    let reader = new FileReader(); 
  
    reader.onload = (e) => { 
        const file = e.target.result; 
        
        answers = file.split("\r");
    }; 
  
    reader.onerror = (e) => alert(e.target.error.name); 
  
    reader.readAsText(file); 
}); 

/* LOAD DATA */

function loadData (){
    fileInterface.classList.add('hide')
    console.log(questions[10])
    setCategories()
}

/* CATEOGORY CONSTANTS */

const catOne = document.getElementById('cat-one')
const catTwo = document.getElementById('cat-two')
const catThree = document.getElementById('cat-three')
const catFour = document.getElementById('cat-four')
const catFive = document.getElementById('cat-five')
const catSix = document.getElementById('cat-six')

/* QUESTION CONSTANTS */

const quest100 = document.getElementById('quest100')
const quest200 = document.getElementById('quest200')
const quest300 = document.getElementById('quest300')
const quest400 = document.getElementById('quest400')
const quest500 = document.getElementById('quest500')

/* QUESTION LISTENERS */

quest100.addEventListener('click', setQuestionIndex(quest100,0))
quest200.addEventListener('click', setQuestionIndex(quest200,6))
quest300.addEventListener('click', setQuestionIndex(quest300,12))
quest400.addEventListener('click', setQuestionIndex(quest400,18))
quest500.addEventListener('click', setQuestionIndex(quest500,24))

/* HIDE BUTTONS */

var allButtons = document.getElementsByClassName("btn");

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', hide, false);
}


/* OTHER CONSTANTS */

const answerButton = document.getElementById('answer-btn')
const resetButton = document.getElementById('reset-btn')
const mainTable = document.getElementById('main-table')
const questContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question-text')
const answerElement = document.getElementById('answer-text')
const answerContainer = document.getElementById('answer-container')

answerButton.addEventListener('click', showAnswer)
resetButton.addEventListener('click', returnBoard)

/* FUNCTIONS */

function hide() {
    this.style.display = "none"
}

function setCategories() {
    catOne.textContent = categories[0]
    catTwo.textContent = categories[1]
    catThree.textContent = categories[2]
    catFour.textContent = categories[3]
    catFive.textContent = categories[4]
    catSix.textContent = categories[5]
}

function setQuestionIndex(questionRow,indexMod) {
    var g = questionRow
    for (var i = 0, len = g.children.length; i < len; i++)
    {
    (function(index){
        g.children[i].onclick = function(){
            let currentQuestionIndex = index + indexMod
            showQuestion(currentQuestionIndex)
        }
    })(i);
    }
}

function showQuestion(currentQuestionIndex) {
    mainTable.classList.add('hide')
    questContainer.classList.remove('hide')
    setQuestion(currentQuestionIndex)
}

function setQuestion(currentQuestionIndex){
    questionElement.innerText = questions[currentQuestionIndex]
    answerElement.innerText = answers[currentQuestionIndex]
}

function showAnswer() {
    answerContainer.classList.remove('hide')
    answerElement.classList.remove('hide')
    resetButton.classList.remove('hide')
}

function returnBoard() {
    answerElement.classList.add('hide')
    answerContainer.classList.add('hide')
    resetButton.classList.add('hide')
    questContainer.classList.add('hide')
    mainTable.classList.remove('hide')
}

/*

const questions = [
    {
        question: "IMAGE QUESTION: Look out below, it's this Neolithic monument as seen from above",
        answer: "Stonehenge"
        },
        
        {
        question: "IMAGE QUESTION: It was so cold in London in 1814 that a frost fair was held on this river that had frozen over",
        answer: "the Thames"
        },
        
        {
        question: "For the Ernest amongst you:'El viejo y el mar'",
        answer: "The Old Man and the Sea"
        },
        
        {
        question: "IMAGE QUESTION: During an exam using the eye chart seen here, reading the 8th line means your vision is considered normal, expressed as this fraction",
        answer: "20/20"
        },
        
        {
        question: "This singer & former boyfriend of Taylor Swift assumes he's the 'John' in her song 'Dear John'",
        answer: "John Mayer"
        },
        
        {
        question: "A video game plumber & a native people of New Zealand",
        answer: "Mario & Maori"
        },
        
        {
        question: "One of the 7 Ancient Wonders was this huge marble tomb at Halicarnassus, of which some fragments survive",
        answer: "the Mausoleum"
        },
        
        {
        question: "In Southern California, morning low clouds & fog during the sixth month are part of this near-rhyming phenomenon",
        answer: "June gloom"
        },
        
        {
        question: "From C.S. Lewis:'La silla de la plata'",
        answer: "The Silver Chair"
        },
        
        {
        question: "For a graphology test, you'll need to submit a sample of this",
        answer: "handwriting"
        },
        
        {
        question: "Rapper Nas is said to be the title 'Mr.' in Amy Winehouse's 'Me & Mr.' him; it's Nas' last name",
        answer: "Jones"
        },
        
        {
        question: "A nickname for Henry & a hieroglyph of Ancient Egyptian religion",
        answer: "Hank & ankh"
        },
        
        {
        question: "IMAGE QUESTION: Located on a slope of the Acropolis is one of Greece's oldest theaters, dedicated to this god of wine",
        answer: "Dionysus"
        },
        
        {
        question: "It's the 'colorful' term for a thin frozen film on the road that can lead to hazardous driving conditions",
        answer: "black ice"
        },
        
        {
        question: "Set in the American south:'Luz de agosto'",
        answer: "Light in August"
        },
        
        {
        question: "Cardiac rhythm, blood pressure & breathing are all monitored while you exercise on a treadmill in this type of test",
        answer: "a stress test"
        },
        
        {
        question: "David Paich of Toto said Ms. Arquette was the inspiration for the title of this 1982 hit",
        answer: "'Rosanna'"
        },
        
        {
        question: "A first name made up by a rock & roll frontman & a California airport code",
        answer: "Axl & LAX"
        },
        
        {
        question: "With tombs, houses & buildings carved into the cliffs, Petra in this country is a famous archaeological site",
        answer: "Jordan"
        },
        
        {
        question: "IMAGE QUESTION: It's the type of cloud seen here before it touches the ground & becomes a tornado",
        answer: "a funnel cloud"
        },
        
        {
        question: "Mann up:'La muerte en venecia'",
        answer: "Death in Venice"
        },
        
        {
        question: "This Greek letter 'test' is often the last stage of testing for a computer product",
        answer: "beta"
        },
        
        {
        question: "The U2 song 'Stuck In A Moment You Can't Get Out Of' is about Michael Hutchence, late frontman of this band",
        answer: "INXS"
        },
        
        {
        question: "Ms. Bassett & the ore that's the main source of lead",
        answer: "Angela & galena"
        },
        
        {
        question: "IMAGE QUESTION: A gift from Egypt, the obelisk on Paris's Place de la Concorde once marked the entrance to this temple in Thebes, not Vegas",
        answer: "Luxor"
        },
        
        {
        question: "A weathervane measures wind direction; one of these 'meters' measures wind speed",
        answer: "an anemometer"
        },
        
        {
        question: "From 1937:'De ratones y hombres'",
        answer: "Of Mice and Men"
        },
        
        {
        question: "IMAGE QUESTION: No ink blots seen here on the photo of this man, who lends his name to a form of clinical psychological testing",
        answer: "Rorschach"
        },
        
        {
        question: "After breaking up with Erykah Badu, Andre 3000 apologized to her mother in OutKast's 'Ms.' her",
        answer: "Jackson"
        },
        
        {
        question: "A name meaning 'polite' & an adjective meaning typical of the countryside",
        answer: "Curtis & rustic"
        },
        
]

*/

/*

const categories = [
    {
        category: 'NAME THAT MALE AUTHOR'
        },
        
        {
        category: 'LETTER PERFECT CINEMA'
        },
        
        {
        category: 'WORLD CAPITAL RIVERS'
        },
        
        {
        category: 'DO ME A FLAVOR'
        },
        
        {
        category: 'NEW TO THE OED'
        },
        
        {
        category: 'TAEKWONDO'
        },
        
           
]


window.onload = setCategories();

*/