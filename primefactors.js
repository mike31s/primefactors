/**
 * Created by mike on 10/8/2015.
 */

/**
 * Finds the factors for a given number
 * @param num the number  to look at
 * returns the larges prime factor
 */
var projectEulerThree = function(num)
{
  var factors = [];
  var divider = 2;
  while (num >1)
  {
    while (num % divider === 0)
    {
      factors.push(divider);
      num/=divider;
    }
    divider++;
  }
 // console.log(factors);
  return (factors[factors.length - 1]);
};
console.log (projectEulerThree(10));
console.log (projectEulerThree(239));