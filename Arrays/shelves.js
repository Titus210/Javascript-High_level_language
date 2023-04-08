const shelf1 = [
    {
        name:'name1',
        shelf: 'a'
    },
    {
        name:'name2',
        shelf: 'a'
    }
]
const shelf2 = [
    {
        name:'name3',
        shelf: 'b'
    },
    {
        name:'name4',
        shelf: 'b'
    }
]

const allBooks = [...shelf1, ...shelf2];

const filter = books =>shelf => books.filter(
    b =>{
         return b.shelf == shelf
    }
)

const filterBy = filter(allBooks);
const bookOnShelf = filterBy('b');

console.log(bookOnShelf);
