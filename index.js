let mainArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let tictak_container = document.querySelector('.tictak_container');
let Data = document.querySelector('.Data');
let Reset = document.querySelector('#reset');
let X = true;


let checkRow = (a, b) => {
    if (b == 0) {
        if (mainArr[a][b] == mainArr[a][b + 1] && mainArr[a][b] == mainArr[a][b + 2]) {
            // console.log('b with ', mainArr[a][b], ' won')
            return 1;
        }
    }
    if (b == 1) {
        if (mainArr[a][b] == mainArr[a][b - 1] && mainArr[a][b] == mainArr[a][b + 1]) {
            // console.log('b with ', mainArr[a][b], ' won')
            return 1;
        }
    }
    if (b == 2) {
        if (mainArr[a][b] == mainArr[a][b - 2] && mainArr[a][b] == mainArr[a][b - 1]) {
            // console.log('b with ', mainArr[a][b], ' won')
            return 1;
        }
    }
}


let checkColumn = (a, b) => {
    // console.log(a)
    if (b == 0) {
        if (mainArr[0][b] == mainArr[1][b] && mainArr[0][b] == mainArr[2][b]) {
            // console.log('a with ', mainArr[a][b], ' won')
            // console.log(a)
            mainArr[0][b]
            return 1;
        }
    }
    if (b == 1) {
        if (mainArr[1][b] == mainArr[0][b] && mainArr[1][b] == mainArr[2][b]) {
            console.log(mainArr[1][b])
            return 1;
        }
    }
    if (b == 2) {
        if (mainArr[2][b] === mainArr[1][b] && mainArr[2][b] === mainArr[0][b]) {
            console.log(mainArr[2][b])
            return 1;
        }
        // console.log(a)
    }
}

let checkDiag = (a, b) => {
    if (a == 0) {
        if ((mainArr[a][0] == mainArr[a + 1][1] && mainArr[a][0] == mainArr[a + 2][2]) ||
            (mainArr[a][2] == mainArr[a + 1][1] && mainArr[a][2] == mainArr[a + 2][0])) {
            // console.log('b with ', a, b, ' won')
            return 1;
        }
    }
    if (a == 1) {
        if ((mainArr[a][1] == mainArr[a - 1][0] && mainArr[a][1] == mainArr[a + 1][2]) ||
            (mainArr[a][1] == mainArr[a - 1][2] && mainArr[a][1] == mainArr[a + 1][0])) {
            // console.log('b with ', a, b, ' won')
            return 1;
        }
    }
    if (a == 2) {
        if ((mainArr[a][0] == mainArr[a - 1][1] && mainArr[a][0] == mainArr[a - 2][2]) ||
            (mainArr[a][2] == mainArr[a - 1][1] && mainArr[a][2] == mainArr[a - 2][0])) {
            console.log(mainArr[a - 1][1])
            return 1;
        }
    }
}


let disabled = () => {
    buttons = document.querySelectorAll('.box')
    for (item of buttons) {
        item.disabled = true;
    }
}


let checkDraw = () => {
    let counter =9
    buttons = document.querySelectorAll('.box')
    for (item of buttons) {
        if(item.innerText == 'O' || item.innerText == 'X'){
            counter--
            if(counter == 0){
                return 1
            }
        }
        
    }
}




for (let i = 0; i < mainArr.length; i++) {
    for (let j = 0; j < mainArr.length; j++) {
        const element = mainArr[i][j];
        tictak_container.innerHTML += `<button class='box' id='${j}' value='${i}'></button>`

    }

    buttons = document.querySelectorAll('.box')
    for (item of buttons) {
        item.addEventListener('click', (e) => {

            if (X == true) {
                Data.innerHTML = `<h5 class='Data_h5'>PLayer 'O' Turn</h5>`
                e.target.innerText = 'X'
                e.target.disabled = true;
                let a = parseInt(e.target.value);
                let b = parseInt(e.target.id);
                mainArr[a][b] = 'X'
                e.target.classList.add('added')

                if(checkDraw()){
                    Data.innerHTML = `<h5 class='Data_h5'>Game Draw</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                }
                if (checkRow(a, b)) {
                    console.log("Player X won")
                    Data.innerHTML = `<h5 class='Data_h5'>Player X won</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'

                    disabled()
                }

                if (checkColumn(a, b)) {
                    console.log("Player X won")
                    console.log(a, b)
                    Data.innerHTML = `<h5 class='Data_h5'>Player X won</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                    disabled()
                }
                if (checkDiag(a, b)) {
                    console.log("Player X won")
                    Data.innerHTML = `<h5 class='Data_h5'>Player X won</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                    disabled()
                }


                X = false;

            }
            else {
                Data.innerHTML = `<h5 class='Data_h5'>PLayer 'X' Turn</h5>`
                e.target.innerText = 'O'
                e.target.disabled = true;
                e.target.classList.add('added')
                let a = parseInt(e.target.value);
                let b = parseInt(e.target.id);
                mainArr[a][b] = 'O'

                if(checkDraw()){
                    Data.innerHTML = `<h5 class='Data_h5'>Game Draw</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                }
                if (checkRow(a, b)) {
                    console.log("Player O won")
                    Data.innerHTML = `<h5 class='Data_h5'>Player O won</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                    disabled()
                }

                if (checkColumn(a, b)) {
                    console.log("Player O won")
                    Data.innerHTML = `<h5 class='Data_h5'>Player O won</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                    disabled()
                }
                if (checkDiag(a, b)) {
                    console.log("Player O won")
                    Data.innerHTML = `<h5 class='Data_h5'>Player O won</h5>`
                    Reset.innerText = 'Play Again'
                    Reset.style.background = '#0ccd0c'
                    Reset.style.color = 'white'
                    disabled()
                }



                X = true;
            }

        })
    }


}

