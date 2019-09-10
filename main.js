console.log('Sorting Hat');

const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML += stringToPrint;
}

const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const formMaker = () => {
    const formString = `
        <form>
                  <h3>Enter First Year's Name</h3>
                    <div class="d-flex justify-content-center">
                       <div class="col-auto">
                         <label class="sr-only" for="inlineFormInput">Name</label>
                         <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Neville Longbottom">
                       </div>
                       <div class="col-auto">
                         <button type="sort" class="btn btn-primary mb-2" id="inputButton">Sort!</button>
                       </div>
        </form>
    `;
    printToDom ("form", formString)
    document.getElementById("jumbo").className = "d-none";
};

document.getElementById("startSorting").addEventListener("click", () => {
    formMaker ();
})

const sortingCardBuilder = () => {
      //build string of sorting cards
    const randomHouse = houses[Math.floor(Math.random()*houses.length)];
    let formInput = document.getElementById("inlineFormInput").value;
    let domString = `
          <div class="card">
            <h1 class="card-name">${formInput}</h1>
            <p class="card-house">${randomHouse}</p>
            <button type="button" class="btn btn-dark expel">Expel</button>
          </div>
          `;
        printToDom ("sorted-student-list", domString);

        // Call activateExpelListeners here
        activateExpelListeners();
  }

//document.getElementById("inputButton").addEventListener("click", sortingCardBuilder);

document.getElementById("form").addEventListener("click", (event) => {
    if (event.target.id ==="inputButton"){
        sortingCardBuilder()
    }
})

// Define activateExpelListeners here
const activateExpelListeners = () => {
    const expelButtons = document.getElementsByClassName("expel")
    for (let i = 0; i < expelButtons.length; i++) {
        const currentButton = expelButtons[i]
        currentButton.addEventListener("click", (event) => {
            console.log(event.target.parentElement);
            event.target.parentElement.remove();
        })
    }
}

