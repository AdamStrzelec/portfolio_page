export const getRelativePositionOfIndex = (index, currentIndex, array) => {
    let targetIndex = currentIndex;
    let position = 0;
    for(let i=currentIndex; i<Math.floor(array.length/2)+currentIndex+1; i++){
        if(targetIndex===index){
            return position;
        }
        if(targetIndex<array.length-1){
        targetIndex++;
        }else{
        targetIndex=0;
        }
        position++;
    }
    targetIndex = currentIndex;
    position = 0;
    for(let i=currentIndex; i>currentIndex-1-Math.floor(array.length/2); i--){
        if(targetIndex===index){
            return position;
        }
        if(targetIndex>0){
        targetIndex--;
        }else{
        targetIndex=array.length-1;
        }
        position--;
    }
}