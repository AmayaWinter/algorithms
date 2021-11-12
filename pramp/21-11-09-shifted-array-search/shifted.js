function translateIdx(curIdx, offset, arrLen) {
  if(curIdx+offset < arrLen) {
    return curIdx+offset;
  }
  else {
    return curIdx+offset-arrLen;
  }
}

function shiftedArrSearch(shiftArr, num) {
  let offset = getOffset(shiftArr);
  // let workArr = shiftArr.slice(offset).concat(shiftArr.slice(0,offset));
  // console.log('workArr', workArr);
  // let q = Math.floor(workArr.length / 2);

  const arrLen = shiftArr.length;
  for(let i = 0; i < shiftArr.length; i++) {
    // let shiftIdx = shiftArr[translateIdx(i, offset, arrLen)]);
    // if(shiftArr[shiftIdx]

  }



  // while(q !== 0) {
  //   console.log(`q: ${q} | workArr[q]: ${workArr[q]} | workArr.length: ${workArr.length}`);
  //   if(workArr[q] === num) { console.log('found at q', q); break;}
  //
  //   if(workArr[q] > num) {
  //     workArr = workArr.slice(0,q);
  //   }
  //   else {
  //     workArr = workArr.slice(q);
  //   }
  //   q = Math.floor(workArr.length / 2);
  // }
  // console.log('q',q, workArr);
}

function split(start, end, shiftArr, num) {
  if(end - start === 0) {
    return start;
  }
  let q = Math.floor((end - start) / 2);
  console.log(q);
}




function getOffset(shiftArr) {
  let leftIdx = 0;
  let rightIdx = shiftArr.length-1;
  let shiftIdx = 0;
  while(leftIdx !== rightIdx) {
    if(shiftArr[leftIdx+1] < shiftArr[leftIdx++]) {
      break;
    }
    if(shiftArr[rightIdx+1] < shiftArr[rightIdx--]) {
      break;
    }
  }

  let rightOffset = shiftArr.length - rightIdx;
  return leftIdx <= rightOffset ? leftIdx : rightOffset;
}

shiftedArrSearch([9, 12, 17, 2, 4, 5,6,7,8], 2);