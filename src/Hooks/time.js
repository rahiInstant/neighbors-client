let currentPage = 5;
let numberOfPage = 10;

const newArry = [
  currentPage,
  ...[1, 2].map((item) => {
    if (numberOfPage - currentPage >= 3) {
      return currentPage + item;
    } else if (numberOfPage - currentPage < 3) {
        //
        
    }
  }),
];

console.log(newArry);
