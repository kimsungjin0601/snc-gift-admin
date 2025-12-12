const formatNumberWithComma = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
  formatNumberWithComma
}