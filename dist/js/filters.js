$(document).ready(function(){function t(t,n){$(t).click(function(){$("img").removeClass().addClass(n)})}function n(){$(l).velocity({left:"-100%"},{duration:400,easing:"swing"},[20,50]),$("img").removeClass()}function e(){$(l).velocity({left:"0"},{duration:400,easing:"swing"},[20,50]).addClass("panel-bottom").css("height",i)}function o(){$("#holder").css("min-height",u)}var a=["saturate","saturotate","rotamatrix","tablen","dishue","matrix","matrix-dos","huerotate","luminance","discrete","discrete-dos","table","table-dos","identity","linear","gamma","turbulence","sepia","turbu-map","fematrix-uno","fematrix-dos","map-uno","map-dos","blur-uno","blur-dos","blur-tres","morpho-uno","morpho-dos","morpho-tres","morpho-cuatro"],i=$(".section-buttons").outerHeight(),r=$("picture").find("img"),u=$(r).outerHeight(),s=$(".section-buttons").find("button"),b=$("#panel-btn-close"),l=$(".panel"),m=($(".panel-info"),$(".btn-saturate")),d=$(".btn-saturotate"),c=$(".btn-rotamatrix"),p=$(".btn-tablen"),h=$(".btn-multitable"),g=$(".btn-dishue"),f=$(".btn-matrix"),v=$(".btn-matrix-dos"),x=$(".btn-hueRotate"),y=$(".btn-luminance"),S=$(".btn-discrete"),C=$(".btn-discrete-dos"),U=$(".btn-table"),k=$(".btn-table-dos"),B=$(".btn-identity"),E=$(".btn-linear"),H=$(".btn-gamma"),I=$(".btn-turbulence"),w=$(".btn-sepia"),A=$(".btn-turbu-map"),L=$(".btn-con-matrix-uno"),M=$(".btn-con-matrix-dos"),N=$(".btn-map-uno"),R=$(".btn-map-dos"),T=$(".btn-blur-uno"),j=$(".btn-blur-dos"),q=$(".btn-blur-tres"),z=$(".btn-morpho-uno"),D=$(".btn-morpho-dos"),F=$(".btn-morpho-tres"),G=$(".btn-morpho-cuatro");$(s).click(function(){e()}),$(b).click(function(){n()}),o(),t(m,a[0]),t(d,a[1]),t(c,a[2]),t(p,a[3]),t(h,a[4]),t(g,a[5]),t(f,a[6]),t(v,a[7]),t(x,a[8]),t(y,a[9]),t(S,a[10]),t(C,a[11]),t(U,a[12]),t(k,a[13]),t(B,a[14]),t(E,a[15]),t(H,a[16]),t(I,a[17]),t(w,a[18]),t(A,a[19]),t(L,a[20]),t(M,a[21]),t(N,a[22]),t(R,a[23]),t(T,a[24]),t(j,a[25]),t(q,a[26]),t(z,a[27]),t(D,a[28]),t(F,a[29]),t(G,a[30]);var J=document.getElementById("slider-saturate");noUiSlider.create(J,{start:[0],step:.1,range:{min:[0],max:[1]}}),J.noUiSlider.on("change",function(){var t=J.noUiSlider.get(),n=document.getElementById("saturate-value");n.setAttributeNS(null,"values",t)});var K=document.getElementById("slider-saturate-value");J.noUiSlider.on("update",function(t,n){K.innerHTML=t[n]})});