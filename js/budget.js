function getElementValueById(element) {
    const elementGetAmount = document.getElementById(element);
    const elementGetAmountString = elementGetAmount.value;
    const getAmount = parseFloat(elementGetAmountString);
    return getAmount;
}

// Calculate the Total Player Cost

document.getElementById('calculate-button').addEventListener('click', function () {
    const perplayerAmount = getElementValueById('player-amount');

    const selectedPlayer = document.querySelectorAll('#selected-player li');

    const totalPlayerCost = selectedPlayer.length * perplayerAmount;


    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = totalPlayerCost;


});

// Calculate the Total Budget 

document.getElementById('calculate-total-button').addEventListener('click', function () {
    const managerAmountCost = getElementValueById('manager-amount');
    const coachAmountCost = getElementValueById('coach-amount');

    const playerAmountString = document.getElementById('player-expense').innerText;
    const playerAmountCost = parseFloat(playerAmountString);
    const totalCostAmount = playerAmountCost + managerAmountCost + coachAmountCost;

    const totalamount = document.getElementById('total-budget');
    totalamount.innerText = totalCostAmount;

});
