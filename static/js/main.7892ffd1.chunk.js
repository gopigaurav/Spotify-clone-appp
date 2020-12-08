(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{157:function(e,t,a){e.exports=a(453)},161:function(e,t,a){},162:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(161),a(24)),i=a(131),s=a.n(i),m=Object(n.createContext)(),u=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(m.Provider,{value:Object(n.useReducer)(t,a)},c)},p=function(){return Object(n.useContext)(m)},E=a(139),f=a.n(E),y=a(137),d=a.n(y),_=a(140),v=a.n(_),g=a(132),b=a.n(g),S=a(141),T=a.n(S),h=a(143),N=a.n(h),O=a(138),k=a.n(O),I=a(142),j=a.n(I),P=(a(162),a(465)),w=a(466);var L=function(e){var t=e.spotify,a=p(),c=Object(o.a)(a,2),l=c[0],i=(l.token,l.item),s=l.playing,m=c[1];Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){s?(t.pause(),m({type:"SET_PLAYING",playing:!1})):(t.play(),m({type:"SET_PLAYING",playing:!0}))};return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__left"},r.a.createElement("img",{className:"footer__albumLogo",src:null===i||void 0===i?void 0:i.album.images[0].url,alt:null===i||void 0===i?void 0:i.name}),i?r.a.createElement("div",{className:"footer__songInfo"},r.a.createElement("h4",null,i.name),r.a.createElement("p",null,i.artists.map((function(e){return e.name})).join(", "))):r.a.createElement("div",{className:"footer__songInfo"},r.a.createElement("h4",null,"No song is playing"),r.a.createElement("p",null,"..."))),r.a.createElement("div",{className:"footer__center"},r.a.createElement(b.a,{className:"footer__green"}),r.a.createElement(d.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),s?r.a.createElement(k.a,{onClick:u,fontSize:"large",className:"footer__icon"}):r.a.createElement(f.a,{onClick:u,fontSize:"large",className:"footer__icon"}),r.a.createElement(v.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),r.a.createElement(T.a,{className:"footer__green"})),r.a.createElement("div",{className:"footer__right"},r.a.createElement(P.a,{container:!0,spacing:2},r.a.createElement(P.a,{item:!0},r.a.createElement(j.a,null)),r.a.createElement(P.a,{item:!0},r.a.createElement(N.a,null)),r.a.createElement(P.a,{item:!0,xs:!0},r.a.createElement(w.a,{"aria-labelledby":"continuous-slider"})))))};a(168),a(169),a(170);var Y=function(e){var t=e.option,a=void 0===t?"test":t,n=e.Icon;return r.a.createElement("div",{className:"sidebarOption"},n&&r.a.createElement(n,{className:"sidebarOption__icon"}),n?r.a.createElement("h4",null,a):r.a.createElement("p",null,a))},A=a(144),C=a.n(A),M=a(58),R=a.n(M),x=a(145),G=a.n(x),z="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("7ba5f88ac19e44ab96934d71609f2a8b","&redirect_uri=").concat("https://gopigaurav.github.io/Spotify-clone-appp/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true");var U=function(){var e,t=p(),a=Object(o.a)(t,2),n=a[0].playlists;return a[1],console.log(n),r.a.createElement("div",{className:"sidebar"},r.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),r.a.createElement(Y,{Icon:C.a,option:"Home"}),r.a.createElement(Y,{Icon:R.a,option:"Search"}),r.a.createElement(Y,{Icon:G.a,option:"Your Library"}),r.a.createElement("br",null),r.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),r.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return r.a.createElement(Y,{option:e.name})})))},F=(a(171),a(172),a(467));var B=function(e){e.spotify;var t=p(),a=Object(o.a)(t,2),n=a[0].user;return a[1],r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__left"},r.a.createElement(R.a,null),r.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})),r.a.createElement("div",{className:"header__right"},r.a.createElement(F.a,{alt:null===n||void 0===n?void 0:n.display_name,src:null===n||void 0===n?void 0:n.images[0].url}),r.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))};a(173);var D=function(e){var t=e.track,a=e.playSong;return r.a.createElement("div",{className:"songRow",onClick:function(){return a(t.id)}},r.a.createElement("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),r.a.createElement("div",{className:"songRow__info"},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))},K=a(146),V=a.n(K),W=a(147),J=a.n(W),H=a(148),$=a.n(H);var q=function(e){var t=e.spotify,a=p(),n=Object(o.a)(a,2),c=n[0].discover_weekly,l=n[1],i=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){l({type:"SET_ITEM",item:e.item}),l({type:"SET_PLAYING",playing:!0})}))}))};return r.a.createElement("div",{className:"body"},r.a.createElement(B,{spotify:t}),r.a.createElement("div",{className:"body__info"},r.a.createElement("img",{src:null===c||void 0===c?void 0:c.images[0].url,alt:""}),r.a.createElement("div",{className:"body__infoText"},r.a.createElement("h1",null,"PLAYLIST"),r.a.createElement("p",null,"Gopi"),r.a.createElement("a",{className:"play__button ",href:""},"PLAY"))),r.a.createElement("div",{className:"body__songs"},r.a.createElement("div",{className:"body__icons"},r.a.createElement(V.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:4ezRLVdNoeFUBffarPa4wD"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){l({type:"SET_ITEM",item:e.item}),l({type:"SET_PLAYING",playing:!0})}))}))}}),r.a.createElement(J.a,{fontSize:"large"}),r.a.createElement($.a,null)),null===c||void 0===c?void 0:c.tracks.items.map((function(e){return r.a.createElement(D,{playSong:i,track:e.track})}))))};var Q=function(e){var t=e.spotify;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player__body"},r.a.createElement(U,null),r.a.createElement(q,{spotify:t})),r.a.createElement(L,{spotify:t}))};a(174),a(175);var X=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),r.a.createElement("a",{href:z},"LOGIN TO SPOTIFY"))},Z=new s.a;var ee=function(){var e=p(),t=Object(o.a)(e,2),a=t[0].token,c=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(Z.setAccessToken(t),c({type:"SET_TOKEN",token:t}),Z.getPlaylist("4ezRLVdNoeFUBffarPa4wD").then((function(e){return c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),Z.getMyTopArtists().then((function(e){return c({type:"SET_TOP_ARTISTS",top_artists:e})})),c({type:"SET_SPOTIFY",spotify:Z}),Z.getMe().then((function(e){c({type:"SET_USER",user:e})})),Z.getUserPlaylists().then((function(e){c({type:"SET_PLAYLISTS",playlists:e})})))}),[a,c]),r.a.createElement("div",{className:"app"},!a&&r.a.createElement(X,null),a&&r.a.createElement(Q,{spotify:Z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(6),ae=(a(176),function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(te.a)(Object(te.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(te.a)(Object(te.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(te.a)(Object(te.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(te.a)(Object(te.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});default:return e}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:ae},r.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.7892ffd1.chunk.js.map