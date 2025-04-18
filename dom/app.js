// ¿En tu páis de origen es normal dejar propina? No porque somos muy agarrados.

const billAmount = document.querySelector("#bill-amount");

const percentageTip = document.querySelector("#percentage-tip");

const tipAmount = document.querySelector("#tip-amount");

const total = document.querySelector("#total");

const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
    const billValue = Number(billAmount.value);
    const percentage = Number(percentageTip.value / 100);

    // Hay que convertir los valores iniciales a número porque el input por defecto es un string

    console.log(billValue, percentage);
    
    tip = billValue * percentage;
    console.log(tip);

    tipAmount.value = tip.toFixed(2);


    total.value = (billValue + tip).toFixed(2);
    console.log(total.value);
})
