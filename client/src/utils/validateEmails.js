const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
	const invalidEmails = emails
	.split(',')
	.map(email => email.trim())
	.filter(email => re.test(email) === false)

	if(invalidEmails.length){
		// Use `` to quote template strings.
		return `These emails are invalid: ${invalidEmails}`;
	}
	return;

 
};

/*
extra work
解决最后一个comma的问题，现在我们默认我们不能在末尾添加comma，
但是显然这应该被允许
*/