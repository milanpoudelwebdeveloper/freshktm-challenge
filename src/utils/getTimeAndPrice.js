export const getTimeAndPrice = (cryptoHistory) => {
  const timeLine = [];
  const prices = [];
  cryptoHistory?.forEach(({ priceUsd, time }) => {
    prices.push(priceUsd);
    timeLine.push(new Date(time).toLocaleDateString());
  });
  return { timeLine, prices };
};
