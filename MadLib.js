onEvent("nextbutton", "click", function(event) {
  setScreen("prompt")
var pronoun = getText("text_input1")
var noun1 = getText("text_input2")
var noun2 = getText("text_input3")
var verb = getText("text_input4")
var adjective = getText("text_input5")
setText("text_area1", "Hi " + noun1 + ". I love you! I especially like " + pronoun + "! " + noun2 + " Is so nice to me. " + pronoun + " looks " + adjective + "! I'm gonna " + verb + " now, bye!")
});
onEvent("trybutton", "click", function(event) {
 setScreen("filler")
});