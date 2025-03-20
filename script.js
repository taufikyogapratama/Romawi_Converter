const romawi_converter = (event) => {
    event.preventDefault()
    const inputan_str = document.getElementById("number").value
    const inputan = Number(inputan_str)
    let output = document.getElementById("output")
    const display_output = document.getElementById("hasil")
    if(inputan){
        if(inputan >= 4000){
            output.innerHTML = "Please enter a number less than or equal to 3999"
            display_output.style.display = "block"
            display_output.style.backgroundColor = "red"
            output.style.color = "white"
        }else if(inputan < 0){
            output.innerHTML = "Please enter a number greater than or equal to 1"
            display_output.style.display = "block"
            display_output.style.backgroundColor = "red"
            output.style.color = "white"
        }else{
            const romanNumerals = [
                { value: 1000, symbol: "M" }, { value: 900, symbol: "CM" },
                { value: 500, symbol: "D" }, { value: 400, symbol: "CD" },
                { value: 100, symbol: "C" }, { value: 90, symbol: "XC" },
                { value: 50, symbol: "L" }, { value: 40, symbol: "XL" },
                { value: 10, symbol: "X" }, { value: 9, symbol: "IX" },
                { value: 5, symbol: "V" }, { value: 4, symbol: "IV" },
                { value: 1, symbol: "I" }
            ];
        
            let result = "";
            let angka = inputan
            for (const { value, symbol } of romanNumerals) {
                while (angka >= value) {
                    result += symbol;
                    angka -= value;
                }
            }

            output.innerHTML = `${result}`
            display_output.style.display = "block"
            display_output.style.backgroundColor = "#8B5FBF"
            output.style.color = "white"
        }
    }else{
        output.innerHTML = "Please enter a valid number"
        display_output.style.display = "block"
        display_output.style.backgroundColor = "red"
        output.style.color = "white"
    }
}