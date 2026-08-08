import { smartPhones, laptops } from './data.js';

const smartphoneCategory = document.getElementById('smartphone-category');
const laptopCategory = document.getElementById('laptop-category');

const smartphonesModal = document.getElementById('smartphones-modal');
const laptopsModal = document.getElementById('laptops-modal');



smartphoneCategory.addEventListener('onFiltersReceived', displaySmartphones);

function displaySmartphones() {
    smartphonesModal.classList.remove('hide');}




