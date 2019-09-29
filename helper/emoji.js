const map = {
	'\ue513' : "\ud83c\udde8\ud83c\uddf3",
	ac: 'dss'
};

function wx2uni(emoji) {
	return map[emoji];
}

function uni2wx(emoji) {
	return v2k(emoji);
}

function v2k(search_value) {
	for(var key in map){
	    if(map[key] == search_value){
	        return key;
	    }
	}
}

function encode_unicode(str) {
	var res = [];  
	for ( var i=0; i<str.length; i++ ) {  
		res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);  
	}  
	return "\\u" + res.join("\\u");  
}
function decode_unicode(str) {
    str = str.replace(/\\/g, "%");  
    return unescape(str);  
}

export default {
	wx2uni,
	uni2wx,
}