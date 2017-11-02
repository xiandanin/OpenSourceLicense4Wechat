// pages/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    permissions: [
      {
        id: 1,
        name: "商业用途",
        description: "该软件和衍生物可用于商业用途"
      }, {
        id: 2,
        name: "分发",
        description: "该软件可以被分发"
      }, {
        id: 3,
        name: "修改",
        description: "该软件可以被修改"
      }, {
        id: 4,
        name: "私用",
        description: "该软件可以被私用"
      }, {
        id: 5,
        name: "专利授权",
        description: "该许可证提供了贡献者明确授予的专利权"
      }
    ],
    condition: [
      {
        name: "许可和版权声明",
        description: "许可和版权声明的副本，必须包含在软件中。"
      },
      {
        name: "状态变更",
        description: "对代码所做的更改必须记录。"
      },
      {
        name: "公开源码",
        description: "必须公开源代码。"
      }, {
        name: "相同许可证",
        description: "在发布软件时，修改必须以相同的许可证发布。 在某些情况下，可能会使用类似的或相关的许可证，或者这种情况可能不适用于使用该软件作为库的作品。"
      }
    ],
    limit: [
      {
        name: "责任",
        description: "作者不承担使用后的风险及后果。"
      },
      {
        name: "商标使用",
        description: "不允许使用作者的商标。"
      },
      {
        name: "保证",
        description: "不提供任何保证。"
      }
    ],
    show_result: null,
    result: [
      {
        id: "1",
        license_name: "BSD License",
        description: "BSD开源协议是一个给于使用者很大自由的协议。基本上使用者可以”为所欲为”,可以自由的使用，修改源代码，也可以将修改后的代码作为开源或者专有软件再发布。<br/><br/>但”为所欲为”的前提当你发布使用了BSD协议的代码，或则以BSD协议代码为基础做二次开发自己的产品时，需要满足三个条件：<br/>    如果再发布的产品中包含源代码，则在源代码中必须带有原来代码中的BSD协议。<br/>    如果再发布的只是二进制类库/软件，则需要在类库/软件的文档和版权声明中包含原来代码中的BSD协议。<br/>    不可以用开源代码的作者/机构名字和原来产品的名字做市场推广。<br/><br/>BSD 代码鼓励代码共享，但需要尊重代码作者的著作权。BSD由于允许使用者修改和重新发布代码，也允许使用或在BSD代码上开发商业软件发布和销售，因此是对商业集成很友好的协议。而很多的公司企业在选用开源产品的时候都首选BSD协议，因为可以完全控制这些第三方的代码，在必要的时候可以修改或者二次开发。",
        related_links: ["https://opensource.org/licenses/BSD-3-Clause"],
        permission_index: [0, 1, 2, 3],
        condition_index: [0],
        limit_index: [0, 1, 2]
      }, {
        id: "2",
        license_name: "Apache Licence 2.0",
        description: "Apache 协议 2.0 和别的开源协议相比，除了为用户提供版权许可之外，还有专利许可，对于那些涉及专利内容的开发者而言，该协议最适合。<br/><br/>Apache 协议还有以下需要说明的地方:<br/><br/><b>永久权利</b><br/>一旦被授权，永久拥有。<br/><b>全球范围的权利</b><br/>在一个国家获得授权，适用于所有国家。假如你在美国，许可是从印度授权的，也没有问题。<br/><b>授权免费，且无版税</b><br/>前期，后期均无任何费用。<br/><b>授权无排他性</b><br/>任何人都可以获得授权<br/><b>授权不可撤消</b><br/>一旦获得授权，没有任何人可以取消。比如，你基于该产品代码开发了衍生产品，你不用担心会在某一天被禁止使用该代码。<br/><br/>",
        related_links: ["https://choosealicense.com/licenses/apache-2.0",
          "https://opensource.org/licenses/Apache-2.0"],
        permission_index: [0, 1, 2, 4, 3],
        condition_index: [0, 1],
        limit_index: [0, 1, 2]

      }, {
        id: "3",
        license_name: "GNU Lesser General Public License",
        description: "GNU 还有另外一种协议，叫做 LGPL （Lesser General Public Licence），它对产品所保留的权利比 GPL 少，总的来说，LGPL 适合那些用于非 GPL 或非开源产品的开源类库或框架。因为 GPL 要求，使用了 GPL 代码的产品必须也使用 GPL 协议，开发者不允许将 GPL 代码用于商业产品。LGPL 绕过了这一限制。",
        related_links: ["https://choosealicense.com/licenses/lgpl-3.0",
          "https://opensource.org/licenses/lgpl-license"],
        permission_index: [0, 1, 2, 4, 3],
        condition_index: [2, 0, 3, 1],
        limit_index: [0, 2]
      }, {
        id: "4",
        license_name: "MIT License",
        description: "MIT 协议可能是几大开源协议中最宽松的一个，核心条款是：<br/><br/>该软件及其相关文档对所有人免费，可以任意处置，包括使用，复制，修改，合并，发表，分发，再授权，或者销售。唯一的限制是，软件中必须包含上述版权和许可提示。<br/><br/>这意味着：<br/><br/>你可以自由使用，复制，修改，可以用于自己的项目。<br/>可以免费分发或用来盈利。<br/>唯一的限制是必须包含许可声明。<br/><br/>MIT 协议是所有开源许可中最宽松的一个，除了必须包含许可声明外，再无任何限制。",
        related_links: ["https://choosealicense.com/licenses/mit",
          "https://opensource.org/licenses/MIT"],
        permission_index: [0, 1, 2, 3],
        condition_index: [0],
        limit_index: [0, 2]
      }, {
        id: "5",
        license_name: "Mozilla Public License 2.0",
        description: "MPL是The Mozilla Public License的简写，是1998年初Netscape的 Mozilla小组为其开源软件项目设计的软件许可证。MPL许可证出现的最重要原因就是，Netscape公司认为GPL许可证没有很好地平衡开发者对源代码的需求和他们利用源代码获得的利益。同著名的GPL许可证和BSD许可证相比，MPL在许多权利与义务的约定方面与它们相同（因为都是符合OSIA 认定的开源软件许可证）。",
        related_links: ["https://choosealicense.com/licenses/mpl-2.0/",
          "https://opensource.org/licenses/MPL-2.0"],
        permission_index: [0, 1, 2, 4, 3],
        condition_index: [2, 0, 3],
        limit_index: [0, 1, 2]
      }, {
        id: "6",
        license_name: "GNU General Public License",
        description: "GNU General Public Licence (GPL) 有可能是开源界最常用的许可模式。GPL 保证了所有开发者的权利，同时为使用者提供了足够的复制，分发，修改的权利：<br/><b>可自由复制</b><br/>你可以将软件复制到你的电脑，你客户的电脑，或者任何地方。复制份数没有任何限制。<br/><b>可自由分发</b><br/>在你的网站提供下载，拷贝到U盘送人，或者将源代码打印出来从窗户扔出去（环保起见，请别这样做）。<br/><b>可以用来盈利</b><br/>你可以在分发软件的时候收费，但你必须在收费前向你的客户提供该软件的 GNU GPL 许可协议，以便让他们知道，他们可以从别的渠道免费得到这份软件，以及你收费的理由。<br/><b>可自由修改</b><br/>如果你想添加或删除某个功能，没问题，如果你想在别的项目中使用部分代码，也没问题，唯一的要求是，使用了这段代码的项目也必须使用 GPL 协议。<br/><br/>需要注意的是，分发的时候，需要明确提供源代码和二进制文件，另外，用于某些程序的某些协议有一些问题和限制，你可以看一下 @PierreJoye 写的 Practical Guide to GPL Compliance 一文。使用 GPL 协议，你必须在源代码代码中包含相应信息，以及协议本身。",
        related_links: ["https://choosealicense.com/licenses/gpl-3.0",
          "https://opensource.org/licenses/gpl-license"],
        permission_index: [0, 1, 2, 4, 3],
        condition_index: [2, 0, 3, 1],
        limit_index: [0, 2]
      }
    ]
  },
  /**
   * 赋值显示的数组
   */
  newShowArrayByIndexArray: function (data_array, index_array) {
    var array = new Array();
    for (var i = 0, len = index_array.length; i < len; ++i) {
      array[i] = data_array[index_array[i]];
    }
    return array;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var result_id = option.result_id;
    var result_array = this.data.result;
    var all_permissions = this.data.permissions;
    var all_condition = this.data.condition;
    var all_limit = this.data.limit;
    for (var i = 0, len = result_array.length; i < len; ++i) {
      var result_item = result_array[i];
      //找出结果
      if (result_item.id == result_id) {
        //赋值显示的权限 条件 限制
        result_item.permissions = this.newShowArrayByIndexArray(all_permissions, result_item.permission_index);
        result_item.condition = this.newShowArrayByIndexArray(all_condition, result_item.condition_index);
        result_item.limit = this.newShowArrayByIndexArray(all_limit, result_item.limit_index);

        var links = result_item.related_links;
        result_item.related_links[links.length] = "http://www.cnbeta.com/articles/tech/107523.htm";
        result_item.related_links[links.length] = "http://www.ruanyifeng.com/blog/2011/05/howtochoosefreesoftwarelicenses.html";

        this.setData({
          show_result: result_item
        });
        break;
      }
    }
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