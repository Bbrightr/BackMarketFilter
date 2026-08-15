import { smartPhones, laptops } from './data.js';

const smartphoneCategory = document.getElementById('smartphone-category');
const laptopCategory = document.getElementById('laptop-category');

const smartphoneModal = document.getElementById('smartphones-modal')


smartphoneCategory.addEventListener('mouseover', function(){
    smartphoneModal.innerHTML = `
        <div class="category-modal" id="smartphones-modal">
            <h5 class="modal-title">Categories</h5>
            <div class="smartphones-modal" >
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

    
})

laptopCategory.addEventListener('mouseover', function(e){
    console.log(e)
})