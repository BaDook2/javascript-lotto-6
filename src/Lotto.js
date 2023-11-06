class Lotto {
  #numbers;
  
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  

  #validate(numbers) {
    const specialCharacters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    const isNumbersSet = (new Set(numbers)).size !==6;
    const isNumber = isNaN(numbers);
    const hasSpecialCharacters = specialCharacters.test(numbers);
    if(isNumbersSet || isNumber || hasSpecialCharacters) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #checkBonousNumber(bonousNumber){
    const isNotOneNumber = bonousNumber.length !== 1;
    const isOverlapNumber = this.#numbers.includes(bonousNumber);
    const isNotANumber = isNaN(bonousNumber);
    if(isNotOneNumber || isOverlapNumber || isNotANumber) throw new Error("[ERROR] 보너스 숫자가 잘못된 형식입니다.");
  }

  addBonousNumber(bonousNumber){
    this.#checkBonousNumber(bonousNumber);
    this.#numbers += this.bonousNumber;
  }


}

export default Lotto;
