function Profile(messenger){
	const container = new Container();
	this.login = async (username, password) => {
		return new Promise((resolve) => {
			await messenger.subscribe( { channel: "login" }, resolve);
			await messenger.publish({ username, password }, { channel: "login", isOutboundMessage: true });
		});
	};
};