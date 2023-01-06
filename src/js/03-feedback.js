"use strict";
import throttle from 'lodash.throttle';

const filterForm = document.querySelector(`form.feedback-form`);

let writedInfo = {};
startForm();
function startForm() {
    let savedInfo = localStorage.getItem("feedback-form-state");
    if (savedInfo) {
        savedInfo = JSON.parse(savedInfo);
        Object.entries(savedInfo).forEach(([name, value]) => {
            writedInfo[name] = value
            filterForm.elements[name].value = value
        });
    };
};
filterForm.addEventListener(`submit`, formSubmit);
filterForm.addEventListener(`input`, throttle(saveLocalStorage, 500));

function formSubmit(event) {
   event.preventDefault();
    // writedInfo[event.target.name] = event.target.value;
    console.log(writedInfo);
    removeInfo();
};
function removeInfo() {
    filterForm.reset();
    localStorage.removeItem("feedback-form-state");
};
function saveLocalStorage(evt) {
   writedInfo[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(writedInfo));
};
