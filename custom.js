function load() {
    var mydata = JSON.parse(data);
    var out = "";
    var i;
    for(i = 0; i<mydata.length; i++) {
        
        out += '<div class="col-md-3 col-sm-3 col-xs-12"><div class="product_block"><h3 class="category_title">' + mydata[i].category + '</h3><p class="item_type">' + mydata[i].type + '</p><h2 class="item_title">' + mydata[i].item + '</h2><hr/><p class="product_brand"> ' + mydata[i].brand   + '</p><p class="product_quantity text-right"> Qty / ' + mydata[i].qty + '</p></div></div>';
    }
    document.getElementById("id01").innerHTML = out;
}
