const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pdf-BQ6Om6Vw.js","assets/index-CBkn0wd3.js"])))=>i.map(i=>d[i]);
import{a as e,i as t,n,r,t as i}from"./index-CBkn0wd3.js";var a=t(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),o=t(((e,t)=>{var n=a();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),s=t(((e,t)=>{t.exports=o()()})),c=t(((e,t)=>{t.exports=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t==`object`&&typeof n==`object`){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;i--!==0;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}})),l=t(((e,t)=>{t.exports=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);n!==-1&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r=t[e],i;if(r)for(i=r.length;i--;)r[i].handler(n)},e}})),u=t(((e,t)=>{t.exports=function(e,t,a){var o=document.head||document.getElementsByTagName(`head`)[0],s=document.createElement(`script`);typeof t==`function`&&(a=t,t={}),t||={},a||=function(){},s.type=t.type||`text/javascript`,s.charset=t.charset||`utf8`,s.async=`async`in t?!!t.async:!0,s.src=e,t.attrs&&n(s,t.attrs),t.text&&(s.text=``+t.text),(`onload`in s?r:i)(s,a),s.onload||r(s,a),o.appendChild(s)};function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error(`Failed to load `+this.src),e)}}function i(e,t){e.onreadystatechange=function(){this.readyState!=`complete`&&this.readyState!=`loaded`||(this.onreadystatechange=null,t(null,e))}}})),d=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(u());function r(e){return e&&e.__esModule?e:{default:e}}e.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){t(window.YT);return}else{var r=window.location.protocol===`http:`?`http:`:`https:`;(0,n.default)(r+`//www.youtube.com/iframe_api`,function(t){t&&e.trigger(`error`,t)})}var i=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){i&&i(),t(window.YT)}})},t.exports=e.default})),f=t(((e,t)=>{var n=1e3,r=n*60,i=r*60,a=i*24,o=a*365.25;t.exports=function(e,t){t||={};var n=typeof e;if(n===`string`&&e.length>0)return s(e);if(n===`number`&&isNaN(e)===!1)return t.long?l(e):c(e);throw Error(`val is not a non-empty string or a valid number. val=`+JSON.stringify(e))};function s(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var s=parseFloat(t[1]);switch((t[2]||`ms`).toLowerCase()){case`years`:case`year`:case`yrs`:case`yr`:case`y`:return s*o;case`days`:case`day`:case`d`:return s*a;case`hours`:case`hour`:case`hrs`:case`hr`:case`h`:return s*i;case`minutes`:case`minute`:case`mins`:case`min`:case`m`:return s*r;case`seconds`:case`second`:case`secs`:case`sec`:case`s`:return s*n;case`milliseconds`:case`millisecond`:case`msecs`:case`msec`:case`ms`:return s;default:return}}}}function c(e){return e>=a?Math.round(e/a)+`d`:e>=i?Math.round(e/i)+`h`:e>=r?Math.round(e/r)+`m`:e>=n?Math.round(e/n)+`s`:e+`ms`}function l(e){return u(e,a,`day`)||u(e,i,`hour`)||u(e,r,`minute`)||u(e,n,`second`)||e+` ms`}function u(e,t,n){if(!(e<t))return e<t*1.5?Math.floor(e/t)+` `+n:Math.ceil(e/t)+` `+n+`s`}})),p=t(((e,t)=>{e=t.exports=i.debug=i.default=i,e.coerce=c,e.disable=o,e.enable=a,e.enabled=s,e.humanize=f(),e.names=[],e.skips=[],e.formatters={};var n;function r(t){var n=0,r;for(r in t)n=(n<<5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}function i(t){function i(){if(i.enabled){var t=i,r=+new Date;t.diff=r-(n||r),t.prev=n,t.curr=r,n=r;for(var a=Array(arguments.length),o=0;o<a.length;o++)a[o]=arguments[o];a[0]=e.coerce(a[0]),typeof a[0]!=`string`&&a.unshift(`%O`);var s=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,r){if(n===`%%`)return n;s++;var i=e.formatters[r];if(typeof i==`function`){var o=a[s];n=i.call(t,o),a.splice(s,1),s--}return n}),e.formatArgs.call(t,a),(i.log||e.log||console.log.bind(console)).apply(t,a)}}return i.namespace=t,i.enabled=e.enabled(t),i.useColors=e.useColors(),i.color=r(t),typeof e.init==`function`&&e.init(i),i}function a(t){e.save(t),e.names=[],e.skips=[];for(var n=(typeof t==`string`?t:``).split(/[\s,]+/),r=n.length,i=0;i<r;i++)n[i]&&(t=n[i].replace(/\*/g,`.*?`),t[0]===`-`?e.skips.push(RegExp(`^`+t.substr(1)+`$`)):e.names.push(RegExp(`^`+t+`$`)))}function o(){e.enable(``)}function s(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}})),m=t(((e,t)=>{e=t.exports=p(),e.log=i,e.formatArgs=r,e.save=a,e.load=o,e.useColors=n,e.storage=typeof chrome<`u`&&chrome.storage!==void 0?chrome.storage.local:s(),e.colors=[`lightseagreen`,`forestgreen`,`goldenrod`,`dodgerblue`,`darkorchid`,`crimson`];function n(){return typeof window<`u`&&window.process&&window.process.type===`renderer`?!0:typeof document<`u`&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<`u`&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return`[UnexpectedJSONParseError]: `+e.message}};function r(t){var n=this.useColors;if(t[0]=(n?`%c`:``)+this.namespace+(n?` %c`:` `)+t[0]+(n?`%c `:` `)+`+`+e.humanize(this.diff),n){var r=`color: `+this.color;t.splice(1,0,r,`color: inherit`);var i=0,a=0;t[0].replace(/%[a-zA-Z%]/g,function(e){e!==`%%`&&(i++,e===`%c`&&(a=i))}),t.splice(a,0,r)}}function i(){return typeof console==`object`&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{t==null?e.storage.removeItem(`debug`):e.storage.debug=t}catch{}}function o(){var t;try{t=e.storage.debug}catch{}return!t&&typeof process<`u`&&`env`in process&&(t={}.DEBUG),t}e.enable(o());function s(){try{return window.localStorage}catch{}}})),h=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=`cueVideoById.loadVideoById.cueVideoByUrl.loadVideoByUrl.playVideo.pauseVideo.stopVideo.getVideoLoadedFraction.cuePlaylist.loadPlaylist.nextVideo.previousVideo.playVideoAt.setShuffle.setLoop.getPlaylist.getPlaylistIndex.setOption.mute.unMute.isMuted.setVolume.getVolume.seekTo.getPlayerState.getPlaybackRate.setPlaybackRate.getAvailablePlaybackRates.getPlaybackQuality.setPlaybackQuality.getAvailableQualityLevels.getCurrentTime.getDuration.removeEventListener.getVideoUrl.getVideoEmbedCode.getOptions.getOption.addEventListener.destroy.setSize.getIframe`.split(`.`),t.exports=e.default})),ee=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=[`ready`,`stateChange`,`playbackQualityChange`,`playbackRateChange`,`error`,`apiChange`,`volumeChange`],t.exports=e.default})),g=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})),_=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(g());function r(e){return e&&e.__esModule?e:{default:e}}e.default={pauseVideo:{acceptableStates:[n.default.ENDED,n.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[n.default.ENDED,n.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[n.default.ENDED,n.default.PLAYING,n.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})),v=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=o(m()),r=o(h()),i=o(ee()),a=o(_());function o(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.default)(`youtube-player`),c={};c.proxyEvents=function(e){var t={},n=function(n){var r=`on`+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){s(`event "%s"`,r,t),e.trigger(n,t)}},r=!0,a=!1,o=void 0;try{for(var c=i.default[Symbol.iterator](),l;!(r=(l=c.next()).done);r=!0){var u=l.value;n(u)}}catch(e){a=!0,o=e}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}return t},c.promisifyPlayer=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n={},i=function(r){t&&a.default[r]?n[r]=function(){var t=[...arguments];return e.then(function(e){var n=a.default[r],i=e.getPlayerState(),o=e[r].apply(e,t);return n.stateChangeRequired||Array.isArray(n.acceptableStates)&&n.acceptableStates.indexOf(i)===-1?new Promise(function(t){e.addEventListener(`onStateChange`,function r(){var i=e.getPlayerState(),a=void 0;typeof n.timeout==`number`&&(a=setTimeout(function(){e.removeEventListener(`onStateChange`,r),t()},n.timeout)),Array.isArray(n.acceptableStates)&&n.acceptableStates.indexOf(i)!==-1&&(e.removeEventListener(`onStateChange`,r),clearTimeout(a),t())})}).then(function(){return o}):o})}:n[r]=function(){var t=[...arguments];return e.then(function(e){return e[r].apply(e,t)})}},o=!0,s=!1,c=void 0;try{for(var l=r.default[Symbol.iterator](),u;!(o=(u=l.next()).done);o=!0){var d=u.value;i(d)}}catch(e){s=!0,c=e}finally{try{!o&&l.return&&l.return()}finally{if(s)throw c}}return n},e.default=c,t.exports=e.default})),y=t(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},r=o(l()),i=o(d()),a=o(v());function o(e){return e&&e.__esModule?e:{default:e}}var s=void 0;e.default=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=(0,r.default)();if(s||=(0,i.default)(c),t.events)throw Error(`Event handlers cannot be overwritten.`);if(typeof e==`string`&&!document.getElementById(e))throw Error(`Element "`+e+`" does not exist.`);t.events=a.default.proxyEvents(c);var l=new Promise(function(r){(e===void 0?`undefined`:n(e))===`object`&&e.playVideo instanceof Function?r(e):s.then(function(n){var i=new n.Player(e,t);return c.on(`ready`,function(){r(i)}),null})}),u=a.default.promisifyPlayer(l,o);return u.on=c.on,u.off=c.off,u},t.exports=e.default})),b=e(s()),x=e(r()),S=e(c()),C=e(y()),w=Object.defineProperty,T=Object.defineProperties,te=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||={})D.call(t,n)&&k(e,n,t[n]);if(E)for(var n of E(t))O.call(t,n)&&k(e,n,t[n]);return e},j=(e,t)=>T(e,te(t)),M=(e,t,n)=>new Promise((r,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,t)).next())});function N(e,t){if(e.videoId!==t.videoId)return!0;let n=e.opts?.playerVars||{},r=t.opts?.playerVars||{};return n.start!==r.start||n.end!==r.end}function P(e={}){return j(A({},e),{height:0,width:0,playerVars:j(A({},e.playerVars),{autoplay:0,start:0,end:0})})}function F(e,t){return e.videoId!==t.videoId||!(0,S.default)(P(e.opts),P(t.opts))}function I(e,t){return e.id!==t.id||e.className!==t.className||e.opts?.width!==t.opts?.width||e.opts?.height!==t.opts?.height||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var L={videoId:``,id:``,className:``,iframeClassName:``,style:{},title:``,loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},R={videoId:b.default.string,id:b.default.string,className:b.default.string,iframeClassName:b.default.string,style:b.default.object,title:b.default.string,loading:b.default.oneOf([`lazy`,`eager`]),opts:b.default.objectOf(b.default.any),onReady:b.default.func,onError:b.default.func,onPlay:b.default.func,onPause:b.default.func,onEnd:b.default.func,onStateChange:b.default.func,onPlaybackRateChange:b.default.func,onPlaybackQualityChange:b.default.func},z=class extends x.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t;return(t=this.props).onReady?.call(t,e)},this.onPlayerError=e=>{var t;return(t=this.props).onError?.call(t,e)},this.onPlayerStateChange=e=>{var t,n,r,i,a,o,s,c;switch((n=(t=this.props).onStateChange)==null||n.call(t,e),e.data){case z.PlayerState.ENDED:(i=(r=this.props).onEnd)==null||i.call(r,e);break;case z.PlayerState.PLAYING:(o=(a=this.props).onPlay)==null||o.call(a,e);break;case z.PlayerState.PAUSED:(c=(s=this.props).onPause)==null||c.call(s,e);break;default:}},this.onPlayerPlaybackRateChange=e=>{var t;return(t=this.props).onPlaybackRateChange?.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t;return(t=this.props).onPlaybackQualityChange?.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>`u`)return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}let e=j(A({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=(0,C.default)(this.container,e),this.internalPlayer.on(`ready`,this.onPlayerReady),this.internalPlayer.on(`error`,this.onPlayerError),this.internalPlayer.on(`stateChange`,this.onPlayerStateChange),this.internalPlayer.on(`playbackRateChange`,this.onPlayerPlaybackRateChange),this.internalPlayer.on(`playbackQualityChange`,this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(e=>{this.props.title&&e.setAttribute(`title`,this.props.title),this.props.loading&&e.setAttribute(`loading`,this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(e=>{this.props.id?e.setAttribute(`id`,this.props.id):e.removeAttribute(`id`),this.props.iframeClassName?e.setAttribute(`class`,this.props.iframeClassName):e.removeAttribute(`class`),this.props.opts&&this.props.opts.width?e.setAttribute(`width`,this.props.opts.width.toString()):e.removeAttribute(`width`),this.props.opts&&this.props.opts.height?e.setAttribute(`height`,this.props.opts.height.toString()):e.removeAttribute(`height`),this.props.title?e.setAttribute(`title`,this.props.title):e.setAttribute(`title`,`YouTube video player`),this.props.loading?e.setAttribute(`loading`,this.props.loading):e.removeAttribute(`loading`)})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,n;if(this.props.videoId===void 0||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let r=!1,i={videoId:this.props.videoId};if(this.props.opts?.playerVars&&(r=this.props.opts.playerVars.autoplay===1,`start`in this.props.opts.playerVars&&(i.startSeconds=this.props.opts.playerVars.start),`end`in this.props.opts.playerVars&&(i.endSeconds=this.props.opts.playerVars.end)),r){(t=this.internalPlayer)==null||t.loadVideoById(i);return}(n=this.internalPlayer)==null||n.cueVideoById(i)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return M(this,null,function*(){I(e,this.props)&&this.updatePlayer(),F(e,this.props)&&(yield this.resetPlayer()),N(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return x.createElement(`div`,{className:this.props.className,style:this.props.style},x.createElement(`div`,{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},B=z;B.propTypes=R,B.defaultProps=L,B.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var V=B,H={version:1,asset_id:`ea617cc3-7e23-4280-a576-7c3d46a9ced6`,project_id:`6a17f3b9-6db1-47b6-8b9c-86a2bfdda4b9`,url:`/__l5e/assets-v1/ea617cc3-7e23-4280-a576-7c3d46a9ced6/cerebro-workbook.pdf`,r2_key:`a/v1/6a17f3b9-6db1-47b6-8b9c-86a2bfdda4b9/ea617cc3-7e23-4280-a576-7c3d46a9ced6/cerebro-workbook.pdf`,original_filename:`cerebro-workbook.pdf`,size:13950420,content_type:`application/pdf`,created_at:`2026-07-14T23:41:24Z`},U=n(),W=`#`,G=`https://drive.google.com/file/d/1NwJmIGwZuZbgYdfwvtM8PnitdDl3i6Gh/view?usp=sharing`,K=`HjPMEyP2dSo`,q=300*1e3,J=2.5;function Y(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(!1),[i,a]=(0,x.useState)(0),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(!1),u=(0,x.useRef)(null),d=(0,x.useRef)(null),f=(0,x.useRef)(!1);(0,x.useEffect)(()=>l(!0),[]),(0,x.useEffect)(()=>{let e=setTimeout(()=>s(!0),q);return()=>clearTimeout(e)},[]),(0,x.useEffect)(()=>{let e=setInterval(()=>{let e=u.current;if(!(!e||f.current))try{let t=e.getCurrentTime?.()??0,n=e.getDuration?.()??0;n>0&&a(Math.min(1,t/n*J))}catch{}},200);return()=>clearInterval(e)},[e]);let p=(0,x.useCallback)(e=>{let t=d.current,n=u.current;if(!t||!n)return;let r=t.getBoundingClientRect(),i=Math.max(0,Math.min(1,(e-r.left)/r.width));a(i);try{let e=n.getDuration?.()??0,t=Math.min(1,i/J);e>0&&n.seekTo(t*e,!0)}catch{}},[]);return(0,U.jsxs)(`div`,{className:`cerebro-root`,children:[(0,U.jsx)(`style`,{children:re}),(0,U.jsx)(`div`,{className:`cerebro-bg-shimmer`,"aria-hidden":`true`}),(0,U.jsxs)(`main`,{className:`cerebro-main`,children:[(0,U.jsx)(`h1`,{className:`cerebro-title`,children:`EL CEREBRO QUE SABE, PERO NO HACE`}),(0,U.jsx)(ne,{}),(0,U.jsxs)(`p`,{className:`cerebro-hook`,children:[(0,U.jsx)(`strong`,{children:`El 99,9 % de las personas llega hasta acá y cierra la página.`}),(0,U.jsx)(`br`,{}),`Están procrastinando una vez más — igual que hace un año, igual que la semana pasada.`,(0,U.jsx)(`br`,{}),`Si sos de esas personas: `,(0,U.jsx)(`strong`,{children:`QUEDATEEE`}),`. Mirá el video completo y dale a tu cerebro una nueva evidencia de que sí podés hacer algo distinto.`]}),(0,U.jsxs)(`div`,{className:`cerebro-video-wrap`,children:[(0,U.jsxs)(`div`,{className:`cerebro-video-frame`,children:[c&&(0,U.jsx)(V,{videoId:K,className:`cerebro-yt`,iframeClassName:`cerebro-yt-iframe`,opts:{playerVars:{controls:0,modestbranding:1,rel:0,showinfo:0,iv_load_policy:3,disablekb:1,playsinline:1,fs:0}},onReady:e=>{u.current=e.target,t(!0)},onStateChange:e=>{r(e.data===1)}}),(0,U.jsx)(`div`,{className:`cerebro-yt-topmask`,"aria-hidden":`true`}),(0,U.jsx)(`div`,{className:`cerebro-yt-botmask`,"aria-hidden":`true`}),(0,U.jsx)(`button`,{className:`cerebro-yt-clicklayer`,onClick:()=>{let e=u.current;if(e)try{n?e.pauseVideo():e.playVideo()}catch{}},"aria-label":n?`Pausar`:`Reproducir`,children:!n&&(0,U.jsx)(`span`,{className:`cerebro-play-icon`,children:`▶`})})]}),(0,U.jsxs)(`div`,{ref:d,className:`cerebro-progress`,onPointerDown:e=>{f.current=!0,e.target.setPointerCapture?.(e.pointerId),p(e.clientX)},onPointerMove:e=>{f.current&&p(e.clientX)},onPointerUp:()=>{f.current=!1},onPointerCancel:()=>{f.current=!1},role:`slider`,"aria-label":`Progreso del video`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(i*100),children:[(0,U.jsx)(`div`,{className:`cerebro-progress-fill`,style:{width:`${i*100}%`},children:(0,U.jsx)(`div`,{className:`cerebro-progress-shimmer`})}),(0,U.jsx)(`div`,{className:`cerebro-progress-thumb`,style:{left:`${i*100}%`}})]})]}),(0,U.jsx)(`p`,{className:`cerebro-note`,children:`En un ratito te va a aparecer un botón para que puedas descargar el workbook completo con ejercicios y preguntas basadas en todo lo que te explico en esta clase.`}),(0,U.jsx)(X,{}),o&&(0,U.jsxs)(`section`,{className:`cerebro-cta-wrap`,children:[(0,U.jsx)(Z,{}),(0,U.jsx)(`a`,{href:G,target:`_blank`,rel:`noopener noreferrer`,className:`cerebro-btn cerebro-btn--primary`,children:`DESCARGAR EL WORKBOOK COMPLETO`}),(0,U.jsxs)(`div`,{className:`cerebro-cta-heading`,children:[(0,U.jsx)(`h2`,{children:`AHORA SÍ, ES MOMENTO DE ACCIONAR`}),(0,U.jsx)(`p`,{children:`Si querés acceder a esta experiencia maravillosa que empieza dentro de muy poquito, podés hacerlo desde acá. Estoy segura de que la vas a amar y que te va a ayudar a transformar muchas cosas. Cerramos inscripciones dentro de muy poquito y comenzamos el 21 de julio.`})]}),(0,U.jsx)(`a`,{href:W,target:`_blank`,rel:`noopener noreferrer`,className:`cerebro-btn cerebro-btn--hero`,children:`QUIERO ACCEDER A ACTIVA TU IMPACTO`})]})]})]})}function X(){let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(0);return(0,x.useEffect)(()=>{let e=!1;return(async()=>{try{let n=await i(()=>import(`./pdf-BQ6Om6Vw.js`),__vite__mapDeps([0,1])),r=await i(()=>import(`./pdf.worker.min-BjVQVX8e.js`),[]);n.GlobalWorkerOptions.workerSrc=r.default;let a=await n.getDocument({url:H.url}).promise,o=Math.min(a.numPages,20),s=[];for(let n=1;n<=o;n++){if(e)return;let r=await a.getPage(n),i=r.getViewport({scale:1.1}),o=document.createElement(`canvas`);o.width=i.width,o.height=i.height;let c=o.getContext(`2d`);await r.render({canvas:o,canvasContext:c,viewport:i}).promise,s.push(o.toDataURL(`image/jpeg`,.75)),n===1&&!e&&t([...s])}e||t(s)}catch(e){console.error(`pdf banner error`,e)}})(),()=>{e=!0}},[]),(0,x.useEffect)(()=>{if(e.length<2)return;let t=setInterval(()=>{r(t=>(t+1)%e.length)},1200);return()=>clearInterval(t)},[e.length]),(0,U.jsxs)(`div`,{className:`cerebro-pdf-banner`,children:[(0,U.jsxs)(`div`,{className:`cerebro-pdf-frame`,children:[e.length===0?(0,U.jsx)(`div`,{className:`cerebro-pdf-loading`,children:`Cargando workbook…`}):(0,U.jsx)(`img`,{src:e[n],alt:`Workbook página ${n+1}`,className:`cerebro-pdf-page`}),(0,U.jsx)(`div`,{className:`cerebro-pdf-glow`,"aria-hidden":`true`})]}),(0,U.jsx)(`p`,{className:`cerebro-pdf-caption`,children:`En un ratito te lo dejo para que lo puedas descargar completo ✨`})]})}function Z(){return(0,U.jsx)(`div`,{className:`cerebro-sparkles`,"aria-hidden":`true`,children:[{emoji:`🦋`,left:`5%`,top:`10%`,delay:`0s`},{emoji:`✨`,left:`90%`,top:`5%`,delay:`0.4s`},{emoji:`🤍`,left:`10%`,top:`70%`,delay:`1s`},{emoji:`🦋`,left:`85%`,top:`60%`,delay:`0.7s`},{emoji:`✨`,left:`50%`,top:`0%`,delay:`0.2s`},{emoji:`🤍`,left:`60%`,top:`85%`,delay:`1.2s`},{emoji:`✨`,left:`20%`,top:`40%`,delay:`0.9s`},{emoji:`🦋`,left:`45%`,top:`50%`,delay:`1.5s`}].map((e,t)=>(0,U.jsx)(`span`,{className:`cerebro-spark`,style:{left:e.left,top:e.top,animationDelay:e.delay},children:e.emoji},t))})}var Q=`cerebro-countdown-deadline`,$=720*60*1e3;function ne(){let[e,t]=(0,x.useState)(null);if((0,x.useEffect)(()=>{let e;try{let t=localStorage.getItem(Q),n=t?parseInt(t,10):NaN;!Number.isNaN(n)&&n>Date.now()?e=n:(e=Date.now()+$,localStorage.setItem(Q,String(e)))}catch{e=Date.now()+$}let n=()=>t(Math.max(0,e-Date.now()));n();let r=setInterval(n,1e3);return()=>clearInterval(r)},[]),e===null)return null;let n=Math.floor(e/36e5),r=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3),a=e=>e.toString().padStart(2,`0`);return(0,U.jsxs)(`div`,{className:`cerebro-countdown`,role:`timer`,"aria-live":`polite`,children:[(0,U.jsx)(`span`,{className:`cerebro-countdown-label`,children:`⏳ Este video solo está disponible por`}),(0,U.jsxs)(`span`,{className:`cerebro-countdown-time`,children:[a(n),`:`,a(r),`:`,a(i)]})]})}var re=`
.cerebro-root {
  --cream: #f6ecd8;
  --cream-2: #efe1c4;
  --gold: #c9a24a;
  --gold-2: #e8c76b;
  --gold-3: #f4dc94;
  --ink: #1a1408;
  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(ellipse at top, #fbf1dd 0%, var(--cream) 55%, #ecdcb8 100%);
  color: var(--ink);
  font-family: "Cormorant Garamond", Georgia, serif;
  overflow-x: hidden;
}
.cerebro-bg-shimmer {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(circle at 20% 15%, rgba(244,220,148,0.35), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(201,162,74,0.25), transparent 45%);
  animation: cerebro-bg 12s ease-in-out infinite alternate;
}
@keyframes cerebro-bg {
  from { opacity: 0.7; }
  to   { opacity: 1; }
}
.cerebro-main {
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  padding: 48px 20px 96px;
}
.cerebro-title {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 1.05;
  font-size: clamp(2rem, 7vw, 4.2rem);
  margin: 8px 0 24px;
  background: linear-gradient(100deg, #1a1408 0%, #7a5610 25%, #c9a24a 50%, #7a5610 75%, #1a1408 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter:
    drop-shadow(0 2px 6px rgba(107,74,19,0.35))
    drop-shadow(0 1px 0 rgba(0,0,0,0.15));
  animation:
    cerebro-title-in 1.1s ease-out both,
    cerebro-title-shine 6s ease-in-out infinite;
}
@keyframes cerebro-title-in {
  from { opacity: 0; transform: translateY(24px); letter-spacing: 0.08em; }
  to   { opacity: 1; transform: translateY(0); letter-spacing: 0.01em; }
}
@keyframes cerebro-title-shine {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* COUNTDOWN */
.cerebro-countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin: 0 auto 22px;
  padding: 14px 22px;
  max-width: 640px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(26,20,8,0.95), rgba(58,42,16,0.95));
  box-shadow:
    0 12px 30px -12px rgba(107,74,19,0.55),
    inset 0 0 0 1px rgba(244,220,148,0.45);
  animation: cerebro-countdown-pulse 2.4s ease-in-out infinite;
}
@keyframes cerebro-countdown-pulse {
  0%,100% { box-shadow: 0 12px 30px -12px rgba(107,74,19,0.55), inset 0 0 0 1px rgba(244,220,148,0.45); }
  50%     { box-shadow: 0 18px 40px -10px rgba(244,220,148,0.6),  inset 0 0 0 1px rgba(244,220,148,0.75); }
}
.cerebro-countdown-label {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-style: italic;
  font-size: clamp(0.95rem, 2.4vw, 1.1rem);
  color: #f4dc94;
  letter-spacing: 0.02em;
}
.cerebro-countdown-time {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 800;
  font-size: clamp(1.4rem, 4.5vw, 1.9rem);
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, #fff2c2, #f4dc94 40%, #c9a24a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 8px rgba(244,220,148,0.5));
  font-variant-numeric: tabular-nums;
}

.cerebro-hook {
  max-width: 660px;
  margin: 0 auto 12px;
  text-align: center;
  font-size: clamp(1.15rem, 2.9vw, 1.5rem);
  font-weight: 500;
  line-height: 1.55;
  color: #1a1408;
  opacity: 0;
  animation: cerebro-hook-in 1s ease-out 0.5s forwards;
}
.cerebro-hook br { display: block; content: ""; margin-top: 6px; }
.cerebro-hook strong {
  font-weight: 800;
  color: #1a1408;
  background-image: linear-gradient(120deg, rgba(244,220,148,0.85), rgba(201,162,74,0.7));
  background-repeat: no-repeat;
  background-size: 100% 32%;
  background-position: 0 88%;
  padding: 0 3px;
  border-radius: 2px;
}
@keyframes cerebro-hook-in {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}


/* VIDEO */
.cerebro-video-wrap {
  margin: 24px 0 20px;
  padding: 12px;
  border-radius: 20px;
  background: linear-gradient(140deg, rgba(201,162,74,0.35), rgba(244,220,148,0.15) 40%, rgba(201,162,74,0.35));
  box-shadow:
    0 20px 60px -20px rgba(107,74,19,0.35),
    inset 0 0 0 1px rgba(201,162,74,0.4);
}
.cerebro-video-frame {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
}
.cerebro-yt, .cerebro-yt-iframe {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  border: 0;
}
.cerebro-yt-topmask {
  position: absolute; top: 0; left: 0; right: 0; height: 70px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0));
  pointer-events: none;
}
.cerebro-yt-botmask {
  position: absolute; bottom: 0; left: 0; right: 0; height: 70px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0));
  pointer-events: none;
}
.cerebro-yt-clicklayer {
  position: absolute; inset: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.cerebro-play-icon {
  width: 88px; height: 88px;
  border-radius: 999px;
  display: grid; place-items: center;
  font-size: 32px;
  color: #1a1408;
  background: radial-gradient(circle at 30% 30%, #f4dc94, #c9a24a);
  box-shadow: 0 8px 30px rgba(201,162,74,0.6), inset 0 0 0 2px rgba(255,255,255,0.35);
  animation: cerebro-pulse 2s ease-in-out infinite;
}

/* PROGRESS BAR */
.cerebro-progress {
  position: relative;
  height: 14px;
  margin: 16px 4px 0;
  border-radius: 999px;
  background: linear-gradient(to bottom, #2a1f10, #3a2a15);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,74,0.35);
  cursor: pointer;
  touch-action: none;
}
.cerebro-progress-fill {
  position: absolute; top: 0; left: 0; bottom: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #c9a24a 0%, #f4dc94 50%, #c9a24a 100%);
  background-size: 200% 100%;
  box-shadow: 0 0 12px rgba(244,220,148,0.7);
  overflow: hidden;
  transition: width 0.18s linear;
  animation: cerebro-progress-shine 3s linear infinite;
}
@keyframes cerebro-progress-shine {
  from { background-position: 0% 50%; }
  to   { background-position: 200% 50%; }
}
.cerebro-progress-shimmer {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
  transform: translateX(-100%);
  animation: cerebro-shimmer 2.2s ease-in-out infinite;
}
@keyframes cerebro-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
.cerebro-progress-thumb {
  position: absolute; top: 50%;
  width: 22px; height: 22px;
  margin-left: -11px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, #fff5d1, #c9a24a);
  box-shadow: 0 0 14px rgba(244,220,148,0.8), 0 2px 6px rgba(0,0,0,0.35);
  transform: translateY(-50%);
  transition: left 0.18s linear;
  pointer-events: none;
}

/* NOTE */
.cerebro-note {
  margin: 28px auto;
  max-width: 640px;
  text-align: center;
  font-size: clamp(1.05rem, 2.4vw, 1.35rem);
  font-style: italic;
  color: #3a2a10;
  line-height: 1.5;
}

/* PDF BANNER */
.cerebro-pdf-banner {
  margin: 32px auto;
  text-align: center;
}
.cerebro-pdf-frame {
  position: relative;
  margin: 0 auto;
  max-width: 320px;
  aspect-ratio: 3 / 4;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow:
    0 20px 40px -15px rgba(107,74,19,0.4),
    0 0 0 1px rgba(201,162,74,0.4);
  animation: cerebro-float 5s ease-in-out infinite;
}
@keyframes cerebro-float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-6px); }
}
.cerebro-pdf-page {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  animation: cerebro-fade-swap 0.4s ease;
}
@keyframes cerebro-fade-swap {
  from { opacity: 0.3; transform: scale(1.02); }
  to   { opacity: 1;   transform: scale(1);    }
}
.cerebro-pdf-glow {
  position: absolute; inset: -2px;
  border-radius: 16px;
  pointer-events: none;
  box-shadow: inset 0 0 30px rgba(244,220,148,0.4);
}
.cerebro-pdf-loading {
  display: grid; place-items: center;
  width: 100%; height: 100%;
  color: #8a6b28;
  font-style: italic;
}
.cerebro-pdf-caption {
  margin-top: 14px;
  font-style: italic;
  color: #6b4a13;
  font-size: 1.05rem;
}

/* CTA */
.cerebro-cta-wrap {
  position: relative;
  margin: 40px auto 0;
  padding: 32px 20px 40px;
  border-radius: 20px;
  animation: cerebro-cta-in 0.9s ease-out both;
}
@keyframes cerebro-cta-in {
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)   scale(1); }
}
.cerebro-btn {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-radius: 999px;
  padding: 18px 22px;
  color: #1a1408;
  background: linear-gradient(135deg, #f4dc94, #c9a24a 60%, #a37b1f);
  box-shadow:
    0 10px 30px -10px rgba(201,162,74,0.7),
    inset 0 0 0 1px rgba(255,255,255,0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: cerebro-pulse 2.4s ease-in-out infinite;
}
.cerebro-btn:hover { transform: translateY(-2px) scale(1.02); }
.cerebro-btn--primary { font-size: clamp(1rem, 3vw, 1.15rem); }
.cerebro-btn--hero {
  font-size: clamp(1.15rem, 3.8vw, 1.6rem);
  padding: 22px 26px;
  background: linear-gradient(135deg, #fff2c2, #f4dc94 30%, #c9a24a 70%, #7a5610);
  box-shadow:
    0 16px 40px -10px rgba(201,162,74,0.85),
    0 0 0 2px rgba(244,220,148,0.5),
    inset 0 0 0 1px rgba(255,255,255,0.5);
  animation: cerebro-pulse-hero 2.2s ease-in-out infinite;
}
@keyframes cerebro-pulse {
  0%,100% { box-shadow: 0 10px 30px -10px rgba(201,162,74,0.7), inset 0 0 0 1px rgba(255,255,255,0.4); }
  50%     { box-shadow: 0 14px 40px -8px rgba(244,220,148,0.9), inset 0 0 0 1px rgba(255,255,255,0.6); }
}
@keyframes cerebro-pulse-hero {
  0%,100% { transform: scale(1);    box-shadow: 0 16px 40px -10px rgba(201,162,74,0.85), 0 0 0 2px rgba(244,220,148,0.5), inset 0 0 0 1px rgba(255,255,255,0.5); }
  50%     { transform: scale(1.02); box-shadow: 0 22px 50px -8px rgba(244,220,148,1),    0 0 0 3px rgba(244,220,148,0.7), inset 0 0 0 1px rgba(255,255,255,0.7); }
}

.cerebro-cta-heading {
  text-align: center;
  margin: 36px auto 20px;
  max-width: 620px;
}
.cerebro-cta-heading h2 {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 800;
  font-size: clamp(1.4rem, 4.5vw, 2rem);
  letter-spacing: 0.03em;
  color: #6b4a13;
  margin: 0 0 14px;
}
.cerebro-cta-heading p {
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  color: #3a2a10;
  line-height: 1.55;
  font-style: italic;
  margin: 0;
}

/* SPARKLES */
.cerebro-sparkles {
  position: absolute; inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.cerebro-spark {
  position: absolute;
  font-size: 22px;
  filter: drop-shadow(0 0 6px rgba(244,220,148,0.7));
  animation: cerebro-float-spark 4s ease-in-out infinite;
  opacity: 0.9;
}
@keyframes cerebro-float-spark {
  0%,100% { transform: translateY(0) rotate(0deg);   opacity: 0.7; }
  50%     { transform: translateY(-14px) rotate(8deg); opacity: 1;   }
}

@media (max-width: 520px) {
  .cerebro-main { padding: 28px 14px 72px; }
  .cerebro-video-wrap { padding: 8px; border-radius: 16px; }
  .cerebro-play-icon { width: 68px; height: 68px; font-size: 24px; }
  .cerebro-progress { height: 12px; }
  .cerebro-progress-thumb { width: 18px; height: 18px; margin-left: -9px; }
}
`;export{Y as component};