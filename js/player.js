document.getElementById('select-player-messi').addEventListener('click', function () {
    const selectPlayerlength = document.querySelectorAll('#selected-player li')
    if (selectPlayerlength.length < 5) {

        // Create Disable Button Conditon

        const buttonDisabled = document.getElementById('select-player-messi');
        buttonDisabled.setAttribute('disabled', true);
        buttonDisabled.style.backgroundColor = 'gray';

        // Player Name Get in
        const firstPlayer = document.getElementById('select-messi');
        const element = firstPlayer.innerText;

        // Adding Property
        const selectPlayerMessi = document.getElementById('selected-player');
        const createElement = document.createElement('li');
        createElement.innerText = element;

        selectPlayerMessi.appendChild(createElement);

    } else {
        alert("Opps Sorry!!You have selected more extra players");
    }
});

document.getElementById("select-player-neymar").addEventListener('click', function () {
    const selectPlayerlength = document.querySelectorAll('#selected-player li');
    if (selectPlayerlength.length < 5) {
        // Create Disable Button Conditon
        const buttonDisabled = document.getElementById("select-player-neymar");
        buttonDisabled.setAttribute("disabled", true);
        buttonDisabled.style.backgroundColor = 'gray';

        // Player Name Get in
        const secondPlayer = document.getElementById("select-neymar");
        const element = secondPlayer.innerText;

        // Adding Property
        const selectPlayerNeymar = document.getElementById("selected-player");
        const createElement = document.createElement('li');
        createElement.innerText = element;

        selectPlayerNeymar.appendChild(createElement);

    } else {
        alert("Opps Sorry!!You have selected more extra players");
    }
});

document.getElementById("select-player-mbappe").addEventListener('click', function () {
    const selectPlayerlength = document.querySelectorAll('#selected-player li');
    if (selectPlayerlength.length < 5) {

        // Create Disable Button Conditon
        const buttonDisabled = document.getElementById("select-player-mbappe");
        buttonDisabled.setAttribute("disabled", true);
        buttonDisabled.style.backgroundColor = 'gray';

        // Player Name Get in
        const thirdPlayer = document.getElementById("select-mbappe");
        const element = thirdPlayer.innerText;

        // Adding Property
        const selectPlayerMbappe = document.getElementById("selected-player");
        const createElement = document.createElement('li');
        createElement.innerText = element;

        selectPlayerMbappe.appendChild(createElement);

    } else {
        alert("Opps Sorry!!You have selected more extra players");
    }
});
document.getElementById("select-player-machado").addEventListener('click', function () {
    const selectPlayerlength = document.querySelectorAll('#selected-player li');
    if (selectPlayerlength.length < 5) {
        // Create Disable Button Conditon
        const buttonDisabled = document.getElementById("select-player-machado");
        buttonDisabled.setAttribute("disabled", true);
        buttonDisabled.style.backgroundColor = 'gray';

        // Player Name Get in
        const fourthPlayer = document.getElementById("select-machado");
        const element = fourthPlayer.innerText;
        // Adding Property
        const selectPlayerMachado = document.getElementById("selected-player");
        const createElement = document.createElement('li');
        createElement.innerText = element;

        selectPlayerMachado.appendChild(createElement);

    } else {
        alert("Opps Sorry!!You have selected more extra players");
    }
});
document.getElementById("select-player-ramos").addEventListener('click', function () {
    const selectPlayerlength = document.querySelectorAll('#selected-player li');
    if (selectPlayerlength.length < 5) {
        // Create Disable Button Conditon
        const buttonDisabled = document.getElementById("select-player-ramos");
        buttonDisabled.setAttribute("disabled", true);
        buttonDisabled.style.backgroundColor = 'gray';

        // Player Name Get in
        const fifthPlayer = document.getElementById("select-ramos");
        const element = fifthPlayer.innerText;
        // Adding Property
        const selectPlayerRamos = document.getElementById("selected-player");
        const createElement = document.createElement('li');
        createElement.innerText = element;

        selectPlayerRamos.appendChild(createElement);

    } else {
        alert("Opps Sorry!!You have selected more extra players");
    }
});

document.getElementById("select-player-sanches").addEventListener('click', function () {
    const selectPlayerlength = document.querySelectorAll('#selected-player li');
    if (selectPlayerlength.length < 5) {
        // Create Disable Button Conditon
        const buttonDisabled = document.getElementById("select-player-sanches");
        buttonDisabled.setAttribute("disabled", true);
        buttonDisabled.style.backgroundColor = 'gray';

        // Player Name Get in
        const sixthPlayer = document.getElementById("select-sanches");
        const element = sixthPlayer.innerText;
        // Adding Property
        const selectedPlayer = document.getElementById('selected-player');
        const createElement = document.createElement('li');
        createElement.innerText = element;

        selectedPlayer.appendChild(createElement);

    } else {
        alert("Opps Sorry!!You have selected more extra players");
    }
});

