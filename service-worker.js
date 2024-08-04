var CACHE_NAME  = "fb-cache-v8-10";

var urlstocache =[
"./pic/7c.png",
"./pic/7c_p.png",
"./pic/7c3.png",
"./pic/7c4.png",
"./pic/7c10.png",
"./pic/10c.png",
"./pic/10c_p.png",
"./pic/void.png",
"./pic/void_p.png",
"./pic/levitate.png",
"./pic/way.png",
"./pic/way_p.png",
"./pic/3color.png",
"./pic/3color_p.png",
"./pic/4color.png",
"./pic/4color_p.png",
"./pic/5color.png",
"./pic/5color_p.png",
"./pic/l.png",
"./pic/l_p.png",
"./pic/cross.png",
"./pic/cross_p.png",
"./pic/t.png",
"./pic/t_p.png",
"./pic/many.png",
"./pic/many_p.png",
"./pic/guardbreak.png",
"./pic/rcvl.png",
"./pic/bonusatt.png",
"./pic/bonusatt_p.png",
"./pic/50more.png",
"./pic/50less.png",
"./pic/row_fire.png",
"./pic/row_water.png",
"./pic/row_wood.png",
"./pic/row_light.png",
"./pic/row_dark.png",
"./pic/row3_fire.png",
"./pic/row3_water.png",
"./pic/row3_wood.png",
"./pic/row3_light.png",
"./pic/row3_dark.png",
"./pic/combo_fire.png",
"./pic/combo_water.png",
"./pic/combo_wood.png",
"./pic/combo_light.png",
"./pic/combo_dark.png",
"./pic/combo_fire_p.png",
"./pic/combo_water_p.png",
"./pic/combo_wood_p.png",
"./pic/combo_light_p.png",
"./pic/combo_dark_p.png",
"./pic/taru.png",
"./pic/in.png",
"./pic/yo.png",
"./pic/all.png",
"./pic/all_p.png",
"./pic/voice.png",
"./pic/hp.png",
"./pic/hp_p.png",
"./pic/hp_m.png",
"./pic/team_hp.png",
"./pic/team_hp_p.png",
"./pic/team_hp_m.png",
"./pic/rcv.png",
"./pic/rcv_p.png",
"./pic/rcv_m.png",
"./pic/team_rcv.png",
"./pic/team_rcv_p.png",
"./pic/team_rcv_m.png",
"./pic/att.png",
"./pic/att_p.png",
"./pic/att_m.png",
"./pic/multi.png",
"./pic/multi_p.png",

"./pic/assist.png",
"./pic/boost.png",
"./pic/boost_p.png",
"./pic/bind.png",
"./pic/bind_p.png",
"./pic/huin.png",
"./pic/huin_p.png",
"./pic/charge.png",
"./pic/charge_p.png",
"./pic/time.png",
"./pic/time_p.png",
"./pic/time_m.png",
"./pic/autorcv.png",
"./pic/autorcv_p.png",
"./pic/bindrcv.png",
"./pic/bindrcv_p.png",
"./pic/sub_fire.png",
"./pic/sub_water.png",
"./pic/sub_wood.png",
"./pic/sub_light.png",
"./pic/sub_dark.png",
"./pic/drop_fire.png",
"./pic/drop_water.png",
"./pic/drop_wood.png",
"./pic/drop_light.png",
"./pic/drop_dark.png",
"./pic/drop_rcv.png",
"./pic/drop_fire_p.png",
"./pic/drop_water_p.png",
"./pic/drop_wood_p.png",
"./pic/drop_light_p.png",
"./pic/drop_dark_p.png",
"./pic/drop_rcv_p.png",
"./pic/combo.png",
"./pic/fall_jama.png",
"./pic/fall_jama_p.png",
"./pic/fall_doku.png",
"./pic/fall_doku_p.png",
"./pic/resist_kumo.png",
"./pic/resist_tape.png",
"./pic/resist_blind.png",
"./pic/resist_blind_p.png",
"./pic/resist_jama.png",
"./pic/resist_jama_p.png",
"./pic/resist_doku.png",
"./pic/resist_doku_p.png",
"./pic/barrier_fire.png",
"./pic/barrier_water.png",
"./pic/barrier_wood.png",
"./pic/barrier_light.png",
"./pic/barrier_dark.png",
"./pic/barrier_fire_p.png",
"./pic/barrier_water_p.png",
"./pic/barrier_wood_p.png",
"./pic/barrier_light_p.png",
"./pic/barrier_dark_p.png",
"./pic/old_bonusatt_p.png",
"./pic/old_4color.png",
"./pic/old_4color_p.png",
"./pic/na_material.png",
"./pic/na_material_p.png",
"./pic/space.png",
"./pic/space_p.png",
"./pic/syncro.png",
"./pic/transparent.png"
];

