// const list = document.querySelector('.item:last-Child')
// console.dir(list);


// list.style.color = 'red'



// parent child relation 

const grandPanel = document.querySelector('.todo-list')
console.log(grandPanel);

const parent = grandPanel.children
console.log(parent)

const children = parent[1].children

console.log(children)



// child to parent 

const child = document.querySelector('.item');
const parentEl = child.parentElement
console.log(parentEl.parentElement);


// child to grand paret 

const child1 = document.querySelector('.item')
const grandEl = child1.closest('.todo-list')

console.log(grandEl) // same way te result


// sibling or brother ke khuje ber kora 

const childone = document.querySelector('.item')
console.dir(child1)
const childtwo = childone.nextElementSibling


console.log(childtwo)