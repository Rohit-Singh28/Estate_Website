let form1 = document.querySelector(".form1");
const title1 = document.querySelector(".title1");
const description = document.querySelector(".description");
const image = document.querySelector(".image");
const price = document.querySelector(".price");
const locatio = document.querySelector(".location");
const country = document.querySelector(".country");
const category = document.querySelector(".category");

let def = true;

const setError = (inputField, msg) => {
    let p = inputField.nextElementSibling;
    p.innerText = msg;
    p.classList.remove('valid');
    inputField.classList.remove('valid');
    p.classList.add('tnonvalid');
    inputField.classList.add('nonvalid');
}

const setValid = (inputField, msg) => {
    let p = inputField.nextElementSibling;
    p.innerText = msg;
    inputField.classList.remove('nonvalid');
    p.classList.remove('tnonvalid');
    p.classList.add('tvalid');
    inputField.classList.add('valid');
}

form1.addEventListener("submit", (e) => {

    function toPreventDefault(){
       e.preventDefault();
    }
    checkValidity(toPreventDefault);

},false)

const checkValidity = (toPreventDefault) => {
    let titleVal = title1.value.trim();
    let descriptionVal = description.value.trim();
    let imageVal = image.value.trim();
    let priceVal = price.value.trim();
    let locatioVal = locatio.value.trim();
    let countryVal = country.value.trim();
    const categoryVal = category.value;


    if (titleVal == '') {
        setError(title1, "titlename can't be Empty");
        toPreventDefault();
    }
    else {
        setValid(title1, "Valid")
    }


    if (descriptionVal === '') {
        setError(description, "Description can't be Empty OR Atmost 50 Characters are alowed)");
        toPreventDefault();

    }
    else {
        setValid(description, "Valid")
       
    }

    if (imageVal === '') {
        setValid(image, "Valid")
    }
    else {
        setValid(image, "Valid")
    }

    if (priceVal === '' || priceVal < 0) {
        setError(price, "price can't be Empty");
        toPreventDefault();
    }
    else {
        setValid(price, "Valid")
    }


    if (locatioVal === '') {
        setError(locatio, "country name can't be Empty");
        toPreventDefault();

    }
    else {
        setValid(locatio, "Valid")
    }



    if (countryVal === '') {
        setError(country, "country name can't be Empty");
        toPreventDefault();
    }
    else {
        setValid(country, "Valid")

    }

    if (categoryVal == 'none') {
        setError(category, "select category");
        toPreventDefault();
    }
    else {
        setValid(category, "Valid")
    }

}
