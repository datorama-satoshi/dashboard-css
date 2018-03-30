////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////// demoCSSInjection.js
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
var widgets = parent.document.querySelectorAll(".widget-item");
var last = widgets[widgets.length -1]
var gridHeight = last.offsetTop + last.offsetHeight + "px"
///////////////////////////////////////////////////////////
var cssText =`
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600');

/************ Widgets ************/
.WHITE_FLAT_THEME .type-customhtml{ border-left:0px; border-right:0px; border-bottom:0px;}
.WHITE_FLAT_THEME .type-customhtml .inner-widget-container{right:0px !important; top:0px !important; left:0px !important;}
.WHITE_FLAT_THEME .has-title{ box-shadow: 0px 0px 8px rgba(0,0,0,0.1); border:20px solid white !important;}
.WHITE_FLAT_THEME .type-customhtml.has-title .new-widget-title{top:-5px !important; left:0px !important;}
.WHITE_FLAT_THEME .type-customhtml:not(.has-title)  .widget-data{top:-20px !important; bottom:-1px !important;}
.WHITE_FLAT_THEME .type-customhtml:not(.has-title) {background-color:transparent !important;}
.WHITE_FLAT_THEME .has-title:before{content:'';position:absolute; width:calc(100% + 40px); height:3px; background:linear-gradient(to right, #0078FF, #003E8B); top:-20px; left:-20px;}
.WHITE_FLAT_THEME .filter-button-black{opacity:0}

/******* General Fonts ******/
.WHITE_FLAT_THEME .new-widget span{font-weight: bold;}
.WHITE_FLAT_THEME .new-widget .title-label{font-family:'Montserrat', sans-serif; font-weight:bold; color: #003E8B}
.WHITE_FLAT_THEME .new-widget .new-widget-title .left-part{top:5px; height:26px; top:3px;}
.WHITE_FLAT_THEME .compareStatusBarWigetTitle-PrevText{ right:-15px !important; top:55px !important;}
.WHITE_FLAT_THEME .highcharts-yaxis-labels span{color:#ababab !important; background-color: #fafafa !important; }
.WHITE_FLAT_THEME .compareStatusBarWigetTitle-DiffText{font-weight:bold; font-size:16px;}
.WHITE_FLAT_THEME .widget-metricmenu-text {color: #ababab; font-weight: bold;}
.WHITE_FLAT_THEME .highcharts-container .highcharts-data-labels > div > span > div{font-size:14px !important; background-color:white; border:0px solid #ccc !important;}
.WHITE_FLAT_THEME .highcharts-container  .highcharts-data-labels > div > span{font-weight:bold !important; font-size:12px !important;}
.WHITE_FLAT_THEME .type-generic-gauge .highcharts-tracker path { stroke: #0075f9 !important;}

/******* Dropdown Filters ******/
.WHITE_FLAT_THEME .type-generic-widget-filter .ui-multiselect-selected-container{ border:2px solid #e5e5e5; top:12px; border-radius:5px;}
.WHITE_FLAT_THEME .type-generic-toggle-widget .ui-multiselect-container{ width:95% !important;}
.WHITE_FLAT_THEME .widget_filter_item.selected {background-color: #003E8B; color: white; font-weight: bold;}
.WHITE_FLAT_THEME #pageData .new-dashboard li[data-sizey="3"] .type-generic-widget-filter.has-title .inner-widget-container{top:20px !important;}

/******* Table Format ******/
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .k-grid-content>table>tbody>tr { background-color:#f5f5f5 !important;}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .k-grid-content>table>tbody>.k-alt{ background-color:#fff !important}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-content tbody td{ font-size:1.1em; background-color:transparent !important;  border-color: transparent !important;}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-header{background-color:#e5e5e5 !important;}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-header .k-header .k-link { color: #777; font-size: 1.15em;  height: 35px; padding-top: 22px; background: linear-gradient(to bottom, #f4f4f4, #e5e5e5);  }
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-content>table>tbody>tr>td:first-child{height:35px !important; background-color:transparent !important; font-size:1.25em !important; color:#003E8B !important; padding-left:25px; letter-spacing:0px; font-weight:600;}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-header .k-header .k-link{ text-align:right; padding-right:15px; }
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-header .k-header:first-of-type .k-link{ text-align:left; padding-left:25px;}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-header{border-bottom:2px solid #cfcfcf; background-color:#e5e5e5 !important;}
.WHITE_FLAT_THEME .new-widget:not(.type-generic-timeline) .widget_table .k-grid-content .highlightRulesCell {height: 20px;}

/******* Crosss Table Format ******/
.WHITE_FLAT_THEME .controll_container{ background-color:#fff;}
.WHITE_FLAT_THEME table.pvtTable tr th{background-color:#fff}
.WHITE_FLAT_THEME table.pvtTable tr th{ height:25px; font-size:13px; line-height:25px;}
.WHITE_FLAT_THEME .bg_a.tr_width_childs .pvtRowLabel{ color:#115992;}
.WHITE_FLAT_THEME .bg_a.tr_width_childs .pvtVal{color:#115992;}
.WHITE_FLAT_THEME table.pvtTable tr th{line-height:25px;}
.WHITE_FLAT_THEME table.pvtTable tr td{line-height:25px;}
.WHITE_FLAT_THEME .type-generic-crosstable .head_container > table{ height: 50px !important;}
.WHITE_FLAT_THEME .type-generic-crosstable .main_container{ top:50px !important; border-top: 2px solid #e5e5e5;}
.WHITE_FLAT_THEME .type-generic-crosstable .head_container .gridTableHeadline{line-height:40px !important}

/******** Removing Borders ********/
.WHITE_FLAT_THEME .widget-border{visibility: hidden;}
.WHITE_FLAT_THEME .new-widget .widget-top-border,{display:none;}
.WHITE_FLAT_THEME .new-widget .widget-bottom-border{display:none;}
.WHITE_FLAT_THEME .new-widget .widget-right-border{display:none;}
.WHITE_FLAT_THEME .new-widget .widget-left-border{display:none;}
.WHITE_FLAT_THEME .widget-border-on-hover.no-widget-padding .widget-left-border{display:none !important;}
.WHITE_FLAT_THEME .widget-border-on-hover.no-widget-padding .widget-top-border{display:none !important;}
.WHITE_FLAT_THEME .widget-border-on-hover.no-widget-padding .widget-bottom-border{display:none !important;}
.WHITE_FLAT_THEME .widget-border-on-hover.no-widget-padding .widget-right-border{display:none !important;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizex="5"] { width: 16.65%;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizex="6"] { width: 19.98%;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizex="8"] { width: 26.64%;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizex="10"]{ width: 33.3%;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizex="14"]{ width: 46.62%;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizex="30"]{ width: 100%;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizey="3"] { height: 90px;}
.WHITE_FLAT_THEME .new-dashboard li[data-sizey="4"] { height: 120px;}

/************ END OF CSS *************/
`;
///////////////////////////////////////////////////////////
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML =cssText;
parent.document.getElementById("pageData").appendChild(style);
