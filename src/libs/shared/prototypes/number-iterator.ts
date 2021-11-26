/**
 * Iterate numbers as arrays.
 *
 * Example:
 *
 * ```ts
 * const range: number[] = [...10];
 *
 * console.log(range) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * console.log(range.length) // 10
 * console.log(Array.isArray(range)) // true
 * ```
 */
Number.prototype[Symbol.iterator] = function* () {
   const isInt: boolean = Number.isInteger(this);

   if (!isInt) {
      throw new Error(`Only numbers can iterate. Received: ${this}`);
   }

   if (!this) {
      throw new Error(`Zero is not iterable`);
   }

   if (this > 0) {
      for (let i = 0; i < this; i++) {
         yield i;
      }
   }

   if (this < 0) {
      for (let i = 0; i > this; i--) {
         yield i;
      }
   }
};

export {};
