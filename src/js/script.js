const arr = {
    list:[]
};

const input = document.querySelector('input');
const button = document.querySelector('button');
const textList = document.querySelector('.promo__list');
const parentTextList = document.querySelector('.promo__listing');


button.addEventListener('click', (event) =>{
    let newText = input.value;
    if(newText){
        arr.list.push(newText);
        clickNewText(arr.list, parentTextList);
        input.value = '';
    }
    
});

document.querySelectorAll('.promo__list').forEach((list, i) =>{
    list.addEventListener('click', () =>{
        list.remove();
        arr.list.splice(i, 1);
    });
});

textList.addEventListenerAll('.promo__list')
function clickNewText(text, parent){
    parent.innerHTML = '';
    text.forEach(item => {
        parent.innerHTML += `
        <li class="promo__list">${item}
        </li>
        `
    });
}
clickNewText(arr.list, parentTextList);
