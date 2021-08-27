function Circle(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      let matchPoint = Point;
      let mX = matchPoint.x,
        mY = matchPoint.y;

      let origianlPoint = center;
      let oX = origianlPoint.x,
        oY = origianlPoint.y;

      console.log(mX, mY, oX, oY);
      if (Math.sqrt((oX - mX) * (oX - mX) + (oY - mY) * (oY - mY)) < radius) {
        return true;
      } else {
        return false;
      }
    },
  };
}

function Point(x, y) {
  return { x, y };
}
