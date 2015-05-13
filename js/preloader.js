// easiest method to preload images.
// feel free to copy n distribute if you want
// cheers, bebel

var travelerPics = new Array();
travelerPics[0] = "wp-content/themes/traveler/images/layout/background.jpg";
travelerPics[1] = "wp-content/themes/traveler/images/slideshow/background.png";
travelerPics[2] = "wp-content/themes/traveler/images/slideshow/contact1.png";
travelerPics[3] = "wp-content/themes/traveler/images/slideshow/contact2.png";
travelerPics[4] = "wp-content/themes/traveler/images/navigation/bar.png";
travelerPics[5] = "wp-content/themes/traveler/images/navigation/button_middle27.png";
travelerPics[6] = "wp-content/themes/traveler/images/navigation/dropdown/divider.png";
travelerPics[7] = "wp-content/themes/traveler/images/navigation/dropdown/dropdown.png";
travelerPics[8] = "wp-content/themes/traveler/images/navigation/dropdown/dropdown_mouseover.png";
travelerPics[9] = "wp-content/themes/traveler/images/slideshow/loading.gif";
travelerPics[10] = "wp-content/themes/traveler/images/slideshow/goleft.png";
travelerPics[11] = "wp-content/themes/traveler/images/slideshow/goleft2.png";
travelerPics[12] = "wp-content/themes/traveler/images/slideshow/goright.png";
travelerPics[13] = "wp-content/themes/traveler/images/slideshow/goright2.png";
travelerPics[14] = "wp-content/themes/traveler/images/layout/divider_vert.png";
travelerPics[15] = "wp-content/themes/traveler/images/layout/badge.png";
travelerPics[16] = "wp-content/themes/traveler/images/sidebar/sidebar.png";
travelerPics[17] = "wp-content/themes/traveler/images/category_top.png";
travelerPics[18] = "wp-content/themes/traveler/images/sidebar/sidebar_middle.png";
travelerPics[19] = "wp-content/themes/traveler/images/sidebar/category_bottom.png";
travelerPics[20] = "wp-content/themes/traveler/images/sidebar/divider.png";
travelerPics[21] = "wp-content/themes/traveler/images/sidebar/category_arrow.png";
travelerPics[22] = "wp-content/themes/traveler/images/sidebar/sidebar_middle.png";
travelerPics[23] = "wp-content/themes/traveler/images/buttons/readmore_main1.png";
travelerPics[24] = "wp-content/themes/traveler/images/buttons/readmore_main2.png";
travelerPics[25] = "wp-content/themes/traveler/images/buttons/button_basic.png";
travelerPics[26] = "wp-content/themes/traveler/images/buttons/button_long.png";
travelerPics[27] = "wp-content/themes/traveler/images/layout/divider_horz.png";
travelerPics[28] = "wp-content/themes/traveler/images/blog/divder.png";
travelerPics[29] = "wp-content/themes/traveler/images/buttons/button_basic.png";
travelerPics[30] = "wp-content/themes/traveler/images/buttons/button_long.png";
travelerPics[31] = "wp-content/themes/traveler/images/layout/divider_horz.png";
travelerPics[32] = "wp-content/themes/traveler/images/post/filedUnder.png";
travelerPics[33] = "wp-content/themes/traveler/images/post/input.png";
travelerPics[34] = "wp-content/themes/traveler/images/post/textarea.png";
travelerPics[35] = "wp-content/themes/traveler/images/post/submit_1.png";
travelerPics[36] = "wp-content/themes/traveler/images/post/submit_2.png";
travelerPics[37] = "wp-content/themes/traveler/images/sidebar/tooltip.png";
travelerPics[38] = "wp-content/themes/traveler/images/sidebar/newsletter.png";
travelerPics[39] = "wp-content/themes/traveler/images/sidebar/submit_1.png";
travelerPics[40] = "wp-content/themes/traveler/images/sidebar/submit_2.png";
travelerPics[41] = "wp-content/themes/traveler/images/buttons/left.png";
travelerPics[42] = "wp-content/themes/traveler/images/buttons/left2.png";
travelerPics[43] = "wp-content/themes/traveler/images/buttons/right.png";
travelerPics[44] = "wp-content/themes/traveler/images/buttons/right2.png";
travelerPics[45] = "wp-content/themes/traveler/images/footer/twitter.png";
travelerPics[46] = "wp-content/themes/traveler/images/footer/search.png";
travelerPics[47] = "wp-content/themes/traveler/images/footer/search_1.png";
travelerPics[48] = "wp-content/themes/traveler/images/footer/search_2.png";
travelerPics[49] = "wp-content/themes/traveler/images/footer/divider.png";
travelerPics[50] = "wp-content/themes/traveler/images/gallery/polaroid.png";


function preload()
{
  for (i = 0; i < travelerPics.length; i++) {
    var trvlP = new Image();
    trvlP.src = travelerPics[i];
  }
}

