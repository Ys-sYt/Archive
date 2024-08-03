import{g as Ge,d as oe,r as kt,p as le,b as Mt,m as pe}from"./index-c8fceb99.js";var nt={};nt.entityMap={lt:"<",gt:">",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"};var Oe={},xe=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,Xe=new RegExp("[\\-\\.0-9"+xe.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),Ye=new RegExp("^"+xe.source+Xe.source+"*(?::"+xe.source+Xe.source+"*)?$"),K=0,P=1,F=2,H=3,U=4,j=5,ee=6,se=7;function Y(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,Y)}Y.prototype=new Error;Y.prototype.name=Y.name;function it(){}it.prototype={parse:function(e,t,r){var n=this.domBuilder;n.startDocument(),at(t,t={}),Ft(e,t,r,n,this.errorHandler),n.endDocument()}};function Ft(e,t,r,n,i){function a(v){if(v>65535){v-=65536;var D=55296+(v>>10),Lt=56320+(v&1023);return String.fromCharCode(D,Lt)}else return String.fromCharCode(v)}function s(v){var D=v.slice(1,-1);return D in r?r[D]:D.charAt(0)==="#"?a(parseInt(D.substr(1).replace("x","0x"))):(i.error("entity not found:"+v),v)}function l(v){if(v>g){var D=e.substring(g,v).replace(/&#?\w+;/g,s);f&&o(g),n.characters(D,0,v-g),g=v}}function o(v,D){for(;v>=c&&(D=h.exec(e));)u=D.index,c=u+D[0].length,f.lineNumber++;f.columnNumber=v-u+1}for(var u=0,c=0,h=/.*(?:\r\n?|\n)|.*$/g,f=n.locator,m=[{currentNSMap:t}],R={},g=0;;){try{var d=e.indexOf("<",g);if(d<0){if(!e.substr(g).match(/^\s*$/)){var ye=n.doc,J=ye.createTextNode(e.substr(g));ye.appendChild(J),n.currentElement=J}return}switch(d>g&&l(d),e.charAt(d+1)){case"/":var b=e.indexOf(">",d+3),w=e.substring(d+2,b),A=m.pop();b<0?(w=e.substring(d+2).replace(/[\s<].*/,""),i.error("end tag name: "+w+" is not complete:"+A.tagName),b=d+1+w.length):w.match(/\s</)&&(w=w.replace(/[\s<].*/,""),i.error("end tag name: "+w+" maybe not complete"),b=d+1+w.length);var $e=A.localNSMap,ze=A.tagName==w,Ct=ze||A.tagName&&A.tagName.toLowerCase()==w.toLowerCase();if(Ct){if(n.endElement(A.uri,A.localName,w),$e)for(var Rt in $e)n.endPrefixMapping(Rt);ze||i.fatalError("end tag name: "+w+" is not match the current start tagName:"+A.tagName)}else m.push(A);b++;break;case"?":f&&o(d),b=Vt(e,d,n);break;case"!":f&&o(d),b=zt(e,d,n,i);break;default:f&&o(d);var x=new ot,Ee=m[m.length-1].currentNSMap,b=Ut(e,d,x,Ee,s,i),Ve=x.length;if(!x.closed&&$t(e,b,x.tagName,R)&&(x.closed=!0,r.nbsp||i.warning("unclosed xml attribute")),f&&Ve){for(var Pt=qe(f,{}),Ne=0;Ne<Ve;Ne++){var Be=x[Ne];o(Be.offset),Be.locator=qe(f,{})}n.locator=Pt,We(x,n,Ee)&&m.push(x),n.locator=f}else We(x,n,Ee)&&m.push(x);x.uri==="http://www.w3.org/1999/xhtml"&&!x.closed?b=jt(e,b,x.tagName,s,n):b++}}catch(v){if(v instanceof Y)throw v;i.error("element parse error: "+v),b=-1}b>g?g=b:l(Math.max(d,g)+1)}}function qe(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function Ut(e,t,r,n,i,a){function s(f,m,R){f in r.attributeNames&&a.fatalError("Attribute "+f+" redefined"),r.addValue(f,m,R)}for(var l,o,u=++t,c=K;;){var h=e.charAt(u);switch(h){case"=":if(c===P)l=e.slice(t,u),c=H;else if(c===F)c=H;else throw new Error("attribute equal must after attrName");break;case"'":case'"':if(c===H||c===P)if(c===P&&(a.warning('attribute value must after "="'),l=e.slice(t,u)),t=u+1,u=e.indexOf(h,t),u>0)o=e.slice(t,u).replace(/&#?\w+;/g,i),s(l,o,t-1),c=j;else throw new Error("attribute value no end '"+h+"' match");else if(c==U)o=e.slice(t,u).replace(/&#?\w+;/g,i),s(l,o,t),a.warning('attribute "'+l+'" missed start quot('+h+")!!"),t=u+1,c=j;else throw new Error('attribute value must after "="');break;case"/":switch(c){case K:r.setTagName(e.slice(t,u));case j:case ee:case se:c=se,r.closed=!0;case U:case P:case F:break;default:throw new Error("attribute invalid close char('/')")}break;case"":return a.error("unexpected end of input"),c==K&&r.setTagName(e.slice(t,u)),u;case">":switch(c){case K:r.setTagName(e.slice(t,u));case j:case ee:case se:break;case U:case P:o=e.slice(t,u),o.slice(-1)==="/"&&(r.closed=!0,o=o.slice(0,-1));case F:c===F&&(o=l),c==U?(a.warning('attribute "'+o+'" missed quot(")!'),s(l,o.replace(/&#?\w+;/g,i),t)):((n[""]!=="http://www.w3.org/1999/xhtml"||!o.match(/^(?:disabled|checked|selected)$/i))&&a.warning('attribute "'+o+'" missed value!! "'+o+'" instead!!'),s(o,o,t));break;case H:throw new Error("attribute value missed!!")}return u;case"":h=" ";default:if(h<=" ")switch(c){case K:r.setTagName(e.slice(t,u)),c=ee;break;case P:l=e.slice(t,u),c=F;break;case U:var o=e.slice(t,u).replace(/&#?\w+;/g,i);a.warning('attribute "'+o+'" missed quot(")!!'),s(l,o,t);case j:c=ee;break}else switch(c){case F:r.tagName,(n[""]!=="http://www.w3.org/1999/xhtml"||!l.match(/^(?:disabled|checked|selected)$/i))&&a.warning('attribute "'+l+'" missed value!! "'+l+'" instead2!!'),s(l,l,t),t=u,c=P;break;case j:a.warning('attribute space is required"'+l+'"!!');case ee:c=P,t=u;break;case H:c=U,t=u;break;case se:throw new Error("elements closed character '/' and '>' must be connected to")}}u++}}function We(e,t,r){for(var n=e.tagName,i=null,h=e.length;h--;){var a=e[h],s=a.qName,l=a.value,f=s.indexOf(":");if(f>0)var o=a.prefix=s.slice(0,f),u=s.slice(f+1),c=o==="xmlns"&&u;else u=s,o=null,c=s==="xmlns"&&"";a.localName=u,c!==!1&&(i==null&&(i={},at(r,r={})),r[c]=i[c]=l,a.uri="http://www.w3.org/2000/xmlns/",t.startPrefixMapping(c,l))}for(var h=e.length;h--;){a=e[h];var o=a.prefix;o&&(o==="xml"&&(a.uri="http://www.w3.org/XML/1998/namespace"),o!=="xmlns"&&(a.uri=r[o||""]))}var f=n.indexOf(":");f>0?(o=e.prefix=n.slice(0,f),u=e.localName=n.slice(f+1)):(o=null,u=e.localName=n);var m=e.uri=r[o||""];if(t.startElement(m,u,n,e),e.closed){if(t.endElement(m,u,n),i)for(o in i)t.endPrefixMapping(o)}else return e.currentNSMap=r,e.localNSMap=i,!0}function jt(e,t,r,n,i){if(/^(?:script|textarea)$/i.test(r)){var a=e.indexOf("</"+r+">",t),s=e.substring(t+1,a);if(/[&<]/.test(s))return/^script$/i.test(r)?(i.characters(s,0,s.length),a):(s=s.replace(/&#?\w+;/g,n),i.characters(s,0,s.length),a)}return t+1}function $t(e,t,r,n){var i=n[r];return i==null&&(i=e.lastIndexOf("</"+r+">"),i<t&&(i=e.lastIndexOf("</"+r)),n[r]=i),i<t}function at(e,t){for(var r in e)t[r]=e[r]}function zt(e,t,r,n){var i=e.charAt(t+2);switch(i){case"-":if(e.charAt(t+3)==="-"){var a=e.indexOf("-->",t+4);return a>t?(r.comment(e,t+4,a-t-4),a+3):(n.error("Unclosed comment"),-1)}else return-1;default:if(e.substr(t+3,6)=="CDATA["){var a=e.indexOf("]]>",t+9);return r.startCDATA(),r.characters(e,t+9,a-t-9),r.endCDATA(),a+3}var s=Bt(e,t),l=s.length;if(l>1&&/!doctype/i.test(s[0][0])){var o=s[1][0],u=!1,c=!1;l>3&&(/^public$/i.test(s[2][0])?(u=s[3][0],c=l>4&&s[4][0]):/^system$/i.test(s[2][0])&&(c=s[3][0]));var h=s[l-1];return r.startDTD(o,u,c),r.endDTD(),h.index+h[0].length}}return-1}function Vt(e,t,r){var n=e.indexOf("?>",t);if(n){var i=e.substring(t,n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return i?(i[0].length,r.processingInstruction(i[1],i[2]),n+2):-1}return-1}function ot(){this.attributeNames={}}ot.prototype={setTagName:function(e){if(!Ye.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,r){if(!Ye.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:r}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}};function Bt(e,t){var r,n=[],i=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(i.lastIndex=t,i.exec(e);r=i.exec(e);)if(n.push(r),r[1])return n}Oe.XMLReader=it;Oe.ParseError=Y;var re={};function ne(e,t){for(var r in e)t[r]=e[r]}function T(e,t){var r=e.prototype;if(!(r instanceof t)){let n=function(){};n.prototype=t.prototype,n=new n,ne(r,n),e.prototype=r=n}r.constructor!=e&&(typeof e!="function"&&console.error("unknow Class:"+e),r.constructor=e)}var Gt="http://www.w3.org/1999/xhtml",_={},S=_.ELEMENT_NODE=1,q=_.ATTRIBUTE_NODE=2,fe=_.TEXT_NODE=3,st=_.CDATA_SECTION_NODE=4,ut=_.ENTITY_REFERENCE_NODE=5,Xt=_.ENTITY_NODE=6,ct=_.PROCESSING_INSTRUCTION_NODE=7,lt=_.COMMENT_NODE=8,pt=_.DOCUMENT_NODE=9,ft=_.DOCUMENT_TYPE_NODE=10,C=_.DOCUMENT_FRAGMENT_NODE=11,Yt=_.NOTATION_NODE=12,E={},y={};E.INDEX_SIZE_ERR=(y[1]="Index size error",1);E.DOMSTRING_SIZE_ERR=(y[2]="DOMString size error",2);var qt=E.HIERARCHY_REQUEST_ERR=(y[3]="Hierarchy request error",3);E.WRONG_DOCUMENT_ERR=(y[4]="Wrong document",4);E.INVALID_CHARACTER_ERR=(y[5]="Invalid character",5);E.NO_DATA_ALLOWED_ERR=(y[6]="No data allowed",6);E.NO_MODIFICATION_ALLOWED_ERR=(y[7]="No modification allowed",7);var Wt=E.NOT_FOUND_ERR=(y[8]="Not found",8);E.NOT_SUPPORTED_ERR=(y[9]="Not supported",9);var Qe=E.INUSE_ATTRIBUTE_ERR=(y[10]="Attribute in use",10);E.INVALID_STATE_ERR=(y[11]="Invalid state",11);E.SYNTAX_ERR=(y[12]="Syntax error",12);E.INVALID_MODIFICATION_ERR=(y[13]="Invalid modification",13);E.NAMESPACE_ERR=(y[14]="Invalid namespace",14);E.INVALID_ACCESS_ERR=(y[15]="Invalid access",15);function k(e,t){if(t instanceof Error)var r=t;else r=this,Error.call(this,y[e]),this.message=y[e],Error.captureStackTrace&&Error.captureStackTrace(this,k);return r.code=e,t&&(this.message=this.message+": "+t),r}k.prototype=Error.prototype;ne(E,k);function L(){}L.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var r=[],n=0;n<this.length;n++)V(this[n],r,e,t);return r.join("")}};function W(e,t){this._node=e,this._refresh=t,Ce(this)}function Ce(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var r=e._refresh(e._node);Tt(e,"length",r.length),ne(r,e),e._inc=t}}W.prototype.item=function(e){return Ce(this),this[e]};T(W,L);function me(){}function mt(e,t){for(var r=e.length;r--;)if(e[r]===t)return r}function Ze(e,t,r,n){if(n?t[mt(t,n)]=r:t[t.length++]=r,e){r.ownerElement=e;var i=e.ownerDocument;i&&(n&&gt(i,e,n),Qt(i,e,r))}}function Je(e,t,r){var n=mt(t,r);if(n>=0){for(var i=t.length-1;n<i;)t[n]=t[++n];if(t.length=i,e){var a=e.ownerDocument;a&&(gt(a,e,r),r.ownerElement=null)}}else throw k(Wt,new Error(e.tagName+"@"+r))}me.prototype={length:0,item:L.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var r=this[t];if(r.nodeName==e)return r}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new k(Qe);var r=this.getNamedItem(e.nodeName);return Ze(this._ownerElement,this,e,r),r},setNamedItemNS:function(e){var t=e.ownerElement,r;if(t&&t!=this._ownerElement)throw new k(Qe);return r=this.getNamedItemNS(e.namespaceURI,e.localName),Ze(this._ownerElement,this,e,r),r},removeNamedItem:function(e){var t=this.getNamedItem(e);return Je(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var r=this.getNamedItemNS(e,t);return Je(this._ownerElement,this,r),r},getNamedItemNS:function(e,t){for(var r=this.length;r--;){var n=this[r];if(n.localName==t&&n.namespaceURI==e)return n}return null}};function ht(e){if(this._features={},e)for(var t in e)this._features=e[t]}ht.prototype={hasFeature:function(e,t){var r=this._features[e.toLowerCase()];return!!(r&&(!t||t in r))},createDocument:function(e,t,r){var n=new ie;if(n.implementation=this,n.childNodes=new L,n.doctype=r,r&&n.appendChild(r),t){var i=n.createElementNS(e,t);n.appendChild(i)}return n},createDocumentType:function(e,t,r){var n=new Me;return n.name=e,n.nodeName=e,n.publicId=t,n.systemId=r,n}};function N(){}N.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return vt(this,e,t)},replaceChild:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return dt(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(e){return De(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==fe&&e.nodeType==fe?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var r=t._nsMap;if(r){for(var n in r)if(r[n]==e)return n}t=t.nodeType==q?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var r=t._nsMap;if(r&&e in r)return r[e];t=t.nodeType==q?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){var t=this.lookupPrefix(e);return t==null}};function Ke(e){return e=="<"&&"&lt;"||e==">"&&"&gt;"||e=="&"&&"&amp;"||e=='"'&&"&quot;"||"&#"+e.charCodeAt()+";"}ne(_,N);ne(_,N.prototype);function te(e,t){if(t(e))return!0;if(e=e.firstChild)do if(te(e,t))return!0;while(e=e.nextSibling)}function ie(){}function Qt(e,t,r){e&&e._inc++;var n=r.namespaceURI;n=="http://www.w3.org/2000/xmlns/"&&(t._nsMap[r.prefix?r.localName:""]=r.value)}function gt(e,t,r,n){e&&e._inc++;var i=r.namespaceURI;i=="http://www.w3.org/2000/xmlns/"&&delete t._nsMap[r.prefix?r.localName:""]}function Re(e,t,r){if(e&&e._inc){e._inc++;var n=t.childNodes;if(r)n[n.length++]=r;else{for(var i=t.firstChild,a=0;i;)n[a++]=i,i=i.nextSibling;n.length=a}}}function dt(e,t){var r=t.previousSibling,n=t.nextSibling;return r?r.nextSibling=n:e.firstChild=n,n?n.previousSibling=r:e.lastChild=r,Re(e.ownerDocument,e),t}function vt(e,t,r){var n=t.parentNode;if(n&&n.removeChild(t),t.nodeType===C){var i=t.firstChild;if(i==null)return t;var a=t.lastChild}else i=a=t;var s=r?r.previousSibling:e.lastChild;i.previousSibling=s,a.nextSibling=r,s?s.nextSibling=i:e.firstChild=i,r==null?e.lastChild=a:r.previousSibling=a;do i.parentNode=e;while(i!==a&&(i=i.nextSibling));return Re(e.ownerDocument||e,e),t.nodeType==C&&(t.firstChild=t.lastChild=null),t}function Zt(e,t){var r=t.parentNode;if(r){var n=e.lastChild;r.removeChild(t);var n=e.lastChild}var n=e.lastChild;return t.parentNode=e,t.previousSibling=n,t.nextSibling=null,n?n.nextSibling=t:e.firstChild=t,e.lastChild=t,Re(e.ownerDocument,e,t),t}ie.prototype={nodeName:"#document",nodeType:pt,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==C){for(var r=e.firstChild;r;){var n=r.nextSibling;this.insertBefore(r,t),r=n}return e}return this.documentElement==null&&e.nodeType==S&&(this.documentElement=e),vt(this,e,t),e.ownerDocument=this,e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),dt(this,e)},importNode:function(e,t){return bt(this,e,t)},getElementById:function(e){var t=null;return te(this.documentElement,function(r){if(r.nodeType==S&&r.getAttribute("id")==e)return t=r,!0}),t},getElementsByClassName:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return new W(this,function(r){var n=[];return te(r.documentElement,function(i){i!==r&&i.nodeType==S&&t.test(i.getAttribute("class"))&&n.push(i)}),n})},createElement:function(e){var t=new Q;t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.childNodes=new L;var r=t.attributes=new me;return r._ownerElement=t,t},createDocumentFragment:function(){var e=new ge;return e.ownerDocument=this,e.childNodes=new L,e},createTextNode:function(e){var t=new Pe;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new Le;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new ke;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var r=new Ue;return r.ownerDocument=this,r.tagName=r.target=e,r.nodeValue=r.data=t,r},createAttribute:function(e){var t=new he;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new Fe;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var r=new Q,n=t.split(":"),i=r.attributes=new me;return r.childNodes=new L,r.ownerDocument=this,r.nodeName=t,r.tagName=t,r.namespaceURI=e,n.length==2?(r.prefix=n[0],r.localName=n[1]):r.localName=t,i._ownerElement=r,r},createAttributeNS:function(e,t){var r=new he,n=t.split(":");return r.ownerDocument=this,r.nodeName=t,r.name=t,r.namespaceURI=e,r.specified=!0,n.length==2?(r.prefix=n[0],r.localName=n[1]):r.localName=t,r}};T(ie,N);function Q(){this._nsMap={}}Q.prototype={nodeType:S,hasAttribute:function(e){return this.getAttributeNode(e)!=null},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var r=this.ownerDocument.createAttribute(e);r.value=r.nodeValue=""+t,this.setAttributeNode(r)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===C?this.insertBefore(e,null):Zt(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var r=this.getAttributeNodeNS(e,t);r&&this.removeAttributeNode(r)},hasAttributeNS:function(e,t){return this.getAttributeNodeNS(e,t)!=null},getAttributeNS:function(e,t){var r=this.getAttributeNodeNS(e,t);return r&&r.value||""},setAttributeNS:function(e,t,r){var n=this.ownerDocument.createAttributeNS(e,t);n.value=n.nodeValue=""+r,this.setAttributeNode(n)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new W(this,function(t){var r=[];return te(t,function(n){n!==t&&n.nodeType==S&&(e==="*"||n.tagName==e)&&r.push(n)}),r})},getElementsByTagNameNS:function(e,t){return new W(this,function(r){var n=[];return te(r,function(i){i!==r&&i.nodeType===S&&(e==="*"||i.namespaceURI===e)&&(t==="*"||i.localName==t)&&n.push(i)}),n})}};ie.prototype.getElementsByTagName=Q.prototype.getElementsByTagName;ie.prototype.getElementsByTagNameNS=Q.prototype.getElementsByTagNameNS;T(Q,N);function he(){}he.prototype.nodeType=q;T(he,N);function ae(){}ae.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(y[qt])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,r){var n=this.data.substring(0,e),i=this.data.substring(e+t);r=n+r+i,this.nodeValue=this.data=r,this.length=r.length}};T(ae,N);function Pe(){}Pe.prototype={nodeName:"#text",nodeType:fe,splitText:function(e){var t=this.data,r=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var n=this.ownerDocument.createTextNode(r);return this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling),n}};T(Pe,ae);function Le(){}Le.prototype={nodeName:"#comment",nodeType:lt};T(Le,ae);function ke(){}ke.prototype={nodeName:"#cdata-section",nodeType:st};T(ke,ae);function Me(){}Me.prototype.nodeType=ft;T(Me,N);function yt(){}yt.prototype.nodeType=Yt;T(yt,N);function Et(){}Et.prototype.nodeType=Xt;T(Et,N);function Fe(){}Fe.prototype.nodeType=ut;T(Fe,N);function ge(){}ge.prototype.nodeName="#document-fragment";ge.prototype.nodeType=C;T(ge,N);function Ue(){}Ue.prototype.nodeType=ct;T(Ue,N);function Nt(){}Nt.prototype.serializeToString=function(e,t,r){return wt.call(e,t,r)};N.prototype.toString=wt;function wt(e,t){var r=[],n=this.nodeType==9&&this.documentElement||this,i=n.prefix,a=n.namespaceURI;if(a&&i==null){var i=n.lookupPrefix(a);if(i==null)var s=[{namespace:a,prefix:null}]}return V(this,r,e,t,s),r.join("")}function He(e,t,r){var n=e.prefix||"",i=e.namespaceURI;if(!n&&!i||n==="xml"&&i==="http://www.w3.org/XML/1998/namespace"||i=="http://www.w3.org/2000/xmlns/")return!1;for(var a=r.length;a--;){var s=r[a];if(s.prefix==n)return s.namespace!=i}return!0}function V(e,t,r,n,i){if(n)if(e=n(e),e){if(typeof e=="string"){t.push(e);return}}else return;switch(e.nodeType){case S:i||(i=[]),i.length;var a=e.attributes,s=a.length,m=e.firstChild,l=e.tagName;r=Gt===e.namespaceURI||r,t.push("<",l);for(var o=0;o<s;o++){var u=a.item(o);u.prefix=="xmlns"?i.push({prefix:u.localName,namespace:u.value}):u.nodeName=="xmlns"&&i.push({prefix:"",namespace:u.value})}for(var o=0;o<s;o++){var u=a.item(o);if(He(u,r,i)){var c=u.prefix||"",h=u.namespaceURI,f=c?" xmlns:"+c:" xmlns";t.push(f,'="',h,'"'),i.push({prefix:c,namespace:h})}V(u,t,r,n,i)}if(He(e,r,i)){var c=e.prefix||"",h=e.namespaceURI;if(h){var f=c?" xmlns:"+c:" xmlns";t.push(f,'="',h,'"'),i.push({prefix:c,namespace:h})}}if(m||r&&!/^(?:meta|link|img|br|hr|input)$/i.test(l)){if(t.push(">"),r&&/^script$/i.test(l))for(;m;)m.data?t.push(m.data):V(m,t,r,n,i),m=m.nextSibling;else for(;m;)V(m,t,r,n,i),m=m.nextSibling;t.push("</",l,">")}else t.push("/>");return;case pt:case C:for(var m=e.firstChild;m;)V(m,t,r,n,i),m=m.nextSibling;return;case q:return t.push(" ",e.name,'="',e.value.replace(/[<&"]/g,Ke),'"');case fe:return t.push(e.data.replace(/[<&]/g,Ke).replace(/]]>/g,"]]&gt;"));case st:return t.push("<![CDATA[",e.data,"]]>");case lt:return t.push("<!--",e.data,"-->");case ft:var R=e.publicId,g=e.systemId;if(t.push("<!DOCTYPE ",e.name),R)t.push(" PUBLIC ",R),g&&g!="."&&t.push(" ",g),t.push(">");else if(g&&g!=".")t.push(" SYSTEM ",g,">");else{var d=e.internalSubset;d&&t.push(" [",d,"]"),t.push(">")}return;case ct:return t.push("<?",e.target," ",e.data,"?>");case ut:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function bt(e,t,r){var n;switch(t.nodeType){case S:n=t.cloneNode(!1),n.ownerDocument=e;case C:break;case q:r=!0;break}if(n||(n=t.cloneNode(!1)),n.ownerDocument=e,n.parentNode=null,r)for(var i=t.firstChild;i;)n.appendChild(bt(e,i,r)),i=i.nextSibling;return n}function De(e,t,r){var n=new t.constructor;for(var i in t){var a=t[i];typeof a!="object"&&a!=n[i]&&(n[i]=a)}switch(t.childNodes&&(n.childNodes=new L),n.ownerDocument=e,n.nodeType){case S:var s=t.attributes,l=n.attributes=new me,o=s.length;l._ownerElement=n;for(var u=0;u<o;u++)n.setAttributeNode(De(e,s.item(u),!0));break;case q:r=!0}if(r)for(var c=t.firstChild;c;)n.appendChild(De(e,c,r)),c=c.nextSibling;return n}function Tt(e,t,r){e[t]=r}try{if(Object.defineProperty){let e=function(t){switch(t.nodeType){case S:case C:var r=[];for(t=t.firstChild;t;)t.nodeType!==7&&t.nodeType!==8&&r.push(e(t)),t=t.nextSibling;return r.join("");default:return t.nodeValue}};Object.defineProperty(W.prototype,"length",{get:function(){return Ce(this),this.$$length}}),Object.defineProperty(N.prototype,"textContent",{get:function(){return e(this)},set:function(t){switch(this.nodeType){case S:case C:for(;this.firstChild;)this.removeChild(this.firstChild);(t||String(t))&&this.appendChild(this.ownerDocument.createTextNode(t));break;default:this.data=t,this.value=t,this.nodeValue=t}}}),Tt=function(t,r,n){t["$$"+r]=n}}}catch{}re.Node=N;re.DOMException=k;re.DOMImplementation=ht;re.XMLSerializer=Nt;function _t(e){this.options=e||{locator:{}}}_t.prototype.parseFromString=function(e,t){var r=this.options,n=new Ht,i=r.domBuilder||new de,a=r.errorHandler,s=r.locator,l=r.xmlns||{},o=/\/x?html?$/.test(t),u=o?Kt.entityMap:{lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};return s&&i.setDocumentLocator(s),n.errorHandler=Jt(a,i,s),n.domBuilder=r.domBuilder||i,o&&(l[""]="http://www.w3.org/1999/xhtml"),l.xml=l.xml||"http://www.w3.org/XML/1998/namespace",e&&typeof e=="string"?n.parse(e,l,u):n.errorHandler.error("invalid doc source"),i.doc};function Jt(e,t,r){if(!e){if(t instanceof de)return t;e=t}var n={},i=e instanceof Function;r=r||{};function a(s){var l=e[s];!l&&i&&(l=e.length==2?function(o){e(s,o)}:e),n[s]=l&&function(o){l("[xmldom "+s+"]	"+o+Se(r))}||function(){}}return a("warning"),a("error"),a("fatalError"),n}function de(){this.cdata=!1}function $(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}de.prototype={startDocument:function(){this.doc=new tr().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,r,n){var i=this.doc,a=i.createElementNS(e,r||t),s=n.length;ue(this,a),this.currentElement=a,this.locator&&$(this.locator,a);for(var l=0;l<s;l++){var e=n.getURI(l),o=n.getValue(l),r=n.getQName(l),u=i.createAttributeNS(e,r);this.locator&&$(n.getLocator(l),u),u.value=u.nodeValue=o,a.setAttributeNode(u)}},endElement:function(e,t,r){var n=this.currentElement;n.tagName,this.currentElement=n.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var r=this.doc.createProcessingInstruction(e,t);this.locator&&$(this.locator,r),ue(this,r)},ignorableWhitespace:function(e,t,r){},characters:function(e,t,r){if(e=et.apply(this,arguments),e){if(this.cdata)var n=this.doc.createCDATASection(e);else var n=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(n):/^\s*$/.test(e)&&this.doc.appendChild(n),this.locator&&$(this.locator,n)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,r){e=et.apply(this,arguments);var n=this.doc.createComment(e);this.locator&&$(this.locator,n),ue(this,n)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,r){var n=this.doc.implementation;if(n&&n.createDocumentType){var i=n.createDocumentType(e,t,r);this.locator&&$(this.locator,i),ue(this,i)}},warning:function(e){console.warn("[xmldom warning]	"+e,Se(this.locator))},error:function(e){console.error("[xmldom error]	"+e,Se(this.locator))},fatalError:function(e){throw new er(e,this.locator)}};function Se(e){if(e)return`
@`+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function et(e,t,r){return typeof e=="string"?e.substr(t,r):e.length>=t+r||t?new java.lang.String(e,t,r)+"":e}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(e){de.prototype[e]=function(){return null}});function ue(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}var Kt=nt,xt=Oe,Ht=xt.XMLReader,er=xt.ParseError,tr=re.DOMImplementation,rr=_t;function G(e,t){return Array.from(e.getElementsByTagName(t))}function Z(e){return e==null||e.normalize(),e&&e.textContent||""}function M(e,t,r){const n=e.getElementsByTagName(t),i=n.length?n[0]:null;return i&&r&&r(i),i}function nr(e,t,r){const n={};if(!e)return n;const i=e.getElementsByTagName(t),a=i.length?i[0]:null;return a&&r?r(a,n):n}function Dt(e,t,r){const n=Z(M(e,t));return n&&r?r(n)||{}:{}}function tt(e,t,r){const n=parseFloat(Z(M(e,t)));if(!isNaN(n))return n&&r?r(n)||{}:{}}function ir(e,t,r){const n=parseFloat(Z(M(e,t)));if(!isNaN(n))return r&&r(n),n}function Ae(e,t){const r={};for(const n of t)Dt(e,n,i=>{r[n]=i});return r}function ar(e){return(e==null?void 0:e.nodeType)===1}function St(e){return nr(e,"line",t=>Object.assign({},Dt(t,"color",n=>({stroke:`#${n}`})),tt(t,"opacity",n=>({"stroke-opacity":n})),tt(t,"width",n=>({"stroke-width":n*96/25.4}))))}function At(e){let t=[];if(e===null)return t;for(const r of Array.from(e.childNodes)){if(!ar(r))continue;const n=or(r.nodeName);if(n==="gpxtpx:TrackPointExtension")t=t.concat(At(r));else{const i=Z(r);t.push([n,sr(i)])}}return t}function or(e){return["heart","gpxtpx:hr","hr"].includes(e)?"heart":e}function sr(e){const t=parseFloat(e);return isNaN(t)?e:t}function It(e){const t=[parseFloat(e.getAttribute("lon")||""),parseFloat(e.getAttribute("lat")||"")];if(isNaN(t[0])||isNaN(t[1]))return null;ir(e,"ele",n=>{t.push(n)});const r=M(e,"time");return{coordinates:t,time:r?Z(r):null,extendedValues:At(M(e,"extensions"))}}function je(e){var i;const t=Ae(e,["name","cmt","desc","type","time","keywords"]),r=Array.from(e.getElementsByTagNameNS("http://www.garmin.com/xmlschemas/GpxExtensions/v3","*"));for(const a of r)((i=a.parentNode)==null?void 0:i.parentNode)===e&&(t[a.tagName.replace(":","_")]=Z(a));const n=G(e,"link");return n.length&&(t.links=n.map(a=>Object.assign({href:a.getAttribute("href")},Ae(a,["text","type"])))),t}function Ot(e,t){const r=G(e,t),n=[],i=[],a={};for(let s=0;s<r.length;s++){const l=It(r[s]);if(l){n.push(l.coordinates),l.time&&i.push(l.time);for(const[o,u]of l.extendedValues){const c=o==="heart"?o:o.replace("gpxtpx:","")+"s";a[c]||(a[c]=Array(r.length).fill(null)),a[c][s]=u}}}if(!(n.length<2))return{line:n,times:i,extendedValues:a}}function ur(e){const t=Ot(e,"rtept");if(t)return{type:"Feature",properties:Object.assign({_gpxType:"rte"},je(e),St(M(e,"extensions"))),geometry:{type:"LineString",coordinates:t.line}}}function cr(e){const t=G(e,"trkseg"),r=[],n=[],i=[];for(const l of t){const o=Ot(l,"trkpt");o&&(i.push(o),o.times&&o.times.length&&n.push(o.times))}if(i.length===0)return null;const a=i.length>1,s=Object.assign({_gpxType:"trk"},je(e),St(M(e,"extensions")),n.length?{coordinateProperties:{times:a?n:n[0]}}:{});for(const l of i){r.push(l.line),s.coordinateProperties||(s.coordinateProperties={});const o=s.coordinateProperties,u=Object.entries(l.extendedValues);for(let c=0;c<u.length;c++){const[h,f]=u[c];a?(o[h]||(o[h]=i.map(m=>new Array(m.line.length).fill(null))),o[h][c]=f):o[h]=f}}return{type:"Feature",properties:s,geometry:a?{type:"MultiLineString",coordinates:r}:{type:"LineString",coordinates:r[0]}}}function lr(e){const t=Object.assign(je(e),Ae(e,["sym"])),r=It(e);return r?{type:"Feature",properties:t,geometry:{type:"Point",coordinates:r.coordinates}}:null}function*pr(e){for(const t of G(e,"trk")){const r=cr(t);r&&(yield r)}for(const t of G(e,"rte")){const r=ur(t);r&&(yield r)}for(const t of G(e,"wpt")){const r=lr(t);r&&(yield r)}}function fr(e){return{type:"FeatureCollection",features:Array.from(pr(e))}}function mr(e,t,r){r===void 0&&(r={});var n=Ge(e),i=Ge(t),a=oe(i[1]-n[1]),s=oe(i[0]-n[0]),l=oe(n[1]),o=oe(i[1]),u=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(s/2),2)*Math.cos(l)*Math.cos(o);return kt(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),r.units)}const B=[[141.38021016,43.03455291],[141.39428776,43.03628007],[141.39595129,43.02903745],[141.38187201,43.0273086]];var hr=le(B[2]),gr=le(B[1]),dr=Mt(hr,gr);const p=new pe.Map({container:"map",zoom:15,center:[141.387932,43.032213],minZoom:15,maxZoom:19,maxBounds:[122,20,154,50],bearing:dr,attributionControl:!1,style:{version:8,sources:{mierune_base:{type:"raster",tiles:["https://api.maptiler.com/maps/jp-mierune-gray/{z}/{x}/{y}.png?key=Oh6R8jzq3P80WGrClSBG"],tileSize:512},hillshade:{type:"raster",tiles:["https://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png"]}},layers:[{id:"base",source:"mierune_base",type:"raster"},{id:"hillshade",source:"hillshade",type:"raster",paint:{"raster-opacity":.2}}]}});p.addControl(new pe.AttributionControl({compact:!0,customAttribution:'<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> | <a href="https://maplibre.org/" target="_blank">MapLibre</a> | <a href="https://maps.gsi.go.jp/development/ichiran.html#hillshademap" target="_blank">&copy; 国土地理院</a> | <a href="https://github.com/tilezen/joerd/blob/master/docs/attribution.md" target="_blank">&copy;Tilezen Joerd</a> | Maps are designed by <a href="https://twitter.com/miyakawa_to" target="_blank">宮川俊哉</a>, published under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">"CC BY-SA 4.0</a>" '}));let we="r3_1",rt="r3_1";document.getElementById("courseSelect").addEventListener("change",function(){p.setLayoutProperty(rt,"visibility","none"),we=this.value,p.setLayoutProperty(we,"visibility","visible"),rt=we});function vr(e){const t=["route","outline"],r=["gpx","outline"];t.forEach(n=>{e.getLayer(n)&&e.removeLayer(n)}),r.forEach(n=>{e.getSource(n)&&e.removeSource(n)})}let O,X,Ie=[];document.getElementById("file-input").addEventListener("change",function(e){const t=e.target.files[0];if(t){const r=new FileReader;r.onload=function(n){const i=n.target.result;vr(p),O=fr(new rr().parseFromString(i)),O=O.features[0];const a=O.geometry.coordinates,s=O.properties.coordinateProperties.times,l=O.properties.coordinateProperties["ns3:TrackPointExtensions"],o=[],u=[];for(let f=0;f<a.length-1;f++){const m=le(a[f]),R=le(a[f+1]),g=mr(m,R,{units:"kilometers"}),d=new Date(s[f]),J=(new Date(s[f+1])-d)/1e3,w=J/60/g;Ie.push(J),o.push(w),u.push(parseFloat(w.toFixed(3)))}X={type:"FeatureCollection",name:"route",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[]};for(var c=0;c<a.length-1;c++){var h={type:"Feature",properties:{time:s[c],paceNum:o[c],paceText:u[c],heartRate:l[c],timeDif:Ie[c]},geometry:{type:"LineString",coordinates:[a[c],a[c+1]]}};X.features.push(h)}p.addSource("gpx",{type:"geojson",data:X}),p.addSource("outline",{type:"geojson",data:O}),p.addLayer({id:"outline",type:"line",source:"outline",layout:{},paint:{"line-width":1,"line-color":"black","line-opacity":.6,"line-gap-width":3}}),p.addLayer({id:"route",type:"line",source:"gpx",paint:{"line-width":3,"line-color":["interpolate",["linear"],["get","paceNum"],3,"rgb(0, 128, 0)",10,"rgb(255, 255, 0)",15,"rgb(255, 0, 0)"],"line-opacity":.5},layout:{"line-cap":"butt","line-round-limit":.1,"line-join":"miter"}})},r.readAsText(t)}});const be=document.getElementById("sliderLineOpacity");be.addEventListener("input",function(){let e=parseFloat(be.value);console.log(be.value),p.setPaintProperty("route","line-opacity",e),p.setPaintProperty("outline","line-opacity",e)});const Te=document.getElementById("sliderLinewidth");Te.addEventListener("input",function(){let e=parseFloat(Te.value);console.log(Te.value),p.setPaintProperty("route","line-width",e),p.setPaintProperty("outline","line-gap-width",e)});const ve="/Archive/",yr=`${ve}tsukisamu/maps/M21A.png`,Er=`${ve}tsukisamu/maps/A.png`,Nr=`${ve}tsukisamu/maps/B.png`,wr=`${ve}tsukisamu/maps/N.png`;p.on("load",()=>{p.addSource("r3_1",{type:"image",url:yr,coordinates:B}),p.addSource("r3_2",{type:"image",url:Er,coordinates:B}),p.addSource("r3_3",{type:"image",url:Nr,coordinates:B}),p.addSource("r3_4",{type:"image",url:wr,coordinates:B}),p.addLayer({id:"r3_1",source:"r3_1",type:"raster",paint:{},style:{}}),p.addLayer({id:"r3_2",source:"r3_2",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),p.addLayer({id:"r3_3",source:"r3_3",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),p.addLayer({id:"r3_4",source:"r3_4",type:"raster",paint:{},style:{},layout:{visibility:"none"}}),p.addControl(new pe.NavigationControl),p.addControl(new pe.ScaleControl({maxWidth:200,unit:"metric"}))});let _e;const ce=document.getElementById("replay");let I,z;ce.addEventListener("click",()=>{if(ce.innerText==="Replay"){let t=function(n){return{type:"Feature",properties:I.features[n].properties,geometry:{type:"Point",coordinates:I.features[n].geometry.coordinates[1]}}};ce.innerText="Stop",p.setLayoutProperty("route","visibility","none"),p.setLayoutProperty("outline","visibility","none"),I={type:"FeatureCollection",name:"json4animation",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[X.features[0]]},z={type:"Feature",geometry:{type:"LineString",coordinates:[O.geometry.coordinates[0]]}},p.addSource("outline-anime",{type:"geojson",data:z}),p.addLayer({id:"outline-anime",type:"line",source:"outline-anime",layout:{},paint:{"line-width":1,"line-color":"black","line-opacity":.6,"line-gap-width":5}}),p.addSource("trace",{type:"geojson",data:I}),p.addLayer({id:"animation-line",type:"line",source:"trace",paint:{"line-width":5,"line-color":["interpolate",["linear"],["get","paceNum"],3,"rgb(0, 128, 0)",10,"rgb(255, 255, 0)",15,"rgb(255, 0, 0)"],"line-opacity":.5},layout:{"line-cap":"butt","line-round-limit":5,"line-join":"miter"}});let e=0,r=t(0);p.addSource("point",{type:"geojson",data:r}),p.addLayer({id:"pointSkin",source:"point",type:"circle",paint:{"circle-radius":11,"circle-color":"#ffffff"}}),p.addLayer({id:"point",source:"point",type:"circle",paint:{"circle-radius":8,"circle-color":["interpolate",["linear"],["get","heartRate"],100,"#c0c0c0",120,"#1e90ff",150,"#ffd700",200,"#9400d3"]}}),p.jumpTo({center:I.features[0].geometry.coordinates[1],zoom:16}),p.setPitch(0),_e=window.setInterval(()=>{if(e<X.features.length){let n=t(e);I.features.push(X.features[e]),z.geometry.coordinates.push(O.geometry.coordinates[e]),p.getSource("point").setData(n),p.getSource("trace").setData(I),p.getSource("outline-anime").setData(z),p.panTo(n.geometry.coordinates),e++}else window.clearInterval(_e)},Ie[e]*100)}else ce.innerText="Replay",window.clearInterval(_e),I.features=[],z.geometry.coordinates=[],console.log(z),console.log(I),p.getSource("trace").setData({type:"FeatureCollection",features:[]}),p.getSource("outline-anime").setData({type:"Feature",geometry:{type:"LineString",coordinates:[]}}),p.removeLayer("animation-line"),p.removeLayer("outline-anime"),p.removeLayer("point"),p.removeSource("trace"),p.removeSource("outline-anime"),p.removeSource("point"),p.setLayoutProperty("route","visibility","visible"),p.setLayoutProperty("outline","visibility","visible")});
