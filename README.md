**completed project**
[infuseyourmood.surge.sh]

# Q1 Project Proposal

## Project Proposal A
**Herbal Apothecary**
![alt text](https://github.com/yogasarak/Q1_Project_Proposal/blob/master/herbal%20.png "Simple Mock-up")

1. user enters in text box what type of mood they are in (from the options)
	- moody moon days (emotional, moody, changeable. Spray will offer balance. 
	- up on the peaks (happy, content, satisfied, fulfilled) Spray will offer grounding. 
	- down in the valley (sad) Spray will offer uplifting energy.
 * form validates input as valid (matches selection options above)
 * then returns the a essential oil recipe to soothe their mood.
 
* What problem or need does your project solve?
- we all need a little more self care and r&r, these simple, easy recipes invite the users to try a accessible act of self love and care. By following a recipe for a essential oil spray, users can experience a spa-like moment in a bottle, that they can return to any time throughout their day... when emotions run high or low.

* Who would be a user of your website?
- anyone that wants to learn more about how plant medicine can be a transformative experience.
- anyone who wants to deepen or simple start, a practice of managing their emotions and getting in touch with their inner world. By learning how to identify emotional states and take action in the direction of self care, benefits can lead to personal and professional growth through knowing and better taking care of ones self. 

* What technologies will you be using?

- HTML, CSS, JavaScript
- Reach: an API for recipe finder

### color theme 
![alt text](https://github.com/yogasarak/Q1_Project_Proposal/blob/master/color%20theme.png)

### planning 
![alt text](https://github.com/yogasarak/Q1_Project/blob/master/wireframe.png)

#### techincal spec notes:

localStorage = previous stored values of local program
form captures user input sep from favorites

1. client side validation ‘on submit’
	2.validate input 
	-check for valid
		-if else statements for which program based on input
____________________
### HTML

-inside div id =‘moody..’ (three options)
	-image tags
	-text ex: down in the valley spray: recipe ..
-dynamically show.hid div
	ex: 
	display: hidden 
	display: none
	display: block 

____________________
### JavaScript
targetProgramDuration

text box: ask for a number
‘please choose'
(drop-down would be better, has built in validation,want client side)

1.validate  : client side validation (‘on submitt’)
examples for proposal B, work the same as proposal A
  - (validate) duration is numeric (20,40,60)
  - validate form input: beginner can't choose 90min
    - beginner, intermediate, advance
2. client side validation ‘on submitt’
3. 'on click’ handler: "invalid input”
4. -dynamically show.hid div
-reference dynamically show.hid div with target = getElementById(‘beginner’)

if else statements for which program based on input
ne event listener, (‘on submit’)
logic in own function

clearLayout() —— turn innHTML = ‘ “


## Project Proposal B
**Brief description of Yoga Practice website**

1. user enters in text box whether they are interested in a beginner or intermediate yoga practice (reach: add advanced) 
  * form validates input as valid (beginner or intermediate, lowercase/no spaces)
  * then returns the next text box 

2. user enters in text box whether they want 
  ..* beginner valid input options: 10, 15 minute practice
  ..* intermediate valid input options: 20, 30 minute practice 

* What problem or need does your project solve?

-many clients that I have worked with one-on-one have wanted a supplemental daily yoga practice they can fit into their schedule. This provides a practice for people to build on, memorize and elaborate based on their individual needs.

* Who would be a user of your website?

- anyone interested in developing a home/personal yoga practice.
- busy individuals, couples, families or persons that do not have the budget/time for public classes, or a private instructor. 
	- beginner, intermediate (reach advanced) yoga practitioners.

* What technologies will you be using?

- HTML, CSS, JavaScript
- Reach: an API for yoga poses or class finder

## MVP
1. user enters in text box what type of yoga pose they are interested in:
* low back care (gentle low back stretch for people that suffer from pain in their lumbar spine)
* the web dev (for those that sit at a desk hunched over a screen all day)
* the coloradian (for those that like to tackle peaks (cycle,run,ski) and suffer from common IT band syndrome)
  * form validates input as valid (from options above)
* image of yoga pose and directions returned to user based on their input.
