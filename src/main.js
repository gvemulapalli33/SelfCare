import "./styles.css";

const affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    'I am in the process of becoming the best version of myself.',
    'I have the freedom & power to create the life I desire.',
    'I choose to be kind to myself and love myself unconditionally.',
    'My possibilities are endless.'
];

const mantras = [
    'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
    'Don’t let yesterday take up too much of today.',
    'Every day is a second chance.',
    'Tell the truth and love everyone.',
    'I am free from sadness.',
    'I am enough.'
];

class Medidate {

    constructor() {
        this.affirmations = affirmations;
        this.mantras = mantras;
        this.$meditateMsg = document.querySelector('.message');
        this.$button = document.querySelector('.btn');
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener('click', (event) => {
            this.enableButton(event);
            this.showMessage(event);
        });
    }

    enableButton(event) {
        if (event.target.checked) {
            this.$button.disabled = false;
        }
    }

    showMessage(event) {
        if (event.target.classList.contains('btn')) {
            event.preventDefault();
            let radioButtons = document.forms.messageForm.elements.messageType;
            let [selectedType] = Array.from(radioButtons).filter((radioElm) => radioElm.checked);
            let {id} = selectedType;
            let randomMsgIndex = Math.floor(Math.random() * this[id].length);
            let randomMsg = this[id][randomMsgIndex];
            this.$meditateMsg.innerHTML = `<p class="msg-align">${randomMsg}</p>`;
        }
    }
}


new Medidate();