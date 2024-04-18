export function ArrayPlusDelay(array: any, delegate: (i: any) => void, delay: number) {
  var i = 0;

  // seed first call and store interval (to clear later)
  var interval = setInterval(function () {
    // each loop, call passed in function
    delegate(array[i]);

    // increment, and if we're past array, clear interval
    if (i++ >= array.length - 1) clearInterval(interval);
  }, delay);
}