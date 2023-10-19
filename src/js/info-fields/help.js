let shouldShowHelp = false

const rules = [
    "Разгледайте всички карти внимателно като използвате стрелките, за да ги местите.",
	"За да прочете карта от тестето, поставете показалеца на мишката върху избраната карта.",
	"За да вземете карта, задръжте с ляв бутон върху картата.",
	"Взетата карта, може да бъде поставена на едно от оцветените в тъмно сиво полета.",
	"Поставената карта може да се мести по същия начин на други позиции от полето.",
	"Поставената карта може да се върне в тестето, като я привлачите до тестето.",
	"За да рестартирате полето, натиснете кошчето в горен десен ъгъл."
]

const navigations = [
    "Може да се движите през полето с карти, със стрелките от клавиатурата.",
	"Със скролът на мишката оразмерявате полето с карти."
]

function createHelpParagraph(label){
    const paragraph = document.createElement("p");
    paragraph.textContent = label;

    return paragraph;
}

function createHelpList(listItems, listType, className){
    const list = document.createElement(listType);
    
    listItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = className;

        list.appendChild(li);
    });

    return list;

}

function showHelp() {
    
    shouldShowHelp = !shouldShowHelp;

    if (shouldShowHelp){
        const helpDiv = document.createElement("div");
        helpDiv.id = "helpDiv";
        helpDiv.className = "help";

        
        helpDiv.appendChild(createHelpParagraph("Цел на играта:"));
        helpDiv.appendChild(createHelpList(["Да разнищим научната тема, като подредим картите по логичен начин."], "ul", "help-bullet"))

        helpDiv.appendChild(createHelpParagraph("Правила на играта:"))
        helpDiv.appendChild(createHelpList(rules, "ol", "help-ordered"))

        helpDiv.appendChild(createHelpParagraph("Навигация:"))
        helpDiv.appendChild(createHelpList(navigations, "ol", "help-ordered"))

        document.body.appendChild(helpDiv);

        return;
    }

    document.body.removeChild(document.getElementById("helpDiv"));
}

function removeHelp(){
    if(shouldShowHelp){
        shouldShowHelp = false;
        document.body.removeChild(document.getElementById("helpDiv"));
    }
}