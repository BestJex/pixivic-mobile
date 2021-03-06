import axios from '../base';

// 拉取评论
function getComments(params) {
  return axios({
    url: `${params.commentAppType}/${params.commentAppId}/comments`,
    method: 'get',
    params: { page: params.page || 1, pageSize: params.pageSize || 10 }
  });
}

// 发表评论
function makeComments(params) {
  const { parentId = 0, replyTo = 0, replyFromName, replyToName, content, platform } = params;
  return axios({
    url: `${params.commentAppType}/${params.commentAppId}/comments`,
    method: 'post',
    data: {
      parentId,
      replyTo,
      replyFromName,
      replyToName,
      content,
      platform
    }
  });
}

// 点赞
function likedComments(data) {
  return axios({
    url: `/user/likedComments`,
    method: 'post',
    data
  });
}

// 取消点赞
function canclelikedComments(param) {
  return axios({
    url: `/user/likedComments/${param.commentAppType}/${param.commentAppId}/${param.commentId}`,
    method: 'delete'
  });
}

export {
  getComments,
  makeComments,
  likedComments,
  canclelikedComments
};
