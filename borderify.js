// console.info(window);
// console.info(window.localStorage);
// console.info(window.localStorage.getItem("bilibili_player_settings"));
let bilibili_player_settings = {
    setting_config: {
        type: "canvas",
        opacity: "0.80",
        fontfamily: "SimHei, 'Microsoft JhengHei'",
        fontfamilycustom: "",
        bold: true,
        preventshade: false,
        fontborder: "0",
        speedplus: 1,
        dmask: true,
        speedsync: false,
        fontsize: 1,
        fullscreensync: false,
        danmakuArea: 100,
        fullscreensend: false,
        defquality: 0,
        sameaspanel: false,
        upDm: false
    },
    video_status: {
        autopart: "",
        playtype: 1,
        highquality: true,
        widescreensave: false,
        iswidescreen: false,
        blackside_state: true,
        autoplay: false,
        autoplay_reddot_status: true,
        panoramamode: true,
        panoramamode_reddot_status: true,
        videospeed: 1,
        volume: 1.0
    },
    block: {
        status: true,
        aiblock: true,
        ailevel: 3,
        type_scroll: true,
        type_top: true,
        type_bottom: true,
        type_reverse: true,
        type_guest: true,
        type_color: true,
        function_normal: true,
        function_subtitle: true,
        function_special: true,
        cloud_level: 2,
        cloud_source_video: true,
        cloud_source_partition: true,
        cloud_source_all: true,
        size: 0,
        regexp: false,
        list: [
            {
                t: "user",
                v: "d1bfcb1",
                s: true,
                id: 5752902
            }
        ],
        dmflag: true,
        last_uid: "68466354"
    },
    message: {
        system: true,
        bangumi: true,
        news: true
    },
    subtitle: {
        fontsize: 1,
        color: 16777215,
        backgroundopacity: 0.4,
        shadow: "0",
        position: "bc",
        bilingual: false,
        scale: true,
        isclosed: false,
        fade: false
    },
    player_icon: {
        url1_json: "",
        url2_json: "",
        hash1: "",
        hash2: ""
    },
    guide: {}
};
console.info(localStorage.getItem("bilibili_player_settings"));
