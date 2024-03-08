export function htmlOsszeAllit(lista) {
/* itt állítjuk össze a html kódot stringként */
/* elérési út, kép címe */
let txt=""
for(let index=0; index<lista.length; index++){
    txt+=`<div class="kep">
            <div><img src="${lista[index].kep}" alt="${lista[index].cim}"</img>
            </div>`;

}
console.log(txt);
return txt
}
