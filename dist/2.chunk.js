webpackJsonp([2],{7:function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=F((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),x[N[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;64>o;o++){var a=F((i[o]*e+50)/100);1>a?a=1:a>255&&(a=255),D[N[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],c=0,u=0;8>u;u++)for(var l=0;8>l;l++)U[c]=1/(x[N[c]]*s[u]*s[l]*8),C[c]=1/(D[N[c]]*s[u]*s[l]*8),c++}function n(e,t){for(var n=0,r=0,i=new Array,o=1;16>=o;o++){for(var a=1;a<=e[o];a++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=o,r++,n++;n*=2}return i}function r(){y=n(W,H),b=n(V,X),S=n(z,q),I=n(J,Y)}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++)A[32767+r]=n,T[32767+r]=[],T[32767+r][1]=n,T[32767+r][0]=r;for(var i=-(t-1);-e>=i;i++)A[32767+i]=n,T[32767+i]=[],T[32767+i][1]=n,T[32767+i][0]=t-1+i;e<<=1,t<<=1}}function o(){for(var e=0;256>e;e++)j[e]=19595*e,j[e+256>>0]=38470*e,j[e+512>>0]=7471*e+32768,j[e+768>>0]=-11059*e,j[e+1024>>0]=-21709*e,j[e+1280>>0]=32768*e+8421375,j[e+1536>>0]=-27439*e,j[e+1792>>0]=-5329*e}function a(e){for(var t=e[0],n=e[1]-1;n>=0;)t&1<<n&&(G|=1<<E),n--,E--,0>E&&(255==G?(s(255),s(0)):s(G),E=7,G=0)}function s(e){M.push(k[e])}function c(e){s(e>>8&255),s(255&e)}function u(e,t){var n,r,i,o,a,s,c,u,l,f=0;const d=8,h=64;for(l=0;d>l;++l){n=e[f],r=e[f+1],i=e[f+2],o=e[f+3],a=e[f+4],s=e[f+5],c=e[f+6],u=e[f+7];var g=n+u,p=n-u,m=r+c,w=r-c,v=i+s,y=i-s,b=o+a,S=o-a,I=g+b,P=g-b,F=m+v,x=m-v;e[f]=I+F,e[f+4]=I-F;var D=.707106781*(x+P);e[f+2]=P+D,e[f+6]=P-D,I=S+y,F=y+w,x=w+p;var U=.382683433*(I-x),C=.5411961*I+U,T=1.306562965*x+U,A=.707106781*F,L=p+A,M=p-A;e[f+5]=M+C,e[f+3]=M-C,e[f+1]=L+T,e[f+7]=L-T,f+=8}for(f=0,l=0;d>l;++l){n=e[f],r=e[f+8],i=e[f+16],o=e[f+24],a=e[f+32],s=e[f+40],c=e[f+48],u=e[f+56];var G=n+u,E=n-u,O=r+c,_=r-c,B=i+s,k=i-s,j=o+a,N=o-a,W=G+j,H=G-j,z=O+B,q=O-B;e[f]=W+z,e[f+32]=W-z;var V=.707106781*(q+H);e[f+16]=H+V,e[f+48]=H-V,W=N+k,z=k+_,q=_+E;var X=.382683433*(W-q),J=.5411961*W+X,Y=1.306562965*q+X,K=.707106781*z,Q=E+K,Z=E-K;e[f+40]=Z+J,e[f+24]=Z-J,e[f+8]=Q+Y,e[f+56]=Q-Y,f++}var $;for(l=0;h>l;++l)$=e[l]*t[l],R[l]=$>0?$+.5|0:$-.5|0;return R}function l(){c(65504),c(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),c(1),c(1),s(0),s(0)}function f(e,t){c(65472),c(17),s(8),c(t),c(e),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1)}function d(){c(65499),c(132),s(0);for(var e=0;64>e;e++)s(x[e]);s(1);for(var t=0;64>t;t++)s(D[t])}function h(){c(65476),c(418),s(0);for(var e=0;16>e;e++)s(W[e+1]);for(var t=0;11>=t;t++)s(H[t]);s(16);for(var n=0;16>n;n++)s(z[n+1]);for(var r=0;161>=r;r++)s(q[r]);s(1);for(var i=0;16>i;i++)s(V[i+1]);for(var o=0;11>=o;o++)s(X[o]);s(17);for(var a=0;16>a;a++)s(J[a+1]);for(var u=0;161>=u;u++)s(Y[u])}function g(){c(65498),c(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0)}function p(e,t,n,r,i){var o,s=i[0],c=i[240];const l=16,f=63,d=64;for(var h=u(e,t),g=0;d>g;++g)L[N[g]]=h[g];var p=L[0]-n;n=L[0],0==p?a(r[0]):(o=32767+p,a(r[A[o]]),a(T[o]));for(var m=63;m>0&&0==L[m];m--);if(0==m)return a(s),n;for(var w,v=1;m>=v;){for(var y=v;0==L[v]&&m>=v;++v);var b=v-y;if(b>=l){w=b>>4;for(var S=1;w>=S;++S)a(c);b=15&b}o=32767+L[v],a(i[(b<<4)+A[o]]),a(T[o]),v++}return m!=f&&a(s),n}function m(){for(var e=String.fromCharCode,t=0;256>t;t++)k[t]=e(t)}function w(e){if(0>=e&&(e=1),e>100&&(e=100),P!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),P=e}}function v(){var t=(new Date).getTime();e||(e=50),m(),r(),i(),o(),w(e);(new Date).getTime()-t}var y,b,S,I,P,F=(Math.round,Math.floor),x=new Array(64),D=new Array(64),U=new Array(64),C=new Array(64),T=new Array(65535),A=new Array(65535),R=new Array(64),L=new Array(64),M=[],G=0,E=7,O=new Array(64),_=new Array(64),B=new Array(64),k=new Array(256),j=new Array(2048),N=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],H=[0,1,2,3,4,5,6,7,8,9,10,11],z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],q=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],V=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],J=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],Y=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&w(t),M=new Array,G=0,E=7,c(65496),l(),d(),f(e.width,e.height),h(),g();var i=0,o=0,s=0;G=0,E=7,this.encode.displayName="_encode_";for(var u,m,v,P,F,x,D,T,A,R=e.data,L=e.width,k=e.height,N=4*L,W=0;k>W;){for(u=0;N>u;){for(F=N*W+u,x=F,D=-1,T=0,A=0;64>A;A++)T=A>>3,D=4*(7&A),x=F+T*N+D,W+T>=k&&(x-=N*(W+1+T-k)),u+D>=N&&(x-=u+D-N+4),m=R[x++],v=R[x++],P=R[x++],O[A]=(j[m]+j[v+256>>0]+j[P+512>>0]>>16)-128,_[A]=(j[m+768>>0]+j[v+1024>>0]+j[P+1280>>0]>>16)-128,B[A]=(j[m+1280>>0]+j[v+1536>>0]+j[P+1792>>0]>>16)-128;i=p(O,U,i,y,S),o=p(_,C,o,b,I),s=p(B,C,s,b,I),u+=32}W+=8}if(E>=0){var H=[];H[1]=E+1,H[0]=(1<<E+1)-1,a(H)}if(c(65497),n){for(var z=M.length,q=new Uint8Array(z),V=0;z>V;V++)q[V]=M[V].charCodeAt();M=[];(new Date).getTime()-r;return q}var X="data:image/jpeg;base64,"+btoa(M.join(""));M=[];(new Date).getTime()-r;return X},v()}e.exports=n}});
//# sourceMappingURL=2.chunk.js.map