
const homeBtn = document.getElementById('homeBtn');
const buyBtn = document.getElementById('buyBtn');
const sellBtn = document.getElementById('sellBtn');

const homeDiv = document.getElementById('homeDiv');
const buyDiv = document.getElementById('buyDiv');
const sellDiv = document.getElementById('sellDiv');

const sellContent = document.getElementById('sellContent');

const sellForm = document.getElementById('sellForm');
const selledBooksData = document.getElementById('selledBooksData');

homeDiv.style.display = 'flex';
buyDiv.style.display = 'none';
sellDiv.style.display = 'none';

function openHome() {
    homeBtn.classList.add('activeNav');
    buyBtn.classList.remove('activeNav');
    sellBtn.classList.remove('activeNav');

    homeDiv.style.display = 'flex';
    buyDiv.style.display = 'none';
    sellDiv.style.display = 'none';
}

function openBuy() {
    homeBtn.classList.remove('activeNav');
    buyBtn.classList.add('activeNav');
    sellBtn.classList.remove('activeNav');

    homeDiv.style.display = 'none';
    buyDiv.style.display = 'flex';
    sellDiv.style.display = 'none';
}

function openSell() {
    homeBtn.classList.remove('activeNav');
    buyBtn.classList.remove('activeNav');
    sellBtn.classList.add('activeNav');

    homeDiv.style.display = 'none';
    buyDiv.style.display = 'none';
    sellDiv.style.display = 'flex';
}

function sellBook() {
    const name = document.getElementById('subjectNameInp').value;
    const branch = document.getElementById('branchInp').value;
    const curriculum = document.getElementById('curriculumInp').value;
    const semester = document.getElementById('semesterInp').value;
    const originalPrice = document.getElementById('originalPriceInp').value;
    const sellingPrice = document.getElementById('sellingPriceInp').value;
    const fullName = document.getElementById('fullNameInp').value;
    const phoneNumber = document.getElementById('phoneNumberInp').value;

    // Send POST request to the Books Database collection
    fetch('/book', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            seller: '64f83b9bc3a4f2d5a1e67e51',
            name,
            branch,
            curriculum,
            semester,
            originalPrice,
            sellingPrice,
            fullName,
            phoneNumber
        })
    })
    .then(res => res.json()) // use 'res' to avoid conflict with 'response'
    .then(data => {
        console.log(data);
        // Handle success
    })
    .catch(err => {
        console.error('Error while posting using fetch', err);
    });

    // Success message (optional)
    alert("Book has been posted successfully!");

    // Optionally, fetch user's books and display them
}
