window.onload = () => {
    const animalElt = document.querySelector("#animal");
    const adjectifElt = document.querySelector("#adjectif");
    const btnGoElt = document.querySelector("#go");
    const btnAnimalElt = document.querySelector('#btnAnimal');
    const btnAdjectifElt = document.querySelector('#btnAdjectif');

    btnGoElt.onclick = () => {
        let animal = animaux[Math.floor(Math.random() * (animaux.length - 1) +1)];
        let adjectif = adjectifs[Math.floor(Math.random() * (adjectifs.length - 1) +1)];

        //let randomNb = Math.floor(Math.random() * (animaux.length - 1) + 1);

        animalElt.innerHTML = animal;
        adjectifElt.innerHTML = adjectif;
    }

    btnAnimalElt.onclick = () => {
        let animal = animaux[Math.floor(Math.random() * (animaux.length - 1) +1)];

        animalElt.innerHTML = animal;
    }

    btnAdjectifElt.onclick = () => {
        let adjectif = adjectifs[Math.floor(Math.random() * (adjectifs.length - 1) +1)];

        adjectifElt.innerHTML = adjectif;
    }
};
