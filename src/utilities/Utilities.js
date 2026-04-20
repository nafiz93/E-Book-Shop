export const formatMillions = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }

  if (num >= 100000 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  }
};
