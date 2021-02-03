export const getNextNthIndexInArray = (indexCount, currentIndex, array) => {
    let targetIndex = currentIndex;
    for(let i=0; i<indexCount; i++){
      if(targetIndex<array.length-1){
        targetIndex++;
      }else{
        targetIndex=0;
      }
    }
    return targetIndex;
}