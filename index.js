import { smartPhones, laptops } from './data.js';

const smartphoneCategory = document.getElementById('smartphone-category');
const smartPhoneModal = document.getElementById('smartphones-modal');

smartphoneCategory.addEventListener('click', showSmartphoneModal);

function showSmartphoneModal() {
    smartPhoneModal.style.display = 'block';
}