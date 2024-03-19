const addBookBtn = document.getElementById("add-book")
const showBooksBtn = document.getElementById('show-library')
const bookDialog = document.getElementById("book-dialog")
const outputBox = document.querySelector("output")
const selectEl = bookDialog.querySelector("select")
const dialogAddBookBtn = bookDialog.querySelector("#confirm-button") 
const myLibrary = []
// myLibrary.push('Harry Potter')
function Book(title, author, noOfPages, isRead){
    this.title = title
    this.author = author
    this.isRead = isRead
    this.noOfPages = noOfPages
}

function addBookToLibrary() {
    const inputTitle = bookDialog.querySelector('#title').value
    const inputAuthor = bookDialog.querySelector('#author').value
    const inputNoofPages = bookDialog.querySelector('#noOfPages').value
    const inputIsRead = bookDialog.querySelector('#isRead').value
    let book = new Book(inputTitle,inputAuthor,inputNoofPages,inputIsRead)
    myLibrary.push(book)

  }


  function displayBooks(){
    const tableLib = document.createElement('table')
    const header = tableLib.createTHead()
    let row0 = header.insertRow(0)
    var cell0 = row0.insertCell(0)
    cell0.innerHTML= "<b>Slno</b>"
    var cell1 = row0.insertCell(1)
    cell1.innerHTML = "<b>Title</b>"
    var cell2 = row0.insertCell(2)
    cell2.innerHTML = "<b>Author</b>"
    var cell3 = row0.insertCell(3)
    cell3.innerHTML = "<b>No of Pages</b>"
    var cell4 = row0.insertCell(4)
    cell4.innerHTML = "<b>Have you read this</b>"
    var cell5 = row0.insertCell(5)
    cell5.innerHTML = "<b>Change Read status</b>"
    var cell6 = row0.insertCell(6)
    cell6.innerHTML = "<b>Delete</b>"
    for(let i = 0; i < myLibrary.length; i++){
        let row = tableLib.insertRow(i + 1);
        row.insertCell(0).textContent = i + 1;
        row.insertCell(1).textContent = myLibrary[i].title;
        row.insertCell(2).textContent = myLibrary[i].author;
        row.insertCell(3).textContent = myLibrary[i].noOfPages;
        row.insertCell(4).textContent = myLibrary[i].isRead ? 'Yes' : 'No';
        row.insertCell(5).innerHTML = "<button onclick='changeStatus(" + i + ")'>Change Status</button>";
        row.insertCell(6).innerHTML = "<button onclick='deleteBook(" + i + ")'>Delete</button>";
    }
    outputBox.appendChild(tableLib);
  }

function changeStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    displayBooks();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal()
})
dialogAddBookBtn.addEventListener('click',(event) => {
    event.preventDefault()
    addBookToLibrary()
    bookDialog.close()
})

showBooksBtn.addEventListener('click', () =>{
    outputBox.innerHTML = ""
    displayBooks()
})









