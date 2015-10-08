/**
 * Created by Michael Spencer on 10/8/2015.
 */

/* exported primeFactors */
/**
 * Finds the factors for a given number
 * @param num the number  to look at
 * returns the larges prime factor
 */
var primeFactors = function(num)
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
  return (factors[factors.length - 1]);
};
