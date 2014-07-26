var str = "Maharaja Ranjit Singh (13 November 1780 – 27 June 1839) was the founder of the Sikh Empire, which came to power in the Indian subcontinent in the early half of the 19th century. The empire, based in the Punjab region, existed from 1799 to 1849. It was forged, on the foundations of the Khalsa, under the leadership of Ranjit Singh from a collection of autonomous Sikh Misls.Ranjit Singh was succeeded by his son, Kharak Singh.

Ranjit Singh was born to Maha Singh and Raj Kaur on 13 November 1780, in Gujranwala, Punjab. At first he was named Buddh Singh, but Maha Singh received the news of his son's birth on his return from a victorious battle against the Chattar chief, Pir Muhammad, and renamed his son Ranjit (Victor in War). Historians have mixed views as to his family origins; while some assert he was born into a Jatt Sikh family, others claim that he was born into a Sansi Sikh family

As a child he suffered from smallpox which resulted in the loss of one eye. At the time, much of Punjab was ruled by the Sikhs under a Confederate Sarbat Khalsa system, who had divided the territory among factions known as misls. Ranjit Singh's father Maha Singh was the Commander of the Sukerchakia Misl and controlled a territory in the west Punjab based around his headquarters at Gujranwala. After his father's death, Ranjit Singh was raised under the protection of his mother Raj Kaur, and his mother-in-law Sada Kaur.

In 1799, Ranjit Singh captured Lahore from the Bhangi Misl and later made it his capital. This was the first important step in his rise to power. In the following years he brought the whole of the central Punjab from the Sutlej to the Jhelum under his sway. After several campaigns, he conquered the other misls and created the Sikh Empire."

str.match(/([A-Z]\w+(\s)?){1,}/)

//Simple Function to found Any Date written in a Punjabi Text
function extractProperNounsFromText(text) {
	return text.match(/([A-Z]\w+(\s)?){1,}/)
}

extractProperNounsFromText(sampleText);