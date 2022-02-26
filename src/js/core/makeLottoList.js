import Lotto from './lotto.js';
import {
  RANDOM_MIN,
  RANDOM_MAX,
  NUMBER_LIST_LENGTH,
  LOTTO_PRICE,
} from '../constants/constant.js';
export const makeLottoList = lottoPrice => {
  const lottoList = [];
  while (lottoList.length !== calculateGameCount(lottoPrice)) {
    const numberList = makeRandomNumberList();
    if (isOverlapLottoNumber(numberList)) {
      lottoList.push(new Lotto(numberList));
    }
  }
  return lottoList;
};

export const calculateGameCount = value => {
  return value / LOTTO_PRICE;
};

const makeRandomNumberList = () => {
  return Array.from(
    { length: NUMBER_LIST_LENGTH },
    () => Math.floor(Math.random() * (RANDOM_MAX - RANDOM_MIN)) + RANDOM_MIN,
  );
};

export const isOverlapLottoNumber = lottoNumbers => {
  return lottoNumbers.length === new Set(lottoNumbers).size;
};
