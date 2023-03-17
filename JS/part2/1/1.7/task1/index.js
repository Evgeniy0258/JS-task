let text = '<b>текст</b>';

elem1.append(document.createTextNode(text));//правильно 
elem2.innerHTML = text;
elem3.textContent = text;//правильно 
