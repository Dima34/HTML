function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
console.log(`set cookie, value = `, value);
  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  console.log(`upd cookie - `,updatedCookie);
  document.cookie = updatedCookie;
}

function getOrderList(array){
    let orderArr=[]
    array.forEach(el=>{
        orderArr.push(el.id)
    })

    return orderArr;
}

function createArrayFromOrder(orderArr, itemsArr){
    let array = []

    orderArr.forEach(orderEl=>{
        itemsArr.forEach(itemEl=>{
            if(itemEl.id == orderEl){
                array.push(itemEl)
            }
        })
    })

    return array
}

function getArrayFromString(string){
    return string.split(",")
}

function isOldArray(items, idArr){
    let isOld = true;

    if(items.length != idArr.length){
        isOld = false
    } else{
        idArr.forEach(id=>{
            let contains = false;
    
            items.forEach(item=>{
                if(item.id == id){
                    contains = true;
                }
            })
    
            if(contains == false){
                isOld = false
            }
        })
    }
    

    return isOld ? true : false    
}

function fillContainer(container, innerString){
    container.innerHTML = innerString;
}

function getElementLine(image, link){
    return `<a href="${link}" class="item">
        <div class="align"><img src="${image}" alt="item"></div>
    </a>
    `
}

function getElemsLineFromArr(itemsArr){
    let line = ""
    
    itemsArr.forEach(el=>{
        line+=getElementLine(el.image, el.link)
    })

    return(line)
}

function createElements(items){
    const itemList = createArrayFromOrder(getArrayFromString(getCookie("itemsOrder")), items);
    fillContainer(container, getElemsLineFromArr(itemList));
}

function getTimeInSeconds(time){
    return time.getTime() / 1000
}

const updateTime = 2 //Time in minutes after which time will update
const container = document.getElementById("card_container");
const containerInner = container.querySelectorAll("div")
let items = []

if(containerInner.length > 0){
    containerInner.forEach((el,index)=>{
        console.log()
        console.log()
        items.push({
            image: el.querySelector("img").getAttribute("src"),
            link: el.querySelector("a").getAttribute("href"),
            id:index
        })
    })
}

if(items.length > 0){
    if(getCookie("time") == undefined){
        console.log(`undef`);
        const shuffeledArr = shuffle(items)
        const orderList = getOrderList(shuffeledArr);

        setCookie("time", `${getTimeInSeconds(new Date())}`)
        setCookie("itemsOrder", `${orderList}`)
        setCookie("max-age", `${3600}`)
        console.log(`cookie - `, document.cookie);

        createElements(items);
    }

    let orderArr =  getArrayFromString(getCookie("itemsOrder"))
    const isOld = isOldArray(items, orderArr)


    if(isOld){
        createElements(items);
    } else{
        const shuffeledArr = shuffle(items)
        const orderList = getOrderList(shuffeledArr);

        setCookie("time", `${getTimeInSeconds(new Date())}`)
        setCookie("itemsOrder", `${orderList}`)
        setCookie("max-age", `${3600}`)

        createElements(items);
    }

    const currentDate = getTimeInSeconds(new Date());
    const cookieTime = getCookie("time")
    const timeDifferanceInMin = -(cookieTime - currentDate) / 60
    console.log(`differance - `, timeDifferanceInMin);

    if(timeDifferanceInMin >= updateTime){
        const shuffeledArr = shuffle(items)
        const orderList = getOrderList(shuffeledArr);

        setCookie("time", `${getTimeInSeconds(new Date())}`)
        setCookie("itemsOrder", `${orderList}`)
        setCookie("max-age", `${3600}`)

        createElements(items);
    }

}





