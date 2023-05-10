type Test = {
  x: number, 
  y: number,
}

type Test2 = {
  y: number; 
  name: string; 
}

export const sumDuplicate = (arr: Test[]) => {
  const map = arr.reduce((acc, val) => {
     if(acc.has(val.x)){
        acc.set(val.x, acc.get(val.x) + val.y);
     }else{
        acc.set(val.x, val.y);
     }
     return acc;
  }, new Map());
  const result: Test[] = []
  map.forEach((key, val) => result.push({x: val, y: key})); 
  return result; 
};

export const sumDuplicate2 = (arr: Test2[]) => {
  const map = arr.reduce((acc, val) => {  
    if(acc.has(val.name)){
       acc.set(val.name, acc.get(val.name) + val.y);
    }else{
       acc.set(val.name, val.y);
    }
    return acc;
 }, new Map());
 const result: Test2[] = []
 map.forEach((val, key) => result.push({y: val, name: key})); 
 return result;
}
