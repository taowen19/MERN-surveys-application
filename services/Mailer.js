const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
	// does not have to accept a survey object, just any object with subject field and recipients field.
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email("no-reply@emaily.com");
		this.subject = subject;
		this.body = new helper.Content("text/html", content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body); //Mail built-in function from sendgrid, register the content
		this.addClickTracking();
		this.addRecipients();
	}

	// Map email address from recipients parameter to this Mailer object.
	// Return an array of Email objects.
	formatAddresses(recipients) {
		//here email wrapped with curly braces to mean an object
		//and it has to be wrapped with braces cause it is followed by an arrow function
		return recipients.map(({ email }) => {
			return new helper.Email(email);
		});
	}

	// self define function, mostly use sendgrid api.
	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new helper.Personalization();

		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}
	async send() {
		const request = this.sgApi.emptyRequest({
			method: "POST",
			path: "/v3/mail/send",
			body: this.toJSON()
		});

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
