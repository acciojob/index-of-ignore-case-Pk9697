function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1=s1.toLowerCase()
	s2=s2.toLowerCase()

	// let i=0,j=0;
	let n1=s1.length,n2=s2.length
	
	for(let i=0;i<n1;++i){

		for(let j=0;j<n2;++j){
			if(s1[i+j]!=s2[j]){
				break;
			}
			if(j==n2-1){
				return i;
			}
		}
		 
	}

	return -1;
	
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
