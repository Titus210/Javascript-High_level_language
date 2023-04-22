function bark(sound){
    sound = typeof sound !== 'undefined' ? sound : "woof"
    console.log(sound)
}

bark()