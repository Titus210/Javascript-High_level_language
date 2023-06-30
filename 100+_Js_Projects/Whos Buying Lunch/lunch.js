var user_names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];


function whosPaying(names) {
    var number_of_people = names.length;
    var random_person_pos = Math.floor(Math.random() * number_of_people);
    var random_person = names[random_person_pos];

    console.log(random_person)
}

whosPaying(user_names)