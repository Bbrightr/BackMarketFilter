import { smartPhones, laptops } from './data.js';

const smartphoneCategory = document.getElementById('smartphone-category');
const laptopCategory = document.getElementById('laptop-category');

const smartphoneModal = document.getElementById('smartphones-modal')
const laptopModal = document.getElementById('laptops-modal')


document.addEventListener('mouseover', function(e){
    if (e.target.id === "smartphone-category") {
        smartPhonesCatPopUp()
        // console.log("mouse moved over Smartphones");
    } else if (e.target.id === "laptop-category"){
        // console.log("mouse moved over laptop-category")
        laptopCatPopUp()
    }
})



function smartPhonesCatPopUp(){
    smartphoneModal.innerHTML = `
        <div class="category-modal" id="smartphones-modal">
            <h5 class="modal-title">Categories</h5>
            <div class="general-modal" >
                <div class="sub-category">
                    <img src="img/iphones.png" alt="iPhones">
                    <p>iPhones</p>
                </div>
                <div class="sub-category">
                    <img src="./img/samsung.png" alt="Samsung Galaxy">
                    <p>Samsung</p>
                </div>
                <div class="sub-category">
                    <img src="./img/otherBrands.png" alt="Other Brands">
                    <p>Other Brands</p>
                </div>
            </div>
        </div>`

    
}

function laptopCatPopUp(){
    smartphoneModal.innerHTML = `
        <div class="category-modal" id="laptops-modal">
            <h5 class="modal-title">Categories</h5>
            <div class="general-modal">
                <div class="sub-category">
                    <img src="./img/macbooks.png" alt="MacBook">
                    <p>MacBooks</p>
                </div>
                <div class="sub-category">
                    <img src="./img/windowslaptop.png" alt="Windows Laptop">
                    <p>Windows</p>
                </div>
                <div class="sub-category">
                    <img src="./img/chromebook.png" alt="Chromebook">
                    <p>Chromebooks</p>
                </div>
            </div>
        </div>`

    
}

        