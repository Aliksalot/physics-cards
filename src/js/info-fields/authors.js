let shouldShowAuthors = false

function createAuthorImage (name, extension){
    const image = document.createElement("img");
    image.id = name;
    image.src = `images/${name}.${extension}`;
    image.alt = `${name}.${extension}`;
    image.draggable = false;
    image.className = "authors-images";
    
    return image;
}

function createAuthorParagraph(label, email){
    const paragraph = document.createElement("p");
    paragraph.textContent = email ? `${label} - ` : label;

    const anchor = document.createElement("a");
    anchor.textContent = email;
    anchor.href = `mailto:${email}`;

    paragraph.appendChild(anchor);

    return paragraph;
}

function closeAuthorsPopUp(){
    if(shouldShowAuthors){
        document.body.removeChild(document.getElementById("authorsDiv"));
        shouldShowAuthors = false;
    }
        
}

function showAuthors() {
    shouldShowAuthors = ! shouldShowAuthors;

    if (shouldShowAuthors){
        const authorsDiv = document.createElement("div");
        authorsDiv.id = "authorsDiv";
        authorsDiv.className = "authors";

        
        authorsDiv.appendChild(createAuthorParagraph("Александър Колев", "alexkolev05@gmail.com"));
        authorsDiv.appendChild(createAuthorParagraph("Виктор Георгиев", "vrgeorgiev06@gmail.com"));

        authorsDiv.appendChild(createAuthorParagraph("Ученици от 11Б клас на СПГЕ „Джон Атанасов“"));
        
        authorsDiv.appendChild(createAuthorImage("JohnAtanasoffLogo", "png"))

        document.body.appendChild(authorsDiv);

        return;
    }

    removeAuthors();
}

function removeAuthors(){
    document.body.removeChild(document.getElementById("authorsDiv"));
}
