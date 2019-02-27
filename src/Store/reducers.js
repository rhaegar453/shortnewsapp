import data from "../data";
import * as actions from "./ActionTypes";
import update from 'react-addons-update';

const initialStore = {
  articles: data,
  loading: false,
  bookmarks: [],
  modalState: false,
  modalData: {}
};

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
              liked:{$set:true}
            }
        })

    case actions.DISLIKE_ARTICLE:
        return update(state,{
          articles:{
            [action.payload-1]:{
              dislikes:{$apply:function(data){return data+1}}
            }
          },
          modalData:{
            liked:{$set:false}
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
        bookmarks:state.bookmarks.filter(data=>data.id!==action.payload)//Add immer
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


    //   return {
    //     ...state,
    //     bookmarks:state.bookmarks.filter(data=>data.id!==action.payload),
    //     articles:{
    //       ...state.articles,
    //       newArticle
    //     }
    //   }
    // }
    default:
      return state;
  }
};

export default reducer;
