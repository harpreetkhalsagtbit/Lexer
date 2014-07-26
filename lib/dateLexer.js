//Ref from http://www.englishclub.com/vocabulary/time-date.htm

var englishMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var sampleText = ''

//(\b\d{1,2}[ a-z]+\d{2,4})|([A-Z]\w+(\s)?\d{1,2}([a-z]{2})?[, ]+\d{2,4})

//Simple Function to found Any Date written in a Punjabi Text
function extractDateFromText(text) {
	return text.match(/(\b\d{1,2}[ a-z]+\d{2,4})|([A-Z]\w+(\s)?\d{1,2}([a-z]{2})?[, ]+\d{2,4})/gi)
}

extractDateFromText(sampleText);
