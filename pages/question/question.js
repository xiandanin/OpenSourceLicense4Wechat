// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "srollHeight": 0,
    "scroll_into_view": "",
    "show_questions": [],
    "questions": [
      {
        "id": 1,
        "title": "他人修改源码后,是否可以闭源？",
        "choose": [
          {
            "id": 1,
            "content": "可以",
            "checked": true,
            "redirect_id": 2
          },
          {
            "id": 2,
            "content": "不可以",
            "redirect_id": 3
          }
        ]
      },
      {
        "id": 2,
        "title": "新增代码是否采用同样许可证？",
        "choose": [
          {
            "id": 1,
            "content": "是",
            "result_id": 6
          },
          {
            "id": 2,
            "content": "否",
            "redirect_id": 4
          }
        ]
      },
      {
        "id": 3,
        "title": "每个修改过的文件，是否都必须放置版权说明？",
        "choose": [
          {
            "id": 1,
            "content": "是",
            "result_id": 2
          },
          {
            "id": 2,
            "content": "否",
            "redirect_id": 5
          }
        ]
      },
      {
        "id": 4,
        "title": "是否需要对源码的修改之处，提供说明文档？",
        "choose": [
          {
            "id": 1,
            "content": "是",
            "result_id": 5
          },
          {
            "id": 2,
            "content": "否",
            "result_id": 3
          }
        ]
      },
      {
        "id": 5,
        "title": "衍生软件是否可以用你的名字促销？",
        "choose": [
          {
            "id": 1,
            "content": "可以",
            "result_id": 4
          },
          {
            "id": 2,
            "content": "不可以",
            "result_id": 1
          }
        ]
      }
    ]
  },
  findQuestionIndexById: function (array, questionId) {
    for (var i = 0, len = array.length; i < len; ++i) {
      if (array[i].id == questionId) {
        return i;
      }
    }
  },
  radioChange: function (e) {
    console.log(e)
    var question_index = e.currentTarget.dataset.questionIndex;
    console.log(question_index)
    var question_id = e.currentTarget.dataset.questionId;
    var redirect_id = e.currentTarget.dataset.redirectId;
    var resultId = e.currentTarget.dataset.resultId;
    var checkedId = e.currentTarget.dataset.id;
    var show_questions = this.data.show_questions;
    var all_questions = this.data.questions;

    //有跳转问题id
    if (redirect_id > 0) {
      var redirect_index = this.findQuestionIndexById(all_questions, redirect_id);

      //选项状态
      var radioItems = show_questions[question_index].choose;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        var checked = radioItems[i].id == checkedId;
        radioItems[i].checked = checked;
      }

      show_questions[question_index].choose = radioItems;

      //重新设置列表
      var add_index = question_index + 1;
      var new_array = new Array();
      show_questions[add_index] = all_questions[redirect_index];
      for (var i = 0, len = add_index + 1; i < len; ++i) {
        new_array[i] = show_questions[i];
      }
      show_questions = new_array;

      //刷新状态
      var last_index = show_questions.length - 1;
      this.setData({
        show_questions: show_questions,
        scroll_into_view: "v_" + last_index
      });
    }else if (resultId > 0) {
      //如果没有问题跳转id 有结果id 就去结果页面
      wx.navigateTo({
        url: '../result/result?result_id=' + resultId,
      })
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var items = [];
    items[0] = this.data.questions[0]
    this.setData({
      show_questions: items
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var height = res.windowHeight;
        /*
        that.setData({
          srollHeight: height
        });
        */
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})