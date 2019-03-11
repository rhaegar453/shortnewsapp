import data from "../data";
import * as actions from "./ActionTypes";
import update from 'react-addons-update';
import produce from 'immer';


const initialStore = {
  articles: data,
  loading: false,
  bookmarks: [],
  modalState: false,
  modalData: {}
};

//Producers

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case actions.LIKE_ARTICLE:
        return update(state,{
            articles:{
                [action.payload-1]:{
                    likes:{$apply:function(data){return data+1}},
                    liked:{$set:true}
                }
            },
            modalData:{
              liked:{$set:true},
              likes:{$apply:(data)=>data+1}
            }
        })

    case actions.DISLIKE_ARTICLE:
        return update(state,{
          articles:{
            [action.payload-1]:{
              likes:{$apply:function(data){return data-1}},
              liked:{$set:false}
            }
          },
          modalData:{
            liked:{$set:false},
            likes:{$apply:(data)=>data-1}
          }
        });

    case actions.BOOKMARK_ARTICLE:
        let newItem=state.articles.filter(data=>data.id==action.payload)[0];
        console.log(newItem);
      return update(state,{
        bookmarks:{$push:[newItem]},
        articles:{
          [action.payload-1]:{
            bookmarked:{$set:true}
          }
        },
        modalData:{
          bookmarked:{$set:true}
        }
      })
    case actions.REMOVE_BOOKMARK:
      return{
        ...state,
        articles:state.articles.map(item=>{
          if(item.id==action.payload){
            return {
              ...item,
              bookmarked:false
            }
          }else{
            return item
          }
        }),
        bookmarks:state.bookmarks.filter(item=>item.id!==action.payload),
        modalData:{...state.modalData, bookmarked:false}
      }

    case actions.TOGGLE_MODAL: {
      if (action.payload) {
        let modalObject = state.articles.filter(
          data => data.id == action.payload
        );
        let newObject = { ...modalObject[0] };
        return {
          ...state,
          modalData: newObject,
          modalState: !state.modalState
        };
      } else {
        return {
          ...state,
          modalState: !state.modalState,
          modalObject: state.modalData
        };
      }
    }
    
    default:
      return state;
  }
};

export default reducer;
