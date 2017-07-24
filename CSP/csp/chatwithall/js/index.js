const myName = 'abc';

function printMessage ({ date = Date.now(), name, text, avatar = "" }) {

    let block = document.querySelector(".messages");

    block.innerHTML += `<div class="message">

        <div class="col-12 headline">

        <div class="avatar" style="background-image: url(${ avatar })"></div>

        <div class="body">

            <div class="headline">

                <span class="date">${ new Date(date).toLocaleString() }</span>,

                <span class="name">${ name }</span>

            </div>

            <div class="col-12 text">${ text }</div>

        </div>

    </div>`;

    document.body.scrollTop = 99999999;

}



document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector(".input");

    input.addEventListener("keydown", (event) => {

        if (input.value && event.keyCode === 13) {

                printMessage({name: myName,

                text:input.value});

            input.value = "";

        }

    });

});
