const homeBtn = document.getElementById('homeBtn')
const buyBtn = document.getElementById('buyBtn')
const sellBtn = document.getElementById('sellBtn')

const homeDiv = document.getElementById('homeDiv')
const buyDiv = document.getElementById('buyDiv')
const sellDiv = document.getElementById('sellDiv')

const sellContent = document.getElementById('sellContent')

const sellForm = document.getElementById('sellForm')
const selledBooksData = document.getElementById('selledBooksData')


homeDiv.style.display = 'flex'
buyDiv.style.display = 'none'
sellDiv.style.display = 'none'

function openHome() {
    homeBtn.classList.add('activeNav')
    buyBtn.classList.remove('activeNav')
    sellBtn.classList.remove('activeNav')

    homeDiv.style.display = 'flex'
    buyDiv.style.display = 'none'
    sellDiv.style.display = 'none'

}

function openBuy() {
    homeBtn.classList.remove('activeNav')
    buyBtn.classList.add('activeNav')
    sellBtn.classList.remove('activeNav')

    homeDiv.style.display = 'none'
    buyDiv.style.display = 'flex'
    sellDiv.style.display = 'none'
}

function openSell() {
    homeBtn.classList.remove('activeNav')
    buyBtn.classList.remove('activeNav')
    sellBtn.classList.add('activeNav')

    homeDiv.style.display = 'none'
    buyDiv.style.display = 'none'
    sellDiv.style.display = 'flex'
}
function sellBook(){
    //clear out the content in the sell content div
    
    //display form

    //send post requests to the Books Database collection

    //success message

    //fetch user's books and display them
}