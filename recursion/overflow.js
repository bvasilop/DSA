'use strict';

function overflow(n) {
  console.log(n);
  overflow(n + 1);
}
overflow(0);