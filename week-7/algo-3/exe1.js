function printStarSeries(num, count) {
  while (count--) {
    let stars = "*";
    for (let i = 0; i < num; i++) {
      console.log(stars);
      if (i != num - 1) {
        stars += "*";
      }
    }

    for (let i = 0; i < num - 1; i++) {
      stars = stars.slice(1);
      console.log(stars);
    }
  }
}

printStarSeries(5, 3);
