let radio1 = document.querySelector(".size1")
let radio2 = document.querySelector(".size2")
let radio3 = document.querySelector(".size3")
let radio4 = document.querySelector(".size4")
let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let calc = document.querySelector(".calc")
let price = document.querySelector(".price")
let art = document.querySelector(".art")
let file = document.querySelector(".file")
let molbert = document.querySelector(".molbert")
let buy = document.querySelector(".buy")
let empty = document.querySelector(".empty")
let pridbatu = document.querySelector(".pridbatu")
let buyform = document.querySelector(".buyform")
let buyfform = document.querySelector(".buyfform")
let buymenu = document.querySelector(".buymenu")
let nova = document.querySelector(".nova")
let nova2 = document.querySelector(".nova2")
let tel = document.querySelector(".tel")
let paint = document.querySelector(".paint")
let polotno = document.querySelector(".polotno")
let ramka = document.querySelector(".ramka")
let novaP = document.querySelector(".novaP")
let paintPrice = document.querySelector(".paintPrice")
let polotnoPrice = document.querySelector(".polotnoPrice")
let ramkaPrice = document.querySelector(".ramkaPrice")
let novaPrice = document.querySelector(".novaPrice")
let sizeP = document.querySelector(".sizeP")
let expensive = document.querySelector("input[name='expensive']")
let border = document.querySelector("input[name='border']")
let delivery = document.querySelector("input[name='delivery']")

radio1.onclick = () => {
    text1.value = '30'
    text2.value = '30'
    art.style.width="423px"
    art.style.height="423px"
    molbert.style.paddingBottom="38px"  
}

radio2.onclick = () => {
    text1.value = '30'
    text2.value = '90'
    art.style.width="423px"
    art.style.height="450px"
    molbert.style.paddingBottom="65px"  

}

radio3.onclick = () => {
    text1.value = '90'
    text2.value = '120'
    art.style.width="450px"
    art.style.height="465px"
    molbert.style.paddingBottom="80px"  
}

radio4.onclick = () => {
    text1.value = '90'
    text2.value = '150'
    art.style.width="450px"
    art.style.height="480px"
    molbert.style.paddingBottom="95px"  
}

file.onchange = () => {
    const openfile = file.files[0]; // 0 = get the first file
    console.log(openfile);
    let url = window.URL.createObjectURL(openfile);
    console.log(url)
    art.style.backgroundImage="url('"+url+"')"
    art.style.backgroundSize="contain"
    art.style.backgroundRepeat="no-repeat"
    art.style.backgroundPosition="center"
}

calc.onclick = () => {
    price.innerText = (+text1.value * +text2.value)/3
    paintPrice.innerText = (+text1.value * +text2.value)/3 + " грн"
    sizeP.innerText = (+text1.value +"x" +text2.value)

    if (expensive.checked) {
        price.innerText = +price.innerText + 35
        polotno.style.display="block"
        polotnoPrice.style.display="block"
    }
    
    if (border.checked) {
        price.innerText = +price.innerText + 10
        ramka.style.display="block"
        ramkaPrice.style.display="block"
    }
    
    if (delivery.checked) {
        price.innerText = +price.innerText + 40
        nova.style.display="block"
        nova2.style.display="block"
        novaP.style.display="block"
        novaPrice.style.display="block"
    }

    buy.style.display="flex"
    empty.style.display="none"

    paint.style.display="block"
    paintPrice.style.display="block"
}

pridbatu.onclick = () => {
    buyform.style.display="flex"
}

tel.onclick = () => {
    buyfform.style.display="flex"
}

/*
    <option>А.Р. Крим</option>
    <option>Вінниця</option>
    <option>Дніпро </option>
    <option>Донецьк</option>
    <option>Житомир</option>
    <option>Запоріжжя</option>
    <option>Івано-Франківськ</option>
    <option>Київ</option>
    <option>Кропивницький</option>
    <option>Луганськ</option>
    <option>Луцьк</option>
    <option>Львів</option>
    <option>Миколаїв</option>
    <option>Одеса</option>
    <option>Полтава</option>
    <option>Рівне</option>
    <option>Суми</option>
    <option>Тернопіль</option>
    <option>Ужгород</option>
    <option>Харків</option>
    <option>Херсон</option>
    <option>Хмельницький</option>
    <option>Черкаси</option>
    <option>Чернівці</option>
    <option>Чернігів</option>
*/