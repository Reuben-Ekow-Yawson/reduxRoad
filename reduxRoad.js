const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  const roadReducer = (state = initialWagonState, action) => {
    switch(action.type){
    case 'gather':{
      return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        }
      }
      case 'travel':{
        return {
          ...state,
          supplies: state.supplies -(action.payload * 20),
          distance: state.distance +(action.payload * 10),
          days: state.days + action.payload
        }
      }
      case 'tippedWagon':{
        return {
          ...state,
          supplies: state.supplies - 30,
          // distance: state.distance,
          days: state.days + 1
        }
      }
      case 'sell':{
        return{
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash +5
        }
      }
      case 'buy':{
        return{
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash -15
        }
      }
      case 'theft':{
        return{
          ...state,
          cash: state.cash / 2
        }
      }
    
      default:{
        return state;
      }
    }
  }
  let wagon = roadReducer(undefined, {})
  console.log(wagon)
  
  wagon = roadReducer(wagon, {type: 'travel', payload: 1})
  console.log(wagon)
  
  wagon = roadReducer(wagon, {type: 'gather'})
  console.log(wagon)
  
  wagon = roadReducer(wagon, {type: 'tippedWagon'})
  console.log(wagon)
  
  wagon = roadReducer(wagon, {type: 'travel', payload:3})
  console.log(wagon)
  
  wagon = roadReducer(wagon, {type: 'sell'})
  console.log(wagon);
  
  wagon = roadReducer(wagon, {type: 'buy'})
  console.log(wagon);
  
  wagon = roadReducer(wagon,{type: 'theft'})
  console.log(wagon);
  