const CACHE_KEYS = [
    CACHE_NAME
  ];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME) // 上記で指定しているキャッシュ名
          .then(
          function(cache){
              return cache.addAll(urlsToCache); // 指定したリソースをキャッシュへ追加
              // 1つでも失敗したらService Workerのインストールはスキップされる
          })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => {
            return !CACHE_KEYS.includes(key);
          }).map(key => {
            // 不要なキャッシュを削除
            return caches.delete(key);
          })
        );
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    //ブラウザが回線に接続しているかをboolで返してくれる
    var online = navigator.onLine;
  
    //回線が使えるときの処理
    if(online){
      event.respondWith(
        caches.match(event.request)
          .then(
          function (response) {
            if (response) {
              return response;
            }
            //ローカルにキャッシュがあればすぐ返して終わりですが、
            //無かった場合はここで新しく取得します
            return fetch(event.request)
              .then(function(response){
                // 取得できたリソースは表示にも使うが、キャッシュにも追加しておきます
                // ただし、Responseはストリームなのでキャッシュのために使用してしまうと、ブラウザの表示で不具合が起こる(っぽい)ので、複製しましょう
                cloneResponse = response.clone();
                if(response){
                  //ここ&&に修正するかもです
                  if(response || response.status == 200){
                    //現行のキャッシュに追加
                    caches.open(CACHE_NAME)
                      .then(function(cache)
                      {
                        cache.put(event.request, cloneResponse)
                        .then(function(){
                          //正常にキャッシュ追加できたときの処理(必要であれば)
                        });
                      });
                  }else{
                    //正常に取得できなかったときにハンドリングしてもよい
                    return response;
                  }
                  return response;
                }
              }).catch(function(error) {
                //デバッグ用
                return console.log(error);
              });
          })
      );
    }else{
      //オフラインのときの制御
      event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // キャッシュがあったのでそのレスポンスを返す
            if (response) {
              return response;
            }
            //オフラインでキャッシュもなかったパターン
            return caches.match("offline.html")
                .then(function(responseNodata)
                {
                  //適当な変数にオフラインのときに渡すリソースを入れて返却
                  //今回はoffline.htmlを返しています
                  return responseNodata;
                });
          }
        )
      );
    }
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js", {
        scope: "./",
      })
      .then((registration) => {
        let serviceWorker;
        if (registration.installing) {
          
        } else if (registration.waiting) {
            skipWaiting()
        } else if (registration.active) {
          
        }
        if (serviceWorker) {
          // logState(serviceWorker.state);
          serviceWorker.addEventListener("statechange", (e) => {
            // logState(e.target.state);
          });
        }
      })
      .catch((error) => {
        // 登録時に何か問題が発生した。service-worker.js ファイルが利用できないか、
        // 構文エラーが含まれている可能性がある。
      });
  } else {
    // 現在のブラウザーはサービスワーカーに対応していない。
    // おそらく、古すぎるか、安全なコンテキストにない。
  }