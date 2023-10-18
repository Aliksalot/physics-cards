let shouldShowAuthors = false

function createImage (name, extension){
    const image = document.createElement("img");
    image.id = name;
    image.src = `images/${name}.${extension}`;
    image.alt = `${name}.${extension}`;
    image.draggable = false;
    image.className = "authors-images";
    
    return image;
}

function createParagraph(label, email){
    const paragraph = document.createElement("p");
    paragraph.textContent = email ? `${label} - ` : label;

    const anchor = document.createElement("a");
    anchor.textContent = email;
    anchor.href = `mailto:${email}`;

    paragraph.appendChild(anchor);

    return paragraph;
}

function showAuthors() {
    shouldShowAuthors = ! shouldShowAuthors;

    if (shouldShowAuthors){
        const authorsDiv = document.createElement("div");
        authorsDiv.id = "authorsDiv";
        authorsDiv.className = "authors";

        
        authorsDiv.appendChild(createParagraph("Александър Колев", "alexkolev05@gmail.com"));
        authorsDiv.appendChild(createParagraph("Виктор Георгиев", "vrgeorgiev06@gmail.com"));

        authorsDiv.appendChild(createParagraph("Ученици от 11Б на СПГЕ „Джон Атанасов“"));
        
        authorsDiv.appendChild(createImage("JohnAtanasoffLogo", "png"))

        document.body.appendChild(authorsDiv);

        return;
    }

    document.body.removeChild(document.getElementById("authorsDiv"));
}
