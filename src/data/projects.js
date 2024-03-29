module.exports = [
  {
    id: 'work',
    category: '工作專案',
    projects: [
      {
        name: '漢字樹 Chinese Tree',
        desc: [
          '以 Nuxt2 作為框架。',
          '有網頁版與 App 版 (Webview 打包)，開發時須注意跨平台支援度。',
          '使用許多音檔與圖片檔，需注意效能與流暢度。',
          '具有多款小遊戲，需要大量邏輯撰寫。',
          '多語系：繁體中文、簡體中文、英文。',
        ],
        links: [
          { name: '網頁板', url: 'https://www.chinesetree.com.tw/' },
          {
            name: 'IOS版下載連結',
            url: 'https://apps.apple.com/hk/app/%E6%BC%A2%E5%AD%97%E6%A8%B9%E9%9B%99%E8%AA%9E%E8%AD%98%E5%AD%97/id1618886858',
          },
          {
            name: 'Android版下載連結',
            url: 'https://play.google.com/store/apps/details?id=com.picnese.zhonghua&fbclid=IwAR0DsA2WO8c6p42WBOM0MP3hVpMMkBU5m66Rwgu_RqsYaO3bIDYoGNgbysI',
          },
        ],
        cover: require('assets/img/chinese-tree/index.jpg'),
        intro:
          '給小孩子或外國人學習中文字的遊戲 app / 網站，利用有趣的遊戲與可愛的動畫達到學習中文字的目的 (ps:真的非常建議註冊去玩玩看！每個帳號都有免費的課程可以玩)。',
        develop: [
          '以 Nuxt2 作為框架，使用 i18n 建立多語系版本。',
          '有網頁版與 app 版本，其中 app 是利用 Webview 打包而成，因此需與 App 部門進行溝通，並瞭解 JS 在 Webview 上的支援度，以成功運行於 IOS、Android 和 Web 上。',
          '整個專案有非常多 gif 檔和音檔，這些檔案大多來自於 API，容易有延遲問題。其中音檔部分利用 CreatJS 達到預先載入和增加流暢度的目的，而 gif 檔則在背景預先載入及增加 Loading 畫面來增加使用者體驗。',
          '小遊戲和解說字動畫因有多種情況，因此必須有撰寫較複雜的邏輯去判別符合的流程。',
        ],
        imgList: [
          {
            img: require('assets/img/chinese-tree/home.jpg'),
            desc: '課程選擇頁面，有許多部首可供挑戰。',
          },
          {
            img: require('assets/img/chinese-tree/game.jpg'),
            desc: '有猜、寫、拚、猜圖四種小遊戲，四者皆有過關條件與相對應的音效。\n例如拚字時點擊英文字需同時發音，拚完時還必須有拚出整個單字的音效、利用原生 JS 寫出拖曳效果，達到猜圖和拼字的目的。',
          },
          {
            img: require('assets/img/chinese-tree/setting.jpg'),
            desc: '學習設定具有多種設定，可以根據使用者的需求調整，例如若關閉第二語言，則須將有英文相關的部分關掉。',
          },
          {
            img: require('assets/img/chinese-tree/explaining.jpg'),
            desc: '解說字部分可能會有單字單音多詞句、單字多音多詞句等等的多種組合，因此必須撰寫一套程式碼以符合所有情況，並且必須判斷何時結束動畫，讓使用者可以點擊圖或文字重複發音。',
          },
        ],
        note: '',
        accounts: '',
      },
      {
        name: 'Vote2022 選舉平台\n九合一客製化競選官網',
        desc: [
          '前台以 Nuxt3 作為框架，後台則以 Vue3 為框架。',
          'API 資料皆經過加密處理。',
          '使用者可彈性調整頁面，需考量各種可能情況。',
          '注重 SEO 與網頁效能。',
        ],
        links: [
          { name: '官網', url: 'https://vote2022.tw/' },
          {
            name: '候選人前台連結(此為假資料，也可從官網進入)',
            url: 'https://vote2022.tw/catboss',
          },
        ],
        cover: require('assets/img/vote/a.jpg'),
        intro:
          '提供給參政候選人宣傳政見與自己的平台，提供多個版面可供選擇，還有可客製化需求的區塊。',
        develop: [
          '分為官網、前台(候選人頁面)和後台，其中官網與前台使用 Nuxt3，後台則使用 Vue3 與 Bootstrap5。',
          '前台版面因有許多版型，考量到後續維護，使用同一套 HTML 配上不同的 SCSS 去做搭配，同時也因為使用者可自由選擇是否要開啟某些資料，因此串接 api 和切板時也必須用彈性的作法去撰寫。',
          '後台有非常多資料可供使用者填寫，要時常添加使用者的防呆措施，避免使用者少填了必填值而出錯，例如：利用 vee-validate 去檢查並提醒使用者那些是必填值、在未填完必填值前先 disabled 送出的按鈕。',
          '因牽涉到金流與使用者敏感資料，因此 api 回來的資料有經過加密處理，加強資料安全性。',
          '搭配 TinyMCE 編輯器，讓使用者可以自由上傳圖片、撰寫文字和排版。',
        ],
        imgList: [
          {
            img: require('assets/img/vote/b.jpg'),
            desc: '前台 demo 前台候選人頁面，使用者可自行上傳圖片和文字介紹自己。',
          },
          {
            img: require('assets/img/vote/info.jpg'),
            desc: '前台 demo 前台候選人頁面，使用者撰寫政見與經歷，甚至可連結粉絲團貼文。',
          },
          {
            img: require('assets/img/vote/setting.jpg'),
            desc: '後台頁面，使用者填寫的資料會用於前台顯示 (圖上為假資料)。',
          },
          {
            img: require('assets/img/vote/editor.jpg'),
            desc: '後台頁面，此處使用 TinyMCE 給使用者編輯客製區塊內容與高度，另外，也可填入 URL，利用特定關鍵字就可轉換成 iframe。',
          },
          {
            img: require('assets/img/vote/index.jpg'),
            desc: '官網，可查看最新政治新聞與以前的選舉資訊。',
          },
        ],
        note: '',
        accounts: '',
      },
      {
        name: '工研院 - IEK產業情報網',
        desc: [
          '以 Nuxt2 作為框架。',
          'vimeo 影片與直播串接，需查閱 vimeo 文件。',
          '方案訂閱功能與資料結構較為複雜，需與 PM 討論各種可能情況，且必須統整後端傳來的相關資料顯示於前台畫面。',
        ],
        links: [{ name: '網站連結', url: 'https://miniiek.iek.org.tw' }],
        cover: require('assets/img/iek/index.jpg'),
        intro:
          '使用者可購買工研院開設的課程與文章，學習科技產業相關知識，有分成月付方案與限制次數購買方案。',
        develop: [
          '課程影片和直播串接 Vimeo，需查閱文件，並監聽目前直播狀態。',
          '方案訂閱部分邏輯較複雜，需判定使用者目前狀態，限制使用者降級或升級，且必須根據 API 傳回的資料去判斷目前使用者最新的方案是哪個(API是回傳全部已開啟的方案)。',
          '後端為外包工程師，因此需以通訊軟體溝通，撰寫問題時需言簡意賅說明問題點。',
        ],
        imgList: [
          {
            img: require('assets/img/iek/index.jpg'),
            desc: '首頁，可察看最新和熱門課程的資訊。',
          },
          {
            img: require('assets/img/iek/video.jpg'),
            desc: '影片頁面，需串接 Vimeo。',
          },
          {
            img: require('assets/img/iek/project.jpg'),
            desc: '方案訂閱部分較為複雜，常與 PM 與後端工程師討論流程。',
          },
        ],
        note: '',
        accounts: '',
      },
      {
        name: '總統盃 - 黑客松 (國際板)',
        desc: [
          '以 Nuxt2 作為框架。',
          '短期專案，需在兩個禮拜以內完成切板、API 串接與資料處理。',
        ],
        links: [
          {
            name: '網站連結',
            url: 'https://presidential-hackathon.taiwan.gov.tw/en/international-track/',
          },
        ],
        cover: require('assets/img/hack/index.jpg'),
        intro: '政府案子，為國際黑客松介紹與報名頁面。',
        develop: [
          '切板與邏輯雖沒有其他專案複雜，但開發時間較短，在快速開發的過程中仍要兼顧到品質。',
          '包含切版、串接 API 和等待客戶回復，兩個禮拜以內就完成 (後續雖有部分調整，但主要是客戶想改變 UI 和資料)。',
        ],
        imgList: [
          {
            img: require('assets/img/hack/index.jpg'),
            desc: '網站主頁。',
          },
          {
            img: require('assets/img/hack/apply.jpg'),
            desc: '網站報名申請頁。',
          },
        ],
        note: '',
        accounts: '',
      },
    ],
  },
  {
    id: 'self',
    category: '個人練習專案',
    projects: [
      {
        name: '運動練習菜單 Practice-list',
        desc: [
          '前端、後端 / 資料庫、UI / UX 皆為自己構想並建置。',
          '前端分成 Vue.js 2 (2020年)和 React.js 版本(2022年)。',
          '後端使用 Node.js、Express 和 MySQL。',
          'React 版本搭配 TypeScript 進行開發，使用 styled-components 撰寫樣式，使用 Formik & Yup 驗證表單',
        ],
        links: [
          {
            name: '前端 github(Vue2)',
            url: 'https://github.com/wanglala5131/practice-list-vue',
          },
          {
            name: '網站連結 (Vue2)',
            url: 'https://wanglala5131.github.io/practice-list-vue/#/signin',
          },
          {
            name: '回顧紀錄 (Vue2 & 後端)',
            url: 'https://medium.com/%E6%8B%89%E6%8B%89%E7%9A%84%E7%A8%8B%E5%BC%8F%E7%AD%86%E8%A8%98/%E9%81%8B%E5%8B%95%E8%8F%9C%E5%96%AE%E7%B6%B2%E7%AB%99-practice-list-%E5%9B%9E%E9%A1%A7-eaf577fe5b30',
          },
          {
            name: '前端 github (React)',
            url: 'https://github.com/wanglala5131/practice-list-react',
          },
          {
            name: '網站連結 (React)',
            url: 'https://wanglala5131.github.io/practice-list-react/',
          },
          {
            name: '後端 github',
            url: 'https://github.com/wanglala5131/practice-lists',
          },
        ],
        cover: require('assets/img/practice-list/home.jpg'),
        intro:
          '主要是給系/校隊或習慣有運動計畫的使用者，有編輯運動項目、製作運動菜單等功能，藉由已訂好的項目來安排菜單，可以給運動員快速安排菜單，也避免系校隊在交替隊長時遺失一些合適的練習項目。 (詳細可點進去回顧紀錄的文章)。',
        develop: [
          '前端、後端 / 資料庫、UI / UX 皆為自己構想並建置。',
          '一開始是為了給認識的球隊學妹使用，但因為有登入、CRUD 和串接 API，後來則主要當作框架練習的專案，同時也作為審視自己作為工程師以來進步多少的依據。',
          '未來如果有新的想法，會增加新功能 (也歡迎告訴我可以加什麼功能 XD)。',
        ],
        imgList: [
          {
            img: require('assets/img/practice-list/ERD.jpg'),
            desc: '整個網站的ER diagram (ERD)，參考自有購物車的網站，自己建置後端架構出來。',
          },
          {
            img: require('assets/img/practice-list/home.jpg'),
            desc: '網站主頁，可篩選類別與次類別，可將項目加進目前的暫定菜單中。',
          },
          {
            img: require('assets/img/practice-list/category.jpg'),
            desc: '類別與次類別設定頁面。',
          },
          {
            img: require('assets/img/practice-list/temp-list.jpg'),
            desc: '暫定菜單頁面，可拖曳移動每個項目的位置，也可加上組數和備註。',
          },
          {
            img: require('assets/img/practice-list/list.jpg'),
            desc: '已排菜單頁面，可再次編輯菜單，也可直接查看菜單。',
          },
        ],
        note: 'Vue 版本和後端程式碼為成為工程師之前的作品，可能有部分沒這麼直觀的寫法，請見諒QQ',
        accounts:
          '帳號：user1@example.com / 密碼：user1 \n 帳號：user2@example.com / 密碼：user2 \n 帳號：user3@example.com / 密碼：user3',
      },
      {
        name: 'Simple Twitter - 協作專案',
        desc: [
          '此為與課程夥伴共同完成的全端專案，使用 git 作為版本管理系統。',
          '利用 Node.js、Express、Handlebars、MySQL 與 Socket 建構的簡易 Twitter 專案，可註冊與登入帳號、新增推文與回覆、追蹤其他使用者等功能。',
        ],
        links: [
          {
            name: 'github',
            url: 'https://github.com/wanglala5131/twitter-fullstack-2020',
          },
          {
            name: '網站連結',
            url: 'https://radiant-headland-29348.herokuapp.com/signin',
          },
          {
            name: '回顧紀錄',
            url: 'https://medium.com/%E6%8B%89%E6%8B%89%E7%9A%84%E7%A8%8B%E5%BC%8F%E7%AD%86%E8%A8%98/%E5%BF%83%E5%BE%97-%E5%A4%9A%E4%BA%BA%E5%8D%94%E4%BD%9C%E5%B0%88%E6%A1%88-simple-twitter-6d001f5dd8d5',
          },
        ],
        cover: require('assets/img/twitter/index.jpg'),
        intro:
          '全端專案，為仿造 Twitter 做出來的兩個禮拜專案，可登入、發表新貼文、回覆貼文等功能。',
        develop: [
          '此為課程結業作品，與其他夥伴於兩個禮拜內做出的練習專案，需依照設計稿與需求做出作品，被評為當次課程最佳的作品。',
          '利用 Node.js、Express、Handlebars、MySQL 與 Socket 建構的簡易Twitter專案。',
          '有管理者與使用者兩種模式',
          '聊天室功能使用 Socket.io，為限時兩天做出的功能，須自己找資料做出需求。',
        ],
        imgList: [
          {
            img: require('assets/img/twitter/index.jpg'),
            desc: '網站主頁',
          },
        ],
        note: '為成為工程師之前的作品，可能有部分沒這麼直觀的寫法，請見諒QQ',
        accounts:
          'Admin帳號：root@example.com / 密碼：12345678 \n user帳號：user1@example.com / 密碼：12345678',
      },
      {
        name: '個人履歷 - 網站版',
        desc: [
          '以 React 為框架',
          '使用 Styled-components 撰寫樣式',
          '套件使用 Swiper、React-Scrollspy',
        ],
        links: [
          {
            name: 'github',
            url: 'https://github.com/wanglala5131/personal-website',
          },
        ],
        cover: require('assets/img/personal-website/index.jpg'),
        intro:
          '將履歷轉成網頁版，增加可讀性，另外也作為 React 和  Styled-components 練習專案',
        develop: [
          '以 React 為框架',
          '使用 Styled-components 撰寫樣式',
          '套件使用 Swiper、React-Scrollspy',
        ],
        imgList: null,
        note: '',
        accounts: '',
      },
    ],
  },
];
