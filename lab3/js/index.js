class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    let newNoteText = document.createElement('p');
    let newNoteBtn = document.createElement('a');

    newNoteText.appendChild(document.createTextNode(title));
    newNoteBtn.appendChild(document.createTextNode('Remove'))

    newNote.className = 'card';
    newNoteBtn.className = 'card-remove';

    newNoteBtn.addEventListener('click', this.remove.bind(newNote));

    newNote.appendChild(newNoteText);
    newNote.appendChild(newNoteBtn);
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    let notes = document.querySelector(".notes");

    notes.appendChild(this.element);
    
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove()
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    this.btnAdd = document.querySelector("#btnAddNote");
    // Als je klikt op button, wordt functie create aangemaakt
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let noteText = document.getElementById("txtAddNote").value;

    console.log(noteText);

    if (noteText) {
      let note = new Note(noteText);
      note.add();
      note.saveToStorage();
      this.reset();
    }
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.getElementById("txtAddNote").value = '';
  }
  
}

let app = new App();