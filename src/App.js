import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  
  validateNumber(number){
    const specialCharacters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
    const specialCharacter = specialCharacters.test(number);
    const isNumber = isNaN(number);
    const space = number.includes(" ");
    const thousandUnit = !(number%1000 === 0);
    if(specialCharacter || isNumber || space || thousandUnit) throw new Error("[ERROR] 숫자의 형식이 잘못돼었습니다.");
  }

  makeLotto(lottoQuantity){
    const userLotto = [];
    for(let count = 0; count<lottoQuantity;count++) {
      const lottoNumberArray = Random.pickUniqueNumbersInRange(1,45,6);
      userLotto.push(lottoNumberArray.sort((a,b) => a-b));
    }
    for(let count = 0; count< userLotto.length ; count++){
      Console.print(userLotto[count]);
    }
  }

  async play() {
    const purchaseMoney = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");

    this.validateNumber(purchaseMoney);
    const lottoQuantity = purchaseMoney / 1000;
    Console.print("\n" + lottoQuantity + "개를 구매했습니다.");
    this.makeLotto(lottoQuantity);
    let winningLotto = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    winningLotto = winningLotto.split(',').join('');
    let lotto = new Lotto(winningLotto);
    let bonousNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    lotto.addBonousNumber(bonousNumber);
  }
}

export default App;
