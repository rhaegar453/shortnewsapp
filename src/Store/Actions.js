import * as actions from "./ActionTypes";


export const likeArticle = articleId => {
  return {
    type: actions.LIKE_ARTICLE,
    payload: articleId
  };
};

export const dislikeArticile = articleId => {
  return {
    type: actions.DISLIKE_ARTICLE,
    payload: articleId
  };
};

export const bookMarkArticle = articleId => {
  return {
    type: actions.BOOKMARK_ARTICLE,
    payload: articleId
  };
};

export const removeBookmark= articleId=>{
  return{
    type:actions.REMOVE_BOOKMARK,
    payload:articleId
  }
}

export const modalToggle = articleId => {
    console.log('Toggling the modal')
  if (articleId) {
    return {
      type: actions.TOGGLE_MODAL,
      payload: articleId
    };
  } else {
    return {
      type: actions.TOGGLE_MODAL
    };
  }
};
