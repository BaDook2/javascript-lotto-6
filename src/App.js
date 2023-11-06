import { Console, Random } from "@woowacourse/mission-utils";

class App {
  
  validateNumber(number){
    const specialCharacters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    const specialCharacter = specialCharacters.test(number);
    const rightNumber = isNaN(number);
    const space = number.includes(" ");
    const thousandUnit = !(number%1000 === 0);
    if(specialCharacter || rightNumber || space || thousandUnit) throw new Error("[ERROR] 숫자의 형식이 잘못돼었습니다.");
  }
  async play() {
    const purchaseMoney = await Console.readLineAsync("구입 금액을 입력해 주세요.");
    this.validateNumber(purchaseMoney);

  }
}

export default App;
