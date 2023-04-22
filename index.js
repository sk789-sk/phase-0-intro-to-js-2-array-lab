// Write your solution here!

const cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return cats
}

function appendCat(name){
    const newarr = [...cats]
    newarr.push(name)
    return newarr
}

function prependCat(name){
    const newarr = [...cats]
    newarr.unshift(name)
    return newarr
}

function removeLastCat(){
    const newarr = cats.slice(0,-1)
    return newarr
}

function removeFirstCat(){
    const newarr = cats.slice(1)
    return newarr
}

/*function removeLastCat(array){ #test wants specifically the cat array 
    const newarr = array.slice(0,-1)
    console.log(array)
    console.log(newarr)
    return newarr
}
removeLastCat(cats)
*/
/*function appendCat (name){
    const newarr = [...cats]
    newarr.splice(0,0,name) 
    console.log(cats)
    console.log(newarr)
    return newarr
}

appendCat('broom')
*/
