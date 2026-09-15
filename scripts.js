
/*CODIGO P/ MODIFICAR PRIMEIRO SELECT*/ 
const currencySelect1 = document.querySelector(".currency-select1")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")


currencySelect1.addEventListener("change", changeCurrency1)


function changeCurrency1 () {
    const currencyName1 = document.querySelector("#currency-name1")
    const currencyImage1 = document.querySelector(".currency-img1")
    

    if (currencySelect1.value == "dolar1") {
        currencyName1.innerHTML = "Dolar Americano"
        currencyImage1.src = "./assets/dolar.png"
        currencyValueToConvert.innerHTML = "US$ 0,00"
    }

    if (currencySelect1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
        currencyValueToConvert.innerHTML = "0,00 €"
    }

    if (currencySelect1.value == "libra1") {
        currencyName1.innerHTML = "Libra Esterlina"
        currencyImage1.src = "./assets/libra.png"
        currencyValueToConvert.innerHTML = "£ 0,00"
    }

    if (currencySelect1.value == "bitcoin1") {
        currencyName1.innerHTML = "Bitcoin"
        currencyImage1.src = "./assets/bitcoin.png"
        currencyValueToConvert.innerHTML = "₿ 0,00"
    }

    if (currencySelect1.value == "real1") {
        currencyName1.innerHTML = "Real"
        currencyImage1.src = "./assets/real.png"
        currencyValueToConvert.innerHTML = "R$ 0,00"
    }

}

/*CODIGO P/ MODIFICAR SEGUNDO SELECT*/ 
const currencySelect2 = document.querySelector(".currency-select2")
const currencyValueConverted = document.querySelector(".currency-value-converted")


currencySelect2.addEventListener("change", changeCurrency2)

function changeCurrency2 () {
    const currencyName2 = document.querySelector("#currency-name2")
    const currencyImage2 = document.querySelector(".currency-img2")

    if (currencySelect2.value == "dolar2") {
        currencyName2.innerHTML = "Dolar Americano"
        currencyImage2.src = "./assets/dolar.png"
        currencyValueConverted.innerHTML = "US$ 0,00"
    }

    if (currencySelect2.value == "euro2") {
        currencyName2.innerHTML = "Euro"
        currencyImage2.src = "./assets/euro.png"
        currencyValueConverted.innerHTML = "0,00 €"
    }

    if (currencySelect2.value == "libra2") {
        currencyName2.innerHTML = "Libra Esterlina"
        currencyImage2.src = "./assets/libra.png"
        currencyValueConverted.innerHTML = "£ 0,00"
    }

    if (currencySelect2.value == "bitcoin2") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImage2.src = "./assets/bitcoin.png"
        currencyValueConverted.innerHTML = "₿ 0,00"
    }

    if (currencySelect2.value == "real2") {
        currencyName2.innerHTML = "Real"
        currencyImage2.src = "./assets/real.png"
        currencyValueConverted.innerHTML = "R$ 0,00"
    }
}


/*CODIGO P/ CONVERTER AS MOEDAS*/ 

const convertButton = document.querySelector(".convert-button")

convertButton.addEventListener("click", convertCurrency)

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    if (currencySelect1.value == "dolar1" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = " US$" + inputCurrencyValue
        currencyValueConverted.innerHTML = (inputCurrencyValue * 0.93).toFixed(2) + "€"
    }

    if (currencySelect1.value == "dolar1" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = " US$" + inputCurrencyValue
        currencyValueConverted.innerHTML = "£ " + (inputCurrencyValue * 0.78).toFixed(2)
    }

    if (currencySelect1.value == "dolar1" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = " US$" + inputCurrencyValue
        currencyValueConverted.innerHTML = "₿ " + (inputCurrencyValue * 0.000045).toFixed(8)
    }

    if (currencySelect1.value == "dolar1" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = " US$" + inputCurrencyValue
        currencyValueConverted.innerHTML = "R$ " + (inputCurrencyValue * 5.25).toFixed(2)
    }



    if (currencySelect1.value == "euro1" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = inputCurrencyValue + "€"
        currencyValueConverted.innerHTML = "US$ " + (inputCurrencyValue * 1.08).toFixed(2)
    }

    if (currencySelect1.value == "euro1" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = inputCurrencyValue + "€"
        currencyValueConverted.innerHTML = "£" + (inputCurrencyValue * 0.84).toFixed(2)
    }
    
    if (currencySelect1.value == "euro1" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = inputCurrencyValue + "€"
        currencyValueConverted.innerHTML = "R$" + (inputCurrencyValue * 6.46).toFixed(2)
    }

    if (currencySelect1.value == "euro1" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = inputCurrencyValue + "€"
        currencyValueConverted.innerHTML = "₿" + (inputCurrencyValue * 0.000085).toFixed(2)
    }



    if (currencySelect1.value == "libra1" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = "£" + inputCurrencyValue
        currencyValueConverted.innerHTML = "US$ " + (inputCurrencyValue * 0.75).toFixed(2)
    }

    if (currencySelect1.value == "libra1" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = "£" + inputCurrencyValue
        currencyValueConverted.innerHTML = (inputCurrencyValue * 0.85).toFixed(2) + "€"
    }
    
    if (currencySelect1.value == "libra1" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = "£" + inputCurrencyValue
        currencyValueConverted.innerHTML = "₿" + (inputCurrencyValue * 0.0001).toFixed(2)
    }

    if (currencySelect1.value == "libra1" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = "£" + inputCurrencyValue
        currencyValueConverted.innerHTML = "R$" + (inputCurrencyValue * 7.5).toFixed(2)
    }



    if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = "₿" + inputCurrencyValue
        currencyValueConverted.innerHTML = "US$" + (inputCurrencyValue * 93620).toFixed(2)
    }

    if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = "₿" + inputCurrencyValue
        currencyValueConverted.innerHTML = (inputCurrencyValue * 82476).toFixed(2) + "€"
    }

    if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = "₿" + inputCurrencyValue
        currencyValueConverted.innerHTML = "£" + (inputCurrencyValue * 70432).toFixed(2)
    }
    
    if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = "₿" + inputCurrencyValue
        currencyValueConverted.innerHTML = "R$" + (inputCurrencyValue * 532701).toFixed(2)
    }



    if (currencySelect1.value == "real1" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = "R$" + inputCurrencyValue
        currencyValueConverted.innerHTML = "US$" + (inputCurrencyValue * 0.18).toFixed(2)
    }

    if (currencySelect1.value == "real1" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = "R$" + inputCurrencyValue
        currencyValueConverted.innerHTML = (inputCurrencyValue * 0.15).toFixed(2) + "€"
    }

    if (currencySelect1.value == "real1" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = "R$" + inputCurrencyValue
        currencyValueConverted.innerHTML = "£" + (inputCurrencyValue * 0.13).toFixed(2)
    }

    if (currencySelect1.value == "real1" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = "R$" + inputCurrencyValue
        currencyValueConverted.innerHTML = "₿" + (inputCurrencyValue * 0.0000019).toFixed(2)
    }

}