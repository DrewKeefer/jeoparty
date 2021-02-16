# THIS... IS... JEOPARTY!

## RULES OF THE GAME

It's pretty simple. It's Jeopardy, but a drinking game, so Jeo*party*. The dollar value of each question decides how many drinks the correct answerer gets to give out ($100 is one drink, $200 is two drinks, you get the picture). Unlike real Jeopardy, there's no running tally of points. To buzz in, play flip-cup. Whoever gets it first gets to answer first. You didn't buzz-in first? No worries, keep going if you think that the first person didn't get the correct answer. Up to three people can buzz-in and say their answers.

If you get the question right, give out your drinks as you see fit. If you get the question wrong, take all those drinks yourself like the dumbass you are.

That's really it. There's no final Jeopardy or daily doubles yet because I haven't figured out how to code them in. Maybe I'll get around to it.

## HOW TO USE MY SHITTY SITE

Go to https://drewkeefer.github.io/jeoparty/. Depending on what screen size you're playing on, you might need to adjust the zoom on your web-browser to have it look okay. This is real Jeopardy shit, so everything is pulled from https://j-archive.com. I suck at coding though, so all the questions are stored in text files and then loaded back into the site at the beginning of every game. And because I'm a masochist, I used AppleScript to make those text files so you have to download them and only have access to the games I've already run that script on. Download the whole "games" folder or just the files for the game #### that you want to play.

Click on the "Answers", "Categories", and "Questions" buttons to load `####_answers.txt`, `####_categories.txt`, and `####_questions.txt` respectively. It should prompt you for a local .txt file which you can choose from that "games" folder you downloaded. The number prefixes correspond to the j-archive game number, and the "dj" prefix denotes that it's the double jeopardy round of that game. Double the drinks for those if you like. 

The .txt files might have some wack html artifacts still in there. I did my best to parse those out, but you might see a couple </spans> and shit every now and then. One thing about j-archive is that it doesn't support any image questions from the show. Those will be flagged with a "IMAGE QUESTION:" before the clue, so you'll probably see a clue that's like "blah blah blah as seen here" and there won't be any *here* to see because there's no image. Good luck with those. And for longer questions, the text might run off the screen. Pour one out for the .css gods and then adjust the zoom to read it. 

I think that's all the weird little quirks. I might come back to clean up this site at some point (adding daily doubles would be fun), but we'll see. Hmu if there's any bugs you can't work through.  
