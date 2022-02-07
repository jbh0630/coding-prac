var longestCommonPrefix = function(strs) {
	if(strs.length === 0) return "";
    if(strs.length === 1) return strs[0];
    let finalStr = '';
	for(let i=0; i<strs[0].length; i++) {
		let compareChar = strs[0][i];
		for(let j=1; j<strs.length; j++) {
			let compareToChar = strs[j][i];
			if(compareChar !== compareToChar) {
				return finalStr;
			}
		}
		finalStr += compareChar; 
	}
    return finalStr;
};
